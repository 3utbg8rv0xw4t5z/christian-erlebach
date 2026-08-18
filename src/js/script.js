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
// 5. SICHERHEITS- & VALIDIERUNGS-HELFER & TOAST NOTIFICATION
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
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
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

function showToastNotification() {
  const toast = document.getElementById("form-toast");
  if (!toast) return;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 6500);
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const submitBtn = document.getElementById("submit-btn");
  const submitBtnText = document.getElementById("submit-btn-text");

  // Moderner Toast statt Standard-Alert
  showToastNotification();

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
      if (index >= 5) {
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
// 8. MODAL DEEP-LINKING (Erweitert um alle 8 Fitness-Rechner)
// ==========================================================================
function checkModalHash() {
  const hash = window.location.hash.replace("#", "").toLowerCase().trim();
  if (!hash) return;

  const modalMapping = {
    // Standard-Modals
    impressum: "modal-impressum",
    "modal-impressum": "modal-impressum",
    datenschutz: "modal-datenschutz",
    privacy: "modal-datenschutz",
    "modal-datenschutz": "modal-datenschutz",
    agb: "modal-agb",
    terms: "modal-agb",
    "modal-agb": "modal-agb",
    widerruf: "modal-widerruf",
    cancellation: "modal-widerruf",
    "modal-widerruf": "modal-widerruf",
    kontakt: "modal-contact",
    contact: "modal-contact",
    "modal-contact": "modal-contact",
    glossar: "modal-glossar",
    "modal-glossar": "modal-glossar",

    // Die 8 Fitness-Rechner
    calories: "modal-calc-calories",
    kalorien: "modal-calc-calories",
    tdee: "modal-calc-calories",
    "calc-calories": "modal-calc-calories",
    "modal-calc-calories": "modal-calc-calories",

    kfa: "modal-calc-kfa",
    navy: "modal-calc-kfa",
    koerperfett: "modal-calc-kfa",
    "calc-kfa": "modal-calc-kfa",
    "modal-calc-kfa": "modal-calc-kfa",

    bmi: "modal-calc-bmi",
    "calc-bmi": "modal-calc-bmi",
    "modal-calc-bmi": "modal-calc-bmi",

    "1rm": "modal-calc-1rm",
    onerm: "modal-calc-1rm",
    maximalkraft: "modal-calc-1rm",
    "calc-1rm": "modal-calc-1rm",
    "modal-calc-1rm": "modal-calc-1rm",

    standards: "modal-calc-standards",
    kraftstandards: "modal-calc-standards",
    "calc-standards": "modal-calc-standards",
    "modal-calc-standards": "modal-calc-standards",

    progress: "modal-calc-progress",
    tracker: "modal-calc-progress",
    overload: "modal-calc-progress",
    "calc-progress": "modal-calc-progress",
    "modal-calc-progress": "modal-calc-progress",

    rpe: "modal-calc-rpe",
    rir: "modal-calc-rpe",
    "calc-rpe": "modal-calc-rpe",
    "modal-calc-rpe": "modal-calc-rpe",

    volume: "modal-calc-volume",
    volumen: "modal-calc-volume",
    mev: "modal-calc-volume",
    mrv: "modal-calc-volume",
    "calc-volume": "modal-calc-volume",
    "modal-calc-volume": "modal-calc-volume",
  };

  const targetId = modalMapping[hash];
  if (targetId) {
    // 50ms Puffer, damit das DOM und CSS sicher gerendert sind
    setTimeout(() => {
      openModal(targetId);
    }, 50);
  }
}

// Sofort ausführen & bei URL-/Hash-Wechseln
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", checkModalHash);
} else {
  checkModalHash();
}
window.addEventListener("load", checkModalHash);
window.addEventListener("hashchange", checkModalHash);

// ==========================================================================
// 9. INTERAKTIVE FITNESS-RECHNER: FORMELN & VALIDIERUNG
// ==========================================================================

// Hilfsfunktion: Visuelles Validierungs-Feedback setzen
function updateValidationStyle(inputEl, isValid) {
  if (!inputEl) return;
  if (inputEl.value.trim() === "") {
    inputEl.classList.remove("is-valid", "is-invalid");
    return;
  }
  if (isValid) {
    inputEl.classList.remove("is-invalid");
    inputEl.classList.add("is-valid");
  } else {
    inputEl.classList.remove("is-valid");
    inputEl.classList.add("is-invalid");
  }
}

// --------------------------------------------------------------------------
// 1. KALORIEN- & TDEE-RECHNER (Mifflin-St. Jeor Formel)
// --------------------------------------------------------------------------
function validateCaloriesForm() {
  const ageEl = document.getElementById("tdee-age");
  const weightEl = document.getElementById("tdee-weight");
  const heightEl = document.getElementById("tdee-height");
  const btn = document.getElementById("btn-calc-calories");

  if (!ageEl || !weightEl || !heightEl) return false;

  const age = parseFloat(ageEl.value);
  const weight = parseFloat(weightEl.value);
  const height = parseFloat(heightEl.value);

  const isAgeOk = !isNaN(age) && age >= 14 && age <= 99;
  const isWeightOk = !isNaN(weight) && weight >= 35 && weight <= 250;
  const isHeightOk = !isNaN(height) && height >= 120 && height <= 230;

  updateValidationStyle(ageEl, isAgeOk);
  updateValidationStyle(weightEl, isWeightOk);
  updateValidationStyle(heightEl, isHeightOk);

  const isValid = isAgeOk && isWeightOk && isHeightOk;
  if (btn) btn.disabled = !isValid;
  return isValid;
}

function handleCaloriesCalc(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (!validateCaloriesForm()) return;

  const gender = document.getElementById("tdee-gender")?.value || "male";
  const age = parseFloat(document.getElementById("tdee-age").value);
  const weight = parseFloat(document.getElementById("tdee-weight").value);
  const height = parseFloat(document.getElementById("tdee-height").value);
  const pal = parseFloat(document.getElementById("tdee-pal")?.value || "1.375");
  const goal = document.getElementById("tdee-goal")?.value || "maintain";

  // Mifflin-St. Jeor Formel
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  bmr = gender === "male" ? bmr + 5 : bmr - 161;

  const tdee = Math.round(bmr * pal);
  let targetCalories = tdee;
  let goalLabel = "Gewicht halten / Recomp";

  if (goal === "cut-moderate") {
    targetCalories = Math.round(tdee - 400);
    goalLabel = "Fettabbau (Defizit)";
  } else if (goal === "bulk-lean") {
    targetCalories = Math.round(tdee + 300);
    goalLabel = "Muskelaufbau (Lean Bulk)";
  }

  const proteinGrams = Math.round(weight * 2.0);
  const fatGrams = Math.round(weight * 0.9);
  const carbCalories = Math.max(
    0,
    targetCalories - proteinGrams * 4 - fatGrams * 9,
  );
  const carbGrams = Math.round(carbCalories / 4);

  const resBox = document.getElementById("result-calc-calories");
  if (resBox) {
    resBox.style.display = "block";
    resBox.innerHTML = `
      <div class="calc-res-header">
        <h4>Dein täglicher Energiebedarf</h4>
        <span class="calc-res-badge badge-blue">${goalLabel}</span>
      </div>
      <div class="calc-main-val">${targetCalories} <span class="calc-main-unit">kcal / Tag</span></div>
      <div class="calc-res-grid">
        <div class="calc-res-item"><span>Grundumsatz (BMR)</span><strong>${Math.round(bmr)} kcal</strong></div>
        <div class="calc-res-item"><span>Erhaltung (TDEE)</span><strong>${tdee} kcal</strong></div>
        <div class="calc-res-item"><span>Protein (Ziel)</span><strong>~${proteinGrams} g</strong></div>
        <div class="calc-res-item"><span>Fett (Ziel)</span><strong>~${fatGrams} g</strong></div>
        <div class="calc-res-item"><span>Kohlenhydrate</span><strong>~${carbGrams} g</strong></div>
      </div>
      <div class="calc-coach-tip">
        <strong>Coach-Tipp:</strong> Halte dein Protein bei ~2g/kg konstant. Nutze diesen Wert für 2–3 Wochen als Benchmark und passe die Kalorien anhand deiner wöchentlichen Durchschnittswiegevorgänge an.
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// 2. KÖRPERFETTANTEIL (US-Navy Methode)
// --------------------------------------------------------------------------
function toggleKfaGenderFields() {
  const gender = document.getElementById("kfa-gender")?.value;
  const hipGroup = document.getElementById("kfa-hip-group");
  const waistLabel = document.getElementById("kfa-waist-label");

  if (gender === "female") {
    if (hipGroup) hipGroup.style.display = "block";
    if (waistLabel) waistLabel.innerText = "Taillenumfang (cm) *";
  } else {
    if (hipGroup) hipGroup.style.display = "none";
    if (waistLabel) waistLabel.innerText = "Bauchumfang (cm) *";
  }
}

function validateKfaForm() {
  const gender = document.getElementById("kfa-gender")?.value || "male";
  const heightEl = document.getElementById("kfa-height");
  const neckEl = document.getElementById("kfa-neck");
  const waistEl = document.getElementById("kfa-waist");
  const hipEl = document.getElementById("kfa-hip");
  const btn = document.getElementById("btn-calc-kfa");

  if (!heightEl || !neckEl || !waistEl) return false;

  const height = parseFloat(heightEl.value);
  const neck = parseFloat(neckEl.value);
  const waist = parseFloat(waistEl.value);
  const hip = parseFloat(hipEl?.value || "0");

  const isHeightOk = !isNaN(height) && height >= 120 && height <= 230;
  const isNeckOk = !isNaN(neck) && neck >= 20 && neck <= 60;
  const isWaistOk =
    !isNaN(waist) && waist >= 40 && waist <= 200 && waist > neck;
  let isHipOk = true;

  if (gender === "female" && hipEl) {
    isHipOk = !isNaN(hip) && hip >= 50 && hip <= 200;
    updateValidationStyle(hipEl, isHipOk);
  }

  updateValidationStyle(heightEl, isHeightOk);
  updateValidationStyle(neckEl, isNeckOk);
  updateValidationStyle(waistEl, isWaistOk);

  const isValid = isHeightOk && isNeckOk && isWaistOk && isHipOk;
  if (btn) btn.disabled = !isValid;
  return isValid;
}

function handleKfaCalc(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (!validateKfaForm()) return;

  const gender = document.getElementById("kfa-gender").value;
  const height = parseFloat(document.getElementById("kfa-height").value);
  const neck = parseFloat(document.getElementById("kfa-neck").value);
  const waist = parseFloat(document.getElementById("kfa-waist").value);
  const hip = parseFloat(document.getElementById("kfa-hip")?.value || "0");

  let bfp = 0;
  if (gender === "male") {
    bfp =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waist - neck) +
          0.15456 * Math.log10(height)) -
      450;
  } else {
    bfp =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waist + hip - neck) +
          0.221 * Math.log10(height)) -
      450;
  }

  bfp = Math.max(3, Math.min(60, bfp));
  const bfpRounded = bfp.toFixed(1);

  let category = "Normalbereich";
  let badgeClass = "badge-green";

  if (gender === "male") {
    if (bfp < 10) {
      category = "Sehr athletisch / Definiert";
      badgeClass = "badge-blue";
    } else if (bfp <= 17) {
      category = "Fitness / Athletisch";
      badgeClass = "badge-green";
    } else if (bfp <= 24) {
      category = "Normaler Durchschnitt";
      badgeClass = "badge-yellow";
    } else {
      category = "Erhöhter KFA";
      badgeClass = "badge-purple";
    }
  } else {
    if (bfp < 18) {
      category = "Sehr athletisch / Definiert";
      badgeClass = "badge-blue";
    } else if (bfp <= 24) {
      category = "Fitness / Athletisch";
      badgeClass = "badge-green";
    } else if (bfp <= 31) {
      category = "Normaler Durchschnitt";
      badgeClass = "badge-yellow";
    } else {
      category = "Erhöhter KFA";
      badgeClass = "badge-purple";
    }
  }

  const resBox = document.getElementById("result-calc-kfa");
  if (resBox) {
    resBox.style.display = "block";
    resBox.innerHTML = `
      <div class="calc-res-header">
        <h4>Geschätzter Körperfettanteil (KFA)</h4>
        <span class="calc-res-badge ${badgeClass}">${category}</span>
      </div>
      <div class="calc-main-val">${bfpRounded} <span class="calc-main-unit">% KFA</span></div>
      <div class="calc-coach-tip">
        <strong>Coaching-Hinweis:</strong> Die US-Navy-Methode ist ideal, um Fortschritte über Monate messbar zu machen. Miss die Umfänge stets morgens nüchtern und unter identischen Bedingungen.
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// 3. BMI-RECHNER
// --------------------------------------------------------------------------
function validateBmiForm() {
  const weightEl = document.getElementById("bmi-weight");
  const heightEl = document.getElementById("bmi-height");
  const btn = document.getElementById("btn-calc-bmi");

  if (!weightEl || !heightEl) return false;

  const weight = parseFloat(weightEl.value);
  const height = parseFloat(heightEl.value);

  const isWeightOk = !isNaN(weight) && weight >= 35 && weight <= 250;
  const isHeightOk = !isNaN(height) && height >= 120 && height <= 230;

  updateValidationStyle(weightEl, isWeightOk);
  updateValidationStyle(heightEl, isHeightOk);

  const isValid = isWeightOk && isHeightOk;
  if (btn) btn.disabled = !isValid;
  return isValid;
}

function handleBmiCalc(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (!validateBmiForm()) return;

  const weight = parseFloat(document.getElementById("bmi-weight").value);
  const heightM = parseFloat(document.getElementById("bmi-height").value) / 100;

  const bmi = (weight / (heightM * heightM)).toFixed(1);
  let category = "Normalgewicht";
  let badgeClass = "badge-green";

  if (bmi < 18.5) {
    category = "Untergewicht";
    badgeClass = "badge-yellow";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Übergewicht";
    badgeClass = "badge-yellow";
  } else if (bmi >= 30) {
    category = "Adipositas";
    badgeClass = "badge-purple";
  }

  const resBox = document.getElementById("result-calc-bmi");
  if (resBox) {
    resBox.style.display = "block";
    resBox.innerHTML = `
      <div class="calc-res-header">
        <h4>Dein Body-Mass-Index (BMI)</h4>
        <span class="calc-res-badge ${badgeClass}">${category}</span>
      </div>
      <div class="calc-main-val">${bmi} <span class="calc-main-unit">kg/m²</span></div>
      <div class="calc-coach-tip">
        <strong>Wichtig für Trainierende:</strong> Der BMI unterscheidet nicht zwischen Fett- und Muskelmasse. Wenn du bereits intensiv Krafttraining betreibst, ist dein Körperfettanteil (KFA) und das Maßband der verlässlichere Maßstab!
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// 4. ONE-REP-MAX (1RM) (Epley Formel)
// --------------------------------------------------------------------------
function validate1rmForm() {
  const weightEl = document.getElementById("onerm-weight");
  const repsEl = document.getElementById("onerm-reps");
  const btn = document.getElementById("btn-calc-1rm");

  if (!weightEl || !repsEl) return false;

  const weight = parseFloat(weightEl.value);
  const reps = parseInt(repsEl.value, 10);

  const isWeightOk = !isNaN(weight) && weight >= 1 && weight <= 500;
  const isRepsOk = !isNaN(reps) && reps >= 1 && reps <= 15;

  updateValidationStyle(weightEl, isWeightOk);
  updateValidationStyle(repsEl, isRepsOk);

  const isValid = isWeightOk && isRepsOk;
  if (btn) btn.disabled = !isValid;
  return isValid;
}

function handle1rmCalc(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (!validate1rmForm()) return;

  const weight = parseFloat(document.getElementById("onerm-weight").value);
  const reps = parseInt(document.getElementById("onerm-reps").value, 10);

  const onerm = reps === 1 ? weight : Math.round(weight * (1 + reps / 30));
  const rm90 = Math.round(onerm * 0.9);
  const rm80 = Math.round(onerm * 0.8);
  const rm70 = Math.round(onerm * 0.7);

  const resBox = document.getElementById("result-calc-1rm");
  if (resBox) {
    resBox.style.display = "block";
    resBox.innerHTML = `
      <div class="calc-res-header">
        <h4>Kalkulierte Maximalkraft (1RM)</h4>
        <span class="calc-res-badge badge-blue">Epley &amp; Brzycki</span>
      </div>
      <div class="calc-main-val">${onerm} <span class="calc-main-unit">kg</span></div>
      <div class="calc-res-grid">
        <div class="calc-res-item"><span>90 % (ca. 3–4 Reps)</span><strong>${rm90} kg</strong></div>
        <div class="calc-res-item"><span>80 % (ca. 7–8 Reps)</span><strong>${rm80} kg</strong></div>
        <div class="calc-res-item"><span>70 % (ca. 10–12 Reps)</span><strong>${rm70} kg</strong></div>
      </div>
      <div class="calc-coach-tip">
        <strong>Coaching-Empfehlung:</strong> Nutze 70–80 % deines 1RM für effektives Muskelaufbautraining im Hypertrophiebereich (6–12 Wiederholungen).
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// 5. KRAFTSTANDARDS (ExRx Relativkraft)
// --------------------------------------------------------------------------
function validateStandardsForm() {
  const bwEl = document.getElementById("std-bodyweight");
  const lwEl = document.getElementById("std-liftweight");
  const btn = document.getElementById("btn-calc-standards");

  if (!bwEl || !lwEl) return false;

  const bw = parseFloat(bwEl.value);
  const lw = parseFloat(lwEl.value);

  const isBwOk = !isNaN(bw) && bw >= 40 && bw <= 160;
  const isLwOk = !isNaN(lw) && lw >= 10 && lw <= 400;

  updateValidationStyle(bwEl, isBwOk);
  updateValidationStyle(lwEl, isLwOk);

  const isValid = isBwOk && isLwOk;
  if (btn) btn.disabled = !isValid;
  return isValid;
}

function handleStandardsCalc(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (!validateStandardsForm()) return;

  const gender = document.getElementById("std-gender")?.value || "male";
  const bw = parseFloat(document.getElementById("std-bodyweight").value);
  const lw = parseFloat(document.getElementById("std-liftweight").value);
  const lift = document.getElementById("std-lift")?.value || "bench";

  const ratio = (lw / bw).toFixed(2);
  let level = "Einsteiger";
  let badgeClass = "badge-yellow";

  if (lift === "bench") {
    if (gender === "male") {
      if (ratio >= 1.5) {
        level = "Fortgeschritten / Elite";
        badgeClass = "badge-purple";
      } else if (ratio >= 1.1) {
        level = "Mittelstufe (Intermediate)";
        badgeClass = "badge-green";
      } else if (ratio >= 0.8) {
        level = "Geübt (Novice)";
        badgeClass = "badge-blue";
      } else {
        level = "Anfänger (Untrained)";
        badgeClass = "badge-yellow";
      }
    } else {
      if (ratio >= 1.0) {
        level = "Fortgeschritten / Elite";
        badgeClass = "badge-purple";
      } else if (ratio >= 0.75) {
        level = "Mittelstufe (Intermediate)";
        badgeClass = "badge-green";
      } else if (ratio >= 0.5) {
        level = "Geübt (Novice)";
        badgeClass = "badge-blue";
      } else {
        level = "Anfänger (Untrained)";
        badgeClass = "badge-yellow";
      }
    }
  } else if (lift === "squat") {
    if (gender === "male") {
      if (ratio >= 2.0) {
        level = "Fortgeschritten / Elite";
        badgeClass = "badge-purple";
      } else if (ratio >= 1.5) {
        level = "Mittelstufe (Intermediate)";
        badgeClass = "badge-green";
      } else if (ratio >= 1.1) {
        level = "Geübt (Novice)";
        badgeClass = "badge-blue";
      } else {
        level = "Anfänger (Untrained)";
        badgeClass = "badge-yellow";
      }
    } else {
      if (ratio >= 1.5) {
        level = "Fortgeschritten / Elite";
        badgeClass = "badge-purple";
      } else if (ratio >= 1.1) {
        level = "Mittelstufe (Intermediate)";
        badgeClass = "badge-green";
      } else if (ratio >= 0.8) {
        level = "Geübt (Novice)";
        badgeClass = "badge-blue";
      } else {
        level = "Anfänger (Untrained)";
        badgeClass = "badge-yellow";
      }
    }
  } else {
    // Deadlift
    if (gender === "male") {
      if (ratio >= 2.4) {
        level = "Fortgeschritten / Elite";
        badgeClass = "badge-purple";
      } else if (ratio >= 1.8) {
        level = "Mittelstufe (Intermediate)";
        badgeClass = "badge-green";
      } else if (ratio >= 1.3) {
        level = "Geübt (Novice)";
        badgeClass = "badge-blue";
      } else {
        level = "Anfänger (Untrained)";
        badgeClass = "badge-yellow";
      }
    } else {
      if (ratio >= 1.8) {
        level = "Fortgeschritten / Elite";
        badgeClass = "badge-purple";
      } else if (ratio >= 1.4) {
        level = "Mittelstufe (Intermediate)";
        badgeClass = "badge-green";
      } else if (ratio >= 1.0) {
        level = "Geübt (Novice)";
        badgeClass = "badge-blue";
      } else {
        level = "Anfänger (Untrained)";
        badgeClass = "badge-yellow";
      }
    }
  }

  const resBox = document.getElementById("result-calc-standards");
  if (resBox) {
    resBox.style.display = "block";
    resBox.innerHTML = `
      <div class="calc-res-header">
        <h4>Deine Kraftstufe (Relativkraft)</h4>
        <span class="calc-res-badge ${badgeClass}">${level}</span>
      </div>
      <div class="calc-main-val">${ratio}x <span class="calc-main-unit">Körpergewicht</span></div>
      <div class="calc-coach-tip">
        <strong>Einordnung:</strong> Mit einem Faktor von ${ratio}x bewegst du dich auf dem Niveau <em>${level}</em>. Wir nutzen progressive Belastungssteigerung, um deine Hebeltechnik und Kraftkurven systematisch auf die nächste Stufe zu heben.
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// 6. GYM PROGRESS TRACKER (Tonnage-Vergleich)
// --------------------------------------------------------------------------
function validateProgressForm() {
  const w1 = parseFloat(document.getElementById("prog-w1")?.value);
  const r1 = parseInt(document.getElementById("prog-r1")?.value, 10);
  const s1 = parseInt(document.getElementById("prog-s1")?.value, 10);
  const w2 = parseFloat(document.getElementById("prog-w2")?.value);
  const r2 = parseInt(document.getElementById("prog-r2")?.value, 10);
  const s2 = parseInt(document.getElementById("prog-s2")?.value, 10);
  const btn = document.getElementById("btn-calc-progress");

  const allValid =
    !isNaN(w1) &&
    w1 > 0 &&
    !isNaN(r1) &&
    r1 > 0 &&
    !isNaN(s1) &&
    s1 > 0 &&
    !isNaN(w2) &&
    w2 > 0 &&
    !isNaN(r2) &&
    r2 > 0 &&
    !isNaN(s2) &&
    s2 > 0;

  if (btn) btn.disabled = !allValid;
  return allValid;
}

function handleProgressCalc(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (!validateProgressForm()) return;

  const w1 = parseFloat(document.getElementById("prog-w1").value);
  const r1 = parseInt(document.getElementById("prog-r1").value, 10);
  const s1 = parseInt(document.getElementById("prog-s1").value, 10);
  const w2 = parseFloat(document.getElementById("prog-w2").value);
  const r2 = parseInt(document.getElementById("prog-r2").value, 10);
  const s2 = parseInt(document.getElementById("prog-s2").value, 10);

  const vol1 = Math.round(w1 * r1 * s1);
  const vol2 = Math.round(w2 * r2 * s2);
  const diff = vol2 - vol1;
  const percent = ((diff / vol1) * 100).toFixed(1);

  let statusBadge = "badge-green";
  let statusText = `+${percent} % Steigerung`;

  if (diff < 0) {
    statusBadge = "badge-yellow";
    statusText = `${percent} % Geringer`;
  } else if (diff === 0) {
    statusBadge = "badge-blue";
    statusText = "Identisches Volumen";
  }

  const resBox = document.getElementById("result-calc-progress");
  if (resBox) {
    resBox.style.display = "block";
    resBox.innerHTML = `
      <div class="calc-res-header">
        <h4>Volumen- &amp; Progressionsvergleich</h4>
        <span class="calc-res-badge ${statusBadge}">${statusText}</span>
      </div>
      <div class="calc-main-val">${vol2} <span class="calc-main-unit">kg Gesamttonnage (B)</span></div>
      <div class="calc-res-grid">
        <div class="calc-res-item"><span>Session A</span><strong>${vol1} kg</strong></div>
        <div class="calc-res-item"><span>Session B</span><strong>${vol2} kg</strong></div>
        <div class="calc-res-item"><span>Differenz</span><strong>${diff > 0 ? "+" : ""}${diff} kg</strong></div>
      </div>
      <div class="calc-coach-tip">
        <strong>Progressive Overload:</strong> ${diff > 0 ? "Hervorragend! Du hast einen neuen Reiz gesetzt und die Arbeitslast gesteigert." : "Volumen gehalten oder reduziert – sinnvoll für Deloads oder zur Technikfokussierung."}
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// 7. RPE- & RIR-RECHNER (Tuchscherer Tabelle)
// --------------------------------------------------------------------------
function validateRpeForm() {
  const onermEl = document.getElementById("rpe-1rm");
  const repsEl = document.getElementById("rpe-target-reps");
  const btn = document.getElementById("btn-calc-rpe");

  if (!onermEl || !repsEl) return false;

  const onerm = parseFloat(onermEl.value);
  const reps = parseInt(repsEl.value, 10);

  const is1rmOk = !isNaN(onerm) && onerm >= 10 && onerm <= 500;
  const isRepsOk = !isNaN(reps) && reps >= 1 && reps <= 12;

  updateValidationStyle(onermEl, is1rmOk);
  updateValidationStyle(repsEl, isRepsOk);

  const isValid = is1rmOk && isRepsOk;
  if (btn) btn.disabled = !isValid;
  return isValid;
}

function handleRpeCalc(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (!validateRpeForm()) return;

  const onerm = parseFloat(document.getElementById("rpe-1rm").value);
  const reps = parseInt(document.getElementById("rpe-target-reps").value, 10);
  const rpe = parseFloat(
    document.getElementById("rpe-target-rpe")?.value || "9",
  );

  const totalRepsEquivalent = reps + (10 - rpe);
  const intensityPct = Math.max(
    0.5,
    Math.min(1.0, 1 - (totalRepsEquivalent - 1) * 0.033),
  );

  const targetWeight = (Math.round(onerm * intensityPct * 2) / 2).toFixed(1);
  const rir = (10 - rpe).toFixed(0);

  const resBox = document.getElementById("result-calc-rpe");
  if (resBox) {
    resBox.style.display = "block";
    resBox.innerHTML = `
      <div class="calc-res-header">
        <h4>Empfohlenes Arbeitsgewicht</h4>
        <span class="calc-res-badge badge-blue">RPE ${rpe} (${rir} RIR)</span>
      </div>
      <div class="calc-main-val">${targetWeight} <span class="calc-main-unit">kg für ${reps} Wdh.</span></div>
      <div class="calc-coach-tip">
        <strong>Ausführungshinweis:</strong> Mit ${targetWeight} kg absolvierst du genau ${reps} saubere Wiederholungen und hast nach dem Satz noch exakt <strong>${rir} Wiederholung(en) im Tank</strong> (produktiver Wachstumsbereich ohne Muskelversagen).
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// 8. TRAININGSVOLUMEN (MEV / MRV Modell)
// --------------------------------------------------------------------------
function validateVolumeForm() {
  const btn = document.getElementById("btn-calc-volume");
  if (btn) btn.disabled = false;
  return true;
}

function handleVolumeCalc(e) {
  if (e && e.preventDefault) e.preventDefault();
  const muscle = document.getElementById("vol-muscle")?.value || "chest";
  const exp = document.getElementById("vol-exp")?.value || "intermediate";

  let mev = 8,
    mav = 12,
    mrv = 18;

  if (muscle === "back" || muscle === "quads") {
    mev = 10;
    mav = 14;
    mrv = 22;
  } else if (muscle === "arms" || muscle === "shoulders") {
    mev = 6;
    mav = 10;
    mrv = 16;
  }

  if (exp === "beginner") {
    mev = Math.max(6, mev - 2);
    mav = mav - 2;
    mrv = mrv - 4;
  } else if (exp === "advanced") {
    mev = mev + 2;
    mav = mav + 2;
    mrv = mrv + 2;
  }

  const resBox = document.getElementById("result-calc-volume");
  if (resBox) {
    resBox.style.display = "block";
    resBox.innerHTML = `
      <div class="calc-res-header">
        <h4>Wöchentlicher Satzumfang</h4>
        <span class="calc-res-badge badge-green">Wissenschaftliche Empfehlung</span>
      </div>
      <div class="calc-main-val">${mav} <span class="calc-main-unit">Sätze / Woche (Optimal)</span></div>
      <div class="calc-res-grid">
        <div class="calc-res-item"><span>Wachstumsschwelle (MEV)</span><strong>${mev} Sätze</strong></div>
        <div class="calc-res-item"><span>Optimaler Reiz (MAV)</span><strong>${mav} Sätze</strong></div>
        <div class="calc-res-item"><span>Regenerationslimit (MRV)</span><strong>${mrv} Sätze</strong></div>
      </div>
      <div class="calc-coach-tip">
        <strong>Coaching-Struktur:</strong> Teile diese ${mav} Sätze idealerweise auf 2 bis 3 Trainingseinheiten pro Woche auf (z. B. 2x 6 Sätze), um stets mit maximaler Satzqualität zu trainieren.
      </div>
    `;
  }
}
