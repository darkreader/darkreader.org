# How to use Filter Mode as a fallback for problematic websites

Today we would like to (re)introduce you **Filter mode**.
It can improve your experience on some websites, like *Google Sheets*.
It can be used as a fallback, when suddenly some website's content becomes unreadable in **Dynamic mode**
*(like a problem we recently had with Gmail icons and Google Calendar events)*,
or when instead of inversion you wish to just dim the browser's content.

<figure>
    <img src="/images/filter-mode_sheets.png" alt="Dark filter mode for Google Sheets" style="width: 32rem;" />
</figure>

### What is Filter mode

Filter mode was the initial one available in Dark Reader before 2018.
It dims or inverts the website's content by using CSS or SVG Filters.
It works fast, but may have a small impact on images, videos,
inverts already dark content back to light.
But it may be useful in some cases.

### Activating Filter mode for a particular website

1. Click Dark Reader's icon.
2. Go to *More*.
<figure>
    <img src="/images/filter-mode_more.png" alt="Find filter mode by clicking More" style="width: 16rem;" />
</figure>
3. Click **Only for website name**.
<figure>
    <img src="/images/filter-mode_selection.png" alt="Mode selector" style="width: 16rem;" />
</figure>
4. Choose **Filter** of **Filter+**.
5. Return to **Filter** tab and configure brightness, contrast, sepia, inversion.
<figure>
    <img src="/images/filter-mode_dimm.png" alt="Screen dimmer" style="width: 32rem;" />
</figure>

**Filter+** is based on SVG filters. It produces more vivid colors,
may be a bit slower and usually fails to work in Firefox.

<div>
    <darkreader-inside-post></darkreader-inside-post>
    <script type="module" src="/elements/inside-post.js"></script>
</div>

### Activating Filter mode in v5 Design Preview

If you haven't seen the v5 features preview yet, you can read the instructions [here](../../tips/activate-v5-preview/).

1. Click Dark Reader's icon.
2. Click on **Theme for all websites** dropdown.
3. Select the current website.
4. Click **Mode** dropdown, select **Filter** of **Filter+**.
5. You can select **Light** scheme to just dim the content.
You can find more options by clicking **See all options**.
<figure>
    <img src="/images/filter-mode_v5-ui.png" alt="Dark Reader v5 UI for selecting filter mode" style="width: 16rem;" />
</figure>

Now, if some website looks wrong,
before we are able to fix it,
you can use Filter mode as a fallback.
Some may prefer to use it all the time.

Have a pleasant website browsing!
