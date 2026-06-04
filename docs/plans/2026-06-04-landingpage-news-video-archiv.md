# ErcanBlog Landingpage News/Video/Archiv Implementation Plan

> **For Hermes:** Umsetzung direkt in diesem Repo nach vorherigem Backup.

**Goal:** Die Startseite bleibt klar ein KI-News-Blog, Videos werden nur als kompakter Teaser gezeigt, und ältere Inhalte wandern in paginierte Listen/Archivseiten.

**Architecture:** `posts.js` bleibt Datenquelle. `app.js` bekommt getrennte Views für Startseite, News-Liste, Video-Liste und Archiv. `styles.css` bekommt kompakte Sektionen, CTA-Buttons und Pagination-Styles.

**Tech Stack:** Statische SPA mit Hash-Routing, Vanilla JS, CSS.

---

## Backup

- Git-Backup-Branch: `backup/pre-landing-redesign-20260604-112654`
- Archiv-Datei: `/root/backups/ercanblog/ercanblog-before-landing-redesign-20260604-112654.tar.gz`
- Ausgangs-HEAD: `e81b28c7a986aa1d9870551671e30957fa8710de`

## Umsetzungsschritte

1. Startseite umbauen:
   - Featured News oben behalten.
   - Danach maximal 6 aktuelle News.
   - Danach maximal 4 Video-Tipps als eigene kompakte Sektion.
   - Keine Videos mehr vor den News in den normalen Feed drücken.

2. News-Seite ergänzen:
   - Route `#/news` und `#/news/seite/<n>`.
   - Paginierung mit 10 News pro Seite.

3. Video-Seite begrenzen:
   - Route `#/tipps` bleibt, zusätzlich `#/tipps/seite/<n>`.
   - 8 Videos pro Seite.

4. Archiv-Seite ergänzen:
   - Route `#/archiv`.
   - Beiträge nach Monat gruppiert.

5. Navigation/Links:
   - Startseite bleibt kurz.
   - CTAs: “Mehr News”, “Alle Video-Tipps”, “Archiv”.
   - Footer bekommt Archiv-Link.

6. Verifikation:
   - `node --check posts.js`
   - `node --check app.js`
   - lokaler Browsercheck Startseite, News, Tipps, Archiv, Sprachwechsel, Video-Detail
   - Commit + Push
   - Live-Check mit Cachebuster und Browser-Konsole
