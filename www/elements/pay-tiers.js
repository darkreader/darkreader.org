// @ts-check

import {clicker} from './stats.js';
import {
    createHTMLElement as html,
} from './utils.js';

const payURL = '/support-us';

const htmlText = `
<div class="bg"></div>
<section class="pr">
    <div class="pr-wrapper">
        <h2 class="pr-heading">Pay for using <span class="pr-heading__darkreader">Dark Reader</span></h2>
        <div class="tiers">
            <label class="tier">
                <input type="radio" name="tier" value="regular" checked>
                <span class="tier__desc">Regular use</span>
                <span class="tier__connect"></span>
                <span class="tier__price">$9.99</span>
            </label>
            <label class="tier">
                <input type="radio" name="tier" value="discount">
                <span class="tier__desc">Occasional use</span>
                <span class="tier__connect"></span>
                <span class="tier__price">$4.99</span>
            </label>
            <label class="tier">
                <input type="radio" name="tier" value="corporate">
                <span class="tier__desc">Corporate users</span>
                <span class="tier__connect"></span>
                <span class="tier__price">$9.99/yr</span>
            </label>
        </div>
        <a class="button-link" href="${payURL}" target="_blank" rel="noopener">
            <span class="button-link__text">Pay Now</span>
        </a>
    </div>
</section>
<section class="pr-horizontal">
    <h2 class="pr-heading">Pay for using <span class="pr-heading__darkreader">Dark Reader</span></h2>
    <div class="pr-horizontal-wrapper">
        <span class="card card--selected">
            <span class="card__desc">Regular use</span>
            <span class="card__price">$9.99</span>
            <a class="button-link" href="${payURL}" target="_blank" rel="noopener">
                <span class="button-link__text">Pay</span>
            </a>
        </span>
        <span class="card">
            <span class="card__desc">Occasional use</span>
            <span class="card__price"><s class="card__price__strike">$9.99 </s>$4.99</span>
            <a class="button-link" href="${payURL}#tier-discount" target="_blank" rel="noopener">
                <span class="button-link__text">Pay</span>
            </a>
        </span>
        <span class="card">
            <span class="card__desc">Corporate users</span>
            <span class="card__price">$9.99<span class="card__price__time">/year</span></span>
            <a class="button-link" href="${payURL}#tier-corporate" target="_blank" rel="noopener">
                <span class="button-link__text">Pay</span>
            </a>
        </span>
    </div>
</section>
`;

const cssText = `
:host {
    display: block;
    max-width: 35.5rem;
    min-width: 16rem;
    position: relative;
}
.bg {
    background-image: linear-gradient(to left, transparent, black, transparent);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
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
    width: 100%;
}
.tier {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    padding: 0.125rem 0;
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
    top: 0.5rem;
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
/*
.tier:hover {
    color: white;
}
.tier:hover::before {
    border-color: white;
}
.tier:hover .tier__connect {
    border-bottom-color: white;
}
*/
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
.pr-horizontal {
    display: none;
}
:host {
    container-type: inline-size;
}
@container (width > 32rem) {
    .bg {
        display: none;
    }
    .pr {
        display: none;
    }
    .pr-horizontal {
        display: block;
    }
    .pr-heading {
        font-size: 1.5rem;
        text-align: center;
    }
    .pr-horizontal-wrapper {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: space-evenly;
        margin-top: 0.5rem;
    }
    .card {
        align-items: center;
        background-color: #121a1f;
        border: 1px solid var(--color-control);
        border-radius: 0.25rem;
        box-shadow: 0 0 1rem rgb(0 0 0 / 50%);
        display: flex;
        flex-direction: column;
        max-width: 10rem;
        min-width: 8.5rem;
    }
    .card__price {
        color: white;
        display: inline-block;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 1rem 0;
    }
    .card__price__time {
        color: var(--color-text);
        font-size: 1rem;
    }
    .card__price__strike {
        color: var(--color-highlight);
        font-size: 1rem;
        position: relative;
        text-decoration: none;
    }
    .card__price__strike::after {
        border-top: 2px solid var(--color-highlight);
        bottom: 0;
        content: "";
        height: 40%;
        left: 0;
        position: absolute;
        transform: rotate(-10deg);
        width: 100%;
    }
    .card__desc {
        border-bottom: 1px solid var(--color-control);
        color: white;
        display: inline-block;
        font-weight: bold;
        padding: 0.5rem 0;
        text-align: center;
        width: 100%;
    }
    .card--selected .card__desc {
        background-color: var(--color-control);
    }
    .button-link {
        margin: 0 1rem 1rem 1rem;
        width: 8rem;
    }
    .card:not(.card--selected) .button-link {
        background-color: var(--color-bg);
        border: 1px solid var(--color-control);
    }
}
`;

class PayTiersElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        const buttonLink = /** @type {HTMLAnchorElement} */(shadowRoot.querySelector('.pr .button-link'));
        clicker(buttonLink, 'd-side-btn');
        shadowRoot.querySelectorAll('.card .button-link').forEach((el) => clicker(el, 'd-card-btn'));

        shadowRoot.querySelector('.tiers')?.addEventListener('change', () => {
            const {value} = /** @type {HTMLInputElement} */(shadowRoot.querySelector('[name="tier"]:checked'));
            buttonLink.href = `${payURL}#tier-${value}`;
        });
    }
}

customElements.define('darkreader-pay-tiers', PayTiersElement);
