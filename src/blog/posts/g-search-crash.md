# How to fix the recent Google Search issue

On August 28-29, Google Chrome and Microsoft Edge released critical updates
(versions 128.0.6613.114 and 128.0.2739.54 respectively)
which addressed security vulnerabilities. 
Unfortunately, we've been receiving unusual bug reports since then.
**While a patch is on the way, here’s how you can tackle the issue in the meantime**.

<figure>
    <img src="/images/aw-snap.png" alt="Aw, Snap!" />
</figure>

### Relationships

Shortly after the problem arose, **we started receiving numerous 1-star ratings**.
Many people have happily used Dark Reader for years, yet this is how they respond.
Not only do **99.9% of users ignore our calls for financial support**.
But some even go further by ruining our rating and placement in the store.
Please remember that there are real people behind the app,
and **such behavior from our users is deeply demotivating**.

<figure>
    <img src="/images/angry-feedback.webp" alt="Angry feedback">
</figure>

The best way to report an issue is by **emailing us with screenshots and steps to reproduce the problem**.
Tech-savvy users can also **report issues on GitHub**.
Thanks to the user who has recorded a video, so that we could finally see where to begin.

Some say that Dark Reader has become worse and slower, but the truth is quite the opposite.
Over the past year, **we’ve implemented massive performance enhancements** and **significant memory optimizations**.
Yet, the web itself is evolving rapidly—web applications are growing more complex,
standards and frameworks are constantly shifting, and **websites are demanding more and more resources**.

<figure>
    <img src="/images/ram-comparison.webp" alt="RAM usage comparison">
    <figcaption>
        The browser tab on the left consumes 400MB of RAM (the browser consumes 900MB RAM). On the right is an intense 3D video game running on a console with 32MB RAM (YT@JohnGlasscock).
    </figcaption>
</figure>

We are relentlessly **refining the app's engine**, making it faster, more reliable, and ready to tackle new challenges.
Meanwhile, our efforts to **enhance theme customization** continue at full speed.
We deliver the best service possible within our budget and often go above and beyond—**working tirelessly**, even on holidays and weekends.

If you ask, **"How can I support such a great service?"** we have an answer. We’re now offering easy payment options: PayPal and Stripe (for card transactions). If you haven't supported us yet and have been using Dark Reader for a while,
**now is the perfect time for a one-time payment**.

<darkreader-pay-tiers blog style="width: 16rem;"></darkreader-pay-tiers>
<script type="module" src="/elements/pay-tiers.js"></script>

### Google Search problem

<figure>
    <img src="/images/chromium-aw-snap.gif" alt="Demonstration of the Aw,Snap issue">
</figure>

The problem occurs due to a **scrollbar color change** on the Google Search website and primarily **affects Windows user**.
If your browser **window is small**, you may encounter the "Aw, Snap" error when switching between the Google Search menus.
The Chromium bug has been reported and number [363544341](https://issues.chromium.org/issues/363544341) was assigned.
You can **star the issue to draw more attention from the Chromium developers**.

We have already **made a patch in version 4.9.90** 🎉🎉🎉
and are currently awaiting manual review from the Google and Microsoft Store teams.

<blockquote class="pie-help">
    <p>
        <a class="small-pie-logo" target="_blank" rel="noopener" data-s="pie-blog-badge"
            href="https://pie.org/adblock?utm_source=bizdev&utm_medium=cpc&utm_campaign=na_na_us_bizdev_na_na_na_na_adblock&utm_term=na_na_us_bizdev_na_na_na_na_adblock_na_na_na_na_all_na_darkreader&utm_content=na_na_us_bizdev_na_na_na_na_adblock_na_na_na_na_all_na_darkreader_na_na_na_na_na_na_na">
            Pie
        </a>
        Check Out Our Friends at <strong><a target="_blank" rel="noopener" data-s="pie-blog-text"
            href="https://pie.org/adblock?utm_source=bizdev&utm_medium=cpc&utm_campaign=na_na_us_bizdev_na_na_na_na_adblock&utm_term=na_na_us_bizdev_na_na_na_na_adblock_na_na_na_na_all_na_darkreader&utm_content=na_na_us_bizdev_na_na_na_na_adblock_na_na_na_na_all_na_darkreader_na_na_na_na_na_na_na">
                Pie</a></strong>!
    </p>
    <p>
        Not only they <strong>block ads</strong>, they do it in style.
        With features like <strong>Visual Mode</strong>, you can actually watch ads disappear in real-time, making browsing even more satisfying.
        Plus, if you opt into ads, <strong>you can get paid</strong>, which is a pretty sweet deal.
    </p>
    <p>
        And the best part? Pie is  <strong>completely free</strong> and gives you <strong>premium features at no cost</strong>.
        <strong><a target="_blank" rel="noopener" data-s="pie-blog-text"
            href="https://pie.org/adblock?utm_source=bizdev&utm_medium=cpc&utm_campaign=na_na_us_bizdev_na_na_na_na_adblock&utm_term=na_na_us_bizdev_na_na_na_na_adblock_na_na_na_na_all_na_darkreader&utm_content=na_na_us_bizdev_na_na_na_na_adblock_na_na_na_na_all_na_darkreader_na_na_na_na_na_na_na">
                Learn more</a></strong>.
    </p>
</blockquote>

### How to fix the problem

*Update for Microsoft Edge: the version 4.9.90 has passed the review after our request on September 2 and should be available in the Store shortly 🎉🎉🎉! Google refused to perform an expedited review, despite the issue being on Google's side. The fix hasn't been reviewed since the morning of September 1.*

There are several solutions, choose what suits you better.

1. **Simply wait for a few days until the patch arrives**.
Maximize your browser window to avoid triggering the issue.
Check Dark Reader version number at **More**, **All settings**, **About**, **Version**.
The patch should arrive in version 4.9.90.

2. Go to [chrome://flags](chrome://flags) (or [edge://flags](edge://flags)) page.
Search for **`#view-transition-on-navigation`** flag and **Disable** it.
Restart the browser.
Revert to the **Default** option after our patch arrives.

<figure>
    <img src="/images/navigation-flag.png" alt="viewTransition API for navigation">
</figure>

3. The next tip is for advanced users, **do at your own risk**.
- Click Dark Reader **icon**.
- Right-click somewhere in the popup and click **Inspect**.
- Switch to **Console** tab.
- Copy and paste the following script after the **>** symbol and press **Enter** (you may be asked to type **`allow pasting`**):
```js
chrome.storage.local.get({syncSettings:true},
t=>{var s=chrome.storage[t?'sync':'local'];
s.get(['theme'],x=>s.set({theme:{...x.theme,scrollbarColor:''}},
()=>chrome.runtime.reload()))})
```
- **Reload the affected tabs**.

4. If Google Search appears with its own dark theme,
activate **Dark Theme Detection** option in Dark Reader.
This feature was significantly improved in latest releases.

<figure>
    <img src="/images/detect-dark-theme-menu.png" alt="Dark Theme Detection" style="max-width: 18rem;">
</figure>

The issue should be resolved if you choose any of these methods.
If you continue to experience problems with Google Search, please **contact us**.

<style>
    darkreader-donate-mascot {
        display: none;
    }
</style>
