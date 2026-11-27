# SDI Deutschland – Website

**Status: Website noch nicht veröffentlicht.** Der Entwurf wird lokal entwickelt. GitHub Pages, andere Website-Deployments, STRATO und DNS bleiben bis zur ausdrücklichen Abnahme unverändert. Das öffentliche Repository [secours765/sdi-website](https://github.com/secours765/sdi-website) ist angelegt; der geprüfte Erstpush und die weiteren Testergebnisse werden im [Abnahmeprotokoll](docs/ABNAHME.md) festgehalten.

Dieses eigenständige Projekt gehört zu SDI Deutschland und ist von JM APPS und anderen Projekten getrennt. Die Website stellt die Arbeit von Secours Dentaire International in Kamerun und Uganda sowie das **Vorhaben im Südsudan in Vorbereitung** vor. Sie bietet Dokumentdownloads, direkte E-Mail-Anfragen und deutsche Überweisungsdaten. Es gibt keinen Zahlungsdienst, kein Versandformular, kein Benutzerkonto und kein Tracking.

## Lokal starten

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
| Startseite | Vorstellung, Projekte, Mitmachen und Spenden |
| Wir über uns | Ziele, Arbeitsweise, Verbindung zu SDI Schweiz, Ansprechpartner |
| Projekte | Übersicht und eigene Seiten für Kamerun, Uganda und Südsudan |
| Uganda | Quellenbasierte Entwicklungsgeschichte mit Meilensteinen und Bildern |
| Downloads | Dokumentkatalog mit Suche, Kategorien, Sprache und Quellenhinweisen |
| Mitmachen | Ablauf und projektbezogene E-Mail-Anfragen |
| Spenden | Deutsche Bankverbindung, Kopieren und EPC-QR-Code |
| Kontakt | Sichtbare E-Mail-Adressen und direkte Kontaktwege |
| Impressum und Datenschutz | Abgeglichene deutsche Angaben mit dokumentierten Freigabepunkten |

## Wo Inhalte gepflegt werden

| Datei oder Ordner | Inhalt |
| --- | --- |
| `src/data/site.json` | Organisationsangaben, Kontakte, Spendenangaben und Entwurfsstatus |
| `src/data/team.json` | Namen, belegte Beschreibungen, Kontakte und zugeordnete Portraits |
| `src/data/projects.json` | Projekttexte, Status, Chronologie und Bildzuordnung |
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

Ein späterer GitHub-Pages-Unterpfad lässt sich lokal prüfen:

```powershell
$env:SDI_BASE = '/sdi-website/'
npm.cmd run build
npm.cmd run preview
```

Dann `/sdi-website/` öffnen. Anschließend `Remove-Item Env:SDI_BASE` ausführen und für die lokale Domainwurzel erneut bauen. Keine Produktionsdomain und keine `CNAME`-Datei ohne Bestätigung setzen.

## Pflegen und sichern

- [Änderung mit Codex durchführen](docs/AENDERUNG-MIT-CODEX.md) – alltäglicher Ablauf und persönliche Übung.
- [Inhalte, Bilder und Dokumente](docs/INHALTE-UND-QUELLEN.md) – Fakten, Chronologie, Bildrechte und Katalogpflege.
- [Veröffentlichung und Rückkehr](docs/VEROEFFENTLICHUNG.md) – Eigentum, Zweige, GitHub Pages und `git revert`.
- [STRATO-Checkliste](docs/STRATO-CHECKLISTE.md) – spätere Domainphase, E-Mail-Erhalt und Rückweg.
- [Abnahmeprotokoll](docs/ABNAHME.md) – Prüfungen, offene Angaben und persönliche Übergabe.
- [AGENTS.md](AGENTS.md) – verbindliche Regeln für weitere Arbeiten mit Codex.

Der ursprüngliche Materialordner bleibt unverändert. Interne Extraktionen, vollständige Präsentationen und Sicherungen liegen außerhalb des öffentlichen Repositorys. OneDrive-Synchronisierung allein ist kein Nachweis einer unabhängigen Sicherung. Konkreter Sicherungsstand und lokale Ablageorte werden im privaten Arbeitsbereich protokolliert.

Für fremde Texte, Fotos, Logos und Dokumente wird keine pauschale freie Lizenz vergeben. Vorhandene Urheber- und Lizenzhinweise bleiben erhalten. Öffentliche Lesbarkeit erteilt fremden Personen keine Schreibrechte.
