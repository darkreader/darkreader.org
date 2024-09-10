// @ts-check

import {country, isHCountry} from './locales.js';
import {
    createHTMLElement as html,
    $,
} from './utils.js';
import {clicker} from './stats.js';

const hURL = 'https://www.joinhoney.com/darkreader';
const pieURL = 'https://pie.org/darkreader';
const isFirefox = navigator.userAgent.includes('Firefox');
const isChrome = navigator.userAgent.includes('Chrom');
const isEdge = navigator.userAgent.includes('Edg');
const isSafari = navigator.userAgent.includes('Safari') && !isChrome;

const buttonIcon = `<span class="b-icon${isEdge ? ' b-icon--edge' : isSafari ? ' b-icon--safari' : ''}"></span>`;
const browserName = isFirefox ? 'Firefox' : isEdge ? 'Edge' : isSafari ? 'Safari' : isChrome ? 'Chrome' : 'browser';

const htmlText = `
<section class="container">
    <!--
    <div class="top">
        <span class="h-heading h-heading-1">Save Money</span>
        <span class="h-heading h-heading-2">with</span>
        <span class="paypal-honey">PayPal Honey</span>
    </div>
    <div class="bottom">
        <span class="description">
            Automatically apply coupon codes when you make online purchases
        </span>
        <a class="button-link" href="${hURL}" target="_blank" rel="noopener" data-s="h-top-btn">
            ${buttonIcon}
            <span class="button-link-text">
                Install
            </span>
        </a>
        <br>
        <a class="text-link" href="${hURL}" target="_blank" rel="noopener" data-s="h-top-txt">
            Learn more
        </a>
    </div>
    -->
    <div class="top pie-top">
        Block ads, <span class="pie-top__highlight">get paid</span>
    </div>
    <div class="pie-image-link">
    </div>
    <div class="pie-block">
        <a class="pie-badge-link" href="${pieURL}" target="_blank" rel="noopener" data-s="pie-top-badge">
            <span class="pie-badge">
                Pie
            </span>
        </a>
        <span class="pie-text">
            <a class="pie-text-link" href="${pieURL}" target="_blank" rel="noopener" data-s="pie-top-text">
                Block ads
            </a><br>
            <a class="pie-text-link pie-text-strong" href="${pieURL}" target="_blank" rel="noopener" data-s="pie-top-text">
                get paid
            </a><br>
        </span>
    </div>
    <div class="bottom pie-bottom">
        <div class="pie-top-message">
            Simply browse ad-free with Pie.<br>
            You deserve to get paid if you<br>
            opt into ads.
            <a class="text-link" href="${pieURL}" target="_blank" rel="noopener" data-s="pie-top-text">
                Learn more
            </a>
        </div>
        <a class="button-link pie-button-link" href="${pieURL}" target="_blank" rel="noopener" data-s="pie-top-btn">
            <div class="pie-button-link-wrapper">
                ${buttonIcon}
                <span class="button-link-text">
                    <strong>Add to ${browserName}</strong> - It's Free
                </span>
            </div>
        </a>
    </div>
</section>`;

const cssText = `
.container {
    padding-top: 0;
}
.top {
    height: 2rem;
    white-space: nowrap;
}
.h-heading {
    font-size: 1.5rem;
}
.h-heading-1 {
    color: var(--color-honey-text);
    font-weight: bold;
    -webkit-text-stroke: 0.0625rem;
}
.h-heading-2 {
    font-weight: normal;
}
.paypal-honey {
    background-image: url(/images/paypal-honey-white.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 4rem;
    position: relative;
    text-indent: -999rem;
    top: -1.5rem;
    width: 8rem;
}
.description {
    display: inline-block;
    width: 11.5rem;
}
.button-link {
    align-items: center;
    background-color: transparent;
    border: 0.0625rem solid var(--color-control);
    border-radius: 1.25rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    box-sizing: border-box;
    color: white;
    display: inline-flex;
    flex-direction: row;
    height: 2.5rem;
    justify-content: center;
    margin-top: 0.25rem;
    text-decoration: none;
    transition: box-shadow 250ms;
    width: 8rem;
}
.button-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.button-link-text {
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
    transform: skewX(-10deg);
}
.b-icon {
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
    .b-icon {
        background-image: url(/images/icon-firefox-87x82.svg);
    }
}
.b-icon--edge {
    background-image: url(/images/icon-edge-256x256.svg);
    border-radius: 50%;
    filter: none;
}
.b-icon--safari {
    background-image: url(/images/icon-safari-66x66.svg);
    filter: none;
}
.text-link {
    color: var(--color-text);
    transition: color 125ms;
}
.text-link:hover {
    color: white;
}
::selection {
    background-color: black;
}
.pie-top {
    color: white;
    font-size: 1.05rem;
    font-weight: 300;
    height: auto;
    margin-top: 0.25rem;
    text-align: center;
    text-transform: uppercase;
    -webkit-text-stroke: 0.0625rem;
}
.pie-top__highlight {
    font-weight: bold;
}
.pie-image-link {
    background-color: var(--color-pie);
    background-image: url(/images/pie-logo-white.svg), linear-gradient(135deg, #ad4abb 14%, #696af6 58%, #38b4a8);
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    background-size: 6rem auto, cover;
    border-radius: 1rem;
    height: 10rem;
    width: 16rem;
}
.pie-bottom {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: center;
    margin-top: 0.125rem;
}
.pie-button-link {
    background-image: linear-gradient(135deg, #ad4abb 14%, #696af6 58%, #38b4a8);
    border: none;
    margin-top: 0.25rem;
    padding: 0.0625rem;
    width: auto;
}
.pie-button-link-wrapper {
    align-items: center;
    background-color: var(--color-bg);
    border-radius: calc(1.25rem - 0.0625rem);
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    height: 100%;
    justify-content: center;
    max-width: 16rem;
    padding: 0 0.5rem;
}
.pie-button-link .button-link-text {
    font-style: normal;
    font-weight: normal;
    -webkit-text-stroke: unset;
    text-transform: none;
    transform: none;
}
.pie-button-link .b-icon {
    height: 1.5rem;
    width: 1.5rem;
}
.pie-button-link .b-icon {
    margin: 0;
}
.pie-top, .pie-image-link {
    display: none;
}
.pie-block {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
}
.pie-badge-link {
    display: inline-block;
    height: 6rem;
    position: relative;
    text-decoration: none;
    width: 6rem;
}
.pie-badge-link::before {
    border-radius: 50%;
    box-shadow: 0 0 1rem #598bd4;
    content: "";
    display: inline-block;
    height: 95%;
    left: 0;
    margin: 2.5%;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 250ms;
    width: 95%;
}
.pie-badge-link:hover::before {
    opacity: 1;
}
.pie-badge {
    background-image: url(/images/pie-logo-white.svg), url(/images/pie-badge.svg);
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    background-size: 65% auto, contain;
    display: inline-block;
    height: 100%;
    left: 0;
    position: absolute;
    text-indent: -999rem;
    top: 0;
    transition: filter 250ms;
    width: 100%;
}
.pie-badge-link::after {
    background-image: url(/images/pie-logo-color.svg), url(/images/pie-badge-light.svg);
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    background-size: 65% auto, contain;
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 250ms;
    width: 100%;
}
.pie-badge-link:hover::after {
    opacity: 1;
}
.pie-text {
    color: white;
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
}
.pie-text-link {
    border-bottom: 1px solid #fff0;
    color: white;
    text-decoration: none;
    transition: border-color 250ms;
}
.pie-text-link:hover {
    border-color: #ffff;
}
.pie-text-strong {
    color: white;
    font-size: 1.75rem;
    font-weight: bold;
    text-transform: uppercase;
}
.pie-top-message {
    text-align: center;
    width: 16rem;
}
.pie-top-message .text-link {
    color: inherit;
    font-weight: bold;
}
.pie-top-message .text-link:hover {
    color: white;
}
:host([horizontal]) .container {
    height: 9rem;
    padding: 1rem;
    position: relative;
}
:host([horizontal]) br {
    display: none;
}
:host([horizontal]) .pie-block {
    align-items: flex-start;
}
:host([horizontal]) .pie-text {
    width: 20rem;
}
:host([horizontal]) .pie-bottom {
    align-items: flex-start;
    left: calc(50% - 6.5rem);
    position: absolute;
    top: 3.5rem;
}
:host([horizontal]) .pie-top-message {
    text-align: left;
    width: 20rem;
}
:host([horizontal]) .pie-button-link {
    margin-top: 0.5rem;
}
`;

class BackerTopShortElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        if (this.hasAttribute('side')) {
            shadowRoot.querySelectorAll('[data-s]').forEach((node) => {
                const s = node.getAttribute('data-s') ?? '';
                node.setAttribute('data-s', s.replace('-top-', '-side-'));
            });
        }

        $(shadowRoot).find('[data-s]').each((node) => clicker(node, node.getAttribute('data-s') ?? ''));
    }
}

customElements.define('darkreader-backers-top-short', BackerTopShortElement);
