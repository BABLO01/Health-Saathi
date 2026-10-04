# Health Saathi

A real, responsive, local-first health tracking PWA inspired by the supplied Health Saathi reference image.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Build

```bash
pnpm build
```

## Included

- Mint/teal glassmorphism wellness UI with responsive mobile/desktop shell.
- Animated splash, ECG line, water progress, card entrance and reduced-motion support.
- Dashboard, BP, sugar, weight, water, medicine, appointments, notes, favorites, records, search, profile and settings.
- Local browser persistence with JSON export/import backup.
- English and Urdu RTL interface switching, light/dark/system appearance.
- Installable manifest, icons, service worker and offline app-shell fallback.
- Gallery and camera medicine/profile image capture. Medicine smart capture is best-effort and review-before-save; it does not provide medical diagnosis or dosage advice.
- Browser notifications and native share when supported, with clear fallbacks.

## Privacy note

This version is intentionally local-first. Health entries remain in this browser's storage unless the user exports a backup or shares a link manually. Health Saathi is a personal tracking tool, not a medical diagnosis service.

Developed by Muhammad Usman Channa.

## GitHub Pages par deploy (white screen fix)

1. Is poore folder ko repo ke root par push karo (`index.html` root me hona chahiye).
2. GitHub repo → Settings → Pages → Source = **GitHub Actions**.
3. Push ke baad Actions tab me build chalega; 1–2 min baad site live.

Local build: `npm install && npm run build` (output `dist/`).
