# Packflow OS MVP

Statyczny MVP platformy B2B do przygotowywania, kontroli i zamawiania etykiet oraz opakowań.

## Zakres MVP

- onboarding dla dwóch typów kont: agencja/studio oraz producent/marka,
- dashboard z projektami, akceptacjami, zamówieniami i reminderami,
- prowadzony konfigurator produktu z podstawowymi regułami,
- kontrolowany edytor z polami stałymi i edytowalnymi,
- podgląd mockupu, uproszczony preflight i wycena,
- sekcja wiedzy z mikrotreściami.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm run build
```

Wynik trafia do folderu `dist/`.

## GitHub Pages

Tak, to można hostować na GitHub i udostępnić publicznym URL.

W repo jest już gotowy workflow:

- `.github/workflows/packaging-mvp-pages.yml`

Co trzeba zrobić:

1. Wypchnij repo na GitHub (branch `main`).
2. Wejdź w ustawienia repo: `Settings -> Pages`.
3. W sekcji `Build and deployment` ustaw `Source: GitHub Actions`.
4. Zrób push zmian do folderu `packaging-platform-mvp/` albo uruchom workflow ręcznie (`Actions -> Deploy Packaging MVP to GitHub Pages -> Run workflow`).

Po udanym deployu URL będzie w formacie:

- `https://<twoj-login>.github.io/<nazwa-repo>/`

Link jest też widoczny w podsumowaniu joba `deploy` (pole `page_url`).

Projekt ma w `vite.config.js` ustawione `base: './'`, więc działa poprawnie z relatywnymi assetami na GitHub Pages.

## Co dalej po MVP

- logowanie i prawdziwe role,
- upload plików i realny preflight PDF/AI,
- backend do wycen, zamówień i powiadomień,
- rozbudowa katalogu produktów i reguł branżowych.