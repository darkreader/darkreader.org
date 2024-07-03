// @ts-check

import {country, isHCountry} from './locales.js';
import {
    createHTMLElement as html,
    $,
} from './utils.js';
import {clicker} from './stats.js';

const hURL = 'https://www.joinhoney.com/darkreader';
const isEdge = navigator.userAgent.includes('Edg');
const isSafari = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrom');

const buttonIcon = `<span class="b-icon${isEdge ? ' b-icon--edge' : isSafari ? ' b-icon--safari' : ''}"></span>`;

const htmlText = `
<section class="container">
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
</section>`;

const cssText = `
.container {
    padding-top: 0.625rem;
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
`;

class BackerTopShortElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        $(shadowRoot).find('[data-s]').each((node) => clicker(node, node.getAttribute('data-s') ?? ''));
    }
}

customElements.define('darkreader-backers-top-short', BackerTopShortElement);
