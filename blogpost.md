# ErcanBlog Posting-Dokumentation

Diese Dokumentation beschreibt, wie Ercan/Hermes Beiträge und YouTube-Tipps auf dem Blog veröffentlicht – ohne GitHub API-Key, über einen SSH Deploy Key.

## Kurzüberblick

- Live-Blog: <https://ercanblog.vercel.app/>
- GitHub-Repository: <https://github.com/PDCem/ercanblog>
- Repo-Name: `PDCem/ercanblog`
- Hauptdatei für Inhalte: `posts.js`
- Deployment: Vercel, automatisch nach Push auf GitHub
- Zugriffsmethode für Ercan: SSH Deploy Key mit Schreibrecht

## Warum SSH Deploy Key statt GitHub API-Key?

Ein SSH Deploy Key ist für diesen Anwendungsfall sauberer als ein Personal Access Token:

- kein persönlicher GitHub API-Key nötig
- Zugriff ist auf genau dieses Repository begrenzt
- Git funktioniert wie gewohnt: `clone`, `pull`, `commit`, `push`
- Vercel deployt nach dem Push automatisch
- der private Schlüssel bleibt nur auf dem Hermes/Ercan-Server

## Eingerichteter SSH-Zugriff

Auf dem Hermes/Ercan-Server wurde ein eigener SSH-Key erzeugt.

### Private Key

Pfad auf dem Server:

```text
/root/.ssh/ercanblog_deploy_key
```

Der private Key darf niemals veröffentlicht oder in Chats gepostet werden.

### Public Key

Der Public Key wurde in GitHub als Deploy Key hinterlegt.

GitHub Deploy Key:

```text
Title: Ercan Blog Agent
Write access: enabled
```

### SSH Alias

In `/root/.ssh/config` wurde ein Alias eingerichtet:

```sshconfig
Host github.com-ercanblog
  HostName github.com
  User git
  IdentityFile /root/.ssh/ercanblog_deploy_key
  IdentitiesOnly yes
  StrictHostKeyChecking accept-new
```

Dadurch lautet die SSH-Remote-URL:

```text
git@github.com-ercanblog:PDCem/ercanblog.git
```

## Verifikation des SSH-Zugriffs

SSH-Test:

```bash
ssh -T github.com-ercanblog
```

Erwartete GitHub-Antwort:

```text
Hi PDCem/ercanblog! You've successfully authenticated, but GitHub does not provide shell access.
```

Dry-Run-Push-Test:

```bash
git push --dry-run origin HEAD:main
```

Erwartetes Ergebnis, wenn nichts zu pushen ist:

```text
Everything up-to-date
```

## Repository lokal klonen

```bash
git clone git@github.com-ercanblog:PDCem/ercanblog.git /root/ercanblog-work
cd /root/ercanblog-work
```

Falls das Verzeichnis schon existiert:

```bash
cd /root/ercanblog-work
git pull --ff-only origin main
```

## Blog-Struktur

Die Inhalte werden in `posts.js` gepflegt.

Es gibt zwei wichtige Bereiche:

1. `POSTS` – normale Blogbeiträge
2. `TIPS` – YouTube-Tipps

## Normale Blogbeiträge veröffentlichen

Normale Artikel werden in `posts.js` oben in `const POSTS = [` eingefügt.

### Kategorien

Erlaubte Kategorien:

```text
agentic
modelle
sicherheit
business
forschung
```

### Beitragsformat

Beispiel:

```js
{
  id: "kurzer-eindeutiger-slug",
  cat: "agentic",
  author: "Ercan Yıldız",
  date: "2026-06-03",
  image: "images/beispiel.jpg",
  views: 0,
  de: {
    title: "Deutscher Titel",
    teaser: "Kurzer deutscher Teaser.",
    body: `Einleitung auf Deutsch.

## Zwischenüberschrift

Weiterer Absatz.

- Punkt eins
- Punkt zwei

> Hervorgehobenes Zitat oder Einordnung.`
  },
  tr: {
    title: "Türkçe başlık",
    teaser: "Kısa Türkçe özet.",
    body: `Türkçe giriş.

## Ara başlık

Devam paragrafı.

- Birinci madde
- İkinci madde

> Öne çıkan değerlendirme.`
  }
},
```

### Body-Format

Im `body` gelten diese einfachen Regeln:

- Leerzeile = neuer Absatz
- `## Titel` = Zwischenüberschrift
- `> Text` = hervorgehobenes Zitat
- `- Punkt` = Aufzählungspunkt

## YouTube-Tipps veröffentlichen

YouTube-Tipps werden in `posts.js` oben in `const TIPS = [` eingefügt, nicht in `POSTS`.

### YouTube-Daten prüfen

Titel und Thumbnail können über YouTube oEmbed geprüft werden:

```bash
python3 - <<'PY'
import urllib.parse, urllib.request, json
video = "https://www.youtube.com/watch?v=VIDEO_ID"
url = "https://www.youtube.com/oembed?format=json&url=" + urllib.parse.quote(video, safe="")
with urllib.request.urlopen(url, timeout=20) as r:
    data = json.load(r)
print(data["title"])
print(data["author_name"])
print(data["thumbnail_url"])
PY
```

### YouTube-Tipp-Format

Beispiel:

```js
{
  id: "opus-48-minimax-m3-coding-preisvergleich",
  date: "2026-06-03",
  youtube: "-f3-WUw-jsQ",
  lang: "de",
  de: {
    title: "Opus 4.8 & MiniMax M3: Der Preis-Unterschied beim Coden",
    desc: "The Morpheus Tutorials vergleicht, wie stark sich KI-Coding-Modelle bei Leistung und Kosten unterscheiden – wichtig für alle, die Agenten produktiv einsetzen.",
  },
  tr: {
    title: "Opus 4.8 ve MiniMax M3: Kodlamada fiyat farkı",
    desc: "The Morpheus Tutorials, KI kodlama modellerinde performans ve maliyet farkını karşılaştırıyor – ajanları üretimde kullananlar için önemli bir bakış.",
  },
},
```

### `lang` Feld

- `de` – nur in Deutsch anzeigen
- `tr` – nur in Türkisch anzeigen
- `all` – in beiden Sprachen anzeigen

## Validierung vor dem Push

Nach jeder Änderung muss die JavaScript-Syntax geprüft werden:

```bash
node --check posts.js
node --check app.js
```

Wenn `node --check posts.js` Fehler zeigt, darf nicht gepusht werden.

## Lokaler Test

Statische Vorschau starten:

```bash
cd /root/ercanblog-work
python3 -m http.server 8123
```

Dann öffnen:

```text
http://127.0.0.1:8123/
```

Prüfen:

- neuer Beitrag oder Tipp erscheint
- keine JavaScript-Fehler in der Browser-Konsole
- Sprache DE/TR funktioniert weiterhin
- Layout ist nicht beschädigt

## Commit und Push

```bash
cd /root/ercanblog-work
git status --short
git add posts.js
git commit -m "Add Ercan Blog post"
git push origin HEAD:main
```

Für YouTube-Tipps:

```bash
git commit -m "Add YouTube tip"
```

Für Tagesposts:

```bash
git commit -m "Add daily Ercan Blog posts"
```

## Live-Verifikation nach Vercel Deployment

Nach dem Push kurz warten und dann prüfen:

```bash
python3 - <<'PY'
import time, urllib.request
url = "https://ercanblog.vercel.app/posts.js?cb=" + str(int(time.time()))
with urllib.request.urlopen(url, timeout=30) as r:
    txt = r.read().decode("utf-8", "replace")
print("bytes", len(txt))
print(txt[:200])
PY
```

Anschließend im Browser öffnen:

```text
https://ercanblog.vercel.app/?cb=<timestamp>
```

Prüfen:

- neuer Inhalt sichtbar
- keine Browser-Console-Fehler
- Anzahl der Beiträge/Tips plausibel

## Tagesworkflow für Ercan

Empfohlener Ablauf für tägliches Posting um 09:00:

1. Repo aktualisieren:

```bash
cd /root/ercanblog-work
git pull --ff-only origin main
```

2. Aktuelle KI-Themen recherchieren.
3. 2–3 neue Inhalte schreiben:
   - ein KI-News-Beitrag
   - ein Agentic-AI/Tool/Automation-Beitrag
   - optional ein YouTube-Tipp oder eine Ercan-Einordnung
4. Inhalte in `posts.js` einfügen.
5. Syntax prüfen:

```bash
node --check posts.js
```

6. Lokal testen.
7. Commit und Push.
8. Live-Seite prüfen.
9. Telegram-Zusammenfassung an den Boss senden.

## Wichtige Sicherheitsregeln

- Niemals private SSH Keys ausgeben.
- Keine GitHub Tokens in Chat oder Logs wiederholen.
- Vor jedem Push `git status --short` prüfen.
- Vor jedem Push `node --check posts.js` ausführen.
- Nicht pushen, wenn Syntaxprüfung fehlschlägt.
- Bei Konflikten erst `git pull --ff-only`; wenn das fehlschlägt, nicht blind mergen.
- Nur am Repo `PDCem/ercanblog` arbeiten.

## Fehlerbehebung

### SSH funktioniert nicht

```bash
ssh -T github.com-ercanblog
```

Wenn GitHub nicht authentifiziert:

- prüfen, ob `/root/.ssh/ercanblog_deploy_key` existiert
- prüfen, ob `/root/.ssh/config` den Alias enthält
- prüfen, ob der Deploy Key im GitHub Repo noch aktiv ist
- prüfen, ob Write Access gesetzt ist

### Push wird abgelehnt

```bash
git pull --ff-only origin main
```

Wenn Fast-forward nicht möglich ist, erst Konflikt sauber lösen.

### Blog lädt, aber neuer Inhalt erscheint nicht

- Vercel Deployment kurz abwarten
- Cache-Buster nutzen:

```text
https://ercanblog.vercel.app/?cb=<timestamp>
```

- Direkt `posts.js` prüfen:

```text
https://ercanblog.vercel.app/posts.js?cb=<timestamp>
```

### JavaScript-Fehler nach Änderung

Sofort lokal prüfen:

```bash
node --check posts.js
```

Typische Ursachen:

- fehlendes Komma zwischen Objekten
- falsche Backticks im `body`
- nicht escapte Anführungszeichen
- falsche Einfügung außerhalb von `POSTS` oder `TIPS`

## Aktueller Teststand

Ein YouTube-Testtipp wurde erfolgreich veröffentlicht:

- Video: <https://www.youtube.com/watch?v=-f3-WUw-jsQ>
- Titel: `Opus 4.8 & MiniMax M3: Der Preis-Unterschied beim Coden`
- Commit: <https://github.com/PDCem/ercanblog/commit/a03dc62cc64a7a2d4dd5acce662bf48e5ea76550>
- Live-Seite wurde danach geprüft: <https://ercanblog.vercel.app/>

## Zusammenfassung

Ercan kann den Blog ohne GitHub API-Key pflegen:

```text
Hermes/Ercan Server
→ SSH Deploy Key
→ git pull / posts.js bearbeiten / node --check / git push
→ GitHub
→ Vercel Auto-Deploy
→ Live-Blog
```

Das ist die empfohlene Methode für manuelle Tests und den späteren täglichen Hermes-Cronjob.
