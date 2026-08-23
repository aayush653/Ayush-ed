/* ================================================================
   AAYU STUDIO — SITE CONFIG
   ------------------------------------------------------------
   Everything you'll want to change lives in this ONE object:
   your name, WhatsApp number, Instagram, prices, services,
   portfolio items, reviews, etc.

   After editing this file, just save it — no build step needed.
   ================================================================ */

const CONFIG = {

  brand: {
    name: "Aayu Studio",
    tagline: "Professional Video Editing"
  },

  contact: {
    // Country code + number, NO spaces, NO plus sign, NO dashes.
    // Example: for +91 72349 77921 -> "917234977921"
    whatsappNumber: "917234977921",
    instagramHandle: "@wish_master._.76",
    instagramURL: "https://www.instagram.com/wish_master._.76/"
  },

  // ---- ABOUT SECTION -------------------------------------------------
  specialties: [
    "Professional Video Editing",
    "Instagram Reels",
    "Promotional Videos",
    "Wedding Films",
    "Cinematic Videos",
    "Event Videos",
    "YouTube Videos"
  ],

  // ---- SERVICES --------------------------------------------------------
  // "message" is the WhatsApp text sent when someone taps "Get This Service"
  services: [
    {
      icon: "reel",
      title: "Instagram Reels Editing",
      desc: "Engaging and high-retention reels with smooth transitions, effects, captions and sound design.",
      message: "Hello, I want to book Instagram Reels Editing. I found you through your website."
    },
    {
      icon: "promo",
      title: "Promotional Video Editing",
      desc: "Professional promotional videos for businesses, shops, brands and events.",
      message: "Hello, I want to book Promotional Video Editing. I found you through your website."
    },
    {
      icon: "wedding",
      title: "Wedding Video Editing",
      desc: "Cinematic wedding films, highlights, teasers and emotional storytelling.",
      message: "Hello, I want to book Wedding Video Editing. I found you through your website."
    },
    {
      icon: "cinematic",
      title: "Cinematic Video Editing",
      desc: "Professional cinematic editing with color grading, sound design and storytelling.",
      message: "Hello, I want to book Cinematic Video Editing. I found you through your website."
    },
    {
      icon: "youtube",
      title: "YouTube Video Editing",
      desc: "Professional long-form and short-form YouTube video editing.",
      message: "Hello, I want to book YouTube Video Editing. I found you through your website."
    },
    {
      icon: "event",
      title: "Event Video Editing",
      desc: "Professional editing for birthdays, shop openings, parties and other events.",
      message: "Hello, I want to book Event Video Editing. I found you through your website."
    }
  ],

  // ---- PORTFOLIO ---------------------------------------------------------
  // category must match one of the values in `categories` below.
  // Replace `thumbnail` with your own image and `videoURL` with your reel/YouTube/Drive link.
  categories: ["All", "Reels", "Wedding", "Promotional", "Cinematic", "YouTube", "Events"],

  portfolio: [
    {
      title: "Sunset Reel Edit",
      category: "Reels",
      desc: "High-retention reel edit with punchy transitions and beat-synced cuts.",
      thumbnail: "assets/portfolio/reel-1.jpg",
      videoURL: "#"
    },
    {
      title: "Riya & Kunal — Wedding Highlight",
      category: "Wedding",
      desc: "Emotional wedding highlight film with cinematic color grading.",
      thumbnail: "assets/portfolio/wedding-1.jpg",
      videoURL: "#"
    },
    {
      title: "Local Cafe Promo",
      category: "Promotional",
      desc: "30-second promotional video built to drive footfall.",
      thumbnail: "assets/portfolio/promo-1.jpg",
      videoURL: "#"
    },
    {
      title: "Mountain Story",
      category: "Cinematic",
      desc: "Short cinematic film with moody color grading and sound design.",
      thumbnail: "assets/portfolio/cinematic-1.jpg",
      videoURL: "#"
    },
    {
      title: "Tech Review Edit",
      category: "YouTube",
      desc: "Fast-paced long-form YouTube edit with motion graphics.",
      thumbnail: "assets/portfolio/youtube-1.jpg",
      videoURL: "#"
    },
    {
      title: "Shop Opening Recap",
      category: "Events",
      desc: "Highlight recap video for a store launch event.",
      thumbnail: "assets/portfolio/event-1.jpg",
      videoURL: "#"
    }
  ],

  // ---- PRICING ------------------------------------------------------------
  pricing: [
    {
      name: "Basic",
      badge: "",
      price: "1,000",
      features: [
        "Short Reel Editing",
        "Basic Effects",
        "Color Correction",
        "Basic Sound Design"
      ],
      highlight: false,
      message: "Hello, I want to book the Basic package. I found you through your website."
    },
    {
      name: "Standard",
      badge: "⭐",
      price: "2,000",
      features: [
        "Professional Reel Editing",
        "Advanced Effects",
        "Color Grading",
        "Sound Design",
        "Captions",
        "More Creative Effects"
      ],
      highlight: true,
      message: "Hello, I want to book the Standard package. I found you through your website."
    },
    {
      name: "Premium",
      badge: "👑",
      price: "5,000",
      features: [
        "Cinematic Editing",
        "Advanced VFX",
        "Professional Color Grading",
        "Sound Design",
        "Advanced Effects",
        "Multiple Revisions"
      ],
      highlight: false,
      message: "Hello, I want to book the Premium package. I found you through your website."
    }
  ],

  // ---- TESTIMONIALS ---------------------------------------------------------
  testimonials: [
    { name: "Priya Sharma", review: "Aayu turned our wedding footage into something we watch again and again. Absolutely cinematic.", rating: 5 },
    { name: "Rahul Mehta", review: "Our Instagram reels went from average to scroll-stopping. Great turnaround time too.", rating: 5 },
    { name: "Sana Khan", review: "Professional, creative, and easy to work with. Highly recommend for promotional videos.", rating: 5 },
    { name: "Arjun Verma", review: "The color grading on our YouTube videos looks so much more premium now.", rating: 4 },
    { name: "Neha Kapoor", review: "Delivered exactly what we envisioned for our event recap. Will book again.", rating: 5 }
  ],

  // ---- WHY CHOOSE ME -------------------------------------------------------
  whyChooseMe: [
    { icon: "spark", title: "Creative Editing" },
    { icon: "bolt", title: "Fast Delivery" },
    { icon: "gem", title: "Professional Quality" },
    { icon: "heart", title: "Client Satisfaction" },
    { icon: "film", title: "Cinematic Storytelling" },
    { icon: "tag", title: "Affordable Pricing" }
  ]
};


/* ================================================================
   ICONS — small inline SVG paths keyed by name (used by services
   and "why choose me" cards). Kept separate from CONFIG so the
   config above stays pure content.
   ================================================================ */
const ICONS = {
  reel:      '<path d="M12 3v18M3 12h18" stroke-width="1.6"/><circle cx="12" cy="12" r="9" stroke-width="1.6"/>',
  promo:     '<path d="M4 10v4h4l5 4V6l-5 4H4z" stroke-width="1.6"/><path d="M17 9a4 4 0 0 1 0 6" stroke-width="1.6"/>',
  wedding:   '<path d="M12 21s-7-4.6-9.3-8.7C1.2 9 3 6 6.2 6c1.8 0 3.1 1 3.8 2.2C10.7 7 12 6 13.8 6 17 6 18.8 9 17.3 12.3 15 16.4 12 21 12 21z" stroke-width="1.6"/>',
  cinematic: '<rect x="3" y="6" width="14" height="12" rx="1.5" stroke-width="1.6"/><path d="M17 10l4-2.5v9L17 14" stroke-width="1.6"/>',
  youtube:   '<rect x="3" y="6" width="18" height="12" rx="3" stroke-width="1.6"/><path d="M11 10l4 2-4 2v-4z"/>',
  event:     '<rect x="4" y="5" width="16" height="15" rx="1.5" stroke-width="1.6"/><path d="M4 9h16M8 3v4M16 3v4" stroke-width="1.6"/>',
  spark:     '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" stroke-width="1.6"/>',
  bolt:      '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" stroke-width="1.4"/>',
  gem:       '<path d="M6 3h12l3 6-9 12L3 9l3-6z" stroke-width="1.6"/><path d="M3 9h18M9 3l3 18M15 3l-3 18" stroke-width="1"/>',
  heart:     '<path d="M12 21s-7-4.6-9.3-8.7C1.2 9 3 6 6.2 6c1.8 0 3.1 1 3.8 2.2C10.7 7 12 6 13.8 6 17 6 18.8 9 17.3 12.3 15 16.4 12 21 12 21z" stroke-width="1.6"/>',
  film:      '<rect x="3" y="5" width="18" height="14" rx="1.5" stroke-width="1.6"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4" stroke-width="1.2"/>',
  tag:       '<path d="M20 12 12 20l-9-9V4h7l10 8z" stroke-width="1.6"/><circle cx="7.5" cy="7.5" r="1.2"/>'
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="icon">${ICONS[name] || ICONS.spark}</svg>`;
}


/* ================================================================
   WHATSAPP HELPERS
   ================================================================ */
function buildWhatsAppLink(message) {
  const base = `https://wa.me/${CONFIG.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

function wireWhatsAppLinks(root = document) {
  root.querySelectorAll("[data-whatsapp-link]").forEach(el => {
    const msg = el.getAttribute("data-whatsapp-message") || "";
    el.setAttribute("href", buildWhatsAppLink(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}


/* ================================================================
   RENDER: BRAND / INSTAGRAM (applied wherever data-attrs are used)
   ================================================================ */
function renderBrand() {
  document.querySelectorAll("[data-brand-name]").forEach(el => {
    el.textContent = el.textContent.trim() === el.textContent.trim().toUpperCase()
      ? CONFIG.brand.name.toUpperCase()
      : CONFIG.brand.name;
  });

  document.querySelectorAll("[data-instagram-handle]").forEach(el => {
    el.textContent = CONFIG.contact.instagramHandle;
    el.setAttribute("href", CONFIG.contact.instagramURL);
  });

  const igBtn = document.getElementById("instagramBtn");
  if (igBtn) igBtn.setAttribute("href", CONFIG.contact.instagramURL);

  const footerIg = document.getElementById("footerInstagram");
  if (footerIg) footerIg.setAttribute("href", CONFIG.contact.instagramURL);

  const yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}


/* ================================================================
   RENDER: ABOUT SPECIALTIES
   ================================================================ */
function renderSpecialties() {
  const list = document.getElementById("specialtyList");
  if (!list) return;
  list.innerHTML = CONFIG.specialties
    .map(item => `<li><span class="dot"></span>${item}</li>`)
    .join("");
}


/* ================================================================
   RENDER: SERVICES
   ================================================================ */
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = CONFIG.services.map(s => `
    <article class="service-card glass">
      <div class="service-icon">${icon(s.icon)}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="#" class="btn btn-outline btn-sm" data-whatsapp-link data-whatsapp-message="${s.message}">Get This Service</a>
    </article>
  `).join("");

  wireWhatsAppLinks(grid);

  // Populate the contact form's service dropdown from the same source
  const select = document.getElementById("cf-service");
  if (select) {
    select.innerHTML = `<option value="" disabled selected>Select a service</option>` +
      CONFIG.services.map(s => `<option value="${s.title}">${s.title}</option>`).join("");
  }
}


/* ================================================================
   RENDER: PORTFOLIO + FILTERS
   ================================================================ */
function renderPortfolio(activeCategory = "All") {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  const items = activeCategory === "All"
    ? CONFIG.portfolio
    : CONFIG.portfolio.filter(p => p.category === activeCategory);

  grid.innerHTML = items.map(p => `
    <article class="portfolio-card glass">
      <div class="portfolio-thumb">
        <img src="${p.thumbnail}" alt="${p.title}" loading="lazy">
        <span class="portfolio-category-tag">${p.category}</span>
      </div>
      <div class="portfolio-info">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a href="${p.videoURL}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">Watch Video</a>
      </div>
    </article>
  `).join("");
}

function renderFilters() {
  const bar = document.getElementById("filterBar");
  if (!bar) return;

  bar.innerHTML = CONFIG.categories.map((cat, i) => `
    <button class="filter-btn${i === 0 ? " active" : ""}" data-category="${cat}">${cat}</button>
  `).join("");

  bar.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPortfolio(btn.dataset.category);
    });
  });
}


/* ================================================================
   RENDER: PRICING
   ================================================================ */
function renderPricing() {
  const grid = document.getElementById("pricingGrid");
  if (!grid) return;

  grid.innerHTML = CONFIG.pricing.map(p => `
    <article class="pricing-card glass${p.highlight ? " featured" : ""}">
      ${p.highlight ? '<span class="pricing-tag">Most Popular</span>' : ""}
      <h3>${p.name} ${p.badge || ""}</h3>
      <p class="pricing-amount">₹${p.price}</p>
      <ul class="pricing-features">
        ${p.features.map(f => `<li><span class="check">✓</span>${f}</li>`).join("")}
      </ul>
      <a href="#" class="btn ${p.highlight ? "btn-accent" : "btn-outline"} btn-full" data-whatsapp-link data-whatsapp-message="${p.message}">Book Now</a>
    </article>
  `).join("");

  wireWhatsAppLinks(grid);
}


/* ================================================================
   RENDER: TESTIMONIALS
   ================================================================ */
function renderTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  if (!grid) return;

  grid.innerHTML = CONFIG.testimonials.map(t => `
    <article class="testimonial-card glass">
      <div class="stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
      <p class="testimonial-text">"${t.review}"</p>
      <p class="testimonial-name">${t.name}</p>
    </article>
  `).join("");
}


/* ================================================================
   RENDER: WHY CHOOSE ME
   ================================================================ */
function renderWhyChooseMe() {
  const grid = document.getElementById("whyGrid");
  if (!grid) return;

  grid.innerHTML = CONFIG.whyChooseMe.map(w => `
    <div class="why-card glass">
      <div class="why-icon">${icon(w.icon)}</div>
      <p>${w.title}</p>
    </div>
  `).join("");
}


/* ================================================================
   NAVBAR: sticky shrink + mobile menu + smooth scroll
   ================================================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}


/* ================================================================
   CONTACT FORM -> WhatsApp (no backend)
   ================================================================ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const whatsapp = form.whatsapp.value.trim();
    const service = form.service.value;
    const details = form.details.value.trim();

    const message =
`Hello ${CONFIG.brand.name},

Name: ${name}
WhatsApp: ${whatsapp}
Service: ${service}
Project Details: ${details}

I want to discuss this project.`;

    window.open(buildWhatsAppLink(message), "_blank", "noopener");
  });
}


/* ================================================================
   SCROLL REVEAL — lightweight, no external library
   ================================================================ */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".service-card, .portfolio-card, .pricing-card, .testimonial-card, .why-card, .about-grid, .section-head"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(t => {
    t.classList.add("reveal");
    observer.observe(t);
  });
}


/* ================================================================
   SHOWREEL BUTTON -> plays the showreel video
   ================================================================ */
function initShowreelButton() {
  const btn = document.getElementById("watchShowreelBtn");
  const video = document.getElementById("showreelVideo");
  if (!btn || !video) return;

  btn.addEventListener("click", () => {
    video.scrollIntoView({ behavior: "smooth", block: "center" });
    video.play().catch(() => {});
  });
}


/* ================================================================
   LOADER
   ================================================================ */
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 500);
  });
  // Fallback in case 'load' already fired
  setTimeout(() => loader.classList.add("hidden"), 2000);
}


/* ================================================================
   INIT
   ================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderBrand();
  renderSpecialties();
  renderServices();
  renderFilters();
  renderPortfolio();
  renderPricing();
  renderTestimonials();
  renderWhyChooseMe();

  wireWhatsAppLinks(document);

  initNavbar();
  initContactForm();
  initScrollReveal();
  initShowreelButton();
  initLoader();
});
