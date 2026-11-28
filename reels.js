
/* ================================================================
   REFERENCE REELS — Auto Preview + Video Modal
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
    const close = document.getElementById("reelClose");

    let visible = REELS;
    let current = 0;

    function renderCards(filter) {
      visible = filter === "All"
        ? REELS
        : REELS.filter(r => r.category === filter);

      grid.innerHTML = visible.length ? visible.map((r, i) => `
        <button type="button" class="reel-card" data-index="${i}"
          style="--i:${i}" aria-label="Play ${esc(r.title)}">
          <video class="reel-preview"
            src="${esc(r.video)}"
            muted autoplay loop playsinline preload="metadata"
            poster="${esc(r.thumbnail)}"
            aria-hidden="true"></video>
          <span class="reel-play">${PLAY_ICON}</span>
          <span class="reel-meta">
            <span class="reel-cat">${esc(r.category)}</span>
            <span class="reel-title">${esc(r.title)}</span>
          </span>
        </button>
      `).join("") : '<p class="reels-empty">New reels coming soon.</p>';

      // Ensure previews remain muted and looping.
      grid.querySelectorAll(".reel-preview").forEach(video => {
        video.muted = true;
        video.defaultMuted = true;
        video.play().catch(() => {});
      });
    }

    bar.innerHTML = ["All", ...REEL_CATEGORIES].map((c, i) => `
      <button type="button"
        class="filter-btn${i === 0 ? " active" : ""}"
        aria-pressed="${i === 0}"
        data-category="${esc(c)}">${esc(c)}</button>
    `).join("");

    bar.addEventListener("click", e => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      bar.querySelectorAll(".filter-btn").forEach(b => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });

      bar.scrollTo({
        left: btn.offsetLeft - (bar.clientWidth - btn.offsetWidth) / 2,
        behavior: "smooth"
      });

      renderCards(btn.dataset.category);
    });

    function load(index) {
      if (!visible.length) return;

      current = (index + visible.length) % visible.length;
      const reel = visible[current];

      error.hidden = true;
      title.textContent = reel.title;
      category.textContent = reel.category;

      player.pause();
      player.src = reel.video;
      player.poster = reel.thumbnail;
      player.muted = false;
      player.loop = false;
      player.load();

      const playPromise = player.play();
      if (playPromise) playPromise.catch(() => {
        // Visitor can press the video play control.
      });

      prev.hidden = next.hidden = visible.length < 2;
    }

    function open(index) {
      grid.querySelectorAll(".reel-preview").forEach(video => video.pause());

      document.querySelectorAll("video").forEach(v => {
        if (v !== player) v.pause();
      });

      document.documentElement.classList.add("reel-modal-open");
      modal.showModal();
      load(index);
    }

    grid.addEventListener("click", e => {
      const card = e.target.closest(".reel-card");
      if (card) open(Number(card.dataset.index));
    });

    close.addEventListener("click", () => modal.close());
    prev.addEventListener("click", () => load(current - 1));
    next.addEventListener("click", () => load(current + 1));

    modal.addEventListener("click", e => {
      if (e.target === modal) modal.close();
    });

    modal.addEventListener("keydown", e => {
      if (e.target === player || visible.length < 2) return;
      if (e.key === "ArrowLeft") load(current - 1);
      if (e.key === "ArrowRight") load(current + 1);
    });

    modal.addEventListener("close", () => {
      player.pause();
      player.removeAttribute("src");
      player.load();
      document.documentElement.classList.remove("reel-modal-open");

      grid.querySelectorAll(".reel-preview").forEach(video => {
        video.muted = true;
        video.play().catch(() => {});
      });
    });

    player.addEventListener("error", () => {
      if (player.getAttribute("src")) error.hidden = false;
    });

    renderCards("All");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
