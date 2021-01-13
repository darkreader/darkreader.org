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

const htmlText = `
<h2 class="heading">
    Support us
</h2>
<section class="hr">
    <a class="logo-link hl" href="${hnURL}">
        <span class="logo-link-image hl-image">Honey</span>
        <span class="hl-message">
            Owned by <span class="hl-paypal">PayPal</span>
        </span>
    </a>
    <a class="text-link ht" href="${hnURL}">
        Save <span class="ht-usd">$$$</span> when you shop online
    </a>
    <a class="button-link hb" href="${hnURL}">
        <span class="hb-icon${isEdge ? ' hb-icon--edge' : isSafari ? ' hb-icon--safari' : ''}"></span>
        <span class="button-link-text hb-text">Join Honey</span>
    </a>
</section>
<section class="tr">
    <a class="logo-link tl" href="${tcURL}">
        <span class="logo-link-image tl-image">Toucan</span>
    </a>
    <a class="text-link tt" href="${tcURL}">
        Learn a <span class="tt-tr">nuevo</span> language<br>while you browse
    </a>
    <a class="button-link tb" href="${tcURL}">
        <span class="tb-icon"></span>
        <span class="button-link-text tb-text">Join Toucan</span>
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
    margin: 0 0 1rem 0;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
}
section {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
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
    font-weight: bold;
    font-size: 1.25rem;
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
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10rem auto;
    height: 10rem;
    text-indent: -999rem;
    width: 16rem;
}
.hl-message {
    bottom: 0.25rem;
    color: white;
    display: inline-block;
    font-weight: 400;
    position: absolute;
    right: 0.5rem;
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
    width: 3.5rem;
}
.ht {
    color: var(--color-honey);
}
.ht-usd {
    color: #53b378;
}
.hb {
    background-color: var(--color-honey);
    width: 12.5rem;
}
.hb-icon {
    background-image: url(/images/icon-chrome-512x512.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 2rem;
    margin-right: 0.5rem;
    width: 2rem;
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
    text-align: center;
}
.tt-tr {
    color: white;
    font-style: italic;
}
.tb {
    background-color: var(--color-toucan);
    width: 12.5rem;
}
.tb-icon {
    background-image: url(/images/icon-chrome-512x512.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 2rem;
    margin-right: 0.5rem;
    width: 2rem;
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
@media (max-height: 44rem) {
    .chrome .dl {
        display: none;
    }
}

@media (max-height: 50rem) {
    .chrome .hb,
    .chrome .tb {
        display: none;
    }
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
