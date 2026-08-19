// ==========================================================================
// 1. INITIALISIERUNG: PRELOADER & ULTRA-SMOOTHES AOS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("page-preloader");
  if (preloader) {
    preloader.classList.add("loaded");
  }

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 950,
      once: true,
      offset: 140, // Wartet, bis Element 140px im Bild ist, bevor es fadet
      easing: "ease-out-cubic",
      disable: false,
    });
  }
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("page-preloader");
  if (preloader && !preloader.classList.contains("loaded")) {
    preloader.classList.add("loaded");
  }
  setTimeout(() => {
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }, 250);
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

  // Akkordeon-Funktionalität (Landingpage 6 Kern-FAQs & Lizenzen)
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

  // Dark / Light Mode Logik
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  function updateThemeColor(theme) {
    const color = theme === "dark" ? "#0b0f19" : "#ffffff";
    const metaLight = document.getElementById("meta-theme-light");
    const metaDark = document.getElementById("meta-theme-dark");

    if (metaLight) metaLight.setAttribute("content", color);
    if (metaDark) metaDark.setAttribute("content", color);

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

  htmlElement.setAttribute("data-theme", activeTheme);
  updateThemeColor(activeTheme);

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

  // Automatisches Jahr für Copyright & Datenschutz
  const currentYear = new Date().getFullYear();
  const copyrightElem = document.getElementById("year-copyright");
  if (copyrightElem) copyrightElem.textContent = currentYear;

  const privacyElem = document.getElementById("year-privacy");
  if (privacyElem) privacyElem.textContent = currentYear;

  // Formular-Validierung, Zeichenzähler & Button-Status
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
// 3. SMART AUTO-HIDE NAVBAR LOGIK
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
// 6. TESTIMONIALS & BILD-SWITCHER
// ==========================================================================
function loadMoreTestimonials() {
  const btn = document.getElementById("loadMoreTestimonialsBtn");
  const cards = document.querySelectorAll(".card.testimonial-card");
  const section = document.getElementById("testimonials");
  if (!btn) return;

  const isExpanded = btn.getAttribute("data-expanded") === "true";

  if (isExpanded) {
    cards.forEach((card, index) => {
      if (index >= 3) {
        card.classList.remove("show-testimonial");
        card.classList.add("hidden-testimonial");
      }
    });

    btn.setAttribute("data-expanded", "false");
    btn.innerHTML = `<span>Mehr Erfolgsgeschichten laden</span><span class="material-symbols-rounded btn-icon">arrow_forward</span>`;

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else {
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

// ==========================================================================
// 7. STATISTIK-COUNTER ANIMATION
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

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCounters, { once: true });
} else {
  initCounters();
}

// ==========================================================================
// 8. MODAL DEEP-LINKING (Bereinigt für das Wissens-Hub)
// ==========================================================================
function checkModalHash() {
  const hash = window.location.hash.replace("#", "").toLowerCase().trim();
  if (!hash) return;

  const modalMapping = {
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

    // Wissens-Hub & Rechner Hashes leiten direkt ins Hub-Modal
    hub: "modal-faq-hub",
    "modal-faq-hub": "modal-faq-hub",
    faq: "modal-faq-hub",
    glossar: "modal-faq-hub",
    calories: "modal-faq-hub",
    kalorien: "modal-faq-hub",
    tdee: "modal-faq-hub",
    kfa: "modal-faq-hub",
    bmi: "modal-faq-hub",
    "1rm": "modal-faq-hub",
    standards: "modal-faq-hub",
    progress: "modal-faq-hub",
    rpe: "modal-faq-hub",
    volume: "modal-faq-hub",
  };

  const targetId = modalMapping[hash];
  if (targetId) {
    setTimeout(() => {
      openModal(targetId);
      // Wenn ein Rechner-Direktlink aufgerufen wird, direkt im Chat triggern
      if (
        [
          "calories",
          "kfa",
          "bmi",
          "1rm",
          "standards",
          "progress",
          "rpe",
          "volume",
        ].includes(hash)
      ) {
        setTimeout(() => triggerInlineCalculator(hash), 200);
      }
    }, 50);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", checkModalHash);
} else {
  checkModalHash();
}
window.addEventListener("load", checkModalHash);
window.addEventListener("hashchange", checkModalHash);

// ==========================================================================
// 9. ALL-IN-ONE FITNESS- & WISSENS-HUB ENGINE
// ==========================================================================

function escapeHubText(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function scrollHubToBottom() {
  const stream = document.getElementById("hubChatStream");
  if (stream) {
    setTimeout(() => {
      stream.scrollTo({ top: stream.scrollHeight, behavior: "smooth" });
    }, 40);
  }
}

function appendBotMsgToFeed(title, content, userTag = "") {
  const stream = document.getElementById("hubChatStream");
  if (!stream) return;

  const div = document.createElement("div");
  div.className = "hub-feed-entry";

  const tagHtml = userTag
    ? `<span class="hub-user-query-tag">Thema: ${escapeHubText(userTag)}</span>`
    : "";

  div.innerHTML = `
    ${tagHtml}
    <h4 class="hub-feed-question">${title}</h4>
    <div class="hub-feed-answer">${content}</div>
  `;
  stream.appendChild(div);
  scrollHubToBottom();
}

function triggerInlineCalculator(calcKey, userQuery = "") {
  if (
    typeof INLINE_CALCULATORS !== "undefined" &&
    INLINE_CALCULATORS[calcKey]
  ) {
    appendBotMsgToFeed(
      INLINE_CALCULATORS[calcKey].title,
      INLINE_CALCULATORS[calcKey].html,
      userQuery,
    );
  }
}

function executeHubQuery(rawQuery) {
  const query = (rawQuery || "").trim();
  const input = document.getElementById("hubSearchInput");
  const errorMsg = document.getElementById("hubSearchError");

  if (!query) return;

  if (/[<>{}\/\\]/.test(query)) {
    if (errorMsg) errorMsg.style.display = "block";
    return;
  } else {
    if (errorMsg) errorMsg.style.display = "none";
  }

  if (input) input.value = "";
  const lower = query.toLowerCase();

  // Rechner-Routing
  if (
    lower.includes("kalor") ||
    lower.includes("tdee") ||
    lower.includes("grundumsatz") ||
    lower.includes("bmr")
  ) {
    setTimeout(() => triggerInlineCalculator("calories", query), 40);
    return;
  }
  if (lower.includes("bmi") || lower.includes("ffmi")) {
    setTimeout(() => triggerInlineCalculator("bmi", query), 40);
    return;
  }
  if (
    lower.includes("1rm") ||
    lower.includes("maximalkraft") ||
    lower.includes("one rep") ||
    lower.includes("onerm")
  ) {
    setTimeout(() => triggerInlineCalculator("1rm", query), 40);
    return;
  }
  if (
    lower.includes("kfa") ||
    lower.includes("koerperfett") ||
    lower.includes("körperfett") ||
    lower.includes("navy")
  ) {
    setTimeout(() => triggerInlineCalculator("kfa", query), 40);
    return;
  }
  if (
    lower.includes("volumen") ||
    lower.includes("mev") ||
    lower.includes("mrv") ||
    lower.includes("mav") ||
    lower.includes("satzvolumen")
  ) {
    setTimeout(() => triggerInlineCalculator("volume", query), 40);
    return;
  }
  if (
    lower.includes("standard") ||
    lower.includes("relativkraft") ||
    lower.includes("kraftstandard")
  ) {
    setTimeout(() => triggerInlineCalculator("standards", query), 40);
    return;
  }
  if (
    lower.includes("tonnage") ||
    lower.includes("tracker") ||
    lower === "progress"
  ) {
    setTimeout(() => triggerInlineCalculator("progress", query), 40);
    return;
  }
  if (lower.includes("rpe") || lower.includes("rir")) {
    setTimeout(() => triggerInlineCalculator("rpe", query), 40);
    return;
  }
  if (
    lower === "rechner" ||
    lower.includes("rechner") ||
    lower.includes("tools")
  ) {
    setTimeout(() => {
      appendBotMsgToFeed(
        `<span class="material-symbols-rounded">calculate</span> Interaktive Rechner auswählen`,
        `
        <p>Wähle einen Rechner aus, um ihn direkt hier im Chat zu öffnen:</p>
        <div class="hub-pills-container">
          <button class="hub-pill" type="button" data-calc="calories"><span class="material-symbols-rounded pill-icon">local_fire_department</span><span>Kalorien &amp; TDEE</span></button>
          <button class="hub-pill" type="button" data-calc="bmi"><span class="material-symbols-rounded pill-icon">scale</span><span>BMI Rechner</span></button>
          <button class="hub-pill" type="button" data-calc="1rm"><span class="material-symbols-rounded pill-icon">fitness_center</span><span>1RM Maximalkraft</span></button>
          <button class="hub-pill" type="button" data-calc="kfa"><span class="material-symbols-rounded pill-icon">straighten</span><span>KFA (Navy)</span></button>
          <button class="hub-pill" type="button" data-calc="volume"><span class="material-symbols-rounded pill-icon">bar_chart</span><span>MEV Satzvolumen</span></button>
          <button class="hub-pill" type="button" data-calc="standards"><span class="material-symbols-rounded pill-icon">military_tech</span><span>Kraftstandards</span></button>
          <button class="hub-pill" type="button" data-calc="progress"><span class="material-symbols-rounded pill-icon">trending_up</span><span>Tonnage Tracker</span></button>
          <button class="hub-pill" type="button" data-calc="rpe"><span class="material-symbols-rounded pill-icon">speed</span><span>RPE &amp; RIR</span></button>
        </div>`,
        query,
      );
      bindHubPillEvents();
    }, 40);
    return;
  }

  // Knowledge Base Suche
  if (typeof FAQ_KNOWLEDGE_BASE !== "undefined") {
    // A. Glossar komplett
    if (lower === "glossar" || lower.includes("glossar")) {
      const glossarEntries = FAQ_KNOWLEDGE_BASE.filter((item) =>
        item.q.startsWith("Glossar:"),
      );
      setTimeout(() => {
        glossarEntries.forEach((m) =>
          appendBotMsgToFeed(m.q, m.a, "Glossar (A–Z)"),
        );
      }, 40);
      return;
    }

    // B. Kompletter Übungskatalog
    if (
      lower === "uebungskatalog" ||
      lower.includes("übungskatalog") ||
      lower.includes("uebungskatalog") ||
      lower === "übungen" ||
      lower === "uebungen"
    ) {
      const uebungEntries = FAQ_KNOWLEDGE_BASE.filter((item) =>
        item.q.startsWith("Übung:"),
      );
      setTimeout(() => {
        uebungEntries.forEach((m) =>
          appendBotMsgToFeed(m.q, m.a, "Kompletter Übungskatalog"),
        );
      }, 40);
      return;
    }

    // C. Alle Formeln & Rechenwege
    if (
      lower === "berechnung" ||
      lower.includes("berechnung") ||
      lower.includes("formeln") ||
      lower.includes("rechenwege")
    ) {
      const calcFormulaEntries = FAQ_KNOWLEDGE_BASE.filter((item) =>
        item.q.startsWith("Berechnung:"),
      );
      setTimeout(() => {
        calcFormulaEntries.forEach((m) =>
          appendBotMsgToFeed(m.q, m.a, "Formeln & Rechenwege"),
        );
      }, 40);
      return;
    }

    // D. Vollständiges FAQ (Alle 43 Coaching- & Trainingsfragen)
    if (
      lower.includes("komplettes faq") ||
      lower.includes("vollständiges faq") ||
      lower.includes("alle fragen") ||
      lower === "faq"
    ) {
      const faqEntries = FAQ_KNOWLEDGE_BASE.filter(
        (item) =>
          !item.q.startsWith("Glossar:") &&
          !item.q.startsWith("Übung:") &&
          !item.q.startsWith("Berechnung:"),
      );
      setTimeout(() => {
        faqEntries.forEach((m) =>
          appendBotMsgToFeed(m.q, m.a, "Vollständiges FAQ"),
        );
      }, 40);
      return;
    }

    // E. Standard-Stichwortsuche für Einzelfragen
    const terms = lower.split(/\s+/).filter(Boolean);
    const matches = FAQ_KNOWLEDGE_BASE.filter((item) => {
      const qText = item.q.toLowerCase();
      const tagsText = (item.tags || []).join(" ").toLowerCase();
      const fullText = qText + " " + tagsText;

      return terms.some((term) => fullText.includes(term));
    });

    setTimeout(() => {
      if (matches.length > 0) {
        matches.slice(0, 4).forEach((m) => appendBotMsgToFeed(m.q, m.a, query));
      } else {
        appendBotMsgToFeed(
          "Keine direkte Antwort gefunden",
          `<p style="margin: 0;">Dazu habe ich keinen passenden Eintrag gefunden. Probiere es mit Begriffen wie <strong>Kreatin</strong>, <strong>Bankdrücken</strong>, <strong>Kniebeugen</strong>, <strong>Protein</strong>, <strong>1RM</strong> oder <strong>Glossar</strong>.</p>`,
          query,
        );
      }
    }, 60);
  }
}

function bindHubPillEvents() {
  // Pills Klick-Event
  document.querySelectorAll(".hub-pill").forEach((pill) => {
    if (pill.dataset.bound === "true") return;
    pill.dataset.bound = "true";

    pill.addEventListener("click", () => {
      const calcKey = pill.getAttribute("data-calc");
      const searchTerm = pill.getAttribute("data-search");

      if (calcKey === "all") {
        executeHubQuery("rechner");
      } else if (calcKey) {
        triggerInlineCalculator(calcKey, pill.innerText.trim());
      } else if (searchTerm) {
        executeHubQuery(searchTerm);
      }
    });
  });

  // Selectbox Auto-Close: Schließt Dropdown nach Klick auf Touch & Desktop
  const stream = document.getElementById("hubChatStream");
  if (stream && !stream.dataset.selectBound) {
    stream.dataset.selectBound = "true";
    stream.addEventListener("change", (e) => {
      if (e.target && e.target.tagName === "SELECT") {
        e.target.blur();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("hubPromptSendBtn");
  const searchInput = document.getElementById("hubSearchInput");
  const resetBtn = document.getElementById("hubResetBtn");

  if (sendBtn && searchInput) {
    sendBtn.addEventListener("click", () => executeHubQuery(searchInput.value));
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        executeHubQuery(searchInput.value);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const stream = document.getElementById("hubChatStream");
      const welcome = document.getElementById("hubWelcomeBlock");
      if (stream && welcome) {
        stream.innerHTML = "";
        stream.appendChild(welcome);
        bindHubPillEvents();
      }
    });
  }

  bindHubPillEvents();
});

// ==========================================================================
// 10. RECHNER-BERECHNUNGEN & VALIDIERUNG (CONTAINER-SCOPED)
// ==========================================================================

function validateHubInput(el, isOk) {
  if (!el) return false;
  if (!isOk) {
    el.classList.add("is-invalid");
  } else {
    el.classList.remove("is-invalid");
  }
  return isOk;
}

function showHubError(resBox, msg) {
  resBox.style.display = "block";
  resBox.innerHTML = `
    <div style="display: flex; align-items: center; gap: 6px; color: #ef4444; font-weight: 600;">
      <span class="material-symbols-rounded" style="font-size: 1.2rem;">error</span>
      <span>${msg}</span>
    </div>`;
  scrollHubToBottom();
}

function toggleNavyHipHub(selectEl) {
  const container = selectEl.closest(".hub-inline-calc");
  if (!container) return;
  const hipWrap = container.querySelector(".k-hip-wrap");
  if (hipWrap) {
    hipWrap.style.display = selectEl.value === "female" ? "block" : "none";
  }
}

// 1. KALORIEN
function calcHubCalories(btn) {
  const container = btn.closest(".hub-inline-calc");
  if (!container) return;

  const gender = container.querySelector(".c-sex")?.value || "male";
  const ageEl = container.querySelector(".c-age");
  const hEl = container.querySelector(".c-h");
  const wEl = container.querySelector(".c-w");
  const pal = parseFloat(container.querySelector(".c-act")?.value || "1.375");
  const goal = container.querySelector(".c-goal")?.value || "maintain";
  const res = container.querySelector(".res-box");

  const age = parseFloat(ageEl?.value);
  const h = parseFloat(hEl?.value);
  const w = parseFloat(wEl?.value);

  const isAgeOk = validateHubInput(
    ageEl,
    !isNaN(age) && age >= 14 && age <= 99,
  );
  const isHOk = validateHubInput(hEl, !isNaN(h) && h >= 120 && h <= 230);
  const isWOk = validateHubInput(wEl, !isNaN(w) && w >= 35 && w <= 250);

  if (!isAgeOk || !isHOk || !isWOk) {
    showHubError(
      res,
      "Bitte fülle alle Pflichtfelder mit gültigen Werten aus.",
    );
    return;
  }

  let bmr = 10 * w + 6.25 * h - 5 * age + (gender === "male" ? 5 : -161);
  const tdee = Math.round(bmr * pal);
  let targetCalories = tdee;
  let goalLabel = "Gewicht halten / Recomp";
  let badgeClass = "badge-blue";

  if (goal === "cut-moderate") {
    targetCalories = Math.round(tdee - 400);
    goalLabel = "Fettabbau (Defizit)";
    badgeClass = "badge-green";
  } else if (goal === "bulk-lean") {
    targetCalories = Math.round(tdee + 300);
    goalLabel = "Muskelaufbau (Lean Bulk)";
    badgeClass = "badge-purple";
  }

  const proteinGrams = Math.round(w * 2.0);
  const fatGrams = Math.round(w * 0.9);
  const carbCalories = Math.max(
    0,
    targetCalories - proteinGrams * 4 - fatGrams * 9,
  );
  const carbGrams = Math.round(carbCalories / 4);

  res.style.display = "block";
  res.innerHTML = `
    <div class="calc-res-header">
      <h4>Dein täglicher Energiebedarf</h4>
      <span class="calc-res-badge ${badgeClass}">${goalLabel}</span>
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
  scrollHubToBottom();
}

// 2. KFA (US-NAVY)
function calcHubNavyKFA(btn) {
  const container = btn.closest(".hub-inline-calc");
  if (!container) return;

  const gender = container.querySelector(".k-sex")?.value || "male";
  const hEl = container.querySelector(".k-h");
  const neckEl = container.querySelector(".k-neck");
  const waistEl = container.querySelector(".k-waist");
  const hipEl = container.querySelector(".k-hip");
  const res = container.querySelector(".res-box");

  const h = parseFloat(hEl?.value);
  const neck = parseFloat(neckEl?.value);
  const waist = parseFloat(waistEl?.value);
  const hip = parseFloat(hipEl?.value || "0");

  const isHOk = validateHubInput(hEl, !isNaN(h) && h >= 120 && h <= 230);
  const isNeckOk = validateHubInput(
    neckEl,
    !isNaN(neck) && neck >= 20 && neck <= 60,
  );
  const isWaistOk = validateHubInput(
    waistEl,
    !isNaN(waist) && waist >= 40 && waist <= 200 && waist > neck,
  );
  let isHipOk = true;

  if (gender === "female") {
    isHipOk = validateHubInput(hipEl, !isNaN(hip) && hip >= 50 && hip <= 200);
  }

  if (!isHOk || !isNeckOk || !isWaistOk || !isHipOk) {
    showHubError(res, "Bitte gib alle Umfänge korrekt in cm an.");
    return;
  }

  let bfp = 0;
  if (gender === "male") {
    bfp =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waist - neck) +
          0.15456 * Math.log10(h)) -
      450;
  } else {
    bfp =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waist + hip - neck) +
          0.221 * Math.log10(h)) -
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

  res.style.display = "block";
  res.innerHTML = `
    <div class="calc-res-header">
      <h4>Geschätzter Körperfettanteil (KFA)</h4>
      <span class="calc-res-badge ${badgeClass}">${category}</span>
    </div>
    <div class="calc-main-val">${bfpRounded} <span class="calc-main-unit">% KFA</span></div>
    <div class="calc-coach-tip">
      <strong>Coaching-Hinweis:</strong> Die US-Navy-Methode ist ideal, um Fortschritte über Monate messbar zu machen. Miss die Umfänge stets morgens nüchtern und unter identischen Bedingungen.
    </div>
  `;
  scrollHubToBottom();
}

// 3. BMI
function calcHubBmi(btn) {
  const container = btn.closest(".hub-inline-calc");
  if (!container) return;

  const hEl = container.querySelector(".b-h");
  const wEl = container.querySelector(".b-w");
  const res = container.querySelector(".res-box");

  const h = parseFloat(hEl?.value) / 100;
  const w = parseFloat(wEl?.value);

  const isHOk = validateHubInput(hEl, !isNaN(h) && h >= 1.2 && h <= 2.3);
  const isWOk = validateHubInput(wEl, !isNaN(w) && w >= 35 && w <= 250);

  if (!isHOk || !isWOk) {
    showHubError(
      res,
      "Bitte gib eine gültige Größe (120–230 cm) und ein Gewicht (35–250 kg) ein.",
    );
    return;
  }

  const bmi = (w / (h * h)).toFixed(1);
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

  res.style.display = "block";
  res.innerHTML = `
    <div class="calc-res-header">
      <h4>Dein Body-Mass-Index (BMI)</h4>
      <span class="calc-res-badge ${badgeClass}">${category}</span>
    </div>
    <div class="calc-main-val">${bmi} <span class="calc-main-unit">kg/m²</span></div>
    <div class="calc-coach-tip">
      <strong>Wichtig für Trainierende:</strong> Der BMI unterscheidet nicht zwischen Fett- und Muskelmasse. Wenn du bereits intensiv Krafttraining betreibst, ist dein Körperfettanteil (KFA) und das Maßband der verlässlichere Maßstab!
    </div>
  `;
  scrollHubToBottom();
}

// 4. 1RM
function calcHub1RM(btn) {
  const container = btn.closest(".hub-inline-calc");
  if (!container) return;

  const wEl = container.querySelector(".rm-w");
  const rEl = container.querySelector(".rm-r");
  const res = container.querySelector(".res-box");

  const w = parseFloat(wEl?.value);
  const r = parseInt(rEl?.value, 10);

  const isWOk = validateHubInput(wEl, !isNaN(w) && w > 0 && w <= 500);
  const isROk = validateHubInput(rEl, !isNaN(r) && r >= 1 && r <= 15);

  if (!isWOk || !isROk) {
    showHubError(
      res,
      "Bitte Gewicht (1–500 kg) und saubere Wdh. (1–15) angeben.",
    );
    return;
  }

  const onerm = r === 1 ? w : Math.round(w * (1 + r / 30));
  const rm90 = Math.round(onerm * 0.9);
  const rm80 = Math.round(onerm * 0.8);
  const rm70 = Math.round(onerm * 0.7);

  res.style.display = "block";
  res.innerHTML = `
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
  scrollHubToBottom();
}

// 5. KRAFTSTANDARDS
function calcHubStandards(btn) {
  const container = btn.closest(".hub-inline-calc");
  if (!container) return;

  const gender = container.querySelector(".st-sex")?.value || "male";
  const bwEl = container.querySelector(".st-bw");
  const lwEl = container.querySelector(".st-lw");
  const lift = container.querySelector(".st-lift")?.value || "bench";
  const res = container.querySelector(".res-box");

  const bw = parseFloat(bwEl?.value);
  const lw = parseFloat(lwEl?.value);

  const isBwOk = validateHubInput(bwEl, !isNaN(bw) && bw >= 35 && bw <= 200);
  const isLwOk = validateHubInput(lwEl, !isNaN(lw) && lw >= 10 && lw <= 400);

  if (!isBwOk || !isLwOk) {
    showHubError(res, "Bitte Körpergewicht und 1RM-Leistung angeben.");
    return;
  }

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

  res.style.display = "block";
  res.innerHTML = `
    <div class="calc-res-header">
      <h4>Deine Kraftstufe (Relativkraft)</h4>
      <span class="calc-res-badge ${badgeClass}">${level}</span>
    </div>
    <div class="calc-main-val">${ratio}x <span class="calc-main-unit">Körpergewicht</span></div>
    <div class="calc-coach-tip">
      <strong>Einordnung:</strong> Mit einem Faktor von ${ratio}x bewegst du dich auf dem Niveau <em>${level}</em>. Wir nutzen progressive Belastungssteigerung, um deine Hebeltechnik und Kraftkurven systematisch auf die nächste Stufe zu heben.
    </div>
  `;
  scrollHubToBottom();
}

// 6. TONNAGE & PROGRESSION
function calcHubProgress(btn) {
  const container = btn.closest(".hub-inline-calc");
  if (!container) return;

  const w1El = container.querySelector(".pr-w1");
  const r1El = container.querySelector(".pr-r1");
  const s1El = container.querySelector(".pr-s1");
  const w2El = container.querySelector(".pr-w2");
  const r2El = container.querySelector(".pr-r2");
  const s2El = container.querySelector(".pr-s2");
  const res = container.querySelector(".res-box");

  const w1 = parseFloat(w1El?.value);
  const r1 = parseInt(r1El?.value, 10);
  const s1 = parseInt(s1El?.value, 10);
  const w2 = parseFloat(w2El?.value);
  const r2 = parseInt(r2El?.value, 10);
  const s2 = parseInt(s2El?.value, 10);

  const isAOk =
    !isNaN(w1) && w1 > 0 && !isNaN(r1) && r1 > 0 && !isNaN(s1) && s1 > 0;
  const isBOk =
    !isNaN(w2) && w2 > 0 && !isNaN(r2) && r2 > 0 && !isNaN(s2) && s2 > 0;

  if (!isAOk || !isBOk) {
    showHubError(
      res,
      "Bitte alle Felder für Session A und Session B ausfüllen.",
    );
    return;
  }

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

  res.style.display = "block";
  res.innerHTML = `
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
  scrollHubToBottom();
}

// 7. RPE / RIR
function calcHubRPE(btn) {
  const container = btn.closest(".hub-inline-calc");
  if (!container) return;

  const onermEl = container.querySelector(".rpe-1rm");
  const repsEl = container.querySelector(".rpe-reps");
  const rpe = parseFloat(container.querySelector(".rpe-target")?.value || "9");
  const res = container.querySelector(".res-box");

  const onerm = parseFloat(onermEl?.value);
  const reps = parseInt(repsEl?.value, 10);

  const isOneRmOk = validateHubInput(
    onermEl,
    !isNaN(onerm) && onerm >= 10 && onerm <= 500,
  );
  const isRepsOk = validateHubInput(
    repsEl,
    !isNaN(reps) && reps >= 1 && reps <= 12,
  );

  if (!isOneRmOk || !isRepsOk) {
    showHubError(res, "Bitte 1RM (10–500 kg) und Reps (1–12) angeben.");
    return;
  }

  const totalRepsEquivalent = reps + (10 - rpe);
  const intensityPct = Math.max(
    0.5,
    Math.min(1.0, 1 - (totalRepsEquivalent - 1) * 0.033),
  );
  const targetWeight = (Math.round(onerm * intensityPct * 2) / 2).toFixed(1);
  const rir = (10 - rpe).toFixed(0);

  res.style.display = "block";
  res.innerHTML = `
    <div class="calc-res-header">
      <h4>Empfohlenes Arbeitsgewicht</h4>
      <span class="calc-res-badge badge-blue">RPE ${rpe} (${rir} RIR)</span>
    </div>
    <div class="calc-main-val">${targetWeight} <span class="calc-main-unit">kg für ${reps} Wdh.</span></div>
    <div class="calc-coach-tip">
      <strong>Ausführungshinweis:</strong> Mit ${targetWeight} kg absolvierst du genau ${reps} saubere Wiederholungen und hast nach dem Satz noch exakt <strong>${rir} Wiederholung(en) im Tank</strong> (produktiver Wachstumsbereich ohne Muskelversagen).
    </div>
  `;
  scrollHubToBottom();
}

// 8. SATZVOLUMEN (MEV/MAV/MRV)
function calcHubVolume(btn) {
  const container = btn.closest(".hub-inline-calc");
  if (!container) return;

  const muscle = container.querySelector(".v-muscle")?.value || "chest";
  const exp = container.querySelector(".v-exp")?.value || "intermediate";
  const res = container.querySelector(".res-box");

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

  res.style.display = "block";
  res.innerHTML = `
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
  scrollHubToBottom();
}
