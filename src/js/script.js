// ==========================================================================
// 1. INITIALISIERUNG: PRELOADER & ULTRASCHNELLES AOS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Preloader entfernen (sofort bei DOM-Bereitschaft)
  const preloader = document.getElementById("page-preloader");
  if (preloader) {
    preloader.classList.add("loaded");
  }

  // AOS sofort feuerbereit schalten
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 650,
      once: true,
      offset: 40,
      easing: "ease-out-quad",
      delay: 0,
      disable: false,
      startEvent: "DOMContentLoaded",
    });
  }
});

// Sicherheits-Fallback nach vollständigem Laden aller Ressourcen
window.addEventListener("load", () => {
  const preloader = document.getElementById("page-preloader");
  if (preloader && !preloader.classList.contains("loaded")) {
    preloader.classList.add("loaded");
  }
  // Layout-Check für AOS nach dem Laden aller Bilder
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
});

// ==========================================================================
// 2. HAUPTLOGIK & EVENT-LISTENER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // PWA-Fenstertitel bereinigen (verhindert doppelten Namen in der App-Leiste)
  if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone
  ) {
    document.title = "Personal Trainer, Kraft- & Functional Coach in Gotha";
  }

  // 2. AKKORDEON-FUNKTIONALITÄT (Lizenzen & FAQs ausklappen)
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const currentItem = header.parentElement;
      const parentContainer = currentItem.parentElement;

      if (parentContainer) {
        parentContainer.querySelectorAll(".accordion-item").forEach((item) => {
          if (item !== currentItem) {
            item.classList.remove("active");
          }
        });
      }

      currentItem.classList.toggle("active");
    });
  });

  // 3. DYNAMISCHE THEME-COLOR & DARK / LIGHT MODE LOGIK
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Helferfunktion zum dynamischen Färben der mobilen Browserleiste
  function updateThemeColor(theme) {
    const color = theme === "dark" ? "#0b0f19" : "#ffffff";
    const metaLight = document.getElementById("meta-theme-light");
    const metaDark = document.getElementById("meta-theme-dark");

    if (metaLight) metaLight.setAttribute("content", color);
    if (metaDark) metaDark.setAttribute("content", color);

    // Fallback für generische Selektoren
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute("content", color);
    });
  }

  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  let activeTheme = "dark";

  if (savedTheme) {
    activeTheme = savedTheme;
  } else if (systemPrefersDark) {
    activeTheme = "dark";
  } else {
    activeTheme = "light";
  }

  // Initiales Setzen von Attribut & Browser-Leistenfarbe
  htmlElement.setAttribute("data-theme", activeTheme);
  updateThemeColor(activeTheme);

  // Klick-Listener auf den Theme-Toggle Button
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      htmlElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeColor(newTheme);

      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    });
  }

  // Listener für System-Theme Änderungen
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
    "change",
    (e) => {
      if (!localStorage.getItem("theme")) {
        const newSystemTheme = e.matches ? "dark" : "light";
        htmlElement.setAttribute("data-theme", newSystemTheme);
        updateThemeColor(newSystemTheme);
      }
    },
    { passive: true },
  );

  // 4. AUTOMATISCHES JAHR FÜR COPYRIGHT & DATENSCHUTZ
  const currentYear = new Date().getFullYear();
  const copyrightElem = document.getElementById("year-copyright");
  if (copyrightElem) copyrightElem.textContent = currentYear;

  const privacyElem = document.getElementById("year-privacy");
  if (privacyElem) privacyElem.textContent = currentYear;

  // 5. ERWEITERTE FORMULAR-VALIDIERUNG, ZEICHENZÄHLER & BUTTON-STATUS
  const form = document.getElementById("contactForm");
  const messageInput = document.getElementById("contact-message");
  const charCounter = document.getElementById("char-counter");

  if (form) {
    const inputs = form.querySelectorAll("input, select, textarea");

    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        validateField(input);
        checkFormValidity();
      });
      input.addEventListener("input", () => {
        validateField(input);
        checkFormValidity();
      });
      if (input.tagName === "SELECT") {
        input.addEventListener("change", () => {
          validateField(input);
          checkFormValidity();
        });
      }
    });

    if (messageInput && charCounter) {
      const maxChars = 1500;
      messageInput.addEventListener("input", () => {
        const remaining = maxChars - messageInput.value.length;
        charCounter.textContent = `${remaining} Zeichen übrig`;

        if (remaining < 100) {
          charCounter.classList.add("warning");
        } else {
          charCounter.classList.remove("warning");
        }
      });
    }
  }
});

// ==========================================================================
// 3. SMART AUTO-HIDE NAVBAR LOGIK (GPU- / RAF-OPTIMIERT)
// ==========================================================================
let lastScrollY = window.scrollY;
let isScrollingNav = false;
const navContainer = document.querySelector(".nav-container");

if (navContainer) {
  window.addEventListener(
    "scroll",
    () => {
      if (!isScrollingNav) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > 80) {
            if (currentScrollY > lastScrollY) {
              navContainer.classList.add("nav-hidden");
            } else {
              navContainer.classList.remove("nav-hidden");
            }
          } else {
            navContainer.classList.remove("nav-hidden");
          }

          lastScrollY = currentScrollY;
          isScrollingNav = false;
        });
        isScrollingNav = true;
      }
    },
    { passive: true },
  );
}

// ==========================================================================
// 4. MODALS ÖFFNEN & SCHLIESSEN
// ==========================================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function closeModalOnOverlay(event, modalId) {
  if (event.target.classList.contains("modal-overlay")) {
    closeModal(modalId);
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const activeModals = document.querySelectorAll(".modal-overlay.active");
    activeModals.forEach((modal) => {
      closeModal(modal.id);
    });
  }
});

// ==========================================================================
// 5. SICHERHEITS- & VALIDIERUNGS-HELFER
// ==========================================================================
function containsCodeInjection(str) {
  const codeRegex = /<[^>]*>|javascript:|script|eval\(|document\.|window\./i;
  return codeRegex.test(str);
}

function validateField(input) {
  const group = input.parentElement;
  const isRequired = input.hasAttribute("required");
  const value = input.value.trim();
  let isValid = true;

  if (isRequired && value === "") {
    isValid = false;
  } else if (input.type === "email" && value !== "") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = emailRegex.test(value);
  } else if (input.type === "tel" && value !== "") {
    const phoneRegex = /^[0-9+\s()/-]{6,}$/;
    isValid = phoneRegex.test(value);
  }

  if (
    isValid &&
    value !== "" &&
    (input.type === "text" || input.tagName === "TEXTAREA")
  ) {
    if (containsCodeInjection(value)) {
      isValid = false;
    }
  }

  if (isValid) {
    group.classList.remove("invalid");
    input.classList.remove("invalid-field");

    if (value !== "" || isRequired) {
      group.classList.add("valid");
      input.classList.add("valid-field");
    } else {
      group.classList.remove("valid");
      input.classList.remove("valid-field");
    }
  } else {
    group.classList.remove("valid");
    input.classList.remove("valid-field");
    group.classList.add("invalid");
    input.classList.add("invalid-field");
  }

  return isValid;
}

function checkFormValidity() {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submit-btn");
  if (!form || !submitBtn) return;

  if (submitBtn.dataset.cooldown === "true") return;

  const requiredInputs = form.querySelectorAll("[required]");
  let allValid = true;

  requiredInputs.forEach((input) => {
    const value = input.value.trim();
    if (value === "" || input.parentElement.classList.contains("invalid")) {
      allValid = false;
    }
  });

  submitBtn.disabled = !allValid;
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const submitBtn = document.getElementById("submit-btn");
  const submitBtnText = document.getElementById("submit-btn-text");

  alert(
    "Vielen Dank! Deine Nachricht wurde erfolgreich abgesendet. Ich melde mich in Kürze bei dir.",
  );

  form.reset();
  const inputs = form.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    input.parentElement.classList.remove("valid", "invalid");
    input.classList.remove("valid-field", "invalid-field");
  });

  const charCounter = document.getElementById("char-counter");
  if (charCounter) charCounter.textContent = "1500 Zeichen übrig";

  closeModal("modal-contact");

  let cooldownTime = 30;
  submitBtn.disabled = true;
  submitBtn.dataset.cooldown = "true";

  const countdownInterval = setInterval(() => {
    cooldownTime--;
    submitBtnText.textContent = `Bitte warten (${cooldownTime}s)...`;

    if (cooldownTime <= 0) {
      clearInterval(countdownInterval);
      submitBtn.dataset.cooldown = "false";
      submitBtnText.textContent = "Nachricht absenden";
      checkFormValidity();
    }
  }, 1000);
}

// ==========================================================================
// 6. DYNAMISCHE INHALTE & BILDER (AUF- & ZUKLAPPEN + SANFTES ZURÜCKSCROLLEN)
// ==========================================================================
function loadMoreTestimonials() {
  const btn = document.getElementById("loadMoreTestimonialsBtn");
  const cards = document.querySelectorAll(".card.testimonial-card");
  const section = document.getElementById("testimonials");
  if (!btn) return;

  const isExpanded = btn.getAttribute("data-expanded") === "true";

  if (isExpanded) {
    // 1. Zuklappen: Karten ab Index 3 wieder verstecken
    cards.forEach((card, index) => {
      if (index >= 3) {
        card.classList.remove("show-testimonial");
        card.classList.add("hidden-testimonial");
      }
    });

    btn.setAttribute("data-expanded", "false");
    btn.innerHTML = `<span>Mehr Erfolgsgeschichten laden</span><span class="material-symbols-rounded btn-icon">arrow_forward</span>`;

    // 2. Sanft an den Anfang der Sektion zurückscrollen
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else {
    // 1. Aufklappen: Alle versteckten Karten sofort anzeigen (ohne Verzögerung)
    const hiddenCards = document.querySelectorAll(
      ".card.testimonial-card.hidden-testimonial",
    );
    hiddenCards.forEach((card) => {
      card.classList.remove("hidden-testimonial");
      card.classList.add("show-testimonial");
    });

    btn.setAttribute("data-expanded", "true");
    btn.innerHTML = `<span>Weniger Erfolgsgeschichten laden</span><span class="material-symbols-rounded btn-icon">arrow_forward</span>`;
  }
}

function swapAboutImg(btn, newUrl) {
  const mainImg = document.getElementById("aboutMainImg");
  if (!mainImg || mainImg.src === newUrl) return;

  mainImg.style.opacity = "0";
  mainImg.style.transform = "scale(0.98)";

  setTimeout(() => {
    mainImg.src = newUrl;
    mainImg.style.opacity = "1";
    mainImg.style.transform = "scale(1)";
  }, 200);

  document
    .querySelectorAll(".about-thumb-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

function loadMoreFaqs() {
  const btn = document.getElementById("loadMoreFaqBtn");
  const faqs = document.querySelectorAll("#faq .accordion-item");
  const section = document.getElementById("faq");
  if (!btn) return;

  const isExpanded = btn.getAttribute("data-expanded") === "true";

  if (isExpanded) {
    // 1. Zuklappen: Zusätzliche FAQs ab Index 4 verstecken & Unter-Inhalte schließen
    faqs.forEach((faq, index) => {
      if (index >= 4) {
        faq.classList.add("hidden-faq");
        faq.classList.remove("active");
        const content = faq.querySelector(".accordion-content");
        if (content) content.style.maxHeight = "0";
      }
    });

    btn.setAttribute("data-expanded", "false");
    btn.innerHTML = `<span>Weitere Fragen laden</span><span class="material-symbols-rounded btn-icon">arrow_forward</span>`;

    // 2. Sanft an den Anfang der Sektion zurückscrollen
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else {
    // 1. Aufklappen: Alle versteckten FAQs sofort einblenden
    const hiddenFaqs = document.querySelectorAll(".hidden-faq");
    hiddenFaqs.forEach((faq) => {
      faq.classList.remove("hidden-faq");
    });

    btn.setAttribute("data-expanded", "true");
    btn.innerHTML = `<span>Weniger Fragen laden</span><span class="material-symbols-rounded btn-icon">arrow_forward</span>`;
  }
}

// ==========================================================================
// 7. STATISTIK-COUNTER ANIMATION (PERFORMANCE-OPTIMIERT)
// ==========================================================================
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  const animateCounter = (counter) => {
    if (counter.dataset.animated === "true") return;
    counter.dataset.animated = "true";

    const target = parseFloat(counter.getAttribute("data-target"));
    if (isNaN(target)) return;

    if (target === 0) {
      counter.innerText = "0";
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * target);

      counter.innerText = currentVal;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };

    requestAnimationFrame(updateCount);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -20px 0px",
    },
  );

  counters.forEach((counter) => {
    const rect = counter.getBoundingClientRect();
    const isVisibleNow = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisibleNow) {
      setTimeout(() => animateCounter(counter), 200);
    } else {
      observer.observe(counter);
    }
  });
}

// Initialisierung bei DOMContentLoaded & Fallback für Window Load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCounters, { once: true });
} else {
  initCounters();
}

// ==========================================================================
// MODAL DEEP-LINKING (Öffnet Modal automatisch bei #impressum, #datenschutz etc.)
// ==========================================================================
function checkModalHash() {
  const hash = window.location.hash.replace("#", "").toLowerCase().trim();
  if (!hash) return;

  const modalMapping = {
    impressum: "modal-impressum",
    datenschutz: "modal-datenschutz",
    privacy: "modal-datenschutz",
    agb: "modal-agb",
    terms: "modal-agb",
    widerruf: "modal-widerruf",
    cancellation: "modal-widerruf",
    kontakt: "modal-contact",
    contact: "modal-contact",
    glossar: "modal-glossar",
  };

  const targetId = modalMapping[hash];
  if (targetId) {
    // 50ms Puffer, damit das DOM und CSS sicher gerendert sind
    setTimeout(() => {
      openModal(targetId);
    }, 50);
  }
}

// 1. Sofort ausführen, falls das DOM schon bereit ist
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", checkModalHash);
} else {
  checkModalHash();
}

// 2. Fallback beim vollständigen Laden & bei URL-/Hash-Wechseln
window.addEventListener("load", checkModalHash);
window.addEventListener("hashchange", checkModalHash);
