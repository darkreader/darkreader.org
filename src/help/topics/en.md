# Help (English)

This document will guide you through the features of Dark Reader.

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

<img src="/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" loading="lazy" />

- **Toggle site** button adds the current site into the ignore list (or removes it from there).
- **On/Off** switch enables or disables the extension.
- Click on the links under the buttons to make extra configuration changes.
    <img src="/images/help/darkreader-site-toggling.png" alt="Site toggling" style="width: 15rem;" loading="lazy" />
    - **Configure website toggling** 
        - **Detect dark theme** button enables or disables the ability for DarkReader to auto-detect and apply a website's built-in dark theme. 
        - **Keyboard shortcut** button lets you modify the hotkey for adding the current website to the [site list](#site-list).
    <img src="/images/help/darkreader-automation.png" alt="automation" style="width: 15rem;" loading="lazy" />
    - **Configure automation** link enables the ability to specify conditions for activation of the extension. 
        - **Set active hours** lets you specify a certain timeframe when the extension will be on.
        - **Set location** lets you specify a certain location when the extension will turn on.
        - **Use system color scheme** lets you detect and follow your system's current color scheme.
        - **Keyboard shortcut** button lets you modify the hotkey for turning on/off the extension.
- Note: If the toggle button is greyed-out, it means that browser restricts injecting scripts into current page.


<h2 id="filter-settings">Filter settings</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" loading="lazy" />

Adjust the mode, brightness, contrast, sepia, and saturation ("grayscale") settings. This can be used to better suit your screen parameters and the lighting in the room.
- **Mode** allows you to toggle between dark and light mode for the current site.
- **Brightness** allows you to adjust the brightness of the current site by increments/decrements of 5.
- **Contrast** allows you to adjust the contrast of the current site by increments/decrements of 5.
- **Sepia** allows you to adjust the sepia-ness, i.e., the red/brownish-ness of the current site by increments/decrements of 5. The default is 0.
- **Grayscale** allows you to adjust the gray-scale of the current site by increments/decrements of 5. The default is 0. Note: Images, videos, and other media components of a website will not be influenced by this setting.


<h2 id="custom-site-settings">Custom site settings</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" loading="lazy" />

The **Only for** buttons in the Filter and More tabs determine whether the specified settings in those tabs should only be applied to the current website.

To use, first click the button (which will become highlighted), then adjust the settings as desired for the current website. Click the button again to cancel.


<h2 id="site-list">Site list</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" loading="lazy" />

- Use **Invert listed only** if you wish Dark Reader to work only on listed websites.
- **Not invert listed** will prevent the extension from working on listed websites.
- Possible patterns for values are `google.com, mail.google.com, google.*, google.com/maps` etc.
- Clicking the **Toggle** button (in [Top section](#top-section)) adds the current site into this list.

<h2 id="more-tab">More tab</h2>

<img src="/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" loading="lazy" />

- **Pick a font** from the list (or if on Firefox, enter a font name). Click the **checkbox** to enable or disable the selected font to be used across all websites.
- Adjust the **text stroke** i.e., the width of the text across all websites.
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
Crowdfunding is powered by Open Collective, which currently uses Stripe for handling payments.
- **News** – notifies about release notes and important events.
- **Developer tools** – opens a config editor for the current theme mode.


<h2 id="using-dev-tools">Using the Developer tools</h2>

If you are familiar with CSS selectors, you can help by suggesting a fix for filtering a website.
Read how to use the developer tools [here](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="faq">FAQ</h2>

<h4 class="text-highlight">How to support Dark Reader</h4>

1. Install our <a data-s="drios-help-faq" href="https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180">iOS/macOS app</a>.
2. Install our sponsors' extensions.
3. <a data-s="d-help-faq" href="https://opencollective.com/darkreader/donate">Donate</a>.
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
