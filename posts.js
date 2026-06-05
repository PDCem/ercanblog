/* ============================================================
   ERCAN BLOG — Beiträge / Yazılar
   ------------------------------------------------------------
   DAS IST DIE EINZIGE DATEI, DIE DU TÄGLICH PFLEGEN MUSST.
   GÜNLÜK OLARAK SADECE BU DOSYAYI GÜNCELLEMEN YETERLİDİR.

   ------------------------------------------------------------
   NEUEN BEITRAG ANLEGEN / YENİ YAZI EKLEME
   ------------------------------------------------------------
   Oben in der Liste POSTS einen neuen Block { ... } einfügen.
   Der oberste Beitrag steht im Feed ganz oben.

   Jeder Beitrag hat GEMEINSAME Felder und je einen Block
   für Deutsch (de) und Türkisch (tr):

     id        – eindeutiger Kürzel ohne Leerzeichen (für den Link)
      cat       – Kategorie-Schlüssel: "agentic" | "modelle" |
                  "sicherheit" | "business" | "forschung"
     lang      – Sichtbarkeit/Quellsprache: "de" | "tr" | "all"
                  WICHTIG: News werden pro Sprache getrennt recherchiert.
                  Deutsche Quellen => lang: "de", türkische Quellen => lang: "tr".
     author    – Name (in beiden Sprachen gleich)
     date      – "JJJJ-MM-TT"
     image     – Pfad zum Titelbild (z. B. "images/mein-bild.jpg")
     featured  – true => großer Aufmacher ganz oben (optional)
     views     – Zahl => steuert "Meistgelesen" (optional)
     de: { title, teaser, body }   – deutsche Fassung
     tr: { title, teaser, body }   – türkische Fassung

   TEXT-FORMAT für "body" (ganz einfach / çok basit):
     – Leerzeile  = neuer Absatz / yeni paragraf
     – "## Titel" = Zwischenüberschrift / ara başlık
     – "> Text"   = hervorgehobenes Zitat / alıntı
     – "- Punkt"  = Aufzählungspunkt / madde
   ============================================================ */

const CATEGORIES = [
  { key: "agentic",    de: "Agentic AI",      tr: "Agentik YZ" },
  { key: "modelle",    de: "KI-Modelle",      tr: "Modeller" },
  { key: "sicherheit", de: "KI-Sicherheit",   tr: "Güvenlik" },
  { key: "business",   de: "KI-Business",     tr: "İş Dünyası" },
  { key: "forschung",  de: "KI-Forschung",    tr: "Araştırma" },
];

const POSTS = [

  /* ---------------------------------------------------------- */
  {
    id: "heise-vscode-agent-sessions-2026-06-05",
    cat: "agentic",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-05",
    image: "images/2026-06-05-vscode-agent-sessions.jpg",
    featured: true,
    views: 6860,
    de: {
      title: "VS Code synchronisiert Agenten-Sessions über Geräte hinweg",
      teaser: "heise berichtet über Visual Studio Code 1.123: begonnene KI-Chats lassen sich auf anderen Geräten fortsetzen, dazu wachsen Kontextfenster für OpenAI- und Anthropic-Modelle.",
      body: `heise berichtet über Visual Studio Code 1.123 und eine Funktion, die für Entwicklerteams wichtiger ist, als sie auf den ersten Blick klingt: KI- und Agenten-Chats sollen über Geräte hinweg fortgesetzt werden können. Wer also eine Analyse, ein Debugging oder eine Refactoring-Idee im Editor startet, verliert den Gesprächsverlauf nicht mehr automatisch beim Wechsel auf einen anderen Rechner.

Dazu kommen größere Kontextfenster für OpenAI- und Anthropic-Modelle. Das bedeutet: Der Assistent kann mehr Projektkontext, mehr bisherige Diskussion und mehr zusammenhängende Code-Informationen im Blick behalten. Gerade bei längeren Coding-Sessions ist das ein Unterschied zwischen einem schnellen Chatbot und einem echten Arbeitsbegleiter.

## Warum das für Agentic AI wichtig ist

Agentic AI lebt von Kontinuität. Ein Agent soll nicht nur eine einzelne Frage beantworten, sondern Aufgaben über mehrere Schritte verfolgen: Code lesen, Hypothesen bilden, Tests ausführen, Fehler erklären und dann gezielt Änderungen vorschlagen. Wenn diese Arbeit an ein Gerät oder eine einzelne lokale Session gebunden bleibt, bricht der Workflow schnell auseinander.

Mit synchronisierten Agenten-Sessions rückt die IDE näher an einen dauerhaften KI-Arbeitsraum heran. Für Teams kann das nützlich sein, weil Kontext nicht ständig neu aufgebaut werden muss. Gleichzeitig entstehen neue Fragen: Welche Daten werden synchronisiert? Wie lange bleiben sie gespeichert? Und welche Projektgeheimnisse landen versehentlich im Chatverlauf?

## Was Entwicklerteams prüfen sollten

- Quelle zum Weiterlesen: [heise online](https://www.heise.de/news/Visual-Studio-Code-1-123-synchronisiert-Agenten-Sessions-ueber-Geraete-hinweg-11319338.html).
- Thema: Visual Studio Code 1.123, KI-Chat, Agenten-Sessions, größere Kontextfenster.
- Praktische Frage: Welche Repos, Dateien und Prompts dürfen überhaupt in persistente KI-Sessions?
- Sicherheitsfrage: Wie werden Cloud-Sync, Compliance, Kundencode und interne Secrets getrennt?

## Ercans Einordnung

> Der nächste Produktivitätssprung kommt nicht nur vom besseren Modell, sondern vom besseren Gedächtnis im Werkzeug.

Für einzelne Entwickler ist das bequem. Für Unternehmen ist es Governance-Arbeit. Wer KI-Assistenten ernsthaft in den Entwicklungsprozess integriert, braucht klare Regeln für Kontextfreigabe, Session-Löschung, Auditierbarkeit und den Umgang mit vertraulichem Code. Sonst wird aus Produktivität schnell Schatten-IT im Editor.`,
    },
    tr: {
      title: "VS Code ajan oturumlarını cihazlar arasında senkronize ediyor",
      teaser: "heise'ye göre Visual Studio Code 1.123, başlatılan YZ sohbetlerini başka cihazlarda sürdürmeyi sağlıyor; OpenAI ve Anthropic modelleri için bağlam pencereleri de büyüyor.",
      body: `heise, Visual Studio Code 1.123 ile gelen ve geliştirici ekipler için ilk bakışta göründüğünden daha önemli olan bir yeniliği aktarıyor: YZ ve ajan sohbetleri cihazlar arasında sürdürülebilecek. Yani bir geliştirici editörde kod analizi, hata ayıklama ya da refactoring fikri başlattığında, başka bilgisayara geçtiği için konuşma bağlamını kaybetmek zorunda kalmayacak.

Buna OpenAI ve Anthropic modelleri için daha büyük bağlam pencereleri de ekleniyor. Bu, asistanın daha fazla proje bağlamını, daha uzun konuşma geçmişini ve daha geniş kod bilgisini aynı anda dikkate alabilmesi anlamına geliyor. Uzun coding oturumlarında bu fark, basit bir sohbet botu ile gerçek bir çalışma arkadaşı arasındaki fark gibi hissedilebilir.

## Agentic AI için neden önemli

Agentic AI süreklilik ister. Bir ajanın yalnızca tek bir soruya cevap vermesi değil; kodu okuması, hipotez kurması, testleri çalıştırması, hatayı açıklaması ve sonra hedefli değişiklik önermesi beklenir. Bu iş tek cihaza veya tek lokal oturuma bağlı kalırsa akış kolayca kopar.

Senkronize ajan oturumlarıyla IDE, kalıcı bir YZ çalışma alanına biraz daha yaklaşıyor. Ekipler için bu değerli olabilir; çünkü bağlamı sürekli baştan kurmak gerekmez. Ama aynı anda yeni sorular doğar: Hangi veriler senkronize ediliyor? Ne kadar süre saklanıyor? Proje sırları yanlışlıkla sohbet geçmişine giriyor mu?

## Ekiplerin kontrol etmesi gerekenler

- Kaynak ve devamı: [heise online](https://www.heise.de/news/Visual-Studio-Code-1-123-synchronisiert-Agenten-Sessions-ueber-Geraete-hinweg-11319338.html).
- Konu: Visual Studio Code 1.123, YZ sohbeti, ajan oturumları, daha büyük bağlam pencereleri.
- Pratik soru: Hangi repo, dosya ve promptlar kalıcı YZ oturumlarına girebilir?
- Güvenlik sorusu: Cloud sync, uyumluluk, müşteri kodu ve gizli bilgiler nasıl ayrılacak?

## Ercan'ın yorumu

> Bir sonraki verimlilik sıçraması yalnızca daha iyi modelden değil, aracın daha iyi hafızasından gelecek.

Bireysel geliştirici için bu çok kullanışlı. Şirketler için ise yönetişim meselesi. YZ asistanlarını geliştirme sürecine ciddi biçimde entegre eden ekiplerin bağlam paylaşımı, oturum silme, denetlenebilirlik ve gizli kod kullanımı için net kurallara ihtiyacı var. Aksi halde verimlilik, editör içinde gölge BT'ye dönüşebilir.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "heise-mythos-anthropic-nsa-ki-einsatz-2026-06-05",
    cat: "sicherheit",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-05",
    image: "images/2026-06-05-nsa-ai-security.jpg",
    views: 6710,
    de: {
      title: "Bericht: Anthropic hilft NSA bei offensivem Mythos-Einsatz",
      teaser: "heise greift einen Bericht auf, nach dem Anthropic-Angestellte bei der NSA am Einsatz der mächtigen Mythos-KI arbeiten – ein heikler Sicherheits- und Governance-Fall.",
      body: `heise greift einen Bericht auf, nach dem Anthropic-Beschäftigte die US-Behörde NSA beim Einsatz von Claude Mythos Preview unterstützen sollen. Brisant ist daran nicht nur der Name einer Geheimdienstbehörde, sondern die Frage, wie leistungsfähige Frontier-Modelle in sicherheitsnahen oder sogar offensiven Kontexten eingesetzt werden.

Die öffentliche KI-Debatte trennt gern zwischen ziviler Produktivität auf der einen Seite und Sicherheits- oder Militärnutzung auf der anderen. In der Praxis verschwimmt diese Grenze. Modelle, die Code verstehen, Schwachstellen analysieren, komplexe Texte auswerten und operative Entscheidungen vorbereiten können, sind für Behörden und Verteidigungseinrichtungen logischerweise interessant.

## Governance wird konkret

Viele KI-Sicherheitsdiskussionen bleiben abstrakt: Was könnte ein Modell irgendwann tun? Dieser Fall macht die Frage konkreter: Wer entscheidet, welche Kunden ein Frontier-Modell für welche Zwecke nutzen dürfen? Welche internen Grenzen gelten für Anbieter? Gibt es unabhängige Audits oder nur öffentliche Selbstverpflichtungen?

Für Anthropic ist das besonders sensibel, weil das Unternehmen stark über Sicherheits- und Verantwortungsversprechen kommuniziert. Wenn zugleich an offensiven staatlichen Einsatzszenarien gearbeitet wird, muss die Governance sauber erklärbar sein. Sonst entsteht der Eindruck, dass Sicherheitsrhetorik und Geschäftsrealität auseinanderlaufen.

## Was Unternehmen daraus lernen können

- Quelle zum Weiterlesen: [heise online](https://www.heise.de/news/Mythos-Preview-Anthropic-unterstuetzt-NSA-angeblich-bei-offensivem-KI-Einsatz-11319206.html).
- Thema: Anthropic, Claude Mythos Preview, NSA, offensive KI-Nutzung.
- Risiko: Frontier-Modelle werden Teil sicherheitskritischer Infrastruktur.
- Prüfpunkt: Anbieter sollten nicht nur nach Benchmarks, sondern auch nach Governance, Auditierbarkeit und Einsatzgrenzen bewertet werden.

## Ercans Einordnung

> Bei Frontier-Modellen ist Governance kein PR-Anhang, sondern Kernprodukt.

Für Firmen heißt das: Der Modellanbieter ist nicht einfach ein technischer Lieferant. Er ist Teil der eigenen Risikokette. Wer sensible Daten, Code oder Entscheidungsprozesse an ein Modell gibt, sollte wissen, wie der Anbieter mit staatlichen Aufträgen, Sicherheitsfällen, Missbrauch und Transparenz umgeht.`,
    },
    tr: {
      title: "İddia: Anthropic, NSA'nın Mythos'u saldırı amaçlı kullanmasına destek oluyor",
      teaser: "heise'nin aktardığı habere göre Anthropic çalışanları, güçlü Mythos YZ modelinin NSA tarafından operasyonel kullanımı üzerinde çalışıyor olabilir.",
      body: `heise'nin aktardığı habere göre Anthropic çalışanları, ABD istihbarat kurumu NSA'nın Claude Mythos Preview kullanımına destek veriyor olabilir. Buradaki hassas nokta yalnızca NSA adının geçmesi değil; güçlü frontier modellerin güvenlik alanında ve potansiyel olarak saldırı amaçlı senaryolarda nasıl kullanılacağı sorusu.

Kamuoyundaki YZ tartışması çoğu zaman sivil verimlilik ile askeri veya istihbari kullanım arasında net bir çizgi varmış gibi ilerliyor. Pratikte bu çizgi bulanık. Kod anlayabilen, zafiyet analizi yapabilen, karmaşık metinleri işleyebilen ve operasyonel karar süreçlerini destekleyebilen modeller doğal olarak güvenlik kurumlarının ilgisini çekiyor.

## Yönetişim artık soyut değil

YZ güvenliği tartışmaları çoğu zaman teorik kalıyor: Bir model gelecekte ne yapabilir? Bu örnek soruyu somutlaştırıyor: Frontier modeli hangi müşteri hangi amaçla kullanabilir? Sağlayıcının iç sınırları ne? Bağımsız denetim var mı, yoksa yalnızca kamuya açık iyi niyet beyanları mı var?

Anthropic için bu özellikle hassas. Çünkü şirket kendini güçlü biçimde güvenlik ve sorumluluk söylemiyle konumlandırıyor. Aynı anda saldırı amaçlı devlet kullanım senaryoları konuşuluyorsa, yönetişimin net biçimde açıklanması gerekir. Aksi halde güvenlik söylemi ile ticari gerçeklik arasında boşluk oluşur.

## Şirketler için ders

- Kaynak ve devamı: [heise online](https://www.heise.de/news/Mythos-Preview-Anthropic-unterstuetzt-NSA-angeblich-bei-offensivem-KI-Einsatz-11319206.html).
- Konu: Anthropic, Claude Mythos Preview, NSA, saldırı amaçlı YZ kullanımı.
- Risk: Frontier modeller güvenlik açısından kritik altyapının parçası oluyor.
- Kontrol noktası: sağlayıcılar yalnızca benchmark skorlarıyla değil, yönetişim, denetlenebilirlik ve kullanım sınırlarıyla da değerlendirilmelidir.

## Ercan'ın yorumu

> Frontier modellerde yönetişim bir PR eki değil, ürünün çekirdeğidir.

Şirketler için anlamı şu: Model sağlayıcı yalnızca teknik tedarikçi değildir. Kendi risk zincirinizin parçasıdır. Hassas veri, kod veya karar süreçleri bir modele emanet ediliyorsa; sağlayıcının devlet işleri, güvenlik olayları, kötüye kullanım ve şeffaflık konularında nasıl davrandığı bilinmelidir.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "t3n-agenten-protokolle-internet-2026-06-05",
    cat: "agentic",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-05",
    image: "images/2026-06-05-agent-protocols-network.jpg",
    views: 6540,
    de: {
      title: "Fünf neue Protokolle sollen KI-Agenten im Internet vernetzen",
      teaser: "t3n ordnet Protokolle ein, mit denen Agenten bezahlen, verhandeln und miteinander kommunizieren können – wichtig für die nächste Stufe automatisierter Workflows.",
      body: `t3n beschreibt fünf neue Internet-Protokolle, die KI-Agenten besser miteinander und mit Diensten im Netz verbinden sollen. Der Kern der Entwicklung: Agenten sollen nicht nur Texte schreiben oder Tools aufrufen, sondern im Internet eigenständiger handeln können – mit Identität, Kommunikation, Zahlungen, Verhandlung und nachvollziehbaren Regeln.

Das ist ein wichtiger Schritt, weil viele heutige Agenten noch in isolierten Demos stecken. Sie können eine Aufgabe innerhalb eines Tools lösen, aber sobald mehrere Systeme, Berechtigungen, Zahlungsprozesse oder andere Agenten beteiligt sind, wird es brüchig. Genau dort setzen Protokolle an: Sie definieren, wie Agenten sich erkennen, beauftragen, bezahlen oder kontrollieren lassen.

## Aus Agenten werden Netzwerkteilnehmer

Wenn Agenten künftig Reisen buchen, APIs einkaufen, Angebote vergleichen oder Geschäftsprozesse koordinieren sollen, brauchen sie mehr als Prompting. Sie brauchen Identität, Rechte, Haftungsgrenzen, Transaktionslogik und eine Sprache, mit der verschiedene Systeme einander verstehen.

Für Unternehmen ist das eine Infrastrukturfrage. Ohne Standards entstehen proprietäre Inseln: Jeder Anbieter baut seinen eigenen Agenten-Kanal, sein eigenes Berechtigungsmodell und seine eigene Abrechnung. Mit offenen Protokollen kann dagegen ein Ökosystem entstehen, in dem Agenten ähnlich selbstverständlich miteinander interagieren wie heute Webdienste über HTTP und APIs.

## Worauf man achten sollte

- Quelle zum Weiterlesen: [t3n](https://t3n.de/news/bezahlen-verhandeln-kommunizieren-5-neue-internet-protokolle-die-ki-agenten-vernetzen-sollen-1743753/).
- Thema: Agenten-Protokolle, Zahlungen, Verhandlung, Kommunikation, Automatisierung.
- Chance: Agenten können echte Prozesse über Systemgrenzen hinweg übernehmen.
- Risiko: Ohne Identität, Audit-Logs und Berechtigungen wird automatisiertes Handeln schwer kontrollierbar.

## Ercans Einordnung

> Der Agentenmarkt entscheidet sich nicht nur im Modell, sondern in Standards, Identität und Rechten.

Für Builder heißt das: Nicht nur auf das nächste Modell warten. Wer heute Agenten baut, sollte Schnittstellen, Protokolle, Logging und Rechteverwaltung von Anfang an mitdenken. Die spannenden Agentenprodukte werden nicht nur klug antworten, sondern sicher und nachvollziehbar handeln.`,
    },
    tr: {
      title: "Beş yeni protokol YZ ajanlarını internette birbirine bağlamayı hedefliyor",
      teaser: "t3n, ajanların ödeme yapması, pazarlık etmesi ve iletişim kurması için geliştirilen protokolleri ele alıyor; otomasyonun bir sonraki aşaması için önemli.",
      body: `t3n, YZ ajanlarını internet üzerindeki servislerle ve birbirleriyle daha iyi bağlamayı hedefleyen beş yeni protokolü anlatıyor. Gelişmenin özü şu: Ajanlar yalnızca metin yazan veya araç çağıran sistemler olmaktan çıkıp internette daha bağımsız hareket edebilen aktörlere dönüşebilir; kimlik, iletişim, ödeme, pazarlık ve izlenebilir kurallarla.

Bu önemli çünkü bugünkü birçok ajan hâlâ izole demo seviyesinde. Tek bir araç içinde görev çözebilirler; ancak birden fazla sistem, izin, ödeme süreci veya başka ajanlar devreye girdiğinde yapı kırılganlaşıyor. Protokoller tam bu noktaya odaklanıyor: ajanlar birbirini nasıl tanıyacak, nasıl görev verecek, nasıl ödeme yapacak ve nasıl denetlenecek?

## Ajanlar ağ katılımcısına dönüşüyor

Ajanların ileride seyahat rezervasyonu yapması, API satın alması, teklif karşılaştırması veya iş süreçlerini koordine etmesi bekleniyorsa, yalnızca iyi prompt yeterli olmaz. Kimlik, yetki, sorumluluk sınırı, işlem mantığı ve farklı sistemlerin anlayacağı ortak bir dil gerekir.

Şirketler için bu bir altyapı meselesidir. Standart olmazsa herkes kendi kapalı ajan kanalını, kendi izin modelini ve kendi ödeme mantığını kurar. Açık protokollerle ise ajanların bugün web servislerinin HTTP ve API'lerle konuşması kadar doğal biçimde etkileştiği bir ekosistem oluşabilir.

## Nelere dikkat edilmeli

- Kaynak ve devamı: [t3n](https://t3n.de/news/bezahlen-verhandeln-kommunizieren-5-neue-internet-protokolle-die-ki-agenten-vernetzen-sollen-1743753/).
- Konu: ajan protokolleri, ödeme, pazarlık, iletişim, otomasyon.
- Fırsat: ajanlar sistem sınırlarını aşan gerçek süreçleri üstlenebilir.
- Risk: kimlik, denetim kayıtları ve izinler olmadan otomatik işlem yapmak zor kontrol edilir.

## Ercan'ın yorumu

> Ajan pazarını yalnızca model kalitesi değil, standartlar, kimlik ve yetkiler belirleyecek.

Builder'lar için mesaj net: Sadece bir sonraki modeli beklemeyin. Bugün ajan geliştiren ekipler arayüzleri, protokolleri, loglamayı ve yetki yönetimini en baştan düşünmeli. En güçlü ajan ürünleri yalnızca akıllı cevap vermeyecek; güvenli ve izlenebilir biçimde işlem yapacak.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "donanimhaber-bm-ai-su-tuketimi-2030-2026-06-05",
    cat: "forschung",
    lang: "tr",
    author: "Ercan Yıldız",
    date: "2026-06-05",
    image: "images/2026-06-05-ai-water-consumption.jpg",
    views: 6390,
    de: {
      title: "UN-Warnung: KI könnte bis 2030 Wasser wie 1,3 Milliarden Menschen verbrauchen",
      teaser: "DonanımHaber berichtet über eine UN-Warnung zum Wasserbedarf von KI-Rechenzentren. Nachhaltigkeit wird damit zur Infrastrukturfrage.",
      body: `DonanımHaber greift eine Warnung der Vereinten Nationen auf: Der Wasserbedarf von KI-Infrastruktur könnte bis 2030 eine Größenordnung erreichen, die mit dem Verbrauch von 1,3 Milliarden Menschen verglichen wird. Das klingt drastisch, passt aber zu einer Debatte, die bisher oft zu eng geführt wird.

Bei KI-Infrastruktur sprechen viele zuerst über Strom, GPUs und Rechenleistung. Wasser bleibt im Hintergrund, obwohl Rechenzentren Kühlung brauchen und Standortentscheidungen zunehmend von Energie, Klima und lokaler Verfügbarkeit abhängen. Je größer die Modell- und Cloud-Nachfrage wird, desto stärker werden auch ökologische und kommunale Fragen sichtbar.

## KI braucht mehr als Chips und Strom

Der Ausbau von Rechenzentren ist nicht nur ein Technikprojekt. Er betrifft Stromnetze, Grundstücke, Kühlkonzepte, Wasserrechte, lokale Akzeptanz und politische Regulierung. In wasserarmen Regionen kann ein neues Rechenzentrum schnell zum Konfliktthema werden, besonders wenn Bevölkerung, Landwirtschaft und Industrie bereits um Ressourcen konkurrieren.

Für Unternehmen heißt das: Nachhaltigkeit lässt sich nicht erst am Ende in einen ESG-Bericht schreiben. Modellwahl, Inferenzstrategie, Caching, Auslastung und Standortwahl bestimmen mit, wie ressourcenintensiv KI-Anwendungen wirklich sind.

## Was praktisch daraus folgt

- Quelle zum Weiterlesen: [DonanımHaber](https://www.donanimhaber.com/bm-2030-da-yapay-zeka-1-3-milyar-insan-kadar-su-tuketecek--206428).
- Thema: KI-Rechenzentren, Wasserverbrauch, Kühlung, Nachhaltigkeit.
- Business-Folge: Infrastrukturkosten werden Teil der KI-Bilanz.
- Technische Hebel: kleinere Modelle, effizientere Inferenz, Caching, regionale Architektur und bessere Auslastung.

## Ercans Einordnung

> Wer KI skaliert, muss Wasser, Strom und Standortwahl gemeinsam bilanzieren.

Die Debatte sollte nicht bei der Frage stehen bleiben, welches Modell am stärksten ist. Entscheidend wird auch, welches Modell für welchen Zweck effizient genug ist. Nicht jede Aufgabe braucht das größte Frontier-Modell; oft ist ein kleineres, lokaleres oder besser gecachtes System ökologisch und wirtschaftlich sinnvoller.`,
    },
    tr: {
      title: "BM uyarısı: YZ 2030'da 1,3 milyar insan kadar su tüketebilir",
      teaser: "DonanımHaber, YZ veri merkezlerinin su ihtiyacına dair BM uyarısını aktarıyor. Sürdürülebilirlik artık doğrudan altyapı meselesi.",
      body: `DonanımHaber, Birleşmiş Milletler'in yapay zekâ altyapısına ilişkin su tüketimi uyarısını aktarıyor: 2030'a kadar YZ sistemlerinin su ihtiyacı 1,3 milyar insanın tüketimiyle karşılaştırılabilecek bir seviyeye ulaşabilir. Bu sert bir ifade gibi duruyor; ama YZ altyapısı tartışmasının bugüne kadar fazla dar ele alındığını da gösteriyor.

YZ altyapısı konuşulunca çoğu kişi önce elektrik, GPU ve hesaplama gücünü düşünüyor. Su ise arka planda kalıyor. Oysa veri merkezleri soğutmaya ihtiyaç duyuyor; lokasyon kararları enerji, iklim ve yerel kaynak erişimiyle doğrudan bağlantılı. Model ve bulut talebi büyüdükçe çevresel ve yerel yönetim boyutu daha görünür hale geliyor.

## YZ yalnızca çip ve elektrik meselesi değil

Veri merkezi yatırımı sadece teknik proje değildir. Elektrik şebekesi, arazi, soğutma yöntemi, su hakkı, yerel kabul ve regülasyonla bağlantılıdır. Su stresi yaşayan bölgelerde yeni bir veri merkezi hızla tartışma konusu olabilir; özellikle halk, tarım ve sanayi zaten aynı kaynaklar için rekabet ediyorsa.

Şirketler için sonuç açık: sürdürülebilirlik raporun son sayfasına bırakılacak bir konu değil. Model seçimi, çıkarım stratejisi, önbellekleme, kapasite kullanımı ve lokasyon seçimi YZ uygulamasının gerçek kaynak maliyetini belirler.

## Pratik sonuçlar

- Kaynak ve devamı: [DonanımHaber](https://www.donanimhaber.com/bm-2030-da-yapay-zeka-1-3-milyar-insan-kadar-su-tuketecek--206428).
- Konu: YZ veri merkezleri, su tüketimi, soğutma, sürdürülebilirlik.
- İş etkisi: altyapı maliyetleri YZ bilançosunun parçası olur.
- Teknik kaldıraçlar: daha küçük modeller, verimli çıkarım, önbellekleme, bölgesel mimari ve daha iyi kapasite kullanımı.

## Ercan'ın yorumu

> YZ'yi ölçekleyenler suyu, elektriği ve lokasyon seçimini birlikte hesaplamak zorunda.

Tartışma yalnızca hangi modelin en güçlü olduğu sorusunda kalmamalı. Asıl mesele hangi modelin hangi iş için yeterince verimli olduğudur. Her görev en büyük frontier modeli gerektirmez; çoğu zaman daha küçük, yerel veya iyi önbelleklenmiş bir sistem hem ekonomik hem çevresel olarak daha doğru seçimdir.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "donanimhaber-tsmc-ai-chip-talebi-2026-06-05",
    cat: "business",
    lang: "tr",
    author: "Ercan Yıldız",
    date: "2026-06-05",
    image: "images/2026-06-05-tsmc-chip-demand.jpg",
    views: 6260,
    de: {
      title: "TSMC: KI-Chipnachfrage bleibt auf Jahre schwer zu bedienen",
      teaser: "DonanımHaber meldet Aussagen von TSMC: Die Nachfrage nach KI-Chips dürfte länger hoch bleiben als die Produktionskapazität.",
      body: `DonanımHaber berichtet über Aussagen von TSMC zur anhaltend hohen Nachfrage nach KI-Chips. Die Botschaft ist deutlich: Die Branche erwartet keine schnelle Entspannung. Während Cloudanbieter, Modellfirmen und Hardwarehersteller weiter skalieren, dauert der Ausbau von Fertigungskapazitäten Jahre.

Das betrifft nicht nur einen einzelnen Chiptyp. KI-Beschleuniger hängen an einer komplexen Lieferkette: moderne Fertigungsprozesse, Packaging, HBM-Speicher, Substrate, Energie, Maschinen und Fachkräfte. Wenn nur ein Teil davon knapp bleibt, kann das gesamte Wachstum langsamer oder teurer werden.

## Der Engpass sitzt in der Lieferkette

KI wird oft als Softwarewelle beschrieben. In Wahrheit ist sie auch eine Hardware- und Industriefrage. Modelle brauchen Training, Inferenz, Speicherbandbreite und Rechenzentren. Wer ausreichend GPUs oder spezialisierte Beschleuniger bekommt, kann Produkte schneller bauen, Dienste günstiger anbieten und Marktanteile sichern.

Für Unternehmen heißt das: KI-Roadmaps dürfen nicht nur Modellfeatures und Prompt-Strategien planen. Sie müssen auch realistische Annahmen zu Cloud-Kosten, Kapazitätsverfügbarkeit und Anbieterabhängigkeit enthalten. Wenn Rechenleistung knapp bleibt, werden Effizienz und Architektur wichtiger.

## Was daraus folgt

- Quelle zum Weiterlesen: [DonanımHaber](https://www.donanimhaber.com/tsmc-yapay-zekanin-cip-talebi-yillarca-karsilanamayacak--206411).
- Thema: TSMC, KI-Chips, Halbleiter, Packaging, Cloud-Kapazitäten.
- Signal: Rechenleistung bleibt knapp, teuer und strategisch.
- Gegenstrategie: kleinere Modelle, lokale Inferenz, Multi-Cloud, bessere Auslastung und sparsamer Modellmix.

## Ercans Einordnung

> KI-Roadmaps sollten nicht nur Modellfeatures planen, sondern Chip- und Cloud-Verfügbarkeit.

Die Gewinner werden nicht automatisch diejenigen sein, die immer das größte Modell einsetzen. Gewinner werden auch Teams sein, die Workloads sauber klassifizieren: Was braucht Frontier-Leistung, was läuft mit kleineren Modellen, was kann gecacht werden und was gehört näher an den Nutzer?`,
    },
    tr: {
      title: "TSMC: YZ çip talebini karşılamak yıllarca zor kalacak",
      teaser: "DonanımHaber'in aktardığı TSMC açıklamaları, yapay zekâ çiplerinde talebin üretim kapasitesinden uzun süre daha hızlı büyüyebileceğini gösteriyor.",
      body: `DonanımHaber, TSMC'nin yapay zekâ çiplerine yönelik yüksek talep hakkındaki değerlendirmelerini aktarıyor. Mesaj net: Sektör kısa vadede rahatlama beklemiyor. Bulut sağlayıcıları, model şirketleri ve donanım üreticileri ölçek büyütürken yeni üretim kapasitesi kurmak yıllar alıyor.

Bu yalnızca tek bir çip türüyle ilgili değil. YZ hızlandırıcıları karmaşık bir tedarik zincirine bağlı: ileri üretim süreçleri, paketleme, HBM bellek, substratlar, enerji, üretim makineleri ve uzman iş gücü. Zincirin tek bir halkası bile dar kalırsa tüm büyüme daha yavaş veya daha pahalı hale gelebilir.

## Darboğaz tedarik zincirinde

YZ çoğu zaman yazılım dalgası gibi anlatılıyor. Gerçekte aynı zamanda donanım ve sanayi meselesi. Modeller eğitim, çıkarım, bellek bant genişliği ve veri merkezi kapasitesi istiyor. Yeterli GPU veya özel hızlandırıcıya erişen şirketler ürünleri daha hızlı geliştirir, hizmetleri daha ucuza sunar ve pazar payı kazanır.

Şirketler için anlamı şu: YZ yol haritaları yalnızca model özellikleri ve prompt stratejileriyle planlanamaz. Bulut maliyeti, kapasite erişimi ve sağlayıcı bağımlılığı için gerçekçi varsayımlar gerekir. Hesaplama gücü kıt kalırsa verimlilik ve mimari daha değerli olur.

## Pratik sonuçlar

- Kaynak ve devamı: [DonanımHaber](https://www.donanimhaber.com/tsmc-yapay-zekanin-cip-talebi-yillarca-karsilanamayacak--206411).
- Konu: TSMC, YZ çipleri, yarı iletkenler, paketleme, bulut kapasitesi.
- Sinyal: hesaplama gücü kıt, pahalı ve stratejik kalacak.
- Karşı strateji: daha küçük modeller, yerel çıkarım, çoklu bulut, daha iyi kapasite kullanımı ve dengeli model karması.

## Ercan'ın yorumu

> YZ yol haritaları yalnızca model özelliklerini değil, çip ve bulut erişimini de planlamalı.

Kazananlar her zaman en büyük modeli kullananlar olmayacak. İş yüklerini doğru sınıflandıran ekipler öne çıkacak: Hangisi frontier model ister, hangisi küçük modelle çalışır, ne önbelleklenebilir ve hangi görev kullanıcıya daha yakın çalışmalıdır?`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "shiftdelete-google-turkiye-kamu-ai-hamlesi-2026-06-05",
    cat: "business",
    lang: "tr",
    author: "Ercan Yıldız",
    date: "2026-06-05",
    image: "images/2026-06-05-google-turkiye-public-ai.jpg",
    views: 6120,
    de: {
      title: "Google Türkiye startet 2-Millionen-Dollar-KI-Initiative für den öffentlichen Sektor",
      teaser: "ShiftDelete berichtet über eine KI-Initiative von Google Türkiye für öffentliche Institutionen – relevant für digitale Verwaltung und lokale KI-Kompetenz.",
      body: `ShiftDelete berichtet über eine neue KI-Initiative von Google Türkiye für den öffentlichen Sektor. Das Programm soll mit einem Volumen von 2 Millionen Dollar Projekte, Kompetenzen und Anwendungen rund um künstliche Intelligenz in öffentlichen Institutionen unterstützen. Für die Türkei ist das mehr als eine normale Tech-Ankündigung: Es geht um digitale Verwaltung, lokale Fähigkeiten und vertrauenswürdige Nutzung von KI im Staat.

Öffentliche Institutionen sind ein besonders anspruchsvolles KI-Feld. Dort geht es nicht nur um Produktivität, sondern um Bürgerdaten, Transparenz, Gleichbehandlung, Beschaffung, Schulung und langfristige Wartbarkeit. Ein gutes KI-Projekt im öffentlichen Bereich muss erklären können, welche Daten genutzt werden, wer die Ergebnisse kontrolliert und wie Fehler korrigiert werden.

## Warum der öffentliche Sektor besonders ist

In Unternehmen kann ein KI-Pilot schnell gestartet und wieder verworfen werden. Im Staat ist das schwieriger. Anwendungen betreffen viele Menschen, müssen rechtlich sauber sein und dürfen keine digitalen Abhängigkeiten schaffen, die später teuer oder politisch problematisch werden. Deshalb ist Kompetenzaufbau mindestens so wichtig wie einzelne Tools.

Wenn das Programm lokale Partner, Ausbildung und nachvollziehbare Pilotprojekte stärkt, kann es echten Wert schaffen. Wenn es nur als Marketingfenster für Cloud- und KI-Produkte endet, bleibt der Effekt begrenzt.

## Worauf man achten sollte

- Quelle zum Weiterlesen: [ShiftDelete.Net](https://shiftdelete.net/google-turkiyeden-kamu-icin-2-milyon-dolarlik-yapay-zeka-hamlesi).
- Zusätzlicher Kontext: [Google Blog Türkiye](https://blog.google/intl/tr-tr/sirket-haberleri/yapay-zeka-ile-turkiyenin-buyumesini-guclendirmek/).
- Thema: Google Türkiye, öffentlicher Sektor, KI-Kompetenz, digitale Verwaltung.
- Türkei-Bezug: lokale Fähigkeiten, öffentliche Dienste und verantwortliche Einführung von KI.

## Ercans Einordnung

> Gute öffentliche KI-Projekte beginnen nicht mit dem Tool, sondern mit Daten, Regeln und messbarem Nutzen.

Für Bürger zählt am Ende nicht, ob ein Projekt KI im Namen trägt. Entscheidend ist, ob Dienste schneller, verständlicher und fairer werden. Genau daran sollte man solche Programme messen: konkrete Verwaltungsprozesse, offene Evaluation, Datenschutz und Wissenstransfer ins Land.`,
    },
    tr: {
      title: "Google Türkiye'den kamu için 2 milyon dolarlık YZ hamlesi",
      teaser: "ShiftDelete, Google Türkiye'nin kamu kurumlarına yönelik yeni YZ girişimini aktarıyor; dijital kamu hizmetleri ve yerel YZ yetkinliği için önemli.",
      body: `ShiftDelete, Google Türkiye'nin kamu sektörüne yönelik yeni yapay zekâ girişimini aktarıyor. 2 milyon dolarlık programın kamu kurumlarında YZ projelerini, yetkinliği ve uygulamaları desteklemesi hedefleniyor. Türkiye açısından bu sıradan bir teknoloji duyurusu değil; dijital kamu hizmetleri, yerel kapasite ve devlette güvenilir YZ kullanımıyla ilgili.

Kamu kurumları YZ için en hassas alanlardan biridir. Burada mesele yalnızca verimlilik değildir; vatandaş verisi, şeffaflık, eşit muamele, satın alma süreçleri, eğitim ve uzun vadeli bakım da devreye girer. İyi bir kamu YZ projesi hangi veriyi kullandığını, sonuçları kimin kontrol ettiğini ve hataların nasıl düzeltileceğini açıklayabilmelidir.

## Kamu sektörü neden farklı

Şirketlerde bir YZ pilotu hızlı başlatılıp hızlı kapatılabilir. Devlette bu daha zordur. Uygulamalar çok sayıda insanı etkiler, hukuka uygun olmalı ve ileride pahalı ya da politik açıdan sorunlu dijital bağımlılıklar üretmemelidir. Bu yüzden yetkinlik geliştirme, tekil araçlardan en az onlar kadar önemlidir.

Program yerel paydaşları, eğitimi ve ölçülebilir pilot projeleri güçlendirirse gerçek değer yaratabilir. Sadece bulut ve YZ ürünleri için pazarlama vitrini olarak kalırsa etkisi sınırlı olur.

## Nelere bakılmalı

- Kaynak ve devamı: [ShiftDelete.Net](https://shiftdelete.net/google-turkiyeden-kamu-icin-2-milyon-dolarlik-yapay-zeka-hamlesi).
- Ek bağlam: [Google Blog Türkiye](https://blog.google/intl/tr-tr/sirket-haberleri/yapay-zeka-ile-turkiyenin-buyumesini-guclendirmek/).
- Konu: Google Türkiye, kamu sektörü, YZ yetkinliği, dijital kamu hizmetleri.
- Türkiye bağlantısı: yerel kapasite, kamu hizmetleri ve sorumlu YZ kullanımı.

## Ercan'ın yorumu

> İyi kamu YZ projeleri araçla değil, veriyle, kurallarla ve ölçülebilir faydayla başlar.

Vatandaş açısından önemli olan projenin adında YZ geçmesi değildir. Hizmetlerin daha hızlı, daha anlaşılır ve daha adil hale gelip gelmediğidir. Bu tür programlar da buna göre ölçülmeli: somut kamu süreçleri, açık değerlendirme, veri koruma ve bilginin ülkede kalması.`,
    },
  },


  /* ---------------------------------------------------------- */
  {
    id: "heise-ki-lebenslaeufe-bias-chatbots-2026-06-04",
    cat: "sicherheit",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-04",
    image: "images/2026-06-04-ki-recruiting-cv.jpg",
    featured: true,
    views: 6420,
    de: {
      title: "KI-Chatbots bewerten Lebensläufe nicht neutral",
      teaser: "heise berichtet über eine Untersuchung zu KI-Bewerbungsbewertungen: Claude bevorzugte sich selbst stärker als GPT – ein Warnsignal für HR-Automation.",
      body: `heise greift eine Untersuchung zur Bewertung von Lebensläufen durch KI-Chatbots auf. Der Kern: Systeme wie Claude und GPT wirken bei HR-Aufgaben nicht automatisch neutral. In der Untersuchung bewertete Claude Lebensläufe, die auf das eigene Modell hin optimiert waren, besonders positiv.

## Warum das wichtig ist

Bewerbungsprozesse sind ein klassischer Automatisierungsfall für LLMs: sortieren, vergleichen, zusammenfassen. Genau dort kann aber Modell-Bias direkte Folgen für Menschen haben.

- Quelle: heise online, 04.06.2026.
- Thema: KI in Recruiting und Lebenslaufbewertung.
- Risiko: scheinbar objektive Scores können Modellvorlieben spiegeln.

## Ercans Einordnung

> KI im Recruiting braucht Audits, nicht nur gute Prompts.

Unternehmen sollten Chatbots hier nicht als neutrale Richter einsetzen. Sinnvoller ist eine assistierende Rolle mit klaren Kriterien, menschlicher Kontrolle und Tests gegen Bias in Sprache, Format, Herkunft und Modellpräferenz.`,
    },
    tr: {
      title: "YZ sohbet botları CV'leri tarafsız değerlendirmiyor",
      teaser: "heise'nin aktardığı araştırma, YZ ile işe alım değerlendirmelerinde riskleri gösteriyor: Claude kendi tarzına uygun CV'leri GPT'ye göre daha avantajlı değerlendirdi.",
      body: `heise, CV'lerin yapay zekâ sohbet botlarıyla değerlendirilmesine dair bir araştırmayı aktarıyor. Ana mesaj net: Claude ve GPT gibi sistemler İK süreçlerinde otomatik olarak tarafsız davranmıyor. Araştırmada Claude, kendi modeline göre optimize edilmiş CV'leri daha olumlu puanladı.

## Neden önemli

İşe alım süreçleri LLM otomasyonu için cazip: sıralama, karşılaştırma, özetleme. Fakat tam bu noktada model önyargısı insanların kariyer şanslarını doğrudan etkileyebilir.

- Kaynak: heise online, 04.06.2026.
- Konu: işe alımda YZ ve CV değerlendirme.
- Risk: objektif görünen puanlar model tercihlerini yansıtabilir.

## Ercan'ın yorumu

> İşe alımda YZ için yalnızca iyi prompt değil, düzenli denetim gerekir.

Şirketler sohbet botlarını tarafsız hakem gibi kullanmamalı. Daha doğru yaklaşım; net kriterler, insan kontrolü ve dil, format, köken ve model tercihi gibi önyargılara karşı test edilen yardımcı bir sistem kurmak.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "t3n-ki-wurm-dynamische-angriffe-2026-06-04",
    cat: "sicherheit",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-04",
    image: "images/2026-06-04-ki-wurm-malware-laptop.jpg",
    views: 6190,
    de: {
      title: "Forschende zeigen KI-Wurm mit wechselnder Angriffsstrategie",
      teaser: "t3n berichtet über einen KI-Wurm, der für jedes Ziel eine neue Strategie entwickelt – relevant für Agenten-Sicherheit und automatisierte Abwehr.",
      body: `t3n meldet eine neue Forschungsarbeit aus der IT-Sicherheit: Ein KI-Wurm kann seine Angriffsstrategie dynamisch anpassen und für verschiedene Ziele jeweils andere Wege ausprobieren. Das macht klassische, starre Erkennungsmuster weniger zuverlässig.

## Agenten brauchen Sicherheitsgrenzen

Der Fall ist mehr als Malware-Forschung. Er zeigt, was passiert, wenn autonome Systeme nicht nur Text erzeugen, sondern Ziele planen, Umgebungen beobachten und ihre Taktik ändern.

- Quelle: t3n, 04.06.2026.
- Thema: KI-gestützte Cyberangriffe.
- Signal: Sicherheitsmodelle müssen adaptives Verhalten erkennen.

## Ercans Einordnung

> Je agentischer KI wird, desto wichtiger werden Laufzeitkontrollen.

Für Unternehmen heißt das: Prompt-Filter reichen nicht. Nötig sind Sandboxen, Rechtebegrenzung, Monitoring, rote Teams und klare Stoppsignale für Tools, die eigenständig handeln können.`,
    },
    tr: {
      title: "Araştırmacılar hedefe göre strateji değiştiren bir YZ solucanı gösterdi",
      teaser: "t3n'in haberine göre yeni bir YZ solucanı her hedef için farklı saldırı stratejisi geliştirebiliyor; bu, ajan güvenliği için önemli bir uyarı.",
      body: `t3n, siber güvenlik alanındaki yeni bir araştırmayı aktarıyor: Bir YZ solucanı saldırı stratejisini dinamik biçimde uyarlayabiliyor ve farklı hedefler için farklı yollar deneyebiliyor. Bu da klasik, sabit imza tabanlı savunmaları daha az güvenilir hale getiriyor.

## Ajanlar için güvenlik sınırları şart

Bu yalnızca kötü amaçlı yazılım araştırması değil. Otonom sistemler sadece metin üretmeyip hedef planladığında, ortamı gözlemlediğinde ve taktik değiştirdiğinde neler olabileceğini gösteriyor.

- Kaynak: t3n, 04.06.2026.
- Konu: YZ destekli siber saldırılar.
- Sinyal: güvenlik modelleri uyarlanabilir davranışı tanımalı.

## Ercan'ın yorumu

> YZ ne kadar ajanlaşırsa, çalışma zamanı kontrolleri o kadar kritik olur.

Şirketler için yalnızca prompt filtresi yetmez. Sandbox, yetki sınırlaması, izleme, red-team testleri ve kendi başına araç kullanabilen sistemler için net durdurma mekanizmaları gerekir.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "techinside-alphabet-ki-yatirimlari-80-milyar-2026-06-04",
    cat: "business",
    lang: "tr",
    author: "Ercan Yıldız",
    date: "2026-06-04",
    image: "images/2026-06-04-alphabet-data-center.jpg",
    views: 6040,
    de: {
      title: "Alphabet sucht 80 Milliarden Dollar für KI-Ziele",
      teaser: "TechInside berichtet: Alphabet will für seine KI- und Infrastrukturziele zusätzliches Kapital in Milliardenhöhe mobilisieren.",
      body: `TechInside meldet, dass Alphabet für seine KI-Ziele 80 Milliarden Dollar Kapital aufnehmen will. Der Schritt passt zum aktuellen Muster im Markt: Modelle, Rechenzentren, Energie und spezialisierte Infrastruktur werden zur eigentlichen Wachstumsfrage.

## KI ist jetzt Kapital- und Infrastrukturgeschäft

Wer große Modelle, Suche, Workspace, Cloud und Agentenprodukte gleichzeitig betreibt, braucht nicht nur gute Forschung, sondern enorme Rechenkapazität und langfristige Finanzierung.

- Quelle: TechInside, 04.06.2026.
- Thema: Alphabet, KI-Investitionen, Infrastruktur.
- Kontext: Big Tech skaliert den KI-Stack weiter aggressiv.

## Ercans Einordnung

> Der KI-Wettlauf wird zunehmend über Strom, Chips und Kapitalkosten entschieden.

Für Nutzer bedeutet das bessere Produkte, aber auch stärkere Plattformbindung. Für Europa und die Türkei bleibt die Frage, wie eigene Rechen- und Dateninfrastruktur konkurrenzfähig aufgebaut werden kann.`,
    },
    tr: {
      title: "Alphabet YZ hedefleri için 80 milyar dolar arıyor",
      teaser: "TechInside'a göre Alphabet, YZ ve altyapı hedefleri için milyarlarca dolarlık yeni sermaye toplamaya hazırlanıyor.",
      body: `TechInside, Alphabet'in yapay zekâ hedefleri için 80 milyar dolar sermaye bulmayı planladığını aktarıyor. Bu adım piyasadaki genel tabloyla uyumlu: Modeller, veri merkezleri, enerji ve özel altyapı artık büyümenin ana belirleyicisi haline geliyor.

## YZ artık sermaye ve altyapı işi

Büyük modelleri, aramayı, Workspace'i, bulutu ve ajan ürünlerini aynı anda çalıştıran şirketler yalnızca iyi araştırmaya değil, devasa hesaplama kapasitesine ve uzun vadeli finansmana ihtiyaç duyuyor.

- Kaynak: TechInside, 04.06.2026.
- Konu: Alphabet, YZ yatırımları, altyapı.
- Bağlam: Big Tech YZ yığınını agresif biçimde büyütüyor.

## Ercan'ın yorumu

> YZ yarışı giderek elektrik, çip ve sermaye maliyeti üzerinden kazanılıyor.

Kullanıcılar için bu daha iyi ürünler anlamına gelebilir, ama platform bağımlılığı da artar. Avrupa ve Türkiye için kritik soru, rekabetçi yerel hesaplama ve veri altyapısının nasıl kurulacağı.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "webrazzi-suno-400-milyon-yatirim-2026-06-04",
    cat: "business",
    lang: "tr",
    author: "Ercan Yıldız",
    date: "2026-06-04",
    image: "images/2026-06-04-suno-music-studio.jpg",
    views: 5920,
    de: {
      title: "Suno erhält 400 Millionen Dollar bei 5,4 Milliarden Bewertung",
      teaser: "Webrazzi berichtet über eine große Finanzierungsrunde für Suno. Generative Musik bleibt eines der heißesten Felder der Kreativ-KI.",
      body: `Aus dem türkischen Quellenpool: Webrazzi berichtet, dass Suno 400 Millionen Dollar Investment bei einer Bewertung von 5,4 Milliarden Dollar erhalten hat. Das zeigt, wie stark Investoren weiterhin an generative Audio- und Musikplattformen glauben.

## Kreativ-KI wird zur Plattformfrage

Suno steht für einen Markt, in dem Nutzer aus Text, Stimmung und Stil komplette Songs erzeugen. Für Creator ist das Chance und Konflikt zugleich: schneller produzieren, aber auch neue Urheberrechts- und Erlösfragen.

- Quelle: Webrazzi, 04.06.2026.
- Thema: Suno, generative Musik, Investment.
- Signal: Audio-KI bleibt ein großer Wachstumsbereich.

## Ercans Einordnung

> Musik-KI verlässt die Spielerei-Phase und wird Infrastruktur für Creator.

Entscheidend wird, wie Plattformen Training, Rechte, Kennzeichnung und Vergütung lösen. Wer hier sauber arbeitet, kann nicht nur Songs generieren, sondern neue Workflows für Werbung, Games, Podcasts und Social Content schaffen.`,
    },
    tr: {
      title: "Suno 5,4 milyar dolar değerlemeyle 400 milyon dolar yatırım aldı",
      teaser: "Webrazzi'nin haberine göre Suno büyük bir yatırım turunu kapattı. Üretken müzik, yaratıcı YZ'nin en sıcak alanlarından biri olmayı sürdürüyor.",
      body: `Türkçe kaynak havuzundan önemli bir iş dünyası haberi: Webrazzi, Suno'nun 5,4 milyar dolar değerleme üzerinden 400 milyon dolar yatırım aldığını yazıyor. Bu, yatırımcıların üretken ses ve müzik platformlarına hâlâ güçlü ilgi gösterdiğini ortaya koyuyor.

## Yaratıcı YZ platform savaşına dönüyor

Suno; metin, duygu ve stil girdilerinden komple şarkılar üretebilen bir pazarın simgesi. İçerik üreticileri için bu hem fırsat hem de çatışma: daha hızlı üretim, ama yeni telif ve gelir paylaşımı soruları.

- Kaynak: Webrazzi, 04.06.2026.
- Konu: Suno, üretken müzik, yatırım.
- Sinyal: ses odaklı YZ büyük bir büyüme alanı olmaya devam ediyor.

## Ercan'ın yorumu

> Müzik YZ'si oyuncak aşamasından çıkıp creator altyapısına dönüşüyor.

Belirleyici konu; eğitim verisi, haklar, etiketleme ve gelir paylaşımının nasıl çözüleceği. Bunu doğru yapan platformlar yalnızca şarkı üretmez, reklam, oyun, podcast ve sosyal içerik için yeni iş akışları kurar.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "shiftdelete-meta-isletmeler-icin-ai-ajanlari-2026-06-04",
    cat: "agentic",
    lang: "tr",
    author: "Ercan Yıldız",
    date: "2026-06-04",
    image: "images/2026-06-04-meta-enterprise-agents.jpg",
    views: 5750,
    de: {
      title: "Meta bringt KI-Agenten stärker in Unternehmensprozesse",
      teaser: "ShiftDelete.Net berichtet über Metas neue KI-Agentenlösung für Unternehmen – ein weiteres Zeichen, dass Agenten aus dem Chat in Workflows wandern.",
      body: `ShiftDelete.Net meldet neue KI-basierte Agentenlösungen von Meta für Unternehmen. Der Trend ist klar: KI wird nicht mehr nur als Chatfenster gedacht, sondern als Schicht, die Kundenkontakt, Marketing, Support und interne Prozesse verbinden soll.

## Agenten werden Produktivitätsinfrastruktur

Für Firmen ist das attraktiv, weil wiederkehrende Aufgaben automatisiert und Konversationen besser ausgewertet werden können. Gleichzeitig steigen Anforderungen an Datenschutz, Kontrolle und Eskalation an Menschen.

- Quelle: ShiftDelete.Net, 04.06.2026.
- Thema: Meta, Business-KI, Agenten.
- Nutzen: Automatisierung von Kunden- und Unternehmensprozessen.

## Ercans Einordnung

> Der nächste Schritt nach Chatbots sind Agenten mit klaren Zuständigkeiten.

Wichtig wird, dass Unternehmen nicht einfach alles automatisieren. Gute Agenten haben begrenzte Rechte, messbare Ziele, Protokolle und eine saubere Übergabe an Menschen, wenn Entscheidungen kritisch werden.`,
    },
    tr: {
      title: "Meta işletmeler için YZ tabanlı yeni ajan çözümünü öne çıkarıyor",
      teaser: "ShiftDelete.Net'in haberine göre Meta, işletmelere yönelik yeni YZ ajan çözümleri sunuyor; bu, ajanların sohbetten iş akışlarına geçtiğini gösteriyor.",
      body: `ShiftDelete.Net, Meta'nın işletmelere yönelik yeni yapay zekâ tabanlı ajan çözümlerini aktarıyor. Trend net: YZ artık yalnızca sohbet penceresi değil; müşteri iletişimi, pazarlama, destek ve iç süreçleri bağlayan bir katman olarak konumlanıyor.

## Ajanlar üretkenlik altyapısına dönüşüyor

Şirketler için bu cazip, çünkü tekrarlayan görevler otomatikleşebilir ve konuşmalar daha iyi analiz edilebilir. Ancak veri gizliliği, kontrol ve insana devretme gereksinimleri de artıyor.

- Kaynak: ShiftDelete.Net, 04.06.2026.
- Konu: Meta, işletme YZ'si, ajanlar.
- Fayda: müşteri ve iş süreçlerinde otomasyon.

## Ercan'ın yorumu

> Chatbotlardan sonraki adım, net sorumlulukları olan ajanlar.

Şirketler her şeyi otomatikleştirmemeli. İyi ajanların sınırlı yetkileri, ölçülebilir hedefleri, kayıtları ve karar kritik olduğunda insana temiz devri olmalı.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "t3n-eu-souveraene-chips-cloud-ki-2026-06-04",
    cat: "business",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-04",
    image: "images/2026-06-04-eu-cloud-data-center.jpg",
    views: 5610,
    de: {
      title: "EU plant Paket für souveräne Chips, Cloud und KI",
      teaser: "t3n berichtet über ein europäisches Gesetzespaket gegen Tech-Abhängigkeit – zentral für KI-Infrastruktur und digitale Souveränität.",
      body: `t3n berichtet über ein EU-Paket, das Abhängigkeiten bei Chips, Cloud und KI reduzieren soll. Für die KI-Ökonomie ist das ein Schlüsselthema: Ohne eigene Infrastruktur bleibt Europa Nutzer fremder Plattformen.

## Digitale Souveränität wird praktisch

Souveräne KI bedeutet nicht nur eigene Modelle. Sie braucht Rechenzentren, Datenräume, Chips, Beschaffung, Sicherheitsstandards und verlässliche Cloud-Angebote für Behörden und Unternehmen.

- Quelle: t3n, 04.06.2026.
- Thema: EU, Chips, Cloud, KI-Souveränität.
- Relevanz: Infrastruktur entscheidet über Handlungsfähigkeit.

## Ercans Einordnung

> Wer KI reguliert, muss auch KI-Infrastruktur bauen.

Für Unternehmen könnte das mehr europäische Optionen bringen. Entscheidend ist aber Geschwindigkeit: Wenn Programme zu langsam umgesetzt werden, bleibt der Markt bei US- und China-Plattformen hängen.`,
    },
    tr: {
      title: "AB egemen çip, bulut ve YZ için yeni paket hazırlıyor",
      teaser: "t3n'e göre Avrupa Birliği teknoloji bağımlılığını azaltacak bir paket üzerinde çalışıyor; konu YZ altyapısı ve dijital egemenlik için kritik.",
      body: `t3n, AB'nin çip, bulut ve YZ alanındaki bağımlılıkları azaltmayı hedefleyen bir paket hazırladığını yazıyor. YZ ekonomisi için bu kilit bir başlık: Kendi altyapısı olmayan Avrupa, başkalarının platformlarının kullanıcısı olarak kalır.

## Dijital egemenlik somutlaşıyor

Egemen YZ yalnızca yerli model demek değil. Veri merkezleri, veri alanları, çipler, kamu alımları, güvenlik standartları ve kurumlar için güvenilir bulut seçenekleri gerekir.

- Kaynak: t3n, 04.06.2026.
- Konu: AB, çip, bulut, YZ egemenliği.
- Önemi: altyapı, hareket kabiliyetini belirler.

## Ercan'ın yorumu

> YZ'yi düzenleyen taraf, YZ altyapısını da kurmak zorunda.

Şirketler için bu daha fazla Avrupa seçeneği anlamına gelebilir. Ancak hız belirleyici: Programlar yavaş kalırsa pazar ABD ve Çin platformlarına bağlı kalmaya devam eder.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "amazon-ki-produkte-shopping-2026-06-03",
    cat: "business",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-03",
    image: "images/2026-06-03-amazon-shopping-locker-hijo.jpg",
    featured: true,
    views: 6120,
    de: {
      title: "Amazon-App zeigt KI-Produkte, die es so gar nicht gibt",
      teaser: "heise berichtet über generative Shopping-Funktionen: Amazon zeigt KI-Collagen und Produktideen, die nicht zwingend eins zu eins bestellbar sind.",
      body: `Amazon testet in seiner Shopping-App eine neue Form der Produktsuche: Generative KI erzeugt Bilder, Collagen und Produktvorschläge, die Nutzer schneller zu passenden Artikeln führen sollen. Laut heise können dabei aber Darstellungen entstehen, die es als konkretes Produkt gar nicht gibt.

## Warum das wichtig ist

Für E-Commerce ist das ein Signal: Suche wird weniger zu einer Liste von Treffern und mehr zu einer visuellen Beratung. Gleichzeitig wächst das Risiko, dass Nutzer zwischen realem Angebot und KI-Vorschlag nicht sauber unterscheiden können.

- Quelle: heise online, 03.06.2026.
- Thema: generative KI im Onlinehandel.
- Risiko: schöne KI-Bilder können Erwartungen erzeugen, die der Katalog nicht erfüllt.

## Ercans Einordnung

> KI-Shopping kann hilfreich sein, braucht aber klare Kennzeichnung.

Wenn Plattformen Produkte erfinden, um echte Angebote zu vermitteln, wird Transparenz entscheidend. Gute KI-Beratung zeigt nicht nur Inspiration, sondern auch Verfügbarkeit, Preis und klare Grenzen.`,
    },
    tr: {
      title: "Amazon uygulaması gerçekte birebir bulunmayan YZ ürünleri gösteriyor",
      teaser: "heise'ye göre Amazon, alışveriş uygulamasında üretken YZ ile kolajlar ve ürün fikirleri gösteriyor; bunlar her zaman birebir satın alınabilir ürünler olmayabiliyor.",
      body: `Amazon, alışveriş uygulamasında yeni bir ürün arama biçimini test ediyor: Üretken yapay zekâ görseller, kolajlar ve ürün önerileri üreterek kullanıcıları benzer ürünlere yönlendirmeyi amaçlıyor. heise'nin haberine göre bu görseller her zaman katalogda birebir bulunan bir ürünü temsil etmeyebiliyor.

## Neden önemli

E-ticaret için bu güçlü bir sinyal: Arama artık yalnızca sonuç listesi değil, görsel bir danışmanlık deneyimine dönüşüyor. Aynı zamanda kullanıcıların gerçek ürün ile YZ önerisini karıştırma riski artıyor.

- Kaynak: heise online, 03.06.2026.
- Konu: online alışverişte üretken YZ.
- Risk: güzel YZ görselleri katalogda karşılığı olmayan beklentiler yaratabilir.

## Ercan'ın yorumu

> YZ destekli alışveriş faydalı olabilir, ama net etiketleme şart.

Platformlar gerçek ürünlere yönlendirmek için ürün fikri üretiyorsa şeffaflık belirleyici olur. İyi bir YZ danışmanı yalnızca ilham değil, stok, fiyat ve sınırları da açık gösterir.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "microsoft-mai-modelle-frontier-tuning-2026-06-03",
    cat: "modelle",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-03",
    image: "images/2026-06-03-microsoft-mai-modelle.jpg",
    views: 5880,
    de: {
      title: "Microsoft startet eigene MAI-Modelloffensive",
      teaser: "Microsoft baut mit MAI-Thinking-1 und weiteren Spezialmodellen seine eigene Modellfamilie aus – inklusive Frontier Tuning für Nutzerabläufe.",
      body: `Microsoft schärft seine KI-Strategie: heise berichtet über die MAI-Modellfamilie, darunter das Reasoning-Modell MAI-Thinking-1 sowie spezialisierte Modelle für Bild, Code, Transkription und Stimme. Besonders spannend ist Frontier Tuning: KI soll stärker aus realen Arbeitsabläufen lernen.

## Mehr Unabhängigkeit im Modellstack

Microsoft ist weiter eng mit OpenAI verbunden, baut aber sichtbarer eigene Modellkompetenz auf. Das ist strategisch wichtig, weil Modelle, Betriebssystem, Cloud und Produktivitätstools immer stärker zusammenwachsen.

- Quelle: heise online, 03.06.2026.
- Thema: Microsoft MAI-Modelle und Frontier Tuning.
- Kategorie: KI-Modelle und Plattformstrategie.

## Ercans Einordnung

> Wer die Oberfläche kontrolliert, will langfristig auch mehr vom Modell kontrollieren.

Für Nutzer bedeutet das: KI-Funktionen werden tiefer in Windows, Office und Entwicklerwerkzeuge wandern. Für Unternehmen wird wichtig, welche Daten für Tuning genutzt werden und wie viel Kontrolle die IT behält.`,
    },
    tr: {
      title: "Microsoft kendi MAI model atağını başlatıyor",
      teaser: "Microsoft, MAI-Thinking-1 ve farklı uzman modellerle kendi model ailesini büyütüyor; Frontier Tuning ile kullanıcı iş akışlarından öğrenme hedefleniyor.",
      body: `Microsoft yapay zekâ stratejisini keskinleştiriyor: heise, MAI model ailesini aktarıyor. Ailede MAI-Thinking-1 adlı akıl yürütme modeli ve görüntü, kod, transkripsiyon ve ses için uzman modeller yer alıyor. En dikkat çekici başlıklardan biri Frontier Tuning: YZ'nin gerçek iş akışlarından daha fazla öğrenmesi hedefleniyor.

## Model katmanında daha fazla bağımsızlık

Microsoft OpenAI ile yakın çalışmayı sürdürüyor, fakat kendi model yetkinliğini de daha görünür biçimde büyütüyor. Bu stratejik, çünkü modeller, işletim sistemi, bulut ve üretkenlik araçları giderek birleşiyor.

- Kaynak: heise online, 03.06.2026.
- Konu: Microsoft MAI modelleri ve Frontier Tuning.
- Kategori: YZ modelleri ve platform stratejisi.

## Ercan'ın yorumu

> Arayüzü kontrol eden şirket, uzun vadede model üzerinde de daha fazla kontrol ister.

Kullanıcılar için bu, YZ özelliklerinin Windows, Office ve geliştirici araçlarına daha derin girmesi demek. Şirketler için kritik soru ise hangi verilerin tuning için kullanılacağı ve BT ekiplerinin ne kadar kontrol sahibi olacağı.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "duckduckgo-ki-freie-suche-standard-2026-06-03",
    cat: "sicherheit",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-03",
    image: "images/2026-06-03-duckduckgo-search.jpg",
    views: 5460,
    de: {
      title: "DuckDuckGo macht KI-freie Suche zum Standard-Thema",
      teaser: "heise meldet starkes Interesse an DuckDuckGos KI-freier Suche. Der Trend zeigt: Nicht jeder Nutzer will automatisch KI-Zusammenfassungen in der Suche.",
      body: `Während viele Suchmaschinen KI-Antworten in den Vordergrund stellen, geht DuckDuckGo den Gegenweg sichtbar mit: Eine KI-freie Suche wird laut heise stark nachgefragt und kann als Standard genutzt werden. Das ist weniger Anti-KI als ein Wunsch nach Wahlfreiheit.

## Warum das relevant ist

KI-Zusammenfassungen sparen Zeit, können aber Quellen verdecken, Fehler verstärken und Webseiten Traffic entziehen. Eine abschaltbare KI-Ebene macht Suche transparenter und gibt Nutzern mehr Kontrolle.

- Quelle: heise online, 03.06.2026.
- Thema: Suche, Datenschutz, KI-Overviews.
- Signal: Nutzer wollen selbst entscheiden, wann KI dazwischensteht.

## Ercans Einordnung

> Gute KI ist optional stark, nicht zwangsweise überall.

Für den Alltag heißt das: KI-Suche bleibt nützlich, aber klassische Ergebnislisten behalten ihren Wert. Besonders bei Recherche, Gesundheit, Recht und Technik ist Quellenkontrolle wichtiger als eine schnelle Zusammenfassung.`,
    },
    tr: {
      title: "DuckDuckGo, YZ'siz aramayı standart seçenek haline getiriyor",
      teaser: "heise, DuckDuckGo'nun YZ'siz aramasına büyük ilgi olduğunu yazıyor. Trend net: Her kullanıcı arama sonuçlarında otomatik YZ özetleri istemiyor.",
      body: `Birçok arama motoru YZ cevaplarını öne çıkarırken DuckDuckGo ters yönde görünür bir adım atıyor: heise'ye göre YZ'siz arama yoğun ilgi görüyor ve standart olarak kullanılabiliyor. Bu YZ karşıtlığından çok seçim özgürlüğü talebi.

## Neden önemli

YZ özetleri zaman kazandırabilir, fakat kaynakları görünmez kılabilir, hataları büyütebilir ve web sitelerinin trafiğini azaltabilir. Kapatılabilir bir YZ katmanı aramayı daha şeffaf hale getirir.

- Kaynak: heise online, 03.06.2026.
- Konu: arama, gizlilik, YZ özetleri.
- Sinyal: Kullanıcılar YZ'nin ne zaman araya gireceğine kendileri karar vermek istiyor.

## Ercan'ın yorumu

> İyi YZ güçlü bir seçenek olmalı, her yere zorla yerleşmemeli.

Günlük kullanımda YZ arama faydalı kalır, ama klasik sonuç listelerinin değeri sürer. Özellikle araştırma, sağlık, hukuk ve teknik konularda kaynak kontrolü hızlı özetten daha önemlidir.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "abd-en-yeni-ai-modellerine-erken-erisim-2026-06-03",
    cat: "sicherheit",
    lang: "tr",
    author: "Ercan Yıldız",
    date: "2026-06-03",
    image: "images/2026-06-03-us-ai-model-access.jpg",
    views: 5310,
    de: {
      title: "USA wollen frühe Einblicke in neueste KI-Modelle bekommen",
      teaser: "DonanımHaber berichtet über eine neue US-Verordnung: Fortgeschrittene KI-Modelle können vor Veröffentlichung freiwillig mit Bundesbehörden geteilt werden.",
      body: `Aus dem türkischen Quellenpool kommt heute eine wichtige Regulierungs- und Sicherheitsmeldung: DonanımHaber berichtet, dass die USA mit einer neuen Verordnung frühe Einblicke in fortgeschrittene KI-Modelle ermöglichen wollen. Es geht nicht um eine klassische Lizenzpflicht, sondern um freiwilliges Teilen vor der öffentlichen Veröffentlichung.

## Sicherheitslogik statt harter Zulassung

Die Idee dahinter: Behörden sollen Risiken früher erkennen können, ohne sofort ein starres Genehmigungssystem einzuführen. Zusätzlich ist ein KI-fokussiertes Cybersecurity-Zentrum vorgesehen.

- Quelle: DonanımHaber, 03.06.2026.
- Thema: KI-Regulierung und Cybersicherheit.
- Bedeutung: Staaten suchen nach Kontrolle, ohne Innovation komplett zu bremsen.

## Ercans Einordnung

> Bei Frontier-Modellen wird Sicherheit zunehmend vor dem Launch verhandelt.

Für Anbieter kann das Vertrauen schaffen, aber auch politischen Druck erhöhen. Entscheidend wird, ob freiwillige Prüfungen echte Transparenz bringen oder nur symbolische Compliance bleiben.`,
    },
    tr: {
      title: "ABD, en yeni YZ modellerine erken erişim sağlamayı hedefliyor",
      teaser: "DonanımHaber'e göre yeni kararnameyle gelişmiş YZ modelleri kamuya açılmadan önce gönüllü olarak federal kurumlarla paylaşılabilecek.",
      body: `Türkçe kaynak havuzundan bugün önemli bir regülasyon ve güvenlik haberi geliyor: DonanımHaber, ABD'nin yeni bir kararnameyle gelişmiş YZ modellerine erken erişim sağlamayı hedeflediğini aktarıyor. Burada klasik bir lisans zorunluluğu değil, kamuya açılmadan önce gönüllü paylaşım modeli öne çıkıyor.

## Sert izin yerine güvenlik mantığı

Amaç, kurumların riskleri daha erken görebilmesi; bunu yaparken inovasyonu tamamen yavaşlatacak katı bir onay sistemi kurmamak. Ayrıca YZ odaklı bir siber güvenlik merkezi de gündemde.

- Kaynak: DonanımHaber, 03.06.2026.
- Konu: YZ regülasyonu ve siber güvenlik.
- Anlamı: Devletler inovasyonu durdurmadan kontrol arıyor.

## Ercan'ın yorumu

> Frontier modellerde güvenlik artık lansmandan önce konuşuluyor.

Sağlayıcılar için bu güven oluşturabilir, ama politik baskıyı da artırabilir. Kritik soru, gönüllü incelemelerin gerçek şeffaflık mı yoksa sembolik uyum mu sağlayacağı.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "anthropic-halka-arz-yolunda-2026-06-03",
    cat: "business",
    lang: "tr",
    author: "Ercan Yıldız",
    date: "2026-06-03",
    image: "images/2026-06-03-anthropic-ipo-exchange.jpg",
    views: 5140,
    de: {
      title: "Anthropic bereitet offenbar den Weg an die Börse vor",
      teaser: "TechInside meldet: Anthropic arbeitet vertraulich an einem IPO. Der Schritt wäre ein wichtiger Test für die Bewertung großer KI-Unternehmen.",
      body: `TechInside berichtet aus dem türkischen Quellenpool, dass Anthropic in den USA vertraulich einen Börsengang vorbereitet. Damit würde eines der wichtigsten KI-Unternehmen den nächsten Schritt Richtung Kapitalmarkt machen.

## Warum der IPO wichtig wäre

Anthropic steht mit Claude im direkten Wettbewerb mit OpenAI, Google und anderen Modellanbietern. Ein Börsengang würde zeigen, wie öffentliche Märkte Umsatz, Rechenkosten, Wachstum und Risiko großer KI-Firmen bewerten.

- Quelle: TechInside, 03.06.2026.
- Thema: KI-Wirtschaft und Kapitalmarkt.
- Signal: Der KI-Boom muss sich zunehmend auch in belastbaren Geschäftsmodellen zeigen.

## Ercans Einordnung

> Die nächste KI-Phase wird nicht nur technisch, sondern finanziell geprüft.

Für Investoren geht es um mehr als Hype: Kundenbindung, Infrastrukturkosten, Margen und Regulierung werden entscheidend. Für Nutzer kann ein IPO mehr Stabilität bringen, aber auch stärkeren Druck zur Monetarisierung.`,
    },
    tr: {
      title: "Anthropic halka arz yolunda ilerliyor",
      teaser: "TechInside'a göre Anthropic ABD'de gizli şekilde halka arz hazırlığı yapıyor. Bu adım büyük YZ şirketlerinin piyasa değerlemesi için önemli bir test olabilir.",
      body: `Türkçe kaynak havuzundan TechInside, Anthropic'in ABD'de gizli şekilde halka arz hazırlığı yaptığını aktarıyor. Böylece en önemli YZ şirketlerinden biri sermaye piyasasına doğru yeni bir adım atmış olacak.

## IPO neden önemli

Anthropic, Claude ile OpenAI, Google ve diğer model sağlayıcılarıyla doğrudan rekabet ediyor. Halka arz, kamu piyasalarının büyük YZ şirketlerinde gelir, hesaplama maliyeti, büyüme ve riski nasıl fiyatlayacağını gösterebilir.

- Kaynak: TechInside, 03.06.2026.
- Konu: YZ ekonomisi ve sermaye piyasası.
- Sinyal: YZ patlaması artık sağlam iş modelleriyle de sınanacak.

## Ercan'ın yorumu

> YZ'nin bir sonraki aşaması yalnızca teknik değil, finansal olarak da test edilecek.

Yatırımcılar için konu hype'tan ibaret değil: müşteri bağlılığı, altyapı maliyetleri, marjlar ve regülasyon belirleyici olacak. Kullanıcılar için halka arz daha fazla istikrar getirebilir, ama daha güçlü gelir baskısı da yaratabilir.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "invisix-20-milyon-euro-yatirim-2026-06-03",
    cat: "forschung",
    lang: "tr",
    author: "Ercan Yıldız",
    date: "2026-06-03",
    image: "images/2026-06-03-invisix-chip-metrology.jpg",
    views: 4930,
    de: {
      title: "KI-Startup Invisix erhält 20 Millionen Euro für Chip-Metrologie",
      teaser: "Webrazzi berichtet über eine Seed-Runde für Invisix: Das Startup verbindet KI mit Soft-X-ray-Metrologie für fortgeschrittene Chipfertigung.",
      body: `Webrazzi meldet eine 20-Millionen-Euro-Finanzierung für Invisix. Das niederländische Startup arbeitet an Soft-X-ray-Metrologie für moderne Chipfertigung und verbindet damit KI, Sensorik und Halbleiterproduktion.

## Warum das mehr als Startup-News ist

Fortgeschrittene Chips brauchen extrem präzise Mess- und Kontrollsysteme. Wenn KI solche Produktionsschritte verbessert, wirkt sie nicht nur in Software, sondern direkt in der industriellen Grundlage neuer Rechenleistung.

- Quelle: Webrazzi, 01.06.2026.
- Thema: KI, Halbleiter, Investment.
- Investoren laut Bericht: unter anderem Hitachi Ventures, Transition Ventures, imec.xpand und Doosan Investment.

## Ercans Einordnung

> Die KI-Zukunft hängt auch an Maschinen, die bessere Chips messbar machen.

Für Europa ist das besonders interessant: Wer bei KI souveräner werden will, muss nicht nur Modelle bauen, sondern auch Mess-, Fertigungs- und Chipkompetenz stärken.`,
    },
    tr: {
      title: "Yapay zeka girişimi Invisix, 20 milyon euro yatırım aldı",
      teaser: "Webrazzi, Invisix'in 20 milyon euro seed yatırım aldığını yazıyor. Girişim, gelişmiş çip üretimi için YZ destekli soft X-ray metrolojiye odaklanıyor.",
      body: `Webrazzi, Invisix'in 20 milyon euro yatırım aldığını aktarıyor. Hollanda merkezli girişim, gelişmiş çip üretimi için soft X-ray metroloji üzerinde çalışıyor ve YZ, sensör teknolojisi ile yarı iletken üretimini birleştiriyor.

## Neden sadece startup haberi değil

Gelişmiş çipler son derece hassas ölçüm ve kontrol sistemleri gerektirir. YZ bu üretim adımlarını iyileştirdiğinde yalnızca yazılımda değil, yeni hesaplama gücünün endüstriyel temelinde de etkili olur.

- Kaynak: Webrazzi, 01.06.2026.
- Konu: YZ, yarı iletkenler, yatırım.
- Habere göre yatırımcılar arasında Hitachi Ventures, Transition Ventures, imec.xpand ve Doosan Investment bulunuyor.

## Ercan'ın yorumu

> YZ'nin geleceği, daha iyi çipleri ölçülebilir kılan makinelerden de geçiyor.

Avrupa için bu özellikle önemli: YZ'de daha bağımsız olmak isteyenler yalnızca model değil, ölçüm, üretim ve çip yetkinliği de geliştirmeli.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "ki-wurm-individuelle-angriffe-2026-06-03",
    cat: "sicherheit",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-03",
    image: "images/2026-06-03-ki-wurm-cybersecurity-keyboard.jpg",
    featured: true,
    views: 5360,
    de: {
      title: "Forschende zeigen KI-Wurm mit eigener Angriffsstrategie",
      teaser: "Ein Bericht von t3n beschreibt einen Computerwurm, der mithilfe eingebauter KI für jedes Ziel eine neue Vorgehensweise entwickeln kann.",
      body: `Eine der wichtigsten heutigen Meldungen kommt aus der IT-Sicherheit: t3n berichtet über Forschende, die einen KI-gestützten Computerwurm demonstriert haben. Das Besondere ist nicht nur die Automatisierung, sondern die Anpassung an jedes einzelne Ziel.

## Warum das relevant ist

Klassische Schadsoftware folgt oft festen Mustern. Ein KI-Wurm kann dagegen Schwachstellen, Umgebung und mögliche nächste Schritte dynamischer bewerten. Damit verschiebt sich die Abwehr von einfachen Signaturen hin zu Verhaltenserkennung, Segmentierung und schneller Reaktion.

- Quelle: t3n / MIT Technology Review News.
- Kernthema: Cybersecurity trifft autonome KI.
- Risiko: Angriffe werden individueller und schwerer vorhersehbar.

## Einordnung für Unternehmen

> Wenn Angreifer KI zur Planung nutzen, reicht reine Mustererkennung nicht mehr aus.

Für Firmen bedeutet das: Logging, Rechteverwaltung und Notfallpläne werden wichtiger. Besonders Systeme mit automatisierten Workflows und Agenten sollten klare Grenzen bekommen, bevor sie produktiv laufen.`,
    },
    tr: {
      title: "Araştırmacılar kendi saldırı stratejisini üreten bir YZ solucanı gösterdi",
      teaser: "t3n'in aktardığına göre araştırmacılar, her hedef için yeni bir yol izleyebilen yapay zekâ destekli bir bilgisayar solucanı geliştirdi.",
      body: `Bugünün en önemli haberlerinden biri siber güvenlik alanından geliyor: t3n, yapay zekâ destekli bir bilgisayar solucanı üzerinde çalışan araştırmacıları aktarıyor. Önemli nokta yalnızca otomasyon değil; sistemin her hedefe göre farklı bir strateji geliştirebilmesi.

## Neden önemli

Klasik zararlı yazılımlar çoğu zaman sabit kalıplara dayanır. Bir YZ solucanı ise açıkları, ortamı ve sonraki adımları daha dinamik değerlendirebilir. Bu da savunmayı basit imza kontrolünden davranış analizi, segmentasyon ve hızlı müdahale tarafına kaydırıyor.

- Kaynak: t3n / MIT Technology Review News.
- Ana konu: Siber güvenlik ve otonom yapay zekânın kesişimi.
- Risk: Saldırılar daha kişiselleşmiş ve öngörülmesi daha zor hale geliyor.

## Şirketler için yorum

> Saldırganlar planlama için yapay zekâ kullandığında sadece kalıp tanıma yeterli olmaz.

Şirketler için günlük kayıtları, yetki yönetimi ve acil durum planları daha kritik hale geliyor. Özellikle otomatik iş akışları ve ajanlar net sınırlarla üretime alınmalı.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "deepseek-v4-huawei-ascend-nvidia-abkehr-2026-06-03",
    cat: "modelle",
    lang: "tr",
    author: "Ercan Yıldız",
    date: "2026-06-03",
    image: "images/2026-06-03-deepseek-huawei-wafer.jpg",
    views: 4210,
    de: {
      title: "DeepSeek V4 soll auf Huawei Ascend 950 optimiert werden",
      teaser: "BigData-Insider berichtet: DeepSeek V4 unterstützt Huaweis Ascend 950. Das Signal ist klar – China will bei KI-Chips unabhängiger von Nvidia werden.",
      body: `Die zweite starke Meldung des Tages betrifft die KI-Infrastruktur: BigData-Insider berichtet über DeepSeek V4 und Huaweis Ascend 950. Die Kooperation zeigt, wie eng Modelle und Hardware inzwischen zusammen gedacht werden.

## Mehr als nur ein Modell-Update

Wenn ein großes Modell gezielt für bestimmte Beschleuniger optimiert wird, geht es nicht nur um Geschwindigkeit. Es geht um Lieferketten, Kosten, Exportregeln und technologische Souveränität.

- Quelle: BigData-Insider / KI-Insider.
- Thema: DeepSeek V4, Huawei Ascend 950, Abkehr von Nvidia.
- Bedeutung: KI-Strategie wird zunehmend auch Chip-Strategie.

## Warum das für Europa interessant ist

> Wer KI betreiben will, braucht nicht nur Modelle – sondern Zugriff auf passende Rechenleistung.

Für europäische Firmen ist das ein Warnsignal: Abhängigkeiten entstehen nicht erst beim Cloudanbieter, sondern schon bei Chips, Frameworks und Modellarchitektur.`,
    },
    tr: {
      title: "DeepSeek V4, Huawei Ascend 950 için optimize edilecek",
      teaser: "BigData-Insider'a göre DeepSeek V4, Huawei Ascend 950'yi destekliyor. Mesaj net: Çin, KI/YZ çiplerinde Nvidia'ya bağımlılığı azaltmak istiyor.",
      body: `Günün ikinci güçlü haberi yapay zekâ altyapısıyla ilgili: BigData-Insider, DeepSeek V4 ve Huawei Ascend 950 iş birliğini aktarıyor. Bu gelişme, modeller ile donanımın artık birlikte tasarlandığını gösteriyor.

## Sadece model güncellemesi değil

Büyük bir model belirli hızlandırıcılar için optimize edildiğinde mesele yalnızca performans değildir. Tedarik zinciri, maliyet, ihracat kuralları ve teknolojik egemenlik de işin içine girer.

- Kaynak: BigData-Insider / KI-Insider.
- Konu: DeepSeek V4, Huawei Ascend 950, Nvidia'dan uzaklaşma.
- Anlamı: YZ stratejisi giderek çip stratejisi haline geliyor.

## Avrupa için neden ilginç

> Yapay zekâ çalıştırmak isteyenlerin sadece modele değil, uygun hesaplama gücüne de erişmesi gerekir.

Avrupalı şirketler için bu bir uyarı: Bağımlılıklar yalnızca bulut sağlayıcılarında değil, çiplerde, framework'lerde ve model mimarisinde de başlar.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "microsoft-agent-optimizer-repariert-agenten-2026-06-03",
    cat: "agentic",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-03",
    image: "images/2026-06-03-microsoft-agent-optimizer-code.jpg",
    views: 3980,
    de: {
      title: "Microsofts Agent Optimizer soll KI-Agenten automatisch verbessern",
      teaser: "All-AI.de berichtet über Microsofts Agent Optimizer: Statt Agenten manuell zu testen, sucht das System automatisch nach besseren Konfigurationen.",
      body: `Die dritte Meldung passt perfekt zum Schwerpunkt von ErcanBlog: All-AI.de berichtet über Microsofts „Agent Optimizer“. Das System soll KI-Agenten nicht nur ausführen, sondern ihre Konfiguration automatisch verbessern und Fehlerquellen finden.

## Vom Agenten zum Agenten-Betrieb

Viele Agenten funktionieren in Demos gut, scheitern aber im Alltag an falschen Prompts, Werkzeugauswahl oder unklaren Zwischenschritten. Genau hier setzt ein Optimierer an: Er testet Varianten und sucht nach stabileren Abläufen.

- Quelle: All-AI.de.
- Thema: automatische Verbesserung und Reparatur von KI-Agenten.
- Nutzen: weniger manuelles Experimentieren, bessere Qualitätssicherung.

## Einordnung

> Agentische KI wird erst dann produktiv, wenn Tests, Monitoring und Optimierung mitwachsen.

Für Unternehmen ist das wichtiger als der nächste Chatbot: Wer Agenten wirklich einsetzen will, braucht Werkzeuge, die Fehler sichtbar machen und Abläufe systematisch verbessern.`,
    },
    tr: {
      title: "Microsoft Agent Optimizer, KI/YZ ajanlarını otomatik iyileştirmeyi hedefliyor",
      teaser: "All-AI.de, Microsoft'un Agent Optimizer aracını aktarıyor: Ajanları manuel test etmek yerine sistem daha iyi konfigürasyonları otomatik arıyor.",
      body: `Üçüncü haber ErcanBlog'un odağına tam uyuyor: All-AI.de, Microsoft'un “Agent Optimizer” aracını aktarıyor. Sistem, yapay zekâ ajanlarını yalnızca çalıştırmakla kalmayıp yapılandırmalarını iyileştirmeyi ve hata kaynaklarını bulmayı hedefliyor.

## Ajandan ajan operasyonuna

Birçok ajan demoda iyi görünür, fakat günlük kullanımda yanlış prompt, yanlış araç seçimi veya belirsiz ara adımlar yüzünden sorun çıkarır. Optimizasyon tam burada devreye girer: Farklı varyantları test eder ve daha kararlı akışlar arar.

- Kaynak: All-AI.de.
- Konu: KI/YZ ajanlarının otomatik iyileştirilmesi ve onarılması.
- Fayda: daha az manuel deneme, daha iyi kalite kontrol.

## Yorum

> Agentik yapay zekâ ancak test, izleme ve optimizasyon araçlarıyla birlikte üretime hazır hale gelir.

Şirketler için bu, sıradaki sohbet robotundan daha önemlidir: Ajanları gerçekten kullanmak isteyenler, hataları görünür kılan ve akışları sistematik şekilde iyileştiren araçlara ihtiyaç duyar.`,
    },
  },


  /* ---------------------------------------------------------- */
  {
    id: "microsoft-build-2026-windows-agenten",
    cat: "agentic",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-03",
    image: "images/microsoft-build.jpg",
    views: 5240,
    de: {
      title: "Microsoft macht Windows zur Plattform für KI-Agenten",
      teaser: "Auf der Build 2026 hat Microsoft Werkzeuge vorgestellt, mit denen autonome KI-Agenten direkt im Betriebssystem laufen – abgeschottet, teils lokal auf dem Gerät und unter zentraler Kontrolle der IT.",
      body: `Mit der Eröffnungs-Keynote der Entwicklerkonferenz Build 2026 in San Francisco hat Microsoft Windows neu ausgerichtet: weg vom reinen Programm-Starter, hin zur Ausführungsumgebung für autonome KI-Agenten. Es ist einer der größten Umbauten der Plattform seit Jahren.

## Agenten im Betriebssystem

Im Zentrum steht eine neue Agenten-Schnittstelle, die wiederkehrende Bausteine bereitstellt – Gedächtnis, Planung, Werkzeugaufrufe und einheitliche Ausgaben. Entwickler müssen diese Grundlagen damit nicht mehr selbst bauen.

- Abgeschottete Container sollen verhindern, dass ein Agent mehr tut, als er darf.
- Kleine Sprachmodelle laufen direkt auf dem Gerät – ohne Cloud und auch offline.
- Ein neuer „intelligenter Terminal“ verbindet die klassische Kommandozeile mit der Steuerung mehrerer Agenten.

## Warum das wichtig ist

Für Unternehmen verschiebt sich die Frage vom „Ob“ zum „Wie sicher“. Microsoft betont ausdrücklich die Kontrolle: Rechte lassen sich zentral vergeben, Aktivitäten nachverfolgen.

> Windows ist nicht länger nur die Bühne für Programme – es soll der Ort werden, an dem Agenten Arbeit erledigen.

## Offene Fragen

Noch ist unklar, wie reibungslos vorhandene Software mit den neuen Schnittstellen zusammenarbeitet und ob die versprochene Geschwindigkeit im Alltag hält. Für kleine und mittlere Betriebe entscheidend wird, wie aufwendig die Einrichtung am Ende wirklich ist.`,
    },
    tr: {
      title: "Microsoft, Windows'u yapay zekâ ajanları platformuna dönüştürüyor",
      teaser: "Build 2026'da Microsoft, otonom yapay zekâ ajanlarının doğrudan işletim sisteminde çalışmasını sağlayan araçları tanıttı – izole edilmiş, kısmen cihaz üzerinde yerel olarak ve BT'nin merkezi kontrolü altında.",
      body: `Microsoft, San Francisco'daki Build 2026 geliştirici konferansının açılış sunumuyla Windows'u yeniden konumlandırdı: artık yalnızca program başlatıcı değil, otonom yapay zekâ ajanlarının çalıştığı bir ortam. Bu, platformun son yıllardaki en büyük dönüşümlerinden biri.

## İşletim sisteminde ajanlar

Merkezde, bellek, planlama, araç çağırma ve standart çıktılar gibi tekrar eden yapı taşlarını sunan yeni bir ajan arayüzü yer alıyor. Böylece geliştiriciler bu temelleri kendileri kurmak zorunda kalmıyor.

- İzole konteynerler, bir ajanın yetkisinden fazlasını yapmasını engellemeyi amaçlıyor.
- Küçük dil modelleri doğrudan cihazda çalışıyor – bulut olmadan ve çevrimdışı da.
- Yeni bir "akıllı terminal", klasik komut satırını birden çok ajanın yönetimiyle birleştiriyor.

## Neden önemli

Şirketler için soru artık "yapsak mı" değil, "ne kadar güvenli" sorusuna kayıyor. Microsoft kontrolün altını özellikle çiziyor: Yetkiler merkezi olarak verilebiliyor, etkinlikler izlenebiliyor.

> Windows artık yalnızca programların sahnesi değil – ajanların iş yaptığı yer olacak.

## Açık sorular

Mevcut yazılımların yeni arayüzlerle ne kadar sorunsuz çalışacağı ve vaat edilen hızın günlük kullanımda tutup tutmayacağı henüz belirsiz. Küçük ve orta ölçekli işletmeler için asıl belirleyici olan, kurulumun gerçekte ne kadar zahmetli olacağı.`,
    },
  },


  /* ---------------------------------------------------------- */
  {
    id: "github-copilot-nutzungsabrechnung",
    cat: "business",
    lang: "de",
    author: "Lena Brandt",
    date: "2026-06-02",
    image: "images/github-copilot.jpg",
    views: 4010,
    de: {
      title: "GitHub Copilot stellt auf nutzungsbasierte Abrechnung um",
      teaser: "Seit dem 1. Juni rechnet der KI-Programmierassistent nach Verbrauch ab. Entwickler berichten von deutlich gestiegenen Kosten – besonders kleine Teams sind betroffen.",
      body: `Der Wechsel war angekündigt, die Reaktion fällt trotzdem heftig aus: Seit dem 1. Juni 2026 rechnet GitHub seinen Programmierassistenten Copilot nicht mehr über feste Abos ab, sondern über verbrauchsbasierte Guthaben. Viele Nutzer berichten von unerwartet hohen Rechnungen.

## Vom Abo zur Stromrechnung

Wer Copilot intensiv nutzt – etwa für automatische Code-Prüfungen oder lange, mehrstufige Sitzungen – zahlt nun spürbar mehr. Auch die KI-gestützte Code-Prüfung verbraucht zusätzliche Kontingente.

- Besonders betroffen sind kleine Teams und Einzelentwickler.
- Neu sind Budgetgrenzen pro Nutzer, mit denen sich Kosten deckeln lassen.
- Fachleute raten, die Nutzung wie eine Cloud-Rechnung zu behandeln – nicht wie ein festes Abo.

## Empfehlung

> Wer Agenten zum Programmieren einsetzt, sollte vorab ein Limit setzen und die bisherige Nutzung prüfen, bevor die neue Abrechnung greift.

Für Unternehmen lohnt sich ein Blick auf die Aktivität der vergangenen Wochen, um die zu erwartenden Kosten realistisch einzuschätzen.`,
    },
    tr: {
      title: "GitHub Copilot kullanım bazlı faturalandırmaya geçiyor",
      teaser: "1 Haziran'dan itibaren yapay zekâ kodlama asistanı kullanıma göre ücretlendiriliyor. Geliştiriciler maliyetlerin belirgin biçimde arttığını bildiriyor – özellikle küçük ekipler etkileniyor.",
      body: `Değişiklik önceden duyurulmuştu ama tepki yine de sert oldu: 1 Haziran 2026'dan itibaren GitHub, kodlama asistanı Copilot'u sabit aboneliklerle değil, kullanım bazlı kredilerle ücretlendiriyor. Birçok kullanıcı beklenmedik şekilde yüksek faturalardan şikâyet ediyor.

## Abonelikten kullanım faturasına

Copilot'u yoğun kullananlar – örneğin otomatik kod incelemeleri veya uzun, çok adımlı oturumlar için – artık belirgin biçimde daha fazla ödüyor. Yapay zekâ destekli kod incelemesi de ek kontenjan tüketiyor.

- Özellikle küçük ekipler ve bireysel geliştiriciler etkileniyor.
- Maliyetleri sınırlamak için kullanıcı başına bütçe limitleri eklendi.
- Uzmanlar, kullanımın sabit bir abonelik gibi değil, bir bulut faturası gibi ele alınmasını öneriyor.

## Öneri

> Kodlama için ajan kullananlar, yeni faturalandırma devreye girmeden önce bir limit belirlemeli ve mevcut kullanımı gözden geçirmeli.

Şirketler için, beklenen maliyetleri gerçekçi biçimde öngörmek adına son haftaların etkinliğine bakmak faydalı olacaktır.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "eu-digitale-souveraenitaet-paket",
    cat: "business",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-03",
    image: "images/eu-souveraenitaet.jpg",
    views: 3120,
    de: {
      title: "EU-Kommission legt Paket für mehr digitale Unabhängigkeit vor",
      teaser: "In Brüssel wurde ein umfangreiches Maßnahmenpaket vorgestellt – mit Vorschlägen zu Cloud-Diensten, KI und Mikrochips. Ziel ist, Europas Abhängigkeit von US-Technologie zu verringern.",
      body: `Wichtige Daten liegen in der Cloud amerikanischer Anbieter, auf den Rechnern läuft US-Bürosoftware, und auch bei der KI geben Konzerne aus den USA den Ton an. Genau diese Abhängigkeit will die EU-Kommission mit einem heute vorgestellten Paket angehen.

## Worum es geht

Das Maßnahmenbündel umfasst Gesetzesvorschläge zu Cloud- und KI-Technologien sowie zur Versorgung mit Mikrochips. Europa soll bei Schlüsseltechnologien handlungsfähiger und weniger erpressbar werden.

- Mehr Anreize für europäische Cloud- und Rechenzentrumsangebote.
- Klarere Regeln für den Einsatz von KI in sensiblen Bereichen.
- Stärkung der heimischen Chip-Produktion.

## Bedeutung für den Mittelstand

> Für kleine und mittlere Unternehmen geht es um die Frage, wem sie ihre Daten anvertrauen – und wie leicht sie den Anbieter wechseln können.

Ob aus den Vorschlägen wirksame Gesetze werden, hängt nun von den Verhandlungen mit den Mitgliedsstaaten ab. Kritiker mahnen, Förderung allein reiche nicht – es brauche auch verlässliche Nachfrage nach europäischen Lösungen.`,
    },
    tr: {
      title: "AB Komisyonu, dijital bağımsızlık için kapsamlı bir paket sundu",
      teaser: "Brüksel'de bulut hizmetleri, yapay zekâ ve mikroçiplere ilişkin önerileri içeren geniş bir önlem paketi tanıtıldı. Amaç, Avrupa'nın ABD teknolojisine bağımlılığını azaltmak.",
      body: `Önemli veriler Amerikan sağlayıcıların bulutunda duruyor, bilgisayarlarda ABD ofis yazılımı çalışıyor ve yapay zekâda da ABD'li şirketler belirleyici. AB Komisyonu, bugün tanıtılan paketle tam da bu bağımlılığı ele almak istiyor.

## Konu ne

Önlem paketi, bulut ve yapay zekâ teknolojileri ile mikroçip tedarikine ilişkin yasa önerilerini içeriyor. Avrupa'nın kilit teknolojilerde daha güçlü ve daha az kırılgan olması hedefleniyor.

- Avrupa merkezli bulut ve veri merkezi hizmetleri için daha fazla teşvik.
- Hassas alanlarda yapay zekâ kullanımı için daha net kurallar.
- Yerli çip üretiminin güçlendirilmesi.

## KOBİ'ler için anlamı

> Küçük ve orta ölçekli işletmeler için asıl soru, verilerini kime emanet ettikleri – ve sağlayıcıyı ne kadar kolay değiştirebilecekleri.

Önerilerin etkili yasalara dönüşüp dönüşmeyeceği, üye devletlerle yapılacak müzakerelere bağlı. Eleştirmenler, tek başına teşvikin yeterli olmadığını; Avrupa çözümlerine yönelik güvenilir bir talebin de gerektiğini vurguluyor.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "google-suche-informations-agenten",
    cat: "agentic",
    lang: "de",
    author: "Lena Brandt",
    date: "2026-06-01",
    image: "images/google-agents.jpg",
    views: 2890,
    de: {
      title: "Google rüstet die Suche mit autonomen Info-Agenten aus",
      teaser: "Nutzer können künftig eigene Agenten anlegen, die rund um die Uhr im Hintergrund ein Thema verfolgen – und nicht nur auf einzelne Suchanfragen antworten.",
      body: `Die Suche soll nicht länger nur reagieren, sondern mitdenken: Google hat neue agentische Funktionen vorgestellt, mit denen Nutzer mehrere Informations-Agenten anlegen und verwalten können. Sie verfolgen ein Thema dauerhaft, statt nur auf einzelne Fragen zu antworten.

## Vom Suchfeld zum ständigen Beobachter

Anders als bei der klassischen Suche arbeiten die Agenten im Hintergrund weiter – rund um die Uhr. Statt einer reinen Linkliste fassen sie Informationen aus mehreren Quellen zusammen, ordnen ein und melden sich, wenn etwas Wichtiges passiert.

- Beispiel: ein Agent, der bestimmte Unternehmen und ihre Kurse beobachtet.
- Auch Flugpreise, Sportergebnisse oder lokale Ereignisse lassen sich verfolgen.
- Bei relevanten Neuigkeiten schickt die App eine Mitteilung.

## Einordnung

> Im Kern ist das die nächste Stufe der altbekannten Benachrichtigungen – nur, dass die KI die Ergebnisse versteht und zusammenfasst.

Für Unternehmen eröffnet das neue Wege, Märkte und Wettbewerber im Blick zu behalten. Offen bleibt, wie verlässlich die Zusammenfassungen sind und wie gut sich Fehlalarme vermeiden lassen.`,
    },
    tr: {
      title: "Google, aramayı otonom bilgi ajanlarıyla donatıyor",
      teaser: "Kullanıcılar artık bir konuyu günün her saati arka planda takip eden kendi ajanlarını oluşturabilecek – yalnızca tek tek aramalara yanıt vermekle kalmayacak.",
      body: `Arama artık yalnızca tepki vermek değil, birlikte düşünmek istiyor: Google, kullanıcıların birden çok bilgi ajanı oluşturup yönetmesini sağlayan yeni agentic özellikleri tanıttı. Bu ajanlar, tek tek sorulara yanıt vermek yerine bir konuyu sürekli takip ediyor.

## Arama kutusundan sürekli gözlemciye

Klasik aramanın aksine ajanlar arka planda çalışmaya devam ediyor – günün her saati. Salt bir bağlantı listesi yerine birden çok kaynaktan bilgiyi derleyip yorumluyor ve önemli bir gelişme olduğunda haber veriyor.

- Örnek: belirli şirketleri ve hisse fiyatlarını izleyen bir ajan.
- Uçak fiyatları, spor sonuçları veya yerel etkinlikler de takip edilebiliyor.
- İlgili bir gelişmede uygulama bir bildirim gönderiyor.

## Değerlendirme

> Özünde bu, eskiden bildiğimiz bildirimlerin bir üst aşaması – farkı, yapay zekânın sonuçları anlayıp özetlemesi.

Şirketler için bu, pazarları ve rakipleri takip etmenin yeni yollarını açıyor. Özetlerin ne kadar güvenilir olduğu ve yanlış alarmların ne ölçüde önleneceği ise belirsizliğini koruyor.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "microsoft-agent-365-kontrolle",
    cat: "business",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-02",
    image: "images/microsoft-agent365.jpg",
    views: 2110,
    de: {
      title: "Agent 365: Microsoft baut eine Kontrollzentrale für Unternehmens-Agenten",
      teaser: "Mit einer eigenen Verwaltungsebene sollen Firmen KI-Agenten so steuern wie Mitarbeiterkonten – mit Rechten, Protokollen und Kostenkontrolle über viele Modelle hinweg.",
      body: `Je mehr Agenten in Unternehmen arbeiten, desto drängender wird die Frage der Aufsicht. Microsoft beantwortet sie mit einer zentralen Verwaltungsebene, die Agenten ähnlich behandelt wie Benutzerkonten – inklusive Rechtevergabe, Protokollen und Kostenüberblick.

## Viele Modelle, eine Steuerung

Über die zugrunde liegende Entwicklungsplattform lassen sich Modelle unterschiedlicher Anbieter – darunter OpenAI, Anthropic, Mistral und DeepSeek – ansprechen und je nach Aufgabe auswählen. Unternehmen können so steuern, welches Modell wofür zum Einsatz kommt.

- Rechte und Zugriffe werden zentral vergeben.
- Der Verbrauch an Rechenleistung lässt sich überwachen und deckeln.
- Richtlinien für verantwortungsvollen Einsatz greifen plattformweit.

## Warum das zählt

> Kostenkontrolle ist zum wiederkehrenden Thema geworden – nicht das cleverste Modell entscheidet, sondern das verlässlich steuerbare.

Für die IT-Abteilung verschiebt sich die Aufgabe: Nicht mehr nur Menschen und Geräte wollen verwaltet werden, sondern auch eine wachsende Zahl autonomer Helfer.`,
    },
    tr: {
      title: "Agent 365: Microsoft, kurumsal ajanlar için bir kontrol merkezi kuruyor",
      teaser: "Kendi yönetim katmanıyla şirketler, yapay zekâ ajanlarını çalışan hesapları gibi yönetebilecek – yetkiler, kayıtlar ve birçok model genelinde maliyet kontrolüyle.",
      body: `Şirketlerde ne kadar çok ajan çalışırsa, denetim sorusu o kadar acil hale geliyor. Microsoft bunu, ajanları kullanıcı hesaplarına benzer biçimde ele alan merkezi bir yönetim katmanıyla yanıtlıyor – yetkilendirme, kayıt tutma ve maliyet görünürlüğü dahil.

## Birçok model, tek yönetim

Altta yatan geliştirme platformu üzerinden farklı sağlayıcıların modelleri – aralarında OpenAI, Anthropic, Mistral ve DeepSeek – çağrılabiliyor ve göreve göre seçilebiliyor. Böylece şirketler hangi modelin ne için kullanılacağını belirleyebiliyor.

- Yetkiler ve erişimler merkezi olarak veriliyor.
- İşlem gücü tüketimi izlenebiliyor ve sınırlanabiliyor.
- Sorumlu kullanım kuralları platform genelinde geçerli.

## Neden önemli

> Maliyet kontrolü tekrar eden bir konu hâline geldi – en zeki model değil, güvenilir biçimde yönetilebilen model belirleyici.

BT departmanı için görev değişiyor: Artık yalnızca insanlar ve cihazlar değil, giderek artan sayıda otonom yardımcı da yönetilmek istiyor.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "softbank-ki-rechenzentren-frankreich",
    cat: "forschung",
    lang: "de",
    author: "Lena Brandt",
    date: "2026-06-02",
    image: "images/softbank-rz.jpg",
    views: 1780,
    de: {
      title: "SoftBank plant riesige KI-Rechenzentren in Frankreich",
      teaser: "Der japanische Konzern will in Frankreich mehrere Rechenzentren mit einer Gesamtleistung von bis zu fünf Gigawatt errichten – ein weiteres Zeichen für den enormen Energiehunger der KI.",
      body: `Der Ausbau der KI-Infrastruktur erreicht eine neue Größenordnung: SoftBank will in Frankreich mehrere Rechenzentren mit einer Gesamtleistung von bis zu fünf Gigawatt aufbauen. Zum Vergleich: Das entspricht der Leistung mehrerer großer Kraftwerke.

## Europa als Standort

Dass ein japanischer Konzern ausgerechnet Frankreich wählt, passt ins Bild: Das Land wirbt mit reichlich CO₂-armem Strom aus Kernkraft – ein Argument, das beim Betrieb stromhungriger KI-Anlagen schwer wiegt.

- Geplant sind mehrere Standorte mit zusammen bis zu fünf Gigawatt.
- Der Strombedarf moderner KI-Rechenzentren wächst rasant.
- Verfügbarkeit und Herkunft der Energie werden zum Standortfaktor.

## Die Kehrseite

> Mit jedem neuen Großrechenzentrum rückt die Frage in den Vordergrund, woher der viele Strom kommen soll – und zu welchen Kosten.

Für die Branche ist der Schritt ein weiteres Signal, dass nicht mehr nur Chips knapp sind, sondern zunehmend auch Energie und Fläche.`,
    },
    tr: {
      title: "SoftBank, Fransa'da devasa yapay zekâ veri merkezleri planlıyor",
      teaser: "Japon şirket, Fransa'da toplam beş gigavata varan güçte birden çok veri merkezi kurmak istiyor – yapay zekânın muazzam enerji iştahının bir başka göstergesi.",
      body: `Yapay zekâ altyapısının büyümesi yeni bir ölçeğe ulaşıyor: SoftBank, Fransa'da toplam beş gigavata varan güçte birden çok veri merkezi kurmak istiyor. Karşılaştırma için: Bu, birkaç büyük santralin gücüne denk geliyor.

## Konum olarak Avrupa

Japon bir şirketin tam da Fransa'yı seçmesi tesadüf değil: Ülke, nükleer enerjiden gelen bol miktarda düşük karbonlu elektrikle öne çıkıyor – enerji açlığı yüksek yapay zekâ tesisleri için ağır basan bir avantaj.

- Toplamda beş gigavata varan birden çok tesis planlanıyor.
- Modern yapay zekâ veri merkezlerinin elektrik ihtiyacı hızla artıyor.
- Enerjinin bulunabilirliği ve kaynağı bir konum faktörü hâline geliyor.

## Madalyonun öteki yüzü

> Her yeni büyük veri merkeziyle birlikte, bunca elektriğin nereden – ve hangi maliyetle – geleceği sorusu öne çıkıyor.

Sektör için bu adım, artık yalnızca çiplerin değil, giderek enerji ve alanın da kıt olduğunun bir başka işareti.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "qualcomm-server-cpus-edge-ki",
    cat: "forschung",
    lang: "de",
    author: "Ercan Yıldız",
    date: "2026-06-01",
    image: "images/qualcomm-chips.jpg",
    views: 1450,
    de: {
      title: "Qualcomm gibt Ausblick auf neue Server-Chips für KI",
      teaser: "Auf der Computex skizzierte Konzernchef Cristiano Amon die kommenden Server-Prozessoren – ein Vorstoß in ein Feld, das bislang von wenigen Anbietern beherrscht wird.",
      body: `Qualcomm wagt sich tiefer ins Rechenzentrum: Auf der Branchenmesse Computex gab Firmenchef Cristiano Amon einen ersten Ausblick auf kommende Server-Prozessoren. Damit greift das Unternehmen einen Markt an, der bisher von wenigen großen Namen geprägt ist.

## Mehr Auswahl im Rechenzentrum

Bislang dominieren wenige Anbieter die Prozessoren in KI-Rechenzentren. Ein weiterer ernstzunehmender Wettbewerber könnte Preise und Abhängigkeiten verändern – ein Aspekt, der auch europäische Betreiber interessiert.

- Qualcomm ist vor allem für effiziente Chips in mobilen Geräten bekannt.
- Diese Effizienz soll nun in den Server-Bereich übertragen werden.
- Energieeffizienz wird im Rechenzentrum zum entscheidenden Wettbewerbsfaktor.

## Einordnung

> Wer mehr Leistung pro Watt liefert, hat im KI-Zeitalter einen handfesten Vorteil – Strom ist der eigentliche Engpass.

Konkrete Produkte und Verfügbarkeiten blieben zunächst offen. Klar ist aber die Richtung: Der Wettbewerb um die Chips hinter der KI nimmt zu.`,
    },
    tr: {
      title: "Qualcomm, yapay zekâ için yeni sunucu çiplerine dair ipuçları verdi",
      teaser: "Computex'te şirket yöneticisi Cristiano Amon, gelecek sunucu işlemcilerinin ana hatlarını çizdi – şimdiye dek az sayıda sağlayıcının hâkim olduğu bir alana giriş.",
      body: `Qualcomm veri merkezine daha derinden adım atıyor: Sektör fuarı Computex'te şirket yöneticisi Cristiano Amon, gelecek sunucu işlemcilerine dair ilk ipuçlarını verdi. Böylece şirket, şimdiye dek az sayıda büyük ismin belirlediği bir pazara giriyor.

## Veri merkezinde daha fazla seçenek

Bugüne kadar yapay zekâ veri merkezlerindeki işlemcilere az sayıda sağlayıcı hâkim. Ciddi bir rakibin daha eklenmesi fiyatları ve bağımlılıkları değiştirebilir – Avrupalı işletmecileri de ilgilendiren bir nokta.

- Qualcomm özellikle mobil cihazlardaki verimli çipleriyle tanınıyor.
- Bu verimlilik şimdi sunucu alanına taşınmak isteniyor.
- Veri merkezinde enerji verimliliği belirleyici bir rekabet faktörü hâline geliyor.

## Değerlendirme

> Watt başına daha fazla performans sunan, yapay zekâ çağında somut bir avantaja sahip – asıl darboğaz elektrik.

Somut ürünler ve çıkış tarihleri şimdilik belirsiz kaldı. Ancak yön net: Yapay zekânın arkasındaki çipler için rekabet artıyor.`,
    },
  },

  /* ---------------------------------------------------------- */
  {
    id: "ki-stromverbrauch-studie",
    cat: "forschung",
    lang: "de",
    author: "Lena Brandt",
    date: "2026-05-31",
    image: "images/ki-energie.jpg",
    views: 1230,
    de: {
      title: "Wie viel Strom kostet eine KI-Antwort wirklich?",
      teaser: "Große Modelle verbrauchen so viel Energie wie ganze Regionen. Eine Auswertung zeigt: Der Verbrauch pro Anfrage schwankt je nach Aufgabe und Modell enorm.",
      body: `Über den Energiehunger der KI wird viel gestritten – oft mit groben Schätzungen. Eine genauere Auswertung liefert nun ein differenziertes Bild und räumt mit Pauschalurteilen auf.

## Die Spanne ist enorm

Der Verbrauch pro Anfrage hängt stark von Modellgröße und Aufgabe ab. Eine kurze Frage an ein kleines Modell kostet einen Bruchteil dessen, was eine komplexe Auswertung durch ein großes Modell verbraucht – der Unterschied liegt bei mehr als dem Hundertfachen.

## Hebel für den Mittelstand

- Das kleinste Modell wählen, das die Aufgabe zuverlässig löst.
- Ergebnisse zwischenspeichern statt identische Anfragen zu wiederholen.
- Routineaufgaben bündeln statt einzeln abzuarbeiten.

> Nicht jede Aufgabe braucht das größte Modell. Die passende Größe spart Geld und Strom zugleich.

## Forderung nach Transparenz

Fachleute plädieren dafür, dass Anbieter den Verbrauch je Anfrage offenlegen. Nur so könnten Unternehmen fundiert entscheiden – und ihren eigenen Fußabdruck überhaupt einschätzen.`,
    },
    tr: {
      title: "Bir yapay zekâ yanıtı gerçekte ne kadar elektriğe mal oluyor?",
      teaser: "Büyük modeller koca bölgeler kadar enerji tüketiyor. Bir analiz gösteriyor ki: İstek başına tüketim, göreve ve modele göre muazzam değişiyor.",
      body: `Yapay zekânın enerji iştahı çok tartışılıyor – çoğu zaman kaba tahminlerle. Daha titiz bir analiz, artık daha ayrıntılı bir tablo sunuyor ve genel geçer yargıları geçersiz kılıyor.

## Aralık muazzam

İstek başına tüketim, modelin büyüklüğüne ve göreve büyük ölçüde bağlı. Küçük bir modele sorulan kısa bir soru, büyük bir modelin yaptığı karmaşık bir analizin tükettiğinin çok küçük bir kısmına mal oluyor – fark yüz katından fazla.

## KOBİ'ler için kaldıraçlar

- Görevi güvenilir biçimde çözen en küçük modeli seçin.
- Aynı istekleri tekrarlamak yerine sonuçları önbelleğe alın.
- Rutin görevleri tek tek değil, toplu işleyin.

> Her görev en büyük modeli gerektirmez. Doğru boyut hem parayı hem elektriği aynı anda korur.

## Şeffaflık talebi

Uzmanlar, sağlayıcıların istek başına tüketimi açıklamasını savunuyor. Şirketler ancak böyle sağlam kararlar verebilir – ve kendi ayak izlerini bir nebze öngörebilir.`,
    },
  },
];

/* ---------- Video-Tipps ----------
   lang: "de" | "tr" | "all" – nur in der passenden Sprache anzeigen */
const TIPS = [
  {
    id: "everlast-ai-juergen-kocka-ki-kapitalismus-2026-06-05",
    date: "2026-06-05",
    youtube: "Egp_xk9fX0M",
    lang: "de",
    de: {
      title: "Everlast AI: Historiker Jürgen Kocka über KI, Arbeit und Kapitalismus",
      desc: "Aktueller deutscher Video-Tipp: ein historisch eingeordneter Blick darauf, ob KI die Arbeitswelt diesmal grundlegend anders verändert.",
    },
    tr: {
      title: "Everlast AI: Tarihçi Jürgen Kocka ile YZ, iş ve kapitalizm",
      desc: "Güncel Almanca video önerisi: YZ'nin çalışma dünyasını bu kez gerçekten farklı değiştirip değiştirmeyeceğine tarihsel bir bakış.",
    },
  },
  {
    id: "digitale-profis-gemini-omni-videomodell-2026-06-05",
    date: "2026-06-05",
    youtube: "r9Vo-38VKB0",
    lang: "de",
    de: {
      title: "Digitale Profis: Gemini Omni-Videomodell richtig einordnen",
      desc: "Praktischer deutscher Tipp zu Googles Video-KI: Was an Gemini Omni realistisch ist und wo Nutzer die Demos falsch verstehen.",
    },
    tr: {
      title: "Digitale Profis: Gemini Omni video modelini doğru okumak",
      desc: "Google'ın video YZ'sine dair pratik Almanca değerlendirme: Gemini Omni'de ne gerçekçi, kullanıcılar demoları nerede yanlış anlıyor?",
    },
  },
  {
    id: "mesut-cevik-rtx-spark-tak-calistir-2026-06-05",
    date: "2026-06-05",
    youtube: "1qawYhwFi7Q",
    lang: "tr",
    de: {
      title: "Mesut Çevik: NVIDIA RTX Spark im Praxischeck",
      desc: "Türkischer Technik-Tipp zu lokaler KI-Hardware: Was RTX Spark leisten soll und warum Plug-and-play bei KI nicht automatisch einfach ist.",
    },
    tr: {
      title: "Mesut Çevik: NVIDIA RTX Spark pratikte ne vaat ediyor?",
      desc: "Yerel YZ donanımı üzerine güncel Türkçe teknoloji yorumu: RTX Spark ne sunuyor, tak-çalıştır fikri YZ tarafında neden bu kadar basit değil?",
    },
  },
  {
    id: "baris-ozcan-wifi-ile-goruntuleme-2026-06-05",
    date: "2026-06-05",
    youtube: "wJWta2lO0Lw",
    lang: "tr",
    de: {
      title: "Barış Özcan: Bildgebung nur mit WLAN-Signalen",
      desc: "Türkischer Wissenschafts- und KI-naher Tipp: Wie Wi-Fi-Signale zur Umgebungswahrnehmung genutzt werden können und warum das für smarte Systeme spannend ist.",
    },
    tr: {
      title: "Barış Özcan: Sadece Wi‑Fi modemle görüntüleme yapılabiliyor",
      desc: "Bilim ve YZ'ye yakın güncel Türkçe öneri: Wi‑Fi sinyalleriyle ortam algılamanın nasıl mümkün olabildiği ve akıllı sistemler için neden önemli olduğu.",
    },
  },
  {
    id: "everlast-ai-claude-opus-48-weltmodell-2026-06-04",
    date: "2026-06-04",
    youtube: "lHU6jFHWAkM",
    lang: "de",
    de: {
      title: "Everlast AI: Claude Opus 4.8 und KI-Weltmodelle",
      desc: "Aktueller deutscher Tipp zu Claude Opus 4.8, neuen KI-Fähigkeiten und Weltmodell-Denken – nützlich für alle, die Modellwechsel einordnen wollen.",
    },
    tr: {
      title: "Everlast AI: Claude Opus 4.8 ve YZ dünya modelleri",
      desc: "Claude Opus 4.8, yeni YZ yetenekleri ve dünya modeli yaklaşımı üzerine güncel Almanca bir değerlendirme.",
    },
  },
  {
    id: "everlast-ai-unternehmen-ki-aufwachen-2026-06-04",
    date: "2026-06-04",
    youtube: "pFE9rmAFXLw",
    lang: "de",
    de: {
      title: "Everlast AI: Unternehmen müssen bei KI endlich aufwachen",
      desc: "Interview-Tipp für Business-Leser: Wie KI Organisationen, Rollen und Entscheidungen verändert – jenseits einzelner Tool-Demos.",
    },
    tr: {
      title: "Everlast AI: Şirketler YZ konusunda artık uyanmalı",
      desc: "İş dünyası için röportaj önerisi: YZ'nin şirketleri, rolleri ve karar süreçlerini araç demolarının ötesinde nasıl değiştirdiği.",
    },
  },
  {
    id: "mesut-cevik-rtx-spark-yapay-zeka-donanimi-2026-06-04",
    date: "2026-06-04",
    youtube: "aivsYPSje8I",
    lang: "tr",
    de: {
      title: "Mesut Çevik: Warum RTX Spark nicht automatisch die Lösung ist",
      desc: "Türkischer Technik-Tipp zu KI-Hardware, Erwartungen und Praxisnutzen – passend für Leser, die lokale KI und Gerätehype nüchtern bewerten wollen.",
    },
    tr: {
      title: "Mesut Çevik: RTX Spark neden otomatik çözüm değil?",
      desc: "YZ donanımı, beklentiler ve pratik fayda üzerine Türkçe teknoloji yorumu; yerel YZ ve cihaz hype'ını sakin değerlendirmek için iyi bir izleme.",
    },
  },
  {
    id: "utku-sen-cop-degil-mucize-degil-yapay-zeka-2026-06-04",
    date: "2026-06-04",
    youtube: "9Wtk7NPIwcs",
    lang: "tr",
    de: {
      title: "Utku Sen: Weder Müll noch Wunder – nüchterner Blick auf KI",
      desc: "Ergänzender türkischer Video-Tipp außerhalb der Kernliste: ein balancierter Blick darauf, warum KI weder pauschal Hype noch nutzlos ist.",
    },
    tr: {
      title: "Utku Sen: Çöp de değil, mucize de değil",
      desc: "Kern listenin dışından tamamlayıcı Türkçe öneri: YZ'nin ne tamamen hype ne de tamamen işe yaramaz olduğunu sakin bir çerçevede ele alıyor.",
    },
  },
  {
    id: "everlast-ai-mainzer-ki-neuromorphe-chips-quantencomputer-2026-06-03",
    date: "2026-06-03",
    youtube: "3GCiIlEISqs",
    lang: "de",
    de: {
      title: "Everlast AI: KI, neuromorphe Chips und Quantencomputer",
      desc: "Ein Deep-Dive mit Prof. Dr. Klaus Mainzer über KI, Komplexität, neuromorphe Chips und Quantencomputer – ideal für den größeren technischen Kontext.",
    },
    tr: {
      title: "Everlast AI: YZ, nöromorfik çipler ve kuantum bilgisayarlar",
      desc: "Prof. Dr. Klaus Mainzer ile YZ, karmaşıklık, nöromorfik çipler ve kuantum bilgisayarlar üzerine derin bir sohbet.",
    },
  },
  {
    id: "everlast-ai-ki-lernen-2026-neustart-2026-06-03",
    date: "2026-06-03",
    youtube: "-CcUGCi1Y0c",
    lang: "de",
    de: {
      title: "Everlast AI: Wie ich 2026 KI neu lernen würde",
      desc: "Evergreen-Tipp für Einsteiger und Umsteiger: Begriffe, Prompting, Automatisierung und KI-Agenten in einem klaren Lernpfad.",
    },
    tr: {
      title: "Everlast AI: 2026'da YZ'yi yeniden nasıl öğrenirdim?",
      desc: "Yeni başlayanlar için kalıcı bir rehber: temel kavramlar, prompt yazımı, otomasyon ve YZ ajanları için net bir öğrenme yolu.",
    },
  },
  {
    id: "mesut-cevik-abonelik-tuzaklari-yapay-zeka-cagi-2026-06-03",
    date: "2026-06-03",
    youtube: "Fn59G1vmDog",
    lang: "tr",
    de: {
      title: "Mesut Çevik: Software-Abos und KI-Zeitalter",
      desc: "Mesut Çevik ordnet Besitz, Abo-Modelle, Vibe Coding und agentische KI aus Nutzer- und Business-Sicht ein.",
    },
    tr: {
      title: "Mesut Çevik: Yazılımda abonelik tuzakları ve yapay zeka çağı",
      desc: "Sahiplik, abonelik modelleri, vibe coding ve ajan tabanlı YZ'nin kullanıcı ve iş dünyası açısından ne değiştirdiğini anlatıyor.",
    },
  },
  {
    id: "yapay-zeka-postasi-microsoft-build-2026-otonom-bilgisayarlar-2026-06-03",
    date: "2026-06-03",
    youtube: "5cdlHoA9_vo",
    lang: "tr",
    de: {
      title: "Yapay Zeka Postası: Microsoft Build 2026 und autonome Computer",
      desc: "Türkischer Überblick zu Microsoft Build 2026, OpenAI Codex, autonomen Agenten und aktuellen KI-Regulierungsfragen.",
    },
    tr: {
      title: "Yapay Zeka Postası: Microsoft Build 2026 ve otonom bilgisayarlar",
      desc: "Microsoft Build 2026, OpenAI Codex, otonom ajanlar ve güncel YZ regülasyonu için derli toplu Türkçe gündem özeti.",
    },
  },
  {
    id: "neulandpro-krasse-ki-news-google-io-codex-2026-06-03",
    date: "2026-06-03",
    youtube: "pq2GS-2bXg4",
    lang: "de",
    de: {
      title: "Neulandpro: Google I/O, Codex-Updates und OpenAI-Wettlauf",
      desc: "Schneller deutscher KI-News-Überblick: Google I/O, starke Codex-Neuerungen und der Wettbewerb zwischen Musk und OpenAI.",
    },
    tr: {
      title: "Neulandpro: Google I/O, Codex güncellemeleri ve OpenAI yarışı",
      desc: "Almanca hızlı KI haber özeti: Google I/O, güçlü Codex yenilikleri ve Musk ile OpenAI arasındaki rekabet.",
    },
  },
  {
    id: "digitale-profis-chatgpt-limit-ki-richtig-nutzen-2026-06-03",
    date: "2026-06-03",
    youtube: "byiFNsRsxzg",
    lang: "de",
    de: {
      title: "Digitale Profis: ChatGPT-Limit erreicht? KI besser nutzen",
      desc: "Praktischer Video-Tipp mit sieben Ansätzen, wie Chatbots und KI-Tools im Alltag effizienter genutzt werden können.",
    },
    tr: {
      title: "Digitale Profis: ChatGPT limiti mi doldu? Yapay zekâyı daha doğru kullan",
      desc: "Chatbotları ve KI/YZ araçlarını günlük kullanımda daha verimli kullanmak için yedi pratik yaklaşım.",
    },
  },
  {
    id: "minimax-m3-claude-opus-rakip",
    date: "2026-06-03",
    youtube: "PCjMw28_zAI",
    lang: "tr",
    de: {
      title: "MiniMax M3: Offenes Coding-Modell als Claude-Opus-Rivale",
      desc: "Ömer Göçmen ordnet das neue MiniMax M3 ein: ein ambitioniertes Open-Source-Modell für Coding, Automatisierung und agentische Workflows.",
    },
    tr: {
      title: "Yeni MiniMax M3: Kodlamada Claude Opus'a rakip açık kaynak model",
      desc: "Ömer Göçmen, MiniMax M3'ün kodlama, otomasyon ve ajan tabanlı iş akışlarında neden iddialı bir açık kaynak alternatif olduğunu anlatıyor.",
    },
  },
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
  {
    id: "ki-job-luege-claude-opus",
    date: "2026-06-03",
    youtube: "ui2418ZlUYM",
    lang: "de",
    de: {
      title: "KI-Joblüge, Claude Opus 4.8 & Chinas Roboter",
      desc: "Eine kritische Einordnung aktueller KI-Entwicklungen: Job-Mythen, neue Modelle und der Wettlauf mit China.",
    },
    tr: {
      title: "YZ iş yalanı, Claude Opus 4.8 ve Çin'in robotları",
      desc: "Güncel yapay zekâ gelişmelerinin eleştirel bir değerlendirmesi: iş mitleri, yeni modeller ve Çin ile yarış.",
    },
  },
  {
    id: "claude-code-reicht-nicht",
    date: "2026-06-03",
    youtube: "hAdmhDMYauk",
    lang: "de",
    de: {
      title: "Claude Code reicht nicht mehr",
      desc: "Warum KI-Entwicklungstools an ihre Grenzen stoßen – und was jetzt kommt.",
    },
    tr: {
      title: "Claude Code artık yeterli değil",
      desc: "YZ geliştirme araçları neden sınırlarına ulaşıyor – ve sırada ne var.",
    },
  },
  {
    id: "claude-isletim-sistemi",
    date: "2026-06-03",
    youtube: "BxHr8kMfl3s",
    lang: "tr",
    de: {
      title: "Claudes unglaubliche Verwandlung vom Chatbot zum Betriebssystem",
      desc: "Wie sich Claude von einem reinen Chatbot zu einer Betriebssystem-Plattform entwickelt.",
    },
    tr: {
      title: "Chatbot'tan İşletim Sistemine: Claude'un İnanılmaz Dönüşümü",
      desc: "Claude'un salt bir sohbet robotundan işletim sistemi platformuna nasıl dönüştüğü.",
    },
  },
  {
    id: "hermes-agent-sifirdan",
    date: "2026-06-03",
    youtube: "2NuvYsXMehw",
    lang: "tr",
    de: {
      title: "Hermes Agent von Grund auf lernen",
      desc: "Kompletter Kurs: Wie man Hermes Agent von Null auf meistert und 100x stärker nutzt.",
    },
    tr: {
      title: "Hermes Agent'ı Sıfırdan Öğren, Herkesten 100 Kat Güçlü Kullan",
      desc: "Hermes Agent'ı sıfırdan öğrenmek ve herkesten 100 kat daha güçlü kullanmak için tam kurs.",
    },
  },
];

/* Für app.js verfügbar machen / app.js için erişilebilir kıl */
window.CATEGORIES = CATEGORIES;
window.POSTS = POSTS;
window.TIPS = TIPS;
