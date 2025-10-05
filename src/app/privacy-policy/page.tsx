import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen w-full bg-[#403d39]" style={{ color: 'var(--color-white)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to home button - top left */}
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/20"
            style={{ color: 'var(--color-white)' }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Powrót do strony głównej
          </Link>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none" style={{ color: 'var(--color-white)' }}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8" style={{ color: 'var(--color-white)' }}>Polityka Prywatności</h1>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 mt-8" style={{ color: 'var(--color-white)' }}>Administrator Danych Osobowych</h2>
            <p className="mb-4 leading-relaxed">
              <strong>MILKYSOFT Sp. z o.o.</strong> z siedzibą w Krakowie, dalej zwana „Spółką", jest administratorem danych osobowych w rozumieniu ogólnego rozporządzenia o ochronie danych (RODO). Spółka prowadzi działalność <strong>wyłącznie na terenie Unii Europejskiej</strong>, co oznacza, że wszelkie operacje przetwarzania danych osobowych odbywają się w granicach UE. W sprawach związanych z ochroną danych osobowych można skontaktować się ze Spółką pod adresem e-mail: contact@milkysoft.io lub pisemnie na adres siedziby.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 mt-8" style={{ color: 'var(--color-white)' }}>Zakres przetwarzanych danych</h2>
            <p className="mb-4 leading-relaxed">
              Spółka przetwarza dane osobowe w zakresie niezbędnym do świadczenia profesjonalnych usług IT (software house) z wykorzystaniem technologii chmurowych (np. Google Cloud Platform, Amazon Web Services) oraz sztucznej inteligencji (AI, w tym modeli językowych LLM), w celu tworzenia stron internetowych, aplikacji i innych produktów dla klientów biznesowych. Przetwarzane są w szczególności następujące kategorie danych:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Dane klientów biznesowych:</strong> informacje identyfikujące i kontaktowe kontrahentów (np. imię i nazwisko przedsiębiorcy lub osoby reprezentującej klienta, nazwa firmy, adres e-mail służbowy, numer telefonu, stanowisko).</li>
              <li><strong>Dane pracowników i współpracowników klientów:</strong> dane osób wskazanych do kontaktu lub współpracy przy projekcie po stronie klienta (m.in. imiona i nazwiska, służbowe adresy e-mail, funkcje pełnione w projekcie).</li>
              <li><strong>Dane przekazane przez klienta do realizacji usługi:</strong> wszelkie dane i materiały dostarczone przez klienta w celu wykonania zamówienia, np. treści i grafiki do umieszczenia na stronie, specyfikacje projektowe, bazy danych lub inne informacje niezbędne do stworzenia zamówionego serwisu/aplikacji. Dane te mogą zawierać <strong>dane osobowe osób trzecich</strong> (np. użytkowników końcowych serwisu, pracowników klienta przedstawianych na stronie). W takim przypadku Spółka przyjmuje, że klient pozyskał te dane zgodnie z prawem i jest uprawniony do ich powierzenia Spółce w ramach realizacji umowy.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              Spółka przetwarza wyłącznie dane adekwatne, ograniczone do tego, co niezbędne dla osiągnięcia określonych celów. Nie gromadzimy danych nadmiarowych ani zbędnych – stosujemy zasadę minimalizacji, zbierając tylko informacje konieczne do realizacji usług na najwyższym poziomie. Podanie danych może być wymogiem umowy niezbędnym do realizacji usługi – odmowa podania wymaganych informacji może uniemożliwić wykonanie zlecenia.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 mt-8" style={{ color: 'var(--color-white)' }}>Cele i podstawy prawne przetwarzania</h2>
            <p className="mb-4 leading-relaxed">
              Dane osobowe są przetwarzane w ściśle określonych celach i na odpowiednich podstawach prawnych przewidzianych przez RODO:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li><strong>Realizacja umowy z klientem:</strong> podstawowym celem jest wykonanie zawartej z klientem umowy na usługi IT (art. 6 ust. 1 lit. b RODO). Obejmuje to wszystkie czynności niezbędne do zaprojektowania, stworzenia i wdrożenia zamówionej strony internetowej, aplikacji lub innego produktu zgodnie z wymaganiami klienta, a także komunikację z klientem w trakcie trwania umowy.</li>
              <li><strong>Świadczenie usług dodatkowych (wsparcie, administracja):</strong> jeśli wynika to z umowy lub zlecenia, Spółka może przetwarzać dane także w celu świadczenia usług doradczych, szkoleniowych lub administracyjnych związanych z wdrożonym produktem.</li>
              <li><strong>Wypełnienie obowiązków prawnych:</strong> niektóre dane mogą być przetwarzane w celu spełnienia obowiązków nałożonych na Spółkę przepisami prawa (art. 6 ust. 1 lit. c RODO), szczególnie wymogów podatkowych i rachunkowych.</li>
              <li><strong>Prawnie uzasadnione interesy Spółki:</strong> w określonych przypadkach Spółka może przetwarzać dane osobowe na podstawie swojego uzasadnionego interesu (art. 6 ust. 1 lit. f RODO), np. wewnętrzne cele administracyjne, dochodzenie lub obrona przed roszczeniami prawnymi.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              <strong>Uwagi dot. podstaw przetwarzania:</strong> co do zasady Spółka nie opiera przetwarzania danych klientów na zgodzie, gdy podstawą jest wykonanie umowy bądź obowiązek prawny. Jeżeli jednak w jakiejś sytuacji poprosimy o dobrowolną zgodę, będzie ona oddzielnie uzyskiwana, a klient ma prawo ją w każdej chwili wycofać.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 mt-8" style={{ color: 'var(--color-white)' }}>Okres przechowywania danych</h2>
            <p className="mb-4 leading-relaxed">
              Dane osobowe będą przechowywane w formie umożliwiającej identyfikację osób, których dotyczą, nie dłużej niż to konieczne do zrealizowania celów, dla których zostały zebrane:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Dane klientów i osób kontaktowych przechowujemy przez <strong>czas trwania umowy</strong> oraz <strong>do momentu pełnego rozliczenia usług</strong>.</li>
              <li><strong>Po zakończeniu współpracy</strong> dane związane z projektem są usuwane lub anonimizowane, z wyjątkiem niezbędnych kopii bezpieczeństwa.</li>
              <li><strong>Dane w dokumentacji księgowej</strong> archiwizujemy przez <strong>5 lat</strong> od końca roku podatkowego zgodnie z przepisami prawa.</li>
              <li><strong>Dane potrzebne do dochodzenia roszczeń</strong> możemy zachować do czasu upływu terminu przedawnienia (<strong>3 do 6 lat</strong>).</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              Należy mieć na uwadze, że <strong>prawo do usunięcia danych („bycia zapomnianym") nie ma charakteru bezwzględnego</strong> – w pewnych sytuacjach Spółka może odmówić usunięcia danych mimo żądania osoby, jeżeli dalsze przechowywanie danych jest konieczne z uwagi na przepis prawa lub w celu ustalenia, dochodzenia bądź obrony roszczeń prawnych.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 mt-8" style={{ color: 'var(--color-white)' }}>Wykorzystywane technologie: chmura i sztuczna inteligencja</h2>
            <p className="mb-4 leading-relaxed">
              W ramach swojej działalności Spółka korzysta z nowoczesnych rozwiązań technologicznych, takich jak <strong>usługi chmurowe</strong> oraz narzędzia oparte na <strong>sztucznej inteligencji</strong> (AI), w tym modele <strong>LLM</strong> (Large Language Models):
            </p>
            
            <h3 className="text-2xl font-semibold mb-3 mt-6" style={{ color: 'var(--color-white)' }}>Usługi chmurowe (Cloud Computing)</h3>
            <p className="mb-4 leading-relaxed">
              Do hostingu tworzonych aplikacji wykorzystujemy sprawdzonych dostawców chmury, m.in. <strong>Google Cloud Platform (GCP)</strong> oraz <strong>Amazon Web Services (AWS)</strong>. Wybieramy regiony serwerowe zlokalizowane w Europie, tak aby dane osobowe były <strong>przetwarzane w obrębie Europejskiego Obszaru Gospodarczego</strong>. Zgodnie z obowiązującymi regulacjami przetwarzanie danych na terenie EOG jest w pełni dopuszczalne. Spółka spełnia wymogi formalne poprzez zawarcie z dostawcami <strong>umów powierzenia przetwarzania danych</strong> (Data Processing Addendum), które zapewniają zgodność usług chmurowych z RODO.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6" style={{ color: 'var(--color-white)' }}>Sztuczna inteligencja i modele LLM</h3>
            <p className="mb-4 leading-relaxed">
              W procesie tworzenia oprogramowania oraz analizy danych Spółka może korzystać z narzędzi bazujących na AI, w tym z dużych modeli językowych (LLM). <strong>Bezpieczeństwo danych przy korzystaniu z AI</strong> jest dla nas priorytetem – weryfikujemy dostawców oraz warunki przetwarzania danych. Co do zasady, nie przekazujemy do zewnętrznych usług AI żadnych danych osobowych ani informacji poufnych, chyba że jest to konieczne i odbywa się za zgodą klienta. Wdrażamy środki ochronne, takie jak <strong>anonimizacja lub pseudonimizacja danych</strong> przed przekazaniem ich do analizy przez algorytmy AI.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 mt-8" style={{ color: 'var(--color-white)' }}>Udostępnianie danych i odbiorcy</h2>
            <p className="mb-4 leading-relaxed">
              Spółka zachowuje poufność danych osobowych i <strong>nie udostępnia ich podmiotom trzecim</strong> bez potrzeby wynikającej z realizowanych celów przetwarzania. W określonych sytuacjach dane mogą zostać przekazane następującym kategoriom odbiorców:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Upoważnieni pracownicy i współpracownicy Spółki:</strong> dostęp do danych mają wyłącznie osoby, dla których jest to konieczne, zgodnie z zasadą niezbędnej wiedzy (need-to-know).</li>
              <li><strong>Podmioty przetwarzające dane na zlecenie Spółki:</strong> dostawcy usług chmurowych i IT, podwykonawcy i konsultanci działający na podstawie umów powierzenia.</li>
              <li><strong>Klienci (zamawiający usługi):</strong> jeśli w ramach projektu Spółka przetwarza dane powierzone przez klienta, odbiorcą wyników jest sam klient.</li>
              <li><strong>Organy publiczne:</strong> w pewnych sytuacjach prawo może zobowiązać nas do udostępnienia danych organom państwowym na zasadzie zgodności z prawem.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              Spółka <strong>nie przekazuje danych osobowych poza Europejski Obszar Gospodarczy</strong> (EOG), chyba że jest to uzasadnione i odbywa się z zachowaniem wymogów RODO. W szczególności dane osobowe <strong>nie są sprzedawane</strong> ani użyczane podmiotom trzecim do celów marketingowych.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 mt-8" style={{ color: 'var(--color-white)' }}>Prawa osób, których dane dotyczą</h2>
            <p className="mb-4 leading-relaxed">
              W związku z przetwarzaniem przez Spółkę danych osobowych, osobom fizycznym przysługuje szereg praw przewidzianych w RODO:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Prawo dostępu do danych</strong> – uzyskania potwierdzenia, czy przetwarzamy dane, oraz otrzymania ich kopii</li>
              <li><strong>Prawo sprostowania danych</strong> – żądania poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych</li>
              <li><strong>Prawo do usunięcia danych</strong> („prawo do bycia zapomnianym") – w określonych sytuacjach</li>
              <li><strong>Prawo ograniczenia przetwarzania</strong> – czasowe wstrzymanie operacji na danych</li>
              <li><strong>Prawo do przenoszenia danych</strong> – otrzymanie danych w formacie nadającym się do odczytu maszynowego</li>
              <li><strong>Prawo sprzeciwu wobec przetwarzania</strong> – gdy dane przetwarzane są na podstawie prawnie uzasadnionego interesu</li>
              <li><strong>Prawo wycofania zgody</strong> – jeżeli podstawą przetwarzania jest zgoda</li>
              <li><strong>Prawo wniesienia skargi do organu nadzorczego</strong> – złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              <strong>Realizacja praw:</strong> w celu skorzystania ze swoich praw możesz skierować do nas żądanie na adres contact@milkysoft.io lub pisemnie. Na żądanie odpowiemy bez zbędnej zwłoki – maksymalnie w terminie miesiąca od jego otrzymania. Udzielenie odpowiedzi jest co do zasady bezpłatne.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 mt-8" style={{ color: 'var(--color-white)' }}>Zabezpieczenia danych i poufność</h2>
            <p className="mb-4 leading-relaxed">
              Spółka dokłada najwyższych starań, aby zapewnić bezpieczeństwo przetwarzanych danych osobowych. Wdrożyliśmy adekwatne środki techniczne i organizacyjne:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Szyfrowanie i bezpieczeństwo transmisji:</strong> komunikacja zabezpieczona protokołem HTTPS (SSL/TLS)</li>
              <li><strong>Kontrola dostępu i uwierzytelnianie:</strong> silne uwierzytelnienie, zasada minimalnych uprawnień, 2FA</li>
              <li><strong>Środowiska testowe i produkcyjne:</strong> separacja środowisk, anonimizacja danych testowych</li>
              <li><strong>Monitoring i ochrona przed zagrożeniami:</strong> zapory sieciowe, oprogramowanie antywirusowe, regularne aktualizacje</li>
              <li><strong>Procedury reagowania na incydenty:</strong> wewnętrzne procedury na wypadek naruszenia ochrony danych</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              Wszyscy wspólnicy, pracownicy i współpracownicy Spółki są zobowiązani do zachowania poufności. Nasze środki bezpieczeństwa są regularnie weryfikowane i dostosowywane do zmieniających się zagrożeń.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 mt-8" style={{ color: 'var(--color-white)' }}>Postanowienia końcowe</h2>
            <p className="mb-4 leading-relaxed">
              Niniejsza Polityka Prywatności została przyjęta i obowiązuje od dnia <strong>25.09.2025</strong>. Dokument ten może podlegać aktualizacjom lub zmianom w przyszłości. O wszelkich istotnych zmianach będziemy informować za pośrednictwem naszej strony internetowej.
            </p>
            <p className="mb-4 leading-relaxed">
              W sprawach nieuregulowanych niniejszą Polityką stosuje się powszechnie obowiązujące przepisy prawa z zakresu ochrony danych osobowych, w tym RODO oraz krajowe przepisy uzupełniające. W razie pytań lub wątpliwości zachęcamy do kontaktu pod adresem contact@milkysoft.io. Twoja prywatność jest dla nas ważna – dokładamy wszelkich starań, by należycie ją chronić.
            </p>
            <p className="mb-4 leading-relaxed font-semibold">
              Dziękujemy za zapoznanie się z naszą Polityką Prywatności.
            </p>
            <p className="text-sm text-white/70 italic">
              Ostatnia aktualizacja: 26.09.2025
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}

