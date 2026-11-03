#!/usr/bin/env bash
# Downloads Google Fonts locally (woff2) and emits a self-hosted @font-face stylesheet.
set -euo pipefail

ROOT="/Users/michalkmiecik/Repositories/Cursor/milkysoft-react"
OUT_DIR="$ROOT/public/fonts"
CSS_OUT="$ROOT/src/fonts.css"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

mkdir -p "$OUT_DIR"
: > "$CSS_OUT.raw"

fetch() {
  echo "  fetching: $1" >&2
  curl -sS -A "$UA" "$1" >> "$CSS_OUT.raw"
  echo "" >> "$CSS_OUT.raw"
}

echo "Fetching CSS..." >&2
fetch "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
# Inter Tight: the display cut for headlines
fetch "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&display=swap"

python3 - "$CSS_OUT.raw" "$CSS_OUT" "$OUT_DIR" <<'PY'
import re, sys, subprocess, hashlib, os

raw_path, css_path, out_dir = sys.argv[1], sys.argv[2], sys.argv[3]
css = open(raw_path, encoding='utf-8').read()

# Keep only the character subsets we actually serve: latin (English UI) and
# latin-ext (Polish diacritics in the privacy policy). Everything else is dead weight.
KEEP = {'latin', 'latin-ext', None}

blocks = re.findall(r'(/\* ([a-z0-9-]+) \*/\s*)?@font-face \{.*?\}', css, re.S)
faces = re.finditer(r'(?:/\* ([a-z0-9-]+) \*/\s*)?(@font-face \{.*?\})', css, re.S)

kept, downloaded = [], {}
for m in faces:
    subset, body = m.group(1), m.group(2)
    if subset is not None and subset not in KEEP:
        continue
    url_m = re.search(r"url\((https://fonts\.gstatic\.com/[^)]+)\)", body)
    if not url_m:
        continue
    url = url_m.group(1)

    fam = re.search(r"font-family:\s*'([^']+)'", body).group(1)
    weight = re.search(r"font-weight:\s*(\d+)", body)
    weight = weight.group(1) if weight else '400'
    slug = re.sub(r'[^a-z0-9]+', '-', fam.lower()).strip('-')
    tag = subset or 'icons'
    fname = f"{slug}-{weight}-{tag}.woff2"

    if url not in downloaded:
        dest = os.path.join(out_dir, fname)
        subprocess.run(['curl', '-sS', '-o', dest, url], check=True)
        downloaded[url] = fname
        print(f"  saved: {fname} ({os.path.getsize(dest)} bytes)", file=sys.stderr)

    body = body.replace(url, f"/fonts/{downloaded[url]}")
    if 'font-display' not in body:
        body = body.replace('font-style: normal;', 'font-style: normal;\n  font-display: swap;')
    header = f"/* {fam} {weight} {tag} */\n"
    kept.append(header + body)

# The Material Symbols helper class ships alongside its @font-face; keep it verbatim.
helper = re.search(r'\.material-symbols-rounded \{.*?\}', css, re.S)
if helper:
    kept.append(helper.group(0))

open(css_path, 'w', encoding='utf-8').write(
    "/* Self-hosted webfonts. Generated - do not edit by hand.\n"
    "   Regenerate with: scripts/fetch-fonts.sh\n"
    "   Self-hosted so no visitor IP is sent to Google (GDPR). */\n\n"
    + "\n\n".join(kept) + "\n"
)
print(f"Wrote {css_path} with {len(kept)} rules, {len(downloaded)} font files", file=sys.stderr)
PY

rm -f "$CSS_OUT.raw"
