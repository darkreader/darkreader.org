# Nápověda (Česky)

Tento dokument Vám napomůže v používání rozšíření Dark Reader.

- [ČKD](#faq)
- [Kontakt](#contacts)
- [Horní část](#top-section)
- [Nastavení filtrů](#filter-settings)
- [Vlastní nastavení stránky](#custom-site-settings)
- [Seznam stránek](#site-list)
- [Záložka Více](#more-tab)
- [Generátory motivů](#theme-generation-modes)
- [Dolní část](#bottom-section)
- [Vývojářské nástroje](#using-dev-tools)


<h2 id="top-section">Horní část</h2>

<img src="/www/images/help/darkreader-top-section.png" alt="Horní část" style="width: 15rem;" loading="lazy" />

- Tlačítko **Přepnout současnou stránku** přidá současnou stránku do seznamu ignorovaných (nebo ji z něj odstraní).
- Přepínač **Zap/Vyp** zapne nebo vypne rozšíření.
- Klikněte na odkazy pod tlačítky pro **změnu klávesových zkratek**.
- Pokud je tlačítko šedivé, znamená to, že prohlížeč omezuje vložení skriptů na konkrétní stránce.


<h2 id="filter-settings">Nastavení filtru</h2>

<img src="/www/images/help/darkreader-filter-settings.png" alt="Nastavení filtru" style="width: 15rem;" loading="lazy" />

Upravte nastavení filtru, aby lépe odpovídalo vaší obrazovce a osvětlení v místnosti.


<h2 id="custom-site-settings">Vlastní nastavení stránky</h2>

<img src="/www/images/help/darkreader-custom-site-settings.png" alt="Vlastní nastavení stránky" style="width: 15rem;" loading="lazy" />

Tlačítko **Pouze pro** slouží pro použití nastavení pouze pro současnou stránku.

Klikněte na tlačítko, upravte nastavení, klikněte znovu pro zrušení.


<h2 id="site-list">Seznam stránek</h2>

<img src="/www/images/help/darkreader-site-list.png" alt="Seznam stránek" style="width: 15rem;" loading="lazy" />

- Použijte **Invertovat stránky v seznamu** pokud si přejete, aby Dark Reader fungoval pouze a právě na těchto stránkách.
- **Neinvertovat stránky v seznamu** zabrání rozšíření, aby fungovalo na těchto stránkách.
- Možné hodnoty jsou `google.com, mail.google.com, google.*, google.com/maps` atd.
- Kliknutí na tlačítko **Přepnout** přidá stránku do tohoto seznamu.

<h2 id="more-tab">Záložka Více</h2>

<img src="/www/images/help/darkreader-more-tab.png" alt="Záložka Více" style="width: 15rem;" loading="lazy" />

- **Vybrat písmo** ze seznamu (nebo ve Firefoxu napište jméno), klikněte na **zaškrtávací pole**.
- Upravte **tloušťku písma**.
- Vyberte **generátor motivů**.


<h2 id="theme-generation-modes">Generátory motivů</h2>

<figure>
    <img src="/www/images/help/darkreader-theme-modes.png" alt="Filtr+ vs. Statický vs. Dynamický" loading="lazy" />
    <figcaption>Filtr+ vs. Statický vs. Dynamický</figcaption>
</figure>

- **Filtr** je základním generátorem Dark Readeru založeným na CSS filtrech.
**Invertuje celou stránku** a **vrátí některé části** zpět.
Vyžaduje GPU.
**Rychlý** a schopný, ale s několika problémy:
vypíná subpixelové renderování textu,
invertuje již tmavé části na světlé,
způsobuje škubání na velkých stránkách,
zobrazení některých stránek ve Firefoxu selhává.
- **Filtr+** je stejný jako Filtr, ale je založen na vlastních SVG filtrech
a **pracuje lépe s barvami** a tudíž jsou stránky pestřejší.
Špatně funguje ve Firefoxu.
- **Statický** rychle generuje jednoduché CSS styly.
- **Dynamický** hlouběji analyzuje CSS stránky, pozadí a vektorovou grafiku.
Vyžaduje více prostředků při prvním renderování stránky,
ale dosahuje **nejlepších** vizuálních výsledků.
Vývoj tohoto generátoru stále pokračuje,
nicméně již nyní funguje spolehlivě na mnoha moderních stránkách.


<h2 id="bottom-section">Dolní část</h2>

<img src="/www/images/help/darkreader-footer.png" alt="Dolní část" style="width: 15rem;" loading="lazy" />

- Přečtěte si naše **pravidla ochrany soukromí**, sledujte nás na **Twitteru**.
- **Přispějte** – pokud se Vám rozšíření líbí, zvažte podporu probíhajícího vývoje Dark Readeru.
Crowdfunding pořádá Open Collective, které nyní využívá Stripe pro příchozí platby.
- **Novinky** – upozorňuje o poznámkách k vydáním a důležitých událostech.
- **Vývojářské nástroje** – otevře editor konfigurace aktuálního generátoru motivu.


<h2 id="using-dev-tools">Používání vývojářských nástrojů</h2>

Pokud jste obeznámeni s CSS selektory, můžete navrhnout opravu pro některou ze stránek.
Přečtěte si jak používat vývojářské nástroje [zde](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="faq">ČKD</h2>

#### Rozšíření žádá o povolení číst data stránky

Rozšíření potřebuje tato povolení, aby mohlo analyzovat a upravovat vzhled stránky,
rozhodnout jestli je stránka ignorována Vaším nastavením nebo je nutné aplikovat pro stránku specifická pravidla.
Nikdy nikam nevkládáme reklamy a nesbíráme jakákoliv data ani je nikam neposíláme.
Rozšíření je plně open-source a neobsahuje žádný zatemněný kód.
Naše financování je transparentní a závisí na příspěvcích uživatelů.

#### Stránka rozšíření v obchodu a stránka nastavení zůstává bílá

Rozšíření nemá přístup k těmto stránkám.

#### Nová záložka a motiv prohlížeče zůstávají bílé

Rozšíření nemůže změnit vzhled nové záložky nebo prohlížeče (lze to ve Firefoxu od verze 60).
Nainstalujte některé z tmavých motivů nebo rozšíření pro záložky z obchodu s rozšířeními.

#### Obrazovka bíle problikne při otevření nové záložky nebo při brousdání stránkou

Ve výchozím nastavení Chrome před načtení stránky zobrazí barvu pozadí motivu,
proto nainstalujte některé z tmavých motivů z obchodu.

#### Rozšíření vůbec nefunguje

Pokud máte nainstalováno podobné ztmavovací rozšíření, vypněte jej a obnovte záložky.
Klikněte na ikonu Dark Reader a zkontrolujte, že tlačítko vpravo nahoře je nastaveno na **Zap**.
Otevřete záložku **Seznam**, zkontrolujte, že je vybráno **Neinvertovat stránky v seznamu**.
Pokud nic nepomůže, stalo se něco vážného, napište nám e-mail.

#### Stránka se nezobrazuje správně nebo je pomalá

Prosím, pošlete nám adresu stránky, snímek obrazovky, Váš operační systém a verzi prohlížeče na naši e-mailovou adresu..
Pokusíme se zjistit přičinu, alespoň pro hojně navštěvovanou stránku.
Vyzkoušejte také změnit **Generátor motivů** nebo zkuste použít **Světlý mód**.
Ujistěte se, že stránka není v záložce **Seznam**.

#### Rozšíření nefunguje v anonymním režimu

Otevřete stránku **chrome://extensions**, nalezněte **Dark Reader**, klikněte na **Povolit v anonymním režimu**.

#### Rozšíření nefunguje s místními soubory

Otevřete stránku **chrome://extensions**, nalezněte **Dark Reader**, klikněte na **Povolit přístup k URL souboru**.

#### Celá stránka zmizí při použití generátoru Filtr

Pokud používáte Chrome na Mac OS, aktualizujte Mac OS na verzi 10.13, tímto by měly být aktualizovány grafické ovladače.
Pokud používáte Firefox, jedná se nejspíše o chybu v prohlížeči, použijte jiný generátor pro tyto stránky.


<h2 id="contacts">Kontakt</h2>

Dotazy (pouze v angličtině) zasílejte na e-mail [support@darkreader.org](mailto:support@darkreader.org)
