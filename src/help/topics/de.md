# Hilfe (Deutsch)

Dieses Dokument führt Sie durch die Funktionen von Dark Reader.

- [FAQ](#faq)
- [Kontakt](#contacts)
- [Oberer Abschnitt](#top-section)
- [Filtereinstellungen](#filter-settings)
- [Benutzerdefinierte Websiteeinstellungen](#custom-site-settings)
- [Websiteliste](#site-list)
- [Mehr-Tab](#more-tab)
- [Verfahren zur Stylegenerierung](#theme-generation-modes)
- [Unterer Abschnitt](#bottom-section)
- [Verwenden der Entwicklerwerkzeuge](#using-dev-tools)


<h2 id="top-section">Oberer Abschnitt</h2>

<img src="/images/help/de/darkreader-top-section-de.png" alt="Oberer Abschnitt" style="width: 15rem;" loading="lazy" />

- Die Schaltfläche "↻" mit dem Domainnamen fügt die aktuelle (Sub-)Domain in die **Ignorierliste** ein (oder entfernt sie von dort).
- Der **Ein-Aus-Schalter** aktiviert oder deaktiviert Dark Reader.
- Klicken Sie auf die Links unter den Schaltflächen, um die **Tastenkürzel** zu ändern.
- Wenn die Umschaltfläche ausgegraut ist, bedeutet dies, dass der Browser das Einspeisen von Skripten in die aktuelle Seite einschränkt.


<h2 id="filter-settings">Filtereinstellungen</h2>

<img src="/images/help/de/darkreader-filter-settings-de.png" alt="Filtereinstellungen" style="width: 15rem;" loading="lazy" />

Passen Sie die Filterwerte so an, dass sie Ihren Bildschirmparametern und der Beleuchtung im Raum am besten entsprechen.


<h2 id="custom-site-settings">Benutzerdefinierte Websiteeinstellungen</h2>

<img src="/images/help/de/darkreader-custom-site-settings-de.png" alt="Benutzerdefinierte Websiteeinstellungen" style="width: 15rem;" loading="lazy" />

Mit der Schaltfläche **Nur für** werden Einstellungen vorgenommen, die nur auf die aktuelle Website angewendet werden.

Klicken Sie auf die Schaltfläche, passen Sie die Einstellungen an; klicken Sie erneut, um abzubrechen.


<h2 id="site-list">Websiteliste</h2>

<img src="/images/help/de/darkreader-site-list-de.png" alt="Websiteliste" style="width: 15rem;" loading="lazy" />

- Verwenden Sie **Nur invertieren**, wenn Sie möchten, dass Dark Reader nur auf den gelisteten Webseiten funktioniert.
- **Nicht invertieren** verhindert, dass die Erweiterung auf den gelisteten Webseiten aktiv ist.
- Mögliche Werte sind `google.com, mail.google.com, google.*, google.com/maps` usw.
- Ein Klick auf die Schaltfläche "↻" mit dem Domainnamen fügt die Seite in diese Liste ein.

<h2 id="more-tab">Mehr-Tab</h2>

<img src="/images/help/de/darkreader-more-tab-de.png" alt="Mehr tab" style="width: 15rem;" loading="lazy" />

- **Wählen Sie eine Schriftart** aus der Liste (oder geben Sie den Schriftnamen in Firefox ein) und klicken Sie auf das Kontrollkästchen.
- Passen Sie die **Textstärke** an.
- Wählen Sie ein **Verfahren zur Stylegenerierung**.


<h2 id="theme-generation-modes">Verfahren zur Stylegenerierung</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Statisches vs. Dynamisches Verfahren" loading="lazy" />
    <figcaption>Filter+ vs. Statisches vs. Dynamisches Verfahren</figcaption>
</figure>

- **Filter** ist das Verfahren, das auf CSS-Filtern basiert.
Es **invertiert die ganze Seite** und **kehrt einige Teile** zurück.
Erfordert GPU-Ressourcen.
**Schnell** und mächtig, hat aber mehrere Probleme:
Deaktiviert das Subpixel-Rendering von Text,
invertiert bereits dunkle Teile in Licht,
verursacht Verzögerungen auf großen Seiten,
Fehler beim Rendern einiger Seiten in Firefox.
- **Filter+** ist dasselbe wie Filter, basiert jedoch auf benutzerdefinierten SVG-Filtern
und **behandelt Farben besser** macht Bilder weniger langweilig.
- **Statisch** generiert schnell ein einfaches Stylesheet.
- **Dynamisch** analysiert Website-Stylesheets, Hintergrundbilder, Vektorgrafiken.
Benötigt einige Ressourcen beim ersten Laden der Seite,
aber produziert **die besten** visuellen Ergebnisse.
Dieses Verfahren ist noch in Arbeit,
aber es funktioniert bereits gut für viele moderne Webseiten.


<h2 id="bottom-section">Unterer Abschnitt</h2>

<img src="/images/help/darkreader-footer.png" alt="Unterer Abschnitt" style="width: 15rem;" loading="lazy" />

- Lesen Sie unsere **Datenschutzerklärung**, folgen Sie uns auf Twitter.
- **Spenden** - Wenn Ihnen die Erweiterung gefällt, sollten Sie die aktive Entwicklung von Dark Reader unterstützen.
Das Crowdfunding läuft momentan über Open Collective, das derzeit Stripe für Zahlungen verwendet.
- **Neuigkeiten** - informiert über Versionshinweise und wichtige Ereignisse.
- **Erweitert** - Öffnet einen Konfigurations-Editor für das aktuelle Verfahren zur Stylegenerierung ("Entwicklerwerkzeuge").


<h2 id="using-dev-tools">Verwenden der Entwicklerwerkzeuge</h2>

Wenn Sie mit CSS-Selektoren vertraut sind, können Sie Korrekturen für Webseiten vorschlagen.
Lesen Sie [hier](https://github.com/darkreader/darkreader#how-to-contribute), wie Sie die Entwicklerwerkzeuge verwenden.


<h2 id="faq">FAQ</h2>

#### Die Erweiterung fragt nach Berechtigungen zum Lesen von Websitedaten und Browserverlauf

Die Erweiterung benötigt diese Berechtigungen, um das Erscheinungsbild der Seite zu analysieren, zu modifizieren und um zu bestimmen,
ob Sie spezielle Regeln für diese Seite festgelegt haben.
Wir fügen keine Werbung ein, sammeln keine Daten oder senden sie irgendwo hin.
Die Erweiterung ist vollständig Open-Source und hat keinen verschleierten Code.
Unsere Monetarisierung ist transparent und basiert auf Spenden der Nutzer.

#### Die Seiten für die Addon-Galerien und die Browser-Einstellungsseiten bleiben weiß

Die Erweiterung hat keinen Zugriff auf diese Seiten.

#### Neuer Tab und die Browseroberfläche bleiben weiß

Die Erweiterung kann nicht das Aussehen eines neuen Tabs ändern oder den Browser selbst (erst ab Firefox 60).
Installieren Sie ein dunkles Design oder eine entsprechende Erweiterung aus der Addon-Galerie.

#### Der Bildschirm blitzt weiß auf, wenn Sie einen neuen Tab öffnen oder auf einer Webseite navigieren

Vor dem Laden einer Webseite zeigt Chrome standardmäßig die Hintergrundfarbe des Themes an.
Du solltest also ein dunkles Theme aus dem Laden installieren.

#### Die Erweiterung funktioniert überhaupt nicht

Wenn Sie ähnliche Erweiterungen für den dunklen Modus installiert haben, deaktivieren Sie sie und laden Sie die Tabs neu.
Klicken Sie auf das Symbol Dark Reader, prüfen Sie, ob die Schaltfläche oben rechts auf **Ein** eingestellt ist.
Öffnen Sie den Reiter **Websiteliste** und prüfen Sie, ob **Nicht invertieren** ausgewählt ist.
Wenn nichts hilft und etwas Schlimmes passiert ist, mailen Sie uns.

#### Die Webseite wird nicht korrekt angezeigt oder funktioniert nur langsam

Bitte senden Sie die Adresse (URL), einen Screenshot, Ihre Betriebssystem-, Browser- und Darkreader-version an unsere E-Mail-Adresse.
Wir werden versuchen, den Grund herauszufinden, zumindest für beliebte Webseiten.
Versuchen Sie auch, das **Verfahren zur Stylegenerierung** zu ändern oder versuchen Sie, bei den Filtern den **Lichtmodus** durch Klick auf "Licht" zu aktivieren.
Überprüfen Sie, dass die Webseite nicht unter **Websiteliste** aufgeführt ist.

#### Die Erweiterung funktioniert nicht im Inkognito-Modus

Öffnen Sie die **chrome://extensions** -Seite, suchen Sie nach **Dark Reader**, klicken Sie auf **Inkognito zulassen**.

#### Die Erweiterung funktioniert nicht für lokale Dateien

Öffnen Sie die Seite **chrome://extensions**, suchen Sie nach **Dark Reader**, klicken Sie auf **Zugriff auf Datei-URLs zulassen**.

#### Die gesamte Webseite wird im Filtermodus nicht angezeigt

Wenn Sie Chrome für Mac OS verwenden, aktualisieren Sie Mac OS bis 10.13. Dies sollte Ihre Grafiktreiber aktualisieren.
Wenn Sie Firefox verwenden, handelt es sich höchstwahrscheinlich um einen Browserfehler. Verwenden Sie für solche Webseiten ein anderes Verfahren zur Stylegenerierung.


<h2 id="contacts">Kontakt</h2>

Für Fragen (wir verstehen nur Englisch) senden Sie uns eine E-Mail an [support@darkreader.org](mailto:support@darkreader.org)
