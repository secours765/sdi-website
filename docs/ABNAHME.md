# Abnahme- und Übergabeprotokoll

Stand: **27.11.2026**. Der Erststart über GitHub Pages ist ausdrücklich autorisiert. STRATO, DNS und eigene Domain bleiben unverändert.

## Stände und Sicherung

- Öffentlicher erster Quellstand: `b9056173179bdf96ea2a64cac6f0575a33ebe573`.
- Akzeptierte lokale Galerie-Revision: `4c78cd8`, gesichert auf `sicherung/vor-pages-2026-11-27`.
- Produktionsvorbereitung: `work/pages-erststart-2026-11-27`; keine neueren Remote-Änderungen an main beim Start. Der saubere lokale Ausgangsstand wurde erhalten.
- Ziel: https://secours765.github.io/sdi-website/
- Erstveröffentlichung: Commit 45d3d88dd983ce5fe3f1d1dc33ebab3ef3fc4f92, PR #2 regulär per Squash zusammengeführt. [Pages-Lauf 46000897984](https://github.com/secours765/sdi-website/actions/runs/46000897984) erfolgreich am 27.11.2026, 12:43 UTC. Website per HTTPS öffentlich erreichbar.
- Die anschließende Abnahmedokumentation ändert ausschließlich Dokumentation; Websitecode und Medien bleiben auf dem live geprüften Stand.

## Produktionsvorbereitung

- Akzeptiertes Design erhalten; keine Framework- oder pauschalen Paketupdates.
- Informationen, Spenden und 51 Fotos in Länder-Galerien (7 Kamerun, 22 Uganda, 22 Südsudan). Keine Mitarbeit-/Bewerbungsangebote oder E-Mail-Aktionslinks.
- Entwurfsleiste und Suchmaschinensperre für Inhaltsseiten entfernt. 404 bleibt nicht indexierbar.
- Eindeutige Seitentitel und Beschreibungen, Canonical-URLs, Open Graph/Twitter-Vorschau, Sitemap und dynamische robots.txt.
- Tatsächliche Bildabmessungen zentral erfasst; Startbild mit hoher Ladepriorität und zusätzlicher 800px-Version (82.322 statt 157.424 Byte). Nachgelagerte Fotos bleiben lazy.
- Impressumsangaben auf Nutzerwunsch von der alten deutschen Website übernommen, ausschließlich Anschrift zu Donnersbergstraße 6 geändert. Fehlende gesetzliche Vertretung/Registernummer nicht erfunden.
- Datenschutz für tatsächliches GitHub-Pages-Hosting, Verbindungsdaten, externe Downloads, Kontakt, Browserfunktionen und Rechte beschrieben. Keine juristische Prüfung behauptet.
- Pages-Konfiguration vor Build: `origin → SDI_SITE`, `base_path → SDI_BASE`. Build und Linkprüfung verwenden dieselben Werte.
- Nur main darf per Push/Merge oder manuellem Workflow veröffentlichen. Build mit Leserechten; Deploy mit Pages-/OIDC-Rechten; ausschließlich dist als Artefakt.

## Tatsächlich ausgeführte Prüfungen des Produktionsstands

- [x] Inhalt: drei Projekte, Südsudan weiterhin „In Vorbereitung“, 184 inventarisierte Dokumentverweise, lokale Dateigrößen/SHA-256, bereinigte Bildmetadaten.
- [x] Deutsche IBAN-Prüfziffer und EPC-QR-Decodierung erfolgreich; Betrag frei, keine Zahlung ausgeführt.
- [x] Build für /sdi-website/: 16 HTML-Seiten plus Sitemap/robots; 656 interne Ziele mit exakter Groß-/Kleinschreibung, Bildmaße und Metadaten geprüft; Ausgabe rund 179,5 MiB.
- [x] Domainwurzel mit absichtlich anderer Test-Origin https://sdi-domain.invalid: Build, Links, Canonicals, Sitemap und robots erfolgreich. Keine Testadresse wird veröffentlicht.
- [x] Alle 15 Inhaltsseiten auf Desktop 1440px und Smartphone 390px: Bilder vollständig, keine horizontalen Überläufe. axe: 0 Verstöße auf allen Desktopseiten und den zusätzlich geprüften zentralen Mobilseiten. Startseite und Uganda-Timeline zusätzlich visuell geprüft.
- [x] Downloadsuche, Kategorie/Sprache, Leerzustand, Reset, lokaler Download, Galerie Vor/Zurück/Pfeiltasten/Escape/Fokusrückkehr, mobile Navigation, Skip-Link und IBAN-Kopieren bestanden. Keine E-Mail-Aktionslinks wiederhergestellt.
- [x] Direkte 404-Seite mit HTTP 404 und funktionierendem Rückweg; Timeline-Abstände bei 390, 768, 1024 und 1440px geometrisch geprüft, ohne Überschneidung.
- [x] Isolierte Revert-Probe auf 3907b2f: temporäre README-Änderung 92e543d mit git revert als 99aa77d zurückgenommen. Git-Baum danach exakt identisch mit dem zuvor geprüften Ausgangsstand, Arbeitsbaum sauber. Keine Probecommits nach main übernommen oder veröffentlicht.
- [x] Linux-CI für Arbeitszweig und Pull Request erfolgreich (46000596015 / 46000721813), einschließlich npm ci, Inhaltsprüfung und beiden Adressvarianten. Main-CI 46000897894 und Pages-Build/Deployment 46000897984 erfolgreich für 45d3d88dd983ce5fe3f1d1dc33ebab3ef3fc4f92.
- [x] Live-Browserprüfung aller 15 Inhaltsseiten auf Desktop/Mobil erfolgreich: Bilder, axe, Navigation, Suche/Filter, Downloads, Galerie, Kopieren, Tastatur, 404 und Timeline. Keine Browserfehler festgestellt. Prüfbericht intern unter qa-pages-live.
- [x] Live-Metadaten auf allen 15 Inhaltsseiten: eindeutige Titel/Beschreibungen, korrekte Canonicals/Open Graph, keine lokalen oder Testadressen. robots erlaubt Indexierung, Sitemap enthält genau 15 Inhaltsseiten; unbekannte Route liefert die eigene 404-Seite mit HTTP 404.
- [x] 102/102 lokale Website-Dateien ohne Anmeldung per HTTP 200/206, Dateisignatur und exakter Gesamtgröße geprüft. Die 13 Release-Hauptlinks stimmen mit der öffentlichen API überein, 63 Original-Hauptlinks mit den geprüften Quellen. Zusammen mit den externen Abrufen wurden 293 Dokumentziele geprüft.
- [x] Live-Downloadseite: 180 Einträge, 178 Downloadaktionen. Geschützte und nicht erreichbare Datei ohne Downloadschaltfläche; vier zurückgezogene Dokumente weder als Zeile noch als Quellenlink vorhanden.

Die vorherige lokale Revision wurde bereits auf 15 Inhaltsseiten mit 1440px/390px, Galeriebedienung, Downloadfiltern, Kopieren, Tastatur und Timeline bei 390/768/1024/1440px geprüft. Das ist historische Evidenz; die erneute Produktionsprüfung ist oben dokumentiert.

## Dokumente: öffentliche externe Abrufe

Der Release [Dokumentation 2026-11](https://github.com/secours765/sdi-website/releases/tag/dokumentation-2026-11) wurde am 27.11.2026 veröffentlicht. Genau 13 Original-Assets, zusammen **948.070.944 Byte**, alle GitHub-Größen und SHA-256-Digests stimmen mit dem internen Manifest überein.

Am 27.11.2026 um 12:31 UTC wurden **191/191 externe Ziele anonym** abgerufen: 13 finale Release-URLs und 178 aktive Schweizer Originalquellen, darunter alle 63 bewusst extern belassenen Dateien. HTTP 200/206, passende Dateisignatur und Gesamtgröße überall bestätigt. Keine Cookies oder Authorization. Range-GET prüfte die Signatur und vollständige Größenangabe; die 948 MB wurden nicht nochmals vollständig heruntergeladen. Die Hashprüfung stützt sich auf zuvor heruntergeladene Originale und die von GitHub gemeldeten Asset-Digests.

Der sichtbare Katalog enthält 180 Einträge: 102 Website-Dateien, 13 Release-Dateien, 63 Originalverweise, eine geschützte und eine nicht erreichbare Quelle. Die vier Freiwilligeninfos doc-133–136 bleiben ausgeblendet und werden nicht bereitgestellt.

Bewusste Ausnahmen:

- Geschütztes MANUEL3.pdf: nicht abgerufen, kein Passwortschutz umgangen.
- Seminarflyer 2020: Quelle meldete HTTP 404, kein lokaler Download.
- 63 Originalverweise bleiben extern wegen Rechte-/Eignungsklärung (Presse/Archiv, Nachrufe, WHO-/CIPRET-Unterlagen, Veranstaltungsbilder).
- Schweizer/historische Konten und medizinische Texte sind ausdrücklich zeitlich und organisatorisch eingeordnet.

## Eigentum und Schutz

- Authentifiziertes Konto und Eigentümer: **secours765** (ID 361925335).
- Nur secours765 als Mitbearbeiter, keine offenen Einladungen.
- Secret Scanning, Push Protection und Dependabot-Sicherheitsupdates aktiviert.
- main: Force-Push/Löschen verboten, lineare Historie, Schutz auch für Administratoren; keine zweite Person vorgeschrieben.
- Pages: Quelle workflow, HTTPS erzwungen, keine Custom Domain.
- Umgebung github-pages: ausschließlich Branch main, keine Tag-Regel.
- Zwei-Faktor-Einrichtung auf ausdrücklichen Nutzerwunsch zurückgestellt.

## Originalmaterial und Werkzeuge

Originale in „SDI Homepage“ unverändert; interne Sicherung mit 81 SHA-256-identischen Dateien außerhalb des öffentlichen Repositorys. Drei einzigartige Präsentationen mit 65 Folien ausgewertet (XML, Bildzuordnungen und relevante Bilder; keine vollständige Office-Folienrenderung). Keine vollständigen Präsentationen oder privaten Auswertungen hochgeladen.

Windows 11 / PowerShell 5.1; Node 26.13.1, npm 11.20.0, Git 2.56.1.windows.1, gh 2.106.0. Abhängigkeiten unverändert über package-lock.json; CI verwendet npm ci.

## Noch nicht persönlich durchgeführt

Banking-App-Scan und Kontoinhaberabgleich ohne Zahlung sowie persönliche Pflegeübung wurden nicht als erledigt bestätigt. Impressumsangaben folgen dem Nutzerauftrag und der Altquelle; dies ist keine juristische Vollständigkeitsprüfung. Nicht belegte Registerdaten oder Vorstandsämter wurden nicht ergänzt. Fehlende Einzelportraits sind kein technischer Fehler und wurden nicht erfunden.

Künftige Änderungen bleiben auf Arbeitszweigen und in der Vorschau, bis ein ausdrücklicher Veröffentlichungsauftrag vorliegt. Der Erststart ist keine dauerhafte pauschale Freigabe. Rückweg und spätere Domainanbindung: [Veröffentlichungsanleitung](VEROEFFENTLICHUNG.md).
