const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const FILTER_LABELS = Object.fromEntries(PROJECT_FILTERS.map((f) => [f.id, f.label]));

/* ---------- Mobile nav ---------- */
const menuToggle = $(".menu-toggle");
const siteNav = $(".site-nav");
menuToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
function closeMenu() {
  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}
siteNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") closeMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && siteNav.classList.contains("open")) {
    closeMenu();
    menuToggle.focus();
  }
});

/* Tell screen reader users about links that open a new tab */
const NEW_TAB_NOTE = '<span class="sr-only"> (opens in a new tab)</span>';
document.querySelectorAll('a[target="_blank"]').forEach((a) => a.insertAdjacentHTML("beforeend", NEW_TAB_NOTE));

/* ---------- Project browser ---------- */
const listEl = $(".project-list");
const previewEl = $(".preview");
const filtersEl = $(".filters");
const countEl = $(".projects-count");
const railPos = $(".rail-pos");
const featuredEl = $(".featured-grid");

let visible = PROJECTS;
let activeSlug = PROJECTS[0].slug;

function iconHtml(p) {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${PROJECT_ICONS[p.icon]}</svg>`;
}

function mediaHtml(p, cls) {
  if (!p.cover) {
    return `<div class="${cls} no-media">${iconHtml(p)}<span>${esc(p.context)}</span></div>`;
  }
  return `<div class="${cls} fit-${p.fit}">${p.fit === "contain" ? backdropHtml(p) : ""}<img src="${p.cover}" alt="${esc(p.coverAlt)}" loading="lazy"></div>`;
}

/* A blurred copy of the image fills the frame, so images of any shape show in full without bars */
function backdropHtml(p) {
  return `<img class="cover-backdrop" src="${p.cover}" alt="">`;
}

/* Card thumbnails repeat the title beside them, so screen readers skip them */
function thumbHtml(p, cls) {
  if (!p.cover) {
    return `<span class="${cls} no-media" aria-hidden="true">${iconHtml(p)}</span>`;
  }
  return `<span class="${cls} fit-${p.fit}">${p.fit === "contain" ? backdropHtml(p) : ""}<img src="${p.cover}" alt="" loading="lazy"></span>`;
}

function renderFeatured() {
  featuredEl.innerHTML = PROJECTS.filter((p) => p.featured).map((p) => `
    <li>
      <button type="button" class="featured-card" data-slug="${p.slug}">
        ${thumbHtml(p, "featured-media")}
        <span class="featured-text">
          <span class="featured-date">${esc(p.date)}</span>
          <span class="featured-title">${esc(p.shortTitle)}</span>
          <span class="featured-summary">${esc(p.summary)}</span>
        </span>
      </button>
    </li>`).join("");
}

function renderFilters(current) {
  filtersEl.innerHTML = PROJECT_FILTERS.map((f) => {
    const n = f.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.tags.includes(f.id)).length;
    return `<button type="button" class="filter" data-filter="${f.id}" aria-pressed="${f.id === current}">${esc(f.label)} <span>${n}</span></button>`;
  }).join("");
}

function renderList() {
  listEl.innerHTML = visible.map((p) => `
    <li>
      <button type="button" class="project-row" data-slug="${p.slug}">
        ${thumbHtml(p, "row-thumb")}
        <span class="row-date">${esc(p.date)}</span>
        <span class="row-title">${esc(p.shortTitle)}</span>
        <span class="row-meta">${p.tags.map((t) => esc(FILTER_LABELS[t])).join(" · ")}</span>
        ${p.video ? '<span class="row-video">Video</span>' : ""}
      </button>
    </li>`).join("");
  countEl.textContent = `${visible.length} project${visible.length === 1 ? "" : "s"}`;
  listEl.scrollLeft = 0;
  updateRailPos();
}

function setActive(slug) {
  activeSlug = slug;
  listEl.querySelectorAll(".project-row").forEach((r) => {
    r.classList.toggle("active", r.dataset.slug === slug);
  });
  const p = PROJECTS.find((x) => x.slug === slug);
  previewEl.innerHTML = `
    ${mediaHtml(p, "preview-media")}
    <div class="preview-text">
      <p class="eyebrow">${esc(p.date)} · ${esc(p.context)}</p>
      <h3>${esc(p.shortTitle)}</h3>
      <p>${esc(p.summary)}</p>
      <button type="button" class="btn btn-gold preview-open" data-slug="${p.slug}">${p.video ? "Watch and read more" : "Read more"}</button>
    </div>`;
}

function applyFilter(id) {
  renderFilters(id);
  visible = id === "all" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(id));
  renderList();
  setActive(visible[0].slug);
}

filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (btn) applyFilter(btn.dataset.filter);
});

listEl.addEventListener("mouseover", (e) => {
  const row = e.target.closest(".project-row");
  if (row && row.dataset.slug !== activeSlug) setActive(row.dataset.slug);
});
listEl.addEventListener("focusin", (e) => {
  const row = e.target.closest(".project-row");
  if (row && row.dataset.slug !== activeSlug) setActive(row.dataset.slug);
});
listEl.addEventListener("click", (e) => {
  const row = e.target.closest(".project-row");
  if (row) openProject(row.dataset.slug);
});
listEl.addEventListener("keydown", (e) => {
  if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
  const rows = [...listEl.querySelectorAll(".project-row")];
  const i = rows.indexOf(document.activeElement);
  if (i < 0) return;
  e.preventDefault();
  rows[(i + (e.key === "ArrowDown" ? 1 : -1) + rows.length) % rows.length].focus();
});
previewEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".preview-open");
  if (btn) openProject(btn.dataset.slug);
});
featuredEl.addEventListener("click", (e) => {
  const card = e.target.closest(".featured-card");
  if (card) openProject(card.dataset.slug);
});

/* Phone layout: the list becomes a swipeable rail */
function railIndex() {
  const first = listEl.querySelector("li");
  if (!first) return 0;
  const step = first.getBoundingClientRect().width + parseFloat(getComputedStyle(listEl).columnGap || 0);
  return Math.round(listEl.scrollLeft / step);
}
function updateRailPos() {
  railPos.textContent = `${Math.min(railIndex() + 1, visible.length)} / ${visible.length}`;
}
listEl.addEventListener("scroll", updateRailPos, { passive: true });
document.querySelectorAll(".rail-btn").forEach((b) => {
  b.addEventListener("click", () => {
    const item = listEl.querySelectorAll("li")[railIndex() + Number(b.dataset.dir)];
    if (item) listEl.scrollTo({ left: item.offsetLeft - listEl.offsetLeft, behavior: "smooth" });
  });
});

/* ---------- Project detail dialog ---------- */
const dialog = $(".project-dialog");
const dialogBody = $(".dialog-body");
const lightbox = $(".lightbox");
let dialogList = PROJECTS;
let dialogIndex = 0;
let galleryIndex = 0;
let openedFrom = null;

function projectHtml(p) {
  const paragraphs = (arr) => (arr || []).map((t) => `<p>${esc(t)}</p>`).join("");
  const features = p.features
    ? `${p.featuresLabel ? `<h3>${esc(p.featuresLabel)}</h3>` : ""}<ul class="feature-list">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`
    : "";
  const sections = (p.sections || []).map((s) => `
    <h3>${esc(s.heading)}</h3>
    ${paragraphs(s.paragraphs)}
    ${s.list ? `<ul class="feature-list">${s.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}`).join("");
  const tools = p.tools.map((g) => `
    <div class="tool-group">
      <h3>${esc(g.label)}</h3>
      <ul class="chips">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </div>`).join("");

  let lead = "";
  if (p.video) {
    lead = `<figure class="dialog-figure">
        <video class="dialog-video" controls playsinline preload="none" poster="${p.cover}" aria-label="Video demonstration of ${esc(p.shortTitle)}" aria-describedby="video-description">
          <source src="${encodeURI(p.video)}" type="video/mp4">
          ${p.captions ? `<track kind="captions" src="${p.captions}" srclang="en-GB" label="English">` : ""}
        </video>
        <figcaption>
          <span id="video-description">${esc(p.videoDescription)}</span>
          ${p.captions ? '<button type="button" class="caption-toggle" aria-pressed="false">Captions: off</button>' : ""}
        </figcaption>
      </figure>`;
  } else if (p.cover) {
    lead = `<div class="dialog-cover fit-contain">${backdropHtml(p)}<img src="${p.cover}" alt="${esc(p.coverAlt)}"></div>`;
  }

  const galleryItem = (g) => `
    <li><button type="button" class="gallery-item" data-index="${p.gallery.indexOf(g)}" aria-label="Enlarge: ${esc(g.alt)}">
      <img src="${g.src}" alt="${esc(g.alt)}">
    </button></li>`;
  /* Images with a group appear under that heading, in the order the groups first appear */
  const galleryGroups = p.gallery ? [...new Set(p.gallery.map((g) => g.group))] : [];
  const gallery = p.gallery ? `
    <h3>Gallery</h3>
    ${galleryGroups.map((name) => `
      ${name ? `<h4 class="gallery-group">${esc(name)}</h4>` : ""}
      <ul class="gallery">${p.gallery.filter((g) => g.group === name).map(galleryItem).join("")}</ul>`).join("")}` : "";

  const references = p.references ? `
    <h3>References</h3>
    <ol class="references">
      ${p.references.map((r) => `<li>${esc(r.text)}${r.url ? ` <a href="${r.url}" target="_blank" rel="noopener">View the paper${NEW_TAB_NOTE}</a>` : ""}</li>`).join("")}
    </ol>` : "";

  return `
    <div class="dialog-head">
      <p class="eyebrow">${esc(p.date)} · ${esc(p.context)}</p>
      <h2 id="dialog-title">${esc(p.title)}</h2>
    </div>
    ${lead}
    ${p.links ? `<p class="dialog-link">${p.links.map((l) => `<a class="btn btn-gold" href="${l.url}" target="_blank" rel="noopener">${esc(l.label)}${NEW_TAB_NOTE}</a>`).join("")}</p>` : ""}
    <div class="dialog-columns">
      <div class="dialog-main prose">
        ${paragraphs(p.body && p.body.length ? p.body : [p.summary])}
        ${p.result ? `<div class="result"><h3>Result</h3><p>${esc(p.result)}</p></div>` : ""}
        ${features}
        ${sections}
        ${references}
        ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
        ${p.codeUrl ? `<p><a class="btn btn-ghost" href="${p.codeUrl}" target="_blank" rel="noopener">View code on GitHub${NEW_TAB_NOTE}</a></p>` : ""}
      </div>
      <div class="dialog-tools">${tools}</div>
    </div>
    ${gallery}`;
}

function showProject(i) {
  dialogIndex = (i + dialogList.length) % dialogList.length;
  const p = dialogList[dialogIndex];
  closeLightbox();
  dialogBody.innerHTML = projectHtml(p);
  dialogBody.scrollTop = 0;
  setUpCaptionToggle();
  $(".dialog-pos").textContent = `${dialogIndex + 1} / ${dialogList.length}`;
  history.replaceState(null, "", `#project/${p.slug}`);
}

/* On/off button for captions, kept in step with the video player's own captions menu */
function setUpCaptionToggle() {
  const btn = $(".caption-toggle", dialogBody);
  if (!btn) return;
  const tracks = $("video", dialogBody).textTracks;
  const sync = () => {
    const on = tracks[0].mode === "showing";
    btn.textContent = `Captions: ${on ? "on" : "off"}`;
    btn.setAttribute("aria-pressed", on);
  };
  tracks.addEventListener("change", sync);
  btn.addEventListener("click", () => {
    tracks[0].mode = tracks[0].mode === "showing" ? "disabled" : "showing";
    sync();
  });
}

function openProject(slug) {
  dialogList = visible.some((p) => p.slug === slug) ? visible : PROJECTS;
  showProject(dialogList.findIndex((p) => p.slug === slug));
  if (!dialog.open) {
    openedFrom = document.activeElement;
    dialog.showModal();
  }
  dialogBody.scrollTop = 0;
}

dialog.addEventListener("close", () => {
  if (dialog.open) return; // a link reopened it before this event ran
  dialogBody.innerHTML = ""; // stops any playing video
  history.replaceState(null, "", "#projects");
  if (openedFrom && openedFrom.isConnected) openedFrom.focus({ preventScroll: true });
});
dialog.addEventListener("cancel", (e) => {
  if (!lightbox.hidden) {
    e.preventDefault();
    closeLightbox();
  }
});
$(".dialog-close").addEventListener("click", () => dialog.close());
document.querySelectorAll(".dialog-nav").forEach((b) => {
  b.addEventListener("click", () => showProject(dialogIndex + Number(b.dataset.dir)));
});
dialog.addEventListener("keydown", (e) => {
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
  if (e.target.tagName === "VIDEO") return;
  const dir = e.key === "ArrowRight" ? 1 : -1;
  if (lightbox.hidden) showProject(dialogIndex + dir);
  else showImage(galleryIndex + dir);
});

/* Gallery lightbox */
function showImage(i) {
  const items = dialogList[dialogIndex].gallery;
  galleryIndex = (i + items.length) % items.length;
  const img = $("img", lightbox);
  img.src = items[galleryIndex].src;
  img.alt = items[galleryIndex].alt;
  $("figcaption", lightbox).textContent = items[galleryIndex].alt;
  if (lightbox.hidden) {
    lightbox.hidden = false;
    setDialogContentInert(true);
    $(".lightbox-close").focus();
  }
}
function setDialogContentInert(inert) {
  dialogBody.inert = inert;
  $(".dialog-bar").inert = inert;
}
function closeLightbox() {
  if (lightbox.hidden) return;
  lightbox.hidden = true;
  setDialogContentInert(false);
  const item = dialogBody.querySelector(`.gallery-item[data-index="${galleryIndex}"]`);
  if (item) item.focus();
}
dialogBody.addEventListener("click", (e) => {
  const item = e.target.closest(".gallery-item");
  if (item) showImage(Number(item.dataset.index));
});
$(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.querySelectorAll(".lightbox-nav").forEach((b) => {
  b.addEventListener("click", () => showImage(galleryIndex + Number(b.dataset.dir)));
});

/* Direct links such as #project/synthesizer */
function openFromHash() {
  const m = location.hash.match(/^#project\/(.+)$/);
  if (m && PROJECTS.some((p) => p.slug === m[1])) {
    setActive(m[1]);
    openProject(m[1]);
  }
}
window.addEventListener("hashchange", openFromHash);

/* Copy email button, for people without a mail app set up */
const copyBtn = $(".copy-email");
const copyStatus = $(".copy-status");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.email);
    copyStatus.textContent = "Email address copied";
  } catch {
    copyStatus.textContent = `Couldn't copy. The address is ${copyBtn.dataset.email}`;
  }
});

renderFeatured();
applyFilter("all");
openFromHash();
