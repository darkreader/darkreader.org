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
    PLUS: 'PLUS',
    CORPORATE: 'CORPORATE',
};

const Links = {
    Redirect: {
        REGULAR: payURL,
        PLUS: `${payURL}#tier-plus`,
        CORPORATE: `${payURL}#tier-corporate`,
    },
    Stripe: {
        REGULAR: 'https://buy.stripe.com/fZe15k7um5Em7scdQX',
        PLUS: 'https://buy.stripe.com/eVa3dsbKCfeWaEo14f',
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
            AUD: 'https://www.paypal.com/ncp/payment/V2YBJBHKLR4N4',
        },
        PLUS: {
            USD: 'https://www.paypal.com/ncp/payment/TF2894W2SJP24',
            GBP: 'https://www.paypal.com/ncp/payment/H6ER99HMUKX5C',
            EUR: 'https://www.paypal.com/ncp/payment/HP64T8TLHEA4Y',
            JPY: 'https://www.paypal.com/ncp/payment/3LGSYRECU9D4W',
            CAD: 'https://www.paypal.com/ncp/payment/7ZA6AFVEH78GA',
            CNY: 'https://www.paypal.com/ncp/payment/TF2894W2SJP24',
            AUD: 'https://www.paypal.com/ncp/payment/93PF2RDCAMADC',
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
        AUD: '$14.99',
    },
    /*
    PLUS: {
        USD: '$4.99',
        GBP: '£3.99',
        EUR: '€4.99',
        JPY: '¥700',
        CAD: '$6.99',
        CNY: '¥38.00',
        AUD: '$7.99',
    },
    */
    PLUS: {
        USD: '$9.99',
        GBP: '£7.99',
        EUR: '€9.99',
        JPY: '¥1,500',
        CAD: '$12.99',
        CNY: '¥68.00',
        AUD: '$14.99',
    },
    CORPORATE: {
        USD: '$9.99/yr',
        GBP: '£7.99/yr',
        EUR: '€9.99/yr',
        JPY: '¥1,500/年',
        CAD: '$12.99/yr',
        CNY: '¥68.00/年',
        AUD: '$14.99/yr',
    },
};

const DEFAULT_CURRENCY = country === 'GB' ? 'GBP' : country === 'JP' ? 'JPY' : country === 'CA' ? 'CAD' : country === 'AU' ? 'AUD' : country === 'CN' ? 'CNY' : isEUCountry ? 'EUR' : 'USD';
const DEFAULT_PRICE_REGULAR = Prices.REGULAR[DEFAULT_CURRENCY];
const DEFAULT_PRICE_PLUS = Prices.PLUS[DEFAULT_CURRENCY];
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
        heading_short: '使用费',
        regular: '定期使用',
        plus: '一次性付款',
        corporate: '企业用户',
        card: '借记卡或信用卡',
        card_short: '支付',
        more: '更多的选择',
    },
};

const htmlText = `
<section class="pr">
    <div class="pr-wrapper">
        <h2 class="pr-heading" data-text="heading" style="display: none;">Pay for using <span class="pr-heading__darkreader">Dark Reader</span></h2>
        <div class="currencies">
            ${currencyButton('USD', 'flag-us')}
            ${currencyButton('EUR', 'flag-eu')}
            ${currencyButton('GBP', 'flag-uk')}
            ${currencyButton('JPY', 'flag-jp')}
            ${currencyButton('CAD', 'flag-ca')}
            ${currencyButton('CNY', 'flag-cn')}
            ${currencyButton('AUD', 'flag-au')}
            <span class="currencies__currency-connect"></span>
            <span class="currencies__currency-text js-currency-text">${DEFAULT_CURRENCY}</span>
        </div>
        <div class="tiers">
            <label class="tier" style="display: none;">
                <input type="radio" name="tier" value="${Tiers.REGULAR}">
                <span class="tier__desc" data-text="regular">Regular use</span>
                <span class="tier__connect"></span>
                <span class="tier__price js-price-regular">${DEFAULT_PRICE_REGULAR}</span>
            </label>
            <label class="tier">
                <input type="radio" name="tier" value="${Tiers.PLUS}" checked>
                <span class="tier__desc" data-text="plus">One-time payment</span>
                <span class="tier__connect"></span>
                <span class="tier__price js-price-plus">${DEFAULT_PRICE_PLUS}</span>
            </label>
            <label class="tier" style="display: none;">
                <input type="radio" name="tier" value="${Tiers.CORPORATE}">
                <span class="tier__desc" data-text="corporate">Corporate users</span>
                <span class="tier__connect"></span>
                <span class="tier__price js-price-corporate">${DEFAULT_PRICE_CORP}</span>
            </label>
        </div>
        <div class="button-wrapper">
            <!--
            <a class="button-link button-link--paypal js-link-paypal" href="${DEFAULT_LINK_PAYPAL}" target="_blank" rel="noopener" data-s="d-plus-paypal">
                <span class="button-link__text">Pay with <span class="button-link__text--paypal">PayPal</span></span>
            </a>
            <a class="button-link button-link--card js-link-stripe" href="${DEFAULT_LINK_STRIPE}" target="_blank" rel="noopener" data-s="d-plus-stripe">
                <i class="button-link__card-icon js-card-icon"></i>
                <span class="button-link__text" data-text="card">Debit or Credit Card</span>
            </a>
            <a class="button-link button-link--other button-link--inactive js-link-other" href="${Links.Redirect.CORPORATE}" target="_blank" rel="noopener" data-s="d-plus-other">
                <span class="button-link__text" data-text="more">More options</span>
            </a>
            -->
            <a class="button-link button-link--paddle js-link-paddle" href="#pay" data-s="d-plus-paddle">
                <span class="button-link__text">
                    <span data-text="pay">Pay</span>
                    <span class="js-price-regular">${DEFAULT_PRICE_PLUS}</span>
                </span>
            </a>
        </div>
        <div class="payment-methods">
            <i class="payment-methods__paypal"></i>
            <i class="payment-methods__gpay"></i>
            <i class="payment-methods__visa"></i>
            <i class="payment-methods__mastercard"></i>
            <i class="payment-methods__amex"></i>
        </div>
    </div>
</section>
`;

const cssText = `
:host {
    display: block;
    min-width: 16em;
    position: relative;
}
.pr-wrapper {
    margin: 0 auto;
    width: 16em;
}
.pr {
    background-color: var(--color-bg);
    margin: 0 auto;
    max-width: 20em;
    padding-bottom: 1em;
    padding-top: 1em;
}
.pr-heading {
    color: var(--color-highlight);
    font-size: 1.05em;
    font-weight: bold;
    margin: 0;
    position: relative;
    text-align: left;
    -webkit-text-stroke: 0.0625em;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;
}
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
    height: 2em;
    flex-direction: row;
    gap: 0.25em;
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
    height: 1.5em;
    line-height: 1.5em;
    text-align: center;
    transition: all 125ms;
    width: 1.5em;
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
    height: 0.375em;
    left: 0.3125em;
    position: absolute;
    top: 0.625em;
    transform-origin: 50% 50%;
    transform: rotate(-45deg);
    width: 0.75em;
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
.button-link {
    align-items: center;
    background-color: var(--color-control);
    border-radius: 1.25em;
    box-shadow: 0 0 0 0.0625em hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    box-sizing: border-box;
    color: white;
    display: inline-flex;
    flex-direction: row;
    height: 2.5em;
    justify-content: center;
    margin-top: 0.25em;
    position: relative;
    text-decoration: none;
    transition: box-shadow 250ms;
    width: 100%
}
.button-link:hover {
    box-shadow: 0 0 0 0.0625em hsla(0, 0%, 100%, 1), 0 0 0.75em var(--color-text);
    z-index: 1;
}
.button-link:not(.button-link--inactive) + .button-link {
    background-color: transparent;
    border: 1px solid var(--color-control);
}
.button-link__text {
    align-items: center;
    display: inline-flex;
    font-size: 1em;
    justify-content: center;
    gap: 0.25em;
    overflow: hidden;
}
.button-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    margin-top: 0.25em;
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
    border-radius: 0.2em;
    box-shadow: 0 1px 2px black;
    display: inline-block;
    height: 1em;
    margin-right: 0.375em;
    overflow: hidden;
    position: relative;
    width: 1.5em;
}
.button-link__card-icon::before {
    background-color: black;
    content: "";
    display: inline-block;
    height: 0.125em;
    left: 0;
    position: absolute;
    top: 0.2em;
    width: 1.5em;
}
.button-link__card-icon::after {
    background-color: #e87a3a;
    box-shadow: 0.25em 0 0 #ffce44, inset 0.25em 0 0 #dc4d40;
    border-radius: 50%;
    bottom: 0.1em;
    content: "";
    display: inline-block;
    height: 0.4em;
    left: 0.6em;
    position: absolute;
    width: 0.4em;
}
.button-link__card-icon--cn {
    align-items: center;
    background-color: transparent;
    background-image: none;
    border-radius: 0;
    box-shadow: none;
    display: inline-flex;
    flex-direction: row;
    gap: 0.25em;
    height: auto;
    justify-content: center;
    position: static;
    width: auto;
}
.button-link__card-icon--cn::before {
    background-color: transparent;
    background-image: url("/images/alipay-logo-white.svg");
    background-repeat: no-repeat;
    background-size: auto 100%;
    border-radius: 0;
    box-shadow: none;
    content: "";
    display: inline-block;
    height: 1em;
    position: static;
    width: 4em;
}
.button-link__card-icon--cn::after {
    background-color: transparent;
    background-image: url("/images/unionpay-logo.svg");
    background-repeat: no-repeat;
    background-size: auto 100%;
    border-radius: 0;
    box-shadow: none;
    content: "";
    display: inline-block;
    height: 1.25em;
    position: static;
    width: 2em;
}
.button-link__card-icon--cn + .button-link__text {
    display: none;
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
    height: 2.5em;
    text-indent: -999em;
    width: 5em;
}
.button-link--other .button-link__text {
    font-size: 1em;
    font-weight: normal;
    -webkit-text-stroke: initial;
    text-decoration: underline;
    text-transform: none;
    transform: none;
}
.button-link--paddle {
    font-weight: bold;
}
.currencies {
    align-items: center;
    display: flex;
    flex-direction: row;
    font-size: 1.25rem;
    gap: 0.5em;
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
    /* display: inline-block; */
    display: none;
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
    background-size: calc(1.5em * 7) 1.125em;
    border-radius: 0.25em;
    display: inline-block;
    height: 1.125em;
    text-indent: -999em;
    width: 1.5em;
}
.flag-us {
    background-position-x: 0em;
}
.flag-uk {
    background-position-x: -1.5em;
}
.flag-eu {
    background-position-x: -3em;
}
.flag-jp {
    background-position-x: -4.5em;
}
.flag-ca {
    background-position-x: -6em;
}
.flag-cn {
    background-position-x: -7.5em;
}
.flag-au {
    background-position-x: -9em;
}

.payment-methods {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    justify-content: center;
    margin-top: 0.25rem;
}
.payment-methods i {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
}
.payment-methods__paypal {
    aspect-ratio: 101 / 32;
    background-image: url(/images/paypal-logo-white.svg);
    height: 1rem;
}
.payment-methods__gpay {
    aspect-ratio: 41 / 17;
    background-image: url(/images/icon-gpay.svg);
    height: 1rem;
}
.payment-methods__visa {
    aspect-ratio: 1 / 1;
    background-image: url('https://buy.paddle.com/images/icons/visa.svg');
    height: 1.5rem;
}
.payment-methods__mastercard {
    aspect-ratio: 1 / 1;
    background-image: url('https://buy.paddle.com/images/icons/mastercard.svg');
    height: 1.5rem;
}
.payment-methods__amex {
    aspect-ratio: 1 / 1;
    background-image: url('https://buy.paddle.com/images/icons/amex.svg');
    height: 1.5rem;
}

:host {
    container-type: inline-size;
    font-size: 1.25rem;
}
`;

class PlusTiersElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrom')) {
            return;
        }

        /** @type {(selector: string) => ReturnType<$>} */
        const s = (selector) => $(shadowRoot).find(selector);

        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);
        if (this.hasAttribute('blog')) {
            $(shadowRoot).find('[data-s]').each((node) => {
                const s = node.getAttribute('data-s') ?? '';
                if (s.includes('-side-')) {
                    node.setAttribute('data-s', s.replace('-side-', '-blog-'));
                }
            });
        }

        $(shadowRoot).find('[data-s]').each((node) => clicker(node, node.getAttribute('data-s') ?? ''));

        const update = () => {
            const {value: tier} = /** @type {HTMLInputElement} */(shadowRoot.querySelector('[name="tier"]:checked'));
            const {value: currency} = /** @type {HTMLInputElement} */(shadowRoot.querySelector('[name="currency"]:checked'));

            s('.js-link-stripe').each((node) => {
                /** @type {HTMLAnchorElement} */(node).href = tier === Tiers.PLUS ? Links.Stripe.PLUS : tier === Tiers.CORPORATE ? Links.Stripe.CORPORATE : Links.Stripe.REGULAR;
            });
            s('.js-link-paypal').each((node) => {
                /** @type {HTMLAnchorElement} */(node).href = tier === Tiers.PLUS ? Links.PayPal.PLUS[currency] : Links.PayPal.REGULAR[currency];
                // node.classList.toggle('button-link--inactive', tier === Tiers.CORPORATE || currency === 'CNY');
            });
            s('.js-link-other').each((node) => {
                /** @type {HTMLAnchorElement} */(node).href = tier === Tiers.PLUS ? Links.Redirect.PLUS : tier === Tiers.CORPORATE ? Links.Redirect.CORPORATE : Links.Redirect.REGULAR;
                // node.classList.toggle('button-link--inactive', tier !== Tiers.CORPORATE && currency !== 'CNY');
            });

            s('.js-price-regular').each((node) => node.textContent = Prices.REGULAR[currency]);
            s('.js-price-plus').each((node) => node.textContent = Prices.PLUS[currency]);
            s('.js-price-corporate').each((node) => node.textContent = Prices.CORPORATE[currency]);
            s('.js-currency-text').each((node) => node.textContent = currency);
        };

        shadowRoot.querySelector('.tiers')?.addEventListener('change', update);
        shadowRoot.querySelector('.currencies')?.addEventListener('change', update);

        update();

        if (document.documentElement.lang === 'zh-CN') {
            Object.entries(locales.cn).forEach(([key, text]) => {
                s(`[data-text="${key}"]`).each((node) => node.textContent = text);
            });
            s('.js-card-icon').each((node) => node.classList.add('button-link__card-icon--cn'));
        }

        initPaddle(this);
    }
}

/** @typedef {any} Paddle */

let didInitializePaddle = false;

/**
 * @param {PlusTiersElement} element
 */
async function initPaddle(element) {
    /** @type {any} */
    let Paddle;
    if (!didInitializePaddle) {
        // @ts-ignore
        await import('https://cdn.paddle.com/paddle/v2/paddle.js');
        Paddle = /** @type {any} */(window).Paddle;
        Paddle.Initialize({
            token: 'live_b32a4d21e35479ee3ea2b849be9',
        });
    }
    element.shadowRoot?.querySelector('.js-link-paddle')?.addEventListener('click', () => {
        Paddle.Checkout.open({
            token: 'live_b32a4d21e35479ee3ea2b849be9',
            settings: {
                displayMode: 'overlay',
                theme: 'dark',
                variant: 'one-page',
            },
            items: [
                {
                    priceId: 'pri_01je4ebmn474jsee5eh2gmfan9',
                    quantity: 1,
                },
            ],
        });
    });
}

customElements.define('darkreader-plus-tiers', PlusTiersElement);
