# Inhalte, Bilder und Dokumente pflegen

## Quellenstand

Grundlage sind die bereitgestellten deutschen Bestandsseiten, Projektfotos, Präsentationen aus 2015/2016, eine Egerkingen-Präsentation mit Stand 2024 sowie ergänzende Texte zu Uganda und Südsudan. Die Schweizer [SDI-Website](https://www.secoursdentaire.ch/) und ihr [Dokumentationsbereich](https://www.secoursdentaire.ch/more.html) ergänzen diese Quellen.

Die aktuelle Anschrift Donnersbergstraße 6, 67117 Limburgerhof und die deutsche IBAN wurden am 27.11.2026 vom Auftraggeber bestätigt. Die alte Anschrift Im Waldhof 6 ist damit für den neuen Auftritt ersetzt. Die Bestandsunterlagen verwenden unterschiedliche ausgeschriebene Vereinsnamen; genaue Registerbezeichnung, Vertretung und gegebenenfalls Registerdaten bleiben vor öffentlicher Websitefreigabe abzugleichen.

Im alten Datenschutztext stehen sachfremde Bausteine zu einer „Bruderschafts-Homepage“ und Verbandsabläufen. Sie sind kein geeigneter Text für den neuen Auftritt. Die Datei „Service.html“ beschreibt fremde Praxisleistungen und wird nicht als SDI-Inhalt übernommen.

## Projekttexte und Geschichte

- Nur belegte Ereignisse in die Chronologie aufnehmen. Ein Präsentationsdatum datiert nicht automatisch jedes abgebildete Ereignis.
- Für jeden Meilenstein Jahr oder gesicherten Zeitraum, Überschrift, kurzen Text und geeignete Bilder zuordnen. Die interne Auswertung enthält den Beleg mit Präsentation und Foliennummer.
- Doppelte Darstellungen zusammenfassen. Ein mehrfach vorkommendes Foto ist kein Beleg für mehrere Ereignisse.
- Vorher-nachher-Vergleiche nur bei nachgewiesen zusammengehörigen Aufnahmen verwenden.
- Südsudan bleibt „in Vorbereitung“. Zwei Erkundungsbesuche 2025 und Kontakte können beschrieben werden; geplante Geräteausstattung oder Schulung nicht als abgeschlossen darstellen.
- Die alten Schweizer Kamerun-Texte enthalten einen historischen Stand. Daraus keine heutigen deutschen Einsatzplätze, Ansprechpartner oder Wirkungszahlen ableiten.

## Länder-Galerien

Die aktuelle lokale Revision konzentriert sich auf Informationen und Spenden; Mitarbeit- und Bewerbungsangebote entfallen. Die Galerieübersicht unter `/galerie/` führt zu eigenen Seiten für Kamerun, Uganda und Südsudan. Auswahl, Alternativtexte und Bildunterschriften liegen in `src/data/galleries.json`. Weitere Fotos ergänzen die Projektgeschichten, ohne ungesicherte Jahres- oder Personenzuordnungen einzuführen. Die Südsudan-Galerie dokumentiert Erkundungen und Kontakte; sie darf keine fertig aufgebaute SDI-Klinik suggerieren.

Diese Änderungen liegen nur lokal auf `work/lokaler-entwurf-galerien` und sind nicht Teil des bereits gesicherten Erststands auf GitHub.

## Bilder ergänzen

1. Bildquelle und Nutzungsrecht klären, eindeutiges Projekt und Motiv bestimmen. Bei Portraits muss die Personenzuordnung bestätigt sein.
2. Das unveränderte Original außerhalb des Repositorys sichern.
3. Eine Webfassung und bei umfangreichen Galerien ein Vorschaubild erzeugen. Metadaten mit unnötigen Standort-/Personenangaben entfernen, Ausrichtung beachten und Bild nicht hochskalieren.
4. Einen verständlichen Dateinamen ohne Namen privater Ordner wählen, etwa `uganda-solaranlage.webp`.
5. Nur die Webfassung unter `public/` ablegen und den Pfad in der passenden Inhaltsdatei eintragen.
6. Alternativtext nach dem sichtbaren Motiv schreiben; eine Bildunterschrift kann Ort, gesichertes Jahr und Quelle ergänzen. Unbekannte Personen nicht benennen.
7. Zuschnitt auf Desktop und Smartphone prüfen, Galerie per Tastatur öffnen und schließen.

Für die Startseite wurden inzwischen die vom Nutzer zugeordneten Dateien Peter.JPG und Armin.jpg bereitgestellt. Sie zeigen Projektaufnahmen mit weiteren Personen und werden als vollständige Motive verwendet; siehe den Pflegeabschnitt am Ende dieser Anleitung. Eine Bilddatei erscheint sowohl im Uganda- als auch im Südsudan-Ordner; eine solche widersprüchliche Ablage ist allein keine belastbare Länderzuordnung.

## Downloadkatalog pflegen

Die Bestandsaufnahme vom 27.11.2026 erfasst zunächst **131 unterschiedliche aktive direkte Dateiverweise** auf der Schweizer Downloadseite; zusätzliche passende Direktverweise weiterer SDI-Seiten werden gesondert geprüft. Mit weiteren passenden direkten SDI-Verweisen wurden 184 Dokumente inventarisiert, davon 182 heruntergeladen; 1 geschützte Datei und 1 HTTP-404-Quelle sind Ausnahmen. Diese Zahlen beschreiben diesen Abrufstand, keine unveränderliche Sollzahl. Bereitstellung und Einzelfälle stehen in Katalog und Abnahmeprotokoll.

Pro Dokument erhalten bleiben:

| Angabe | Bedeutung |
| --- | --- |
| Titel, Kategorie und Sprache | Verständliche Suche und Filter; „unbekannt“ statt Vermutung |
| Dokumentjahr/Version | Inhaltlicher Stand, nicht automatisch Abrufdatum |
| Original-URL und Dateiname | Herkunft und unveränderte Originalfassung |
| Format und tatsächliche Größe | Nach dem Download geprüft |
| Abrufstatus und Abrufdatum | Erfolgreich, geschützt, nicht erreichbar oder andere Ausnahme |
| SHA-256 | Prüfsumme der tatsächlich gespeicherten Datei |
| Dublette/kleinere Fassung | Verwandte Dokumente verknüpfen, Original nicht stillschweigend ersetzen |
| Bereitstellungsort | Website-Datei, GitHub-Release-Asset oder Originalverweis |

Neue Datei zunächst in den internen Arbeitsbereich herunterladen. HTTP-Status, Dateisignatur und bei Bedarf den Inhalt prüfen: Eine HTML-Fehlerseite mit PDF-Endung ist kein PDF. Passwortgeschützte Fassungen nicht entsperren oder als frei verfügbaren Download darstellen. Fremdmaterial mit unklaren Rechten einzeln kennzeichnen und bis zur Klärung nur an der Originalquelle verlinken.

Historische Schweizer Spendenflyer und Kontodaten bleiben erkennbar historische Schweizer Dokumente. Sie dürfen nicht die deutsche Spendenseite speisen. Externe Fachwebsites bleiben externe Links.

Geeignete Dateien können unter `public/downloads/` liegen. Große Originale werden als Release-Assets gespeichert, wenn ihr öffentlicher Upload geprüft und freigegeben ist. Im Katalog immer die **tatsächlich veröffentlichte und geprüfte** Asset-URL eintragen; eine geplante URL nicht als erreichbaren Download ausgeben. Beim Klick auf ein solches Asset lädt der Browser die Datei technisch von GitHub.

## Größen und Rechte

Nach den am 27.11.2026 geprüften offiziellen GitHub-Angaben gilt:

- Normales Git blockiert Dateien über **100 MiB**; ab 50 MiB erscheint eine Warnung. Große Originale können als Releases verteilt werden. [GitHub: große Dateien](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github)
- Die veröffentlichte GitHub-Pages-Website darf höchstens **1 GB** groß sein. [GitHub-Pages-Limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- Ein Release-Asset muss **kleiner als 2 GiB** sein; je Release sind bis zu 1000 Assets möglich. [GitHub: Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases)

Git LFS ist keine direkte Auslieferungslösung für Pages. Bei späterer größerer Sammlung kann vorhandener STRATO-Webspace geprüft werden. Kleinere Lesefassungen dürfen zusätzlich angeboten werden, ersetzen Originale aber nicht unbemerkt.

Alle Fotos, Logos, Texte und Dokumente behalten ihre jeweiligen Rechte. Dieses Repository vergibt keine pauschale freie Lizenz für fremde Materialien.

## Lokale Sicherung

- **SDI Homepage:** unveränderte Originalquelle.
- **SDI-Arbeitsbereich:** interne Extraktionen, Quellenzuordnung, Downloadoriginale, Prüfberichte und gesonderte Sicherung.
- **SDI-Website:** ausgewählte öffentliche Projektdateien und Quellcode.

Der private Sicherungsbericht enthält Zeitpunkt, Ablageort, Dateianzahl und Hashabgleich. Die öffentliche Dokumentation enthält keine unnötigen privaten Rechnerpfade. Eine erfolgreiche Kopie oder OneDrive-Synchronisierung wird nur als solche bezeichnet; ein unabhängiges Backup auf einem weiteren Datenträger muss gesondert bestätigt werden.

## Umfang nach der lokalen Nutzerkorrektur

Vier Schweizer Freiwilligen-Informationsblätter (doc-133 bis doc-136) werden mit visible: false und availability: withdrawn aus dem Websiteangebot ausgeschlossen. Die vollständige Inventur und internen Originale bleiben erhalten. Keine Mitarbeitangebote oder Links zu diesen Dateien erneut anzeigen. Der sichtbare Katalog enthält 180 Einträge; 102 Dokumente liegen lokal in public/downloads/.

Die 13 großen Originale sind im öffentlichen Release dokumentation-2026-11 bereitgestellt. GitHub-Größen und SHA-256 stimmen mit den Originalen überein; die finalen Downloadziele wurden anonym auf Status, Dateisignatur und Größe geprüft. Der Katalog verwendet ausschließlich diese bestätigten Release-URLs.

## Startseite: Fotos und Pressebereich (27.11.2026)

- Auf Nutzerauftrag ersetzen die Dateien `Peter.JPG` und `Armin.jpg` den Textblock über den Ansprechpartnern. Die Zuordnung zu den Namen folgt dem Nutzerauftrag und den Dateinamen. Die vollständigen Motive bleiben erhalten; die Originaldateien werden nicht verändert.
- Webfassungen: `public/images/peter-mentges.webp` und `public/images/armin-reinartz.webp`, maximal 960 Pixel breit, ohne EXIF-/XMP-/IPTC-Metadaten. `homeImage` in `src/data/team.json` steuert ausschließlich die Startseite. Bildgrößen und Originalprüfsummen stehen in den vorhandenen Bildkatalogen.
- Zwischen „Wir über uns“ und „Wissen zugänglich machen“ liegt „Unterstützung transparent machen“ mit dem Bereich „Berichte und Presse“.
- `src/data/press.json` enthält Titel, Herausgeber, Format, Dateigröße, SHA-256, Quelldateiname, Bereitstellungsdatum und lokalen PDF-Pfad. Weitere Presseberichte hier ergänzen. Der Schweizer Downloadkatalog bleibt separat.
- Die bereitgestellte PDF „Einsatz mit Secours Dentaire International im Südsudan - zm-online.PDF“ wird unverändert einschließlich Quellen- und Urheberhinweisen eingebunden. Sie hat sechs Seiten und 531.876 Byte. Keine pauschale Lizenz wird daraus abgeleitet.
- Die Veröffentlichung dieses konkreten Stands wurde ausdrücklich beauftragt. „Berichte und Presse“ ist ein per Klick und Tastatur bedienbares Aufklappfeld; die PDF lässt sich in einem neuen Tab öffnen oder direkt herunterladen. Künftige Änderungen benötigen weiterhin eine eigene Veröffentlichungsfreigabe.
