// @ts-check

import {country, isEUCountry} from './locales.js';
import {clicker} from './stats.js';
import {
    createHTMLElement as html,
    $,
} from './utils.js';

const payURL = '/support-us';

const Tiers = {
    REGULAR: 'REGULAR',
    DISCOUNT: 'DISCOUNT',
    CORPORATE: 'CORPORATE',
};

const Links = {
    Redirect: {
        REGULAR: payURL,
        DISCOUNT: `${payURL}#tier-discount`,
        CORPORATE: `${payURL}#tier-corporate`,
    },
    Stripe: {
        REGULAR: 'https://buy.stripe.com/fZe15k7um5Em7scdQX',
        DISCOUNT: 'https://buy.stripe.com/aEU5lA4ia4Ai27SeV2',
        CORPORATE: 'https://buy.stripe.com/aEUcO29CueaS5k44gq',
    },
    PayPal: {
        REGULAR: {
            USD: 'https://www.paypal.com/ncp/payment/6GUZKB3ZK3ZEE',
            GBP: 'https://www.paypal.com/ncp/payment/DRE2J7DSGZ3EC',
            EUR: 'https://www.paypal.com/ncp/payment/364NSETFEQ4W2',
            JPY: 'https://www.paypal.com/ncp/payment/BSDYGW4MNC5WU',
            CAD: 'https://www.paypal.com/ncp/payment/6HZMLYQT9KTQA',
        },
        DISCOUNT: {
            USD: 'https://www.paypal.com/ncp/payment/ZGRN4ZD3CYWN8',
            GBP: 'https://www.paypal.com/ncp/payment/FDVGKHYKNG7N4',
            EUR: 'https://www.paypal.com/ncp/payment/FCHJZYGTLWAF2',
            JPY: 'https://www.paypal.com/ncp/payment/WX44HW8PNN6TN',
            CAD: 'https://www.paypal.com/ncp/payment/T632CCSRBWBBU',
        },
    },
};

const Prices = {
    REGULAR: {
        USD: '$9.99',
        GBP: '£7.99',
        EUR: '€9.99',
        JPY: '¥1,500',
        CAD: 'C$12.99',
    },
    DISCOUNT: {
        USD: '$4.99',
        GBP: '£3.99',
        EUR: '€4.99',
        JPY: '¥700',
        CAD: 'C$6.99',
    },
    CORPORATE: {
        USD: '$9.99/yr',
        GBP: '£7.99/yr',
        EUR: '€9.99/yr',
        JPY: '¥1,500/年',
        CAD: 'C$12.99/yr',
    },
};

const DEFAULT_CURRENCY = country === 'GB' ? 'GBP' : country === 'JP' ? 'JPY' : country === 'CA' ? 'CAD' : isEUCountry ? 'EUR' : 'USD';
const DEFAULT_PRICE_REGULAR = Prices.REGULAR[DEFAULT_CURRENCY];
const DEFAULT_PRICE_DISCOUNT = Prices.DISCOUNT[DEFAULT_CURRENCY];
const DEFAULT_PRICE_CORP = Prices.CORPORATE[DEFAULT_CURRENCY];
const DEFAULT_LINK_STRIPE = Links.Stripe.REGULAR;
const DEFAULT_LINK_PAYPAL = Links.PayPal.REGULAR[DEFAULT_CURRENCY];

/**
 * @param {string} currency
 * @param {string} flagCls
 * @returns {string}
 */
function currencyButton(currency, flagCls) {
    return `<label class="currency-button">
                <input type="radio" name="currency" value="${currency}"${DEFAULT_CURRENCY === currency ? ' checked' : ''}>
                <i class="flag ${flagCls}">${currency}</i>
            </label>`;
}

const htmlText = `
<div class="bg"></div>
<section class="pr">
    <div class="pr-wrapper">
        <h2 class="pr-heading">Pay for using <span class="pr-heading__darkreader">Dark Reader</span></h2>
        <div class="currencies">
            ${currencyButton('USD', 'flag-us')}
            ${currencyButton('EUR', 'flag-eu')}
            ${currencyButton('GBP', 'flag-uk')}
            ${currencyButton('JPY', 'flag-jp')}
            ${currencyButton('CAD', 'flag-ca')}
        </div>
        <div class="tiers">
            <label class="tier">
                <input type="radio" name="tier" value="${Tiers.REGULAR}" checked>
                <span class="tier__desc">Regular use</span>
                <span class="tier__connect"></span>
                <span class="tier__price js-price-regular">${DEFAULT_PRICE_REGULAR}</span>
            </label>
            <label class="tier">
                <input type="radio" name="tier" value="${Tiers.DISCOUNT}">
                <span class="tier__desc">Occasional use</span>
                <span class="tier__connect"></span>
                <span class="tier__price js-price-discount">${DEFAULT_PRICE_DISCOUNT}</span>
            </label>
            <label class="tier">
                <input type="radio" name="tier" value="${Tiers.CORPORATE}">
                <span class="tier__desc">Corporate users</span>
                <span class="tier__connect"></span>
                <span class="tier__price js-price-corporate">${DEFAULT_PRICE_CORP}</span>
            </label>
        </div>
        <div class="button-wrapper">
            <a class="button-link button-link--card js-link-stripe" href="${DEFAULT_LINK_STRIPE}" target="_blank" rel="noopener">
                <span class="button-link__card-icons">
                    <span class="button-link__card-icon button-link__card-icon--visa"></span>
                    <span class="button-link__card-icon button-link__card-icon--mastercard"></span>
                </span>
                <span class="button-link__text">Card</span>
            </a>
            <a class="button-link button-link--paypal js-link-paypal" href="${DEFAULT_LINK_PAYPAL}" target="_blank" rel="noopener">
                <span class="button-link__text">PayPal</span>
            </a>
            <a class="button-link button-link--other button-link--inactive js-link-other" href="${Links.Redirect.CORPORATE}" target="_blank" rel="noopener">
                <span class="button-link__text">More options</span>
            </a>
        </div>
    </div>
</section>
<section class="pr-horizontal">
    <h2 class="pr-heading">Pay for using <span class="pr-heading__darkreader">Dark Reader</span></h2>
    <div class="pr-horizontal-wrapper">
        <span class="card card--selected">
            <span class="card__desc">Regular use</span>
            <span class="card__price">$9.99</span>
            <a class="button-link" href="${Links.Redirect.REGULAR}" target="_blank" rel="noopener">
                <span class="button-link__text">Pay</span>
            </a>
        </span>
        <span class="card">
            <span class="card__desc">Occasional use</span>
            <span class="card__price"><s class="card__price__strike">$9.99 </s>$4.99</span>
            <a class="button-link" href="${Links.Redirect.DISCOUNT}" target="_blank" rel="noopener">
                <span class="button-link__text">Pay</span>
            </a>
        </span>
        <span class="card">
            <span class="card__desc">Corporate users</span>
            <span class="card__price">$9.99<span class="card__price__time">/year</span></span>
            <a class="button-link" href="$${Links.Redirect.CORPORATE}" target="_blank" rel="noopener">
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
    height: 1.5rem;
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
    position: relative;
    text-decoration: none;
    transition: box-shadow 250ms;
    width: 100%
}
.button-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
    z-index: 1;
}
.button-link__text {
    display: inline-block;
    font-size: 1.25rem;
    font-weight: bold;
    overflow: hidden;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
    transform: skewX(-10deg);
}
.button-wrapper {
    align-items: center;
    background-color: var(--color-control);
    border-radius: 1.25rem;
    display: flex;
    flex-direction: row;
    gap: 2px;
}
.button-wrapper .button-link {
    margin: 0;
}
.button-wrapper .button-link:not(:first-child)::before {
    border-left: 1px solid white;
    content: "";
    display: inline-block;
    height: 1.5rem;
    left: 0;
    opacity: 0.2;
    position: absolute;
    transition: opacity 250ms;
    width: 0;
}
.button-wrapper:hover .button-link:not(:first-child)::before {
    opacity: 0;
}
.button-link--inactive {
    display: none;
}
.button-link__card-icons {
    display: inline-block;
    height: 1.2rem;
    margin-right: 0.25rem;
    position: relative;
    width: 1.75rem;
}
.button-link__card-icon {
    background-color: #2851af;
    border-radius: 0.2rem;
    display: inline-block;
    height: 1rem;
    overflow: hidden;
    position: absolute;
    width: 1.5rem;
}
.button-link__card-icon--visa {
    bottom: 0;
    left: 0;
}
.button-link__card-icon--mastercard {
    background-color: white;
    right: 0;
    top: 0;
}
.button-link__card-icon--mastercard::before,
.button-link__card-icon--mastercard::after {
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 0.8rem;
    position: absolute;
    top: 0.1rem;
    width: 0.8rem;
}
.button-link__card-icon--mastercard::before {
    background-color: #dd5044;
    box-shadow: 0.5rem 0 0 #ffce42;
    left: 0.1rem;
}
.button-link__card-icon--mastercard::after {
    background-color: #ffce4288;
    right: 0.1rem;
}
.button-link--card .button-link__text {
    text-transform: none;
    transform: none;
}
.button-link--paypal {
    background-image: url("/images/paypal-logo-white.svg");
    background-position: center 60%;
    background-repeat: no-repeat;
    background-size: auto 50%;
}
.button-link--paypal .button-link__text {
    opacity: 0;
}
.button-link--other .button-link__text {
    font-size: 1rem;
    font-weight: normal;
    -webkit-text-stroke: initial;
    text-decoration: underline;
    text-transform: none;
    transform: none;
}
.currencies {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}
.currency-button {
    cursor: pointer;
    display: inline-block;
    filter: grayscale(1) brightness(0.75);
}
.currency-button input {
    display: none;
}
.currency-button:has(:checked) {
    filter: none;
}
.currency-button:not(:has(:checked)):hover {
    filter: none;
}
.flag {
    background-image: url('/images/flags.svg');
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: calc(24px * 5) 18px;
    border-radius: 0.25rem;
    display: inline-block;
    height: 18px;
    text-indent: -999rem;
    width: 24px;
}
.flag-us {
    background-position-x: 0px;
}
.flag-uk {
    background-position-x: -24px;
}
.flag-eu {
    background-position-x: -48px;
}
.flag-jp {
    background-position-x: -72px;
}
.flag-ca {
    background-position-x: -96px;
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

        if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrom')) {
            return;
        }

        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        const stripeLink = /** @type {HTMLAnchorElement} */(shadowRoot.querySelector('.pr .js-link-stripe'));
        clicker(stripeLink, 'd-side-stripe');

        const paypalLink = /** @type {HTMLAnchorElement} */(shadowRoot.querySelector('.pr .js-link-paypal'));
        clicker(paypalLink, 'd-side-paypal');

        const otherLink = /** @type {HTMLAnchorElement} */(shadowRoot.querySelector('.pr .js-link-other'));
        clicker(otherLink, 'd-side-other');

        $(shadowRoot).find('.card .button-link').each((el) => clicker(el, 'd-card-btn'));

        const update = () => {
            const {value: tier} = /** @type {HTMLInputElement} */(shadowRoot.querySelector('[name="tier"]:checked'));
            const {value: currency} = /** @type {HTMLInputElement} */(shadowRoot.querySelector('[name="currency"]:checked'));

            stripeLink.href = tier === Tiers.DISCOUNT ? Links.Stripe.DISCOUNT : tier === Tiers.CORPORATE ? Links.Stripe.CORPORATE : Links.Stripe.REGULAR;
            paypalLink.href = tier === Tiers.DISCOUNT ? Links.PayPal.DISCOUNT[currency] : Links.PayPal.REGULAR[currency];
            paypalLink.classList.toggle('button-link--inactive', tier === Tiers.CORPORATE);
            otherLink.classList.toggle('button-link--inactive', tier !== Tiers.CORPORATE);
            $(shadowRoot).find('.js-price-regular').node().textContent = Prices.REGULAR[currency];
            $(shadowRoot).find('.js-price-discount').node().textContent = Prices.DISCOUNT[currency];
            $(shadowRoot).find('.js-price-corporate').node().textContent = Prices.CORPORATE[currency];
        };

        shadowRoot.querySelector('.tiers')?.addEventListener('change', update);
        shadowRoot.querySelector('.currencies')?.addEventListener('change', update);

        update();
    }
}

customElements.define('darkreader-pay-tiers', PayTiersElement);
