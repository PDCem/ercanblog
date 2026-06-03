# Ercan Blog

Tägliche Nachrichten rund um KI, Agentic AI, Modelle, Forschung, Markt und Hardware — zweisprachig **Deutsch / Türkisch**.

🌐 **Live:** https://pdcem.github.io/ercanblog/

## Lokal ansehen

```bash
python3 -m http.server
# → http://localhost:8000
```

## Neuen Beitrag schreiben

Es gibt **nur eine Datei** zu pflegen: **`posts.js`**.

Oben in der Liste `POSTS` einen neuen Block einfügen. Format-Hinweise stehen oben in `posts.js`.

Bild: Datei in den Ordner `images/` legen und im Beitrag bei `image:` verlinken.

## Automatisiertes Posten per KI-Agent

Ein GitHub Actions Workflow (`.github/workflows/daily-agent.yml`) erstellt jeden Morgen um 9 Uhr automatisch einen neuen Beitrag:

### Einrichtung

1. **Anthropic API-Key** als Secret im Repo hinterlegen:
   - Gehe zu **Settings → Secrets and variables → Actions**
   - **New repository secret** → Name: `AI_API_KEY`, Value: dein `sk-ant-...` Key

2. **Quellen anpassen** (optional):
   - In `.github/workflows/daily-agent.yml` die Listen `SOURCES` (RSS-Feeds) und `YOUTUBE_CHANNELS` bearbeiten.

3. **Manuell testen**:
   - Gehe zu **Actions → KI-Agent – Täglicher Post → Run workflow**

Der Agent scraped die Quellen, generiert per Claude Sonnet einen zweisprachigen (DE/TR) KI-News-Beitrag und committed ihn direkt ins Repo. GitHub Pages deployed automatisch.

## Online stellen (GitHub Pages)

1. Repo bei GitHub anlegen und alle Dateien hochladen.
2. Im Repo: **Settings → Pages → Branch: `main` / Ordner `/ (root)` → Save**.
3. Nach kurzer Zeit ist die Seite unter `https://<dein-name>.github.io/<repo>/` erreichbar.

---

© 2026 Ercan Blog — Regional. Digital. Vernetzt.
