# Announcing Dark Reader 5

After 2 years of active development
our [crowdsourced](../dynamic-theme) budget has reached **$12,000**,
the minimal contribution goal for 2018.
But the work on Dark Reader never stops.

Over the past two years the number of users has increased 10 times.
We received an enormous amount of feedback,
there are about 700 unresolved GitHub issues
and thousands of email reports.
The most important of them will be resolved in the meantime.

### User interface improvements

<figure>
    <img src="/images/darkreader-firefox-preview.jpg" alt="Dark Reader on Firefox for Android" />
</figure>

Dark Reader will soon get a better user interface.
It will become **easier to discover existing
and allocate new options**.
Users of [Firefox for Android](https://addons.mozilla.org/en-US/android/addon/darkreader/)
(or Firefox Preview)
can already try a rough preview of the new design.

### Theme presets

Instead of setting a custom theme for a particular website,
sometimes it can be easier to configure a preset
and assign multiple websites to it.

### More theme options

Users frequently ask to add an ability
to set **custom background and text colors**,
disable scrollbar styling, dim images
or customize text selection and links colors.

### Performance improvements

Dymanic mode can now support many websites.
Custom Web Components support was added recently,
making style sheets analysis deeper.
As a drawback the analysis requires more CPU resources.
Several optimizations should be implemented.

### Dev Tools improvements

Using a text editor can be inconvenient and requires HTML and CSS knowledge.
Many users asked to add an **elements' picker**
to highlight and try to fix wrongly inverted elements.

### Bug fixes

Most of the Dynamic mode issues are related to
poor Custom CSS Properties (variables) support
and poor sprite images (icons packed into a single file) analysis.
Other bugs usually require manual Dev Tools fixes.

### Technical debt

Dark Reader's code base is mostly not covered by **automated tests**,
which makes publishing an update risky,
especially due to the increase of review duration in Chrome Web Store.

### Other issues

There are many other bugs and feature requests.
To **help us prioritise them**,
you can simply **put a 👍** for those you find the most important.
See the current sorted list
**[here](https://github.com/darkreader/darkreader/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc)**.

### Thanks

Special thanks to **[@Myshor](https://github.com/Myshor)** (author of 82 Pull Requests)
and **[@Gusted](https://github.com/Gusted)** (author of 48 Pull Requests).

Dark Reader was translated into 30 languages,
thanks for your help.

### Budget

In February 2020 Dark Reader took part in [Open Source Speed Dating](https://opencollective.com/open-source-speed-dating)
event in Brussels, Belgium, sponsored by Mozilla.
Unfortunately the project was not picked for the $10,000 reward.
An obvious winner was an open source laptop by [MNT Research](https://mntre.com/).

<figure>
    <img src="/images/brussels.jpg" alt="Brussels, February 1, 2020" />
</figure>

Nevertheless, the number of Dark Reader's sponsors has reached 1000,
**see the leaderboard [here](https://opencollective.com/darkreader#section-contributors)**.
You can **become a sponsor too**.
