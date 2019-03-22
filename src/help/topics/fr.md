# Guide (Français)

Ce document vous aide a découvrir les options de Dark Reader.

- [FAQ](#faq)
- [Contacts](#contacts)
- [Section supérieure](#top-section)
- [Paramètres filtre](#filter-settings)
- [Paramètres site particulier](#custom-site-settings)
- [Liste de sites](#site-list)
- [Onglet plus](#more-tab)
- [Modes de génération de thème](#theme-generation-modes)
- [Section inférieure](#bottom-section)
- [Utilisation des outils développeur](#using-dev-tools)


<h2 id="top-section">Section supérieure</h2>

<img src="/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" />

- Le bouton **Basculer le site actuel** ajoute le site à la liste d'ignorés (ou l'enlève).
- Le bouton **On/Off** met en marche ou en arrêt l'extension.
- Clickez les liens sous les boutons pour **modifier raccourcis**.
- Si le boutons est gris, ceci signifie que le navigateur empêche l'injection de scriptes dans la page actuelle.


<h2 id="filter-settings">Paramètres filtre</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" />

Ajuster les valeurs du filtre, pour mieux convenir aux écrans et éclairage de la salle.


<h2 id="custom-site-settings">Paramètres site particulier</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" />

Le bouton **Uniquement pour** applique les paramètres uniquement a ce site particulier.

Clickez pour ajuster les paramètres, reclickez pour annuler.


<h2 id="site-list">Liste de sites</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" />

- Utilisez **Uniquement inversé** si vous souhaitez que Dark Reader fonctionne seulement sur les sites listés.
- **Non inversé** empechera le fonctionnement de l'extension sur les sites listés.
- Les valeurs possibles sont `google.com, mail.google.com, google.*, google.com/maps` etc.
- Clickez sur le bouton **Basculer** pour ajouter un site à cette liste.

<h2 id="more-tab">Onglet plus</h2>

<img src="/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" />

- **Sélectionnez une police** de la liste (ou entrez le nom sur Firefox), clickez la **checkbox**.
- Ajustez le **Trait du texte**.
- Choisissez un **Mode de génération de thème**.


<h2 id="theme-generation-modes">Modes de génération de thème</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" />
    <figcaption>Filter+ vs. Static vs. Dynamic mode</figcaption>
</figure>

- **Filtre** est le mode initial de Dark Reader basé sur les filtres CSS.
Il **inverse la couleure de la page entière** et **rétablit certaines parties **.
Requires GPU resources.
**Rapide** et puissant, mais a plusieurs problèmes:
désactive le rendu du texte sous-pixel,
inverse les parties déjà sombres dans la lumière,
provoque des retards sur les grandes pages,
ne parvient pas à rendre certaines pages dans Firefox.
- ** Filtre + ** identique à Filtre, mais basé sur des filtres SVG personnalisés
et ** gère mieux les couleurs **, ce qui rend les images moins ternes.
Fonctionne mal dans Firefox.
- ** Statique ** génère rapidement une feuille de style de base.
- ** Dynamique ** analyse en profondeur les feuilles de style de sites Web, les images d’arrière-plan, les graphiques vectoriels.
Requiert des ressources lors du chargement initial de la page,
mais produit ** les ** meilleurs résultats visuels.
Le travail sur ce mode est en cours,
mais cela fonctionne déjà bien pour de nombreux sites Web modernes.


<h2 id="bottom-section">Section inférieure</h2>

<img src="/images/help/darkreader-footer.png" alt="Bottom section" style="width: 15rem;" />

- Lisez notre **police de confidentialité**, suivez nous sur **Twitter**.
- **Donations** – si vous aimez l'extension, supportez le dévelopment actif de Dark Reader.
Le crowdfunding est tenu par Open Collective, qui utilise Stripe pour le moment pour retenir les paiments.
- **Infos** – notifications sur les nouvelles versions et évènements importants.
- **Outils développeur** – ouvre un éditeur de configuration pour le mode thème actuel.


<h2 id="using-dev-tools">Utilisation des outils développeur</h2>

Si vous conaissez les selecteurs CSS, vous pouvez suggérer une réparation pour un site.
Lisez comment utiliser les outils développeur [ici](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="faq">FAQ</h2>

#### L'extension demande l'autorisation de lire les données d'un site Web

L’extension a besoin de ces autorisations pour pouvoir analyser et modifier l’apparence d'un site Web,
déterminez si un site Web est désactivé par vos paramètres ou utilisez des règles spécifiques au site.
Nous n'insérons pas d'annonces et ne collectons aucune donnée, ni ne l'envoyons nulle part.
L'extension est entièrement open-source et ne contient pas de code obscurci.
Notre monétisation est transparente et repose sur les dons des utilisateurs.

La page de magasin et les pages de paramètres des extensions #### restent blanches

L'extension n'a pas accès à ces pages.

#### Le nouvel onglet et le thème du navigateur restent blancs

L'extension ne peut pas modifier l'apparence d'un nouvel onglet ou d'un nouveau navigateur (cela est possible depuis Firefox 60).
Installez un thème sombre ou une nouvelle extension d'onglet à partir du magasin d'extensions.

#### L'écran clignote en blanc lors de l'ouverture d'un nouvel onglet ou de la navigation sur un site Web.

Avant de charger un site Web, Chrome affiche la couleur d'arrière-plan du thème par défaut,
vous devez donc installer un thème sombre à partir du magasin.

#### L'extension ne fonctionne pas du tout

Si vous avez installé des extensions de mode noir similaires, désactivez-les, rechargez les onglets.
Cliquez sur l'icône Dark Reader, vérifiez si le bouton en haut à droite est défini sur ** On **.
Ouvrez l'onglet ** Liste de sites **, vérifiez que **Pas inverser la liste** est sélectionné.
Si rien ne vous aide, quelque chose de terrible est arrivé, envoyez-nous un courrier électronique.

#### Le site Web n'est pas affiché correctement ou fonctionne lentement

S'il vous plaît, envoyez l'adresse de votre site Web, votre capture d'écran, votre version du système d'exploitation et de votre navigateur à notre adresse e-mail.
Nous allons essayer de rechercher la raison, au moins pour un site Web populaire.
Essayez également de changer ** le mode de génération de thèmes ** ou d'utiliser **le mode Lumière**.
Vérifiez que le site Web n'est pas répertorié sous l'onglet **Liste de sites**.

#### L'extension ne fonctionne pas en mode navigation privée

Ouvrez ** chrome: // extensions ** page, recherchez ** Dark Reader **, cliquez sur ** Autoriser en mode navigation privée**.

#### L'extension ne fonctionne pas pour les fichiers locaux

Ouvrez ** chrome: // extensions ** page, recherchez ** Dark Reader **, cliquez sur ** Autoriser l'accès aux URL de fichiers**.

#### Tout le site n'est pas affiché en mode filtre

Si vous utilisez Chrome pour Mac OS, mettez à jour Mac OS jusqu'à la version 10.13, ce qui devrait mettre à jour vos pilotes vidéo.
Si vous utilisez Firefox, il s'agit probablement d'un bogue de navigateur. Utilisez un autre mode pour ces sites.


<h2 id="contacts">Contacts</h2>

Toutes questions (nous comprenons seulement l'anglais) peuvent être envoyées par e-mail à [darkreaderapp@gmail.com](mailto:darkreaderapp@gmail.com)
