# Christian Erlebach – Personal Coaching & Functional Training

> **Offizielle Website & Web-App von Christian Erlebach**
> 1-zu-1 Personal Coaching, Kraft- & Functional Training in Gotha und Umgebung.

---

## 📋 Über das Projekt

Diese Plattform ist eine moderne, performante Web-Präsenz und Progressive Web App (PWA) für evidenzbasiertes Personal Coaching. Sie richtet sich an Trainierende und Athleten in Thüringen mit Fokus auf Kraftaufbau, Biomechanik, funktionelles Training, Schlingentraining und nachhaltige Leistungssteigerung.

---

## ✨ Features & Highlights

- **⚡ Performance & Clean Code:** Schlankes, semantisches HTML5, reines CSS ohne schwere Frameworks und modulares Vanilla JavaScript.
- **🌓 Dynamischer Theme-Switcher:** Nahtloser Wechsel zwischen Dark Mode und Light Mode (mit Speicherung der Präferenz via `localStorage` und automatischer Erkennung des System-Themes).
- **📱 PWA-Ready (Progressive Web App):** Installierbar als eigenständige Web-App auf Desktop, iOS und Android inklusive `manifest.json` und Custom Icons.
- **🔍 SEO & Social Graph:** Umfassende Meta-Tags, Open Graph & Twitter Card Integration sowie strukturierte Daten nach Schema.org (`LocalBusiness` / `SportsActivityLocation`).
- **🎯 Interaktive Modals & Deep-Linking:** Rechtssichere und barrierefreie Modaldialoge (Impressum, Datenschutz, AGB, Widerruf, Glossar) mit URL-Hash-Unterstützung (z. B. `#impressum`, `#kontakt`).
- **📊 Interaktive Elemente:** Flüssige Scroll-Animationen (AOS), animierte Statistik-Zähler und responsive Navigation.

---

## 📂 Projektstruktur

```text
christian-erlebach/
├── index.html              # Startseite / Landing Page
├── impressum.html          # Rechtliche Unterseiten (Redirect / Modal)
├── datenschutz.html
├── agb.html
├── widerruf.html
├── kontakt.html
├── manifest.json           # PWA-Konfiguration
├── robots.txt              # Crawler-Direktiven
├── sitemap.xml             # Suchmaschinen-Indexierung
├── src/
│   ├── css/
│   │   └── style.css       # Zentrales Stylesheet (Responsive & Themes)
│   ├── js/
│   │   └── script.js       # App-Logik, Modals, Animationen & Dark Mode
│   └── assets/
│       ├── icons/          # Logos (Light/Dark), Favicons & PWA-Icons
│       └── img/            # OpenGraph-Bilder & Medien
└── README.md               # Projektdokumentation
