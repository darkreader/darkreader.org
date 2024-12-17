# Firefox Fixes and Upcoming Performance Improvements

Please learn more about upcoming performance improvements
for all browser versions
and bug fixes for recent Firefox issues.

<figure>
    <img src="/images/firefox-review.jpg" alt="Firefox user review" style="max-width: 24rem;" />
</figure>

### Relationships

On December 5, Reddit.com updated their website and started using modern web technologies,
like Shadow DOM and Adopted Style Sheets, extensively.
Unfortunately [Firefox has a 3-year-old bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1751346)
that disallows extensions from having direct access to these style sheets.
Our existing workaround for the problem started causing performance issues,
so we began the investigation and work on a bug fix immediately.

<figure>
    <img src="/images/firefox-slow-reddit.png" alt="Warning on Reddit website in Firefox" style="max-width: 24rem;">
</figure>

While we allow users to disable the extension for specific websites, and Reddit has a built-in dark theme,
many users who have been enjoying using Dark Reader for years greeted us with 1-star reviews.
It took Mozilla **3 days** to perform an **expedited review** of the update and allow it to be published.

Despite all the work we've put in over the years to improve the performance of the extension and make it work seamlessly,
only 1 in 2000 users of the Firefox add-on supports us financially.
The work we are doing **is stressful and not economically viable**.
If you appreciate our efforts and wish to receive future updates and improvements for the extension,
**please make a one-time payment**,
as you would for any other valuable app or product.

<darkreader-pay-tiers blog style="width: 24rem;"></darkreader-pay-tiers>
<script type="module" src="/elements/pay-tiers.js"></script>

### Performance upgrade

Along with resolving the Reddit issue and optimizing Shadow DOM and Adopted Style Sheets handling,
Dark Reader 4.9.97, released on December 13, includes numerous performance improvements.
The most notable one is postponing the analysis of background images
that are defined in style sheets but not yet present on a web page.
This approach significantly reduces memory consumption (up to 10GB for certain websites) and lowers CPU usage.

### Firefox browser theme bug

*Update: Mozilla approved our update 4.9.99 on December 17. The issue is fixed now.*

Releasing software updates on Friday 13 is considered bad luck, but Mozilla decided on the timing for us.
We started receiving the first complaints in the evening.

<figure>
    <img src="/images/firefox-theme-bug.png" alt="Firefox browser theme bug" style="max-width: 24rem;">
</figure>

The ability to change tabs and address bar colors was introduced back in 2018.
Unfortunately, this theme customization was broken with the latest update, 4.9.97.
We made a bug fix already, but no one at the Mozilla Add-ons team responded to our request for a quicker review so far.

Leaving us a 1-star review won't help resolve the problem, but disabling the feature will.
Simply go to **More** > **Settings** and choose **Default** browser theme.
Alternatively you can go to **All settings** > **General** and disable **Change browser theme** option.

If the browser theme has become white, go to Firefox **Settings** > **General** > **Appearance**
and select **Dark**.

### How to check Dark Reader version and speed up the update

- Go to `about:addons` page (Firefox extensions menu).
- Open **Extensions** tab.
- Click **Dark Reader**. You will see the current version number there.
- Click the tools icon (a cog wheel) in the top-right corner.
- Click **Check for Updates**.

<figure>
    <img src="/images/firefox-check-update.png" alt="Check for extension updates in Firefox" style="max-width: 24rem;">
</figure>

### Future updates

We’re excited for you to experience **the fastest and most robust version** of Dark Reader ever!
However, we ask for your understanding, as the situation described is quite stressful.
The future direction of Dark Reader for Firefox will **depend on your generous support**
and any updates to Mozilla's review practices.

<style>
    darkreader-donate-mascot {
        display: none;
    }
</style>
