# Abnahme- und Übergabeprotokoll

Stand der Dokumentationsvorbereitung: **27.11.2026**. Dieses Protokoll unterscheidet beauftragte Funktionen, technische Ergebnisse und persönliche Abnahme. Offene Felder sind keine bestandenen Prüfungen.

## Bereitstellung

| Punkt | Stand |
| --- | --- |
| Öffentliche Website | **Noch nicht veröffentlicht** |
| Lokale Vorschau | Adresse und tatsächlich erfolgreicher Abruf werden nach der technischen Prüfung ergänzt |
| Repository | Öffentlich unter `secours765/sdi-website` angelegt; Erstpush noch zu protokollieren |
| GitHub Pages | Deaktiviert; Pages-API beim angelegten Repository antwortet mit 404 |
| Andere Preview-/Hostingdienste | Keine Veröffentlichung beauftragt |
| STRATO / Domain / DNS | Keine Änderungen beauftragt oder durchgeführt |
| Persönliche Übergabeübung | Vorbereitet, noch nicht durch den Kontoinhaber durchgeführt |

## Werkzeuge und reproduzierbarer Stand

| Werkzeug | Nachweis / Stand |
| --- | --- |
| Windows | Windows 11, OS-Build 22631 bei Bestandsaufnahme |
| Shell | Windows PowerShell 5.1 |
| Node.js | 26.13.1 LTS, portable aus offizieller Quelle, separate lokale Ablage |
| npm | 11.20.0 |
| Astro / Pakete | Maßgeblich ist die erzeugte `package-lock.json`; Buildstand ergänzen |
| Git | 2.56.1.windows.1 erfolgreich installiert und festgestellt |
| GitHub CLI | 2.106.0, portable offizielle Ausgabe |
| Geprüfter Commit | Nach geprüftem Erstcommit ergänzen |

## Technische Prüfung

Nach Ausführung jeweils Datum, Ergebnis und gegebenenfalls Einschränkung ergänzen:

- [x] Projektlokale Erstinstallation erfolgreich; npm meldete 0 bekannte Sicherheitslücken.
- [ ] Inhaltsprüfung erfolgreich.
- [ ] Statischer Astro-Build erfolgreich.
- [ ] Interne Links und vorhandene Bilder geprüft.
- [ ] Domainwurzel und GitHub-Pages-Unterpfad geprüft.
- [ ] Desktopdarstellung visuell geprüft.
- [ ] Smartphonebreite visuell geprüft; kein unbeabsichtigtes horizontales Scrollen.
- [ ] Navigation, Tastaturfokus und relevante Farbkontraste geprüft.
- [ ] Galerie öffnen/schließen, Tastaturbedienung und Bildunterschriften geprüft.
- [ ] Uganda-Chronologie und korrekter Südsudan-Status geprüft.
- [ ] Downloadsuche sowie Kategorie-/Sprachfilter geprüft.
- [ ] Tatsächliche Downloadziele stichprobenweise beziehungsweise automatisiert geprüft.
- [ ] E-Mail-Adressen sichtbar, Betreffzeilen korrekt codiert, keine Nachricht versendet.
- [ ] Kopierfunktionen mit Rückmeldung geprüft.
- [ ] IBAN-Prüfziffer und EPC-Format geprüft.
- [ ] Erzeugtes QR-Bild erfolgreich decodiert und mit Zahlungsdaten verglichen.
- [ ] Geplante Git-Dateien und erster Commit auf vertrauliche Inhalte geprüft.
- [ ] Originalbilder nicht ungeprüft mit EXIF-/Standortdaten veröffentlicht.
- [ ] Kein aktiver Pages- oder sonstiger Website-Deploymentworkflow vorhanden.
- [x] GitHub CLI unter `secours765` authentifiziert; Identität vor Repositoryanlage geprüft.
- [ ] Öffentlichen Repositoryzustand und Schutzfunktionen geprüft.

## Material- und Dokumentstand

- Originalsammlung: deutsche Bestandsseiten, Projektfotos, zwei PPTX- und zwei ODP-Dateien sowie Texte zu Uganda und Südsudan. Die ODP-Dateien sind Dubletten: insgesamt 3 einzigartige Präsentationen mit 65 Folien. XML-Texte, Bildzuordnungen und relevante Bilder wurden ausgewertet; keine vollständige Office-Folienrenderung behauptet.
- Inventur: 131 unterschiedliche aktive direkte Dateiverweise auf der Schweizer Downloadseite; mit passenden Direktverweisen weiterer SDI-Seiten insgesamt 184 Dokumente.
- 182 Dokumente tatsächlich heruntergeladen; 1 ausdrücklich passwortgeschütztes Dokument zurückgestellt, 1 Quelle mit HTTP 404. Geplante Bereitstellung der geladenen Dateien: 106 lokale Website-Dateien (177.617.009 Byte), 13 Release-Assets (948.070.944 Byte), 63 Originalverweise bis Rechteprüfung. Tatsächliche Release-Uploads und URLs müssen vor Freigabe als erreichbar geprüft werden. Prüfsummen und Einzelfälle sind im Katalog festgehalten.
- Ein ausdrücklich passwortgeschütztes Handbuch bleibt eine Ausnahme; kein Schutz wird umgangen.
- Große Originale über dem normalen Git-Limit werden nur als geprüfte Release-Assets oder an einem gesondert bestätigten Ort bereitgestellt.
- Lokale Originalkopie im separaten Arbeitsbereich: 81 Dateien, SHA-256-identisch mit den Originalen. Der lokale Sicherungsbericht enthält die Ablageorte. Ein unabhängiges Backup auf anderem Datenträger ist damit nicht bestätigt.

## Bestätigte Angaben

- [x] Aktuelle Anschrift: **Donnersbergstraße 6, 67117 Limburgerhof**; Nutzerbestätigung vom 27.11.2026.
- [x] Deutsche IBAN **DE20 5457 0024 0086 3209 00** weiterhin korrekt; Nutzerbestätigung vom 27.11.2026.
- [x] Kamerun und Uganda als bestehende Projekte; Südsudan in Vorbereitung gemäß Startauftrag.
- [x] Kontaktadressen aus bisherigen deutschen Unterlagen: `peter.mentges@t-online.de` und `arminreinartz@t-online.de`.

## Vor öffentlicher Websitefreigabe noch persönlich prüfen

- [ ] Genaue aktuelle Vereins-/Registerbezeichnung, Vertretung, Registergericht und Registernummer, soweit erforderlich, anhand aktueller Unterlagen abgleichen. Quellen verwenden unterschiedliche Namensfassungen.
- [ ] Aktualität der Kontaktwege und gewünschte aktuelle Funktionsbezeichnungen bestätigen.
- [ ] Passende Einzelportraits von Peter Mentges und Armin Reinartz mit eindeutiger Zuordnung und Nutzungsfreigabe bereitstellen; bisher keine gesichert beschrifteten Einzelportraits gefunden.
- [ ] Empfängerbezeichnung mit tatsächlichem Bankkonto abgleichen und QR-Code in einer unterstützenden Banking-App **ohne Zahlung** testen.
- [ ] Angaben zu Spendenbescheinigungen nur übernehmen, wenn Grundlage und Ablauf bestätigt sind.
- [ ] Impressum und Datenschutz mit tatsächlichem späteren Hosting und Verantwortlichkeiten abgleichen. Keine juristische Vollständigkeit allein durch den Entwurf behaupten.
- [ ] Bildrechte und ungeklärte Fremdmaterialien dokumentbezogen klären.
- Zwei-Faktor-Einrichtung auf Wunsch des Kontoinhabers vorerst zurückgestellt; keine Blockade dieses Auftrags. Bei späterem Auftrag persönlich einrichten und Wiederherstellung sicher verwahren.
- [ ] Persönliche Übung aus [Änderung mit Codex](AENDERUNG-MIT-CODEX.md) selbst ausführen und Verständnis bestätigen.
- [ ] Nach Sichtprüfung erstmalige Websiteveröffentlichung ausdrücklich beauftragen.

Abschluss der persönlichen Übung: **offen**. Datum, ausgeführte Schritte und verbliebene Fragen erst nach tatsächlicher Durchführung ergänzen.
