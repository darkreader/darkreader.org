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
            CNY: 'https://www.paypal.com/ncp/payment/6GUZKB3ZK3ZEE',
        },
        DISCOUNT: {
            USD: 'https://www.paypal.com/ncp/payment/ZGRN4ZD3CYWN8',
            GBP: 'https://www.paypal.com/ncp/payment/FDVGKHYKNG7N4',
            EUR: 'https://www.paypal.com/ncp/payment/FCHJZYGTLWAF2',
            JPY: 'https://www.paypal.com/ncp/payment/WX44HW8PNN6TN',
            CAD: 'https://www.paypal.com/ncp/payment/T632CCSRBWBBU',
            CNY: 'https://www.paypal.com/ncp/payment/ZGRN4ZD3CYWN8',
        },
    },
};

const Prices = {
    REGULAR: {
        USD: '$9.99',
        GBP: '£7.99',
        EUR: '€9.99',
        JPY: '¥1,500',
        CAD: '$12.99',
        CNY: '¥68.00',
    },
    DISCOUNT: {
        USD: '$4.99',
        GBP: '£3.99',
        EUR: '€4.99',
        JPY: '¥700',
        CAD: '$6.99',
        CNY: '¥38.00',
    },
    CORPORATE: {
        USD: '$9.99/yr',
        GBP: '£7.99/yr',
        EUR: '€9.99/yr',
        JPY: '¥1,500/年',
        CAD: '$12.99/yr',
        CNY: '¥68.00/年',
    },
};

const DEFAULT_CURRENCY = country === 'GB' ? 'GBP' : country === 'JP' ? 'JPY' : country === 'CA' ? 'CAD' : country === 'CN' ? 'CNY' : isEUCountry ? 'EUR' : 'USD';
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

const locales = {
    cn: {
        heading: '支付 Dark Reader 使用费',
        regular: '定期使用',
        discount: '偶尔使用',
        corporate: '企业用户',
        card: '借记卡或信用卡',
        more: '更多的选择',
    },
};

const htmlText = `
<div class="bg"></div>
<section class="pr">
    <div class="pr-wrapper">
        <h2 class="pr-heading" data-text="heading">Pay for using <span class="pr-heading__darkreader">Dark Reader</span></h2>
        <div class="currencies">
            ${currencyButton('USD', 'flag-us')}
            ${currencyButton('EUR', 'flag-eu')}
            ${currencyButton('GBP', 'flag-uk')}
            ${currencyButton('JPY', 'flag-jp')}
            ${currencyButton('CAD', 'flag-ca')}
            ${currencyButton('CNY', 'flag-cn')}
            <span class="currencies__currency-connect"></span>
            <span class="currencies__currency-text js-currency-text">${DEFAULT_CURRENCY}</span>
        </div>
        <div class="tiers">
            <label class="tier">
                <input type="radio" name="tier" value="${Tiers.REGULAR}" checked>
                <span class="tier__desc" data-text="regular">Regular use</span>
                <span class="tier__connect"></span>
                <span class="tier__price js-price-regular">${DEFAULT_PRICE_REGULAR}</span>
            </label>
            <label class="tier">
                <input type="radio" name="tier" value="${Tiers.DISCOUNT}">
                <span class="tier__desc" data-text="discount">Occasional use</span>
                <span class="tier__connect"></span>
                <span class="tier__price js-price-discount">${DEFAULT_PRICE_DISCOUNT}</span>
            </label>
            <label class="tier">
                <input type="radio" name="tier" value="${Tiers.CORPORATE}">
                <span class="tier__desc" data-text="corporate">Corporate users</span>
                <span class="tier__connect"></span>
                <span class="tier__price js-price-corporate">${DEFAULT_PRICE_CORP}</span>
            </label>
        </div>
        <div class="button-wrapper">
            <a class="button-link button-link--paypal js-link-paypal" href="${DEFAULT_LINK_PAYPAL}" target="_blank" rel="noopener">
                <span class="button-link__text">Pay with <span class="button-link__text--paypal">PayPal</span></span>
            </a>
            <a class="button-link button-link--card js-link-stripe" href="${DEFAULT_LINK_STRIPE}" target="_blank" rel="noopener">
                <i class="button-link__card-icon"></i>
                <span class="button-link__text" data-text="card">Debit or Credit Card</span>
            </a>
            <a class="button-link button-link--other button-link--inactive js-link-other" href="${Links.Redirect.CORPORATE}" target="_blank" rel="noopener">
                <span class="button-link__text" data-text="more">More options</span>
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
    box-sizing: border-box;
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
.button-link:not(.button-link--inactive) + .button-link {
    background-color: transparent;
    border: 1px solid var(--color-control);
}
.button-link__text {
    align-items: center;
    display: inline-flex;
    font-size: 1rem;
    justify-content: center;
    gap: 0.25rem;
    overflow: hidden;
}
.button-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 0.25rem;
}
.button-wrapper .button-link {
    margin: 0;
}
.button-link--inactive {
    display: none;
}
.button-link__card-icon {
    background-color: var(--color-control);
    background-image: linear-gradient(165deg, #ffffff55, transparent);
    border-radius: 0.2rem;
    box-shadow: 0 1px 2px black;
    display: inline-block;
    height: 1rem;
    margin-right: 0.375rem;
    overflow: hidden;
    position: relative;
    width: 1.5rem;
}
.button-link__card-icon::before {
    background-color: black;
    content: "";
    display: inline-block;
    height: 0.125rem;
    left: 0;
    position: absolute;
    top: 0.2rem;
    width: 1.5rem;
}
.button-link__card-icon::after {
    background-color: #e87a3a;
    box-shadow: 0.25rem 0 0 #ffce44, inset 0.25rem 0 0 #dc4d40;
    border-radius: 50%;
    bottom: 0.1rem;
    content: "";
    display: inline-block;
    height: 0.4rem;
    left: 0.6rem;
    position: absolute;
    width: 0.4rem;
}
.button-link--card .button-link__text {
    text-transform: none;
    transform: none;
}
.button-link__text--paypal {
    background-image: url("/images/paypal-logo-white.svg");
    background-position: center 60%;
    background-repeat: no-repeat;
    background-size: auto 50%;
    display: inline-block;
    height: 2.5rem;
    text-indent: -999rem;
    width: 5rem;
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
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}
.currency-button {
    cursor: pointer;
    display: inline-block;
    filter: grayscale(1) brightness(0.75);
    flex: none;
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
.currencies__currency-connect {
    border-bottom: 1px dotted var(--color-text);
    display: inline-block;
    flex: auto;
    height: 0;
    opacity: 0.25;
    width: 100%;
}
.currencies__currency-text {
    display: inline-block;
    flex: none;
    font-weight: 300;
}
.flag {
    background-image: url('/images/flags.svg');
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: calc(24px * 6) 18px;
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
.flag-cn {
    background-position-x: -120px;
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
    .button-link__text {
        font-size: 1.25rem;
        font-weight: bold;
        -webkit-text-stroke: 0.0625rem;
        transform: skewX(-10deg);
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

        const s = (/** @type {string} */x) => $(shadowRoot).find(x);

        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        const stripeLink = /** @type {HTMLAnchorElement} */(shadowRoot.querySelector('.pr .js-link-stripe'));
        clicker(stripeLink, 'd-side-stripe');

        const paypalLink = /** @type {HTMLAnchorElement} */(shadowRoot.querySelector('.pr .js-link-paypal'));
        clicker(paypalLink, 'd-side-paypal');

        const otherLink = /** @type {HTMLAnchorElement} */(shadowRoot.querySelector('.pr .js-link-other'));
        clicker(otherLink, 'd-side-other');

        s('.card .button-link').each((el) => clicker(el, 'd-card-btn'));

        const update = () => {
            const {value: tier} = /** @type {HTMLInputElement} */(shadowRoot.querySelector('[name="tier"]:checked'));
            const {value: currency} = /** @type {HTMLInputElement} */(shadowRoot.querySelector('[name="currency"]:checked'));

            stripeLink.href = tier === Tiers.DISCOUNT ? Links.Stripe.DISCOUNT : tier === Tiers.CORPORATE ? Links.Stripe.CORPORATE : Links.Stripe.REGULAR;

            paypalLink.href = tier === Tiers.DISCOUNT ? Links.PayPal.DISCOUNT[currency] : Links.PayPal.REGULAR[currency];
            paypalLink.classList.toggle('button-link--inactive', tier === Tiers.CORPORATE || currency === 'CNY');

            otherLink.href = tier === Tiers.DISCOUNT ? Links.Redirect.DISCOUNT : tier === Tiers.CORPORATE ? Links.Redirect.CORPORATE : Links.Redirect.REGULAR;
            otherLink.classList.toggle('button-link--inactive', tier !== Tiers.CORPORATE && currency !== 'CNY');

            s('.js-price-regular').node().textContent = Prices.REGULAR[currency];
            s('.js-price-discount').node().textContent = Prices.DISCOUNT[currency];
            s('.js-price-corporate').node().textContent = Prices.CORPORATE[currency];
            s('.js-currency-text').node().textContent = currency;
        };

        shadowRoot.querySelector('.tiers')?.addEventListener('change', update);
        shadowRoot.querySelector('.currencies')?.addEventListener('change', update);

        update();

        if (document.documentElement.lang === 'zh-CN') {
            Object.entries(locales.cn).forEach(([key, text]) => {
                s(`[data-text="${key}"]`).each((node) => node.textContent = text);
            });
        }
    }
}

customElements.define('darkreader-pay-tiers', PayTiersElement);
