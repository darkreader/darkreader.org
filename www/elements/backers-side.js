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

const outlineFilter = 'drop-shadow(0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(-0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 0.0625rem 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 -0.0625rem 0 hsla(0, 0%, 100%, 1))';

const htmlText = `
<h2 class="heading">
    Sponsored by
</h2>
<section class="hr">
    <a class="logo-link hl" href="${hnURL}">
        <span class="logo-link-image hl-image">Honey</span>
        <span class="hl-message">
            Owned by <span class="hl-paypal">PayPal</span>
        </span>
    </a>
    <a class="text-link ht" href="${hnURL}">
        Learn more about Honey
    </a>
    <a class="button-link hb" href="${hnURL}">
        <span class="hb-icon${isEdge ? ' hb-icon--edge' : isSafari ? ' hb-icon--safari' : ''}"></span>
        <span class="button-link-text hb-text">
            Save <span class="hb-usd">$$$</span> when<br>you shop online
        </span>
    </a>
</section>
<section class="tr">
    <a class="logo-link tl" href="${tcURL}">
        <span class="logo-link-image tl-image">Toucan</span>
    </a>
    <a class="text-link tt" href="${tcURL}">
        Learn more about Toucan
    </a>
    <a class="button-link tb" href="${tcURL}">
        <span class="tb-icon"></span>
        <span class="button-link-text tb-text">
            <strong>Learn</strong>
            <span class="tb-flags">
                <span class="tb-f tb-es">Spanish</span>
                <span class="tb-f tb-fr">French</span>
                <span class="tb-f tb-de">German</span>
                <span class="tb-f tb-pt">Portuguese</span>
                <span class="tb-f tb-it">Italian</span>
            </span>
            <br>
            <strong>while you browse<strong>
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
    height: 10rem;
    text-indent: -999rem;
    width: 16rem;
}
.hl-message {
    color: white;
    display: inline-block;
    left: 1.75rem;
    position: absolute;
    top: 4.75rem;
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
    color: var(--color-honey);
    display: none;
}
.hb {
    background-color: #f65423;
    background-image: linear-gradient(135deg, #f65423, var(--color-honey), #f62323);
    margin-top: 0;
    position: absolute;
    top: 6.75rem;
    width: 14rem;
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
.hb-usd {
    background-color: #53b378;
    display: inline-block;
    font-weight: normal;
    padding: 0 0.25rem;
}
@-moz-document url-prefix() {
    .hb-icon {
        background-image: url(/images/icon-firefox-87x82.svg);
    }
}
.hb-icon--edge {
    background-image: url(/images/icon-edge-256x256.svg);
}
.hb-icon--safari {
    background-image: url(/images/icon-safari-66x66.svg);
    filter: none;
}
.tr:not(.chrome) {
    display: none;
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
    height: 10rem;
    text-indent: -999rem;
    width: 16rem;
}
.tt {
    color: var(--color-toucan-text);
    display: none;
    text-align: center;
}
.tt-tr {
    color: white;
    font-style: italic;
}
.tb {
    background-color: transparent;
    background-image: linear-gradient(135deg, #3ea39add, #2b7670dd);
    margin-top: 0;
    position: absolute;
    top: 7.5rem;
    width: 16rem;
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
.tb-text {
    font-size: 1rem;
    line-height: 1.125rem;
    transform: none;
}
.tb-text strong {
    display: inline-block;
    transform: skewX(-10deg);
}
.tb-flags {
    display: inline-flex;
    height: 1rem;
    -webkit-text-stroke: 0;
}
.tb-f {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 0.25rem;
    bottom: 0.125rem;
    box-shadow: 0 0 0 0.0625rem white inset;
    display: inline-block;
    height: 1.25rem;
    position: relative;
    text-indent: -999rem;
    width: 1.375rem;
}
.tb-f + .tb-f {
    margin-left: 0.125rem;
}
.tb-es {
    background-image: url(/images/toucan-spanish.svg);
}
.tb-fr {
    background-image: url(/images/toucan-french.svg);
}
.tb-de {
    background-image: url(/images/toucan-german.svg);
}
.tb-pt {
    background-image: url(/images/toucan-portuguese.svg);
}
.tb-it {
    background-image: url(/images/toucan-italian.svg);
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
`;

class BackersSideElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);
        if (navigator.userAgent.includes('Chrom')) {
            shadowRoot.querySelectorAll('section').forEach((s) => s.classList.add('chrome'));
        }
    }
}

customElements.define('darkreader-backers-side', BackersSideElement);
