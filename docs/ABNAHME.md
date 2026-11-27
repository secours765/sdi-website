# Abnahme- und Übergabeprotokoll

Stand: **27.11.2026**. Der geprüfte Erststand auf GitHub und die anschließende lokale Galerie-Revision sind getrennte Stände. Erfolgreiche Prüfungen des Erststands gelten nicht automatisch für spätere Änderungen.

## Bereitstellung

| Punkt | Stand |
| --- | --- |
| Öffentliche Website | **Noch nicht veröffentlicht** |
| Öffentliches Repository | [secours765/sdi-website](https://github.com/secours765/sdi-website) |
| Gesicherter Erststand auf `main` | `b9056173179bdf96ea2a64cac6f0575a33ebe573`, erfolgreich gepusht |
| GitHub-Buildprüfung des Erststands | Erfolgreich |
| Aktuelle Überarbeitung | Nur lokal auf `work/lokaler-entwurf-galerien`; kein Push dieser Änderungen |
| Lokale Vorschau | http://127.0.0.1:4321/ – laufender Server, HTTP 200 geprüft |
| GitHub Pages | Deaktiviert; `has_pages: false`, Pages-API antwortet mit 404 |
| Andere Website-/Previewdienste | Keine Veröffentlichung eingerichtet |
| STRATO / Domain / DNS | Keine Änderungen durchgeführt |
| Dokument-Release | 13 Originaldateien vollständig hochgeladen und mit GitHub-SHA-256/Größe abgeglichen; Release bleibt unveröffentlichter Entwurf |
| Persönliche Übergabeübung | Vorbereitet, noch nicht durch den Kontoinhaber durchgeführt |

## Werkzeuge

| Werkzeug | Tatsächlich festgestellter Stand |
| --- | --- |
| Windows | Windows 11, OS-Build 22631 |
| Shell | Windows PowerShell 5.1 |
| Node.js | 26.13.1 LTS, portable aus offizieller Quelle |
| npm | 11.20.0 |
| Astro / Projektpakete | Versionen reproduzierbar in `package-lock.json` |
| Git | 2.56.1.windows.1 |
| GitHub CLI | 2.106.0 |

Die projektlokale Erstinstallation war erfolgreich und meldete 0 bekannte Sicherheitslücken. Das beschreibt den damaligen Prüflauf, keine dauerhafte Zusicherung.

## Technische Prüfung des gesicherten Erststands

Die folgenden Ergebnisse betreffen den ursprünglichen Entwurf mit 12 Inhaltsseiten und zusätzlicher 404-Seite:

- [x] Inhaltsprüfung erfolgreich; Projektstatus und Quellenangaben kontrolliert.
- [x] Statischer Build an Domainwurzel und unter `/sdi-website/` erfolgreich: 13 erzeugte Seiten.
- [x] 453 interne Links geprüft; Ausgabegröße rund 171,4 MiB.
- [x] Alle 12 Inhaltsseiten auf Desktop und Smartphonebreite von 390 Pixeln im Browser geprüft.
- [x] Relevante Browserfunktionen und Bedienbarkeit geprüft; axe meldete in den ausgeführten Prüfungen 0 Verstöße. Dies ersetzt keine vollständige Barrierefreiheitszertifizierung.
- [x] Navigation, Galerie, Downloadsuche und Kategorie-/Sprachfilter geprüft.
- [x] E-Mail-Links und codierte Betreffzeilen geprüft; keine Nachricht versendet.
- [x] Kopierfunktionen geprüft.
- [x] IBAN-Prüfziffer und EPC-QR-Format geprüft; QR-Bild erfolgreich decodiert und mit Zahlungsdaten verglichen.
- [x] Geplanten öffentlichen Git-Bestand geprüft; nur ausgewählte Inhalte übernommen, interne Originalmaterialien ausgeschlossen.
- [x] Webbilder optimiert und Bildmetadaten bereinigt.
- [x] Erstcommit unter der bestätigten Identität von secours765 gepusht.
- [x] GitHub-Buildprüfung für den Erststand erfolgreich.
- [x] Kein aktiver Pages- oder sonstiger Website-Deploymentworkflow eingerichtet.

Die damalige funktionale Prüfung umfasst auch Bestandteile, die durch die neue Nutzerkorrektur entfallen. Sie rechtfertigt nicht deren Wiederaufnahme.

## GitHub-Schutz des Erststands

- [x] Repositoryeigentümer und authentifiziertes Konto: **secours765**.
- [x] Repository öffentlich; keine unbekannten Mitbearbeiter. Nur secours765 als Mitbearbeiter festgestellt.
- [x] Secret Scanning aktiviert.
- [x] Push Protection aktiviert.
- [x] `main` gegen Force-Push und Löschen geschützt.
- [x] Regeln gelten auch für Administratoren.
- [x] Keine verpflichtende Freigabe durch eine zweite Person.
- [x] GitHub Pages weiterhin deaktiviert.

Zwei-Faktor-Einrichtung auf Wunsch des Kontoinhabers vorerst zurückgestellt; keine Blockade dieses Auftrags. Bei späterem Auftrag persönlich einrichten und Wiederherstellung sicher verwahren.

## Neue lokale Revision: Galerien und Informationsauftritt

Die ausdrückliche Nutzerkorrektur lautet: **keine Mitarbeit- oder Bewerbungsangebote, sondern Informationen und Spenden**. Entsprechende Seiten, Links, Schaltflächen und E-Mail-Aufrufe entfallen. Allgemeine Kontaktinformationen bleiben davon getrennt.

Die Überarbeitung umfasst einen sichtbaren Galerieeinstieg, `/galerie/` und eigene Länder-Galerien unter `/galerie/kamerun/`, `/galerie/uganda/` und `/galerie/suedsudan/`. Die Bildauswahl wird in `src/data/galleries.json` gepflegt. Zusätzlich wird die Überschneidung von Jahreszahlen und Linie in der Projektchronologie korrigiert.

**Diese Änderungen bleiben nur lokal auf `work/lokaler-entwurf-galerien`. Kein Push, kein Merge nach `main` und keine Websiteveröffentlichung ohne neue ausdrückliche Freigabe.**

Die neue Revision wurde am 27.11.2026 gesondert geprüft:

- [x] Inhaltsprüfung einschließlich Dokumenthashes, Bildmetadaten, IBAN und QR-Decodierung erfolgreich.
- [x] Statischer Build an Domainwurzel und unter /sdi-website/: 16 HTML-Seiten (15 Inhaltsseiten plus 404).
- [x] 653 interne Ziele einschließlich aller Galerie-Bilder geprüft; Ausgabe rund 179,4 MiB.
- [x] 15 Inhaltsseiten auf Desktop (1440 px) und Smartphonebreite (390 px) geprüft; axe meldet 0 WCAG-A/AA-Verstöße im ausgeführten Test.
- [x] Länder-Galerien: Kamerun 7, Uganda 22, Südsudan 22 Fotos; zusammen 51 Aufnahmen.
- [x] Bildvergrößerung, Schließen/Escape, Fokus-Rückkehr, Vor/Zurück und Pfeiltasten geprüft.
- [x] Timeline bei 390, 768, 1024 und 1440 px geometrisch auf Abstand zwischen Jahreszahlen und Linie geprüft; ohne Überschneidung. Desktopansicht visuell kontrolliert.
- [x] Galerie-Fotos aus belegten Länderordnern; mehrdeutige Doppelaufnahme ausgeschlossen. Südsudan weiterhin Erkundung/Vorbereitung.
- [x] Keine Mitmachen-Seite und keine Bewerbungs-/Mitarbeitslinks. Allgemeine Kontaktangaben bleiben als Text sichtbar.
- [x] Vier Schweizer Freiwilligen-Informationsblätter aus dem sichtbaren Angebot entfernt; interne Originale erhalten. Sichtbarer Katalog: 180 Einträge, davon 102 lokale Downloads.
- [x] Suche, Kategorie-/Sprachfilter, Download, mobile Navigation und IBAN-Kopieren geprüft.
- [x] Lokale Vorschau unter http://127.0.0.1:4321/ erreichbar. Diese Revision wurde nicht gepusht; main enthält weiterhin den dokumentierten Erststand.

Browseransichten und maschinenlesbare Prüfberichte liegen ausschließlich im separaten internen Arbeitsbereich. Die Prüfungen ersetzen keine rechtliche Abnahme oder vollständige Barrierefreiheitszertifizierung.

## Material- und Dokumentstand

- Originalsammlung: deutsche Bestandsseiten, Projektfotos, zwei PPTX- und zwei ODP-Dateien sowie Texte zu Uganda und Südsudan.
- Die ODP-Dateien sind Dubletten: insgesamt **3 einzigartige Präsentationen mit 65 Folien**. XML-Texte, Bildzuordnungen und relevante Bilder wurden ausgewertet. Keine vollständige Office-Folienrenderung durchgeführt.
- Inventur: 131 unterschiedliche aktive direkte Dateiverweise auf der Schweizer Downloadseite; mit passenden Direktverweisen weiterer SDI-Seiten **184 Dokumente**.
- **182 Dokumente tatsächlich heruntergeladen**, 1 ausdrücklich passwortgeschütztes Dokument zurückgestellt, 1 Quelle mit HTTP 404.
- Ursprüngliche Bereitstellung: 106 lokale Website-Dateien. Im aktuellen lokalen Entwurf nach Nutzerkorrektur: **102 lokale Website-Dateien**, **13 große Originale über Schweizer Quellen** (948.070.944 Byte; zusätzlich im unveröffentlichten GitHub-Release-Entwurf) und **63 Originalverweise bis Rechteprüfung**. **Vier Mitarbeit-Dokumente bleiben nur in der internen Originalsammlung**. Die vollständige Inventur umfasst weiterhin 184 Einträge.
- Die 13 Originaldateien sind vollständig in den **Release-Entwurf** hochgeladen; Größen und serverseitige SHA-256 stimmen mit den lokalen Originalen überein. Der Entwurf ist nicht öffentlich bereitgestellt. Erst nach tatsächlicher Veröffentlichung und Prüfung darf der Katalog erreichbare Asset-URLs behaupten.
- Prüfsummen, Originalquellen und Einzelfälle sind im Katalog beziehungsweise internen Inventar festgehalten. Das geschützte Handbuch bleibt eine Ausnahme; kein Schutz wurde umgangen.
- Lokale Originalkopie im separaten Arbeitsbereich: **81 Dateien, SHA-256-identisch** mit den Originalen. Der lokale Sicherungsbericht enthält Ablageorte. Ein unabhängiges Backup auf einem anderen Datenträger ist damit nicht bestätigt.

## Bestätigte Angaben

- [x] Aktuelle Anschrift: **Donnersbergstraße 6, 67117 Limburgerhof**; Nutzerbestätigung vom 27.11.2026.
- [x] Deutsche IBAN **DE20 5457 0024 0086 3209 00** weiterhin korrekt; Nutzerbestätigung vom 27.11.2026.
- [x] Kamerun und Uganda bestehende Projekte; Südsudan in Vorbereitung.
- [x] Allgemeine Kontaktadressen aus deutschen Unterlagen: `peter.mentges@t-online.de` und `arminreinartz@t-online.de`.
- [x] Aktueller Inhaltsumfang laut Nutzerkorrektur: Informationen, Galerien und Spenden; keine Mitarbeit-/Bewerbungsangebote.

## Vor öffentlicher Websitefreigabe persönlich prüfen

- [ ] Genaue aktuelle Vereins-/Registerbezeichnung, Vertretung, Registergericht und Registernummer, soweit erforderlich, anhand aktueller Unterlagen abgleichen. Quellen verwenden unterschiedliche Namensfassungen.
- [ ] Aktualität der allgemeinen Kontaktwege und gewünschte aktuelle Funktionsbezeichnungen bestätigen.
- [ ] Passende Einzelportraits von Peter Mentges und Armin Reinartz mit eindeutiger Zuordnung und Nutzungsfreigabe bereitstellen; bisher keine gesichert beschrifteten Einzelportraits gefunden.
- [ ] Empfängerbezeichnung mit tatsächlichem Bankkonto abgleichen und QR-Code in einer unterstützenden Banking-App **ohne Zahlung** testen.
- [ ] Angaben zu Spendenbescheinigungen nur übernehmen, wenn Grundlage und Ablauf bestätigt sind.
- [ ] Impressum und Datenschutz mit tatsächlichem späteren Hosting und Verantwortlichkeiten abgleichen. Keine juristische Vollständigkeit allein durch den Entwurf behaupten.
- [ ] Bildrechte und ungeklärte Fremdmaterialien dokumentbezogen klären.
- [ ] Persönliche Übung aus [Änderung mit Codex](AENDERUNG-MIT-CODEX.md) selbst ausführen und Verständnis bestätigen.
- [ ] Nach Sichtprüfung die erstmalige Websiteveröffentlichung ausdrücklich beauftragen.

Abschluss der persönlichen Übung: **offen**. Datum, ausgeführte Schritte und verbliebene Fragen erst nach tatsächlicher Durchführung ergänzen.
