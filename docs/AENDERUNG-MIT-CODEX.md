# Änderung mit Codex durchführen

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

3. **Änderung genau beschreiben.** Beispiel: „Ändere nur die Einleitung auf der Mitmachen-Seite in folgenden bestätigten Text: … Zeige mir den Vergleich und prüfe lokal. Noch nicht veröffentlichen.“ Neue Tatsachen mit Quelle oder Bestätigung angeben.

4. **Lokal ansehen und prüfen.** Mit `npm.cmd run dev` die betroffene Seite öffnen. Anschließend:

   ```powershell
   npm.cmd run check
   npm.cmd run build
   npm.cmd run check:links
   git diff --check
   git diff
   ```

   Bei Bildern, Galerie, Filtern oder Navigation auch Smartphonebreite, Tastaturbedienung und Browserfunktion prüfen. Nur tatsächlich durchgeführte Prüfungen protokollieren.

5. **Veröffentlichung ausdrücklich beauftragen.** Erst nach Sichtprüfung sagen: **„Diese geprüfte Änderung veröffentlichen.“** Eine bloße Textänderung oder ein lokaler Commit ist keine solche Freigabe. Solange Pages noch nicht aktiviert ist, die erstmalige Websiteveröffentlichung gesondert beauftragen.

6. **Geprüften Stand sichern und übernehmen.** Nur beabsichtigte Dateien aufnehmen; vor dem Commit `git diff --cached` prüfen. Danach committen, den geprüften Arbeitszweig nach `main` übernehmen und `main` pushen. Bei zwischenzeitlichen Änderungen zuerst aktualisieren, Konflikte auflösen und erneut prüfen. Keine unbekannten Dateien pauschal hinzufügen.

7. **Ergebnis kontrollieren.** Nach späterer Deploymentaktivierung Build und Deploymentstatus für genau diesen Commit prüfen. Die tatsächliche Website öffnen, Änderung und wichtige Links kontrollieren. Bei Fehlern nach [Veröffentlichung und Rückkehr](VEROEFFENTLICHUNG.md) vorgehen.

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
