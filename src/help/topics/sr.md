# Pomoć (srpski)

Ovaj dokument će vas upoznati sa mogućnostima Dark Reader-a.

- [Često postavljana pitanja](#faq)
- [Kontakti](#contacts)
- [Saveti iskusnim korisnicima](../../tips/)


<h2 id="top-section">Gornji odeljak</h2>

<img src="/images/help/darkreader-top-section.png" alt="Gornji odeljak" style="width: 15rem;" loading="lazy" />

- Dugme **Uklj. trenutni sajt** dodaje trenutni sajt u listu izuzetaka (ili ga odatle briše).
- **Uklj/Isklj** prekidač omogućava ili onemogućava ekstenziju.
- Kliknite na veze ispod dugmadi da **promenite tasterske prečice** za ekstenziju.
- Napomena: ako je prekidač izbledeo, onda pregledač ne dâ da se na trenutnu stranicu ubacuju skripte.


<h2 id="filter-settings">Podešavanja filtera</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Podešavanja filtera" style="width: 15rem;" loading="lazy" />

Podesite mod, osvetljenje, kontrast, sepiju i saturaciju ("sivi mod"), tako da bolje odgovara parametrima vašeg ekrana i osvetljenju u sobi.


<h2 id="custom-site-settings">Podešavanja za konkretne sajtove</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Podešavanja za konkretne sajtove" style="width: 15rem;" loading="lazy" />

Dugme **Samo za** određuje da li podešavanja filtera iznad trebaju da se primene samo za trenutni sajt.

Da biste to podesili, prvo kliknite dugme (koje će se osvetliti), onda podesite filtere kako želite za trenutni sajt. Kliknite dugme opet da otkažete.


<h2 id="site-list">Lista sajtova</h2>

<img src="/images/help/darkreader-site-list.png" alt="Lista sajtova" style="width: 15rem;" loading="lazy" />

- Koristite **Invertujte izlistane** ako želite da Dark Reader radi samo sa sajtovima na listi.
- **Ne invertujte izlistane** će učiniti da ekstenzija ne radi na izlistanim sajtovima.
- Primeri mogućih značenja su `google.com, mail.google.com, google.*, google.com/maps` itd.
- Klik na dugme **Uklj. trenutni sajt** (u [gornjem odeljku](#top-section)) dodaje trenutni sajt na ovu listu.

<h2 id="more-tab">Kartica "Više"</h2>

<img src="/images/help/darkreader-more-tab.png" alt="Kartica Više" style="width: 15rem;" loading="lazy" />

- **Izaberite font** sa spiska (ili unesite ime fonta u Firefox-u), označite **polje**.
- Podesite **debljinu teksta**.
- Izaberite **mod generisanja tema**.


<h2 id="theme-generation-modes">Modovi generisanja tema</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. statični vs. dinamični mod" loading="lazy" />
    <figcaption>Filter+ vs. statični vs. dinamični mod</figcaption>
</figure>

- **Dinamično** analizira stilove trenutne stranice, pozadinske slike, vektorsku grafiku.
Zahteva nešto više resursa pri početnom učitavanju stranice,
ali daje vizuelno *najbolje* rezultate.
- **Filter** je početni mod Dark Reader-a, zasnovani na CSS filterima.
*Invertuje celu stranu*, pa *invertuje neke delove* nazad.
Zahtevan je prema grafičkoj jedinici.
*Brz* je, ali ima par mana:
onemogućava potpikselno renderovanje teksta,
invertuje već tamne delove u svetle,
izaziva usporavanja na većim stranicama,
i ne renderuje neke strane u Firefox-u.
- **Filter+** je isto što i Filter, ali je zasnovano na posebnim SVG filterima
i *bolje obrađuje boje,* čineći slike manje mutnim.
Loše radi u Firefox-u.
- **Statično** brzo generiše jednostavnu temu.


<h2 id="bottom-section">Donji odeljak</h2>

<img src="/images/help/darkreader-footer.png" alt="Donji odeljak" style="width: 15rem;" loading="lazy" />

- Pročitajte našu **izjavu o privatnosti**, zapratite nas na **Tviteru**, pogledajte izvorni kod i doprinesite na **GitHub-u**, pročitajte **pomoćnu** dokumentaciju na ovoj stranici.
- **Donirajte** – ako vam se dopada ekstenzija, molimo razmislite o tome da podržite njen aktivni razvoj.
- **Vesti** – obaveštava o novim verzijama i važnim događajima.
- **Alatke za razvoj** – otvara editor konfiguracije trenutnog moda generisanja teme.


<h2 id="using-dev-tools">Korišćenje alatki za razvoj</h2>

Ako ste upoznati sa CSS selektorima, možete pomoći tako što ćete predložiti ispravku za filtriranje nekog sajta.
Kako se koriste alatke za razvoj možete pročitati [ovde](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="faq">Često postavljana pitanja</h2>

#### Ekstenzija zahteva dozvole za pristup sajtovima

Ekstenziji su potrebne te dozvole da bi mogla da analizira i menja izgled sajtova,
odredi da li je sajt izuzet u vašim podešavanjima, ili koristi posebna pravila za trenutni sajt.
Ne ugrađujemo reklame, ne sakupljamo vaše podatke, i nigde ih ne šaljemo.

#### Prodavnica sa dodacima i stranice sa podešavanjima su i dalje bele

Ekstenzija nema pristup tim stranicama.

#### Stranica nove kartice i tema pregledača su i dalje bele

Ekstenzija ne može da menja izgled nove kartice ili pregledača (osim na Firefox-u od verzije 60).
Preporučujemo vam da instalirate neku tamnu temu ili ekstenziju za nove kartice iz vaše prodavnice sa dodacima.

#### Ekran bljesne belom pri otvaranju nove kartice ili stranice

Pre učitavanja stranice, Chrome pokazuje pozadinsku boju trenutne teme.
Preporučujemo vam da instalirate neku tamnu temu iz vaše prodavnice sa dodacima.

#### Ekstenzija uopšte ne radi

Ako imate slične ekstenzije za tamnu temu instalirane, onemogućite ih, pa ponovo učitajte kartice.
Kliknite na ikonicu Dark Reader-a i uverite se da je prekidač u gornjem desnom uglu podešen na **Uklj**, i da **Uklj. trenutni sajt** ne izuzima trenutni sajt.
Otvorite karticu **Lista sajtova** i uverite se da je **Ne invertujte izlistane** odabrano.
Ako ništa ne pomaže, onda je sve baš loše, pošaljite nam imejl.

#### Sajt se prikazuje pogrešno ili radi sporo

Molimo vas, pošaljite nam adresu sajta, snimak ekrana, verzije vašeg pregledača i OS na naš imejl.
Probaćemo da nađemo razlog, bar za popularnije sajtove.
Takođe probajte da promenite **mod generisanja tema** ili probajte **Svetli mod**.
Uverite se da sajt nije na kartici **Lista sajtova**

#### Ekstenzija ne radi u inkognito režimu

Otvorite stranu **chrome://extensions**, nađite **Dark Reader**, uključite **Omogući u režimu bez arhiviranja**.

#### Ekstenzija ne radi za lokalne fajlove

Otvorite stranu **chrome://extensions**, nađite **Dark Reader**, uključite **Dozvoli pristup URL adresama datoteka**.


<h2 id="contacts">Kontakti</h2>

Sa bilo kakvim pitanjima obratite nam se na [support@darkreader.org](mailto:support@darkreader.org)
