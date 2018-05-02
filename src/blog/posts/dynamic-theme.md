# Dark Reader 4: Introducing Dynamic Theme mode and starting crowdfunding campaign

CSS filters faithfully served us since 2014.
The idea of inverting a web page contents preserving colors hue quickly gained it's popularity.
The solution was fast and simple, but several problems were introduced:
- Dark web-site parts become white.
- Scrolling performance gets sluggish.
- Text becomes blurred.
- Popup elements disappear.
- Colors get washed-out.
- The whole sites are not displayed in recent Chrome and Firefox.

We've received thousands e-mails and reviews describing these problems. Based on your feedback we are introducing the Dynamic
Theme mode.

<figure>
    <img class="no-shadow" src="/images/darkreader-dynamic-mode-twitch.png" alt="Dark Reader Dynamic Theme mode" />
</figure>

### What is the Dynamic Theme mode?

- Dynamic Theme mode analyzes web-site colors and background images reducing lightness where necessary.
- Makes text (or background in Light mode) of a sepia tone reducing harmful blue light.
- Leaves photos colors untouched.
- Doesn't disable sub-pixel rendering technology leaving text edges sharp.
- It is much more performant and works fast even on mobile devices
(using Firefox for Android or any Chromium browser that supports extensions).

To activate the Dynamic Theme mode open Dark Reader settings popup,
click **More** and choose **Dynamic**. Tune your brightness and contrast settings until you feel comfortable.

The work on Dynamic Theme mode is still in progress, your feedback is welcome.
To continue active Dark Reader development we are starting the [crowdfunding campaign](https://opencollective.com/darkreader).
See our <a href="https://github.com/darkreader/darkreader/projects/1" target="_blank">roadmap</a>
and <a href="https://github.com/darkreader/darkreader/issues" target="_blank">list of bugs and feature suggestions</a>.
