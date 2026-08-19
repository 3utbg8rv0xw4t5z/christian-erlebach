const CACHE_NAME = "workout-tracker-v1";

// Alle Dateien der App, die offline gecacht werden sollen
const ASSETS_TO_CACHE = [
  // Basis-Dateien
  "./",
  "./index.html",
  "./manifest.json",

  // CSS Stylesheet
  "./src/css/app.css",

  // JavaScript
  "./src/js/app.js",

  // --- Assets & Medien ---
  // Fonts
  "./src/assets/fonts/Inter-VariableFont_opsz,wght.ttf",
  "./src/assets/fonts/InterTight-VariableFont_wght.ttf",
  "./src/assets/fonts/material-symbols-rounded-latin-standard-normal.woff2",

  // Icons / Favicons / Logos
  "./src/assets/icons/logo-dark.svg",
  "./src/assets/icons/logo-light.svg",
  "./src/assets/icons/favicon.svg",
  "./src/assets/icons/favicon-192.png",
  "./src/assets/icons/favicon-512.png",
  "./src/assets/icons/apple-touch-icon.png",
];

// 1. Installation: Dateien laden und im Cache speichern
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Workout Tracker SW] Speichere App-Shell im Cache...");
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
            if (cache !== CACHE_NAME && cache.startsWith("workout-tracker-")) {
              console.log("[Workout Tracker SW] Alten Cache entfernt:", cache);
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
