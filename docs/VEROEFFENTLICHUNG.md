# Veröffentlichung und Rückkehr

## Aktuelle Grenze

**Die Website ist noch nicht veröffentlicht.** Der Startauftrag erlaubt das neue öffentliche Repository, geprüfte erste Commits/Pushes und geeignete große Originaldownloads als Release-Assets. Er erlaubt keine öffentliche Website, keine öffentliche Vorschauplattform, keine STRATO- oder DNS-Änderung.

Quellcode und eingecheckte Dateien sind in einem öffentlichen Repository weltweit lesbar. Andere Personen erhalten dadurch keine Schreibrechte. Eigentümer bleibt `secours765`; weitere Mitbearbeiter nur nach ausdrücklicher Benennung.

Das öffentliche Repository [secours765/sdi-website](https://github.com/secours765/sdi-website) wurde unter dem authentifizierten Eigentümer secours765 angelegt. GitHub Pages ist deaktiviert. Erstpush, Schutzfunktionen und abschließende Prüfungen werden im Abnahmeprotokoll festgehalten.

## GitHub-Anmeldung und Sicherheit

Die aktuell angemeldete Identität vor Repositoryaktionen prüfen:

```powershell
gh auth status
gh api user --jq .login
```

Nur `secours765` ist für diesen Auftrag das richtige Konto. Die offizielle Browser-/Geräteanmeldung lautet:

```powershell
gh auth login --hostname github.com --git-protocol https --web
```

Der Kontoinhaber gibt Passwort und gegebenenfalls Zwei-Faktor-Code ausschließlich auf der offiziellen GitHub-Seite ein. Niemals Tokens, Passwörter oder Wiederherstellungscodes in den Chat schicken.

Der Kontoinhaber möchte die Zwei-Faktor-Einrichtung vorerst zurückstellen. Sie ist keine Voraussetzung für den aktuellen Aufbau und wird nicht ohne weiteren Auftrag geändert. Bei später gewünschter Einrichtung: GitHub **Settings → Password and authentication** öffnen und persönlich konfigurieren. Wiederherstellungsmöglichkeiten an einem sicheren, vom PC unabhängigen Ort aufbewahren, etwa im persönlichen Passwortmanager und gegebenenfalls als geschützte Offline-Sicherung. Keine Codes im Repository, in dieser Dokumentation oder in Screenshots ablegen.

Soweit verfügbar Schutz vor Force-Push und Löschen des Produktionszweigs sowie Sicherheitswarnungen aktivieren. Actions nur notwendige Rechte geben. Keine Verpflichtung zur Freigabe durch eine zweite Person: Der Eigentümer muss allein pflegen können. Tatsächlich eingestellten Schutz protokollieren, nicht seine bloße Verfügbarkeit als Aktivierung ausgeben.

## Erst später: Pages aktivieren

Die Datei [deployment/pages.yml.example](deployment/pages.yml.example) ist **inaktiv**, weil sie außerhalb von `.github/workflows/` liegt und keine Workflow-Endung besitzt.

Nach ausdrücklicher Abnahme und Veröffentlichungsanweisung:

1. Offene Inhalte, Empfängerdaten, Impressum, Datenschutz, Bildrechte und Downloadausnahmen prüfen.
2. Den tatsächlich geprüften Commit auf `main` festlegen. `dist/` aus genau diesem Stand bauen.
3. Aktuelle GitHub-Dokumentation und Action-Versionen erneut prüfen. Vorlage mit den tatsächlichen Projektskripten abgleichen.
4. Für eine Projektadresse unter `secours765.github.io/sdi-website/` den Basiswert `/sdi-website/` verwenden. Eigene Domain erst nach gesonderter Bestätigung konfigurieren.
5. In GitHub **Settings → Pages → Source: GitHub Actions** auswählen und die Umgebung `github-pages` ausschließlich für `main` zulassen.
6. Die geprüfte Vorlage nach `.github/workflows/pages.yml` übernehmen. Dies ist ein Veröffentlichungsschritt und jetzt noch nicht erlaubt.
7. Nach ausdrücklicher Freigabe den Aktivierungsstand nach `main` pushen. Nur ein Push auf `main` startet das Deployment; Pull Requests und andere Zweige veröffentlichen nichts.
8. Nur den Website-Ausgabeordner `dist/` hochladen. Nie den gesamten Checkout oder interne Materialien deployen.
9. Workflow und Deployment für den konkreten Commit bis zum Erfolg prüfen. Tatsächliche URL öffnen und Navigation, Bilder, Downloads, Kontakt- und Spendenfunktionen kontrollieren.
10. Erst nach erfolgreicher Kontrolle den Status in README und Abnahmeprotokoll ändern. Für Suchmaschinen den Entwurfsschutz in `public/robots.txt` und gegebenenfalls Seiten-Metadaten bewusst überprüfen.

Die Vorlage ist keine vorweggenommene Zusage, dass ein künftiges Deployment unverändert funktioniert. [Offizielle Anleitung zu eigenen Pages-Workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## Spätere Änderungen

`main` ist nach erster Abnahme der Produktionszweig. Änderungen entstehen auf Arbeitszweigen, werden lokal geprüft und erst auf ausdrücklichen Veröffentlichungsauftrag nach `main` übernommen. Der einmal autorisierte Erstpush ist keine dauerhafte Freigabe.

Ein erfolgreicher Build allein bestätigt weder sachliche Richtigkeit noch Veröffentlichung. Bei fehlgeschlagenem Deployment bleibt der zuletzt erfolgreiche Stand maßgeblich; tatsächliches Verhalten und URL prüfen.

## Zu einem funktionierenden Stand zurückkehren

Zunächst `git status` und Historie ansehen:

```powershell
git log --oneline -12
git show <Commit-ID>
```

Bei einer fehlerhaften bereits veröffentlichten Änderung bevorzugt auf einem Arbeitszweig einen nachvollziehbaren Gegencommit erstellen:

```powershell
git switch -c korrektur/ruecknahme
git revert <Fehlerhafter-Commit>
npm.cmd run check
npm.cmd run build
npm.cmd run check:links
```

Konflikte sorgfältig auflösen und tatsächlichen Inhalt prüfen. Bei Merge-Commits ist eine besondere Auswahl des Hauptelternteils nötig; nicht blind `git revert -m` ausführen. Danach lokale Vorschau ansehen und Veröffentlichung der Rücknahme ausdrücklich beauftragen. Erst dann nach `main` übernehmen und pushen, Deployment und Website kontrollieren.

Kein `push --force`, kein blindes `reset --hard` und keine Historienüberschreibung als Routine-Rückweg. Falls ein Geheimnis veröffentlicht wurde, reicht ein gewöhnlicher Revert nicht: Zugang unverzüglich widerrufen und das gezielte Bereinigen der Historie gesondert bearbeiten.
