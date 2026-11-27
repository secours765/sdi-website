# Veröffentlichung und Rückkehr

## Aktueller Erststart

**Status: veröffentlicht und live geprüft am 27.11.2026.** Website: [secours765.github.io/sdi-website/](https://secours765.github.io/sdi-website/). Erststart-Commit: 45d3d88dd983ce5fe3f1d1dc33ebab3ef3fc4f92. [Pages-Workflow erfolgreich](https://github.com/secours765/sdi-website/actions/runs/46000897984). Navigation, Galerie, Spendenfunktionen, 404, Metadaten und alle 102 Website-Downloads wurden auf der tatsächlichen öffentlichen Adresse geprüft.

Die Umsetzung erfolgt auf `work/pages-erststart-2026-11-27`. Der vorherige lokale Stand `4c78cd8` wurde unter `sicherung/vor-pages-2026-11-27` gesichert. Die neue Freigabe erlaubt die Veröffentlichung des geprüften Erststarts einschließlich der Galerie-Überarbeitung; sie ersetzt für diesen konkreten Auftrag die frühere Beschränkung auf lokale Arbeit. Sie ist keine dauerhafte Freigabe für spätere Änderungen.

Das Impressum basiert auf ausdrücklichen Wunsch auf der alten deutschen Website, mit der bestätigten aktuellen Anschrift **Donnersbergstraße 6, 67117 Limburgerhof**. Die vorhandenen Telefon- und Identifikationsangaben der Altquelle werden übernommen. Die Altquelle enthält keine Vertretungs- oder Registerangaben; fehlende Angaben werden nicht erfunden. Es wird keine juristische Vollständigkeit behauptet.

**STRATO, DNS und die eigene Domain werden nicht geändert.** Für den Actions-basierten Pages-Erststart wird keine `CNAME`-Datei angelegt.

## Repository und Schutz

Das öffentliche Repository [secours765/sdi-website](https://github.com/secours765/sdi-website) gehört **secours765**. Der frühere geprüfte Erststand `b9056173179bdf96ea2a64cac6f0575a33ebe573` wurde bereits erfolgreich auf `main` gesichert; der geprüfte Erststart und die Nachkontrollen sind im Abnahmeprotokoll eingetragen.

Öffentliche Lesbarkeit von Quellcode und Dateien erteilt anderen Personen keine Schreibrechte. Weitere Mitbearbeiter werden nur nach ausdrücklicher Benennung hinzugefügt. Nur secours765 wurde als Mitbearbeiter festgestellt. Secret Scanning und Push Protection sind aktiviert. `main` ist vor Force-Push und Löschen geschützt; die Regeln gelten auch für Administratoren. Es gibt keine Pflicht zur Freigabe durch eine zweite Person. Diese Schutzregeln bleiben bestehen.

Die 13 großen Originaldokumente sind im öffentlichen Release [Dokumentation 2026-11](https://github.com/secours765/sdi-website/releases/tag/dokumentation-2026-11) bereitgestellt (zusammen 948.070.944 Byte). Die von GitHub gemeldeten Größen und SHA-256-Werte stimmen mit der geprüften Sammlung überein. Die zusätzliche anonyme Abrufprüfung aller 13 Release-Dateien und 178 aktiven Originalquellen war erfolgreich (Status, Dateisignatur und Gesamtgröße). Diese Dateien lädt der Browser technisch von GitHub, auch wenn der Aufruf über die SDI-Website erfolgt.

## GitHub-Anmeldung und Sicherheit

Vor Repositoryaktionen die tatsächliche Identität prüfen:

```powershell
gh auth status
gh api user --jq .login
```

Nur `secours765` ist für diesen Auftrag das richtige Konto. Offizielle Browser-/Geräteanmeldung:

```powershell
gh auth login --hostname github.com --git-protocol https --web
```

Der Kontoinhaber gibt Passwort und gegebenenfalls Zwei-Faktor-Code ausschließlich auf der offiziellen GitHub-Seite ein. Niemals Tokens, Passwörter oder Wiederherstellungscodes in den Chat schicken.

Die Zwei-Faktor-Einrichtung wurde auf Wunsch des Kontoinhabers vorerst zurückgestellt. Sie ist keine Voraussetzung dieses Auftrags und wird nicht ohne weiteren Auftrag geändert. Bei später gewünschter Einrichtung GitHub **Settings → Password and authentication** öffnen und persönlich konfigurieren. Wiederherstellungsmöglichkeiten an einem sicheren, vom PC unabhängigen Ort aufbewahren, etwa im persönlichen Passwortmanager und gegebenenfalls als geschützte Offline-Sicherung. Keine Codes in Repository, Dokumentation oder Screenshots ablegen.

## Produktionsworkflow

Der aktive Workflow wird in `.github/workflows/pages.yml` geführt. `main` ist der Produktionszweig.

- Ein Push/Merge auf `main` startet den Veröffentlichungsablauf.
- `workflow_dispatch` ermöglicht einen bewusst gestarteten Lauf über **Actions → Website veröffentlichen → Run workflow → Branch: main**.
- Beide Jobs prüfen zusätzlich, dass der Ref `refs/heads/main` ist und das Ereignis ein erlaubter Push oder manueller Lauf ist.
- Pull Requests und andere Zweige veröffentlichen nicht. Auch die Pages-Umgebung `github-pages` lässt ausschließlich `main` zu.
- Der Build-Job erhält nur Leserechte. Nur der Deploy-Job erhält `pages: write` und `id-token: write`.
- Das Deployment wartet auf den erfolgreichen Build und die Prüfungen. Ausschließlich der Ausgabeordner `dist/` wird als Pages-Artefakt hochgeladen, niemals der ganze Checkout oder interne Arbeitsmaterialien.

`actions/configure-pages` läuft **vor** dem Build. Seine Ausgabe `origin` wird als `SDI_SITE`, `base_path` als `SDI_BASE` an den Build übergeben. Die Linkprüfung erhält dieselben Werte. Für den Erststart ergeben sich daraus die Domain `https://secours765.github.io` und der Unterpfad `/sdi-website/`; nach einer gesondert beauftragten Domainumstellung kommen die dann gültigen Werte aus den Pages-Einstellungen. Diese Ableitung verhindert fest eingetragene alte Domain- oder Unterpfadangaben.

Die Datei [deployment/pages.yml.example](deployment/pages.yml.example) ist eine inaktive Referenzkopie des aktuellen Workflows. Maßgeblich ist .github/workflows/pages.yml; Änderungen an beiden Fassungen gemeinsam pflegen. [Offizielle Pages-Workflow-Anleitung](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## Erststart kontrollieren

1. Den tatsächlich geprüften Stand auf `main` festlegen und die zugehörige Commit-ID notieren.
2. In GitHub **Settings → Pages → Source: GitHub Actions** verwenden; die Umgebung `github-pages` nur für `main` zulassen.
3. Den ausdrücklich autorisierten Stand über den vorgesehenen Arbeitszweig, Prüfung und Pull Request nach `main` übernehmen.
4. Build und Deployment für genau diesen Commit bis zum Erfolg verfolgen.
5. Die tatsächliche URL öffnen. Startseite, Projektseiten, Länder-Galerien, Downloads, Kontakt- und Spendenfunktionen kontrollieren.
6. Canonical-URLs, Sitemap, Bilder und weitere Assets auf richtige Domain und richtigen Unterpfad prüfen. Entwurfsschutz in `robots.txt` und Seiten-Metadaten bewusst mit dem Veröffentlichungsstand abgleichen.
7. Erst nach erfolgreicher Live-Kontrolle README und Abnahmeprotokoll auf den tatsächlichen Status bringen. Offene persönliche Prüfungen bleiben offen, bis sie tatsächlich durchgeführt wurden.

Ein erfolgreicher Build allein bestätigt weder sachliche Richtigkeit noch eine erfolgreiche Veröffentlichung. Bei einem fehlgeschlagenen Deployment den zuletzt erfolgreichen Stand und die tatsächliche URL prüfen.

## Spätere Änderungen und erneute Läufe

Spätere Änderungswünsche erlauben zunächst nur einen Arbeitszweig und lokale Bearbeitung/Prüfung. Erst **„Diese geprüfte Änderung veröffentlichen“** erlaubt die produktive Übernahme nach `main`. Die Erststartfreigabe gilt nicht dauerhaft.

Nach einer ausdrücklichen Freigabe den geprüften Arbeitszweig sichern, einen Pull Request nach `main` öffnen, Änderungen und Prüfungen kontrollieren und zusammenführen. Der Eigentümer darf dies allein durchführen; eine zweite Person ist nicht vorgeschrieben. Der Merge löst die Veröffentlichung aus.

Ein manueller Lauf veröffentlicht den dann aktuellen `main`-Stand. Deshalb vor **Run workflow** den Stand und die Freigabe prüfen. Ein erneuter Lauf ist insbesondere nach einer gesondert beauftragten Änderung der Pages-Domain nötig, damit die Website mit den neuen Domainmetadaten gebaut wird. Der manuelle Start ist kein Weg, Prüfungen oder Freigaben zu umgehen. [GitHub: Workflow manuell ausführen](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow)

## Später: eigene Domain

Diese Schritte sind **nicht Teil des jetzigen Erststarts**. Nach gesonderter Freigabe zuerst die [STRATO-Checkliste](STRATO-CHECKLISTE.md) mit Sicherung, Domainverifizierung und Erhalt aller E-Mail-Einträge abarbeiten.

In GitHub unter **Settings → Pages → Custom domain** die bestätigte Domain eintragen und **Save** wählen. Die geplanten DNS-Änderungen gezielt ausführen; **Enforce HTTPS** aktivieren, sobald Zertifikat und Einstellung bereit sind. Danach ausdrücklich **Actions → Website veröffentlichen → Run workflow → Branch: main** starten. `configure-pages` liefert beim neuen Lauf die geänderte Domain und den passenden Basispfad.

Nach erfolgreichem Lauf die neue URL, Canonical-URLs, Sitemap, Assets, Navigation und Downloads prüfen. Bei einem eigenen Actions-Workflow ist keine `CNAME`-Datei erforderlich. [GitHub: eigene Domain verwalten](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Zu einem funktionierenden Stand zurückkehren

Zunächst lokalen Zustand und Historie ansehen. Ungesicherte Änderungen nicht verwerfen:

```powershell
git status
git log --oneline -12
git show <Fehlerhafter-Commit>
```

Bei sauberem Arbeitsbaum den aktuellen Produktionsstand laden und einen Rücknahmezweig erstellen:

```powershell
git fetch origin
git switch main
git pull --ff-only
git switch -c korrektur/ruecknahme
git revert <Fehlerhafter-Commit>
npm.cmd run check
npm.cmd run build
npm.cmd run check:links
```

Konflikte sorgfältig auflösen und den tatsächlichen Inhalt prüfen. Bei Merge-Commits ist eine besondere Auswahl des Hauptelternteils nötig; nicht blind `git revert -m` ausführen. Zusätzlich die betroffenen Seiten lokal ansehen und den Pages-Unterpfad mit denselben `SDI_SITE`-/`SDI_BASE`-Werten für Build und Linkprüfung testen.

Danach die Veröffentlichung der Rücknahme ausdrücklich beauftragen. Erst mit dieser Freigabe den geprüften Rücknahmezweig pushen, einen Pull Request nach `main` öffnen, Prüfungen und Änderungen kontrollieren und zusammenführen. Anschließend Deployment und Live-Website für den Rücknahmecommit prüfen. Ein technischer Revert-Test wird nur dann als erfolgreich dokumentiert, wenn er tatsächlich durchgeführt wurde; das Ergebnis steht im Abnahmeprotokoll.

Kein `push --force`, kein blindes `reset --hard` und keine Historienüberschreibung als Routine-Rückweg. Der Sicherungszweig vor dem Erststart dient als Vergleich und Sicherung, nicht als Aufforderung zum erzwungenen Zurücksetzen von `main`. Falls ein Geheimnis veröffentlicht wurde, reicht ein gewöhnlicher Revert nicht: Zugang unverzüglich widerrufen und eine gezielte Historienbereinigung gesondert bearbeiten.

Die komplette Erstaktivierung nicht blind zurücknehmen: Ein Revert, der den Pages-Workflow entfernt, veröffentlicht keinen neuen Stand. Spätere Inhaltsänderungen gezielt zurücknehmen und den funktionierenden Deploymentweg erhalten.
