# SDI Deutschland – Website

**Status: GitHub-Pages-Erststart in Vorbereitung.** Die erste öffentliche Websiteveröffentlichung wurde jetzt ausdrücklich autorisiert. Ziel ist [secours765.github.io/sdi-website/](https://secours765.github.io/sdi-website/); ein erfolgreicher Live-Start wird erst nach Deployment und Kontrolle bestätigt. Die Arbeit erfolgt auf `work/pages-erststart-2026-11-27`. Der vorherige lokale Stand `4c78cd8` ist auf `sicherung/vor-pages-2026-11-27` gesichert. Das Repository [secours765/sdi-website](https://github.com/secours765/sdi-website) gehört secours765. STRATO, DNS und eigene Domain bleiben unverändert. Details und tatsächliche Testergebnisse stehen im [Abnahmeprotokoll](docs/ABNAHME.md).

Dieses eigenständige Projekt gehört zu SDI Deutschland und ist von JM APPS und anderen Projekten getrennt. Die Website stellt die Arbeit von Secours Dentaire International in Kamerun und Uganda sowie das **Vorhaben im Südsudan in Vorbereitung** vor. Sie bietet Projektinformationen, Länder-Galerien, Dokumentdownloads, allgemeine Kontaktinformationen und deutsche Überweisungsdaten. Mitarbeit, Bewerbungen und Einsatzangebote werden auf ausdrücklichen Nutzerwunsch nicht angeboten; zugehörige Links und E-Mail-Aufrufe gehören nicht zum aktuellen Entwurf. Es gibt keinen Zahlungsdienst, kein Versandformular, kein Benutzerkonto und kein Tracking.

## Lokal starten

Am einfachsten im Websiteordner **Start-Vorschau.cmd** doppelt anklicken. Das Fenster lässt den lokalen Server laufen. Aktuelle Adresse: **http://127.0.0.1:4321/**; Länder-Galerien unter **http://127.0.0.1:4321/galerie/**.


Im Terminal den **neuen Websiteordner** öffnen, nicht den Originalmaterialordner „SDI Homepage“:

```powershell
Set-Location -LiteralPath '<Projektordner SDI-Website>'
npm.cmd ci
npm.cmd run dev
```

Die vom Terminal ausgegebene lokale Adresse öffnen, üblicherweise `http://127.0.0.1:4321/`. Bei belegtem Port zählt die tatsächlich ausgegebene Adresse. Mit `Strg+C` den Server beenden. Eine lokale Vorschau ist keine Veröffentlichung.

Die verwendete portable Node-Installation liegt außerhalb des Repositorys im benachbarten Arbeitsbereich. Falls `node` oder `npm.cmd` nicht gefunden werden, kann ihr Pfad **nur für dieses Terminal** ergänzt werden:

```powershell
$nodeDir = Join-Path (Split-Path -Parent (Get-Location).Path) 'SDI-Arbeitsbereich\tools\node-native\node-v26.13.1-win-x64'
$env:PATH = $nodeDir + ';' + $env:PATH
node --version
npm.cmd --version
```

Das setzt voraus, dass das Terminal im Websiteordner steht und die Ablage dieser Struktur entspricht. Auf anderen PCs eine unterstützte Node.js-LTS-Version normal installieren. Keine PowerShell-Ausführungsrichtlinie ändern; `npm.cmd` ist der reguläre Windows-Aufruf ohne PowerShell-Skript.

## Auf einem weiteren Windows-PC einrichten

1. Git von [git-scm.com](https://git-scm.com/downloads/win), Node.js LTS von [nodejs.org](https://nodejs.org/en/download) und bei Bedarf die [GitHub CLI](https://cli.github.com/) installieren. Für diese statische Website ist kein OpenAI-API-Schlüssel nötig.
2. Auf GitHub im richtigen Konto anmelden. Repositorybesitzer ist **secours765**. Passwörter, Tokens und Wiederherstellungscodes niemals in Chat, Code oder Dokumente schreiben.
3. Das vorhandene öffentliche Repository klonen:

   ```powershell
   git clone https://github.com/secours765/sdi-website.git SDI-Website
   Set-Location -LiteralPath '.\SDI-Website'
   npm.cmd ci
   npm.cmd run dev
   ```

4. Die Lockdatei verwenden, nicht bei jeder Einrichtung alle Pakete aktualisieren. Genaue Paketversionen stehen in `package-lock.json`.
5. Originalsammlung und interne Auswertung separat sichern und bei Bedarf separat übertragen; sie gehören nicht zum Klon des öffentlichen Repositorys.

Die Einrichtung verwendet Windows 11, Windows PowerShell 5.1 und Node.js 26.13.1 LTS. Außerdem wurden npm 11.20.0, Git 2.56.1.windows.1 und GitHub CLI 2.106.0 festgestellt. Die Erstinstallation der Projektpakete war erfolgreich und meldete keine bekannten Sicherheitslücken. Weitere Prüfergebnisse stehen im [Abnahmeprotokoll](docs/ABNAHME.md).

## Seiten und Technik

Astro erzeugt statische HTML-Dateien. CSS und wenig JavaScript übernehmen Navigation, Downloadfilter, Galerie und Kopierfunktionen. Bilddateien werden in Webgrößen bereitgestellt; externe Schrift-, Karten-, Video- oder Analyse-Einbettungen sind nicht vorgesehen.

| Bereich | Zweck |
| --- | --- |
| Startseite | Vorstellung, Projekte, Galerie und Spenden |
| Wir über uns | Ziele, Arbeitsweise, Verbindung zu SDI Schweiz, Ansprechpartner |
| Projekte | Übersicht und eigene Seiten für Kamerun, Uganda und Südsudan |
| Uganda | Quellenbasierte Entwicklungsgeschichte mit Meilensteinen und Bildern |
| Downloads | Dokumentkatalog mit Suche, Kategorien, Sprache und Quellenhinweisen |
| Galerie `/galerie/` | Fotoübersicht mit Einstieg in die drei Länder-Galerien |
| Länder-Galerien | `/galerie/kamerun/`, `/galerie/uganda/`, `/galerie/suedsudan/` mit weiteren Projektfotos und Vergrößerung |
| Spenden | Deutsche Bankverbindung, Kopieren und EPC-QR-Code |
| Kontakt | Sichtbare E-Mail-Adressen und direkte Kontaktwege |
| Impressum und Datenschutz | Deutsches Quellenmaterial; Impressum nach alter Website mit bestätigter Donnersbergstraße 6, keine erfundenen Vertretungs- oder Registerangaben |

## Wo Inhalte gepflegt werden

| Datei oder Ordner | Inhalt |
| --- | --- |
| `src/data/site.json` | Organisationsangaben, Kontakte, Spendenangaben und Entwurfsstatus |
| `src/data/team.json` | Namen, belegte Beschreibungen, Kontakte und zugeordnete Portraits |
| `src/data/projects.json` | Projekttexte, Status, Chronologie und Bildzuordnung |
| `src/data/galleries.json` | Länder-Galerien, Fotoauswahl, Bildunterschriften und Alternativtexte |
| `src/data/downloads.json` | Titel, Kategorien, Sprachen, Originalquellen, Größen und Prüfsummen |
| `src/pages/` | Seitenaufbau und gegebenenfalls ergänzende Seitentexte |
| `src/components/` | Wiederverwendbare Gestaltung und Interaktion |
| `src/styles/global.css` | Farben, Abstände, Schriftgrößen und mobile Darstellung |
| `src/lib/paths.js` | Pfade für Domain/Unterverzeichnis sowie E-Mail-Links |
| `public/` | Bewusst ausgewählte, veröffentlichungsgeeignete statische Dateien |
| `scripts/` | Inhalts-, Link- und Browserprüfungen |
| `docs/` | Pflege, Quellen, Abnahme und spätere Veröffentlichung |

Vorhandene Dateneinträge als Vorlage nehmen und Feldnamen beibehalten. Nur benötigte Fakten veröffentlichen. Interne Quellenbelege und Auswertungsnotizen bleiben im separaten Arbeitsbereich.

## Prüfen

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run check:links
npm.cmd run preview
```

`preview` zeigt den gebauten Ausgabeordner `dist/`, üblicherweise unter `http://127.0.0.1:4321/`. Maßgeblich ist die Terminalausgabe. Die Browserprüfung wird mit `npm.cmd run check:browser` gestartet; Voraussetzungen und tatsächlich getestete Ergebnisse sind im Abnahmeprotokoll festzuhalten.

Bei Änderungen zusätzlich die betroffene Seite auf Desktop und Smartphonebreite ansehen. Navigation, Downloadsuche, Filter, Galerie, Tastaturfokus, E-Mail-Betreff und Kopierfunktionen gezielt prüfen. IBAN-Prüfziffer und QR-Decodierung prüfen das technische Format, nicht den Kontoinhaber. Ein Banking-App-Test ohne Zahlung gehört zur Abnahme.

Den autorisierten GitHub-Pages-Zielpfad mit denselben Umgebungswerten für Build und Linkprüfung lokal prüfen:

```powershell
$env:SDI_SITE = 'https://secours765.github.io'
$env:SDI_BASE = '/sdi-website/'
npm.cmd run build
npm.cmd run check:links
npm.cmd run preview
```

Dann in der lokalen Vorschau `/sdi-website/` öffnen. Anschließend `Remove-Item Env:SDI_BASE, Env:SDI_SITE -ErrorAction SilentlyContinue` ausführen und für die lokale Domainwurzel erneut bauen. Im Pages-Workflow liefert `actions/configure-pages` vor dem Build die Werte `origin` und `base_path` für `SDI_SITE` und `SDI_BASE`; Build und Linkprüfung verwenden dieselben Werte. Eine spätere eigene Domain wird gesondert bestätigt, nicht jetzt eingetragen. Für den Actions-basierten Pages-Betrieb ist keine `CNAME`-Datei erforderlich.

## Veröffentlichen und später pflegen

`main` ist der Produktionszweig. Der autorisierte Erststart richtet `.github/workflows/pages.yml` ein. Er baut und prüft die Website vor dem Deployment und lädt ausschließlich `dist/` hoch. Ein Push auf `main` oder ein bewusst gestarteter Lauf von **Actions → Website veröffentlichen → Run workflow → Branch: main** kann veröffentlichen. Andere Zweige und Pull Requests veröffentlichen nicht; beide Workflow-Jobs und die Umgebung `github-pages` sind auf `main` begrenzt.

Spätere Änderungswünsche erlauben weiterhin nur Bearbeitung auf einem Arbeitszweig und lokale Prüfung. Erst **„Diese geprüfte Änderung veröffentlichen“** erlaubt die produktive Übernahme. Die jetzige Erststartfreigabe ist keine dauerhafte Veröffentlichungsfreigabe. Auch ein manueller Workflowlauf setzt den ausdrücklichen Auftrag für den aktuellen Stand voraus.

Die spätere Domainumstellung und der nötige erneute Workflowlauf sind in der [STRATO-Checkliste](docs/STRATO-CHECKLISTE.md) beschrieben. Die vorhandenen Schutzregeln bleiben bestehen; eine zweite freigebende Person ist nicht vorgeschrieben.

## Pflegen und sichern

- [Änderung mit Codex durchführen](docs/AENDERUNG-MIT-CODEX.md) – alltäglicher Ablauf und persönliche Übung.
- [Inhalte, Bilder und Dokumente](docs/INHALTE-UND-QUELLEN.md) – Fakten, Chronologie, Bildrechte und Katalogpflege.
- [Veröffentlichung und Rückkehr](docs/VEROEFFENTLICHUNG.md) – Eigentum, Zweige, GitHub Pages und `git revert`.
- [STRATO-Checkliste](docs/STRATO-CHECKLISTE.md) – spätere Domainphase, E-Mail-Erhalt und Rückweg.
- [Abnahmeprotokoll](docs/ABNAHME.md) – Prüfungen, offene Angaben und persönliche Übergabe.
- [AGENTS.md](AGENTS.md) – verbindliche Regeln für weitere Arbeiten mit Codex.

Der ursprüngliche Materialordner bleibt unverändert. Interne Extraktionen, vollständige Präsentationen und Sicherungen liegen außerhalb des öffentlichen Repositorys. OneDrive-Synchronisierung allein ist kein Nachweis einer unabhängigen Sicherung. Konkreter Sicherungsstand und lokale Ablageorte werden im privaten Arbeitsbereich protokolliert.

Für fremde Texte, Fotos, Logos und Dokumente wird keine pauschale freie Lizenz vergeben. Vorhandene Urheber- und Lizenzhinweise bleiben erhalten. Öffentliche Lesbarkeit erteilt fremden Personen keine Schreibrechte.
