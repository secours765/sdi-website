# STRATO- und Domainphase – erst nach Freigabe

**Diese Schritte sind vorbereitet und wurden nicht ausgeführt.** Der separat autorisierte Pages-Erststart unter `https://secours765.github.io/sdi-website/` ändert keine STRATO-, DNS- oder eigene Domainkonfiguration. Die bisherige Website unter ihrer bestehenden Domain und die vorhandene E-Mail-Konfiguration bleiben erhalten.

## Ausgangslage erfassen und sichern

- [ ] Tatsächliches STRATO-Paket, Vertragsinhaber und gegebenenfalls vorhandenen Webspace feststellen.
- [ ] Bestehende deutsche Domain, Hauptadresse, `www` und bisherige Website dokumentieren.
- [ ] Website-Dateien, Einstellungen, Weiterleitungen und gegebenenfalls Datenbanken sichern; Sicherung auf Lesbarkeit prüfen.
- [ ] Aktuelle Nameserver sowie DNS-Einträge mit Typ, Name, Wert und TTL exportieren oder nachvollziehbar dokumentieren.
- [ ] Besonders A/AAAA, CNAME, MX, SPF, DKIM, DMARC, Verifizierungseinträge, Autodiscover und andere tatsächlich vorhandene Einträge aufnehmen.
- [ ] Domain- und E-Mail-Abhängigkeiten prüfen. Postfächer, Weiterleitungen und Versanddienste dürfen bei der Websiteumstellung nicht verloren gehen.
- [ ] Zugangsschritte führt der Kontoinhaber selbst aus; keine Zugangsdaten in Projektdateien speichern.

## Ziel festlegen

- [ ] Bestätigen, ob die eigene Domain auf GitHub Pages zeigen soll. Tatsächlich vorhandenen STRATO-Webspace nur bei konkretem Bedarf als alternative Website- oder Downloadablage prüfen.
- [ ] Bei GitHub Pages die Domainverifizierung passend zum Eigentümerkonto **secours765** nach der dann aktuellen offiziellen Anleitung einrichten.
- [ ] Bevorzugte Hauptadresse festlegen: Domainwurzel oder `www`; die andere Variante soll kontrolliert weiterleiten.
- [ ] Notwendige DNS-Zielwerte aus aktuellen offiziellen Hostingangaben übernehmen, nicht aus alten Beispielen raten.
- [ ] Für große Dokumentoriginale GitHub-Release-Assets oder gegebenenfalls STRATO-Speicher getrennt planen.
- [ ] Endgültige Domain und geänderte Datenschutzangaben erst nach ausdrücklicher Bestätigung festlegen. Im Actions-basierten Pages-Workflow liefert `configure-pages` Domain und Basispfad automatisch; keine `CNAME`-Datei anlegen.

## Pages-Domain setzen und neu bauen

Diese Schritte gehören erst zur gesondert freigegebenen Domainumstellung:

1. Nach Sicherung und Domainverifizierung im Repository **Settings → Pages → Custom domain** öffnen, die bestätigte Domain eintragen und **Save** wählen. Anschließend die geplanten DNS-Einträge gezielt beim Domainanbieter setzen; E-Mail-Einträge erhalten.
2. **Enforce HTTPS** aktivieren, sobald Zertifikat und Einstellung bereit sind. Die erforderliche Bereitstellungszeit abwarten und den tatsächlichen Zustand prüfen.
3. Danach **Actions → Website veröffentlichen → Run workflow → Branch: main** ausführen. Vor dem Start kontrollieren, dass `main` dem ausdrücklich freigegebenen Stand entspricht.
4. Der Workflow ruft `actions/configure-pages` vor dem Build auf. Dessen `origin` und `base_path` werden als `SDI_SITE` und `SDI_BASE` für Build und Linkprüfung verwendet. So wird die Ausgabe für die neue Adresse neu erzeugt; eine bloße Änderung der Pages-Einstellung ersetzt diesen Build nicht.
5. Nach erfolgreichem Deployment neue URL, Canonical-URLs, Sitemap, Bilder/Assets, Navigation und Downloads prüfen. Domainwurzel und `www` sowie Weiterleitungen und HTTPS gesondert kontrollieren.

Bei einer Veröffentlichung mit eigenem GitHub-Actions-Workflow ist keine `CNAME`-Datei nötig. [GitHub-Anleitung zur eigenen Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

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
- [ ] Falls auch die Pages-Einstellung „Custom domain“ zurückgenommen oder geändert wird, den ausdrücklich freigegebenen `main`-Stand erneut über „Website veröffentlichen“ bauen und deployen. Danach Canonical-URLs, Sitemap und Assets für die wieder gültige Adresse prüfen.

Erst die ausdrückliche Freigabe der konkreten Umstellung erlaubt diese Änderungen. Diese Checkliste ändert keine STRATO- oder DNS-Einstellung.
