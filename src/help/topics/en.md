# Help (English)

This document will guide you through Dark Reader features.

- [FAQ](#faq)
- [Contacts](#contacts)
- [Top section](#top-section)
- [Filter settings](#filter-settings)
- [Custom site settings](#custom-site-settings)
- [Site list](#site-list)
- [More tab](#more-tab)
- [Theme generation modes](#theme-generation-modes)
- [Bottom section](#bottom-section)
- [Using the Developer tools](#using-dev-tools)


<h2 id="top-section">Top section</h2>

<img src="/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" />

- **Toggle site** button adds current site into ignore list (or removes from there).
- **On/Off** switch enables or disables the extension.
- Click on the links under the buttons to **modify hotkeys**.
- If the toggle button is greyed-out, it means that browser restricts injecting scripts into current page.


<h2 id="filter-settings">Filter settings</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" />

Adjust the filter values, that better fit your screen parameters and lighting in the room.


<h2 id="custom-site-settings">Custom site settings</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" />

**Only for** button makes settings to be applied to the current website only.

Click the button, adjust the settings, click again to cancel.


<h2 id="site-list">Site list</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" />

- Use **Invert listed only** if you wish Dark Reader to work only on listed websites.
- **Not invert listed** will prevent the extension from working on listed websites.
- Possible values are `google.com, mail.google.com, google.*, google.com/maps` etc.
- Clicking on **Toggle** button adds site into this list.

<h2 id="more-tab">More tab</h2>

<img src="/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" />

- **Pick a font** from list (or enter font name on Firefox), click the **checkbox**.
- Adjust the **text stroke**.
- Choose a **theme generation mode**.


<h2 id="theme-generation-modes">Theme generation modes</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" />
    <figcaption>Filter+ vs. Static vs. Dynamic mode</figcaption>
</figure>

- **Filter** is initial Dark Reader mode based on CSS filters.
It **inverts the whole page** and **reverts some parts** back.
Requires GPU resources.
**Fast** and powerful, but has several issues:
disables text sub-pixel rendering,
inverts already dark parts into light,
causes lags on large pages,
fails to render some pages in Firefox.
- **Filter+** it the same as Filter, but is based on custom SVG filters
and **handles colors better** making images less dull.
Works bad in Firefox.
- **Static** rapidly generates a basic stylesheet.
- **Dynamic** deeply analyzes website stylesheets, background images, vector graphics.
Requires some resources on initial page load,
but produces **the best** visual results.
The work on this mode is in progress,
but it already works well for many modern websites.


<h2 id="bottom-section">Bottom section</h2>

<img src="/images/help/darkreader-footer.png" alt="Bottom section" style="width: 15rem;" />

- Read our **privacy policy**, follow us on **Twitter**.
- **Donate** – if you like the extension, consider supporting the active Dark Reader development.
Crowdfunding is held by Open Collective, which uses Stripe at the moment for helding payments.
- **News** – notifies about release notes and important events.
- **Developer tools** – opens a config editor for the current theme mode.


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
