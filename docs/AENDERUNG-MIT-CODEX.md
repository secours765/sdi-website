# Änderung mit Codex durchführen

## Aktueller Erststart und spätere Änderungen

Der GitHub-Pages-Erststart wurde jetzt ausdrücklich autorisiert und wird auf `work/pages-erststart-2026-11-27` vorbereitet. Ziel ist `https://secours765.github.io/sdi-website/`; ein erfolgreicher Live-Start wird erst nach Deployment und Kontrolle bestätigt. Der vorherige lokale Stand ist auf `sicherung/vor-pages-2026-11-27` gesichert.

Die Erststartfreigabe gilt nicht dauerhaft: Ein späterer Änderungswunsch erlaubt weiterhin nur Bearbeitung auf einem Arbeitszweig und lokale Prüfung. Nicht nach `main` übernehmen und nichts veröffentlichen, bis dafür ein ausdrücklicher Auftrag vorliegt. Der Informations- und Spendenauftritt bleibt ohne Mitarbeit-/Bewerbungsangebote.
## Der normale Ablauf

1. **Projekt öffnen und Zustand prüfen.** In VS Code den Ordner „SDI-Website“ öffnen. Codex beauftragen: „Lies AGENTS.md und prüfe zuerst den Git-Zustand. Veröffentliche noch nichts.“

   ```powershell
   git status
   git branch --show-current
   git remote -v
   ```

   Der Remote muss zum beabsichtigten Repository unter secours765 gehören.

2. **Aktuellen Stand laden.** Zuerst ungesicherte Änderungen ansehen und bewusst lokal sichern. Nicht blind `reset --hard`, Dateien löschen oder Änderungen verwerfen. Bei sauberem Arbeitsbaum:

   ```powershell
   git fetch origin
   git switch main
   git pull --ff-only
   git switch -c text/projektbeschreibung
   ```

   Schlägt `--ff-only` fehl, Unterschiede prüfen und den Grund klären. Keine Historie erzwingen.

3. **Änderung genau beschreiben.** Beispiel: „Ändere nur die Einleitung auf der Downloadseite in folgenden bestätigten Text: … Zeige mir den Vergleich und prüfe lokal. Noch nicht veröffentlichen.“ Neue Tatsachen mit Quelle oder Bestätigung angeben.

4. **Lokal ansehen und prüfen.** Mit `npm.cmd run dev` die betroffene Seite öffnen. Anschließend:

   ```powershell
   npm.cmd run check
   npm.cmd run build
   npm.cmd run check:links
   git diff --check
   git diff
   ```

   Bei Bildern, Galerie, Filtern oder Navigation auch Smartphonebreite, Tastaturbedienung und Browserfunktion prüfen. Nur tatsächlich durchgeführte Prüfungen protokollieren.

5. **Veröffentlichung ausdrücklich beauftragen.** Erst nach Sichtprüfung sagen: **„Diese geprüfte Änderung veröffentlichen.“** Eine bloße Textänderung oder ein lokaler Commit ist keine solche Freigabe. Die aktuelle Erststartfreigabe ersetzt diese ausdrückliche Freigabe für spätere Änderungen nicht.

6. **Geprüften Stand sichern und übernehmen.** Nur beabsichtigte Dateien aufnehmen; vor dem Commit `git diff --cached` prüfen. Nach ausdrücklicher Veröffentlichungsfreigabe committen, den geprüften Arbeitszweig pushen und einen Pull Request nach `main` öffnen. Änderungen und erfolgreiche Prüfungen kontrollieren und den Pull Request zusammenführen. `main` ist der Produktionszweig; der Merge löst den Pages-Workflow aus. Der Eigentümer darf dies selbst erledigen, eine zweite freigebende Person ist nicht vorgeschrieben. Bei zwischenzeitlichen Änderungen zuerst aktualisieren, Konflikte auflösen und erneut prüfen. Keine unbekannten Dateien pauschal hinzufügen.

7. **Ergebnis kontrollieren.** Build und Deploymentstatus für genau den übernommenen Commit prüfen. Die tatsächliche Website öffnen, Änderung und wichtige Links kontrollieren. Bei Fehlern nach [Veröffentlichung und Rückkehr](VEROEFFENTLICHUNG.md) vorgehen.

## Einen freigegebenen main-Stand erneut veröffentlichen

Wenn ein erneuter Lauf ausdrücklich gewünscht ist, etwa nach einer freigegebenen Änderung der Pages-Domain: in GitHub **Actions → Website veröffentlichen → Run workflow** öffnen und **Branch: main** wählen. Vorher prüfen, dass der aktuelle `main`-Stand der Freigabe entspricht. Der Workflow bezieht Domain und Basispfad aus den Pages-Einstellungen und baut erneut. Nach Erfolg tatsächliche URL, Canonical-URLs, Sitemap, Bilder und Downloads kontrollieren. Andere Zweige dürfen nicht veröffentlichen.

Dieser manuelle Lauf braucht ebenso eine ausdrückliche Freigabe; ein Textänderungswunsch allein reicht nicht. Zum Rückgängigmachen bevorzugt einen geprüften `git revert` auf einem Arbeitszweig und anschließend einen ausdrücklich freigegebenen Pull Request nach `main` verwenden, siehe [Veröffentlichung und Rückkehr](VEROEFFENTLICHUNG.md).

## Kleine persönliche Übung

Diese Übung ist **vorbereitet, aber noch nicht durchgeführt**. Sie wird erst abgeschlossen, wenn der Kontoinhaber den Ablauf selbst erfolgreich ausgeführt hat.

- Eigenen Übungszweig `uebung/erste-textaenderung` erstellen.
- Auf der Startseite einen kurzen, sachlich unveränderten Einleitungssatz umformulieren. Keine Bank-, Rechts- oder Projektstatusangaben ändern.
- Mit Codex die richtige Inhaltsdatei finden und genau diesen Satz bearbeiten.
- Lokale Vorschau starten und die Änderung am Bildschirm erkennen.
- `git diff` lesen: Es dürfen nur die beabsichtigten Textänderungen vorkommen.
- Inhaltsprüfung und Build durchführen, anschließend einen lokalen Commit mit verständlicher Nachricht erstellen.
- Die Änderung mit einem eigenen `git revert <Commit-ID>` wieder zurücknehmen und erneut prüfen.

Die lokale Übung benötigt keine öffentliche Website. Eine spätere echte Veröffentlichung erst nach ausdrücklicher Freigabe üben. Im [Abnahmeprotokoll](ABNAHME.md) Datum, selbst ausgeführte Schritte und verbliebene Fragen eintragen.
