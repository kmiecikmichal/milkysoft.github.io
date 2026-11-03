import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/lang'
import './CTA.css'

// Public by design - Web3Forms access keys are meant to ship in the client bundle.
// Abuse protection (captcha, domain allowlist, recipient address) is configured
// server-side in the Web3Forms dashboard, never here.
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = '10a937ff-a425-42a9-91fa-1342a944e56e'

// Client-side throttle. Not a security control (trivially bypassed), just a guard
// against double-clicks and accidental repeat submissions.
const RESUBMIT_COOLDOWN_MS = 15000
const REQUEST_TIMEOUT_MS = 15000

const starburst = (() => {
  const points = []
  for (let i = 0; i < 32; i++) {
    const r = i % 2 ? 34 : 50
    const a = (Math.PI * i) / 16
    points.push(`${(50 + r * Math.sin(a)).toFixed(2)},${(50 - r * Math.cos(a)).toFixed(2)}`)
  }
  return points.join(' ')
})()

const CTA = () => {
  const { t } = useLang()
  const copy = t.cta
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [fieldError, setFieldError] = useState('')
  const [sentTo, setSentTo] = useState('')
  const [lastSubmitAt, setLastSubmitAt] = useState(0)
  const inputRef = useRef(null)

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    // Honeypot: real users never see this field, bots fill everything in.
    if (e.target.botcheck?.checked) return

    if (!validateEmail(email)) {
      setFieldError(copy.invalid)
      inputRef.current?.focus()
      return
    }

    const sinceLast = Date.now() - lastSubmitAt
    if (lastSubmitAt && sinceLast < RESUBMIT_COOLDOWN_MS) {
      setFieldError(copy.cooldown)
      return
    }

    setFieldError('')
    setStatus('sending')

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    try {
      const formData = new FormData()
      formData.append('access_key', WEB3FORMS_ACCESS_KEY)
      formData.append('email', email.trim())
      formData.append('subject', 'New Contact Form Submission from Landing Page')
      formData.append('from_name', 'Milkysoft Landing Page')
      formData.append('botcheck', '')

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
        signal: controller.signal
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data.success) {
        throw new Error(data.message || `Request failed with status ${response.status}`)
      }

      setLastSubmitAt(Date.now())
      setSentTo(email.trim())
      setEmail('')
      setStatus('sent')
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    } finally {
      clearTimeout(timeout)
    }
  }

  return (
    <section className="cta-section section" id="contact">
      <div className="container">
        <div className="cta-layout">
          <div className="cta-intro">
            <h2 className="section-title rise">{copy.title}</h2>
            <p className="section-subtitle rise-fade">{copy.intro}</p>
          </div>

          {/* The grid peeks out from under the form and the starburst sits on
              its corner like a seal: the hero's layering, on the form */}
          <div className="cta-side">
            <span className="cta-grid" aria-hidden="true" />
            <svg className="cta-starburst" viewBox="0 0 100 100" aria-hidden="true">
              <polygon points={starburst} />
            </svg>
            <div className="cta-panel" aria-live="polite">
              {status === 'sent' ? (
                <div className="cta-sent">
                  <svg className="cta-check" viewBox="0 0 48 48" aria-hidden="true">
                    <circle cx="24" cy="24" r="22" />
                    <path d="M14 24.5l7 7 13-14" />
                  </svg>
                  <p className="cta-sent-title">{copy.sentTitle}</p>
                  <p className="cta-sent-body">
                    {copy.sentBody} <strong>{sentTo}</strong>.
                  </p>
                  <button type="button" className="cta-again" onClick={() => setStatus('idle')}>
                    {copy.again}
                  </button>
                </div>
              ) : (
                <form className="cta-form" onSubmit={handleSubmit} noValidate>
                  <label className="cta-label" htmlFor="cta-email">
                    {copy.label}
                  </label>
                  <div className="cta-row">
                    <input
                      ref={inputRef}
                      id="cta-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder={copy.placeholder}
                      className="email-input"
                      value={email}
                      aria-invalid={fieldError ? 'true' : undefined}
                      aria-describedby={fieldError ? 'cta-email-error' : undefined}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (fieldError) setFieldError('')
                      }}
                      disabled={status === 'sending'}
                    />

                    {/* Honeypot - hidden from users and assistive tech, visible to bots. */}
                    <label className="honeypot" aria-hidden="true">
                      Do not fill this out
                      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
                    </label>

                    <button type="submit" className="btn btn-primary cta-submit" disabled={status === 'sending'}>
                      {status === 'sending' ? (
                        <>
                          <span className="spinner" aria-hidden="true" />
                          {copy.sending}
                        </>
                      ) : (
                        copy.send
                      )}
                    </button>
                  </div>

                  {fieldError && (
                    <p className="cta-field-error" id="cta-email-error">
                      {fieldError}
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="cta-field-error">{copy.failed}</p>
                  )}

                  <p className="cta-consent">
                    {copy.consentBefore}
                    <Link to="/privacy-policy">{copy.consentLink}</Link>
                    {copy.consentAfter}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
