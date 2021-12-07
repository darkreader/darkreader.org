// @ts-check

import './backers-graph.js';
import {
    createHTMLElement as html,
} from './utils.js';

const hnURL = 'https://www.joinhoney.com/darkreader';
const tcURL = 'https://jointoucan.com/partners/darkreader';
const ocURL = 'https://opencollective.com/darkreader';

const isEdge = navigator.userAgent.includes('Edg');
const isSafari = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrom');
const language = navigator.language || 'en';

const outlineFilter = 'drop-shadow(0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(-0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 0.0625rem 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 -0.0625rem 0 hsla(0, 0%, 100%, 1))';

const htmlText = `
<h2 class="heading">
    Sponsored by
</h2>
<section class="hr">
    <a class="logo-link hl" href="${hnURL}">
        <span class="logo-link-image hl-image">Honey</span>
        <span class="hl-message">
            by <span class="hl-paypal">PayPal</span>
        </span>
    </a>
    <a class="text-link ht" href="${hnURL}">
        Save <span class="ht-usd">$$$</span> when you shop online
    </a>
    <a class="button-link hb" href="${hnURL}">
        <span class="hb-icon${isEdge ? ' hb-icon--edge' : isSafari ? ' hb-icon--safari' : ''}"></span>
        <span class="button-link-text hb-text">
            Install
        </span>
    </a>
</section>
<section class="tr">
    <a class="logo-link tl" href="${tcURL}">
        <span class="logo-link-image tl-image">Toucan</span>
    </a>
    <a class="text-link tt" href="${tcURL}">
        ${language.startsWith('en') ? `
        Learn
        <span class="tt-flags">
            <span class="tt-f tt-es">Spanish</span>
            <span class="tt-f tt-jp">Japanese</span>
            <span class="tt-f tt-fr">French</span>
            <span class="tt-f tt-de">German</span>
            <span class="tt-f tt-pt">Portuguese</span>
            <span class="tt-f tt-it">Italian</span>
        </span>
        while you browse
        ` : language.startsWith('de') ? 'Englisch mühelos lernen' :
        language.startsWith('es') ? 'Aprende inglés fácilmente' :
            language.startsWith('pt') ? 'Aprenda Inglês sem esforço' :
                'Learn English without even trying'}
    </a>
    <a class="button-link tb" href="${tcURL}">
        <span class="tb-icon${isEdge ? ' tb-icon--edge' : isSafari ? ' tb-icon--safari' : ''}"></span>
        <span class="button-link-text tb-text">
            Install
        </span>
    </a>
</section>
<section class="dr">
    <a class="logo-link dl" href="${ocURL}">
        <darkreader-backers-graph class="dl-graph" width="360" height="240" rows="4" columns="6">
        </darkreader-backers-graph>
    </a>
    <a class="text-link dt" href="${ocURL}">
        Become a sponsor too
    </a>
    <a class="button-link db" href="${ocURL}">
        <span class="button-link-text">Donate</span>
    </a>
</section>
<section class="nr">
    <h2 class="nr-heading">Not sponsored by</h2>
    <div class="nr-links">
        <a class="nr-logo-link nr-logo-fibery" title="Fibery is a connected workspace for product teams. It unites user research, ideation, strategic planning, product roadmapping, software development and customer feedback aggregation. Escape scattered tools and make better products with Fibery." href="https://fibery.io/">
            Fibery
        </a>
        <a class="nr-logo-link nr-logo-github" title="GitHub is where over 65 million developers shape the future of software, together." href="https://github.com/">
            GitHub
        </a>
        <a class="nr-logo-link nr-logo-mozilla" title="Mozilla is the not-for-profit behind the lightning fast Firefox browser. We put people over profit to give everyone more power online." href="https://www.mozilla.org/">
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
.text-link {
    font-weight: bold;
    text-decoration: none;
    transition: color 250ms;
}
.text-link:hover {
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
.hb-icon {
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
.hb-text {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.125rem;
    -webkit-text-stroke: 0.0625rem;
}
.tl {
    overflow: hidden;
}
.tl-image {
    background-color: var(--color-toucan);
    background-image: url(/images/toucan-logo-full.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 8.75rem;
    text-indent: -999rem;
    width: 16rem;
}
.tt {
    color: var(--color-toucan-text);
    text-align: center;
}
.tt-tr {
    color: white;
    font-style: italic;
}
.tb {
    background-color: #3ea39a;
    left: 0.5rem;
    margin-top: 0;
    position: absolute;
    top: 6rem;
    width: 8rem;
}
.tb-icon {
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
@-moz-document url-prefix() {
    .hb-icon,
    .tb-icon {
        background-image: url(/images/icon-firefox-87x82.svg);
    }
}
.hb-icon--edge,
.tb-icon--edge {
    background-color: white;
    background-image: url(/images/icon-edge-256x256.svg);
    border-radius: 50%;
    box-shadow: 0 0 0 0.0625rem white;
    filter: none;
}
.hb-icon--safari,
.tb-icon--safari {
    background-image: url(/images/icon-safari-66x66.svg);
    filter: none;
}
.tb-text {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.125rem;
    -webkit-text-stroke: 0.0625rem;
}
.tt-flags {
    display: inline-flex;
    height: 1rem;
    -webkit-text-stroke: 0;
}
.tt-f {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 0.25rem;
    bottom: -0.125rem;
    display: inline-block;
    height: 1rem;
    position: relative;
    text-indent: -999rem;
    width: 1.25rem;
}
.tt-f + .tt-f {
    margin-left: 0.0625rem;
}
.tt-es {
    background-image: url(/images/toucan-spanish.svg);
}
.tt-fr {
    background-image: url(/images/toucan-french.svg);
}
.tt-de {
    background-image: url(/images/toucan-german.svg);
    display: none;
}
.tt-jp {
    background-image: url(/images/toucan-japanese.svg);
}
.tt-pt {
    background-image: url(/images/toucan-portuguese.svg);
    display: none;
}
.tt-it {
    background-image: url(/images/toucan-italian.svg);
    display: none;
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
`;

class BackersSideElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);
    }
}

customElements.define('darkreader-backers-side', BackersSideElement);
