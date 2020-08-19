# Move your static CSS from Stylish to Dark Reader

Robert Hearton, a software engineer at Stripe,
[revealed some unwanted functionality in Stylish extension](https://robertheaton.com/2018/07/02/stylish-browser-extension-steals-your-internet-history/).

In 2017 the extension [was acquired](https://forum.userstyles.org/discussion/53233/announcement-to-the-community)
by the SimilarWeb, web research company, and since that time it tracks your browsing history. Stylish seems to have been removed from Chrome Web Store and Firefox add-ons.

### How to migrate your static CSS

Since version 4.6.0 Dark Reader has support for custom style sheets.
Static CSS works faster and requires less resources than dynamic analysis or CSS filters.
- Search for a custom CSS skin for a popular website [somewhere](https://userstyles.org/).
- Open **More** tab.
<figure>
    <img src="/images/darkreader-css-edit-button.png" alt="Dark Reader custom CSS edit button" style="width: 16rem;" />
</figure>
- Click **Only for** button (don't click if you want some CSS to be applied to all websites by default).
- Switch to **Static** mode.
- Click **Edit** icon under **Static** button.
- Paste your CSS code into text block.
- Click **Apply**.
- To disable click **Reset** or un-check **Only for** button.

<figure>
    <img src="/images/darkreader-css-editor.png" alt="Dark Reader CSS editor" />
</figure>

### Privacy Policy

As stated in our [Privacy Policy](http://darkreader.org/privacy/),
Dark Reader is not going to collect your browsing history and sell it to third parties.
