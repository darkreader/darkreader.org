// @ts-check

import {country, isEdge, isEUCountry} from './locales.js';
import {initPaddle} from './paddle.js';
import {clicker} from './stats.js';
import {
    createHTMLElement as html,
    $,
} from './utils.js';
import './donate-mascot.js'

const payURL = '/support-us';

const Tiers = {
    REGULAR: 'REGULAR',
    DISCOUNT: 'DISCOUNT',
    CORPORATE: 'CORPORATE',
};

const Links = {
    Redirect: {
        REGULAR: 'mailto:support@darkreader.org?subject=[Payment]%20Your%20Question',
        DISCOUNT: `mailto:support@darkreader.org?subject=[Discount]%20Your%20Question`,
        CORPORATE: `mailto:support@darkreader.org?subject=[Corporate]%20Your%20Request`,
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
            AUD: 'https://www.paypal.com/ncp/payment/V2YBJBHKLR4N4',
        },
        DISCOUNT: {
            USD: 'https://www.paypal.com/ncp/payment/ZGRN4ZD3CYWN8',
            GBP: 'https://www.paypal.com/ncp/payment/FDVGKHYKNG7N4',
            EUR: 'https://www.paypal.com/ncp/payment/FCHJZYGTLWAF2',
            JPY: 'https://www.paypal.com/ncp/payment/WX44HW8PNN6TN',
            CAD: 'https://www.paypal.com/ncp/payment/T632CCSRBWBBU',
            CNY: 'https://www.paypal.com/ncp/payment/ZGRN4ZD3CYWN8',
            AUD: 'https://www.paypal.com/ncp/payment/3XLHYERV96SLN',
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
    DISCOUNT: {
        USD: '$4.99',
        GBP: '£3.99',
        EUR: '€4.99',
        JPY: '¥700',
        CAD: '$6.99',
        CNY: '¥38.00',
        AUD: '$7.99',
    },
    CORPORATE: {
        USD: '$19.99',
        GBP: '£15.99',
        EUR: '€19.99',
        JPY: '¥3,000',
        CAD: '$25.99',
        CNY: '¥138.00',
        AUD: '$29.99',
    },
    SAVE: {
        USD: '$10.00',
        GBP: '£8.00',
        EUR: '€10.00',
        JPY: '¥1,500',
        CAD: '$13.00',
        CNY: '¥70.00',
        AUD: '$15.00',
    },
};

const DEFAULT_CURRENCY = country === 'GB' ? 'GBP' : country === 'JP' ? 'JPY' : country === 'CA' ? 'CAD' : country === 'AU' ? 'AUD' : country === 'CN' ? 'CNY' : isEUCountry ? 'EUR' : 'USD';
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

const today = new Date();
/** @type {(locale: string) => string} */
const formatDate = (locale) => today.toLocaleDateString(locale, { month: 'long', day: 'numeric' });

const takeCareMsgEnUS = [
    `Today is <strong>${formatDate('en-US')}</strong>, and we kindly ask you to complete the payment to keep Dark Reader going.`,
    `<strong>Every day</strong>, Dark Reader helps millions of people with migraines, photophobia, and light sensitivity.`,
    `Please <strong>make a payment now</strong>.`,
    `Take part in spreading dark mode and making the internet easier on everyone's eyes.`,
].join(' ');

const locales = {
    'zh-CN': {
        heading: '支付 Dark Reader 使用费',
        heading_short: '使用费',
        regular: '个人使用',
        discount: '折扣',
        corporate: '对于组织',
        card: '借记卡或信用卡',
        card_short: '支付',
        more: '更多的选择',
        one_time: '一次性付款',
        pay_with: '',
        price_per_user: '每位用户价格',
        region_currency: '货币',
        pay: '支付',
        save: '节省',
        hint: '在工作中使用？<br>请老板支付<br>辅助功能软件的费用。',
        we_take_care: '我们呵护您的眼睛，并提供尽可能最佳的暗黑模式。您的付款可帮助我们继续改进。',
    },
    de: {
        heading: 'Bezahlen für Dark Reader',
        regular: 'Einzelner Benutzer',
        corporate: 'Organisationen',
        one_time: 'Einmalzahlung',
        price_per_user: 'Preis pro Benutzer',
        pay: 'Zahlen',
        save: 'Sparen',
        hint: 'Nutzung am Arbeitsplatz?<br>Bitten Sie Ihren Chef,<br>die Kosten für<br>Barrierefreiheits-<br>Software zu übernehmen.',
        we_take_care: [
            `Heute ist <strong>${formatDate('de')}</strong>, und wir bitten Sie höflich, die Zahlung abzuschließen, damit Dark Reader weiterlaufen kann.`,
            `<strong>Tagtäglich</strong> hilft Dark Reader Millionen von Menschen mit Migräne, Photophobie und Lichtempfindlichkeit.`,
            `Bitte <strong>tätigen Sie jetzt oder</strong> kurz nach dem Ausprobieren der App eine Zahlung.`,
            `Hilf mit, den Dunkelmodus zu verbreiten und das Internet augenschonender zu gestalten.`,
        ].join(' '),
    },
    fr: {
        heading: 'Payer pour Dark Reader',
        regular: 'Usage individuel',
        corporate: 'Organisations',
        one_time: 'Paiement unique',
        price_per_user: 'Prix par utilisateur',
        pay: 'Payer',
        save: 'Économisez',
        hint: `Vous l'utilisez au travail?<br>Demandez à votre patron<br>de payer le logiciel<br>d'accessibilité.`,
        we_take_care: [
            `Aujourd'hui c'est <strong>${formatDate('fr')}</strong>, et nous vous demandons de bien vouloir effectuer le paiement pour que Dark Reader continue.`,
            `Depuis <strong>plus de 10 ans</strong>, Dark Reader a aidé des millions de personnes souffrant de migraines, de photophobie et de sensibilité à la lumière.`,
            `Veuillez <strong>effectuer un paiement maintenan</strong> ou peu de temps après avoir essayé l'application..`,
            `Participez à la diffusion du mode sombre sur Internet et contribuez à rendre le Web plus agréable pour les yeux de tous.`,
        ].join(' '),
    },
    es: {
        heading: 'Pague por Dark Reader',
        regular: 'Uso individual',
        corporate: 'Organizaciones',
        one_time: 'Pago único',
        price_per_user: 'Precio por usuario',
        pay: 'Pagar',
        save: 'Ahorra',
        hint: '¿Lo usas en el trabajo?<br>Pídele a tu jefe que<br>pague el software de<br>accesibilidad.',
        we_take_care: [ 
            `Hoy es <strong>${formatDate('es')}</strong>, y te pedimos que completes el pago para que Dark Reader siga funcionando.`,
            `For <strong>más de 10 años</strong>, Dark Reader ha ayudado a millones de personas con migrañas, fotofobia y sensibilidad a la luz.`,
            `Por favor, <strong>realiza el pago ahora</strong> o poco después de probar la app.`,
            `Participa en la difusión del modo oscuro en internet y ayuda a que la web sea más cómoda para todos.`,
        ].join(' '),
    },
    nl: {
        heading: 'Betaal voor Dark Reader',
        regular: 'Individueel gebruik',
        corporate: 'Organisaties',
        one_time: 'Eenmalige betaling',
        price_per_user: 'Prijs per gebruiker',
        pay: 'Betaling',
        save: 'Bespaar',
        hint: 'Gebruikt u het op het werk?<br>Vraag uw baas om<br>te betalen voor<br>toegankelijkheidssoftware.',
        we_take_care: [ 
            `Vandaag is het <strong>${formatDate('nl')}</strong>, en we vragen u vriendelijk om de betaling te voltooien om Dark Reader te kunnen blijven gebruiken.`,
            `Dark Reader helpt <strong>al meer dan 10 jaar</strong>, miljoenen mensen met migraine, fotofobie en lichtgevoeligheid.`,
            `Doe nu of kort na het uitproberen van de app een betaling.`,
            `Doe mee aan de verspreiding van de donkere modus op internet en help het web prettiger te maken voor iedereen.`,
        ].join(' '),
    },
    ja: {
        heading: 'Dark Reader の料金を支払う',
        regular: '個人使用',
        corporate: '組織',
        one_time: '1回限りの支払い',
        price_per_user: 'ユーザーあたりの価格',
        pay: '支払う',
        save: '節約',
        hint: '職場で使用していますか?<br>上司にアクセシビリティ<br>ソフトウェアの費用を負担<br>してもらいます。',
        we_take_care: [ 
            `今日は <strong>${formatDate('ja')}</strong>, Dark Readerを継続するために、お支払いを完了していただきますようお願いいたします。`,
            `Dark Readerは10年以上にわたり、片頭痛、羞明、光過敏症に悩む何百万人もの方々を支援してきました。`,
            `今すぐ、またはアプリをお試しいただいた後すぐにお支払いください。`,
            `インターネット上でダークモードを広め、皆様の目に優しいウェブ環境づくりにご協力ください。`,
        ].join(' '),
    },
};

const htmlText = `
<section class="pr">
    <div class="pr-wrapper">
        <h2 class="pr-heading" data-text="heading">Please pay for <span class="pr-heading__darkreader">Dark Reader</span></h2>
        <div class="pr-description" data-text="we_take_care">
            ${takeCareMsgEnUS}
        </div>
        <section class="payment-wrapper">
            <div class="currencies">
                <span class="currencies__text" data-text="region_currency">Currency</span>
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
                <label class="tier">
                    <div class="tier__top">
                        <input type="radio" name="tier" value="${Tiers.REGULAR}" checked>
                        <span class="tier__desc" data-text="regular">Individual use</span>
                        <span class="tier__connect"></span>
                        <span class="tier__price js-price-regular">${DEFAULT_PRICE_REGULAR}</span>
                        <span class="tier__save"><span data-text="save">Save</span> <strong class="js-price-save">${Prices.SAVE[DEFAULT_CURRENCY]}</strong></span>
                    </div>
                    <div class="tier__bottom" data-text="one_time">
                        One-time payment
                    </div>
                </label>
                <label class="tier" style="display: none;">
                    <div class="tier__top">
                        <input type="radio" name="tier" value="${Tiers.DISCOUNT}">
                        <span class="tier__desc" data-text="discount">Discount</span>
                        <span class="tier__connect"></span>
                        <span class="tier__price js-price-discount">${DEFAULT_PRICE_DISCOUNT}</span>
                    </div>
                    <div class="tier__bottom" data-text="one_time">
                        One-time payment
                    </div>
                </label>
                <label class="tier">
                    <div class="tier__top">
                        <input type="radio" name="tier" value="${Tiers.CORPORATE}">
                        <span class="tier__desc" data-text="corporate">Organizations</span>
                        <span class="tier__connect"></span>
                        <span class="tier__price js-price-corporate">${DEFAULT_PRICE_CORP}</span>
                        <span class="tier__hint" data-text="hint">Using at work?<br>Ask boss to pay<br>for accessibility<br>software.</span>
                    </div>
                    <div class="tier__bottom" data-text="price_per_user">
                        Price per user
                    </div>
                </label>
            </div>
            <div class="button-wrapper button-wrapper-paddle">
                <a class="button-link button-link--paypal button-link--inactive js-link-paypal" href="${DEFAULT_LINK_PAYPAL}" target="_blank" rel="noopener" data-s="d-side-paypal">
                    <span class="button-link__text"><span data-text="pay_with">Pay with</span> <span class="button-link__text--paypal">PayPal</span></span>
                </a>
                <a class="button-link button-link--card button-link--inactive js-link-stripe" href="${DEFAULT_LINK_STRIPE}" target="_blank" rel="noopener" data-s="d-side-stripe">
                    <i class="button-link__card-icon js-card-icon"></i>
                    <span class="button-link__text" data-text="card">Debit or Credit Card</span>
                </a>
                <a class="button-link button-link--other button-link--inactive js-link-other" href="${Links.Redirect.CORPORATE}" target="_blank" rel="noopener" data-s="d-side-other">
                    <span class="button-link__text" data-text="more">Contact us</span>
                </a>
                <a class="button-link button-link--paddle js-link-paddle" href="#pay" data-s="d-side-paddle">
                    <span class="button-link__text">
                        <span data-text="pay">Pay</span>
                        <span class="js-price-regular">${DEFAULT_PRICE_REGULAR}</span>
                    </span>
                </a>
                <a class="button-link button-link--paddle js-link-paddle-corp" href="#pay-corp" data-s="d-side-paddlecorp" style="display:none;">
                    <span class="button-link__text">
                        <span data-text="pay">Pay</span>
                        <span class="js-price-corporate">${DEFAULT_PRICE_CORP}</span>
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
            <darkreader-donate-mascot narrow></darkreader-donate-mascot>
        </section>
        <div class="pr-description pr-edge-plus" data-text="edge_plus" style="${isEdge ? '' : 'display: none;'}">
            <i class="pr-edge-plus__edge-icon"></i>
            Microsoft Edge users will get early access to
            <span class="pr-edge-plus__title"><span class="pr-edge-plus__title--dr">Dark Reader</span> <span class="pr-edge-plus__title--plus">Plus</span></span>.
            New user interface, premium themes & custom colors.
            <a href="/plus/" target="_blank">Learn more.</a>
        </div>
    </div>
</section>
<section class="pr-small">
    <span class="pr-optional">Optional</span>
    <h2 class="pr-heading" data-text="heading_short">User Fee</h2>
    <div class="price-small"><s class="price-small__strike js-price-regular">${DEFAULT_PRICE_REGULAR}</s> <span class="price-small__final js-price-discount">${DEFAULT_PRICE_DISCOUNT}</span></div>
    <div class="button-wrapper">
        <a class="button-link button-link--paypal js-link-paypal" href="${DEFAULT_LINK_PAYPAL}" target="_blank" rel="noopener" data-s="d-small-paypal">
            <span class="button-link__text"><span class="button-link__text--paypal">PayPal</span></span>
        </a>
        <a class="button-link button-link--card js-link-stripe" href="${DEFAULT_LINK_STRIPE}" target="_blank" rel="noopener" data-s="d-small-stripe">
            <i class="button-link__card-icon js-card-icon"></i>
            <span class="button-link__text" data-text="card_short">Pay with Card</span>
        </a>
        <a class="button-link button-link--other button-link--inactive js-link-other" href="${Links.Redirect.CORPORATE}" target="_blank" rel="noopener" data-s="d-small-other">
            <span class="button-link__text" data-text="more">Contact us</span>
        </a>
    </div>
</section>
`;

const cssText = `
:host {
    display: block;
    max-width: 35.5rem;
    min-width: 16rem;
    position: relative;
    width: 100%;
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
    font-size: 1.0rem;
    font-weight: bold;
    margin: 0 0 0.25rem 0;
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
.pr-description {
    display: none;
    line-height: 1;
    margin: 0.25rem 0 0.5rem 0;
    /*
    text-align: center;
    */
}
.pr-edge-plus {
    margin-top: 1rem;
    padding-left: 1.25rem;
    text-indent: -1.25rem;

    a {
        color: var(--color-text);
    }
}
.pr-edge-plus__edge-icon {
    background-image: url(/images/icon-edge-256x256.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    bottom: -0.125rem;
    display: inline-block;
    height: 1rem;
    position: relative;
    width: 1rem;
}
.pr-edge-plus__title {
    font-family: system-ui;
    text-transform: uppercase;
}
.pr-edge-plus__title--dr {
    background-image: linear-gradient(to right, #e7573b, #af6ce9, #40a6e5);
    background-clip: text;
    color: transparent;
    font-weight: 900;
    -webkit-text-stroke: 0.5px;
}
.pr-edge-plus__title--plus {
    color: white;
    font-weight: 300;
    /*
    text-shadow: 0 0 1rem var(--color-text), 0 0 0.75rem var(--color-text), 0 0 0.5rem var(--color-text), 0 0 0.25rem var(--color-text);
    */
}
.tiers {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    width: 100%;
}
.tier {
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    padding: 0.25rem 0;
}
.tier__top {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    line-height: 1;
    position: relative;
    transition: all 125ms;
    width: 100%;
}
.tier__bottom {
    font-size: 0.75rem;
    line-height: 1;
    margin-left: 1.25rem;
}
.tier input {
    display: none;
}
.tier__top::before {
    background-color: transparent;
    border: 1px solid var(--color-control);
    border-radius: 50%;
    box-sizing: border-box;
    content: "";
    display: inline-block;
    flex: none;
    height: 1rem;
    line-height: 1rem;
    position: relative;
    text-align: center;
    top: 0.375rem;
    transition: all 125ms;
    width: 1rem;
}
.tier__top:has(:checked)::before {
    background-color: var(--color-control);
}
.tier__top:has(:checked) .tier__connect {
    border-bottom-color: white;
}
.tier__top:has(:checked)::after {
    background-color: transparent;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    content: "";
    flex: none;
    height: 0.25rem;
    left: 0.175rem;
    position: absolute;
    top: 0.625rem;
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
    position: relative;
    top: 0.375rem;
    width: 100%;
}
.tier__price {
    display: inline-block;
    flex: none;
    font-weight: bold;
    justify-self: flex-end;
    position: relative;
    top: 0.375rem;
}
.tier__save {
    background-color: hsl(165, 65%, 25%);
    border-radius: 0.25rem;
    color: hsl(130, 60%, 75%);
    display: none;
    font-size: 0.75rem;
    font-weight: bold;
    left: calc(100% + 0.5rem);
    padding: 0.5rem;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
}
.tier__hint {
    display: none;
    font-size: 0.75rem;
    left: calc(100% + 0.5rem);
    line-height: 1;
    height: 1.5rem;
    position: absolute;
    text-align: left;
    top: 0.125rem;
    white-space: pre;
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
    justify-content: center;
    margin-top: 0.25rem;
}
.button-wrapper .button-link {
    margin: 0;
    max-width: 20rem;
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
.button-link__card-icon--cn {
    align-items: center;
    background-color: transparent;
    background-image: none;
    border-radius: 0;
    box-shadow: none;
    display: inline-flex;
    flex-direction: row;
    gap: 0.25rem;
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
    height: 1rem;
    position: static;
    width: 4rem;
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
    height: 1.25rem;
    position: static;
    width: 2rem;
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
.button-link--paddle {
    background-color: var(--color-control) !important;
    font-weight: bold;
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
    filter: grayscale(1);
    flex: none;
    opacity: 0.5;
}
.currency-button input {
    display: none;
}
.currency-button:has(:checked) {
    filter: none;
    opacity: 1;
}
.currency-button:not(:has(:checked)):hover {
    filter: none;
    opacity: 0.75;
}
.currencies__text {
    display: none;
    font-weight: 300;
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
    background-size: calc(24px * 7) 18px;
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
.flag-au {
    background-position-x: -144px;
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
    filter: brightness(3);
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

.pr-small {
    display: none;
}
:host([small]) .pr {
    display: none;
}
:host([small]) .bg {
    display: none;
}
:host([small]) .pr-small {
    align-items: center;
    column-gap: 0.5rem;
    display: grid;
    grid:
        "heading price" auto
        "buttons buttons" auto
        "optional optional" auto
        / auto auto;
    row-gap: 0.25rem;
    width: 7rem;
}
.pr-small .pr-heading {
    font-size: 1.5rem;
    grid-area: heading;
    text-align: center;
    text-transform: none;
}
.pr-small .pr-optional {
    display: inline-block;
    display: none;
    font-size: 0.75rem;
    font-weight: normal;
    grid-area: optional;
    margin: 0;
    text-align: center;
}
.pr-small .price-small {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    grid-area: price;
    white-space: nowrap;
}
.pr-small .price-small__strike {
    color: var(--color-text);
    font-size: 1rem;
    position: relative;
    text-decoration: none;
}
.pr-small .price-small__strike::after {
    border-top: 2px solid var(--color-highlight);
    bottom: 0;
    content: "";
    height: 40%;
    left: -0.125rem;
    position: absolute;
    transform: rotate(-10deg);
    width: calc(100% + 0.25rem);
}
.pr-small .button-wrapper {
    grid-area: buttons;
    margin: 0;
    width: 100%;
}
.pr-small .button-link {
    font-size: 1rem;
    height: 2.5rem;
    width: 100%;
}
.pr-small .button-link__text {
    font-size: 1rem;
    font-weight: normal;
    -webkit-text-stroke: unset;
    transform: none;
}
.payment-wrapper {
    width: 16rem;
}
darkreader-donate-mascot {
    display: none;
    pointer-events: none;
}

/* Wide */
:host {
    container-type: inline-size;
}
@container (width >= 32rem) {
    .pr {
        max-width: 100%;
    }
    .pr-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 100%;
        width: 32rem;
    }
    .pr-heading {
        font-size: 2rem;
        line-height: 1;
        text-align: left;
        -webkit-text-stroke: 0.125rem;
    }
    .pr-description {
        display: block;
    }
    /*
    .currencies {
        justify-content: center;
    }
    .currencies__text {
        display: inline-block;
    }
    */
    .tiers {
        /*
        flex-direction: row;
        gap: 1rem;
        */
        justify-content: center;
        margin: 0.5rem 0rem;
        width: 100%;
    }
    .tier {
        flex: none;
        min-width: 13rem;
        /*
        padding: 0rem;
        */
    }
    .tier__save {
        /*
        display: inline-block;
        */
        display: none;
    }
    .tier__hint {
        /*
        display: inline-block;
        */
        display: none;
    }
    .button-wrapper {
        flex-direction: row;
    }
    .payment-wrapper {
        /*
        margin-left: 4rem;
        */
        margin-left: 6rem;
        margin-top: 0.5rem;
        position: relative;
    }
    darkreader-donate-mascot {
        display: inline-block;
        position: absolute;
        right: 100%;
        top: -0.5rem;
        width: 10rem;
    }
}
:host([align-left]) {
    .pr,
    .pr-wrapper {
        margin: 0;
    }
}
`;

class PayTiersElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        const PADDLE_MODE = true;

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
                /** @type {HTMLAnchorElement} */(node).href = tier === Tiers.DISCOUNT ? Links.Stripe.DISCOUNT : tier === Tiers.CORPORATE ? Links.Stripe.CORPORATE : Links.Stripe.REGULAR;
            });
            s('.js-link-paypal').each((node) => {
                /** @type {HTMLAnchorElement} */(node).href = tier === Tiers.DISCOUNT ? Links.PayPal.DISCOUNT[currency] : Links.PayPal.REGULAR[currency];
                if (!PADDLE_MODE) {
                    node.classList.toggle('button-link--inactive', tier === Tiers.CORPORATE);
                }
            });
            s('.js-link-other').each((node) => {
                /** @type {HTMLAnchorElement} */(node).href = tier === Tiers.DISCOUNT ? Links.Redirect.DISCOUNT : tier === Tiers.CORPORATE ? Links.Redirect.CORPORATE : Links.Redirect.REGULAR;
                if (!PADDLE_MODE) {
                    node.classList.toggle('button-link--inactive', tier !== Tiers.CORPORATE);
                }
            });
            s('.js-link-paddle').each((node) => node.style.display = tier === Tiers.CORPORATE ? 'none' : '');
            s('.js-link-paddle-corp').each((node) => node.style.display = tier === Tiers.CORPORATE ? '' : 'none');

            s('.js-price-regular').each((node) => node.textContent = Prices.REGULAR[currency]);
            s('.js-price-discount').each((node) => node.textContent = Prices.DISCOUNT[currency]);
            s('.js-price-corporate').each((node) => node.textContent = Prices.CORPORATE[currency]);
            s('.js-price-save').each((node) => node.textContent = Prices.SAVE[currency]);
            s('.js-currency-text').each((node) => node.textContent = currency);
        };

        shadowRoot.querySelector('.tiers')?.addEventListener('change', update);
        shadowRoot.querySelector('.currencies')?.addEventListener('change', update);

        update();

        if (document.documentElement.lang === 'zh-CN') {
            s('.js-card-icon').each((node) => node.classList.add('button-link__card-icon--cn'));
        }
        const lang = document.documentElement.lang;
        if (Object.keys(locales).includes(lang)) {
            Object.entries(locales[lang]).forEach(([key, text]) => {
                s(`[data-text="${key}"]`).each((node) => node.innerHTML = text);
            });
        }

        if (PADDLE_MODE) {
            const feeButton = shadowRoot.querySelector('.js-link-paddle');
            const corpButton = shadowRoot.querySelector('.js-link-paddle-corp');
            initPaddle({
                feeButton,
                corpButton,
            });

            [feeButton, corpButton].forEach((button) => {
                if (!button) return;
                button.addEventListener('mouseenter', (e) => {
                    if (e.target === button) {
                        shadowRoot.querySelector('darkreader-donate-mascot')?.setAttribute('hover', '');
                    }
                });
                button.addEventListener('mouseleave', (e) => {
                    if (e.target === button) {
                        shadowRoot.querySelector('darkreader-donate-mascot')?.removeAttribute('hover');
                    }
                });
            });
        }
    }
}

customElements.define('darkreader-pay-tiers', PayTiersElement);
