const CACHE_NAME = "main-website-v1";

// Alle Dateien, die für den Offline-Betrieb gecacht werden sollen
const ASSETS_TO_CACHE = [
  // Basis-Dateien
  "./",
  "./index.html",
  "./kontakt.html",
  "./impressum.html",
  "./agb.html",
  "./datenschutz.html",
  "./widerruf.html",
  "./404.html",
  "./manifest.json",

  // CSS Stylesheets
  "./src/css/style.css?v=6",

  // Frameworks (AOS)
  "./src/frameworks/aos.css",
  "./src/frameworks/aos.js",

  // JavaScript Dateien
  "./src/js/script.js?v=9",
  "./src/js/knowledge-base.js?v=8",

  // --- Assets & Medien ---
  // Hier trägst du deine konkreten Dateinamen ein:

  // Fonts (Beispiele - Namen an deine echten Dateien anpassen)
  "./src/assets/fonts/Inter-VariableFont_opsz,wght.ttf",
  "./src/assets/fonts/InterTight-VariableFont_wght.ttf",
  "./src/assets/fonts/material-symbols-rounded-latin-standard-normal.woff2",

  // Icons / Favicons / Logo
  "./src/assets/icons/logo-dark.svg",
  "./src/assets/icons/logo-light.svg",

  "./src/assets/icons/favicon.svg",
  "./src/assets/icons/favicon-192.png",
  "./src/assets/icons/favicon-512.png",
  "./src/assets/icons/apple-touch-icon.png",

  // Images (Beispiele für feste Grafiken / Logo)
  "./src/assets/images/og-image.jpg",
];

// 1. Installation: Dateien laden und im Cache speichern
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Main Website SW] Speichere Assets im Cache...");
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting()),
  );
});

// 2. Aktivierung: Alte Caches löschen, wenn sich die Version ändert
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            if (cache !== CACHE_NAME && cache.startsWith("main-website-")) {
              console.log("[Main Website SW] Alten Cache entfernt:", cache);
              return caches.delete(cache);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// 3. Fetch-Strategie: Cache First mit Netzwerk-Fallback
self.addEventListener("fetch", (event) => {
  // Wichtig: Anfragen an den Unterordner /app/ ignorieren,
  // damit der Service Worker der Fitness-App nicht blockiert wird
  if (event.request.url.includes("/app/")) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Datei wurde im Cache gefunden -> sofort ausliefern
        return cachedResponse;
      }
      // Datei nicht im Cache -> über das normale Netzwerk laden
      return fetch(event.request);
    }),
  );
});
