/* ================================================================
   REFERENCE REELS — behaviour (cards, filters, video modal)
   Edit your videos in reels-data.js, not here.
   Wrapped in a function so nothing clashes with script.js.
   ================================================================ */
(() => {
  const PLAY_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';

  const esc = value => String(value).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function init() {
    const grid = document.getElementById("reelsGrid");
    const bar = document.getElementById("reelsFilterBar");
    const modal = document.getElementById("reelModal");
    if (!grid || !bar || !modal) return;

    const player = document.getElementById("reelModalVideo");
    const title = document.getElementById("reelModalTitle");
    const category = document.getElementById("reelModalCategory");
    const error = document.getElementById("reelModalError");
    const prev = document.getElementById("reelPrev");
    const next = document.getElementById("reelNext");

    let visible = REELS;   // reels shown under the active filter
    let current = 0;

    /* ---- Cards ---- */
    function renderCards(filter) {
      visible = filter === "All" ? REELS : REELS.filter(r => r.category === filter);

      grid.innerHTML = visible.length ? visible.map((r, i) => `
        <button type="button" class="reel-card" data-index="${i}" style="--i:${i}"
                aria-label="Play ${esc(r.title)}">
          <img src="${esc(r.thumbnail)}" alt="" loading="lazy">
          <span class="reel-play">${PLAY_ICON}</span>
          <span class="reel-meta">
            <span class="reel-cat">${esc(r.category)}</span>
            <span class="reel-title">${esc(r.title)}</span>
          </span>
        </button>
      `).join("") : '<p class="reels-empty">New reels coming soon.</p>';
    }

    /* ---- Filters ---- */
    bar.innerHTML = ["All", ...REEL_CATEGORIES].map((c, i) => `
      <button type="button" class="filter-btn${i === 0 ? " active" : ""}"
              aria-pressed="${i === 0}" data-category="${esc(c)}">${esc(c)}</button>
    `).join("");

    bar.addEventListener("click", e => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      bar.querySelectorAll(".filter-btn").forEach(b => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });
      // Keep the tapped chip in view on mobile (scrolls the bar only, not the page)
      bar.scrollTo({ left: btn.offsetLeft - (bar.clientWidth - btn.offsetWidth) / 2, behavior: "smooth" });
      renderCards(btn.dataset.category);
    });

    /* ---- Modal player ---- */
    function load(index) {
      current = (index + visible.length) % visible.length;
      const reel = visible[current];

      error.hidden = true;
      title.textContent = reel.title;
      category.textContent = reel.category;
      player.poster = reel.thumbnail;
      player.src = reel.video;
      player.play().catch(() => {});   // if blocked, the visitor presses play

      prev.hidden = next.hidden = visible.length < 2;
    }

    function open(index) {
      // Stop the hero reel / showreel so two videos never play together
      document.querySelectorAll("video").forEach(v => { if (v !== player) v.pause(); });
      document.documentElement.classList.add("reel-modal-open");
      modal.showModal();
      load(index);
    }

    grid.addEventListener("click", e => {
      const card = e.target.closest(".reel-card");
      if (card) open(Number(card.dataset.index));
    });

    document.getElementById("reelClose").addEventListener("click", () => modal.close());
    prev.addEventListener("click", () => load(current - 1));
    next.addEventListener("click", () => load(current + 1));

    // Click on the dark backdrop closes the player
    modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

    // Left/right arrows switch reels (unless the video controls are using them)
    modal.addEventListener("keydown", e => {
      if (e.target === player || visible.length < 2) return;
      if (e.key === "ArrowLeft") load(current - 1);
      if (e.key === "ArrowRight") load(current + 1);
    });

    // Runs for every way of closing: button, backdrop, Esc key
    modal.addEventListener("close", () => {
      player.pause();
      player.removeAttribute("src");
      player.load();
      document.documentElement.classList.remove("reel-modal-open");
    });

    player.addEventListener("error", () => {
      if (player.getAttribute("src")) error.hidden = false;
    });

    renderCards("All");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
