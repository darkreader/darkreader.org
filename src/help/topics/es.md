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

<img src="/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" loading="lazy" />

- El Botón de **Alternar sitio** añade el sitio actual a la lista de ignorados (o lo quita).
- El botón **Sí/No** habilita o deshabilita la extensión.
- Haga click en los enlaces debajo de los botones para **modificar las teclas de acceso rápido**. 
- Si el botón de alternar está en gris, significa que el navegador restringe la inyección de scripts en la página actual.


<h2 id="filter-settings">Ajustes de filtros</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" loading="lazy" />

Ajuste los valores de los filtros para que se ajusten mejor a los parámetros de la pantalla y a la iluminación de la habitación.


<h2 id="custom-site-settings">Ajustes de sitios personalizados</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" loading="lazy" />

El botón **Sólo para** hace que los ajustes se apliquen sólo en el sitio web actual.

Haga click en el botón, ajuste la configuración, haga click de nuevo para cancelar.


<h2 id="site-list">Lista de sitios</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" loading="lazy" />

- Utilice **Invertir sólo listados** si desea que Dark Reader funcione solo en los sitios web de la lista.
- **No invertir listados** impedirá que la extensión funcione en los sitios web listados.
- Los valores posibles son `google.com, mail.google.com, google. *, Google.com / maps` etc.
- Al hacer click en el botón **Alternar sitio** se agrega el sitio a esta lista.

<h2 id="more-tab">Pestaña Más</h2>

<img src="/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" loading="lazy" />

- **Seleccione una fuente** de la lista (o introduzca el nombre de la fuente en Firefox), haga clic en la **casilla de verificación**.
- Ajuste el **Trazo del texto**.
- Elija un **Modo de generación del tema**.


<h2 id="theme-generation-modes">Modos de generación de temas</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" loading="lazy" />
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

<img src="/images/help/darkreader-footer.png" alt="Bottom section" style="width: 15rem;" loading="lazy" />

- Lea nuestra **política de privacidad**, síganos en **Twitter**.
- **Donar** - si te gusta la extensión, considera apoyar el desarrollo activo de Dark Reader.
Crowdfunding está mantenido por Open Collective, que utiliza Stripe en el momento de realizar los pagos.
- **Avisos** - notifica sobre notas de prensa y eventos importantes.
- **Herramientas** - abre un editor de configuración para el modo de tema actual.


<h2 id="using-dev-tools">Usando las herramientas para desarrolladores</h2>

Si está familiarizado con los selectores de CSS, puede sugerir una solución para algunos sitios web.
Lea cómo usar las herramientas para desarrolladores [aquí](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="faq">FAQ</h2>

#### La extensión solicita permisos para leer datos del sitio web

La extensión necesita estos permisos para poder analizar y modificar la apariencia del sitio web,
determine si un sitio web está deshabilitado por su configuración o utilice reglas específicas del sitio.
No insertamos anuncios y no recopilamos datos ni los enviamos a ninguna parte.
La extensión es completamente de código abierto y no tiene ningún código ofuscado.
Nuestra monetización es transparente y se basa en las donaciones de los usuarios.

#### La página de la tienda de extensiones y las páginas de configuración permanecen en blanco

La extensión no tiene acceso a estas páginas.

#### La página de nueva pestaña y el tema del navegador permanecen en blanco

La extensión no puede cambiar la apariencia de una nueva pestaña o navegador (puede hacerlo desde Firefox 60).
Instale un tema oscuro o una nueva extensión de pestaña desde la tienda de extensiones.

#### La pantalla parpadea en blanco al abrir una nueva pestaña o al navegar por un sitio web

Antes de cargar un sitio web, Chrome muestra el color de fondo del tema por defecto,
por lo que debe instalar algún tema oscuro de la tienda.

#### La extensión no funciona en absoluto

Si tiene instaladas extensiones de modo oscuro similares, desactívelas, vuelva a cargar las pestañas.
Haga clic en el icono de Dark Reader, verifique si el botón superior derecho está situado en **On**.
Abra la pestaña **Lista de sitios**, verifique que esté seleccionado **No invertir listados**.
Si nada ayuda, algo terrible ha sucedido, envíenos un correo electrónico.

#### El sitio web se muestra incorrectamente o funciona lento

Por favor, envíe la dirección del sitio web, una captura de pantalla, su sistema operativo y las versiones de su navegador a nuestro correo electrónico.
Intentaremos investigar el motivo, al menos para un sitio web popular.
También intente cambiar **el modo de generación del tema** o intente usar **Modo claro**.
Compruebe que el sitio web no aparece en la pestaña **Lista de sitios**.

#### La extensión no funciona en modo incógnito

Abra la página **chrome://extensions**, busque **Dark Reader**, haga click en **Permitir en incógnito**.

#### La extensión no funciona para archivos locales

Abra la página **chrome://extensions**, busque **Dark Reader**, haga click en **Permitir el acceso a las URLs de los archivos**.

#### El sitio web completo no se muestra en el modo de filtro

Si está utilizando Chrome para Mac OS, actualice Mac OS hasta 10.13, esto debería actualizar sus controladores de video.
Si está utilizando Firefox, es muy probable que se trate de un error del navegador, utilice otro modo para tales sitios web.


<h2 id="contacts">Contactos</h2>

Para cualquier pregunta, envíe un correo electrónico a [darkreaderapp@gmail.com](mailto:darkreaderapp@gmail.com)
(English only)
