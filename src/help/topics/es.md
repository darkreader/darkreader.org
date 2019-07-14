# Ayuda (Español)

Este documento le guiará a través de las características de Dark Reader.

- [FAQ](#faq)
- [Contactos](#contacts)
- [Sección superior](#top-section)
- [Ajustes de filtros](#filter-settings)
- [Ajustes de sitios personalizados](#custom-site-settings)
- [Lista de sitios](#site-list)
- [Pestaña Más](#more-tab)
- [Modos de generación de temas](#theme-generation-modes)
- [Sección inferior](#bottom-section)
- [Usando las herramientas para desarrolladores](#using-dev-tools)


<h2 id="top-section">Sección superior</h2>

<img src="/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" />

- El Botón de **Alternar sitio** añade el sitio actual a la lista de ignorados (o lo quita).
- El botón **Sí/No** habilita o deshabilita la extensión.
- Haga click en los enlaces debajo de los botones para **modificar las teclas de acceso rápido**. 
- Si el botón de alternar está en gris, significa que el navegador restringe la inyección de scripts en la página actual.


<h2 id="filter-settings">Ajustes de filtros</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" />

Ajuste los valores de los filtros para que se ajusten mejor a los parámetros de la pantalla y a la iluminación de la habitación.


<h2 id="custom-site-settings">Ajustes de sitios personalizados</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" />

El botón **Sólo para** hace que los ajustes se apliquen sólo en el sitio web actual.

Haga click en el botón, ajuste la configuración, haga click de nuevo para cancelar.


<h2 id="site-list">Lista de sitios</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" />

- Utilice **Invertir sólo listados** si desea que Dark Reader funcione solo en los sitios web de la lista.
- **No invertir listados** impedirá que la extensión funcione en los sitios web listados.
- Los valores posibles son `google.com, mail.google.com, google. *, Google.com / maps` etc.
- Al hacer click en el botón **Alternar sitio** se agrega el sitio a esta lista.

<h2 id="more-tab">Pestaña Más</h2>

<img src="/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" />

- **Seleccione una fuente** de la lista (o introduzca el nombre de la fuente en Firefox), haga clic en la **casilla de verificación**.
- Ajuste el **Trazo del texto**.
- Elija un **Modo de generación del tema**.


<h2 id="theme-generation-modes">Modos de generación de temas</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" />
    <figcaption>Filter+ vs. Static vs. Dynamic mode</figcaption>
</figure>

- **Filtro** es el modo inicial de Dark Reader y está basado en filtros CSS.
**Invierte toda la página** y **revierte algunas partes**.
Requiere recursos de la GPU.
**Rápido** y poderoso, pero tiene varios problemas:
desactiva el renderizado de subpíxeles del texto,
invierte las partes ya oscuras en claras,
causa retrasos en páginas grandes,
falla al renderizar algunas páginas en Firefox.
- **Filtro+** es igual que Filtro, pero se basa en filtros SVG personalizados
y **maneja mejor los colores** haciendo las imágenes menos opacas.
Funciona mal en Firefox.
- **Estático** genera rápidamente una hoja de estilo básica.
- **Dinámico** analiza en profundidad las hojas de estilo del sitio web, imágenes de fondo, gráficos vectoriales.
Requiere algunos recursos en la carga inicial de la página,
pero produce **los mejores** resultados visuales.
El trabajo en este modo está en proceso,
pero ya funciona bien para muchos sitios web modernos.


<h2 id="bottom-section">Sección inferior</h2>

<img src="/images/help/darkreader-footer.png" alt="Bottom section" style="width: 15rem;" />

- Lea nuestra **política de privacidad**, síganos en **Twitter**.
- **Donar** - si te gusta la extensión, considera apoyar el desarrollo activo de Dark Reader.
Crowdfunding está mantenido por Open Collective, que utiliza Stripe en el momento de realizar los pagos.
- **Avisos** - notifica sobre notas de prensa y eventos importantes.
- **Herramientas** - abre un editor de configuración para el modo de tema actual.


<h2 id="using-dev-tools">Using the Developer tools</h2>

If you are familiar with CSS selectors, you can suggest a fix for some websites.
Read how to use the developer tools [here](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="faq">FAQ</h2>

#### The extension asks for permissions to read website data

The extension needs these permissions to be able to analyze and modify website appearence,
determine if a website is disabled by your settings or use site-specific rules.
We do not insert ads and do not collect any data or send it anywhere.
The extension is fully open-source and has no obfuscated code.
Our monetization is transparent and is based on user's donations.

#### Extensions' store page and settings pages remain white

The extension has no access to these pages.

#### New tab page and browser theme remain white

The extension cannot change the appearence of a new tab or browser (it can since Firefox 60).
Install some dark theme or new tab extension from extensions store.

#### Screen flashes white when opening a new tab or navigating a website

Before loading a website, Chrome shows theme background color by default,
so you should install some dark theme from the store.

#### The extension doesn't work at all

If you have similar dark mode extensions installed, disable them, reload tabs.
Click Dark Reader icon, check if top-right button is set to **On**.
Open **Site list** tab, check that **Not invert listed** is selected.
If nothing helps, something terrible has happened, e-mail us.

#### The website is displayed incorrectly or works slow

Please, send the website address, screenshot, your OS and browser versions to our e-mail.
We will try to investigate the reason, at least for a popular website.
Also try changing **theme generation mode** or try using **Light mode**.
Check that website is not listed under **Site list** tab.

#### The extension doesn't work in incognito mode

Open **chrome://extensions** page, find **Dark Reader**, click **Allow in incognito**.

#### The extension doesn't work for local files

Open **chrome://extensions** page, find **Dark Reader**, click **Allow access to file URLs**.

#### Entire website is not displayed in Filter mode

If you are using Chrome for Mac OS, update Mac OS up to 10.13, this should update your video drivers.
If you are using Firefox, this is most likely a browser bug, use another mode for such websites.


<h2 id="contacts">Contacts</h2>

For any questions e-mail to [darkreaderapp@gmail.com](mailto:darkreaderapp@gmail.com)
