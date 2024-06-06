// @ts-check

import {country, isHCountry} from './locales.js';
import {
    createHTMLElement as html,
} from './utils.js';
import {clicker} from './stats.js';

const hURL = 'https://www.joinhoney.com/darkreader';

let browserText = 'extension';
if (navigator.userAgent.includes('Firefox')) {
    browserText = 'for Firefox';
} else if (navigator.userAgent.includes('Edg')) {
    browserText = 'for Edge';
} else if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrom')) {
    browserText = 'for Safari';
} else if (navigator.userAgent.includes('OPR')) {
    browserText = 'for Opera';
} else if (navigator.userAgent.includes('Chromium')) {
    browserText = 'for Chromium';
} else if (navigator.userAgent.includes('Chrome')) {
    browserText = 'for Chrome';
}

const titleHTMLText = `
<div class="up-title">
    Check out these wonderful apps
</div>
`;

const containerHTMLText = `
<div class="ups"></div>`;

const hHTMLText = `
<div class="up">
    <a href="${hURL}" target="_blank" rel="noopener"
        class="up-logo-link h-logo-link">Honey</a>
    <span class="up-text">
        <a href="${hURL}" target="_blank" rel="noopener"
            class="up-link h-link"
        >Honey ${browserText}</a>,
        a product of <strong class="h-text-pp">PayPal</strong>.
        Automatically find and apply discounts when you purchase online.
        Join for <strong>free</strong> and get coupons.
        <a href="${hURL}" target="_blank" rel="noopener"
            class="h-lm">Learn more</a>.
    </span>
</div>
`;

const ddgURL = 'https://duckduckgo.com/browser?ref=darkreader';
const ddgIosURL = 'https://apps.apple.com/app/duckduckgo-privacy-browser/id663592361?platform=iphone&ct=darkreader&pt=866401&mt=8';
const ddgAndroidURL = 'https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=utm_campaign%3darkreader&ref=darkreader';
const ddgMacURL = 'https://duckduckgo.com/mac?ref=darkreader';
const ddgWinURL = 'https://duckduckgo.com/windows?ref=darkreader';

const ddgHTMLText = `
<!--
<div class="up">
    <a href="${ddgURL}" target="_blank" rel="noopener"
        class="up-logo-link ddg-logo-link">DuckDuckGo Browser</a>
    <span class="up-text">
        <a href="${ddgURL}" target="_blank" rel="noopener"
            class="up-link ddg-link"
        >Download DuckDuckGo Private Browser</a>.
        Search and browse more privately with the free browser for
        <a href="${ddgIosURL}" target="_blank" rel="noopener"
            class="ddg-link">iOS</a>,
        <a href="${ddgAndroidURL}" target="_blank" rel="noopener"
            class="ddg-link">Android</a>,
        <a href="${ddgMacURL}" target="_blank" rel="noopener"
            class="ddg-link">Mac</a> and
        <a href="${ddgWinURL}" target="_blank" rel="noopener"
            class="ddg-link">Windows</a>.
    </span>
</div>
-->
`;

const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180?platform=iphone';

const appleHTMLText = `
<div class="up">
    <a href="${safariURL}" target="_blank" rel="noopener"
        class="safari-logo-link">Dark Reader for Safari</a>
    <span class="up-text">
        <strong>Dark Reader</strong> for
        <a href="${safariURL}" target="_blank" rel="noopener"
            class="up-link safari-link">iOS, iPadOS, macOS</a>
        is available!
    </span>
</section>
`;

const uaSupportHTMLText = `
<div class="support-ua">
    <a href="https://bank.gov.ua/en/about/humanitarian-aid-to-ukraine" target="_blank" rel="noopener">
        <strong>Humanitarian aid to Ukraine</strong>
        (official link)
    </a>
</div>
`;

const uaHTMLText = `
<h1 class="ua" style="text-align: center;">
    <span style="color: #2d50ff;">Тримайтеся брати!</span><br>
    <span style="color: #f8cf1f;">Україна буде вільною!</span>
</h1>
`;

const svgPlusIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="#53a1b3" d="M3,0 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z"/></svg>';

function svgDataURL(svgText) {
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(svgText)}')`;
}

const cssText = `
a {
    color: var(--color-text);
    outline: none;
    transition: color 125ms;
}
a:hover {
    color: var(--color-text-hover);
}
.rec-inplace-h {
    color: var(--color-hover);
    font-weight: bold;
}
.ups {
    border: 0.125rem solid var(--color-control);
    border-radius: 1rem;
    max-width: 35.5rem;
}
.up {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
}
.up:not(:last-child) {
    border-bottom: 0.0625rem solid var(--color-control);
}
.up-logo-link {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    display: inline-block;
    flex: none;
    margin: 0.25rem 0 0.25rem 0.25rem;
    text-indent: -999rem;
    transition: box-shadow 250ms;
}
.up-logo-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.h-logo-link {
    background-color: var(--color-honey);
    background-image: url(/images/honey-logo-white.svg);
    background-position: 50% 52%;
    background-repeat: no-repeat;
    background-size: 6rem auto;
    border-radius: 0.625rem;
    height: 5rem;
    width: 7.5rem;
}
.ddg-logo-link {
    background-color: #DE5833;
    background-image: url(/images/duckduckgo-text.svg), url(/images/duckduckgo-icon.svg), linear-gradient(45deg, #FFCC3399, #FFCC3300 50%), linear-gradient(-45deg, #6B4EBA99, #6B4EBA00 50%);
    background-position: center 92.5%, center 10%, center, center;
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: 75% auto, 50% auto, cover, cover;
    border-radius: 0.625rem;
    height: 5rem;
    width: 7.5rem;
}
/**
 * DDG v2
 */
 .ddg-logo-link {
    background-image: url(/images/duckduckgo-small.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.h-text-pp {
    font-style: italic;
}
.safari-logo-link {
    background-image:
        url(/images/apple-logo-white.svg),
        ${svgDataURL(svgPlusIcon)},
        url(/images/darkreader-ios-128.png);
    background-position: 0.75rem 50%, center, 4.5rem 50%;
    background-repeat: no-repeat;
    background-size: auto 2.5rem, 0.75rem, 3rem;
    border-radius: 0.625rem;
    display: inline-block;
    filter: drop-shadow(0.0625rem 0 0 hsla(0, 0%, 100%, 0)) drop-shadow(-0.0625rem 0 0 hsla(0, 0%, 100%, 0)) drop-shadow(0 0.0625rem 0 hsla(0, 0%, 100%, 0)) drop-shadow(0 -0.0625rem 0 hsla(0, 0%, 100%, 0)) drop-shadow(0 0 0 var(--color-text));
    flex: none;
    text-indent: -999rem;
    transition: filter 250ms;
    min-height: 3rem;
    width: 7.5rem;
}
.safari-logo-link:hover {
    filter: drop-shadow(0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(-0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 0.0625rem 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 -0.0625rem 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 0 0.375rem var(--color-text));
}
.up-text {
    flex: auto;
    padding: 1rem;
}
.up-link {
    color: var(--color-highlight);
    font-weight: bold;
}
.up-title {
    color: var(--color-highlight);
    font-size: 1.5rem;
    font-weight: bold;
    max-width: 35.5rem;
    text-align: center;
}
::selection {
    background-color: var(--color-highlight);
    color: var(--color-text-hover);
}
.support-ua {
    max-width: 35.5rem;
    text-align: center;
}
.support-ua::before {
    border-radius: 50%;
    border-top: 0.5rem solid #206ff3;
    border-bottom: 0.5rem solid #e3ce29;
    bottom: -0.125rem;
    box-sizing: border-box;
    content: "";
    display: inline-block;
    height: 1rem;
    margin-top: 0.25rem;
    position: relative;
    width: 1rem;
}
@media screen and (max-width: 57rem) {
    .up {
        box-sizing: border-box;
        padding: 0.25rem;
    }
    .up-logo-link {
        margin: 0 0.5rem 0.5rem 0;
    }
    .up-text {
        padding: 0;
    }
    .safari-logo-link {
        margin: 0 0.5rem 0.5rem 0;
    }
}
`;

class BackerHeaderElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        if (country === 'UA') {
            shadowRoot.innerHTML = uaHTMLText;
            return;
        }

        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', titleHTMLText + containerHTMLText);
        const container = shadowRoot.querySelector('.ups');
        if (isHCountry) {
            container.insertAdjacentHTML('beforeend', hHTMLText);
        }
        container.insertAdjacentHTML('beforeend', ddgHTMLText);
        container.insertAdjacentHTML('beforeend', appleHTMLText);
        container.insertAdjacentHTML('afterend', uaSupportHTMLText);

        const qs = (s) => shadowRoot.querySelector(s);
        clicker(qs('.h-logo-link'), 'h-top-logo');
        clicker(qs('.h-link'), 'h-top-link');
        clicker(qs('.h-lm'), 'h-top-lm');
        clicker(qs('.ddg-logo-link'), 'ddg-top-logo');
        clicker(qs('.ddg-link'), 'ddg-top-link');
        clicker(qs('.ddg-lm'), 'ddg-top-lm');
        clicker(qs('.safari-logo-link'), 'drsafari-top-logo');
        clicker(qs('.safari-link'), 'drsafari-top-link');
        clicker(qs('.support-ua a'), 'ua-top-link');
    }
}

customElements.define('darkreader-backers-header', BackerHeaderElement);
