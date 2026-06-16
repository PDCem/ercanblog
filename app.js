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
      latestNews: "Aktuelle KI-News",
      latestVideos: "Video-Tipps des Tages",
      allNews: "Mehr News",
      allVideos: "Alle Video-Tipps",
      archive: "Archiv",
      page: "Seite",
      newer: "Neuere",
      older: "Ältere",
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
      videoContextTitle: "Kurz eingeordnet",
      videoContextText: "Warum anschauen? Dieses Video ist als Tages-Tipp ausgewählt, weil es ein aktuelles KI-Thema verständlich macht und dir schnell zeigt, welche Tools, Modelle oder Entwicklungen gerade wichtig sind.",
      videoContextTakeaway: "Ercans Hinweis: Schau besonders auf die praktischen Beispiele und überlege, welche Idee du direkt in deinen eigenen Workflow übernehmen kannst.",
      home: "Startseite",
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
      latestNews: "Güncel YZ haberleri",
      latestVideos: "Günün Video İpuçları",
      allNews: "Daha fazla haber",
      allVideos: "Tüm video ipuçları",
      archive: "Arşiv",
      page: "Sayfa",
      newer: "Daha yeni",
      older: "Daha eski",
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
      videoContextTitle: "Kısa değerlendirme",
      videoContextText: "Neden izlemeli? Bu video günün önerisi olarak seçildi, çünkü güncel bir yapay zekâ konusunu anlaşılır hale getiriyor ve hangi araçların, modellerin ya da gelişmelerin önemli olduğunu hızlıca gösteriyor.",
      videoContextTakeaway: "Ercan'ın notu: Özellikle pratik örneklere dikkat et ve kendi iş akışına doğrudan uygulayabileceğin bir fikir olup olmadığını düşün.",
      home: "Ana sayfa",
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

  /* ---------- Meta-Tags dynamisch aktualisieren ---------- */
  function setMeta(name, content) {
    const attr = name.startsWith("og:") ? "property" : "name";
    let el = document.querySelector(`meta[${attr}="${name.replace(/["\\]/g, "")}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content || "");
  }

  function setLink(rel, href) {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (el) el.setAttribute("href", href || "");
  }

  function setJsonLd(data) {
    let el = document.getElementById("json-ld-post");
    if (!el) {
      el = document.createElement("script");
      el.id = "json-ld-post";
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data, null, 2);
  }

  function updateMeta(opts = {}) {
    const title = opts.title || "Ercan Blog \u2014 KI-News täglich";
    const desc = opts.description || "Täglich das Wichtigste aus der Welt der künstlichen Intelligenz: Agenten, Modelle, Forschung, Markt und Hardware.";
    const url = opts.url || "https://ercanblog.vercel.app/";
    document.title = title;
    setMeta("description", desc);
    setMeta("og:title", title);
    setMeta("og:description", desc);
    setMeta("og:url", url);
    setMeta("twitter:title", title);
    setMeta("twitter:description", desc);
    setLink("canonical", url);
    if (opts.jsonLd) setJsonLd(opts.jsonLd);
  }

  const CATEGORY_REDIRECT = { llm: "modelle", hardware: "forschung" };
  const catObj = (key) => CATEGORIES.find((c) => c.key === key);
  const catLabel = (key) => { const c = catObj(key); return c ? c[LANG] : key; };
  const postMatchesLang = (p) => !p.lang || p.lang === "all" || p.lang === LANG;
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
  const byDate = (a, b) => (a.date === b.date ? 0 : (a.date < b.date ? 1 : -1));
  let allPosts = [];
  function refreshVisiblePosts() {
    allPosts = POSTS.filter(postMatchesLang).sort(byDate);
  }
  const HOME_NEWS_LIMIT = 6;
  const HOME_TIPS_LIMIT = 4;
  const NEWS_PAGE_SIZE = 10;
  const TIPS_PAGE_SIZE = 8;

  /* ---------- Markdown-lite -> HTML ---------- */
  function renderInline(text) {
    const input = String(text || "");
    const linkRe = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    let html = "";
    let last = 0;
    let match;
    while ((match = linkRe.exec(input)) !== null) {
      html += esc(input.slice(last, match.index));
      const label = match[1];
      const url = match[2].replace(/"/g, "%22");
      html += `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
      last = match.index + match[0].length;
    }
    html += esc(input.slice(last));
    return html;
  }

  function renderBody(text) {
    const blocks = text.trim().split(/\n\s*\n/);
    let html = "";
    for (const raw of blocks) {
      const block = raw.trim();
      if (block.startsWith("## ")) {
        html += `<h2>${esc(block.slice(3))}</h2>`;
      } else if (block.startsWith("> ")) {
        html += `<blockquote><p>${renderInline(block.slice(2))}</p></blockquote>`;
      } else if (/^- /.test(block)) {
        const items = block.split("\n").map((l) => l.replace(/^- /, "").trim())
          .filter(Boolean).map((x) => `<li>${renderInline(x)}</li>`).join("");
        html += `<ul>${items}</ul>`;
      } else {
        html += `<p>${renderInline(block.replace(/\n/g, " "))}</p>`;
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

  function tipTeaserTpl(tip) {
    const c = tip[LANG] || tip.de;
    return `<a class="tip-teaser" href="#/tipps/${encodeURIComponent(tip.id)}">
      <div class="tip-teaser-thumb"><img src="https://img.youtube.com/vi/${tip.youtube}/hqdefault.jpg" alt="" loading="lazy"></div>
      <div class="tip-teaser-body">
        <span class="chip chip--tip">${esc(t("youtubeTip"))}</span>
        <h3>${esc(c.title)}</h3>
        <span class="meta">${fmtDate(tip.date)}</span>
      </div>
    </a>`;
  }

  function paginationTpl(baseHash, page, totalPages) {
    if (totalPages <= 1) return "";
    const prev = page > 1 ? `<a class="pager-btn" href="${baseHash}${page - 1 === 1 ? "" : "/seite/" + (page - 1)}">← ${esc(t("newer"))}</a>` : `<span class="pager-btn disabled">← ${esc(t("newer"))}</span>`;
    const next = page < totalPages ? `<a class="pager-btn" href="${baseHash}/seite/${page + 1}">${esc(t("older"))} →</a>` : `<span class="pager-btn disabled">${esc(t("older"))} →</span>`;
    return `<nav class="pagination" aria-label="${esc(t("page"))}">${prev}<span class="pager-count">${esc(t("page"))} ${page} / ${totalPages}</span>${next}</nav>`;
  }

  function sidebarTpl() {
    const top = [...allPosts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
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
    } else if (!categoryKey && !query) {
      const feat = allPosts.find((p) => p.featured) || allPosts[0];
      const newsRows = allPosts.filter((p) => p.id !== feat.id).slice(0, HOME_NEWS_LIMIT);
      const tipRows = langTips().slice(0, HOME_TIPS_LIMIT);
      mainInner = `
        ${featuredTpl(feat)}
        <section class="home-section">
          <div class="feed-head"><h1>${esc(t("latestNews"))}</h1><span class="count">${Math.min(newsRows.length + 1, allPosts.length)} ${esc(t("postsWord"))}</span></div>
          <div class="feed-list">${newsRows.map(rowTpl).join("")}</div>
          <div class="section-actions"><a class="section-link" href="#/news">${esc(t("allNews"))} →</a><a class="section-link muted" href="#/archiv">${esc(t("archive"))} →</a></div>
        </section>
        ${tipRows.length ? `<section class="home-section video-section">
          <div class="feed-head"><h1>${esc(t("latestVideos"))}</h1><span class="count">${tipRows.length} ${esc(t("tips"))}</span></div>
          <div class="tips-teaser-grid">${tipRows.map(tipTeaserTpl).join("")}</div>
          <div class="section-actions"><a class="section-link" href="#/tipps">${esc(t("allVideos"))} →</a></div>
        </section>` : ""}`;
    } else {
      mainInner = `
        <div class="feed-head"><h1>${esc(headTitle)}</h1><span class="count">${list.length} ${esc(t("postsWord"))}</span></div>
        <div class="feed-list">${list.map(rowTpl).join("")}</div>`;
    }

    return `<div class="wrap"><div class="page">
      <main>${mainInner}</main>
      ${sidebarTpl()}
    </div></div>`;
  }

  function renderNewsPage(page = 1) {
    const totalPages = Math.max(1, Math.ceil(allPosts.length / NEWS_PAGE_SIZE));
    const current = Math.min(Math.max(1, page), totalPages);
    const rows = allPosts.slice((current - 1) * NEWS_PAGE_SIZE, current * NEWS_PAGE_SIZE);
    return `<div class="wrap"><div class="page">
      <main>
        <div class="feed-head"><h1>${esc(t("latestNews"))}</h1><span class="count">${allPosts.length} ${esc(t("postsWord"))}</span></div>
        <div class="feed-list">${rows.map(rowTpl).join("")}</div>
        ${paginationTpl("#/news", current, totalPages)}
      </main>
      ${sidebarTpl()}
    </div></div>`;
  }

  function renderArchive() {
    const groups = new Map();
    allPosts.forEach((p) => {
      const key = p.date.slice(0, 7);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(p);
    });
    const html = [...groups.entries()].map(([key, posts]) => {
      const [y, m] = key.split("-").map(Number);
      const title = `${MONTHS[LANG][m - 1]} ${y}`;
      return `<section class="archive-month"><h2>${esc(title)}</h2><div class="archive-list">${posts.map((p) => `<a href="#/beitrag/${p.id}"><span>${fmtDate(p.date)}</span><b>${esc(L(p).title)}</b></a>`).join("")}</div></section>`;
    }).join("");
    return `<div class="wrap"><div class="page">
      <main class="archive-page">
        <div class="feed-head"><h1>${esc(t("archive"))}</h1><span class="count">${allPosts.length} ${esc(t("postsWord"))}</span></div>
        ${html}
      </main>
      ${sidebarTpl()}
    </div></div>`;
  }

  function renderArticle(id) {
    const p = allPosts.find((x) => x.id === id);
    if (!p) {
      updateMeta({ title: "Beitrag nicht gefunden — Ercan Blog" });
      return `<div class="wrap"><div class="empty"><h2>${esc(t("notFoundTitle"))}</h2><p><a class="back-link" href="#/">← ${esc(t("back"))}</a></p></div></div>`;
    }

    const c = L(p);
    updateMeta({
      title: c.title + " — Ercan Blog",
      description: c.teaser,
      url: "https://ercanblog.vercel.app/#/beitrag/" + encodeURIComponent(p.id),
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": c.title,
        "description": c.teaser,
        "datePublished": p.date,
        "author": { "@type": "Person", "name": p.author },
        "image": "https://ercanblog.vercel.app/" + p.image,
        "url": "https://ercanblog.vercel.app/#/beitrag/" + encodeURIComponent(p.id),
        "inLanguage": LANG,
        "isPartOf": { "@type": "WebSite", "name": "Ercan Blog", "url": "https://ercanblog.vercel.app/" }
      }
    });
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

  function renderTips(page = 1) {
    const visible = langTips();
    if (visible.length === 0) {
      return `<div class="wrap"><div class="empty"><h2>${esc(t("tipsTitle"))}</h2><p>${esc(t("tipsEmpty"))}</p></div></div>`;
    }
    const totalPages = Math.max(1, Math.ceil(visible.length / TIPS_PAGE_SIZE));
    const current = Math.min(Math.max(1, page), totalPages);
    const pageItems = visible.slice((current - 1) * TIPS_PAGE_SIZE, current * TIPS_PAGE_SIZE);
    const cards = pageItems.map((tip) => {
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
      ${paginationTpl("#/tipps", current, totalPages)}
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
      <section class="tip-context" aria-labelledby="tip-context-title">
        <h2 id="tip-context-title">${esc(t("videoContextTitle"))}</h2>
        <p>${esc(t("videoContextText"))}</p>
        <p>${esc(t("videoContextTakeaway"))}</p>
      </section>
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
    if (parts[0] === "suche") return { view: "search", q: decodeURIComponent(parts.slice(1).join("/") || "") };
    if (parts[0] === "news") return { view: "news", page: parts[1] === "seite" ? Number(parts[2] || 1) : 1 };
    if (parts[0] === "archiv") return { view: "archive" };
    if (parts[0] === "tipps" && parts[1] === "seite") return { view: "tips", page: Number(parts[2] || 1) };
    if (parts[0] === "tipps" && parts[1]) return { view: "tip", id: decodeURIComponent(parts[1]) };
    if (parts[0] === "tipps") return { view: "tips", page: 1 };
    return { view: "home" };
  }

  function syncNav(activeKey) {
    document.querySelectorAll("[data-cat]").forEach((a) => {
      a.classList.toggle("active", a.getAttribute("data-cat") === (activeKey || "__all__"));
    });
  }

  function render() {
    refreshVisiblePosts();
    const route = parseHash();
    const app = $("#app");
    const search = $("#search-input");

    if (route.view === "article") {
      app.innerHTML = renderArticle(route.id);
      syncNav(null);
      if (search) search.value = "";
      window.scrollTo(0, 0);
    } else if (route.view === "category") {
      if (!catObj(route.catKey) && !CATEGORY_REDIRECT[route.catKey]) {
        updateMeta({ title: "Kategorie nicht gefunden — Ercan Blog" });
      }
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
      updateMeta({
        title: catLabel(route.catKey) + " — Ercan Blog",
        url: "https://ercanblog.vercel.app/#/kategorie/" + route.catKey
      });
    } else if (route.view === "news") {
      app.innerHTML = renderNewsPage(route.page || 1);
      syncNav("__news__");
      if (search) search.value = "";
      window.scrollTo(0, 0);
      updateMeta({ title: t("latestNews") + " — Ercan Blog", url: "https://ercanblog.vercel.app/#/news" });
    } else if (route.view === "archive") {
      app.innerHTML = renderArchive();
      syncNav("__archive__");
      if (search) search.value = "";
      window.scrollTo(0, 0);
      updateMeta({ title: t("archive") + " — Ercan Blog", url: "https://ercanblog.vercel.app/#/archiv" });
    } else if (route.view === "tips") {
      app.innerHTML = renderTips(route.page || 1);
      syncNav("__tips__");
      if (search) search.value = "";
      window.scrollTo(0, 0);
      updateMeta({ title: "Video-Tipps — Ercan Blog", url: "https://ercanblog.vercel.app/#/tipps" });
    } else if (route.view === "tip") {
      app.innerHTML = renderTip(route.id);
      syncNav("__tips__");
      if (search) search.value = "";
      window.scrollTo(0, 0);
      const tip = TIPS.find((x) => x.id === route.id);
      const tc = tip && (tip[LANG] || tip.de);
      if (tc) updateMeta({
        title: esc(tc.title) + " — Ercan Blog",
        description: esc(tc.desc),
        url: "https://ercanblog.vercel.app/#/tipps/" + encodeURIComponent(route.id)
      });
    } else if (route.view === "search") {
      app.innerHTML = renderHome({ query: route.q });
      syncNav("__all__");
      if (search && document.activeElement !== search) search.value = route.q;
      updateMeta({
        title: "Suche: " + route.q + " — Ercan Blog",
        url: "https://ercanblog.vercel.app/#/suche/" + encodeURIComponent(route.q)
      });
    } else {
      app.innerHTML = renderHome({});
      syncNav("__all__");
      if (search) search.value = "";
      window.scrollTo(0, 0);
      updateMeta({});
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
    const archiveLink = `<a href="#/archiv" data-cat="__archive__">${esc(t("archive"))}</a>`;
    if (nav) nav.innerHTML = html + tipsLink + archiveLink;
    if (mcats) mcats.innerHTML = html + tipsLink + archiveLink;
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
      fLinks.innerHTML = `<a id="f-home" href="#/">${esc(t("home"))}</a>${cats}<a href="#/tipps">${esc(t("tips"))}</a><a href="#/archiv">${esc(t("archive"))}</a>`;
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
