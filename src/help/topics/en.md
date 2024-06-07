# Help (English)

This document will guide you through the features of Dark Reader.

- [FAQ](#faq)
- [Contacts](#contacts)
- [Tips for advanced users](../../tips/)

<h2 id="options-icon">Toolbar icon</h2>

<img src="/images/help/darkreader-pin-toolbar-icon.png" alt="Options icon" style="width: 20rem;" loading="lazy" />

If Dark Reader **icon is hidden** after installation,
click the **Extensions** button next to the address bar and then another button next to Dark Reader.


<h2 id="top-section">Top section</h2>

<img src="/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" loading="lazy" />

- **Toggle site** button adds the current site into the ignore list (or removes it from there).
- **On/Off** switch enables or disables the extension.
- Click on the links under the buttons to **modify the hotkeys** for the extension.
- Note: If the toggle button is greyed-out, it means that browser restricts injecting scripts into current page.


<h2 id="filter-settings">Filter settings</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" loading="lazy" />

Adjust the mode, brightness, contrast, sepia, and saturation ("grayscale") settings. This can be used to better suit your screen parameters and the lighting in the room.


<h2 id="custom-site-settings">Custom site settings</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" loading="lazy" />

The **Only for** button determines whether the above filter settings should only be applied to the current website.

To use, first click the button (which will become highlighted), then adjust the settings as desired for the current website. Click the button again to cancel.


<h2 id="site-list">Site list</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" loading="lazy" />

- Use **Invert listed only** if you wish Dark Reader to work only on listed websites.
- **Not invert listed** will prevent the extension from working on listed websites.
- Possible patterns for values are `google.com, mail.google.com, google.*, google.com/maps` etc.
- Regular expressions are supported. They should start and end with `/`, like `/www\.google\..*/`.
- Clicking the **Toggle** button (in [Top section](#top-section)) adds the current site into this list.

<h2 id="more-tab">More tab</h2>

<img src="/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" loading="lazy" />

- **Pick a font** from list (or enter font name on Firefox), click the **checkbox**.
- Adjust the **text stroke**.
- Select a **theme generation mode**.


<h2 id="theme-generation-modes">Theme generation modes</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" loading="lazy" />
    <figcaption>Filter+ vs. Static vs. Dynamic mode</figcaption>
</figure>

- **Filter** is the initial Dark Reader mode based on CSS filters.
It *inverts the whole page* and *reverts some parts* back.
Requires GPU resources.
It is *fast* and powerful, but has several issues:
it disables text sub-pixel rendering,
inverts already dark parts into light,
causes lags on large pages,
and fails to render some pages in Firefox.
- **Filter+** is the same as Filter, but is based on custom SVG filters
and *handles colors better* making images less dull.
Works poorly in Firefox.
- **Static** rapidly generates a basic stylesheet.
- **Dynamic** deeply analyzes website stylesheets, background images, and vector graphics.
Requires some resources on initial page load,
but produces *the best* visual results.
The work on this mode is in progress,
but it already works well for many modern websites.


<h2 id="bottom-section">Bottom section</h2>

<img src="/images/help/darkreader-footer.png" alt="Bottom section" style="width: 15rem;" loading="lazy" />

- Read our **privacy policy**, follow us on **Twitter**, view source and contribute on **Github**, read the **Help** documentation on this page.
- **Donate** – if you like the extension, please consider supporting the active development of Dark Reader.
- **News** – notifies about release notes and important events.
- **Developer tools** – opens a config editor for the current theme mode.


<h2 id="using-dev-tools">Using the Developer tools</h2>

If you are familiar with CSS selectors, you can help by suggesting a fix for filtering a website.
Read how to use the developer tools [here](https://github.com/darkreader/darkreader#how-to-contribute).

<h2 id="tips">Tips for advanced users</h2>

Do you want to learn more? Please visit our <a href="../../tips/">Tips & Tricks</a> website section.


<h2 id="faq">Frequently Asked Questions</h2>

<h4 class="text-highlight">How to support Dark Reader</h4>

1. <a data-s="d-help-faq" href="https://darkreader.org/support-us">Pay for using Dark Reader</a>.
2. Install our <a data-s="drios-help-faq" href="https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180">iOS/macOS app</a>.
3. Install our sponsors' apps and extensions.
4. Suggest to friends and colleagues.

#### The extension asks for permissions to read website data

The extension needs these permissions to be able to analyze and modify website appearence,
determine if a website is disabled by your settings or to use site-specific rules.
We do not insert ads and do not collect any data or send it anywhere.
The extension is fully open-source and has no obfuscated code.
Our monetization is transparent and is based on users' donations.

#### The extensions store page and settings pages remain white

The extension has no access to these pages.

#### New tab page and browser theme remain white

The extension cannot change the appearence of a new tab or browser (though in Firefox it can since version 60).
We recommend installing a dark theme or new tab extension from extensions store.

#### Screen flashes white when opening a new tab or navigating to a website

Before loading a website, Chrome shows the theme background color by default.
We recommend installing a dark theme from the store.

#### The extension doesn't work at all

If you have similar dark mode extensions installed, disable them, then reload tabs.
Click Dark Reader icon, check if top-right button is set to **On** and that **Toggle site** is not excluding the current site.
Open **Site list** tab, check that **Not invert listed** is selected.
If nothing helps, something terrible has happened, e-mail us.

#### The website is displayed incorrectly or works slowly

Please send the website address, a screenshot, your OS and browser versions to our e-mail.
We will try to investigate the reason, at least for a popular website.
Also try changing **theme generation mode** or try using **Light mode**.
Check that the website is not listed under **Site list** tab.

#### The extension doesn't work in incognito mode

Open **chrome://extensions** page, find **Dark Reader**, click **Allow in incognito**.

#### The extension doesn't work for local files

Open **chrome://extensions** page, find **Dark Reader**, click **Allow access to file URLs**.

#### Entire website is not displayed in Filter mode

If you are using Chrome for Mac OS, update Mac OS up to 10.13, this should update your video drivers.
If you are using Firefox, this is most likely a browser bug, use another mode for such websites.


<h2 id="contacts">Contacts</h2>

For any questions e-mail to [support@darkreader.org](mailto:support@darkreader.org)
