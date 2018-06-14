# Hilfe (Deutsch)

###### Help us translate [this help page](https://github.com/darkreader/darkreader.org/blob/master/src/help/topics/de.md) and [the extension](https://github.com/darkreader/darkreader/blob/master/src/_locales/de.config). English help topic is [here](../en/).

Dieses Dokument führt Sie durch die Funktionen von Dark Reader.

- [FAQ](#faq)
- [Kontakte](#contacts)
- [Oberer Abschnitt](#top-section)
- [Filtereinstellungen](#filter-settings)
- [Benutzerdefinierte Websiteeinstellungen](#custom-site-settings)
- [Websiteliste](#site-list)
- [Mehr tab](#more-tab)
- [Themengenerierungsmodi](#theme-generation-modes)
- [Unterer Abschnitt](#bottom-section)
- [Verwenden der Entwicklerwerkzeuge](#using-dev-tools)


<h2 id="top-section">Oberer Abschnitt</h2>

<img src="/images/help/darkreader-top-section.png" alt="Oberer Abschnitt" style="width: 15rem;" />

- Die **Schalten** Schaltfläche fügt die aktuelle Site in die Ignorierliste ein (oder entfernt sie von dort).
- **Ein/Aus** -Schalter aktiviert oder deaktiviert die Erweiterung.
- Klicken Sie auf die Links unter den Schaltflächen, um **Hotkeys** zu ändern.
- Wenn die Umschaltfläche ausgegraut ist, bedeutet dies, dass der Browser das Einspeisen von Skripten in die aktuelle Seite einschränkt.


<h2 id="filter-settings">Filtereinstellungen</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filtereinstellungen" style="width: 15rem;" />

Passen Sie die Filterwerte an, die Ihren Bildschirmparametern und der Beleuchtung im Raum besser entsprechen.


<h2 id="custom-site-settings">Benutzerdefinierte Websiteeinstellungen</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Benutzerdefinierte Websiteeinstellungen" style="width: 15rem;" />

Mit der Schaltfläche **Nur für** anwenden werden Einstellungen vorgenommen, die nur auf die aktuelle Website angewendet werden.

Klicken Sie auf die Schaltfläche, passen Sie die Einstellungen an, klicken Sie erneut, um abzubrechen.


<h2 id="site-list">Websiteliste</h2>

<img src="/images/help/darkreader-site-list.png" alt="Websiteliste" style="width: 15rem;" />

- Verwenden Sie **Nur invertiert anzeigen**, wenn Sie möchten, dass Dark Reader nur auf gelisteten Websites funktioniert.
- **Nicht invertiert anzeigen** verhindert, dass die Erweiterung auf gelisteten Websites funktioniert.
- Mögliche Werte sind `google.com, mail.google.com, google.*, google.com/maps` usw.
- Ein Klick auf **Schalten** Button fügt die Site in diese Liste ein.

<h2 id="more-tab">Mehr tab</h2>

<img src="/images/help/darkreader-more-tab.png" alt="Mehr tab" style="width: 15rem;" />

- **Wählen Sie eine Schrift** aus der Liste (oder geben Sie den Schriftnamen in Firefox ein) und klicken Sie auf das **Kontrollkästchen**.
- Passen Sie den **Textschlag** an.
- Wählen Sie einen **Themengenerierungsmodus**.


<h2 id="theme-generation-modes">Themengenerierungsmodi</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Statischer vs. Dynamischer Modus" />
    <figcaption>Filter+ vs. Statischer vs. Dynamischer Modus</figcaption>
</figure>

- **Filter** ist der Dark Reader-Modus, der auf CSS-Filtern basiert.
Es **invertiert die ganze Seite** und **kehrt einige Teile** zurück.
Erfordert GPU-Ressourcen.
**Schnell** und mächtig, hat aber mehrere Probleme:
Deaktiviert das Subpixel-Rendering von Text,
invertiert bereits dunkle Teile in Licht,
verursacht Verzögerungen auf großen Seiten,
Fehler beim Rendern einiger Seiten in Firefox.
- **Filter+** ist dasselbe wie Filter, basiert jedoch auf benutzerdefinierten SVG-Filtern
und ** behandelt Farben besser ** macht Bilder weniger langweilig.
- **Statisch** generiert schnell ein grundlegendes Stylesheet.
- **Dynamisch** analysiert Website-Stylesheets, Hintergrundbilder, Vektorgrafiken.
Benötigt einige Ressourcen beim ersten Laden der Seite,
aber produziert **die besten** visuellen Ergebnisse.
Die Arbeit an diesem Modus ist in Arbeit,
aber es funktioniert bereits gut für viele moderne Websites.


<h2 id="bottom-section">Unterer Abschnitt</h2>

<img src="/images/help/darkreader-footer.png" alt="Unterer Abschnitt" style="width: 15rem;" />

- Lesen Sie unsere **Datenschutzerklärung**, folgen Sie uns auf Twitter.
- **Spenden** - Wenn dir die Erweiterung gefällt, sollten Sie die aktive Entwicklung von Dark Reader unterstützen.
Crowdfunding wird von Open Collective gehalten, das derzeit Stripe für das Halten von Zahlungen verwendet.
- **Nachricht** - informiert über Versionshinweise und wichtige Ereignisse.
- **Entwicklerwerkzeuge** - Öffnet einen Konfigurations-Editor für den aktuellen Themenmodus.


<h2 id="using-dev-tools">Verwenden der Entwicklerwerkzeuge</h2>

Wenn Sie mit CSS-Selektoren vertraut sind, können Sie eine Korrektur für einige Websites vorschlagen.
Lesen Sie, wie Sie die Entwicklerwerkzeuge verwenden [hier](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="faq">FAQ</h2>

#### Die Erweiterung fragt nach Berechtigungen zum Lesen von Websitedaten und Browserverlauf

Die Erweiterung benötigt diese Berechtigungen, um den Webseitenauftritt zu analysieren und zu modifizieren,
Bestimmen Sie, ob eine Website durch Ihre Einstellungen deaktiviert ist oder verwenden Sie ortspezifische Regeln.
Wir fügen keine Anzeigen ein und sammeln keine Daten oder senden sie nirgendwo hin.
Die Erweiterung ist vollständig Open-Source und hat keinen verschleierten Code.
Unsere Monetarisierung ist transparent und basiert auf Spenden der Nutzer.

#### Die Seiten für die Erweiterungsladen und die Einstellungsseiten bleiben weiß

Die Erweiterung hat keinen Zugriff auf diese Seiten.

#### Neue tab und Browser-Thema bleiben weiß

Die Erweiterung kann nicht das Aussehen einer neuen Registerkarte ändern oder Browser (es kann seit Firefox 60).
Installieren Sie ein dunkles Design oder eine neue Tab-Erweiterung aus dem Erweiterungsladen.

#### Der Bildschirm blinkt weiß, wenn Sie einen neuen Tab öffnen oder auf einer Website navigieren

Vor dem Laden einer Website zeigt Chrome standardmäßig die Hintergrundfarbe des Themas an.
Du solltest also ein dunkles Thema aus dem Laden installieren.

#### Die Erweiterung funktioniert überhaupt nicht

Wenn Sie ähnliche Erweiterungen für den dunklen Modus installiert haben, deaktivieren Sie sie, laden die Tabs neu.
Klicken Sie auf das Symbol Dark Reader, prüfen Sie, ob die Schaltfläche oben rechts auf **Ein** eingestellt ist.
Öffnen Sie die tab **Website-Liste** und prüfen Sie, ob **Nicht umgelistet** ausgewählt ist.
Wenn nichts hilft, ist etwas Schreckliches passiert, mailen Sie uns.

#### Die Website wird nicht korrekt angezeigt oder funktioniert langsam

Bitte senden Sie die Website-Adresse, den Screenshot, Ihre Betriebssystem- und Browserversion an unsere E-Mail-Adresse.
Wir werden versuchen, den Grund herauszufinden, zumindest für eine beliebte Website.
Versuchen Sie auch, den **Themengenerierungsmodus** zu ändern oder versuchen Sie den **Lichtmodus**.
Überprüfen Sie, ob die Website nicht unter der tab **Websiteliste** aufgeführt ist.

#### Die Erweiterung funktioniert nicht im Inkognito-Modus

Öffnen Sie die **chrome://extensions** -Seite, suchen Sie nach **Dark Reader**, klicken Sie auf **Inkognito zulassen**.

#### Die Erweiterung funktioniert nicht für lokale Dateien

Öffnen Sie die Seite **chrome://extensions**, suchen Sie nach **Dark Reader**, klicken Sie auf **Zugriff auf Datei-URLs zulassen**.

#### Die gesamte Website wird im Filtermodus nicht angezeigt

Wenn Sie Chrome für Mac OS verwenden, aktualisieren Sie Mac OS bis 10.13. Dies sollte Ihre Grafiktreiber aktualisieren.
Wenn Sie Firefox verwenden, handelt es sich höchstwahrscheinlich um einen Browser-Fehler. Verwenden Sie für solche Websites einen anderen Modus.


<h2 id="contacts">Kontakte</h2>

Für Fragen (Wir verstehen nur Englisch) senden Sie uns eine E-Mail an [darkreaderapp@gmail.com](mailto:darkreaderapp@gmail.com)
