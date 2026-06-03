/* ============================================================
   Ercan Blog — App-Logik (zweisprachig DE / TR)
   Feed, Artikelansicht, Suche, Kategoriefilter, Theme, Sprache.
   Beiträge kommen aus posts.js (window.POSTS / window.CATEGORIES).
   ============================================================ */
(function () {
  "use strict";

  const POSTS = window.POSTS || [];
  const CATEGORIES = window.CATEGORIES || [];
  const TIPS = window.TIPS || [];

  /* ---------- UI-Texte je Sprache ---------- */
  const UI = {
    de: {
      all: "Alle",
      searchPlaceholder: "Suchen…",
      searchAria: "Beiträge durchsuchen",
      mostRead: "Meistgelesen",
      aboutTitle: "Über Ercan Blog",
      aboutText: "Täglich das Wichtigste aus der Welt der künstlichen Intelligenz – kompakt eingeordnet: Agenten, Modelle, Forschung, Markt und Hardware.",
      tagline: "KI. Verständlich. Täglich.",
      back: "Zur Übersicht",
      moreFrom: "Mehr aus",
      postsWord: "Beiträge",
      latest: "Aktuelle Beiträge",
      searchLabel: "Suche",
      notFoundTitle: "Beitrag nicht gefunden",
      noResultsTitle: "Keine Beiträge gefunden",
      noResultsHint: "Versuchen Sie einen anderen Suchbegriff oder eine andere Kategorie.",
      home: "Startseite",
      footerNote: "© 2026 Ercan Blog — Regional. Digital. Vernetzt.",
      themeTitle: "Hell/Dunkel umschalten",
      langTitle: "Sprache wechseln: Türkisch",
      tips: "Tipps",
      youtubeTip: "YouTube Tipp",
      tipsTitle: "Video-Tipps",
      tipsEmpty: "Noch keine Tipps. Schau bald wieder vorbei.",
    },
    tr: {
      all: "Tümü",
      searchPlaceholder: "Ara…",
      searchAria: "Yazılarda ara",
      mostRead: "En çok okunanlar",
      aboutTitle: "Ercan Blog hakkında",
      aboutText: "Yapay zekâ dünyasından en önemli gelişmeler her gün – derli toplu biçimde: ajanlar, modeller, araştırma, pazar ve donanım.",
      tagline: "Yapay zekâ. Anlaşılır. Her gün.",
      back: "Genel görünüme dön",
      moreFrom: "Daha fazla:",
      postsWord: "yazı",
      latest: "Güncel yazılar",
      searchLabel: "Arama",
      notFoundTitle: "Yazı bulunamadı",
      noResultsTitle: "Yazı bulunamadı",
      noResultsHint: "Farklı bir arama terimi veya kategori deneyin.",
      home: "Ana sayfa",
      footerNote: "© 2026 Ercan Blog — Regional. Digital. Vernetzt.",
      themeTitle: "Açık/Koyu geçişi",
      langTitle: "Dili değiştir: Almanca",
      tips: "İpuçları",
      youtubeTip: "YouTube İpucu",
      tipsTitle: "Video İpuçları",
      tipsEmpty: "Henüz ipucu yok. Daha sonra tekrar uğra.",
    },
  };

  /* ---------- Sprache ---------- */
  let LANG = localStorage.getItem("ercan-lang") || "de";
  if (LANG !== "de" && LANG !== "tr") LANG = "de";
  const t = (key) => (UI[LANG] && UI[LANG][key]) || UI.de[key] || key;

  /* ---------- Helpers ---------- */
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const CATEGORY_REDIRECT = { llm: "modelle", hardware: "forschung" };
  const catObj = (key) => CATEGORIES.find((c) => c.key === key);
  const catLabel = (key) => { const c = catObj(key); return c ? c[LANG] : key; };
  const langTips = () => TIPS.filter((t) => !t.lang || t.lang === "all" || t.lang === LANG);

  // German + Turkish month names
  const MONTHS = {
    de: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
    tr: ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],
  };
  function fmtDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    const mn = MONTHS[LANG][m - 1];
    return LANG === "de" ? `${d}. ${mn} ${y}` : `${d} ${mn} ${y}`;
  }
  function initials(name) {
    return name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  }

  // localized post content
  const L = (p) => p[LANG] || p.de;

  // Sort newest first
  const byDate = (a, b) => (a.date < b.date ? 1 : -1);
  const allPosts = [...POSTS].sort(byDate);

  /* ---------- Markdown-lite -> HTML ---------- */
  function renderBody(text) {
    const blocks = text.trim().split(/\n\s*\n/);
    let html = "";
    for (const raw of blocks) {
      const block = raw.trim();
      if (block.startsWith("## ")) {
        html += `<h2>${esc(block.slice(3))}</h2>`;
      } else if (block.startsWith("> ")) {
        html += `<blockquote><p>${esc(block.slice(2))}</p></blockquote>`;
      } else if (/^- /.test(block)) {
        const items = block.split("\n").map((l) => l.replace(/^- /, "").trim())
          .filter(Boolean).map((x) => `<li>${esc(x)}</li>`).join("");
        html += `<ul>${items}</ul>`;
      } else {
        html += `<p>${esc(block.replace(/\n/g, " "))}</p>`;
      }
    }
    return html;
  }

  /* ---------- Templates ---------- */
  function metaLine(p) {
    return `<div class="meta"><b>${esc(p.author)}</b><span class="dot"></span><span>${fmtDate(p.date)}</span></div>`;
  }

  function featuredTpl(p) {
    const c = L(p);
    return `<a class="featured" href="#/beitrag/${p.id}">
      <img class="featured-img" src="${p.image}" alt="" loading="lazy">
      <div class="featured-overlay">
        <span class="eyebrow">${esc(catLabel(p.cat))}</span>
        <h2>${esc(c.title)}</h2>
        <p>${esc(c.teaser)}</p>
        ${metaLine(p)}
      </div>
    </a>`;
  }

  function rowTpl(p) {
    const c = L(p);
    return `<a class="post-row" href="#/beitrag/${p.id}">
      <div class="post-thumb"><img src="${p.image}" alt="" loading="lazy"></div>
      <div class="post-body">
        <span class="chip">${esc(catLabel(p.cat))}</span>
        <h2 class="post-row-title">${esc(c.title)}</h2>
        <p>${esc(c.teaser)}</p>
        ${metaLine(p)}
      </div>
    </a>`;
  }

  function tipRowTpl(tip) {
    const c = tip[LANG] || tip.de;
    return `<a class="post-row" href="#/tipps/${encodeURIComponent(tip.id)}">
      <div class="post-thumb"><img src="https://img.youtube.com/vi/${tip.youtube}/maxresdefault.jpg" alt="" loading="lazy"></div>
      <div class="post-body">
        <span class="chip chip--tip">${esc(t("youtubeTip"))}</span>
        <h2 class="post-row-title">${esc(c.title)}</h2>
        <p>${esc(c.desc)}</p>
        <div class="meta"><span>${fmtDate(tip.date)}</span></div>
      </div>
    </a>`;
  }

  function sidebarTpl() {
    const top = [...POSTS].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
    const ranks = top.map((p, i) => `
      <a class="rank-item" href="#/beitrag/${p.id}">
        <div class="rank-num">${i + 1}</div>
        <div>
          <div class="rank-title">${esc(L(p).title)}</div>
          <div class="rank-meta">${esc(catLabel(p.cat))} · ${fmtDate(p.date)}</div>
        </div>
      </a>`).join("");
    return `
      <aside class="sidebar">
        <div class="panel">
          <div class="panel-head"><span class="bar"></span><h3>${esc(t("mostRead"))}</h3></div>
          <div class="rank-list">${ranks}</div>
        </div>
        <div class="panel about-box">
          <h3>${esc(t("aboutTitle"))}</h3>
          <p>${esc(t("aboutText"))}</p>
          <div class="tagline">${esc(t("tagline"))}</div>
        </div>
      </aside>`;
  }

  /* ---------- Views ---------- */
  function renderHome({ categoryKey = null, query = "" } = {}) {
    let list = allPosts;
    if (categoryKey) list = list.filter((p) => p.cat === categoryKey);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((p) => {
        const c = L(p);
        return (c.title + " " + c.teaser + " " + catLabel(p.cat) + " " + c.body).toLowerCase().includes(q);
      });
    }

    let headTitle = t("latest");
    if (categoryKey) headTitle = catLabel(categoryKey);
    if (query) headTitle = `${t("searchLabel")}: „${query}“`;

    let mainInner = "";
    if (list.length === 0) {
      mainInner = `<div class="empty"><h2>${esc(t("noResultsTitle"))}</h2><p>${esc(t("noResultsHint"))}</p></div>`;
    } else {
      let rows = list;
      let featuredHtml = "";
      let tipsHtml = "";
      if (!categoryKey && !query) {
        const feat = allPosts.find((p) => p.featured) || allPosts[0];
        featuredHtml = featuredTpl(feat);
        rows = list.filter((p) => p.id !== feat.id);
        tipsHtml = langTips().map(tipRowTpl).join("");
      }
      const total = list.length + (tipsHtml ? langTips().length : 0);
      mainInner = `
        ${featuredHtml}
        ${tipsHtml ? `<div class="tips-in-feed">${tipsHtml}</div>` : ""}
        <div class="feed-head"><h1>${esc(headTitle)}</h1><span class="count">${total} ${esc(t("postsWord"))}</span></div>
        <div class="feed-list">${rows.map(rowTpl).join("")}</div>`;
    }

    return `<div class="wrap"><div class="page">
      <main>${mainInner}</main>
      ${sidebarTpl()}
    </div></div>`;
  }

  function renderArticle(id) {
    const p = POSTS.find((x) => x.id === id);
    if (!p) return `<div class="wrap"><div class="empty"><h2>${esc(t("notFoundTitle"))}</h2><p><a class="back-link" href="#/">← ${esc(t("back"))}</a></p></div></div>`;

    const c = L(p);
    const more = allPosts.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 3);
    const moreHtml = more.length ? `
      <div class="more">
        <h3>${esc(t("moreFrom"))} ${esc(catLabel(p.cat))}</h3>
        <div class="more-grid">
          ${more.map((m) => `<a class="more-card" href="#/beitrag/${m.id}">
            <div class="t"><img src="${m.image}" alt="" loading="lazy"></div>
            <h4>${esc(L(m).title)}</h4>
          </a>`).join("")}
        </div>
      </div>` : "";

    return `<div class="wrap">
      <article class="article">
        <a class="back-link" href="${prevHash}">← ${esc(t("back"))}</a>
        <div class="article-head">
          <span class="chip">${esc(catLabel(p.cat))}</span>
          <h1>${esc(c.title)}</h1>
          <div class="article-meta">
            <div class="avatar">${initials(p.author)}</div>
            <div class="who"><b>${esc(p.author)}</b><span>${fmtDate(p.date)}</span></div>
          </div>
        </div>
        <img class="article-cover" src="${p.image}" alt="" loading="lazy">
        <div class="prose">${renderBody(c.body)}</div>
      </article>
      ${moreHtml}
    </div>`;
  }

  function renderTips() {
    const visible = langTips();
    if (visible.length === 0) {
      return `<div class="wrap"><div class="empty"><h2>${esc(t("tipsTitle"))}</h2><p>${esc(t("tipsEmpty"))}</p></div></div>`;
    }
    const cards = visible.map((tip) => {
      const c = tip[LANG] || tip.de;
      return `<a class="tip-card" href="#/tipps/${encodeURIComponent(tip.id)}">
        <div class="tip-video"><iframe src="https://www.youtube.com/embed/${tip.youtube}" frameborder="0" allowfullscreen loading="lazy"></iframe></div>
        <div class="tip-body">
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.desc)}</p>
          <span class="meta">${fmtDate(tip.date)}</span>
        </div>
      </a>`;
    }).join("");
    return `<div class="wrap"><div class="tips-page">
      <div class="feed-head"><h1>${esc(t("tipsTitle"))}</h1><span class="count">${visible.length} ${esc(t("tips"))}</span></div>
      <div class="tips-grid">${cards}</div>
    </div></div>`;
  }

  function renderTip(id) {
    const tip = TIPS.find((x) => x.id === id && (!x.lang || x.lang === "all" || x.lang === LANG))
      || TIPS.find((x) => x.id === id);
    if (!tip) {
      return `<div class="wrap"><div class="empty"><h2>${esc(t("notFoundTitle"))}</h2><p><a class="back-link" href="#/tipps">← ${esc(t("tipsTitle"))}</a></p></div></div>`;
    }
    const c = tip[LANG] || tip.de;
    return `<div class="wrap"><div class="tips-page tip-detail-page">
      <p><a class="back-link" href="#/tipps">← ${esc(t("tipsTitle"))}</a></p>
      <div class="tip-card tip-card--single">
        <div class="tip-video"><iframe src="https://www.youtube.com/embed/${tip.youtube}" frameborder="0" allowfullscreen loading="lazy"></iframe></div>
        <div class="tip-body">
          <span class="chip chip--tip">${esc(t("youtubeTip"))}</span>
          <h1>${esc(c.title)}</h1>
          <p>${esc(c.desc)}</p>
          <span class="meta">${fmtDate(tip.date)}</span>
        </div>
      </div>
    </div></div>`;
  }

  /* ---------- History für Zurück-Button ---------- */
  let prevHash = "#/";

  /* ---------- Router ---------- */
  function parseHash() {
    const h = location.hash.replace(/^#/, "");
    const parts = h.split("/").filter(Boolean);
    if (parts[0] === "beitrag" && parts[1]) return { view: "article", id: decodeURIComponent(parts[1]) };
    if (parts[0] === "kategorie" && parts[1]) return { view: "category", catKey: parts[1] };
    if (parts[0] === "suche" && parts[1]) return { view: "search", q: decodeURIComponent(parts[1]) };
    if (parts[0] === "tipps" && parts[1]) return { view: "tip", id: decodeURIComponent(parts[1]) };
    if (parts[0] === "tipps") return { view: "tips" };
    return { view: "home" };
  }

  function syncNav(activeKey) {
    document.querySelectorAll("[data-cat]").forEach((a) => {
      a.classList.toggle("active", a.getAttribute("data-cat") === (activeKey || "__all__"));
    });
  }

  function render() {
    const route = parseHash();
    const app = $("#app");
    const search = $("#search-input");

    if (route.view === "article") {
      app.innerHTML = renderArticle(route.id);
      syncNav(null);
      if (search) search.value = "";
      window.scrollTo(0, 0);
    } else if (route.view === "category") {
      const redirect = CATEGORY_REDIRECT[route.catKey];
      if (redirect) {
        location.hash = "#/kategorie/" + redirect;
        return;
      }
      if (!catObj(route.catKey)) {
        app.innerHTML = `<div class="wrap"><div class="empty"><h2>${esc(t("noResultsTitle"))}</h2><p>${esc(t("noResultsHint"))}</p><p><a class="back-link" href="#/">← ${esc(t("back"))}</a></p></div></div>`;
        syncNav(null);
        if (search) search.value = "";
        window.scrollTo(0, 0);
        return;
      }
      app.innerHTML = renderHome({ categoryKey: route.catKey });
      syncNav(route.catKey);
      if (search) search.value = "";
      window.scrollTo(0, 0);
    } else if (route.view === "tips") {
      app.innerHTML = renderTips();
      syncNav("__tips__");
      if (search) search.value = "";
      window.scrollTo(0, 0);
    } else if (route.view === "tip") {
      app.innerHTML = renderTip(route.id);
      syncNav("__tips__");
      if (search) search.value = "";
      window.scrollTo(0, 0);
    } else if (route.view === "search") {
      app.innerHTML = renderHome({ query: route.q });
      syncNav("__all__");
      if (search && document.activeElement !== search) search.value = route.q;
    } else {
      app.innerHTML = renderHome({});
      syncNav("__all__");
      if (search) search.value = "";
      window.scrollTo(0, 0);
    }
  }

  /* ---------- Header-Navigation aufbauen ---------- */
  function buildNav() {
    const nav = $("#nav");
    const mcats = $("#mobile-cats");
    const items = [{ label: t("all"), key: null }]
      .concat(CATEGORIES.map((c) => ({ label: c[LANG], key: c.key })));
    const html = items.map((it) =>
      `<a data-cat="${it.key || "__all__"}" href="${it.key ? "#/kategorie/" + it.key : "#/"}">${esc(it.label)}</a>`).join("");
    const tipsLink = `<a href="#/tipps" data-cat="__tips__">${esc(t("tips"))}</a>`;
    if (nav) nav.innerHTML = html + tipsLink;
    if (mcats) mcats.innerHTML = html + tipsLink;
  }

  /* ---------- Statische UI-Texte setzen ---------- */
  function applyStaticText() {
    document.documentElement.setAttribute("lang", LANG);
    const search = $("#search-input");
    if (search) { search.placeholder = t("searchPlaceholder"); search.setAttribute("aria-label", t("searchAria")); }
    const tg = $("#theme-toggle"); if (tg) tg.title = t("themeTitle");
    const footer = $("#footer-note"); if (footer) footer.textContent = t("footerNote");
    const fHome = $("#f-home"); if (fHome) fHome.textContent = t("home");
    const langBtn = $("#lang-toggle");
    if (langBtn) {
      langBtn.title = t("langTitle");
      langBtn.querySelector(".lang-de").classList.toggle("on", LANG === "de");
      langBtn.querySelector(".lang-tr").classList.toggle("on", LANG === "tr");
    }
    const fLinks = $("#footer-links");
    if (fLinks) {
      const cats = CATEGORIES.map((c) => `<a href="#/kategorie/${c.key}">${esc(c[LANG])}</a>`).join("");
      fLinks.innerHTML = `<a id="f-home" href="#/">${esc(t("home"))}</a>${cats}<a href="#/tipps">${esc(t("tips"))}</a>`;
    }
  }

  /* ---------- Suche ---------- */
  function initSearch() {
    const input = $("#search-input");
    let timer;
    input.addEventListener("input", () => {
      clearTimeout(timer);
      const q = input.value.trim();
      timer = setTimeout(() => {
        location.hash = q ? "#/suche/" + encodeURIComponent(q) : "#/";
      }, 220);
    });
  }

  /* ---------- Theme ---------- */
  function initTheme() {
    const root = document.documentElement;
    const saved = localStorage.getItem("ercan-theme") || "light";
    root.setAttribute("data-theme", saved);
    updateThemeIcon(saved);
    $("#theme-toggle").addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("ercan-theme", next);
      updateThemeIcon(next);
    });
  }
  function updateThemeIcon(theme) {
    const sun = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
    const moon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`;
    $("#theme-toggle").innerHTML = theme === "dark" ? sun : moon;
  }

  /* ---------- Sprache umschalten ---------- */
  function initLang() {
    $("#lang-toggle").addEventListener("click", () => {
      LANG = LANG === "de" ? "tr" : "de";
      localStorage.setItem("ercan-lang", LANG);
      buildNav();
      applyStaticText();
      render();
    });
  }

  /* ---------- Scroll-Schatten ---------- */
  function initScroll() {
    const header = $(".site-header");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    buildNav();
    applyStaticText();
    initTheme();
    initLang();
    initSearch();
    initScroll();
    window.addEventListener("hashchange", (e) => {
      prevHash = new URL(e.oldURL).hash || "#/";
      render();
    });
    render();
  });
})();
