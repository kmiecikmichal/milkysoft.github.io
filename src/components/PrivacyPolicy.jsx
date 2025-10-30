import { Link } from 'react-router-dom'
import Footer from './Footer'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <main className="privacy-policy">
      <div className="container">
        <Link to="/" className="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>
        <div className="privacy-header">
          <h1 className="privacy-title">Polityka Prywatności</h1>
          <p className="privacy-date">Ostatnia aktualizacja: 26.09.2025</p>
        </div>

        <article className="privacy-content">
          <section className="privacy-section">
            <h2>Administrator Danych Osobowych</h2>
            <p>
              <strong>MILKYSOFT Sp. z o.o.</strong> z siedzibą w Krakowie, dalej zwana „Spółką", jest administratorem danych osobowych w rozumieniu ogólnego rozporządzenia o ochronie danych (RODO). Spółka prowadzi działalność <strong>wyłącznie na terenie Unii Europejskiej</strong>, co oznacza, że wszelkie operacje przetwarzania danych osobowych odbywają się w granicach UE. W sprawach związanych z ochroną danych osobowych można skontaktować się ze Spółką pod adresem e-mail: contact@milkysoft.io lub pisemnie na adres siedziby.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Zakres przetwarzanych danych</h2>
            <p>
              Spółka przetwarza dane osobowe w zakresie niezbędnym do świadczenia profesjonalnych usług IT (software house) z wykorzystaniem technologii chmurowych (np. Google Cloud Platform, Amazon Web Services) oraz sztucznej inteligencji (AI, w tym modeli językowych LLM), w celu tworzenia stron internetowych, aplikacji i innych produktów dla klientów biznesowych. Przetwarzane są w szczególności następujące kategorie danych:
            </p>
            <ul>
              <li><strong>Dane klientów biznesowych:</strong> informacje identyfikujące i kontaktowe kontrahentów (np. imię i nazwisko przedsiębiorcy lub osoby reprezentującej klienta, nazwa firmy, adres e-mail służbowy, numer telefonu, stanowisko).</li>
              <li><strong>Dane pracowników i współpracowników klientów:</strong> dane osób wskazanych do kontaktu lub współpracy przy projekcie po stronie klienta (m.in. imiona i nazwiska, służbowe adresy e-mail, funkcje pełnione w projekcie).</li>
              <li><strong>Dane przekazane przez klienta do realizacji usługi:</strong> wszelkie dane i materiały dostarczone przez klienta w celu wykonania zamówienia, np. treści i grafiki do umieszczenia na stronie, specyfikacje projektowe, bazy danych lub inne informacje niezbędne do stworzenia zamówionego serwisu/aplikacji.</li>
            </ul>
            <p>
              Spółka przetwarza wyłącznie dane adekwatne, ograniczone do tego, co niezbędne dla osiągnięcia określonych celów. Nie gromadzimy danych nadmiarowych ani zbędnych – stosujemy zasadę minimalizacji, zbierając tylko informacje konieczne do realizacji usług na najwyższym poziomie.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Cele i podstawy prawne przetwarzania</h2>
            <p>
              Dane osobowe są przetwarzane w ściśle określonych celach i na odpowiednich podstawach prawnych przewidzianych przez RODO:
            </p>
            <ul>
              <li><strong>Realizacja umowy z klientem:</strong> podstawowym celem jest wykonanie zawartej z klientem umowy na usługi IT (art. 6 ust. 1 lit. b RODO). Obejmuje to wszystkie czynności niezbędne do zaprojektowania, stworzenia i wdrożenia zamówionej strony internetowej, aplikacji lub innego produktu.</li>
              <li><strong>Świadczenie usług dodatkowych:</strong> jeśli wynika to z umowy lub zlecenia, Spółka może przetwarzać dane także w celu świadczenia usług doradczych, szkoleniowych lub administracyjnych związanych z wdrożonym produktem.</li>
              <li><strong>Wypełnienie obowiązków prawnych:</strong> niektóre dane mogą być przetwarzane w celu spełnienia obowiązków nałożonych na Spółkę przepisami prawa (art. 6 ust. 1 lit. c RODO), w tym wymogów podatkowych i rachunkowych.</li>
              <li><strong>Prawnie uzasadnione interesy Spółki:</strong> w określonych przypadkach Spółka może przetwarzać dane osobowe na podstawie swojego uzasadnionego interesu (art. 6 ust. 1 lit. f RODO), np. wewnętrzne cele administracyjne, dochodzenie roszczeń prawnych.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Okres przechowywania danych</h2>
            <p>
              Dane osobowe będą przechowywane w formie umożliwiającej identyfikację osób, których dotyczą, nie dłużej niż to konieczne do zrealizowania celów, dla których zostały zebrane:
            </p>
            <ul>
              <li>Dane klientów i osób kontaktowych przechowujemy przez <strong>czas trwania umowy</strong> oraz <strong>do momentu pełnego rozliczenia usług</strong>.</li>
              <li><strong>Po zakończeniu współpracy</strong> dane związane z projektem są usuwane lub anonimizowane, z wyjątkiem niezbędnych kopii bezpieczeństwa.</li>
              <li><strong>Dane w dokumentacji księgowej</strong> przechowywane są przez <strong>5 lat</strong> od końca roku podatkowego.</li>
              <li><strong>Dane potrzebne do dochodzenia roszczeń</strong> mogą być zachowane do czasu upływu terminu przedawnienia (zazwyczaj <strong>3 do 6 lat</strong>).</li>
            </ul>
            <p>
              <strong>Prawo do usunięcia danych</strong> nie ma charakteru bezwzględnego – w pewnych sytuacjach Spółka może odmówić usunięcia danych mimo żądania osoby, jeżeli dalsze przechowywanie danych jest konieczne z uwagi na przepis prawa lub w celu ustalenia, dochodzenia bądź obrony roszczeń prawnych.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Wykorzystywane technologie: chmura i sztuczna inteligencja</h2>
            <p>
              W ramach swojej działalności Spółka korzysta z nowoczesnych rozwiązań technologicznych, takich jak <strong>usługi chmurowe</strong> oraz narzędzia oparte na <strong>sztucznej inteligencji</strong> (AI), w tym modele <strong>LLM</strong> (Large Language Models).
            </p>
            <h3>Usługi chmurowe</h3>
            <p>
              Do hostingu tworzonych aplikacji wykorzystujemy sprawdzonych dostawców chmury, m.in. Google Cloud Platform (GCP) oraz Amazon Web Services (AWS). Wybieramy regiony serwerowe zlokalizowane w Europie, tak aby dane osobowe były przetwarzane w obrębie Europejskiego Obszaru Gospodarczego.
            </p>
            <h3>Sztuczna inteligencja i modele LLM</h3>
            <p>
              W procesie tworzenia oprogramowania oraz analizy danych Spółka może korzystać z narzędzi bazujących na AI. Bezpieczeństwo danych przy korzystaniu z AI jest dla nas priorytetem – weryfikujemy dostawców oraz warunki przetwarzania danych, stosujemy anonimizację lub pseudonimizację danych przed przekazaniem ich do analizy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Udostępnianie danych i odbiorcy</h2>
            <p>
              Spółka zachowuje poufność danych osobowych i <strong>nie udostępnia ich podmiotom trzecim</strong> bez potrzeby wynikającej z realizowanych celów przetwarzania. W określonych sytuacjach, gdy jest to niezbędne, dane mogą zostać przekazane następującym kategoriom odbiorców:
            </p>
            <ul>
              <li><strong>Upoważnieni pracownicy i współpracownicy Spółki</strong></li>
              <li><strong>Podmioty przetwarzające dane na zlecenie Spółki</strong> (dostawcy usług chmurowych, podwykonawcy, konsultanci)</li>
              <li><strong>Klienci</strong> (zamawiający usługi)</li>
              <li><strong>Organy publiczne</strong> (w sytuacjach wymaganych przez prawo)</li>
            </ul>
            <p>
              Spółka <strong>nie przekazuje danych osobowych poza Europejski Obszar Gospodarczy</strong> (EOG). Aktualnie wszelkie powierzane nam dane są przechowywane i przetwarzane na terenie UE. Dane osobowe naszych klientów <strong>nie są sprzedawane</strong> ani użyczane podmiotom trzecim do celów marketingowych.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Prawa osób, których dane dotyczą</h2>
            <p>
              W związku z przetwarzaniem przez Spółkę danych osobowych, osobom fizycznym, których dane dotyczą, przysługuje szereg praw przewidzianych w RODO:
            </p>
            <ul>
              <li><strong>Prawo dostępu do danych</strong> – prawo uzyskania potwierdzenia, czy Spółka przetwarza dane osobowe oraz dostępu do nich</li>
              <li><strong>Prawo sprostowania danych</strong> – prawo żądania niezwłocznego sprostowania danych nieprawidłowych lub uzupełnienia danych niekompletnych</li>
              <li><strong>Prawo do usunięcia danych</strong> – prawo do bycia zapomnianym (z zastrzeżeniem wyjątków przewidzianych prawem)</li>
              <li><strong>Prawo ograniczenia przetwarzania</strong> – prawo żądania czasowego wstrzymania operacji na danych</li>
              <li><strong>Prawo do przenoszenia danych</strong> – prawo otrzymania danych w formacie nadającym się do odczytu maszynowego</li>
              <li><strong>Prawo sprzeciwu wobec przetwarzania</strong> – prawo wniesienia sprzeciwu wobec przetwarzania na podstawie uzasadnionego interesu</li>
              <li><strong>Prawo wycofania zgody</strong> – prawo wycofania zgody w dowolnym momencie</li>
              <li><strong>Prawo wniesienia skargi</strong> – prawo złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO)</li>
            </ul>
            <p>
              W celu skorzystania ze swoich praw możesz skierować do nas stosowne żądanie na adres e-mail: contact@milkysoft.io lub pisemnie na adres biura. Odpowiemy bez zbędnej zwłoki – maksymalnie w terminie miesiąca od otrzymania żądania.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Zabezpieczenia danych i poufność</h2>
            <p>
              Spółka dokłada najwyższych starań, aby zapewnić bezpieczeństwo przetwarzanych danych osobowych. W tym celu wdrożyliśmy adekwatne środki techniczne i organizacyjne:
            </p>
            <ul>
              <li><strong>Szyfrowanie i bezpieczeństwo transmisji</strong> – komunikacja zabezpieczona protokołem HTTPS (SSL/TLS)</li>
              <li><strong>Kontrola dostępu i uwierzytelnianie</strong> – silne uwierzytelnienie, zasada minimalnych uprawnień</li>
              <li><strong>Środowiska testowe i produkcyjne</strong> – separacja środowisk, anonimizacja danych testowych</li>
              <li><strong>Monitoring i ochrona przed zagrożeniami</strong> – zapory sieciowe, aktualizacje bezpieczeństwa, kopie zapasowe</li>
              <li><strong>Procedury reagowania na incydenty</strong> – procedury zgłaszania naruszeń zgodnie z RODO</li>
            </ul>
            <p>
              Wszyscy wspólnicy, pracownicy i współpracownicy Spółki są zobowiązani do zachowania poufności. Nasze środki bezpieczeństwa są regularnie weryfikowane i dostosowywane do zmieniających się zagrożeń.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Postanowienia końcowe</h2>
            <p>
              Niniejsza Polityka Prywatności została przyjęta i obowiązuje od dnia 25.09.2025. Dokument ten może podlegać aktualizacjom lub zmianom w przyszłości. O wszelkich istotnych zmianach Polityki będziemy informować za pośrednictwem naszej strony internetowej.
            </p>
            <p>
              W sprawach nieuregulowanych niniejszą Polityką stosuje się powszechnie obowiązujące przepisy prawa z zakresu ochrony danych osobowych, w tym RODO oraz krajowe przepisy uzupełniające. W razie pytań, uwag lub wątpliwości możesz skontaktować się pod adresem contact@milkysoft.io.
            </p>
            <p className="privacy-thanks">
              Dziękujemy za zapoznanie się z naszą Polityką Prywatności.
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  )
}

export default PrivacyPolicy

