// @ts-check

import {clicker} from './stats.js';
import {
    createHTMLElement as html,
} from './utils.js';

const payURL = '/support-us';

const htmlText = `
<section class="pr">
    <div class="pr-wrapper">
        <h2 class="pr-heading">Pay for using <span class="pr-heading__darkreader">Dark Reader</span></h4>
        <div class="tiers">
            <label class="tier">
                <input type="radio" name="tier" value="regular" checked>
                <span class="tier__desc">Regular use</span>
                <span class="tier__connect"></span>
                <span class="tier__price">$4.99</span>
            </label>
            <label class="tier">
                <input type="radio" name="tier" value="discount">
                <span class="tier__desc">Occasional use</span>
                <span class="tier__connect"></span>
                <span class="tier__price">$1.99</span>
            </label>
            <label class="tier">
                <input type="radio" name="tier" value="corporate">
                <span class="tier__desc">Corporate users</span>
                <span class="tier__connect"></span>
                <span class="tier__price">$9.99/yr</span>
            </label>
        </div>
        <a class="button-link" href="${payURL}" target="_blank" rel="noopener">
            <span class="button-link__text">Proceed</span>
        </a>
    </div>
</section>
`;

const cssText = `
:host {
    background-image: linear-gradient(to left, transparent, black, transparent);
    display: block;
    max-width: 35.5rem;
    min-width: 16rem;
}
.pr-wrapper {
    margin: 0 auto;
    width: 16rem;
}
.pr {
    background-color: var(--color-bg);
    margin: 0 auto;
    max-width: 20rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
}
.pr-heading {
    color: var(--color-highlight);
    font-size: 1.05rem;
    font-weight: bold;
    margin: 0;
    position: relative;
    text-align: left;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;
}
/*
.pr-heading::before {
    background-image: url("/images/icon-256.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: inline-block;
    height: 2.75rem;
    left: 0;
    position: absolute;
    top: 0;
    width: 2.75rem;
}
*/
.tiers {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 100%;
}
.tier {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    flex-direction: row;
    gap: 0.25rem;
    position: relative;
    transition: all 125ms;
    width: 100%;
}
.tier input {
    display: none;
}
.tier::before {
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
    transition: all 125ms;
    width: 1rem;
}
.tier:has(:checked)::before {
    background-color: var(--color-control);
}
.tier:has(:checked) .tier__connect {
    border-bottom-color: white;
}
.tier:has(:checked)::after {
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
.tier:has(:checked),
.tier:has(:checked):hover {
    color: white;
}
.tier__desc {
    display: inline-block;
    flex: none;
}
.tier__connect {
    border-bottom: 1px dotted var(--color-text);
    display: inline-block;
    flex: auto;
    height: 0;
    opacity: 0.5;
    width: 100%;
}
.tier__price {
    display: inline-block;
    flex: none;
    font-weight: bold;
    justify-self: flex-end;
}
.tier:hover {
    color: white;
}
.tier:hover::before {
    border-color: white;
}
.tier:hover .tier__connect {
    border-bottom-color: white;
}
.button-link {
    align-items: center;
    background-color: var(--color-control);
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
    width: 100%
}
.button-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.button-link__text {
    display: inline-block;
    font-size: 1.25rem;
    font-weight: bold;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
    transform: skewX(-10deg);
}
`;

class PayTiersElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        const buttonLink = /** @type {HTMLAnchorElement} */(shadowRoot.querySelector('.button-link'));
        clicker(buttonLink, 'd-side-btn');

        shadowRoot.querySelector('.tiers')?.addEventListener('change', () => {
            const {value} = /** @type {HTMLInputElement} */(shadowRoot.querySelector('[name="tier"]:checked'));
            buttonLink.href = `${payURL}#tier-${value}`;
        });
    }
}

customElements.define('darkreader-pay-tiers', PayTiersElement);
