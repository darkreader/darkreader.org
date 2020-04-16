# ATTENTION! Check if you were affected by malware clones

Several malicious Dark Reader's copies were created,
thousands of users were affected.
Follow this guide to learn how to avoid malware extensions,
and how to check that your Dark Reader copy is valid.

<figure>
    <img src="/images/droids.png" alt="Dark Reader clones" />
</figure>

### Attack of the Clones

An interesting malware technique was revealed recently.
Multiple Dark Reader copies with similar names and additional code
[were removed](https://bugzilla.mozilla.org/show_bug.cgi?id=1618814) from Firefox Add-ons.

A [malicious code](https://www.dropbox.com/s/kgmvolze4p8dfre/output-malware.js?dl=0) was hidden and encoded in a \*.png file.
In 5 days it downloaded and executed [another code](https://www.dropbox.com/s/w91smeukjehzm9l/remote-eval.js?dl=0),
that was **collecting data** from web pages using fake forms,
and later **sent this data** to a remote server.

<figure>
    <img src="/images/malware-code.png" alt="Malware code sample" style="width: 24rem;" />
</figure>

It turned out that similar attacks [happen periodically](https://github.com/rainyrainyday/HomebrewOverlay)
and affect Chrome and Firefox users
*(upd. Edge too)*.

If you were using such an extension,
or noticed some strange website behavior,
or remember getting an SMS security code when you were not trying to sign in somewhere,
**RESET ALL YOUR PASSWORDS**, **REISSUE YOUR CARDS** or contact your bank.
Check your Google, Microsoft, Amazon, or banking account **activity history**.

## What should I do to protect myself?

### 1. Use extensions made by Trusted Companies

First of all, there are extensions that are **owned by large well-known companies**
that value their reputation and are absolutely not interested in doing any harm to you.
Here are a few examples:

#### <a class="text-highlight" href="https://www.joinhoney.com/darkreader">Honey</a>

[<img src="/images/honey-logo.jpg" alt="Honey logo" style="width: 12rem;" />](https://www.joinhoney.com/darkreader)
<br/>
★★★★★

Owned by **PayPal**, Honey **automatically searches and applies coupon codes** while you are making online purchases.
It is currently used by more than 20,000,000 people and states it doesn't sell your data,
but charges a small fee from your saved amount instead.
Savings **can be huge** sometimes.

**Join Honey using <a class="text-highlight" href="https://www.joinhoney.com/darkreader">this link</a>**
and Dark Reader will get some sponsorship.

<figure>
    <img src="/images/honey-screenshot.png" alt="Honey screenshot" style="width: 16rem;" />
</figure>

#### Google Translate

[<img src="/images/google-translate-logo.jpg" alt="Google Translate logo" style="width: 12rem;" />](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb)
<br/>
★★★★☆

This extension is owned by **Google**, the owner of Chrome browser and Chrome Web Store.
You should be calm when using an extension like this.
[See more](https://chrome.google.com/webstore/category/ext/15-by-google) extensions created by Google.

<figure>
    <img src="/images/google-translate-screenshot.png" alt="Google Translate screenshot" style="width: 20rem;" />
</figure>

#### Other companies

Companies like Microsoft, Amazon and others provide helpers for their products.
For example [Office](https://chrome.google.com/webstore/detail/office/ndjpnladcallmjemlbaebfadecfhkepb) extension,
which shows you shortcuts for recent documents and more.
**Double check the developer's name, the website and the installation URLs**.

### 2. Use Recommended Extensions for Firefox

<img src="/images/firefox-recommended-badge.png" alt="Firefox Recommended Extension badge" style="width: 12rem;" />

Firefox Add-ons have a **[Recommended Extensions](https://support.mozilla.org/kb/recommended-extensions-program) program**.
This is a limited set of extensions, picked by Mozilla, that pass a **deep manual review**.
Extensions' authors have to provide a source code, build steps, and are not allowed to use obfuscated code.
Every update passes a detailed review and reviewers ask to clarify any moments they don't get.

Chrome Web Store has **[Editor's Picks](https://chrome.google.com/webstore/category/collection/editors_picks_extensions)** section and other collections,
and the company has tightened up its review process,
but its not clear what exactly happens during the review.

### 3. Use open source extensions

[<img src="/images/ublock-logo.jpg" alt="uBlock logo" style="width: 12rem;" />](https://github.com/gorhill/uBlock)
<br/>
★★★★★

If an extension is not owned by some well-known company,
see if there's a **link to GitHub** or another open source repository.

But don't just stop on the link.
Check if the **update date** corresponds with the **commit history** in the repository.
Find **`manifest.json`** file and have a look if the **version number** is the same.
If you are familiar with JavaScript,
you can even locate the downloaded extension's folder and browse through the source code.

Finally, check if links in ReadMe file point to a correct download page.

The best example of a trusted open source extension is **[uBlock Origin](https://github.com/gorhill/uBlock)**,
an ad blocker by Raymond Hill.

### 4. Use paid extensions

[<img src="/images/momentum-logo.jpg" alt="Honey logo" style="width: 12rem;" />](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca)
<br/>
★★★★☆

Although this is more common for Safari browser, rather than Chrome and Firefox,
if you are using a paid extension,
it is less likely that it will start doing a harm to you.
For example, have a look at [Momentum](https://momentumdash.com/) extension,
which can help you customize a new tab page.

Extensions for the latest Safari are installed from Mac App Store 
and have the same review process as desktop applications.
But **pay attention on subscriptions**.

<figure>
    <img src="/images/mac-app-store-paid-extension.png" alt="Mac App Store - paid Safari extension screenshot" style="width: 16rem;" />
</figure>

### 5. Check the extension's name

You should think twice before installing extensions,
that are named like *Adblock Origin* or *uBlock Plus*.

### 6. Read the reviews

<figure>
    <img src="/images/review-example.png" alt="Review example: this doesn't do a thing" style="width: 24rem;" />
</figure>

While some reviews could be left by people who had a bad day,
make sure that they are mostly positive
and look through some recent negative reviews.
Pay attention to the number of reviews
(e.g. if the extension with 10,000 users has more than 1,000 reviews,
it looks suspicious).

### 7. Protect your accounts

Use 2-factor authentification.
Don't fill in any data on websites, that are not using HTTPS.
Whenever you enter a password, check the URL,
especially if you opened a link from a message.
If it's not obvious, make sure the domain belongs to the company using some Whois service.

### 8. What if I use an extension, that is not open source and not owned by a well-known company?

Well, **use it on your own risk**.
Learn more about the developer, check the website.
Is it a company that has some cool product,
or an individual with a clear GitHub or Linkedin profile?
Then you can give it a try.

Until the stores find a proper way to filter out extensions,
**we have to be attentive**.

<span class="text-highlight">*UPDATE*</span>

## How to check where did you install extensions from

The good news is, that *if you've seen Dark Reader's notification,
you are most likely safe*.
The inspected malware has it hidden (see the screenshot below).
But we strongly recommend you ensure this is true,
and also check other browser extensions' URLs and other info.

### Chrome (Chromium)

- Open [chrome://extensions](chrome://extensions) page.
- For each extension click **Details**.
- Click **View in Chrome Web Store**.
- Genuine Dark Reader has 2,000,000+ users, extension ID is `eimadpbcbfnmbkopoojfekhnkhdbieeh`.

### Firefox

- Open [about:addons](about:addons) page.
- Click on each extension's tile.
- At the bottom click **reviews** and remove `reviews/` from the URL.
- Genuine Dark Reader has 447,538 users at the moment of writing.

### Edge

- Same steps as for Chrome, click **View in Microsoft Store**.
- Genuine Dark Reader has 51 reviews at the moment of writing,
extension ID is `ifoakfbpdcdoeenechcleahebpibofpc`.

### Opera

- Open [opera://extensions](opera://extensions) page.
- Enable **Developer mode**.
- For each extension click **Details**.
- Compare extensions' IDs.
- Genuine Dark Reader's extension ID is `eimadpbcbfnmbkopoojfekhnkhdbieeh`.
- Disable **Developer mode**.

### Genuine installation links

There can be minor differences depending on your language code.
- Chrome [https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh)
- Firefox [https://addons.mozilla.org/en-US/firefox/addon/darkreader/](https://addons.mozilla.org/en-US/firefox/addon/darkreader/)
- Firefox for Android [https://addons.mozilla.org/en-US/android/addon/darkreader/](https://addons.mozilla.org/en-US/android/addon/darkreader/)
- Edge [https://microsoftedge.microsoft.com/addons/detail/ifoakfbpdcdoeenechcleahebpibofpc](https://microsoftedge.microsoft.com/addons/detail/ifoakfbpdcdoeenechcleahebpibofpc)
- Safari [https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180](https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180)

<span class="text-highlight">*UPDATE 2*</span>

## This guy is doing harm to Edge users right now

The users of [-Dark Theme for Edge-](https://microsoftedge.microsoft.com/addons/detail/efhbekcgdnfcakddgllfondiaijpncol)
will not be able to see this notification,
the guy has disabled this functionality.
The extension is using absolutely the same technique as described above.

<figure>
    <img src="/images/edge-malware-screenshot.png" alt="Edge malware screenshot" style="width: 16rem;" />
</figure>

Who knows how many clones of other add-ons are there in Microsoft Store.
The issue has been reported.

<span class="text-highlight">*UPDATE 3*</span>

The discovered malware was taken down,
you will see a notice on [edge://extensions](edge://extensions) page,
if you had it installed.

<figure>
    <img src="/images/malware-taken-down.png" alt="Edge malware screenshot" style="width: 16rem;" />
</figure>

<span class="text-highlight">*To be continued...*</span>

## Finally

Don't worry and have a nice day 😅

And **<a class="text-highlight" href="https://www.joinhoney.com/darkreader">check out</a>** our sponsor's extension
**<a class="text-highlight" href="https://www.joinhoney.com/darkreader">Honey</a>**. And become a sponsor too.
