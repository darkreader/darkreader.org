# Help (Nederlands)

Dit document leidt u door de functies van Dark Reader.

- [FAQ](#faq)
- [Contacten](#contacts)
- [Top sectie](#top-section)
- [Filter Instellingen](#filter-settings)
- [Aangepaste site instellingen](#custom-site-settings)
- [Site lijst](#site-list)
- [Meer tabblad](#more-tab)
- [Thema-generatie modus](#theme-generation-modes)
- [Onderste gedeelte](#bottom-section)
- [Gebruik van de ontwikkelaarshulpmiddelen](#using-dev-tools)


<h2 id="top-section">Top sectie</h2>

<img src="/images/help/darkreader-top-section.png" alt="Top sectie" style="width: 15rem;" loading="lazy" />

- **Schakkel site** knop voegt de huidige site toe aan de negeerlijst (of verwijdert deze van de lijst).
- **Aan/Uit** schakelaar schakelt de uitbreiding in of uit.
- Klik op de links onder de knoppen om **sneltoetsen te wijzigen**.
- Als de toggle-knop grijs is, betekent dit dat de browser het injecteren van scripts in de huidige pagina niet toelaat.


<h2 id="filter-settings">Filter Instellingen</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter instellingen" style="width: 15rem;" loading="lazy" />

Pas de filterwaarden aan, die beter passen bij uw schermparameters en de verlichting in de ruimte.


<h2 id="custom-site-settings">Aangepaste site instellingen</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Aangepaste site instellingen" style="width: 15rem;" loading="lazy" />

**Alleen voor** knop maakt instellingen die alleen op de huidige website moeten worden toegepast.

Klik op de knop, pas de instellingen aan, klik nogmaals om te annuleren.


<h2 id="site-list">Site lijst</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site lijst" style="width: 15rem;" loading="lazy" />

- Gebruikt **Alleen omkeren** als u wilt dat Dark Reader alleen op vermelde websites werkt.
- **Niet omkeren** zal voorkomen dat de uitbreiding werkt op genoemde websites.
- Mogelijke waarden zijn `google.com, mail.google.com, google.*, google.com/maps` etc.
- Door te klikken op de knop **Schakel** voegt u site toe aan deze lijst.

<h2 id="more-tab">Meer tabblad</h2>

<img src="/images/help/darkreader-more-tab.png" alt="Meer tabblad" style="width: 15rem;" loading="lazy" />

- **Kies een lettertype** uit de lijst (of voer de naam van het lettertype in op Firefox), klik op het selectievakje **.
- Pas de **tekststreep** aan.
- Kies een **thema-generatie modus**.


<h2 id="theme-generation-modes">Thema-generatie modus</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" loading="lazy" />
    <figcaption>Filter+ vs. Statisch vs. Dynamisch modus</figcaption>
</figure>

- **Filter** is de initiële Dark Reader-modus op basis van CSS-filters.
Het **keert de hele pagina** en **keert sommige delen** terug.
Vereist GPU-bronnen.
**Snel** en krachtig, maar heeft verschillende problemen:
schakelt de tekst sub-pixelweergave uit,
draait alle donkere delen om in naar lichte delen,
veroorzaakt vertragingen op grote pagina's,
slaagt er niet in om sommige pagina's in Firefox weer te geven.
- **Filter+** het is hetzelfde als Filter, maar is gebaseerd op aangepaste SVG-filters
en **kleuren beter behandelt** waardoor beelden minder saai worden.
Werkt slecht in Firefox.
- **Statisch** genereert snel een basis stylesheet.
- **Dynamisch** analyseert de stylesheets van de website, de achtergrondafbeeldingen en de vectorafbeeldingen diepgaand.
Vereist enkele bronnen bij de eerste paginalading,
maar levert **de beste** visuele resultaten op.
Het werk aan deze modus is in volle gang,
maar het werkt al goed voor veel moderne websites.


<h2 id="bottom-section">Onderste gedeelte</h2>

<img src="/images/help/darkreader-footer.png" alt="Onderste gedeelte" style="width: 15rem;" loading="lazy" />

- Lees onze **privacy policy**, volg ons op **Twitter**.
- **Donate** - als de uitbreiding u bevalt, overweeg dan om de actieve ontwikkeling van Dark Reader te ondersteunen.
Crowdfunding is in handen van Open Collective, dat op dit moment Stripe gebruikt voor holdingbetalingen.
- **Nieuws** - informeert over release notes en belangrijke gebeurtenissen.
- **Developer tools** - opent een configuratie-editor voor de huidige themamodus.

<h2 id="using-dev-tools">Gebruik van de ontwikkelaarshulpmiddelen</h2>

Als u bekend bent met CSS-selectoren, kunt u voor sommige websites een oplossing voorstellen.
Lees hoe u de ontwikkelaarshulpmiddelen [hier](https://github.com/darkreader/darkreader#how-to-contribute) kunt gebruiken.


<h2 id="faq">FAQ</h2>

#### De uitbreiding vraagt om toestemming om de gegevens van de website te lezen

De uitbreiding heeft deze rechten nodig om het uiterlijk van de website te kunnen analyseren en wijzigen,
bepaal of een website is uitgeschakeld door uw instellingen of gebruik site-specifieke regels.
Wij voegen geen advertenties in en verzamelen of versturen geen gegevens.
De extensie is volledig open source en heeft geen verdoezelde code.
Onze monetisatie is transparant en is gebaseerd op de donaties van de gebruiker.

#### De pagina met uitbreidingen en instellingen blijven wit.

De uitbreiding heeft geen toegang tot deze pagina's.

#### Nieuw tabblad en browser thema blijven wit

De extensie kan het uiterlijk van een nieuw tabblad of een nieuwe browser niet veranderen (dat kan wel sinds Firefox 60).
Installeer een donker thema of een nieuwe tabbladuitbreiding van de extensions store.

#### Scherm knippert wit bij het openen van een nieuw tabblad of bij het navigeren van een website

Voor het laden van een website toont Chrome standaard de achtergrondkleur van het thema,
dus je moet een donker thema uit de winkel installeren.

#### De uitbreiding werkt helemaal niet

Als u vergelijkbare extensies voor de donkere modus hebt geïnstalleerd, schakelt u deze uit en laadt u de tabbladen opnieuw.
Klik op het pictogram Dark Reader, controleer of de knop rechtsboven is ingesteld op **Aan**.
Open **Site-lijst** tabblad, controleer of **Niet omkeren in de lijst** is geselecteerd.
Als niets helpt, is er iets vreselijks gebeurd, e-mail ons dan.

#### De website wordt verkeerd weergegeven of werkt traag

Stuur het adres van de website, de schermafbeelding, uw besturingssysteem en de browserversies naar onze e-mail.
We zullen proberen de reden te onderzoeken, in ieder geval voor een populaire website.
Probeer ook de **thema-generatie modus** te wijzigen of probeer de **lichtmodus** te gebruiken.
Controleer of de website niet voorkomt op het tabblad **Site list**.

#### De extensie werkt niet in de incognitomodus.

Open **chrome://extension** pagina, zoek **Dark Reader**, klik **Toestaan in incognito**.

#### De extensie werkt niet voor lokale bestanden

Open **chrome://extension** pagina, zoek **DarkReader**, klik **Toegang tot bestands-URL's**.

#### Hele website wordt niet weergegeven in de filtermodus

Als u Chrome voor Mac OS gebruikt, werk dan Mac OS bij tot 10.13, dan moet dit uw videostuurprogramma's bijwerken.
Als u Firefox gebruikt, is dit waarschijnlijk een browserfout, gebruik dan een andere modus voor dergelijke websites.


<h2 id="contacts">Contacten</h2>

Voor vragen kunt u mailen naar [darkreaderapp@gmail.com](mailto:darkreaderapp@gmail.com)
(English only)
