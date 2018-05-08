# Dark Reader 4.4: Custom site settings, inverted iFrames and many Dynamic Theme improvements

Some most requested features were implemented in version 4.4.

### Custom site settings

<figure>
    <img src="/images/darkreader-custom-site-settings.png" alt="Dark Reader custom site settings" style="width: 24rem;" />
</figure>

It is now possible to set up settings for a specific website.

Click **Apply to example.com** button and adjust the filter settings or switch between Filter/Dynamic/Static mode for current website. Click again to cancel and use global settings.

### iFrames content handling

<figure>
    <img src="/images/darkreader-inverts-iframes.png" alt="Dark Reader inverts iFrames" style="width: 30rem;" />
</figure>

Previously iFrames (parts of external websites) were inverted entirely or were left white.
Now the content inside iFrames is fully processed.

### Dynamic Theme improvements

<figure>
    <img src="/images/darkreader-handles-svg.png" alt="Dark Reader handles inline styles and SVGs" style="width: 32rem;" />
</figure>

Dark Reader now processes inline styles and SVG images: newsletters, vector icons and charts should look better.

Many other Dynamic Theme mode bugs were fixed, you can track the progress [here](https://github.com/darkreader/darkreader/commits). Dynamic mode became default for new users.

### Other bug fixes
- Firefox browser theme will not be changed by default.
See the **Browser theme** option under **More tab**.
*Please note that Firefox still has a bug, which resets browser theme to default
if the feature was disabled in extension. In such case you have to re-enable preffered theme add-on.*
- Fixed inverting pages opened at browser startup.
- Default Chrome scrollbars are now darkened on Windows.
