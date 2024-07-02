// @ts-check

import './sponsors-graph.js';
import './pay-tiers.js';
import {country, isEUCountry, isHCountry} from './locales.js';
import {clicker} from './stats.js';
import {
    createHTMLElement as html,
} from './utils.js';

const hnURL = 'https://www.joinhoney.com/darkreader';
const ddgURL = 'https://duckduckgo.com/browser?ref=darkreader';
const payURL = '/support-us';

const isEdge = navigator.userAgent.includes('Edg');
const isSafari = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrom');
const language = navigator.language || 'en';

const buttonIcon = `<span class="b-icon${isEdge ? ' b-icon--edge' : isSafari ? ' b-icon--safari' : ''}"></span>`;

const htmlText = `
<section class="pr">
    <darkreader-pay-tiers></darkreader-pay-tiers>
</section>
<h2 class="heading">
    <span class="heading__first-line">Using for Free?<br></span>
    Checkout our sponsors
</h2>
<section class="hr">
    <a class="logo-link hl" href="${hnURL}" target="_blank" rel="noopener">
        <span class="logo-link-image hl-image">Honey</span>
        <span class="hl-message">
            by <span class="hl-paypal">PayPal</span>
        </span>
    </a>
    <a class="text-link ht" href="${hnURL}" target="_blank" rel="noopener">
        Automatically search & apply coupon
        codes & discounts
    </a>
    <a class="button-link hb" href="${hnURL}" target="_blank" rel="noopener">
        ${buttonIcon}
        <span class="button-link-text hb-text">
            Install
        </span>
    </a>
</section>
<!--
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
-->
<section class="dr">
    <span class="logo-link dl">
        <darkreader-backers-graph class="dl-graph" width="360" height="240" rows="4" columns="6">
        </darkreader-backers-graph>
    </span>
    <!--
    <a class="text-link dt" href="${payURL}" target="_blank" rel="noopener">
        Become a sponsor too
    </a>
    <a class="button-link db" href="${payURL}" target="_blank" rel="noopener">
        <span class="button-link-text">Donate</span>
    </a>
    -->
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

const outlineFilter = 'drop-shadow(0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(-0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 0.0625rem 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 -0.0625rem 0 hsla(0, 0%, 100%, 1))';

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
    font-size: 1.05rem;
    line-height: 1.25rem;
    margin: 0 0 0.75rem 0;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
}
section {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
    position: relative;
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
.ht-currency {
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
}
.dl-graph {
    width: 100%;
}
.db {
    background-color: var(--color-control);
}
.pr {
    width: 100%;
}
.pr-heading {
    color: var(--color-highlight);
    margin: 0;
    text-align: left;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
    width: 100%;
}
.pr-rates {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 100%;
}
.pr-rate {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    flex-direction: row;
    gap: 0.25rem;
    position: relative;
    width: 100%;
}
.pr-rate input {
    display: none;
}
.pr-rate::before {
    background-color: transparent;
    border: 1px solid var(--color-control);
    border-radius: 50%;
    box-sizing: border-box;
    content: "";
    display: inline-block;
    flex: none;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    width: 1rem;
}
.pr-rate:has(:checked)::before {
    background-color: var(--color-control);
}
.pr-rate:has(:checked)::after {
    background-color: transparent;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    content: "";
    flex: none;
    height: 0.25rem;
    left: 0.175rem;
    position: absolute;
    top: 0.375rem;
    transform-origin: 50% 50%;
    transform: rotate(-45deg);
    width: 0.5rem;
}
.pr-rate:has(:checked) {
    color: white;
}
.pr-rate-desc {
    display: inline-block;
    flex: none;
}
.pr-rate-connect {
    border-bottom: 1px dotted var(--color-text);
    display: inline-block;
    flex: auto;
    height: 0;
    opacity: 0.5;
    width: 100%;
}
.pr-rate-price {
    display: inline-block;
    flex: none;
    font-weight: bold;
    justify-self: flex-end;
}
.pb {
    background-color: var(--color-control);
    width: 100%
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
:host(.c-cn) .heading__first-line,
:host(.c-cn) .hr {
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
        shadowRoot.host.classList.toggle('c-cn', document.documentElement.lang === 'zh-CN');
    }
}

customElements.define('darkreader-backers-side', BackersSideElement);
