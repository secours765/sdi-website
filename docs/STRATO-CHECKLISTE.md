# STRATO- und Domainphase – erst nach Freigabe

**Diese Schritte sind vorbereitet und wurden nicht ausgeführt.** Die bisherige Website und vorhandene E-Mail-Konfiguration bleiben erhalten.

## Ausgangslage erfassen und sichern

- [ ] Tatsächliches STRATO-Paket, Vertragsinhaber und gegebenenfalls vorhandenen Webspace feststellen.
- [ ] Bestehende deutsche Domain, Hauptadresse, `www` und bisherige Website dokumentieren.
- [ ] Website-Dateien, Einstellungen, Weiterleitungen und gegebenenfalls Datenbanken sichern; Sicherung auf Lesbarkeit prüfen.
- [ ] Aktuelle Nameserver sowie DNS-Einträge mit Typ, Name, Wert und TTL exportieren oder nachvollziehbar dokumentieren.
- [ ] Besonders A/AAAA, CNAME, MX, SPF, DKIM, DMARC, Verifizierungseinträge, Autodiscover und andere tatsächlich vorhandene Einträge aufnehmen.
- [ ] Domain- und E-Mail-Abhängigkeiten prüfen. Postfächer, Weiterleitungen und Versanddienste dürfen bei der Websiteumstellung nicht verloren gehen.
- [ ] Zugangsschritte führt der Kontoinhaber selbst aus; keine Zugangsdaten in Projektdateien speichern.

## Ziel festlegen

- [ ] Entscheiden, ob die statische Website bei GitHub Pages oder auf tatsächlich vorhandenem STRATO-Webspace liegen soll.
- [ ] Bei GitHub Pages die Domainverifizierung passend zum Eigentümerkonto **secours765** nach der dann aktuellen offiziellen Anleitung einrichten.
- [ ] Bevorzugte Hauptadresse festlegen: Domainwurzel oder `www`; die andere Variante soll kontrolliert weiterleiten.
- [ ] Notwendige DNS-Zielwerte aus aktuellen offiziellen Hostingangaben übernehmen, nicht aus alten Beispielen raten.
- [ ] Für große Dokumentoriginale GitHub-Release-Assets oder gegebenenfalls STRATO-Speicher getrennt planen.
- [ ] Basis-Pfad, endgültige Domain, Datenschutzangaben und gegebenenfalls `CNAME` erst nach ausdrücklicher Bestätigung anpassen.

## Geplante Umstellung prüfen

- [ ] TTL und Umschaltzeitpunkt passend zum tatsächlichen DNS-Ausgangszustand planen.
- [ ] Keine MX-/SPF-/DKIM-/DMARC-Einträge durch allgemeine „Domain verbinden“-Assistenten unbeabsichtigt ersetzen.
- [ ] Wichtige alte URLs erfassen und passende Weiterleitungen vorbereiten.
- [ ] Domainwurzel und `www` jeweils prüfen; keine widersprüchlichen A/AAAA-/CNAME-Einträge belassen.
- [ ] HTTPS-Zertifikat, HTTPS-Erzwingung und gemischte Inhalte prüfen.
- [ ] Website auf Desktop und Smartphone sowie E-Mail-Empfang und -Versand nach Änderung testen.
- [ ] DNS-Auflösung aus mehreren Netzen prüfen; Cache-/TTL-Verzögerungen berücksichtigen.
- [ ] Neue Konfiguration, Zeitpunkt, geprüfte URL und verantwortlichen Kontoinhaber dokumentieren.

## Rückweg

- [ ] Bisherige Website verfügbar halten, bis die neue Lösung geprüft ist.
- [ ] Vorherige DNS-Werte und Hosting-Zuordnung griffbereit halten.
- [ ] Bei Problemen die betroffenen Websiteeinträge auf die gesicherten Werte zurückstellen; E-Mail-Einträge unverändert erhalten.
- [ ] DNS-Caches und TTL berücksichtigen; die Rückstellung wirkt nicht überall sofort.
- [ ] Nach Rückstellung bisherige Website, HTTPS und E-Mail erneut prüfen und tatsächlichen Zustand dokumentieren.

Erst die ausdrückliche Freigabe der konkreten Umstellung erlaubt diese Änderungen. Diese Checkliste ändert keine STRATO- oder DNS-Einstellung.
