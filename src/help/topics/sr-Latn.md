# Pomoć (srpski)

<script id="edge-message-script">
    if (navigator.userAgent.includes('Edg') && navigator.userAgent.includes('Mobile')) {
        const script = document.getElementById('edge-message-script');
        const paragraph = document.createElement('blockquote');
        paragraph.textContent = 'Dragi korisnici Microsoft Edge-a. Ugrađeni tamni režim ometa rad Dark Reader-a. Molimo idite na Menu → Settings → Appearance → Dark theme for all web pages i isključite ako je uključeno.';
        script.parentElement.insertBefore(paragraph, script);
    }
</script>

<div class="intro">
    Dragi čitaoče,
    uložili smo mnogo ljubavi i truda da bismo ovu aplikaciju napravili efikasnom i lakom za upotrebu.
    Vaša <a data-s="d-help-top" href="https://darkreader.org/support-us" target="_blank">donacija</a>
    nam pomaže da nastavimo da je unapređujemo i dodajemo nove funkcionalnosti.
</div>

- [Kratak uvod i često postavljana pitanja](#video)
- [Uslovi korišćenja](../../terms/)
- [Politika privatnosti](../../privacy/)
- [Kontakti](#contacts)


<h2 id="options-icon">Ikonica u traci sa alatima</h2>

<img src="/images/help/darkreader-pin-toolbar-icon.png" alt="Ikonica opcija" style="width: 20rem;" loading="lazy" />

Ako je Dark Reader **ikonica skrivena** nakon instalacije,
kliknite na dugme **Extensions** pored adresne trake, a onda na dugme pored Dark Reader.


<h2 id="video" class="text-highlight">Kratka video uputstva</h2>

- <a target="_blank" rel="noopener" data-s="dryt-help-text" href="https://www.youtube.com/watch?v=849mznBKmIQ">Video uputstvo (1 minut)</a>
- <a target="_blank" rel="noopener" data-s="dryt-help-text" href="https://www.youtube.com/shorts/9nQjBBe8K44">Video uputstvo za mobilnu aplikaciju (30 sekundi)</a>

<blockquote class="pie-help">
    <p>
        <a class="small-pie-logo" target="_blank" rel="noopener" data-s="pie-help-badge"
            href="https://pie.org/darkreader">
            Pie
        </a>
        Pogledajte <strong><a target="_blank" rel="noopener" data-s="pie-help-text"
            href="https://pie.org/darkreader">
                Pie</a></strong>, naše prijateljsko proširenje.
        Blokira reklame na svakom sajtu i omogućava da budete plaćeni ako se odlučite za reklame.
        <strong><a target="_blank" rel="noopener" data-s="pie-help-text"
            href="https://pie.org/darkreader">
                Saznaj više</a></strong>.
    </p>
</blockquote>


<h2 id="top-section">Gornji odeljak</h2>

<img src="/images/help/darkreader-top-section.png" alt="Gornji odeljak" style="width: 15rem;" loading="lazy" />

- Dugme **Uklj./Isklj.** dodaje trenutni sajt u listu ignorisanih sajtova (ili ga odatle briše).
- **Uklj./Isklj.** prekidač omogućava ili onemogućava proširenje.
- Kliknite na linkove ispod dugmića da **promenite prečice** za proširenje.
- Napomena: ako je prekidač izbledeo, to znači da pretraživač ne dozvoljava ubacivanje skripti na trenutnu stranicu.


<h2 id="filter-settings">Podešavanja filtera</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Podešavanja filtera" style="width: 15rem;" loading="lazy" />

Podesite režim, osvetljenost, kontrast, sepiju i saturaciju ("grayscale"). Ovo može biti korišćeno da bolje odgovara parametrima vašeg ekrana i osvetljenju u sobi.


<h2 id="custom-site-settings">Podešavanja za prilagođene sajtove</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Podešavanja za prilagođene sajtove" style="width: 15rem;" loading="lazy" />

Dugme **Samo za** određuje da li podešavanja filtera iznad trebaju da se primene samo za trenutni sajt.

Da biste to podesili, prvo kliknite dugme (koje će se osvetliti), a onda podesite filtere kako želite za trenutni sajt. Kliknite dugme ponovo da otkažete.


<h2 id="site-list">Lista sajtova</h2>

<img src="/images/help/darkreader-site-list.png" alt="Lista sajtova" style="width: 15rem;" loading="lazy" />

- Koristite **Invertuj samo izlistane** ako želite da Dark Reader radi samo na sajtovima sa liste.
- **Ne invertuj izlistane** će učiniti da proširenje ne radi na izlistanim sajtovima.
- Neki od primera vrednosti su `google.com, mail.google.com, google.*, google.com/maps` itd.
- Podržani su regularni izrazi. Trebaju početi i završavati se sa `/`, npr. `/www\.google\..*/`.
- Klikom na dugme **Uklj./Isklj.** (u [gornjem odeljku](#top-section)) dodajete trenutni sajt u ovu listu.

<h2 id="more-tab">Kartica Više</h2>

<img src="/images/help/darkreader-more-tab.png" alt="Kartica Više" style="width: 15rem;" loading="lazy" />

- **Odaberite font** sa spiska (ili unesite ime fonta u Firefox-u), označite **checkbox**.
- Podesite **debljinu teksta**.
- Odaberite **režim generisanja tema**.


<h2 id="theme-generation-modes">Režimi generisanja tema</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Statični vs. Dinamični režim" loading="lazy" />
    <figcaption>Filter+ vs. Statični vs. Dinamični režim</figcaption>
</figure>

- **Dinamično** analizira stilove trenutne stranice, pozadinske slike i vektorsku grafiku.
Zahteva nešto više resursa pri početnom učitavanju stranice,
ali daje vizuelno *najbolje* rezultate.
- **Filter** režim je zasnovan na CSS filterima.
*Invertuje celu stranicu*, pa *vraća neke delove* nazad.
Zahteva resurse grafičke kartice (GPU).
*Brz* je i moćan, ali ima par problema:
onemogućava potpikselno renderovanje teksta,
invertuje već tamne delove u svetle,
izaziva lag-ove na velikim stranicama
i ne uspeva da renderuje neke stranice u Firefox-u.
- **Filter+** je isti kao i Filter, ali je zasnovan na posebnim SVG filterima
i *bolje obrađuje boje*, čineći slike manje mutnim.
Radi loše u Firefox-u.
- **Statično** brzo generiše osnovne stilove.


<h2 id="bottom-section">Donji odeljak</h2>

<img src="/images/help/darkreader-footer.png" alt="Donji odeljak" style="width: 15rem;" loading="lazy" />

- Pročitajte našu **politiku privatnosti**, zapratite nas na **Twitter-u**, pogledajte izvorni kod i doprinesite na **GitHub-u**, pročitajte **pomoćnu** dokumentaciju na ovoj stranici.
- **Donirajte** – ako vam se dopada proširenje, molimo razmislite o tome da podržite njen aktivni razvoj.
- **Vesti** – obaveštenja o novim verzijama i važnim događajima.
- **Alatke za razvoj** – otvara editor konfiguracije trenutnog režima generisanja teme.


<h2 id="using-dev-tools">Korišćenje alatki za razvoj</h2>

Ako ste upoznati sa CSS selektorima, možete pomoći tako što ćete predložiti ispravku za filtriranje nekog sajta.
Kako se koriste alatke za razvoj možete pročitati [ovde](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="tips">Saveti za napredne korisnike</h2>

Želite li još da naučite? Posetite sekciju <a href="../../tips/">Saveti i trikovi</a>.


<h2 id="faq">Često postavljana pitanja</h2>

<h4 class="text-highlight">Kako podržati Dark Reader</h4>

1. <a data-s="d-help-faq" href="https://darkreader.org/support-us">Platite korišćenje Dark Reader-a</a>.
2. Instalirajte <a data-s="drios-help-faq" href="https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180">iOS/macOS aplikaciju</a>.
3. Predložite aplikaciju prijateljima i kolegama.

#### Proširenje traži dozvole za čitanje podataka sa sajta

Proširenju su potrebne te dozvole kako bi moglo da analizira i menja izgled sajtova
i primeni posebna pravila za sajt.
Ne ugrađujemo reklame, ne sakupljamo vaše podatke i nigde ih ne šaljemo.

#### Prodavnica dodataka i stranice sa podešavanjima su i dalje bele

Proširenje nema pristup tim stranicama.

#### Stranica nove kartice i tema pretraživača ostaju bele

Odaberite tamnu temu u podešavanjima vašeg pretraživača.

#### Ekran bljesne belom bojom pri otvaranju nove kartice ili stranice

Pre učitavanja sajta, pretraživač podrazumevano prikazuje pozadinsku boju trenutne teme.
Odaberite tamnu temu u podešavanjima vašeg pretraživača.

#### Proširenje uopšte ne radi

Ažurirajte vaš pretraživač.
Kliknite na ikonicu Dark Reader-a, uverite se da je prekidač u gornjem desnom uglu podešen na **Uklj.** i da **Uklj./Isklj.** ne izuzima trenutni sajt.
Otvorite karticu **Lista sajtova** i uverite se da je **Ne invertuj izlistane** odabrano.
Ako ništa ne pomaže, desilo se nešto baš loše, pošaljite nam e-mail.

#### Sajt se prikazuje pogrešno ili radi sporo

Molimo vas, pošaljite nam adresu sajta, snimak ekrana, verzije vašeg pretraživača i operativnog sistema na naš e-mail.
Probaćemo da nađemo razlog, barem za popularnije sajtove.
Pokušajte koristiti **filter režim** ili **svetli režim** za specifičan sajt.
Uverite se da sajt nije izlistan na kartici **Lista sajtova**.

#### Proširenje ne radi u Incognito režimu

Otvorite stranicu **chrome://extensions**, pronađite **Dark Reader**, uključite **Allow in incognito**.

#### Proširenje ne radi za lokalne fajlove

Otvorite stranicu **chrome://extensions**, pronađite **Dark Reader**, uključite **Allow access to file URLs**.

<h2 id="more">Još</h2>

Pogledajte [Saveti za napredne korisnike](../../tips/) za još informacija.


<h2 id="contacts">Kontakti</h2>

Za bilo kakva pitanja pošaljite nam e-mail na [support@darkreader.org](mailto:support@darkreader.org)
