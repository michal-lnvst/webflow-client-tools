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

const knowledgeSectors = [
  {
    id: 'technical',
    title: '1. Porady techniczne',
    description: 'Przygotowanie plików i poprawne ustawienia przed produkcją.',
    audience: 'all',
    items: [
      'Jak przygotować pliki PDF pod druk (spady, marginesy bezpieczne, osadzone fonty).',
      'Jak dobrać format etykiety do produktu i wykrojnika.',
      'Jak działa preflight i które błędy blokują produkcję.'
    ]
  },
  {
    id: 'eco',
    title: '2. Porady ekologiczne',
    description: 'Jak planować markę i opakowanie, aby były bardziej eko od początku.',
    audience: 'all',
    items: [
      'Jak wybierać materiały i wykończenia łatwiejsze w recyklingu.',
      'Jak ograniczyć nadmiar uszlachetnień bez utraty jakości odbioru marki.',
      'Jak planować serię produktów pod jeden spójny system opakowań.'
    ]
  },
  {
    id: 'compliance',
    title: '3. Porady compliance',
    description: 'Co musi znaleźć się na etykiecie i jakiej wielkości elementy są wymagane.',
    audience: 'all',
    items: [
      'Lista obowiązkowych pól dla kategorii produktu (np. wino, kosmetyki, spożywcze).',
      'Minimalne wielkości tekstu i zasady czytelności.',
      'Jak uniknąć błędów formalnych przed akceptacją projektu.'
    ]
  },
  {
    id: 'agency-affiliate',
    title: '4. Program afiliacyjny',
    description: 'WIDOK TYLKO DLA AGENCJI: jak działa program afiliacyjny.',
    audience: 'agency',
    items: [
      'Zasady naliczania prowizji i progi partnerskie.',
      'Jak śledzić leady i zamówienia przypisane do agencji.',
      'Jak raportować wyniki i rozliczać kampanie partnerskie.'
    ]
  },
  {
    id: 'producer-templates',
    title: '5. Praca z szablonami',
    description: 'WIDOK TYLKO DLA PRODUCENTÓW: jak korzystać z szablonów.',
    audience: 'producer',
    items: [
      'Jak wybrać szablon pod kategorię i format produktu.',
      'Które pola możesz edytować samodzielnie, a które są zablokowane.',
      'Jak zapisać wariant i wrócić do niego przy kolejnym zamówieniu.'
    ]
  },
  {
    id: 'producer-brand-course',
    title: '6. Specjalny dział: kurs budowania marki',
    description: 'WIDOK TYLKO DLA PRODUCENTÓW: kurs budowania marki krok po kroku (cykl webinarów).',
    audience: 'producer',
    items: [
      'Moduł 1: pozycjonowanie marki i architektura oferty.',
      'Moduł 2: język marki, opakowanie i spójność komunikacji.',
      'Moduł 3: wdrożenie na półce i plan skalowania sprzedaży.'
    ]
  },
  {
    id: 'agency-digital-course',
    title: '7. Specjalny dział: kurs produktów cyfrowych',
    description: 'WIDOK TYLKO DLA AGENCJI: kurs budowania produktów cyfrowych dla agencji krok po kroku (cykl webinarów).',
    audience: 'agency',
    items: [
      'Moduł 1: model produktowy i wycena usług agencyjnych.',
      'Moduł 2: onboarding klienta i automatyzacja procesu realizacji.',
      'Moduł 3: rozwój retencji i skalowanie przychodów.'
    ]
  }
];

const PRODUCT_CATALOG = [
  {
    id: 'logistics-warning-ready',
    name: 'Naklejki logistyczne i ostrzegawcze ATTENTION',
    department: 'Etykiety na rolce',
    purchaseMode: 'ready',
    printMode: 'printed',
    customization: 'non-custom',
    applications: ['logistyka', 'bhp'],
    pinnedSections: ['ready-store']
  },
  {
    id: 'warehouse-ready-label',
    name: 'Etykieta magazynowa z polami recznymi',
    department: 'Etykiety na rolce',
    purchaseMode: 'ready',
    printMode: 'printed',
    customization: 'non-custom',
    applications: ['magazyn', 'logistyka'],
    pinnedSections: ['ready-store']
  },
  {
    id: 'ghs-bhp-ready',
    name: 'Etykiety BHP i GHS gotowe',
    department: 'Etykiety na rolce',
    purchaseMode: 'ready',
    printMode: 'printed',
    customization: 'non-custom',
    applications: ['bhp', 'chemia'],
    pinnedSections: ['ready-store']
  },
  {
    id: 'blank-zebra-roll',
    name: 'Etykiety bez nadruku do drukarek Zebra',
    department: 'Etykiety na rolce',
    purchaseMode: 'blank',
    printMode: 'unprinted',
    customization: 'non-custom',
    applications: ['logistyka', 'magazyn']
  },
  {
    id: 'semi-holiday-labels',
    name: 'Etykiety okazjonalne na rolce',
    department: 'Etykiety na rolce',
    purchaseMode: 'semi',
    printMode: 'printed',
    customization: 'optional',
    applications: ['handmade', 'spozywcze'],
    pinnedSections: ['semi-finished']
  },
  {
    id: 'semi-school-patient',
    name: 'Etykiety Dzielny Pacjent / Do szkoly',
    department: 'Etykiety na rolce',
    purchaseMode: 'semi',
    printMode: 'printed',
    customization: 'optional',
    applications: ['dzieci', 'edukacja'],
    pinnedSections: ['semi-finished']
  },
  {
    id: 'sample-paper-sheet',
    name: 'Male serie testowe na arkuszu papierowym',
    department: 'Etykiety na rolce',
    purchaseMode: 'custom',
    printMode: 'printed',
    customization: 'custom',
    applications: ['wino', 'kosmetyki'],
    pinnedSections: ['sample-series']
  },
  {
    id: 'sample-foil-sheet',
    name: 'Male serie testowe na arkuszu foliowym',
    department: 'Etykiety na rolce',
    purchaseMode: 'custom',
    printMode: 'printed',
    customization: 'custom',
    applications: ['kosmetyki', 'spozywcze'],
    pinnedSections: ['sample-series']
  },
  {
    id: 'plastic-pouch-custom',
    name: 'Opakowanie plastikowe z nadrukiem',
    department: 'Plastikowe opakowania',
    purchaseMode: 'custom',
    printMode: 'printed',
    customization: 'custom',
    applications: ['kosmetyki', 'spozywcze']
  },
  {
    id: 'carton-box-plain',
    name: 'Szary karton bez nadruku',
    department: 'Opakowania',
    purchaseMode: 'blank',
    printMode: 'unprinted',
    customization: 'non-custom',
    applications: ['e-commerce', 'logistyka']
  },
  {
    id: 'courier-envelope-ready',
    name: 'Koperta kurierska z gotowym nadrukiem',
    department: 'Koperty kurierskie',
    purchaseMode: 'ready',
    printMode: 'printed',
    customization: 'non-custom',
    applications: ['logistyka', 'e-commerce']
  },
  {
    id: 'plain-envelope',
    name: 'Koperta zwykla bez nadruku',
    department: 'Koperty zwykle',
    purchaseMode: 'blank',
    printMode: 'unprinted',
    customization: 'non-custom',
    applications: ['biuro', 'wysylka']
  },
  {
    id: 'void-filler-ready',
    name: 'Wypelniacz papierowy gotowy',
    department: 'Wypelniacze',
    purchaseMode: 'ready',
    printMode: 'unprinted',
    customization: 'non-custom',
    applications: ['e-commerce', 'logistyka'],
    pinnedSections: ['ready-store']
  },
  {
    id: 'packing-tape-custom',
    name: 'Tasma pakowa z nadrukiem',
    department: 'Tasmy',
    purchaseMode: 'custom',
    printMode: 'printed',
    customization: 'custom',
    applications: ['logistyka', 'e-commerce']
  },
  {
    id: 'shop-bag-custom',
    name: 'Torba firmowa z nadrukiem',
    department: 'Torby',
    purchaseMode: 'custom',
    printMode: 'printed',
    customization: 'custom',
    applications: ['retail', 'kosmetyki']
  },
  {
    id: 'hang-tag-custom',
    name: 'Metka produktowa z personalizacja',
    department: 'Metki',
    purchaseMode: 'custom',
    printMode: 'printed',
    customization: 'custom',
    applications: ['fashion', 'handmade']
  }
];

const PRODUCT_DEPARTMENTS = [
  'Etykiety na rolce',
  'Plastikowe opakowania',
  'Opakowania',
  'Koperty kurierskie',
  'Koperty zwykle',
  'Wypelniacze',
  'Tasmy',
  'Torby',
  'Metki'
];

const PRODUCT_PRIMARY_FILTERS = [
  ['all', 'Wszystkie'],
  ['unprinted', 'Bez nadruku'],
  ['fixed-print', 'Nadruk staly'],
  ['personalized-print', 'Nadruk personalizowany']
];

const PRODUCT_PRINT_MODES = [
  ['all', 'Dowolny zadruk'],
  ['printed', 'Z nadrukiem'],
  ['unprinted', 'Bez nadruku']
];

const PRODUCT_PINNED_SECTIONS = [
  {
    id: 'sample-series',
    title: 'Male serie na probe - etykiety na arkuszu',
    description: 'Sekcja stale widoczna. Szybkie testy koloru i formatu na papierze lub folii.'
  },
  {
    id: 'ready-store',
    title: 'Gotowe produkty',
    description: 'Zwykly sklep bez projektowania: szybki zakup gotowych produktow i etykiet.'
  },
  {
    id: 'semi-finished',
    title: 'Etykiety polgotowe',
    description: 'Gotowe wzory dostepne od razu, z opcja personalizacji w kreatorze.'
  }
];

const PRODUCT_TAG_TO_INDUSTRY = {
  wino: 'Wino i alkohole',
  kosmetyki: 'Kosmetyki i beauty',
  spozywcze: 'Spozywcze',
  handmade: 'Rekodzielo',
  fashion: 'Fashion',
  retail: 'Retail',
  chemia: 'Chemia i BHP',
  bhp: 'Chemia i BHP',
  dzieci: 'Edukacja i dzieci'
};

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
  'Plik lub szablon',
  'Compliance i tresci',
  'Wycena i zamowienie'
];

const configuratorHelp = [
  'Kategoria produktu decyduje o tym, jakie informacje prawne i rekomendacje pokazywane sa w kolejnych krokach.',
  'Material i wykonczenie wplywaja na cene oraz na ocene srodowiskowa. Zawsze pokazujemy alternatywe eko.',
  'Sprawdzamy, czy wybrane materialy i wykonczenia dobrze wspolgraja pod katem recyklingu.',
  'Wybierz zrodlo projektu: przeslij plik albo skorzystaj z gotowego szablonu.',
  'Sprawdzamy compliance krok po kroku: czy wszystkie wymagane elementy sa uzupelnione i w poprawnej kolejnosci.',
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
  designSource: 'file',
  productsSearch: '',
  productsPrimaryFilter: 'all',
  productsDepartment: 'all',
  productsPrintMode: 'all',
  productsIndustry: 'all',
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
  ['products', 'Produkty'],
  ['configurator', 'Konfigurator'],
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

function renderEcoMarker(isEco) {
  if (!isEco) {
    return '';
  }

  return '<span class="eco-mark" aria-label="Opcja ekologiczna">🍃 eko</span>';
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
  const agencyFlow = [
    'Agencja tworzy klienta i projekt bazowy',
    'Ustala blokady i pola edytowalne',
    'Klient uzupełnia tylko dozwolone treści',
    'Preflight sprawdza kompletność i gotowość',
    'Platforma wycenia, uruchamia produkcję i przypomina o wznowieniu'
  ];

  const clientFlow = [
    'Wybiera produkt, format i gotowy szablon',
    'Dodaje logo, nazwę produktu i wymagane informacje',
    'Personalizuje projekt w ramach bezpiecznych ustawień',
    'Preflight sprawdza kompletność, czytelność i gotowość do druku',
    'Platforma wycenia, uruchamia produkcję i zapisuje projekt do ponownego zamówienia'
  ];

  return `
    <section class="view ${appState.currentView === 'overview' ? 'is-active' : ''}" id="view-overview">
      <article class="panel hero__copy">
        <div class="eyebrow">MVP platformy B2B do etykiet i opakowań</div>
        <p>
          Ten ekran pokazuje tylko dwie główne ścieżki procesu. Każda prowadzi od wyboru produktu
          do gotowości produkcyjnej i ponownego zamówienia.
        </p>
        <div class="quick-actions" style="margin-top: 20px; grid-template-columns: repeat(2, minmax(0, max-content));">
          <button class="button button--primary" data-goto="configurator">Przejdź do konfiguratora</button>
          <button class="button button--ghost" data-goto="order">Zobacz wycenę</button>
        </div>
      </article>

      <div class="section-head" style="margin-top: 18px;">
        <div class="section-title">
          <h2>Co pokazuje ten MVP</h2>
          <p>Najmniejszy sensowny zakres do rozmowy o produkcie i procesie.</p>
        </div>
      </div>

      <div class="dashboard-grid" style="margin-top: 12px;">
        <article class="card">
          <h3>Co jest zamarkowane</h3>
          <p class="muted">Zakres obejmuje kluczowe etapy od przygotowania projektu do domowienia kolejnych partii.</p>
        </article>

        <article class="card">
          <h3>Typy kont</h3>
          <p class="muted">Pokazujemy role i logikę wspolpracy: agencja przygotowuje standard, klient domawia warianty.</p>
        </article>

        <article class="card">
          <h3>Listing Produktow</h3>
          <p class="muted">Widoczna baza produktow z podstawowymi opcjami, tagami zastosowan i szybkim filtrowaniem.</p>
        </article>

        <article class="card">
          <h3>Kontrola i soft compliance</h3>
          <p class="muted">Obowiazkowe pola, eko alert, wycena druku oraz reminder domowienia.</p>
        </article>
      </div>

      <div class="dashboard-grid" style="margin-top: 18px;">
        <article class="card">
          <h3>Przepływ: Agencja</h3>
          <div class="steps">
            ${agencyFlow
              .map(
                (item, index) => `
                  <div class="steps__item">
                    <div class="steps__index">0${index + 1}</div>
                    <div><strong>${item}</strong></div>
                  </div>
                `
              )
              .join('')}
          </div>
        </article>

        <article class="card">
          <h3>Przepływ: Klient</h3>
          <div class="steps">
            ${clientFlow
              .map(
                (item, index) => `
                  <div class="steps__item">
                    <div class="steps__index">0${index + 1}</div>
                    <div><strong>${item}</strong></div>
                  </div>
                `
              )
              .join('')}
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderProductIcon(product) {
  const tag = product.applications[0] ?? '';

  if (tag === 'wino') {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 2h6v4l-1 2v2.5l2.5 3v8.5h-9V13.5l2.5-3V8L9 6z" />
      </svg>
    `;
  }

  if (tag === 'piwo') {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7h10v14H5z" />
        <path d="M15 9h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3z" />
        <path d="M6 5h8v2H6z" />
      </svg>
    `;
  }

  if (tag === 'miod') {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10v3H7z" />
        <path d="M6 7h12v13H6z" />
      </svg>
    `;
  }

  if (tag === 'kosmetyki') {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 3h4v3h-4z" />
        <path d="M8 6h8v15H8z" />
      </svg>
    `;
  }

  if (product.name.toLowerCase().includes('pudelko')) {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 8l9-4 9 4-9 4z" />
        <path d="M3 8v10l9 4 9-4V8" />
      </svg>
    `;
  }

  if (product.name.toLowerCase().includes('doypack') || product.name.toLowerCase().includes('woreczek')) {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h10l-1 18H8z" />
        <path d="M9 8h6" stroke="currentColor" stroke-width="1.5" fill="none" />
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16v11H4z" />
      <path d="M7 4h10v3H7z" />
    </svg>
  `;
}

function renderProducts() {
  const search = appState.productsSearch.trim().toLowerCase();
  const activePrimaryFilter = PRODUCT_PRIMARY_FILTERS.some(([id]) => id === appState.productsPrimaryFilter)
    ? appState.productsPrimaryFilter
    : 'all';
  const activeDepartment = ['all', ...PRODUCT_DEPARTMENTS].includes(appState.productsDepartment)
    ? appState.productsDepartment
    : 'all';
  const activePrintMode = PRODUCT_PRINT_MODES.some(([id]) => id === appState.productsPrintMode)
    ? appState.productsPrintMode
    : 'all';

  const getProductIndustries = (product) => {
    const industries = product.applications.map((tag) => PRODUCT_TAG_TO_INDUSTRY[tag]).filter(Boolean);
    return [...new Set(industries)];
  };

  const matchesPrimaryFilter = (product, filterId) => {
    if (filterId === 'all') {
      return true;
    }
    if (filterId === 'unprinted') {
      return product.printMode === 'unprinted';
    }
    if (filterId === 'fixed-print') {
      return product.printMode === 'printed' && product.customization === 'non-custom';
    }
    if (filterId === 'personalized-print') {
      return product.printMode === 'printed' && product.customization !== 'non-custom';
    }
    return true;
  };

  const baseFilteredProducts = PRODUCT_CATALOG.filter((product) => {
    const searchScope = `${product.name} ${product.department} ${product.purchaseMode} ${product.printMode} ${product.customization} ${
      product.applications.join(' ')
    }`.toLowerCase();

    const searchOk = search.length === 0 || searchScope.includes(search);
    const primaryFilterOk = matchesPrimaryFilter(product, activePrimaryFilter);
    const departmentOk = activeDepartment === 'all' || product.department === activeDepartment;
    const printOk = activePrintMode === 'all' || product.printMode === activePrintMode;

    return searchOk && primaryFilterOk && departmentOk && printOk;
  });

  const industries = [...new Set(baseFilteredProducts.flatMap((product) => getProductIndustries(product)))].sort();
  const activeIndustry = ['all', ...industries].includes(appState.productsIndustry) ? appState.productsIndustry : 'all';

  const filteredProducts = baseFilteredProducts.filter((product) => {
    const industryOk = activeIndustry === 'all' || getProductIndustries(product).includes(activeIndustry);
    return industryOk;
  });

  const modeLabel = {
    ready: 'Gotowe',
    blank: 'Bez nadruku',
    semi: 'Polgotowe',
    custom: 'Custom'
  };
  const printLabel = Object.fromEntries(PRODUCT_PRINT_MODES);
  const customLabel = {
    custom: 'Custom',
    'non-custom': 'Non-custom',
    optional: 'Custom opcjonalny'
  };

  const getCtaLabel = (product) => {
    if (product.purchaseMode === 'semi') {
      return 'Personalizuj';
    }

    return product.customization === 'non-custom' ? 'Dodaj do koszyka' : 'Przejdz do kreatora';
  };

  const renderProductCard = (product) => `
    <div class="product-card">
      <div class="product-card__head">
        <span class="product-icon">${renderProductIcon(product)}</span>
        <strong>${product.name}</strong>
      </div>

      <div class="product-card__meta" style="margin-top: 10px;">
        <span class="product-mini-tag product-mini-tag--strong">${modeLabel[product.purchaseMode]}</span>
        <span class="product-mini-tag">${printLabel[product.printMode]}</span>
        <span class="product-mini-tag">${customLabel[product.customization]}</span>
        <span class="product-mini-tag">${product.department}</span>
      </div>

      <div class="product-card__actions" style="margin-top: 12px;">
        <button class="button button--ghost">${getCtaLabel(product)}</button>
      </div>
    </div>
  `;

  const pinnedSections = PRODUCT_PINNED_SECTIONS.map((section) => ({
    ...section,
    products: filteredProducts.filter((product) => (product.pinnedSections ?? []).includes(section.id))
  })).filter((section) => section.products.length > 0);

  const pinnedProductIds = new Set(pinnedSections.flatMap((section) => section.products.map((product) => product.id)));
  const mainCatalogProducts = filteredProducts.filter((product) => !pinnedProductIds.has(product.id));

  return `
    <section class="view ${appState.currentView === 'products' ? 'is-active' : ''}" id="view-products">
      <div class="section-head">
        <div class="section-title">
          <h2>Produkty</h2>
          <p>Katalog decyzyjny: tryb zakupu, dzial glowny, zadruk i zastosowania.</p>
        </div>
      </div>

      <div class="products-toolbar card">
        <label class="field-block" style="margin-top: 10px;">
          <span>Wyszukiwarka produktow</span>
          <input class="field" name="productsSearch" value="${appState.productsSearch}" placeholder="Szukaj: gotowe etykiety, karton bez nadruku, bhp..." />
        </label>

        <div class="products-section-tabs products-filter-tags" style="margin-top: 10px;">
          ${PRODUCT_PRIMARY_FILTERS.map(([filterId, label]) => {
            const count = PRODUCT_CATALOG.filter((product) => matchesPrimaryFilter(product, filterId)).length;
            return `<button class="button button--ghost ${activePrimaryFilter === filterId ? 'is-active' : ''}" data-products-primary-filter="${filterId}">${label} (${count})</button>`;
          })
            .join('')}
        </div>

        <div class="products-filters-grid" style="margin-top: 10px;">
          <label class="field-block">
            <span>Dzial glowny</span>
            <select class="select" name="productsDepartment">
              <option value="all" ${activeDepartment === 'all' ? 'selected' : ''}>Wszystkie dzialy</option>
              ${PRODUCT_DEPARTMENTS.map(
                (department) =>
                  `<option value="${department}" ${activeDepartment === department ? 'selected' : ''}>${department}</option>`
              ).join('')}
            </select>
          </label>

          <div class="field-block">
            <span>Zadruk</span>
            <div class="products-section-tabs products-filter-tags">
              ${PRODUCT_PRINT_MODES.map(
                ([mode, label]) =>
                  `<button class="button button--ghost ${activePrintMode === mode ? 'is-active' : ''}" data-products-print="${mode}">${label}</button>`
              ).join('')}
            </div>
          </div>
        </div>

        <div class="products-tag-groups" style="margin-top: 4px;">
          <div class="products-filter-group">
            <span class="products-filter-group__label">Tagi branz</span>
            <div class="products-section-tabs products-filter-tags">
              <button class="button button--ghost ${activeIndustry === 'all' ? 'is-active' : ''}" data-products-industry="all">Wszystkie branze</button>
              ${industries
                .map((industry) => {
                  const count = baseFilteredProducts.filter((product) => getProductIndustries(product).includes(industry)).length;
                  return `<button class="button button--ghost ${activeIndustry === industry ? 'is-active' : ''}" data-products-industry="${industry}">${industry} (${count})</button>`;
                })
                .join('')}
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 16px;" class="products-sections">
        ${pinnedSections
          .map(
            (section) => `
              <article class="card product-section">
                <h3>${section.title}</h3>
                <p class="muted">${section.description}</p>
                <div class="products-card-grid" style="margin-top: 12px;">
                  ${section.products.map((product) => renderProductCard(product)).join('')}
                </div>
              </article>
            `
          )
          .join('')}

        ${
          mainCatalogProducts.length > 0
            ? `
              <article class="card product-section">
                <h3>Pozostaly katalog</h3>
                <p class="muted">Produkty spoza sekcji pinowanych, nadal zgodne z aktywnymi filtrami.</p>
                <div class="products-card-grid" style="margin-top: 12px;">
                  ${mainCatalogProducts.map((product) => renderProductCard(product)).join('')}
                </div>
              </article>
            `
            : ''
        }

        ${
          filteredProducts.length === 0
            ? `
              <div class="warning">
                Brak produktow dla wybranych filtrow. Zmien tryb zakupu, dzial lub zadruk.
              </div>
            `
            : ''
        }
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
  const sourceReady = appState.designSource === 'template' || appState.fileUploaded;
  const complianceChecks = [
    {
      label: 'Zrodlo projektu (plik lub szablon)',
      ok: sourceReady
    },
    {
      label: 'Kraj pochodzenia',
      ok: appState.legal.country.trim().length > 0
    },
    {
      label: 'Zawartosc alkoholu',
      ok: appState.legal.abv.trim().length > 0
    },
    {
      label: 'Pojemnosc nominalna',
      ok: appState.legal.volume.trim().length > 0
    },
    {
      label: 'Numer partii',
      ok: appState.legal.batch.trim().length > 0
    },
    {
      label: 'Alergeny (siarczyny)',
      ok: appState.legal.hasSiarczyny
    },
    {
      label: 'Skladniki i wartosc odzywcza (QR lub tekst)',
      ok: appState.legal.qrEnabled
    }
  ];

  return `
    <section class="view ${appState.currentView === 'configurator' ? 'is-active' : ''}" id="view-configurator">
      <div class="config-shell">
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
                complianceChecks,
                sourceReady,
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
    complianceChecks,
    sourceReady,
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
                  material.eco ? ' · eko 🍃' : ''
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
      <div class="material-chips" style="margin-top: 14px;">
        ${CONFIG_MATERIALS.map(
          (material) => `
            <div class="material-chip ${material.eco ? 'material-chip--eco' : ''} ${appState.materialChoice === material.id ? 'is-active' : ''}">
              <div>
                <strong>${material.label}</strong>
                <p class="muted" style="margin: 4px 0 0;">${material.desc}</p>
              </div>
              ${renderEcoMarker(material.eco)}
            </div>
          `
        ).join('')}
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
      <div class="choice-grid" style="margin-top: 14px;">
        <button class="choice-card ${appState.designSource === 'file' ? 'is-active' : ''}" data-config-source="file">
          <strong>Dodaj plik projektu</strong>
          <p class="muted">PDF lub AI, ze spadami 3 mm i CMYK.</p>
        </button>
        <button class="choice-card ${appState.designSource === 'template' ? 'is-active' : ''}" data-config-source="template">
          <strong>Wybierz gotowy szablon</strong>
          <p class="muted">Skorzystaj z predefiniowanego wzorca i przejdz dalej.</p>
        </button>
      </div>

      ${
        appState.designSource === 'file'
          ? `
            ${
              appState.fileUploaded
                ? `
                  <div class="card" style="margin-top: 12px;">
                    <strong>projekt_wino_rumunia_v3.ai</strong>
                    <p class="muted">4.2 MB · przeslano teraz</p>
                    <button class="button button--ghost" data-config-action="remove-file">Usun plik</button>
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
          `
          : `
            <div class="card" style="margin-top: 12px;">
              <strong>Wybierz szablon bazowy</strong>
              <div class="product-grid" style="margin-top: 12px;">
                ${templates
                  .map(
                    (item) => `
                      <button class="product-card ${appState.templateId === item.id ? 'is-active' : ''}" data-template-id="${item.id}">
                        <strong>${item.name}</strong>
                        <p class="muted">${item.format} · ${item.material}</p>
                      </button>
                    `
                  )
                  .join('')}
              </div>
              <div class="mini-card" style="margin-top: 12px;">
                <strong>Wybrany szablon</strong>
                <p class="muted">${template.name}</p>
              </div>
            </div>
          `
      }

      <div class="dashboard-grid" style="margin-top: 14px;">
        <div class="card">
          <h3>Kontrola techniczna</h3>
          <ul class="list">
            ${preflightChecks
              .map((check) => `<li>${check.ok ? '✓' : '⚠'} ${check.label}</li>`)
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

  if (appState.configuratorStep === 4) {
    return `
      <div class="card" style="margin-top: 12px;">
        <h3>Compliance checklista (po kolei)</h3>
        <ol class="list" style="padding-left: 20px;">
          ${complianceChecks
            .map(
              (check) => `
                <li>
                  ${check.ok ? '✓' : '⚠'} ${check.label}
                </li>
              `
            )
            .join('')}
        </ol>
      </div>

      ${
        !sourceReady
          ? `
            <div class="warning" style="margin-top: 12px;">
              Najpierw wybierz plik albo szablon w poprzednim kroku, aby przejsc pelny compliance.
            </div>
          `
          : ''
      }

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
      <strong>Material:</strong> ${selectedMaterial.label} ${renderEcoMarker(selectedMaterial.eco)}<br />
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
  const selectedMaterial = getMaterialById(appState.materialChoice);

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
              <strong>${selectedMaterial.label} ${renderEcoMarker(selectedMaterial.eco)}</strong>
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
          <h3>Wycena</h3>
          <div class="summary-row" style="margin-top: 18px;">
            <span>Druk</span>
            <strong>${formatPrice(quote.production)}</strong>
          </div>
          <div class="footer-note">
            <strong>Czas realizacji: 3 dni</strong>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderKnowledge() {
  const role = appState.accountType === 'agency' ? 'agency' : 'producer';
  const roleLabel = role === 'agency' ? 'Agencja / studio' : 'Producent / marka';
  const visibleSectors = knowledgeSectors.filter((sector) => sector.audience === 'all' || sector.audience === role);

  return `
    <section class="view ${appState.currentView === 'knowledge' ? 'is-active' : ''}" id="view-knowledge">
      <div class="section-head">
        <div class="section-title">
          <h2>Baza wiedzy</h2>
          <p>Sektory wspólne i dedykowane dla roli: <strong>${roleLabel}</strong>.</p>
        </div>
      </div>

      <div class="knowledge-sectors">
        ${visibleSectors
          .map(
            (sector) => `
              <article class="knowledge-sector knowledge-sector--${sector.audience}">
                <header class="knowledge-sector__head">
                  <div>
                    <h3>${sector.title}</h3>
                    <p>${sector.description}</p>
                  </div>
                  <span class="sector-badge">${
                    sector.audience === 'all'
                      ? 'Wspólne'
                      : sector.audience === 'agency'
                        ? 'Tylko agencja'
                        : 'Tylko producent'
                  }</span>
                </header>
                <ul class="list knowledge-list">
                  ${sector.items.map((entry) => `<li>${entry}</li>`).join('')}
                </ul>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function render() {
  app.innerHTML = `
    <div class="shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand__mark">A</div>
          <div class="brand__text">
            <strong>Architektura treści</strong>
            <span>Dla aplikacji</span>
          </div>
        </div>
      </header>

      <nav class="main-nav-horizontal">
        ${renderNav()}
      </nav>

      <main class="content">
        ${renderOverview()}
        ${renderProducts()}
        ${renderConfigurator()}
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

  document.querySelectorAll('[data-config-source]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.designSource = button.dataset.configSource;
      render();
    });
  });

  document.querySelectorAll('[data-state-field][data-state-value]').forEach((button) => {
    button.addEventListener('click', () => {
      appState[button.dataset.stateField] = button.dataset.stateValue;
      render();
    });
  });

  document.querySelectorAll('[data-products-primary-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.productsPrimaryFilter = button.dataset.productsPrimaryFilter;
      render();
    });
  });

  document.querySelectorAll('[data-products-print]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.productsPrintMode = button.dataset.productsPrint;
      render();
    });
  });

  document.querySelectorAll('[data-products-industry]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.productsIndustry = button.dataset.productsIndustry;
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
        appState.designSource = 'file';
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