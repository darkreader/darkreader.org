# Help (English)

<script id="edge-message-script">
    if (navigator.userAgent.includes('Edg') && navigator.userAgent.includes('Mobile')) {
        const script = document.getElementById('edge-message-script');
        const paragraph = document.createElement('blockquote');
        paragraph.textContent = 'Dear Microsoft Edge users. The built-in dark mode interferes with Dark Reader. Please go to Menu → Settings → Appearance → Dark theme for all web pages, and if it is enabled, click to disable.';
        script.parentElement.insertBefore(paragraph, script);
    }
</script>

<div class="intro">
    Dear Reader,
    we've put a lot of love and effort into creating this app, making it efficient and easy to use.
    Your <a data-s="d-help-top" href="https://darkreader.org/support-us" target="_blank">payment</a>
    helps us continue enhancing it with new features and improvements.
</div>

- [Quick Guide](#video)
- [FAQ](#faq)
- [Contacts](#contacts)
- [Tips for advanced users](../../tips/)


<h2 id="options-icon">Toolbar Icon</h2>

<img src="/images/help/darkreader-pin-toolbar-icon.gif" alt="Options icon" style="width: 20rem;" loading="lazy" />

If the Dark Reader **icon is hidden** after installation,
click the **Extensions** button next to the address bar and then another button next to Dark Reader.


<h2 id="video" class="text-highlight">1-Minute Video Guide</h2>

<iframe width="560" height="320" src="https://www.youtube-nocookie.com/embed/849mznBKmIQ?si=QpEUoKvD1KwpdOqx" title="Dark Reader quick guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>

<blockquote class="pie-help">
    <p>
        <a class="small-pie-logo" target="_blank" rel="noopener" data-s="pie-help-badge"
            href="https://pie.org/darkreader">
            Pie
        </a>
        Check out <strong><a target="_blank" rel="noopener" data-s="pie-help-text"
            href="https://pie.org/darkreader">
                Pie</a></strong>, our partner extension.
        It blocks ads on every website and enables you to get paid if you choose to opt into ads.
        <strong><a target="_blank" rel="noopener" data-s="pie-help-text"
            href="https://pie.org/darkreader">
                Learn more</a></strong>.
    </p>
</blockquote>

<h2 id="mobile-video" class="text-highlight">30-Seconds Video Guide (mobile app)</h2>

<iframe width="320" height="480" src="https://www.youtube-nocookie.com/embed/9nQjBBe8K44?si=QpEUoKvD1KwpdOqx" title="Dark Reader iOS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>

<a data-s="drios-video-text" href="https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180?platform=iphone" target="_blank" rel="noopener">Download on the App Store</a>


<h2 id="top-section">Top Section</h2>

<img src="/images/help/darkreader-top-section.png" alt="Top section" style="width: 15rem;" loading="lazy" />

- **Toggle site** button adds the current site into the ignore list (or removes it from there).
- **On/Off** switch enables or disables the extension.
- Click on the links under the buttons to **modify the hotkeys** for the extension.
- Note: If the toggle button is greyed-out, it means that browser restricts injecting scripts into the current page.


<h2 id="filter-settings">Filter Settings</h2>

<img src="/images/help/darkreader-filter-settings.png" alt="Filter settings" style="width: 15rem;" loading="lazy" />

Adjust the mode, brightness, contrast, sepia, and saturation ("grayscale") settings. This can be used to better suit your screen parameters and the lighting in the room.


<h2 id="custom-site-settings">Custom Site Settings</h2>

<img src="/images/help/darkreader-custom-site-settings.png" alt="Custom settings" style="width: 15rem;" loading="lazy" />

The **Only for** button determines whether the above filter settings should only be applied to the current website.

To use, first click the button (which will become highlighted), then adjust the settings as desired for the current website. Click the button again to cancel.


<h2 id="site-list">Site List</h2>

<img src="/images/help/darkreader-site-list.png" alt="Site list" style="width: 15rem;" loading="lazy" />

- Use **Invert listed only** if you wish Dark Reader to work only on listed websites.
- **Not invert listed** will prevent the extension from working on listed websites.
- Possible patterns for values are `google.com, mail.google.com, google.*, google.com/maps` etc.
- Regular expressions are supported. They should start and end with `/`, like `/www\.google\..*/`.
- Clicking the **Toggle** button (in [Top section](#top-section)) adds the current site into this list.

<h2 id="more-tab">More Tab</h2>

<img src="/images/help/darkreader-more-tab.png" alt="More tab" style="width: 15rem;" loading="lazy" />

- **Pick a font** from the list (or enter font name on Firefox), click the **checkbox**.
- Adjust the **text stroke**.
- Select a **theme generation mode**.


<h2 id="theme-generation-modes">Theme Generation Modes</h2>

<figure>
    <img src="/images/help/darkreader-theme-modes.png" alt="Filter+ vs. Static vs. Dynamic mode" loading="lazy" />
    <figcaption>Filter+ vs. Static vs. Dynamic mode</figcaption>
</figure>

- **Dynamic** deeply analyzes website style sheets, background images, and vector graphics.
Requires some resources on initial page load,
but produces *the best* visual results.
- **Filter** mode is based on CSS filters.
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


<h2 id="bottom-section">Bottom Section</h2>

<img src="/images/help/darkreader-footer.png" alt="Bottom section" style="width: 15rem;" loading="lazy" />

- Read our **privacy policy**, follow us on **Twitter**, view source and contribute on **Github**, read the **Help** documentation on this page.
- **Donate** – if you like the extension, please consider supporting the active development of Dark Reader.
- **News** – notifies about release notes and important events.
- **Developer tools** – opens a config editor for the current theme mode.


<h2 id="using-dev-tools">Using the Developer Tools</h2>

If you are familiar with CSS selectors, you can help by suggesting a fix for filtering a website.
Read how to use the developer tools [here](https://github.com/darkreader/darkreader#how-to-contribute).


<h2 id="tips">Tips for Advanced Users</h2>

Do you want to learn more? Please visit our <a href="../../tips/">Tips & Tricks</a> website section.


<h2 id="faq">Frequently Asked Questions</h2>

<h4 class="text-highlight">How to support Dark Reader</h4>

1. <a data-s="d-help-faq" href="https://darkreader.org/support-us">Pay for using Dark Reader</a>.
2. Install our <a data-s="drios-help-faq" href="https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180">iOS/macOS app</a>.
3. Suggest to friends and colleagues.

#### The extension asks for permissions to read website data

The extension needs these permissions to be able to analyze and modify website's appearance
and apply site-specific settings.
We do not insert ads and do not collect any data or send it anywhere.

#### The extensions store page and settings pages remain white

The extension has no access to these pages.

#### New tab page and browser theme remain white

Select a dark theme in your browser settings.

#### Screen flashes white when opening a new tab or navigating to a website

Before loading a website, the browser shows a theme background color by default.
Select a dark theme in your browser settings.

#### The extension doesn't work at all

Update your browser.
Click Dark Reader icon, check if the top-right button is set to **On** and that **Toggle site** is not excluding the current site.
Open **Site list** tab, check that **Not invert listed** is selected.
If nothing helps, something terrible has happened, e-mail us.

#### The website is displayed incorrectly or works slowly

Please send the address of the website, a screenshot, your OS and browser versions to our e-mail.
We will try to investigate the reason, at least for a popular website.
Try using **Filter mode** or **Light mode** for a specific website.
Check that the website is not listed under **Site list** tab.

#### The extension doesn't work in Incognito mode

Open **chrome://extensions** page, find **Dark Reader**, click **Allow in incognito**.

#### The extension doesn't work for local files

Open **chrome://extensions** page, find **Dark Reader**, click **Allow access to file URLs**.


<h2 id="contacts">Contacts</h2>

For any questions e-mail to [support@darkreader.org](mailto:support@darkreader.org)
