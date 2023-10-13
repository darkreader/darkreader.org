// @ts-check

import './backers-graph.js';
import {isHCountry} from './locales.js';
import {clicker} from './stats.js';
import {
    createHTMLElement as html,
} from './utils.js';

const hnURL = 'https://www.joinhoney.com/darkreader';
const ddgURL = 'https://duckduckgo.com/browser?ref=darkreader';
const ocURL = 'https://opencollective.com/darkreader/donate';

const isEdge = navigator.userAgent.includes('Edg');
const isSafari = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrom');
const language = navigator.language || 'en';

const outlineFilter = 'drop-shadow(0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(-0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 0.0625rem 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 -0.0625rem 0 hsla(0, 0%, 100%, 1))';
const buttonIcon = `<span class="b-icon${isEdge ? ' b-icon--edge' : isSafari ? ' b-icon--safari' : ''}"></span>`;

const htmlText = `
<h2 class="heading">
    Sponsored by
</h2>
<section class="hr">
    <a class="logo-link hl" href="${hnURL}" target="_blank" rel="noopener">
        <span class="logo-link-image hl-image">Honey</span>
        <span class="hl-message">
            by <span class="hl-paypal">PayPal</span>
        </span>
    </a>
    <a class="text-link ht" href="${hnURL}" target="_blank" rel="noopener">
        Save <span class="ht-usd">$$$</span> when you shop online
    </a>
    <a class="button-link hb" href="${hnURL}" target="_blank" rel="noopener">
        ${buttonIcon}
        <span class="button-link-text hb-text">
            Install
        </span>
    </a>
</section>
<section class="ddgr">
    <a class="logo-link ddgl" href="${ddgURL}" target="_blank" rel="noopener">
        <span class="logo-link-image ddgl-image">DuckDuckGo Browser for iOS, Mac, Android & Windows. Download it now!</span>
        <span class="ddgl-message">
            DuckDuckGo Browser
        </span>
        <span class="ddgl-message-small">
            For iOS, Mac, Android & Windows
        </span>
    </a>
    <a class="text-link ddgt" href="${ddgURL}" target="_blank" rel="noopener">
        For iOS, Mac, Android & Windows
    </a>
    <a class="button-link ddgb" href="${ddgURL}" target="_blank" rel="noopener">
        <span class="button-link-text ddgb-text">
            Download Now!
        </span>
    </a>
</section>
<section class="dr">
    <span class="logo-link dl">
        <darkreader-backers-graph class="dl-graph" width="360" height="240" rows="4" columns="6">
        </darkreader-backers-graph>
    </span>
    <a class="text-link dt" href="${ocURL}" target="_blank" rel="noopener">
        Become a sponsor too
    </a>
    <a class="button-link db" href="${ocURL}" target="_blank" rel="noopener">
        <span class="button-link-text">Donate</span>
    </a>
</section>
<section class="nr">
    <h2 class="nr-heading">Not sponsored by</h2>
    <div class="nr-links">
        <a
            class="nr-logo-link nr-logo-fibery"
            title="Fibery is a connected workspace for product teams. It unites user research, ideation, strategic planning, product roadmapping, software development and customer feedback aggregation. Escape scattered tools and make better products with Fibery."
            href="https://fibery.io/"
            target="_blank"
            rel="noopener"
        >
            Fibery
        </a>
        <a
           class="nr-logo-link nr-logo-github"
           title="GitHub is where over 65 million developers shape the future of software, together."
           href="https://github.com/"
           target="_blank"
           rel="noopener"
        >
            GitHub
        </a>
        <a
            class="nr-logo-link nr-logo-mozilla"
            title="Mozilla is the not-for-profit behind the lightning fast Firefox browser. We put people over profit to give everyone more power online."
            href="https://www.mozilla.org/"
            target="_blank"
            rel="noopener"
        >
            Mozilla
        </a>
    </div>
</section>
`;

const cssText = `
a {
    color: var(--color-text);
    outline: none;
    transition: color 125ms;
}
a:hover {
    color: var(--color-text-hover);
}
:host {
    width: 16rem;
}
.heading {
    color: var(--color-highlight);
    line-height: 1.25rem;
    margin: 0 0 0.75rem 0;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
    text-align: center;
}
section {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
    position: relative;
    padding: 5px 0px;
}
.logo-link {
    align-items: center;
    border-radius: 1.25rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 250ms;
    width: 100%;
}
.logo-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.logo-link-image {
    display: inline-block;
    width: 100%;
}
.text-link,
.text-link > * {
    font-weight: bold;
    text-decoration: none;
    transition: color 250ms;
}
.text-link:hover,
.text-link:hover > * {
    color: var(--color-text-hover);
}
.button-link {
    align-items: center;
    border-radius: 1.25rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    color: white;
    display: inline-flex;
    flex-direction: row;
    height: 2.5rem;
    justify-content: center;
    margin-top: 0.25rem;
    text-decoration: none;
    transition: box-shadow 250ms;
    width: 10rem;
}
.button-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.button-link-text {
    display: inline-block;
    font-size: 1.25rem;
    font-weight: bold;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
    transform: skewX(-10deg);
}
.hl {
    overflow: hidden;
    position: relative;
}
.hl-image {
    background-color: var(--color-honey);
    background-image: url(/images/honey-logo-white.svg);
    background-position: 50% 20%;
    background-repeat: no-repeat;
    background-size: 10rem auto;
    height: 8.75rem;
    text-indent: -999rem;
    width: 16rem;
}
.hl-message {
    color: white;
    display: inline-block;
    left: 5.25rem;
    position: absolute;
    top: 4.5rem;
}
.hl-paypal {
    background-image: url(/images/paypal-logo-white.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 1.2rem;
    text-indent: -999rem;
    transform: translate(-0.0625rem, 0.0625rem);
    width: 3.75rem;
}
.ht {
    color: var(--color-honey-text);
    text-align: center;
    width: 100%;
}
.ht-usd {
    color: #53b378;
}
.hb {
    background-color: #ea5f2c;
    margin: 0 auto;
    position: absolute;
    top: 6rem;
    width: 8rem;
}
.hb:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem #fff800;
}
.hb-text {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.125rem;
    -webkit-text-stroke: 0.0625rem;
}
.b-icon {
    background-image: url(/images/icon-chrome-512x512.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    filter: ${outlineFilter};
    height: 2rem;
    margin-right: 0.5rem;
    width: 2rem;
}
.ddgl {
    overflow: hidden;
    position: relative;
}
.ddgl-image {
    background-color: #DE5833;
    background-image: url(/images/duckduckgo-icon.svg), linear-gradient(45deg, #FFCC3399, #FFCC3300 50%), linear-gradient(-45deg, #6B4EBA99, #6B4EBA00 50%);
    background-position: center 5%, center, center;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 20% auto, cover, cover;
    height: 8.75rem;
    text-indent: -999rem;
    width: 16rem;
}
.ddgl-message {
    color: white;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
    position: absolute;
    text-align: center;
    top: 3.5rem;
}
.ddgl-message-small {
    color: white;
    display: inline-block;
    font-size: 0.8rem;
    position: absolute;
    text-align: center;
    top: 4.8rem;
}
.ddgt {
    color: #f09935;
    display: none;
    text-align: center;
    width: 100%;
}
.ddgb {
    background-color: #3969EF;
    margin: 0 auto;
    position: absolute;
    top: 6rem;
    width: 12rem;
}
.ddgb:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem cyan;
}
.ddgb-text {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.125rem;
    -webkit-text-stroke: 0.0625rem;
}
/**
 * DDG v2
 */
.ddgl-image {
    background-image: url(/images/duckduckgo-large.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.ddgl-message {
    display: none;
}
.ddgl-message-small {
    display: none;
}
.ddgb {
    display: none;
}
@-moz-document url-prefix() {
    .b-icon {
        background-image: url(/images/icon-firefox-87x82.svg);
    }
}
.b-icon--edge {
    background-color: white;
    background-image: url(/images/icon-edge-256x256.svg);
    border-radius: 50%;
    box-shadow: 0 0 0 0.0625rem white;
    filter: none;
}
.b-icon--safari {
    background-image: url(/images/icon-safari-66x66.svg);
    filter: none;
}
.dl,
.dl:hover {
    box-shadow: none;
    margin-bottom: 10px;
}
.dl-graph {
    width: 100%;
}
.db {
    background-color: var(--color-control);
}
.nr {
    margin-top: 1.5rem;
}
.nr-heading {
    color: #4c656f;
    font-weight: 300;
    font-style: italic;
    line-height: 1.25rem;
    margin: 0 0 0.5rem 0;
    white-space: nowrap;
}
.nr-links {
    align-items: center;
    display: flex;
    flex-direction: column;
}
.nr-logo-link {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    filter: brightness(0.25) contrast(0.75) sepia(1) hue-rotate(152deg);
    margin: 0 0 0.5rem 0;
    text-indent: -999rem;
    transition: filter 250ms;
    width: 16rem;
}
.nr-logo-link:hover {
    filter: brightness(1) contrast(1) sepia(0) hue-rotate(0deg);
}
.nr-logo-fibery {
    background-image: url(/images/fibery-text.svg), url(/images/fibery-icon.svg);
    background-position: center;
    background-size: auto 2rem, contain;
    height: 4rem;
    margin: 0;
}
.nr-logo-github {
    background-image: url(/images/github-logo.svg);
    background-size: auto 1.75rem;
    height: 2.5rem;
}
.nr-logo-mozilla {
    background-image: url(/images/mozilla-logo.svg);
    height: 2.5rem;
}
:host(:not(.c-h)) .hr {
    display: none;
}
`;

class BackersSideElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        const qs = (s) => shadowRoot.querySelector(s);
        clicker(qs('.hl'), 'h-side-img');
        clicker(qs('.hb'), 'h-side-btn');
        clicker(qs('.ht'), 'h-side-txt');
        clicker(qs('.ddgl'), 'ddg-side-img');
        clicker(qs('.ddgb'), 'ddg-side-btn');
        clicker(qs('.ddgt'), 'ddg-side-txt');
        clicker(qs('.db'), 'd-side-btn');
        clicker(qs('.dt'), 'd-side-txt');
        clicker(qs('.nr-logo-fibery'), 'fib-side-ns');
        clicker(qs('.nr-logo-mozilla'), 'moz-side-ns');
        clicker(qs('.nr-logo-github'), 'gh-side-ns');

        shadowRoot.host.classList.toggle('c-h', isHCountry);
    }
}

customElements.define('darkreader-backers-side', BackersSideElement);
