# Help (English)

This document will guide you through the features of Dark Reader.

-   [FAQ](#faq)
-   [Contacts](#contacts)
-   [Tips for advanced users](../../tips/)

<h2 id="options-icon">Options icon</h2>

<img src="/images/help/darkreader-icon-edge.png" alt="Options icon" style="width: 20rem;" loading="lazy" />

Sometimes the Dark Reader icon is hidden after installation.
To display the icon, click the **Extensions** button next to the address bar and then another button next to Dark Reader.

<h2 id="top-section">Top section</h2>

<img src="/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" loading="lazy" />

-   **Toggle site** button adds the current site to the ignore list (or removes it from there).
-   **On/Off** switch enables or disables the extension.
-   Click on the links under the buttons to **modify the hotkeys** for the extension.
-   Note: If the toggle button is grayed out, it means that the browser restricts injecting scripts into the current page.

<h2 id="filter-settings">Filter settings</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" loading="lazy" />

Adjust the mode, brightness, contrast, sepia, and saturation ("grayscale") settings. This can be used to better suit your screen parameters and the lighting in the room.

<h2 id="custom-site-settings">Custom site settings</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" loading="lazy" />

The **Only for** button determines whether the above filter settings should only be applied to the current website.

To use, first click the button (which will become highlighted), then adjust the settings as desired for the current website. Click the button again to cancel.

<h2 id="site-list">Site list</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" loading="lazy" />

-   Use **Invert listed only** if you wish Dark Reader to work only on listed websites.
-   **Not inverted listed** will prevent the extension from working on listed websites.
-   Possible patterns for values are `google.com, mail.google.com, google.*, google.com/maps`, etc.
-   Clicking the **Toggle** button (in [Top section](#top-section)) adds the current site to this list.

<h2 id="more-tab">More tab</h2>

<img src="/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" loading="lazy" />

-   **Pick a font** from the list (or enter the font name in Firefox) and click the **checkbox**.
-   Adjust the **text stroke**.
-   Select a **theme generation mode**.

<h2 id="theme-generation-modes">Theme generation modes</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" loading="lazy" />
    <figcaption>Filter+ vs. Static vs. Dynamic mode</figcaption>
</figure>

-   **Filter** is the initial Dark Reader mode based on CSS filters.
    It _inverts the whole page_ and _reverts some parts_ back.
    Requires GPU resources.
    It is _fast_ and powerful, but has several issues:
    It disables text sub-pixel rendering,
    inverts already dark parts into light,
    causes lag on large pages,
    and fails to render some pages in Firefox.
-   **Filter+** is the same as Filter but is based on custom SVG filters
    and _handles colors better_ making images less dull.
    Works poorly in Firefox.
-   **Static** rapidly generates a basic stylesheet.
-   **Dynamic** deeply analyzes website stylesheets, background images, and vector graphics.
    It requires some resources on the initial page load,
    but produces _the best_ visual results.
    The work on this mode is in progress,
    but it already works well for many modern websites.

<h2 id="bottom-section">Bottom section</h2>

<img src="/images/help/darkreader-footer.png" alt="Bottom section" style="width: 15rem;" loading="lazy" />

-   Read our **privacy policy**, follow us on **Twitter**, view sources and contribute on **Github**, and read the **Help** documentation on this page.
-   **Donate** – if you like the extension, please consider supporting the active development of Dark Reader.
    Crowdfunding is powered by Open Collective, which currently uses Stripe for handling payments.
-   **News** – notifies about release notes and important events.
-   **Developer tools** – opens a config editor for the current theme mode.

<h2 id="using-dev-tools">Using the Developer Tools</h2>

If you are familiar with CSS selectors, you can help by suggesting a fix for filtering a website.
Read how to use the developer tools [here](https://github.com/darkreader/darkreader#how-to-contribute).

<h2 id="tips">Tips for advanced users</h2>

Do you want to learn more? Please visit our <a href="../../tips/">Tips & Tricks</a> website section.

<h2 id="faq">Frequently Asked Questions</h2>

<h4 class="text-highlight">How to support Dark Reader</h4>

1. Install our <a data-s="drios-help-faq" href="https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180">iOS/macOS app</a>.
2. Install our sponsors' apps and extensions.
3. <a data-s="d-help-faq" href="https://opencollective.com/darkreader/donate">Donate</a>.
4. Suggest to friends and colleagues.

#### The extension asks for permission to read website data

The extension needs these permissions to be able to analyze and modify the appearance of the website.
determine if a website is disabled by your settings or to use site-specific rules.
We do not insert ads and do not collect any data or send it anywhere.
The extension is fully open-source and has no obfuscated code.
Our monetization is transparent and is based on users' donations.

#### The extensions store page and settings pages remain white

The extension has no access to these pages.

#### The new tab page and browser theme remain white

The extension cannot change the appearance of a new tab or browser (though in Firefox it can since version 60).
We recommend installing a dark theme or a new tab extension from the extensions store.

#### The screen flashes white when opening a new tab or navigating to a website

Before loading a website, Chrome shows the theme background color by default.
We recommend installing a dark theme from the store.

#### The extension doesn't work at all

If you have similar dark mode extensions installed, disable them, then reload tabs.
Click the Dark Reader icon and check if the top-right button is set to **On** and that **Toggle site** does not exclude the current site.
Open the **Site list** tab, and check that **Not invert listed** is selected.
If nothing helps and something terrible has happened, e-mail us.

#### The website is displayed incorrectly or works slowly

Please send the website address, a screenshot, and OS and browser versions to our e-mail.
We will try to investigate the reason, at least for a popular website.
Also, try changing **theme generation mode** or try using **Light mode**.
Check that the website is not listed under the **Site list** tab.

#### The extension doesn't work in incognito mode

Open the **chrome://extensions** page, find **Dark Reader**, and click **Allow in incognito**.

#### The extension doesn't work for local files

Open the **chrome://extensions** page, find **Dark Reader**, and click **Allow access to file URLs**.

#### The entire website is not displayed in Filter mode

If you are using Chrome for Mac OS, update Mac OS to 10.13; this should update your video drivers.
If you are using Firefox, this is most likely a browser bug; use another mode for such websites.

<h2 id="contacts">Contacts</h2>

For any questions, e-mail to [support@darkreader.org](mailto:support@darkreader.org)
