# Guida (Italiano)

Questo documento vi guiderà alla scoperta delle funzionalità di Dark Reader.

- [FAQ](#faq)
- [Contatti](#contacts)
- [Parte principale](#top-section)
- [Impostazioni dei filtri](#filter-settings)
- [Impostazioni personalizzate per sito](#custom-site-settings)
- [Lista dei siti](#site-list)
- [Tab Di più](#more-tab)
- [Modalità di generazione dei temi](#theme-generation-modes)
- [Parte inferiore](#bottom-section)
- [Usare gli strumenti per sviluppatori](#using-dev-tools)


<h2 id="top-section">Parte principale</h2>

<img src="/images/help/darkreader-top-section.png" alt="Parte principale" style="width: 15rem;" />

- Il pulsante **Inverti sito** aggiunge (o rimuove) il sito attuale alla lista dei siti ignorati.
- L'interruttore **Accesa/Spenta** abilita o disabilita l'estensione.
- CLicca sui link al di sotto dei pulsanti per **modificare i tasti di scelta rapida**.
- Se l'interruttore è disabilitato, significa che il browser impedisce all'estensione di iniettare script nella pagina corrente.


<h2 id="filter-settings">Impostazione dei filtri</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Impostazione dei filtri" style="width: 15rem;" />

Regola le impostazione dei filtri in modo che si adattino meglio alle impostazioni del tuo schermo e all'illuminazione della stanza.


<h2 id="custom-site-settings">Impostazioni personalizzate per sito</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Impostazioni personalizzate per sito" style="width: 15rem;" />

Il pulsante **Solo per** applica le impostazioni solamente al sito attuale.

Premi il pulsante, modifica le impostazioni, premi nuovamente per annullare..


<h2 id="site-list">Lista dei siti</h2>

<img src="/images/help/darkreader-site-list.png" alt="Lista dei siti" style="width: 15rem;" />

- Utilizza **Inverti solo** per fare in modo che Dark Reader agisca solamente sui siti elencati.
- Utilizza **Non invertire solo** impedirà all'estensione di agire sui siti elencati.
- I valori possibili sono `google.com, mail.google.com, google.*, google.com/maps` etc..
- Cliccare sul pulsante **Inverti** aggiungerà il sito alla lista.

<h2 id="more-tab">Tab Di più</h2>

<img src="/images/help/darkreader-more-tab.png" alt="Tab Di più" style="width: 15rem;" />

- **Seleziona un carattere** dalla lista (o scrivi il nome del carattere su Firefox), clicca sulla **spunta**.
- Modifica il **contorno del testo**.
- Seleziona una **modalità di di generazione del tema**.


<h2 id="theme-generation-modes">Modalità di di generazione del tema</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Modalità Filtro+ vs. Statico vs. Dinamico" />
    <figcaption>Modalità Filtro+ vs. Statico vs. Dinamico</figcaption>
</figure>

- **Filtro** è la modalità iniziale di Dark Reader basata su filtri CSS.
Essa **inverte l'intera pagina** e infine ne **ripristina alcune parti**.
Richiede risorse basate sulla GPU.
**Veloce** e potente, ma con diversi problemi:
disabilita il sub-pixel rendering per il testo,
inverte alcuni elementi già scuri e li rende chiari,
causa rallentamenti su pagine molto estese,
non renderizza alcune pagine su Firefox.
- **Filtro+** è identico a Filtro, ma è basato su filtri SVG personalizzati
e **gestisce meglio i colori** rendendo le immagini meno monotone.
Non funziona bene su Firefox.
- **Statico** genera rapidamente un semplice foglio di stile.
- **Dinamico** esamina profondamente i fogli di stile, le immagini di sfondo e la grafica vettoriale.
Richiede qualche risorsa aggiuntiva in fase di caricamento della pagina,
ma produce **i migliori** risultati visivi.
Il lavoro su questa modalità è in corso,
ma attualmente funziona già correttamente su molti siti moderni.


<h2 id="bottom-section">Parte inferiore</h2>

<img src="/images/help/darkreader-footer.png" alt="Parte inferiore" style="width: 15rem;" />

- Leggi la nostra **informativa sulla privacy**, seguici su **Twitter**.
- **Dona** – se ti piace questa estensione, prendi in considerazione di supportare lo sviluppo continuo di Dark Reader.
Il finanziamento collettivo (crowdfunding) è detenuto da Open Collective, che al momento usa Stripe per finalizzare i pagamenti.
- **Nuove** – ti notifica sulle note di rilascio ed eventi importanti.
- **Strumenti per sviluppatori** – apre un editor di configurazione per la modalità di generazione del tema attuale.


<h2 id="using-dev-tools">Usare gli strumenti per sviluppatori</h2>

Se siete familari di selettori CSS, potrete suggerire un fix per alcuni siti.
Leggi come utilizzare gli strumenti per sviluppatori [qui](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="faq">FAQ</h2>

#### L'estensione chiede il permesso di leggere i dati dei siti

L'estensione richiede questi permessi per essere in grado di analizzare e modificare l'aspetto dei siti web,
determinare se un sito web è stato disabilitato dalle tue configurazioni oppure se utilizza regole specifiche.
Non inseriamo pubblicità e non raccogliamo alcun dato né lo inviamo in alcun modo.
Questa estensione è pienamente open-source e non ha porzioni di codice offuscate.
Il nostro modello di monetizzazione è trasparente ed è basato sulle donazioni degli utenti.

#### La pagina dello store Estensioni e la pagina delle impostazioni rimangono bianche

L'estensione non ha accesso a queste pagine.

#### Un nuovo tab e il tema del browser rimangono bianchi

L'estensione non può modificare l'aspetto di un nuovo tab o del browser (può farlo solamente su Firefox successivi alla versione 60).
Installa un tema scuro o un'estensione per i nuovi tab dallo Store delle Estensioni.

#### Lo schermo lampeggia di bianco quando apro un nuovo tab o nagivo su un sito

Prima di caricare un sito, Chrome mostra come predefinito il colore di sfondo del tema,
la soluzione è installare un tema scuro dallo store.

#### L'estensione non funziona in alcun modo

Se possiedi estensioni che scuriscono i temi e sono simili, disabilitale e ricarica i tab.
Clicca l'icona di Dark Reader, verifica se il pulsante in alto a destra è impostato ad **Accesa**.
Apri il tab **Lista dei siti**, verifica che **Non invertire solo** sia selezionato.
Se niente di tutto ciò funziona, è evidentemente successo qualcosa di orribile, inviaci un'email.

#### Il sito è mostrato in modo scorretto oppure è eccessivamente lento

Per favore inviaci l'indirizzo del sito web, un'istantanea del sito, la versione del tuo Sistema Operativo e del tuo browser via email.
Tenteremo di investigarne le motivazioni, se non altro per i siti più popolari.
Inoltre, puoi tentare di modificare la **modalità di generazione del tema** o provare ad usare la **modalità Chiaro**.
Verifica che il sito non sia stato inserito nel tab **Lista dei siti**.

#### L'estensione non funziona con la navigazione in incognito

Apri la pagina **chrome://extensions**, cerca **Dark Reader**, clicca su **Consenti modalità in incognito**.

#### L'estensione non funziona su file locali

Apri la pagina **chrome://extensions**, cerca **Dark Reader**, clicca su **Consenti l'accesso agli URL dei file**.

#### L'intero sito non viene visualizzato in modalità Filtro

Se stai utilizzando Chrome per Mac OS, aggiorna Mac OS fino alla versione 10.13, questo dovrebbe aggiornare i tuoi driver video.
Se stai utilizzando Firefox, molto probabilmente si tratta di un bug, utilizza un'altra modalità per i siti che mostrano questo malfunzionamento.


<h2 id="contacts">Contatti</h2>

Per qualsiasi (solo in inglese) domanda invia un'email a [darkreaderapp@gmail.com](mailto:darkreaderapp@gmail.com)
