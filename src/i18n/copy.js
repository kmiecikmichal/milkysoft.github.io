// Polish and English copy. Written separately for each language, not translated
// word for word: the wordplay only works in its own language.
// Icons are Phosphor names, resolved in the components.

const pl = {
  meta: {
    title: 'Milkysoft - AI na Twoich serwerach',
    langLabel: 'Język',
    langName: 'Polski'
  },
  skipLink: 'Przejdź do treści',
  privacy: {
    metaTitle: 'Polityka Prywatności — Milkysoft',
    contents: 'Spis treści'
  },
  notFound: {
    title: 'Nie ma takiej strony',
    text: 'Ten adres nie istnieje albo strona została przeniesiona.',
    link: 'Wróć na stronę główną'
  },
  nav: {
    label: 'Główna',
    items: {
      services: 'Usługi',
      process: 'Jak działamy',
      expertise: 'Wdrożenia',
      technologies: 'Technologie',
      team: 'Zespół'
    },
    cta: 'Umów rozmowę',
    logo: 'Milkysoft, na górę strony',
    home: 'Milkysoft, strona główna',
    open: 'Otwórz menu',
    close: 'Zamknij menu'
  },
  hero: {
    badge: 'Wdrożenia AI on-premise',
    titleLines: ['Co firmowe,', 'zostaje', 'w\u00A0firmie.'],
    // the file chips sit inline after the second line
    filesAfterLine: 1,
    filesLabel: 'Firmowe pliki: dokumenty, umowy i arkusze',
    cta: 'Umów rozmowę',
    link: 'Jak działamy',
    vertical: '0 B na zewnątrz',
    verticalLabel: 'Zero bajtów wysłanych poza Twoją sieć',
    photoAlt: '',
    kb: {
      title: 'Baza wiedzy',
      status: 'lokalnie',
      searching: 'Przeszukuję dokumenty',
      outbound: 'Wysłane poza sieć',
      outboundValue: '0 B',
      sample: 'Przykładowe dane',
      qa: [
        {
          scope: 'Dział prawny',
          q: 'Kiedy wygasa umowa z Nordline?',
          a: '31 marca 2027. Wypowiedzenie najpóźniej 3 miesiące przed końcem.',
          source: 'Umowa_Nordline.pdf',
          page: 's. 4'
        },
        {
          scope: 'Kadry',
          q: 'Ile dni urlopu ma nowy pracownik?',
          a: '20 dni w roku. Po 10 latach stażu 26 dni.',
          source: 'Regulamin_pracy.pdf',
          page: 's. 12'
        },
        {
          scope: 'Zarząd',
          q: 'Co zarząd ustalił w sprawie biura w Krakowie?',
          a: 'Zgoda na najem od 1 lipca, budżet do 40 tys. zł miesięcznie.',
          source: 'Protokol_zarzadu_03.pdf',
          page: 's. 2'
        }
      ]
    },
    statement: [
      { text: 'Stawiamy model językowy na serwerze w Twojej firmie,' },
      { icon: 'HardDrives', tone: 'yellow' },
      { text: 'podłączamy go do firmowych dokumentów' },
      { icon: 'Files', tone: 'ink' },
      { text: 'i uczymy zespół' },
      { icon: 'UsersThree', tone: 'teal' },
      { text: 'z niego korzystać.' }
    ],
    promises: [
      { icon: 'WifiSlash', text: 'Może działać bez dostępu do internetu' },
      { icon: 'ShieldCheck', text: 'Dokumenty nie wychodzą poza Twoją sieć' },
      { icon: 'LockKey', text: 'Dostęp mają tylko uprawnieni użytkownicy' }
    ]
  },
  marquee: {
    label: 'Twoja baza wiedzy czyta',
    items: [
      'Umowy',
      'Regulaminy',
      'Procedury',
      'Dokumentację techniczną',
      'Zgłoszenia klientów',
      'Protokoły zarządu',
      'Oferty',
      'Instrukcje stanowiskowe',
      'Polityki bezpieczeństwa',
      'Bazy FAQ'
    ]
  },
  services: {
    title: 'Co robimy.',
    titleMuted: 'Na Twoim serwerze albo w prywatnej chmurze.',
    items: [
      {
        icon: 'BookOpenText',
        tone: 'yellow',
        title: 'Baza wiedzy z czatem',
        description:
          'Pracownicy zadają pytania na czacie, a model szuka odpowiedzi w firmowych dokumentach i bazach danych. Przy każdej odpowiedzi podaje dokument i numer strony, więc łatwo sprawdzić, czy się nie pomylił.',
        features: ['Pytasz o „wypowiedzenie”, znajduje „rozwiązanie umowy”', 'Rozumie pytania w wielu językach', 'Dostęp tylko dla uprawnionych użytkowników']
      },
      {
        icon: 'Robot',
        tone: 'blue',
        title: 'Aplikacje AI na zamówienie',
        description:
          'Budujemy narzędzia pod konkretny proces w Twojej firmie, jak ekstrakcja danych z aktów notarialnych, którą zrobiliśmy dla biura rzeczoznawców. Każde powstaje dla jednego klienta, pod jego dokumenty i systemy.',
        features: ['Projektowane od zera pod Twój proces', 'Połączone z systemami, których już używasz', 'W chmurze albo na Twoim serwerze']
      },
      {
        icon: 'HardDrives',
        tone: 'teal',
        title: 'Wdrożenie i opieka',
        description:
          'Dobieramy model i sprzęt, instalujemy wszystko w Twojej sieci i zostajemy przy projekcie: dopasowujemy system do Twoich dokumentów, pilnujemy jakości odpowiedzi i szkolimy zespół.',
        features: ['Testy przed uruchomieniem', 'Instalacja w Twojej sieci', 'Wsparcie po uruchomieniu']
      }
    ]
  },
  process: {
    title: 'Jak to wygląda.',
    titleMuted: 'Od rozmowy do modelu w Twojej sieci.',
    steps: [
      {
        title: 'Rozmowa',
        description: 'Opowiadasz, z jakimi dokumentami pracuje Twój zespół i co chcesz usprawnić. Oceniamy, czy AI ma tu sens i od czego zacząć.'
      },
      {
        title: 'Projekt',
        description: 'Dobieramy model, sprzęt i sposób podłączenia do Twoich systemów.'
      },
      {
        title: 'Instalacja',
        description: 'Instalujemy wszystko na miejscu. U pierwszego klienta zajęło to jeden dzień.'
      },
      {
        title: 'Wsparcie',
        description: 'Szkolimy zespół, zbieramy uwagi z pierwszych tygodni i na ich podstawie dopracowujemy działanie systemu: trafność wyszukiwania, jakość i szybkość odpowiedzi.'
      }
    ]
  },
  work: {
    title: 'Co już działa.',
    titleMuted: 'Jedno wdrożenie i jeden pilotaż.',
    live: {
      status: 'Działa u klienta',
      client: 'Biuro rzeczoznawców majątkowych',
      title: 'Agent do ekstrakcji danych z aktów notarialnych',
      lead: 'Rzeczoznawcy wypisywali z aktów notarialnych dane do wyceny ręcznie. Teraz robi to za nich agent, znacznie szybciej, a rzeczoznawca może łatwo sprawdzić, czy dane zostały wyciągnięte poprawnie.',
      tiles: [
        { icon: 'Timer', tone: 'blue', value: 'Minuty → sekundy', label: 'Czas na jeden akt: kilkanaście minut ręcznie, kilkadziesiąt sekund z agentem.', wide: true },
        { icon: 'Wrench', tone: 'teal', value: '1 dzień', label: 'Czas instalacji u klienta' },
        { icon: 'WifiSlash', tone: 'yellow', value: '2 wersje', label: 'W chmurze albo na serwerze bez dostępu do internetu' }
      ]
    },
    pilot: {
      status: 'Pilotaż w toku',
      client: 'Szpitale, przychodnie i kliniki',
      title: 'Wyszukiwarka wiedzy dla placówek medycznych',
      lead: 'Zamiast przekopywać dokumenty i bazę danych placówki, personel pyta czat, który odpowiada na podstawie obu tych źródeł.',
      tiles: [
        { icon: 'Files', tone: 'terracotta', value: 'Dokument + strona', label: 'Pod każdą odpowiedzią. Personel może ją sprawdzić w oryginale.', wide: true },
        { icon: 'HardDrives', tone: 'yellow', value: 'Lokalnie', label: 'Model i dokumenty na serwerze placówki' },
        { icon: 'Clock', tone: 'teal', value: '1–2 dni', label: 'Planowany czas instalacji u klienta' }
      ],
      soon: {
        badge: 'Wkrótce',
        title: 'Szykujemy demo do przetestowania w przeglądarce.',
        titleMuted: 'Baza wiedzy z tego pilotażu, na przykładowych dokumentach.',
        cta: 'Powiadom mnie'
      }
    },
    demo: {
      title: 'Agent',
      file: 'Akt_notarialny_1234.pdf',
      status: 'bez internetu',
      reading: 'Czytam dokument',
      found: 'Znalezione dane',
      derived: 'wyliczone',
      heading: 'AKT NOTARIALNY',
      reference: 'Repertorium A nr 1234/2026',
      doc: [
        [
          'Dnia ',
          [0, '12 marca 2026 r.'],
          ' przed notariuszem w Krakowie stawili się: ',
          [1, 'Jan Nowak'],
          ', zwany dalej Sprzedającym, oraz ',
          [2, 'Maria Kowalska'],
          ', zwana dalej Kupującą.'
        ],
        [
          '§ 1. Sprzedający oświadcza, że jest właścicielem ',
          [3, 'lokalu mieszkalnego nr 7 przy ul. Zielnej 15 w Krakowie'],
          ' o powierzchni użytkowej ',
          [4, '54,20 m²'],
          ', dla którego Sąd Rejonowy prowadzi księgę wieczystą ',
          [5, 'KR1P/00012345/6'],
          '.'
        ],
        [
          '§ 2. Sprzedający sprzedaje lokal Kupującej za cenę ',
          [6, '685 000 zł'],
          ' (sześćset osiemdziesiąt pięć tysięcy złotych).'
        ]
      ],
      fields: [
        { label: 'Data aktu', value: '12.03.2026' },
        { label: 'Sprzedający', value: 'Jan Nowak' },
        { label: 'Kupujący', value: 'Maria Kowalska' },
        { label: 'Nieruchomość', value: 'Lokal 7, ul. Zielna 15, Kraków' },
        { label: 'Powierzchnia', value: '54,20 m²' },
        { label: 'Księga wieczysta', value: 'KR1P/00012345/6' },
        { label: 'Cena', value: '685 000 zł' },
        { label: 'Cena za m²', value: '12 638 zł', derived: true }
      ],
      manual: 'Ręcznie',
      manualValue: 'kilkanaście minut',
      agent: 'Agent',
      agentValue: 'kilkadziesiąt sekund',
      estimate: 'Czas na jeden akt, dane od klienta',
      sample: 'Przykładowe dane',
      summary:
        'Przykład działania: agent czyta akt notarialny i wypisuje datę, strony, nieruchomość, powierzchnię, numer księgi wieczystej i cenę, a potem wylicza cenę za metr. Według klienta zajmuje mu to kilkadziesiąt sekund zamiast kilkunastu minut pracy ręcznej.'
    }
  },
  tech: {
    title: 'Na czym to działa.',
    titleMuted: 'Bez konta u dostawcy AI.',
    items: [
      { icon: 'Brain', title: 'Modele open source', description: 'Na przykład Qwen, Gemma albo Llama. Wybieramy ten, który najlepiej radzi sobie z Twoimi dokumentami.' },
      { icon: 'Cpu', title: 'Działa w Twojej sieci', description: 'Na sprawdzonym oprogramowaniu open source, np. vLLM. Bez łączenia się z zewnętrznym API.' },
      { icon: 'FileMagnifyingGlass', title: 'RAG', description: 'Zanim model odpowie, wyszukiwarka znajduje w Twoich dokumentach fragmenty związane z pytaniem. Model odpowiada na ich podstawie i pokazuje, skąd je wziął.' },
      { icon: 'HardDrives', title: 'Na dostępnym sprzęcie', description: 'Model uruchamiamy na tym, co jest pod ręką: na Twoim serwerze albo na naszym urządzeniu. Jego konfigurację dobieramy do Twoich potrzeb.' },
      { icon: 'ListChecks', title: 'Testy jakości', description: 'Odpowiedzi sprawdzamy na własnym zestawie pytań testowych.' },
      { icon: 'Cloud', title: 'Chmura, jeśli wolisz', description: 'AWS, Azure albo GCP: na demo, testy lub Twoją prywatną chmurę.' }
    ]
  },
  team: {
    title: 'Z kim będziesz pracować.',
    titleMuted: 'Trzy osoby, od pierwszej rozmowy po wdrożenie.',
    people: [
      {
        name: 'Bartek',
        tone: 'yellow',
        role: 'Architektura i aplikacje',
        description: 'Projektuje architekturę, pisze backend i frontend. Odpowiada za modele językowe i wersje chmurowe.',
      },
      {
        name: 'Filip',
        tone: 'teal',
        role: 'On-premise i research',
        description: 'Testuje nowe modele, dobiera sprzęt i stawia modele, które działają bez dostępu do internetu.',
      },
      {
        name: 'Michał',
        tone: 'terracotta',
        role: 'Design i frontend',
        description: 'Projektuje ekrany, z których korzysta zespół klienta, i przenosi je do kodu. Ubiera je w logo i kolory firmy.',
      }
    ]
  },
  faq: {
    title: 'Częste pytania',
    intro: 'Nie ma tu Twojego pytania? Napisz na',
    items: [
      {
        q: 'Ile to kosztuje?',
        a: 'Każde wdrożenie wyceniamy osobno. Cena zależy głównie od tego, czy model stanie na Twoim sprzęcie, czy dostarczymy własny, ile źródeł danych trzeba podłączyć i ile osób będzie z niego korzystać. Konkretną kwotę podamy po wstępnych rozmowach.'
      },
      {
        q: 'Jaki sprzęt jest potrzebny?',
        a: 'Nasze dotychczasowe wdrożenia działają na serwerze z jedną kartą graficzną. Jeśli masz serwer, sprawdzimy, czy wystarczy. Jeśli nie, dobierzemy i dostarczymy sprzęt.'
      },
      {
        q: 'Ile trwa wdrożenie?',
        a: 'Instalacja u naszego pierwszego klienta zajęła jeden dzień pracy. Kolejne planujemy na jeden do dwóch dni, zależnie od wielkości zespołu. Potem na podstawie uwag użytkowników dopasowujemy system do Twoich dokumentów, aż osiągnie poziom trafności, który ustalimy razem na starcie.'
      },
      {
        q: 'Czy dane naprawdę nie wychodzą poza firmę?',
        a: 'Tak. Model, dokumenty i baza wiedzy są na Twoim serwerze. System może działać w sieci całkowicie odciętej od internetu, tak jak u naszego pierwszego klienta. Przed startem podpisujemy NDA.'
      },
      {
        q: 'Czy model dobrze rozumie polski?',
        a: 'Dobrze, ale nie każdy model tak samo. Dlatego przed wdrożeniem sprawdzamy modele na Twoich dokumentach i wybieramy ten, który radzi sobie najlepiej.'
      },
      {
        q: 'Czy mogę najpierw zobaczyć, jak to działa?',
        a: 'Tak. Przygotowujemy demo bazy wiedzy w chmurze, z przykładowymi danymi. Zostaw adres na dole strony, a damy znać, gdy ruszy.'
      }
    ]
  },
  cta: {
    title: 'Pierwszy krok to krótka rozmowa.',
    intro: 'Zostaw maila. Odpiszemy z kilkoma pytaniami o Twoje dane, sprzęt i to, co model ma robić.',
    team: 'Zespół Milkysoft',
    label: 'Adres e-mail',
    placeholder: 'imie@firma.pl',
    send: 'Wyślij',
    sending: 'Wysyłam',
    invalid: 'Wpisz adres w formacie imie@firma.pl.',
    cooldown: 'Wiadomość już poszła. Odczekaj chwilę, zanim wyślesz kolejną.',
    failed: 'Nie udało się wysłać. Spróbuj ponownie albo napisz na contact@milkysoft.io.',
    sentTitle: 'Wiadomość wysłana',
    sentBody: 'Odpiszemy na',
    again: 'Wyślij kolejną',
    consentBefore:
      'Wysyłając adres, zgadzasz się, by Milkysoft użył go do odpowiedzi na Twoje zapytanie. Szczegóły w ',
    consentLink: 'Polityce prywatności',
    consentAfter: '.'
  },
  footer: {
    tagline: 'AI na Twoich serwerach.',
    services: 'Usługi',
    company: 'Firma',
    connect: 'Kontakt',
    serviceLinks: ['Baza wiedzy z czatem', 'Aplikacje AI na zamówienie', 'Wdrożenia on-premise'],
    contact: 'Kontakt',
    rights: 'Wszelkie prawa zastrzeżone.',
    privacy: 'Polityka prywatności'
  }
}

const en = {
  meta: {
    title: 'Milkysoft — AI on your own servers',
    langLabel: 'Language',
    langName: 'English'
  },
  skipLink: 'Skip to content',
  privacy: {
    metaTitle: 'Privacy Policy — Milkysoft',
    contents: 'Contents'
  },
  notFound: {
    title: 'Page not found',
    text: 'This page doesn’t exist or has moved.',
    link: 'Back to home'
  },
  nav: {
    label: 'Main',
    items: {
      services: 'Services',
      process: 'How we work',
      expertise: 'Our work',
      technologies: 'Technology',
      team: 'Team'
    },
    cta: 'Book a call',
    logo: 'Milkysoft, back to top',
    home: 'Milkysoft, home page',
    open: 'Open menu',
    close: 'Close menu'
  },
  hero: {
    badge: 'On-premise AI deployments',
    titleLines: ['Your data', 'stays', 'in-house.'],
    filesAfterLine: 1,
    filesLabel: 'Company files: documents, contracts and spreadsheets',
    cta: 'Book a call',
    link: 'How we work',
    vertical: '0 B sent out',
    verticalLabel: 'Zero bytes sent outside your network',
    photoAlt: '',
    kb: {
      title: 'Knowledge base',
      status: 'local',
      searching: 'Searching documents',
      outbound: 'Sent outside',
      outboundValue: '0 B',
      sample: 'Sample data',
      qa: [
        {
          scope: 'Legal',
          q: 'When does the Nordline contract expire?',
          a: 'On 31 March 2027. Notice is due at least 3 months before.',
          source: 'Nordline_contract.pdf',
          page: 'p. 4'
        },
        {
          scope: 'HR',
          q: 'How many days of leave does a new hire get?',
          a: 'Twenty days a year, rising to 26 after ten years of service.',
          source: 'Work_regulations.pdf',
          page: 'p. 12'
        },
        {
          scope: 'Board',
          q: 'What did the board decide about the Kraków office?',
          a: 'Lease approved from 1 July, with a budget of up to PLN 40k a month.',
          source: 'Board_minutes_03.pdf',
          page: 'p. 2'
        }
      ]
    },
    statement: [
      { text: 'We set up a language model on a server inside your company,' },
      { icon: 'HardDrives', tone: 'yellow' },
      { text: 'connect it to your documents' },
      { icon: 'Files', tone: 'ink' },
      { text: 'and teach your team' },
      { icon: 'UsersThree', tone: 'teal' },
      { text: 'to use it.' }
    ],
    promises: [
      { icon: 'WifiSlash', text: 'Can run with no internet access' },
      { icon: 'ShieldCheck', text: 'Documents never leave your network' },
      { icon: 'LockKey', text: 'Only authorised users have access' }
    ]
  },
  marquee: {
    label: 'Your knowledge base reads',
    items: [
      'Contracts',
      'Policies',
      'Procedures',
      'Technical docs',
      'Support tickets',
      'Board minutes',
      'Proposals',
      'Work instructions',
      'Security policies',
      'FAQs'
    ]
  },
  services: {
    title: 'What we do.',
    titleMuted: 'On your own server or in a private cloud.',
    items: [
      {
        icon: 'BookOpenText',
        tone: 'yellow',
        title: 'Knowledge base with chat',
        description:
          'Your staff type questions into a chat, and the model looks for the answer in your documents and databases. Every answer shows the document and page it came from, so it’s easy to check.',
        features: ['Ask about “notice”, it finds “termination of the agreement”', 'Understands questions in many languages', 'Access for authorised users only']
      },
      {
        icon: 'Robot',
        tone: 'blue',
        title: 'Custom AI applications',
        description:
          'We build tools around a specific process in your company, like the notarial deed data extraction we built for a property valuation firm. Each one is made for a single client, around their documents and systems.',
        features: ['Designed from scratch for your process', 'Connected to the systems you already use', 'In the cloud or on your server']
      },
      {
        icon: 'HardDrives',
        tone: 'teal',
        title: 'Setup and support',
        description:
          'We pick the model and the hardware, install everything inside your network and stay on the project: we tailor the system to your documents, keep an eye on answer quality and train your team.',
        features: ['Testing before launch', 'Installation inside your network', 'Support after launch']
      }
    ]
  },
  process: {
    title: 'How it goes.',
    titleMuted: 'From the first call to a model inside your network.',
    steps: [
      {
        title: 'Call',
        description: 'You tell us what documents your team works with and what you want to improve. We tell you whether AI makes sense here and where to start.'
      },
      {
        title: 'Design',
        description: 'We pick the model, the hardware and how it connects to your systems.'
      },
      {
        title: 'Install',
        description: 'We install everything on site. At our first client it took one day.'
      },
      {
        title: 'Support',
        description: 'We train your team, collect feedback from the first weeks and use it to tune the system: search accuracy, answer quality and speed.'
      }
    ]
  },
  work: {
    title: 'What’s running today.',
    titleMuted: 'One live project and one pilot.',
    live: {
      status: 'Live with a client',
      client: 'A property valuation firm',
      title: 'An agent that extracts data from notarial deeds',
      lead: 'Valuers used to copy the details they need for a valuation out of notarial deeds by hand. Now the agent does it for them, much faster, and they can easily check that the data was extracted correctly.',
      tiles: [
        { icon: 'Timer', tone: 'blue', value: 'Minutes → seconds', label: 'Time per deed: over ten minutes by hand, under a minute with the agent.', wide: true },
        { icon: 'Wrench', tone: 'teal', value: '1 day', label: 'Installation time at the client' },
        { icon: 'WifiSlash', tone: 'yellow', value: '2 versions', label: 'In the cloud, or on a server with no internet access' }
      ]
    },
    pilot: {
      status: 'Pilot under way',
      client: 'Hospitals and clinics',
      title: 'Knowledge search for medical facilities',
      lead: 'Instead of digging through documents and the facility’s database, staff ask a chat that answers from both.',
      tiles: [
        { icon: 'Files', tone: 'terracotta', value: 'Document + page', label: 'Shown under every answer, so staff can check it against the original.', wide: true },
        { icon: 'HardDrives', tone: 'yellow', value: 'On site', label: 'Model and documents on the facility’s server' },
        { icon: 'Clock', tone: 'teal', value: '1–2 days', label: 'Planned installation time at the client' }
      ],
      soon: {
        badge: 'Coming soon',
        title: 'We’re preparing a demo you can try in your browser.',
        titleMuted: 'The knowledge base from this pilot, on sample documents.',
        cta: 'Notify me'
      }
    },
    demo: {
      title: 'Agent',
      file: 'Notarial_deed_1234.pdf',
      status: 'no internet',
      reading: 'Reading the document',
      found: 'Extracted data',
      derived: 'calculated',
      heading: 'NOTARIAL DEED',
      reference: 'Repertory A No. 1234/2026',
      doc: [
        [
          'On ',
          [0, '12 March 2026'],
          ', before a notary in Kraków, there appeared ',
          [1, 'Jan Nowak'],
          ', hereinafter the Seller, and ',
          [2, 'Maria Kowalska'],
          ', hereinafter the Buyer.'
        ],
        [
          '§ 1. The Seller declares that he owns ',
          [3, 'flat no. 7 at ul. Zielna 15 in Kraków'],
          ' with a floor area of ',
          [4, '54.20 m²'],
          ', for which the District Court keeps land register no. ',
          [5, 'KR1P/00012345/6'],
          '.'
        ],
        [
          '§ 2. The Seller sells the flat to the Buyer for ',
          [6, 'PLN 685,000'],
          ' (six hundred and eighty-five thousand zloty).'
        ]
      ],
      fields: [
        { label: 'Deed date', value: '12 Mar 2026' },
        { label: 'Seller', value: 'Jan Nowak' },
        { label: 'Buyer', value: 'Maria Kowalska' },
        { label: 'Property', value: 'Flat 7, ul. Zielna 15, Kraków' },
        { label: 'Floor area', value: '54.20 m²' },
        { label: 'Land register', value: 'KR1P/00012345/6' },
        { label: 'Price', value: 'PLN 685,000' },
        { label: 'Price per m²', value: 'PLN 12,638', derived: true }
      ],
      manual: 'By hand',
      manualValue: 'over ten minutes',
      agent: 'Agent',
      agentValue: 'under a minute',
      estimate: 'Time per deed, figures from the client',
      sample: 'Sample data',
      summary:
        'An example: the agent reads a notarial deed and copies out the date, the parties, the property, its floor area, the land register number and the price, then works out the price per square metre. The client estimates this takes it under a minute instead of over ten minutes by hand.'
    }
  },
  tech: {
    title: 'What it runs on.',
    titleMuted: 'No AI vendor account needed.',
    items: [
      { icon: 'Brain', title: 'Open-source models', description: 'For example Qwen, Gemma or Llama. We pick whichever works best with your documents.' },
      { icon: 'Cpu', title: 'Runs inside your network', description: 'On proven open-source software such as vLLM, with no calls to an outside API.' },
      { icon: 'FileMagnifyingGlass', title: 'RAG', description: 'Before the model answers, search finds the passages in your documents that relate to the question. The model answers from them and shows where they came from.' },
      { icon: 'HardDrives', title: 'On the hardware you have', description: 'We run the model on whatever is available: your server or our machine. We configure it to fit your needs.' },
      { icon: 'ListChecks', title: 'Quality tests', description: 'We check the answers against our own set of test questions.' },
      { icon: 'Cloud', title: 'Cloud, if you prefer', description: 'AWS, Azure or GCP: for a demo, for testing or for your private cloud.' }
    ]
  },
  team: {
    title: 'Who you’ll work with.',
    titleMuted: 'Three people, from the first call to launch.',
    people: [
      {
        name: 'Bartek',
        tone: 'yellow',
        role: 'Architecture and apps',
        description: 'Designs the architecture and writes the backend and frontend. Leads our work on language models and the cloud.',
      },
      {
        name: 'Filip',
        tone: 'teal',
        role: 'On-premise and research',
        description: 'Tests new models, chooses the hardware and sets up models that run without internet access.',
      },
      {
        name: 'Michał',
        tone: 'terracotta',
        role: 'Design and frontend',
        description: 'Designs the screens our clients’ teams use and builds them in code, in the client’s own logo and colours.',
      }
    ]
  },
  faq: {
    title: 'Common questions',
    intro: 'Didn’t find yours? Write to',
    items: [
      {
        q: 'How much does it cost?',
        a: 'We price every deployment separately. The cost depends mostly on whether the model runs on your hardware or we supply our own, how many data sources need connecting and how many people will use it. We’ll give you a figure after our initial conversations.'
      },
      {
        q: 'What hardware do I need?',
        a: 'Our deployments so far run on a server with a single graphics card. If you have a server, we’ll check whether it’s enough. If not, we’ll choose and supply the hardware.'
      },
      {
        q: 'How long does a deployment take?',
        a: 'Installation at our first client took one working day. We plan one to two days for the next ones, depending on team size. After that we use feedback from users to tailor the system to your documents until it reaches the accuracy level we agree on at the start.'
      },
      {
        q: 'Does my data really stay in-house?',
        a: 'Yes. The model, the documents and the knowledge base all sit on your server. The system can run on a network fully cut off from the internet, as it does at our first client. We sign an NDA before we start.'
      },
      {
        q: 'Does the model understand Polish well?',
        a: 'Good open models handle Polish, but not equally well. Before launch we test them on your own documents and pick the one that does best.'
      },
      {
        q: 'Can I see it working first?',
        a: 'Yes. We are preparing a cloud demo of the knowledge base with sample data. Leave your email at the bottom of the page and we’ll let you know when it’s live.'
      }
    ]
  },
  cta: {
    title: 'The first step is a short call.',
    intro: 'Leave your email and we’ll reply with a few questions about your data, your hardware and what you want the model to do.',
    team: 'The Milkysoft team',
    label: 'E-mail address',
    placeholder: 'name@company.com',
    send: 'Send',
    sending: 'Sending',
    invalid: 'Enter an email address like name@company.com.',
    cooldown: 'You just sent a message. Wait a few seconds before sending another.',
    failed: 'The message didn’t go through. Try again, or write to contact@milkysoft.io.',
    sentTitle: 'Message sent',
    sentBody: 'We’ll reply to',
    again: 'Send another',
    consentBefore:
      'By submitting your email you agree that Milkysoft may use it to reply to your enquiry. See our ',
    consentLink: 'Privacy Policy',
    consentAfter: ' for details on how we handle your data.'
  },
  footer: {
    tagline: 'AI on your own servers.',
    services: 'Services',
    company: 'Company',
    connect: 'Connect',
    serviceLinks: ['Knowledge base with chat', 'Custom AI applications', 'On-premise deployments'],
    contact: 'Contact',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy'
  }
}

// Polish typesetting: a one-letter word (w, z, i, o, a, u) never ends a line,
// it is tied to the next word with a no-break space
const tieShortWords = (value) => {
  if (typeof value === 'string') return value.replace(/(^|\s)([aiouwzAIOUWZ]) /g, '$1$2\u00A0')
  if (Array.isArray(value)) return value.map(tieShortWords)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, tieShortWords(v)]))
  }
  return value
}

export const COPY = { pl: tieShortWords(pl), en }
