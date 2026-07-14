import './styles.css';

const templates = [
  {
    id: 'wine-label',
    name: 'Etykieta na wino',
    family: 'Etykiety na rolce',
    material: 'Papier z recyklingu',
    format: '90 x 120 mm',
    finish: 'Mat bez folii',
    eco: 'Monomateriał i bez laminatu',
    priceFactor: 1.12,
    obligatory: [
      'Kategoria produktu',
      'Kraj pochodzenia',
      'Alkohol % obj.',
      'Pojemność nominalna',
      'Numer partii z literą L',
      'Alergeny',
      'Składniki i kcal lub QR do e-etykiety'
    ]
  },
  {
    id: 'cosmetic-label',
    name: 'Etykieta na kosmetyki',
    family: 'Etykiety na rolce',
    material: 'Folia rPET',
    format: '60 x 90 mm',
    finish: 'Soft-touch water based',
    eco: 'Folia z odzysku, bez PVC',
    priceFactor: 1.24,
    obligatory: ['INCI', 'PAO', 'Pojemność', 'Dane producenta']
  },
  {
    id: 'doypack',
    name: 'Doypack',
    family: 'Opakowania foliowe',
    material: 'Mono PE',
    format: '130 x 225 mm',
    finish: 'Bez uszlachetnień',
    eco: 'Monomateriał do łatwiejszego recyklingu',
    priceFactor: 1.42,
    obligatory: ['Masa netto', 'Skład', 'Kraj pochodzenia', 'Warunki przechowywania']
  },
  {
    id: 'wine-box',
    name: 'Pudełko na wino',
    family: 'Pudełka z nadrukiem',
    material: 'Karton GC1',
    format: '90 x 90 x 330 mm',
    finish: 'Bez folii, farby wodne',
    eco: 'Sugestia bez foliowania',
    priceFactor: 1.58,
    obligatory: ['Nazwa produktu', 'Kod kreskowy', 'Informacje logistyczne']
  }
];

const knowledge = [
  {
    title: 'Co blokuje agencja?',
    body: 'Logo, układ, kolory, typografia i obowiązkowe pola mogą być zamrożone. Klient edytuje tylko wyznaczone treści.',
    tag: 'Kontrolowany edytor'
  },
  {
    title: 'Kiedy pokazujemy opcję eko?',
    body: 'Zawsze. MVP priorytetyzuje odpowiedzialny wariant materiału i ostrzega przy zbędnym laminowaniu lub miksie trudnym do recyklingu.',
    tag: 'Materiały'
  },
  {
    title: 'Po co reminder za 3 miesiące?',
    body: 'Po zatwierdzeniu projektu można zaplanować automatyczne przypomnienie o wznowieniu, gdy zapas etykiet zacznie się kończyć.',
    tag: 'Domówienia'
  },
  {
    title: 'Jak działa preflight?',
    body: 'W MVP pokazujemy checklistę: format, spady, rozdzielczość, pola obowiązkowe i ryzyka produkcyjne. To miejsce później pod automatyzację.',
    tag: 'Pliki'
  }
];

const CONFIG_MATERIALS = [
  {
    id: 'papier_std',
    label: 'Papier metalizowany',
    eco: false,
    desc: 'Klasyczny wygląd, wysoki polysk'
  },
  {
    id: 'papier_fsc',
    label: 'Papier FSC z recyklingu',
    eco: true,
    desc: 'Certyfikowany, matowa faktura'
  },
  {
    id: 'folia',
    label: 'Folia PP',
    eco: false,
    desc: 'Odporna na wilgoc, do chlodni'
  },
  {
    id: 'mono',
    label: 'Papier monomaterialowy',
    eco: true,
    desc: 'Latwy recykling z butelka'
  }
];

const CONFIG_FINISHES = [
  {
    id: 'brak',
    label: 'Brak (zalecane eko)'
  },
  {
    id: 'mat',
    label: 'Laminat mat'
  },
  {
    id: 'blysk',
    label: 'Laminat blysk'
  },
  {
    id: 'tloczenie',
    label: 'Tloczenie'
  }
];

const CONFIG_GLUES = [
  {
    id: 'standard',
    label: 'Standardowy'
  },
  {
    id: 'usuwalny',
    label: 'Usuwalny (zwrot butelek)'
  }
];

const CONFIG_QUANTITIES = [500, 1000, 2500, 5000];

const CONFIG_CATEGORIES = [
  {
    id: 'wino',
    label: 'Etykieta na wino',
    note: 'wybrane',
    disabled: false
  },
  {
    id: 'piwo',
    label: 'Etykieta na piwo',
    note: 'wkrotce',
    disabled: true
  },
  {
    id: 'miod',
    label: 'Etykieta na miod',
    note: 'wkrotce',
    disabled: true
  },
  {
    id: 'kosmetyki',
    label: 'Kosmetyki',
    note: 'wkrotce',
    disabled: true
  },
  {
    id: 'chemia',
    label: 'Chemia gospodarcza',
    note: 'wkrotce',
    disabled: true
  },
  {
    id: 'spozywcze',
    label: 'Artykuly spozywcze',
    note: 'wkrotce',
    disabled: true
  }
];

const CONFIG_FORMATS = ['0,75 l', '0,5 l', 'Format wlasny'];
const CONFIG_DELIVERIES = ['Kurier', 'Paczkomat', 'Odbior osobisty'];

const configuratorSteps = [
  'Rodzaj etykiety',
  'Format i material',
  'Srodowisko',
  'Tresci obowiazkowe',
  'Pliki i podglad',
  'Wycena i zamowienie'
];

const configuratorHelp = [
  'Kategoria produktu decyduje o tym, jakie informacje prawne i rekomendacje pokazywane sa w kolejnych krokach.',
  'Material i wykonczenie wplywaja na cene oraz na ocene srodowiskowa. Zawsze pokazujemy alternatywe eko.',
  'Sprawdzamy, czy wybrane materialy i wykonczenia dobrze wspolgraja pod katem recyklingu.',
  'Etykieta na wino wymaga m.in. kraju pochodzenia, alkoholu, pojemnosci i numeru partii.',
  'Przeslij plik projektu - sprawdzimy format, spady i rozdzielczosc przed produkcja.',
  'Sprawdz wycene, wybierz dostawe i zloz zamowienie. Potem mozna latwo domowic.'
];

const appState = {
  currentView: 'overview',
  accountType: 'agency',
  templateId: 'wine-label',
  configuratorStep: 0,
  projectName: 'Rumunia Reserve 2026',
  clientName: 'Atelier Ferment',
  teamName: 'Studio Kapsel',
  category: 'wino',
  formatChoice: '0,75 l',
  usageContext: 'Butelka 0,75 l / front label',
  materialChoice: 'papier_fsc',
  adhesive: 'standard',
  quantity: 1000,
  finish: 'Mat bez folii',
  configFinish: 'brak',
  delivery: 'Kurier',
  fileUploaded: false,
  orderPlaced: false,
  reminderOn: true,
  environmentalDecision: 'Rekomendowany wariant eko',
  reminderEnabled: true,
  reminderMonths: 3,
  legal: {
    country: 'Wino z Rumunii',
    abv: '12,5%',
    volume: '750 ml',
    batch: 'L250613',
    hasSiarczyny: true,
    isSparkling: false,
    sugar: 'polwytrawne',
    qrEnabled: true
  },
  fields: {
    productName: 'WINO',
    productCategory: 'Wino',
    country: 'Wino z Rumunii',
    alcohol: 'alk. 12,5 % obj.',
    volume: '750 ml',
    bottler: 'Butelkowane przez: Atelier Ferment, Cluj, Rumunia',
    energy: 'E w 100 ml: 310 kJ / 74 kcal',
    ingredients: 'Składniki i wartość odżywcza: kod QR',
    allergens: 'Zawiera siarczyny.',
    batch: 'L250613',
    language: 'PL / EN',
    claim: 'Papier z recyklingu, bez folii'
  }
};

const views = [
  ['overview', 'Przegląd'],
  ['onboarding', 'Onboarding'],
  ['dashboard', 'Dashboard'],
  ['configurator', 'Konfigurator'],
  ['editor', 'Projekt'],
  ['order', 'Wycena i zamówienie'],
  ['knowledge', 'Baza wiedzy']
];

const app = document.querySelector('#app');

function getTemplate() {
  return templates.find((template) => template.id === appState.templateId) ?? templates[0];
}

function formatPrice(value) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0
  }).format(value);
}

function calculateQuote() {
  const template = getTemplate();
  const base = appState.quantity * 0.42 * template.priceFactor;
  const finishMultiplier = appState.finish.includes('Soft') ? 1.12 : 1;
  const sustainabilityDiscount = appState.environmentalDecision === 'Rekomendowany wariant eko' ? -70 : 0;
  const service = appState.accountType === 'agency' ? 690 : 390;
  const preflight = 180;
  const total = Math.round(base * finishMultiplier + service + preflight + sustainabilityDiscount);
  const leadTime = appState.quantity > 5000 ? '8-10 dni roboczych' : '5-7 dni roboczych';

  return {
    production: Math.round(base * finishMultiplier),
    sustainabilityDiscount,
    service,
    preflight,
    total,
    leadTime
  };
}

function updateTemplateDependentState(template) {
  appState.formatChoice = '0,75 l';
  appState.materialChoice = 'papier_fsc';
  appState.configFinish = 'brak';
  appState.finish = template.finish;
}

function getFinishLabelById(id) {
  return CONFIG_FINISHES.find((finish) => finish.id === id)?.label ?? 'Brak';
}

function getMaterialById(id) {
  return CONFIG_MATERIALS.find((material) => material.id === id) ?? CONFIG_MATERIALS[0];
}

function calculateConfiguratorPrice() {
  const matBase = {
    papier_std: 0.14,
    papier_fsc: 0.17,
    folia: 0.12,
    mono: 0.19
  }[appState.materialChoice] ?? 0.15;
  const finBase = {
    brak: 0,
    mat: 0.03,
    blysk: 0.04,
    tloczenie: 0.07
  }[appState.configFinish] ?? 0;
  const unit = matBase + finBase;
  const total = unit * appState.quantity + 180;

  return {
    unit,
    total
  };
}

function renderNav() {
  return views
    .map(
      ([id, label]) => `
        <button class="${appState.currentView === id ? 'is-active' : ''}" data-view="${id}">
          <strong>${label}</strong>
        </button>
      `
    )
    .join('');
}

function renderOverview() {
  const template = getTemplate();
  return `
    <section class="view ${appState.currentView === 'overview' ? 'is-active' : ''}" id="view-overview">
      <div class="hero">
        <article class="panel hero__copy">
          <div class="eyebrow">MVP platformy B2B do etykiet i opakowań</div>
          <h1>Packflow OS prowadzi od briefu do domówienia.</h1>
          <p>
            To nie jest kreator wszystkiego dla wszystkich. To kontrolowany proces dla agencji,
            marek i producentów, którzy muszą utrzymać spójność brandu, zgodność z wymaganiami i
            gotowość do produkcji.
          </p>
          <div class="pills">
            <div class="pill">2 ścieżki: agencja i producent</div>
            <div class="pill">Reguły produktu i obowiązkowe pola</div>
            <div class="pill">Wycena, preflight i reminder wznowień</div>
          </div>
          <div class="quick-actions" style="margin-top: 24px; grid-template-columns: repeat(2, minmax(0, max-content));">
            <button class="button button--primary" data-goto="onboarding">Przejdź do onboardingu</button>
            <button class="button button--ghost" data-goto="configurator">Zobacz konfigurator</button>
          </div>
        </article>
        <aside class="panel hero__board">
          <div class="eyebrow">Przykładowy przepływ</div>
          <h3>Agencja buduje standard, klient zamawia kolejne warianty bez chaosu.</h3>
          <div class="steps">
            ${[
              'Agencja tworzy klienta i projekt bazowy',
              'Ustala blokady i pola edytowalne',
              'Klient uzupełnia tylko dozwolone treści',
              'Preflight sprawdza kompletność i gotowość',
              'Platforma wycenia, uruchamia produkcję i przypomina o wznowieniu'
            ]
              .map(
                (item, index) => `
                  <div class="steps__item">
                    <div class="steps__index">0${index + 1}</div>
                    <div>
                      <strong>${item}</strong>
                    </div>
                    <span class="pill">MVP</span>
                  </div>
                `
              )
              .join('')}
          </div>
        </aside>
      </div>

      <div class="section-head">
        <div class="section-title">
          <h2>Co już pokazuje ten MVP</h2>
          <p>Najmniejszy sensowny zakres do rozmowy o produkcie, procesie i hostingu.</p>
        </div>
      </div>

      <div class="stats-grid">
        <article class="card stat">
          <span class="eyebrow">Typy kont</span>
          <strong>2</strong>
          <span>Agencja/studio oraz producent/marka</span>
        </article>
        <article class="card stat">
          <span class="eyebrow">Produkty</span>
          <strong>${templates.length}</strong>
          <span>Na razie demo dla etykiet i opakowań z regułami</span>
        </article>
        <article class="card stat">
          <span class="eyebrow">Kontrole</span>
          <strong>5</strong>
          <span>Obowiązkowe pola, eko alert, preflight, wycena, reminder</span>
        </article>
        <article class="card stat">
          <span class="eyebrow">Tryb demo</span>
          <strong>100%</strong>
          <span>Statycznie, gotowe do GitHub Pages</span>
        </article>
      </div>

      <div class="section-head">
        <div class="section-title">
          <h2>Aktualny template demo</h2>
          <p>Poniżej stan, który przechodzi przez konfigurator, kontrolowany edytor i wycenę.</p>
        </div>
      </div>

      <div class="dashboard-grid">
        <article class="card">
          <h3>${template.name}</h3>
          <div class="project-meta">
            <div class="chip">Format: ${template.format}</div>
            <div class="chip">Materiał: ${template.material}</div>
            <div class="chip">Wykończenie: ${appState.finish}</div>
            <div class="chip">Eko: ${template.eco}</div>
          </div>
          <ul class="list">
            ${template.obligatory.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>

        <article class="preview-card">
          <h3>Dlaczego GitHub Pages ma sens?</h3>
          <p>
            Ten MVP nie wymaga backendu. Działa jako statyczne SPA z mockowanymi danymi, więc można
            je bezproblemowo wystawić na GitHub Pages, a później podmienić źródła danych lub dołożyć API.
          </p>
          <div class="footer-note">
            <strong>W kolejnym kroku</strong>
            <p class="muted">Najbardziej naturalna ewolucja to logowanie, prawdziwy preflight plików i silnik cenowy.</p>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderOnboarding() {
  const isAgency = appState.accountType === 'agency';

  return `
    <section class="view ${appState.currentView === 'onboarding' ? 'is-active' : ''}" id="view-onboarding">
      <div class="section-head">
        <div class="section-title">
          <h2>Onboarding i typ konta</h2>
          <p>Ten ekran rozdziela ścieżkę agencyjną od ścieżki producenta już na wejściu.</p>
        </div>
      </div>

      <div class="onboarding-grid">
        <article class="panel">
          <div class="tabs" role="tablist" aria-label="Typ konta">
            <button class="${isAgency ? 'is-active' : ''}" data-account-type="agency">Agencja / studio</button>
            <button class="${!isAgency ? 'is-active' : ''}" data-account-type="producer">Producent / marka</button>
          </div>

          <div class="choice-grid">
            <button class="choice-card ${isAgency ? 'is-active' : ''}" data-account-type="agency">
              <strong>Zarządzaj klientami</strong>
              <p class="muted">Tworzenie klientów, wzorców, blokad i akceptacji.</p>
            </button>
            <button class="choice-card ${!isAgency ? 'is-active' : ''}" data-account-type="producer">
              <strong>Uruchom swój produkt</strong>
              <p class="muted">Prowadzony konfigurator, preflight i zamówienie bez wiedzy poligraficznej.</p>
            </button>
          </div>

          <div class="form-grid" style="margin-top: 20px;">
            <label class="field-block">
              <span>Nazwa firmy</span>
              <input class="field" name="teamName" value="${appState.teamName}" />
            </label>
            <label class="field-block">
              <span>${isAgency ? 'Pierwszy klient' : 'Marka / linia produktowa'}</span>
              <input class="field" name="clientName" value="${appState.clientName}" />
            </label>
            <label class="field-block field-block--full">
              <span>Zaproszeni użytkownicy</span>
              <input class="field" value="anna@brand.pl, production@atelier.pl, approval@atelier.pl" readonly />
              <small class="field-help">MVP pokazuje role: projektant, klient i osoba akceptująca.</small>
            </label>
          </div>
        </article>

        <aside class="preview-card">
          <h3>${isAgency ? 'Co dostaje agencja' : 'Co dostaje producent'}</h3>
          <ul class="list">
            ${(
              isAgency
                ? [
                    'Widok klientów i projektów bazowych',
                    'Możliwość ustawienia stałych oraz edytowalnych pól',
                    'Akceptacja wariantu przed wyceną i produkcją',
                    'Biblioteka wdrożonych standardów do ponownego użycia'
                  ]
                : [
                    'Prowadzony dobór typu opakowania i materiału',
                    'Podpowiedzi prawne i techniczne przy wyborze produktu',
                    'Podgląd mockupu i lista błędów preflight',
                    'Prosta ścieżka domówienia bez startu od zera'
                  ]
            )
              .map((item) => `<li>${item}</li>`)
              .join('')}
          </ul>
          <div class="highlight" style="margin-top: 20px;">
            <strong>MVP decision</strong>
            <p class="muted">Cały onboarding jest jeden, ale układ dashboardu i CTA zmieniają się zależnie od typu konta.</p>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderDashboard() {
  const isAgency = appState.accountType === 'agency';
  return `
    <section class="view ${appState.currentView === 'dashboard' ? 'is-active' : ''}" id="view-dashboard">
      <div class="section-head">
        <div class="section-title">
          <h2>Dashboard operacyjny</h2>
          <p>Skrót do tego, co użytkownik ma zrobić teraz: akceptować, domawiać, poprawiać lub uruchamiać projekt.</p>
        </div>
        <button class="button button--primary" data-goto="configurator">Nowy projekt</button>
      </div>

      <div class="stats-grid">
        <article class="card stat">
          <span class="eyebrow">Wersje plików</span>
          <strong>12</strong>
          <span>Ostatnia aktualizacja dziś, 09:42</span>
        </article>
        <article class="card stat">
          <span class="eyebrow">Do akceptacji</span>
          <strong>3</strong>
          <span>1 blokuje produkcję</span>
        </article>
        <article class="card stat">
          <span class="eyebrow">Zamówienia</span>
          <strong>8</strong>
          <span>2 w druku, 1 w dostawie</span>
        </article>
        <article class="card stat">
          <span class="eyebrow">Remindery</span>
          <strong>5</strong>
          <span>Najbliższy za 12 dni</span>
        </article>
      </div>

      <div class="dashboard-grid" style="margin-top: 20px;">
        <article class="card">
          <h3>${isAgency ? 'Klienci i projekty' : 'Twoje projekty'}</h3>
          <div class="project-row">
            <div>
              <strong>Rumunia Reserve 2026</strong>
              <p class="muted">Wariant PL/EN, status: do sprawdzenia</p>
            </div>
            <span class="status-pill">Do akceptacji</span>
          </div>
          <div class="project-row" style="margin-top: 12px;">
            <div>
              <strong>Honey Drop Mini</strong>
              <p class="muted">Szablon sezonowy, status: szkic</p>
            </div>
            <span class="status-pill">Szkic</span>
          </div>
          <div class="project-row" style="margin-top: 12px;">
            <div>
              <strong>Winter Gift Box</strong>
              <p class="muted">Gotowe do produkcji, możliwe domówienie</p>
            </div>
            <span class="status-pill">Approved</span>
          </div>
        </article>

        <article class="card">
          <h3>Wymaga uwagi</h3>
          <div class="approval-row">
            <div>
              <strong>Preflight wykrył brak partii i zbyt mały font przy 750 ml</strong>
              <p class="muted">Template: Etykieta na wino</p>
            </div>
            <button class="button button--ghost" data-goto="editor">Napraw</button>
          </div>
          <div class="approval-row" style="margin-top: 12px;">
            <div>
              <strong>Domówienie sugerowane za 3 miesiące</strong>
              <p class="muted">Na podstawie poprzedniego nakładu 3000 szt.</p>
            </div>
            <button class="button button--ghost" data-goto="order">Zobacz</button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderConfigurator() {
  const template = getTemplate();
  const roleIsAgency = appState.accountType === 'agency';
  const lockedFormat = roleIsAgency;
  const lockedFinish = roleIsAgency;
  const selectedMaterial = getMaterialById(appState.materialChoice);
  const price = calculateConfiguratorPrice();
  const showEcoWarning = !selectedMaterial.eco && appState.configFinish !== 'brak';
  const ecoSummaryTitle = selectedMaterial.eco
    ? 'Dobry wybor srodowiskowy'
    : 'Rozwaz wariant bardziej ekologiczny';
  const ecoSummaryText = selectedMaterial.eco
    ? `${selectedMaterial.label} to odpowiedzialny material o mniejszym sladzie i prostszym recyklingu.`
    : `Wybrano ${selectedMaterial.label}. Rekomendujemy Papier FSC z recyklingu lub Papier monomaterialowy.`;
  const preflightChecks = [
    {
      label: 'Format i spady 3 mm',
      ok: true
    },
    {
      label: 'Zgodnosc z wykrojnikiem',
      ok: true
    },
    {
      label: 'Rozdzielczosc pliku',
      ok: appState.fileUploaded
    },
    {
      label: 'Wymagane oznaczenia prawne',
      ok: true
    },
    {
      label: 'Plik przeslany',
      ok: appState.fileUploaded
    }
  ];
  const priceRows = [
    {
      label: `Material (${selectedMaterial.label})`,
      value: `${(price.unit * appState.quantity * 0.6).toFixed(0)} zl`
    },
    {
      label: 'Wykonczenie',
      value: `${(price.unit * appState.quantity * 0.4).toFixed(0)} zl`
    },
    {
      label: `Naklad: ${appState.quantity.toLocaleString('pl-PL')} szt.`,
      value: '--'
    },
    {
      label: 'Przygotowanie do druku',
      value: '180 zl'
    }
  ];
  const activeStepLabel = configuratorSteps[appState.configuratorStep];
  const helpText = configuratorHelp[appState.configuratorStep];
  const previewSugarLine = appState.legal.isSparkling ? appState.legal.sugar : '';
  const previewAllergenLine = appState.legal.hasSiarczyny ? 'Zawiera siarczyny.' : '';

  return `
    <section class="view ${appState.currentView === 'configurator' ? 'is-active' : ''}" id="view-configurator">
      <div class="config-shell">
        <div class="config-header">
          <div class="brand" style="gap: 10px;">
            <div class="brand__mark" style="width: 30px; height: 30px; border-radius: 8px; font-size: 0.8rem;">D</div>
            <strong>Drukomat</strong>
          </div>
          <div class="muted">Konfigurator · Etykieta na wino</div>
          <div class="config-role">
            <button class="config-role__button ${!roleIsAgency ? 'is-active' : ''}" data-config-role="producer">Producent</button>
            <button class="config-role__button ${roleIsAgency ? 'is-active' : ''}" data-config-role="agency">Agencja</button>
          </div>
        </div>

        ${
          roleIsAgency
            ? `
              <div class="config-agency-info">
                Tryb agencji: pola oznaczone jako zablokowane sa ustalone w szablonie i producent nie moze ich zmienic.
              </div>
            `
            : ''
        }

        <div class="config-body">
          <div class="config-flow-bar">
            <button
              class="button button--ghost"
              data-config-nav="prev"
              ${appState.configuratorStep === 0 ? 'disabled' : ''}
            >
              Wstecz
            </button>

            <div class="config-flow-steps">
              ${configuratorSteps
                .map((label, index) => {
                  const isActive = appState.configuratorStep === index;
                  const isDone = appState.configuratorStep > index;

                  return `
                    <button class="config-flow-step ${isActive ? 'is-active' : ''}" data-config-step="${index}">
                      <span class="config-flow-step__badge ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''}">${
                        isDone ? '✓' : index + 1
                      }</span>
                      <span>${label}</span>
                    </button>
                  `;
                })
                .join('')}
            </div>

            <button
              class="button button--primary"
              data-config-nav="next"
              ${appState.configuratorStep === configuratorSteps.length - 1 ? 'disabled' : ''}
            >
              Dalej
            </button>
          </div>

          <div class="config-main-wrap">
            <article class="panel config-main">
              <div>
                <h2>${activeStepLabel}</h2>
                <p class="muted">${helpText}</p>
              </div>

              ${renderConfiguratorStepContent(template, {
                lockedFormat,
                lockedFinish,
                selectedMaterial,
                ecoSummaryTitle,
                ecoSummaryText,
                showEcoWarning,
                preflightChecks,
                priceRows,
                previewSugarLine,
                previewAllergenLine
              })}
            </article>

            <aside class="config-help">
              <div class="card">
                <div class="eyebrow">Pomoc kontekstowa</div>
                <p>${helpText}</p>
              </div>
              <div class="card" style="margin-top: 12px;">
                <div class="eyebrow">Szacowana cena</div>
                <h3 style="margin-top: 6px;">${price.total.toFixed(0)} zl</h3>
                <p class="muted">${appState.quantity.toLocaleString('pl-PL')} szt.</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderConfiguratorStepContent(
  template,
  {
    lockedFormat,
    lockedFinish,
    selectedMaterial,
    ecoSummaryTitle,
    ecoSummaryText,
    showEcoWarning,
    preflightChecks,
    priceRows,
    previewSugarLine,
    previewAllergenLine
  }
) {
  if (appState.configuratorStep === 0) {
    return `
      <div class="product-grid" style="margin-top: 18px;">
        ${CONFIG_CATEGORIES
          .map(
            (category) => `
              <button class="product-card ${category.id === appState.category ? 'is-active' : ''}" data-config-choice="category" data-value="${category.id}" ${
                category.disabled ? 'disabled' : ''
              }>
                <strong>${category.label}</strong>
                <p class="muted">${category.note}</p>
              </button>
            `
          )
          .join('')}
      </div>
    `;
  }

  if (appState.configuratorStep === 1) {
    return `
      <div class="form-grid" style="margin-top: 20px;">
        <label class="field-block">
          <span>Format ${lockedFormat ? '<span class="chip">zablokowane</span>' : ''}</span>
          <select class="select" name="formatChoice" ${lockedFormat ? 'disabled' : ''}>
            ${CONFIG_FORMATS
              .map(
                (option) => `<option value="${option}" ${appState.formatChoice === option ? 'selected' : ''}>${option}</option>`
              )
              .join('')}
          </select>
        </label>
        <label class="field-block">
          <span>Material</span>
          <select class="select" name="materialChoice">
            ${CONFIG_MATERIALS.map(
              (material) =>
                `<option value="${material.id}" ${appState.materialChoice === material.id ? 'selected' : ''}>${material.label}${
                  material.eco ? ' · eko' : ''
                }</option>`
            ).join('')}
          </select>
        </label>
        <label class="field-block">
          <span>Klej</span>
          <select class="select" name="adhesive">
            ${CONFIG_GLUES.map(
              (glue) => `<option value="${glue.id}" ${appState.adhesive === glue.id ? 'selected' : ''}>${glue.label}</option>`
            ).join('')}
          </select>
        </label>
        <label class="field-block">
          <span>Uszlachetnienie ${lockedFinish ? '<span class="chip">zablokowane</span>' : ''}</span>
          <select class="select" name="configFinish" ${lockedFinish ? 'disabled' : ''}>
            ${CONFIG_FINISHES.map(
              (finish) => `<option value="${finish.id}" ${appState.configFinish === finish.id ? 'selected' : ''}>${finish.label}</option>`
            ).join('')}
          </select>
        </label>
        <label class="field-block">
          <span>Naklad</span>
          <select class="select" name="quantity">
            ${CONFIG_QUANTITIES.map(
              (quantity) =>
                `<option value="${quantity}" ${appState.quantity === quantity ? 'selected' : ''}>${quantity.toLocaleString('pl-PL')}</option>`
            ).join('')}
          </select>
        </label>
      </div>
    `;
  }

  if (appState.configuratorStep === 2) {
    return `
      <div class="highlight">
        <strong>${ecoSummaryTitle}</strong>
        <p class="muted">${ecoSummaryText}</p>
      </div>
      ${
        showEcoWarning
          ? `
            <div class="warning" style="margin-top: 14px;">
              Wybrane polaczenie materialu i uszlachetnienia utrudnia recykling. Rozwaz wariant bez laminatu lub material monomaterialowy.
            </div>
          `
          : ''
      }
      <div style="margin-top: 16px;">
        <div class="eyebrow">Oznaczenia do dodania</div>
        <div class="choice-grid">
          ${[
            ['Biodegradowalna etykieta', 'do pobrania jako plik'],
            ['FSC', 'certyfikat papieru'],
            ['Nadaje sie do recyklingu', 'ogolny symbol']
          ]
            .map(
              ([title, subtitle]) => `
                <div class="mini-card">
                  <strong>${title}</strong>
                  <span class="muted">${subtitle}</span>
                </div>
              `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  if (appState.configuratorStep === 3) {
    return `
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field-block">
          <span>Kraj pochodzenia</span>
          <input class="field" name="legal.country" value="${appState.legal.country}" />
        </label>
        <label class="field-block">
          <span>Zawartosc alkoholu</span>
          <input class="field" name="legal.abv" value="${appState.legal.abv}" />
        </label>
        <label class="field-block">
          <span>Pojemnosc nominalna</span>
          <input class="field" name="legal.volume" value="${appState.legal.volume}" />
        </label>
        <label class="field-block">
          <span>Numer partii</span>
          <input class="field" name="legal.batch" value="${appState.legal.batch}" />
        </label>
        <label class="field-block field-block--full">
          <span>Alergeny</span>
          <div class="inline-actions" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
            <button class="button button--ghost ${appState.legal.hasSiarczyny ? 'is-active' : ''}" data-config-toggle="legal.hasSiarczyny">Zawiera siarczyny</button>
            <button class="button button--ghost ${appState.legal.isSparkling ? 'is-active' : ''}" data-config-toggle="legal.isSparkling">Wino musujace</button>
          </div>
        </label>
        ${
          appState.legal.isSparkling
            ? `
              <label class="field-block">
                <span>Poziom cukru</span>
                <input class="field" name="legal.sugar" value="${appState.legal.sugar}" />
              </label>
            `
            : ''
        }
      </div>
      <div class="card" style="margin-top: 14px;">
        <strong>Kod QR do e-etykiety</strong>
        <p class="muted">Sklad i wartosc odzywcza mozesz podac przez QR (min. 13x13 mm, bez tresci handlowych).</p>
        <button class="button ${appState.legal.qrEnabled ? 'button--primary' : 'button--ghost'}" data-config-toggle="legal.qrEnabled">
          ${appState.legal.qrEnabled ? 'Wlaczony' : 'Wylaczony'}
        </button>
      </div>
      <div class="mini-card" style="margin-top: 14px;">
        <strong>Podglad tylnej etykiety</strong>
        <div class="tiny" style="margin-top: 8px; line-height: 1.7;">
          <div>WINO</div>
          <div>${appState.legal.country}</div>
          <div>alk. ${appState.legal.abv} obj.</div>
          <div>${appState.legal.volume}</div>
          <div>${previewSugarLine}</div>
          <div>${previewAllergenLine}</div>
          <div>${appState.legal.batch}</div>
        </div>
      </div>
    `;
  }

  if (appState.configuratorStep === 4) {
    return `
      ${
        appState.fileUploaded
          ? `
            <div class="card" style="margin-top: 12px;">
              <strong>projekt_wino_rumunia_v3.ai</strong>
              <p class="muted">4.2 MB · przeslano teraz</p>
              <button class="button button--ghost" data-config-action="remove-file">Usun</button>
            </div>
          `
          : `
            <div class="warning" style="margin-top: 12px; text-align: center;">
              <strong>Przeciagnij plik lub wybierz z dysku</strong>
              <p class="muted">PDF, AI · spady 3 mm · CMYK</p>
              <button class="button button--primary" data-config-action="upload-file">Symuluj przeslanie pliku</button>
            </div>
          `
      }
      <div class="dashboard-grid" style="margin-top: 14px;">
        <div class="card">
          <h3>Kontrola automatyczna</h3>
          <ul class="list">
            ${preflightChecks
              .map(
                (check) => `<li>${check.ok ? '✓' : '⚠'} ${check.label}</li>`
              )
              .join('')}
          </ul>
        </div>
        <div class="card">
          <h3>Mockup</h3>
          <p class="muted">Podglad wg wybranego formatu i materialu.</p>
        </div>
      </div>
    `;
  }

  return `
    ${
      !appState.orderPlaced
        ? `
          <div class="card">
            <h3>Podsumowanie konfiguracji</h3>
            ${priceRows
              .map(
                (row) => `
                  <div class="summary-row">
                    <span>${row.label}</span>
                    <strong>${row.value}</strong>
                  </div>
                `
              )
              .join('')}
            <div class="summary-row">
              <span style="font-family: 'Space Grotesk', sans-serif;">Razem</span>
              <strong>${calculateConfiguratorPrice().total.toFixed(0)} zl</strong>
            </div>
          </div>
          <div class="field-block" style="margin-top: 16px;">
            <span>Sposob dostawy</span>
            <select class="select" name="delivery">
              ${CONFIG_DELIVERIES.map(
                (delivery) => `<option value="${delivery}" ${appState.delivery === delivery ? 'selected' : ''}>${delivery}</option>`
              ).join('')}
            </select>
          </div>
          <button class="button button--primary" style="margin-top: 16px;" data-config-action="place-order">Zloz zamowienie</button>
        `
        : `
          <div class="highlight">
            <strong>Zamowienie przyjete</strong>
            <p class="muted">Numer zamowienia DR-24817. Powiadomimy Cie o statusie produkcji.</p>
          </div>
          <div class="card" style="margin-top: 14px;">
            <strong>Przypomnienie o domowieniu</strong>
            <p class="muted">Wysylka przypomnienia za 3 miesiace, gdy etykiety zaczna sie konczyc.</p>
            <button class="button ${appState.reminderOn ? 'button--primary' : 'button--ghost'}" data-config-action="toggle-reminder">${
              appState.reminderOn ? 'Wlaczone' : 'Wylaczone'
            }</button>
          </div>
          <button class="button button--ghost" style="margin-top: 14px;" data-config-action="new-project">Rozpocznij nowy projekt</button>
        `
    }
    <div class="alert" style="margin-top: 16px;">
      <strong>Template:</strong> ${template.name}<br />
      <strong>Material:</strong> ${selectedMaterial.label}<br />
      <strong>Wykonczenie:</strong> ${getFinishLabelById(appState.configFinish)}
    </div>
  `;
}

function renderEditor() {
  const fields = appState.fields;
  return `
    <section class="view ${appState.currentView === 'editor' ? 'is-active' : ''}" id="view-editor">
      <div class="section-head">
        <div class="section-title">
          <h2>Kontrolowany edytor</h2>
          <p>Agencja blokuje strukturę. Klient zmienia tylko wskazane treści, a podgląd od razu pokazuje wynik.</p>
        </div>
      </div>

      <div class="editor-grid">
        <article class="panel">
          <h3>Pola edytowalne</h3>
          <div class="form-grid" style="margin-top: 18px;">
            ${[
              ['productName', 'Nazwa produktu'],
              ['productCategory', 'Kategoria'],
              ['country', 'Kraj pochodzenia'],
              ['alcohol', 'Alkohol'],
              ['volume', 'Pojemność'],
              ['batch', 'Partia'],
              ['language', 'Wersja językowa'],
              ['claim', 'Claim eko']
            ]
              .map(
                ([key, label]) => `
                  <label class="field-block">
                    <span>${label}</span>
                    <input class="field" name="${key}" value="${fields[key]}" />
                  </label>
                `
              )
              .join('')}
            <label class="field-block field-block--full">
              <span>Butelkowane przez</span>
              <textarea class="textarea" name="bottler" rows="2">${fields.bottler}</textarea>
            </label>
            <label class="field-block field-block--full">
              <span>Energia / kcal</span>
              <textarea class="textarea" name="energy" rows="2">${fields.energy}</textarea>
            </label>
            <label class="field-block field-block--full">
              <span>Składniki i QR</span>
              <textarea class="textarea" name="ingredients" rows="2">${fields.ingredients}</textarea>
            </label>
            <label class="field-block field-block--full">
              <span>Alergeny</span>
              <textarea class="textarea" name="allergens" rows="2">${fields.allergens}</textarea>
            </label>
          </div>

          <div class="preview-fixed" style="margin-top: 18px;">
            <strong>Pola zablokowane</strong>
            <div class="locked-grid">
              <div class="mini-card">
                <strong>Logo i układ</strong>
                <span class="muted">Stałe na poziomie template</span>
              </div>
              <div class="mini-card">
                <strong>Kolorystyka</strong>
                <span class="muted">Zgodna z brand systemem</span>
              </div>
              <div class="mini-card">
                <strong>Typografia</strong>
                <span class="muted">Kontrolowana przez agencję</span>
              </div>
              <div class="mini-card">
                <strong>Pole obowiązkowe</strong>
                <span class="muted">Nie da się go usunąć</span>
              </div>
            </div>
          </div>
        </article>

        <aside class="preview-card">
          <h3>Podgląd etykiety</h3>
          <div class="preview-label" aria-label="Podgląd etykiety na wino">
            <div class="preview-label__title">${fields.productName}</div>
            <div class="preview-label__block">
              <strong>${fields.productCategory}</strong>
              <span>${fields.country}</span>
              <span>${fields.alcohol}</span>
            </div>
            <div class="preview-label__block">
              <strong>${fields.volume}</strong>
            </div>
            <div class="preview-label__block">
              <span>${fields.bottler}</span>
            </div>
            <div class="preview-label__block">
              <span>${fields.energy}</span>
            </div>
            <div class="preview-label__block">
              <span>${fields.ingredients}</span>
              <div class="preview-qr" aria-hidden="true"></div>
            </div>
            <div class="preview-label__block">
              <span>${fields.allergens}</span>
              <span>${fields.batch}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderOrder() {
  const quote = calculateQuote();
  return `
    <section class="view ${appState.currentView === 'order' ? 'is-active' : ''}" id="view-order">
      <div class="section-head">
        <div class="section-title">
          <h2>Wycena, zamówienie i domówienie</h2>
          <p>Konfiguracja spina się tu z preflightem, ceną, lead time i przypomnieniem o kolejnym nakładzie.</p>
        </div>
      </div>

      <div class="order-grid">
        <article class="panel">
          <h3>Podsumowanie produkcyjne</h3>
          <div class="summary-grid" style="margin-top: 18px;">
            <div class="summary-row">
              <span>Produkt</span>
              <strong>${getTemplate().name}</strong>
            </div>
            <div class="summary-row">
              <span>Materiał</span>
              <strong>${getTemplate().material}</strong>
            </div>
            <div class="summary-row">
              <span>Nakład</span>
              <strong>${appState.quantity} szt.</strong>
            </div>
            <div class="summary-row">
              <span>Wykończenie</span>
              <strong>${appState.finish}</strong>
            </div>
          </div>

          <div class="highlight" style="margin-top: 20px;">
            <strong>Preflight</strong>
            <ul class="list">
              <li>Format zgodny z template: OK</li>
              <li>Pola obowiązkowe uzupełnione: OK</li>
              <li>Minimalna informacja o pojemności: do potwierdzenia przy finalnym pliku PDF</li>
              <li>Ekologiczna rekomendacja: zachowana</li>
            </ul>
          </div>

          <label class="field-block" style="margin-top: 20px;">
            <span>Reminder o domówieniu</span>
            <select class="select" name="reminderMonths">
              ${[1, 3, 6]
                .map(
                  (months) =>
                    `<option value="${months}" ${appState.reminderMonths === months ? 'selected' : ''}>Wyślij za ${months} ${months === 1 ? 'miesiąc' : months < 5 ? 'miesiące' : 'miesięcy'}</option>`
                )
                .join('')}
            </select>
          </label>
        </article>

        <aside class="preview-card">
          <h3>Szacunkowa wycena</h3>
          <div class="summary-row" style="margin-top: 18px;">
            <span>Produkcja</span>
            <strong>${formatPrice(quote.production)}</strong>
          </div>
          <div class="summary-row">
            <span>Przygotowanie i template</span>
            <strong>${formatPrice(quote.service)}</strong>
          </div>
          <div class="summary-row">
            <span>Preflight</span>
            <strong>${formatPrice(quote.preflight)}</strong>
          </div>
          <div class="summary-row">
            <span>Razem</span>
            <strong>${formatPrice(quote.total)}</strong>
          </div>
          <div class="footer-note">
            <strong>Lead time: ${quote.leadTime}</strong>
            <p class="muted">Statusy realizacji: przygotowanie pliku → akceptacja → produkcja → wysyłka.</p>
          </div>
          <ul class="timeline">
            <li><span>Projekt zatwierdzony</span><strong>Dziś</strong></li>
            <li><span>Plik trafia do produkcji</span><strong>+1 dzień</strong></li>
            <li><span>Wysyłka</span><strong>${quote.leadTime}</strong></li>
            <li><span>Reminder o wznowieniu</span><strong>+${appState.reminderMonths} mies.</strong></li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function renderKnowledge() {
  return `
    <section class="view ${appState.currentView === 'knowledge' ? 'is-active' : ''}" id="view-knowledge">
      <div class="section-head">
        <div class="section-title">
          <h2>Baza wiedzy i mikrotreści</h2>
          <p>Małe bloki wiedzy, które później można osadzać przy zamówieniu, w preflight lub w dashboardzie.</p>
        </div>
      </div>

      <div class="knowledge-grid">
        ${knowledge
          .map(
            (item) => `
              <article class="kb-card">
                <span class="pill">${item.tag}</span>
                <h3>${item.title}</h3>
                <p>${item.body}</p>
              </article>
            `
          )
          .join('')}
      </div>

      <div class="dashboard-grid" style="margin-top: 20px;">
        <article class="list-card">
          <h3>Dla projektantów</h3>
          <ul class="list">
            <li>Jak działa platforma</li>
            <li>Prześlij projekt klienta</li>
            <li>Pracuj na wykrojnikach</li>
            <li>Twórz warianty produktu</li>
            <li>Przekaż projekt do zamówienia</li>
            <li>Zarządzaj wznowieniami</li>
            <li>Program partnerski</li>
          </ul>
        </article>

        <article class="list-card">
          <h3>Rozszerzenia po MVP</h3>
          <ul class="list">
            <li>Upload plików i prawdziwy parser PDF/AI</li>
            <li>Role per klient i per projekt</li>
            <li>API do silnika cenowego i magazynu materiałów</li>
            <li>Zasilenie bazy produktów realnym katalogiem</li>
            <li>Powiadomienia mailowe i taski akceptacyjne</li>
          </ul>
        </article>
      </div>
    </section>
  `;
}

function render() {
  app.innerHTML = `
    <div class="shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand__mark">P</div>
          <div class="brand__text">
            <strong>Packflow OS</strong>
            <span>MVP platformy etykiet i opakowań</span>
          </div>
        </div>
        <div class="topbar__actions">
          <button class="button button--ghost" data-goto="dashboard">Dashboard</button>
          <button class="button button--dark" data-goto="order">Pokaż wycenę</button>
        </div>
      </header>

      <nav class="main-nav-horizontal">
        ${renderNav()}
      </nav>

      <div class="main-status-row">
        <span class="chip">${appState.accountType === 'agency' ? 'Agencja / studio' : 'Producent / marka'}</span>
        <span class="chip">Template: ${getTemplate().name}</span>
        <span class="chip">Nakład: ${appState.quantity} szt.</span>
      </div>

      <main class="content">
        ${renderOverview()}
        ${renderOnboarding()}
        ${renderDashboard()}
        ${renderConfigurator()}
        ${renderEditor()}
        ${renderOrder()}
        ${renderKnowledge()}
      </main>
    </div>
  `;

  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-view], [data-goto]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.currentView = button.dataset.view ?? button.dataset.goto;
      render();
    });
  });

  document.querySelectorAll('[data-account-type]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.accountType = button.dataset.accountType;
      render();
    });
  });

  document.querySelectorAll('[data-template-id]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.templateId = button.dataset.templateId;
      updateTemplateDependentState(getTemplate());
      render();
    });
  });

  document.querySelectorAll('[data-config-step]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.configuratorStep = Number(button.dataset.configStep);
      render();
    });
  });

  document.querySelectorAll('[data-step-action]').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.stepAction === 'prev') {
        appState.configuratorStep = Math.max(0, appState.configuratorStep - 1);
      } else {
        appState.configuratorStep = Math.min(configuratorSteps.length - 1, appState.configuratorStep + 1);
      }

      render();
    });
  });

  document.querySelectorAll('[data-config-nav]').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.configNav === 'prev') {
        appState.configuratorStep = Math.max(0, appState.configuratorStep - 1);
      } else {
        appState.configuratorStep = Math.min(configuratorSteps.length - 1, appState.configuratorStep + 1);
      }

      render();
    });
  });

  document.querySelectorAll('[data-config-role]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.accountType = button.dataset.configRole;
      render();
    });
  });

  document.querySelectorAll('[data-state-field][data-state-value]').forEach((button) => {
    button.addEventListener('click', () => {
      appState[button.dataset.stateField] = button.dataset.stateValue;
      render();
    });
  });

  document.querySelectorAll('[data-config-choice][data-value]').forEach((button) => {
    button.addEventListener('click', () => {
      const field = button.dataset.configChoice;
      if (field === 'category' && button.hasAttribute('disabled')) {
        return;
      }

      appState[field] = button.dataset.value;
      render();
    });
  });

  document.querySelectorAll('[data-config-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.configToggle;
      if (!key.startsWith('legal.')) {
        return;
      }

      const legalKey = key.split('.')[1];
      appState.legal[legalKey] = !appState.legal[legalKey];
      render();
    });
  });

  document.querySelectorAll('[data-config-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.configAction;

      if (action === 'upload-file') {
        appState.fileUploaded = true;
      }
      if (action === 'remove-file') {
        appState.fileUploaded = false;
      }
      if (action === 'place-order') {
        appState.orderPlaced = true;
      }
      if (action === 'toggle-reminder') {
        appState.reminderOn = !appState.reminderOn;
      }
      if (action === 'new-project') {
        appState.configuratorStep = 0;
        appState.orderPlaced = false;
        appState.fileUploaded = false;
      }

      render();
    });
  });

  document.querySelectorAll('input[name], textarea[name], select[name]').forEach((field) => {
    field.addEventListener('input', (event) => {
      const { name, value } = event.target;

      if (name === 'quantity' || name === 'reminderMonths') {
        appState[name] = Number(value);
      } else if (name.startsWith('legal.')) {
        const legalKey = name.split('.')[1];
        appState.legal[legalKey] = value;
      } else if (name in appState.fields) {
        appState.fields[name] = value;
      } else {
        appState[name] = value;
      }

      render();
    });
  });
}

render();