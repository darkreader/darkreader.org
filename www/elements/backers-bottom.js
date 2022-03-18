// @ts-check

import {
    createHTMLElement as html,
} from './utils.js';
import {isHCountry, isAliCountry} from './locales.js';
import {clicker} from './stats.js';

const hURL = 'https://www.joinhoney.com/darkreader';
const tURL = 'https://jointoucan.com/partners/darkreader';
const donateURL = 'https://opencollective.com/darkreader/donate';
const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180#?platform=iphone';
const alURL = 'https://alitools.io/install?utm_source=partner&utm_medium=darkreader&utm_campaign=dr_welcome';

const htmlText = `
<div class="support-us">
    <h2>
        Support us
    </h2>
    <p class="d-tx">
        Dark Reader is <strong>free</strong>, but only 1 of 2000 users supports us.
        Become that 2 of 2000, <strong>support us on <a href="${donateURL}">Open Collective</a></strong>.
    </p>
    <p class="h-tx">
        No money? <strong>Use <a href="${hURL}" class="h hl">Honey</a></strong>,
        an official <strong><em>PayPal</em></strong> extension,
        that will automatically find discounts when you purchase online.
    </p>
    <p class="a-tx">
        Shopping on AliExpress?
        Save money with <strong><a href="${alURL}" class="al">Alitools</a></strong>.
        It automatically activates promo codes and notifies of a price drop.
    </p>
    <p class="t-tx">
        Don't have time on learning a new language?
        <strong><a href="${tURL}" class="t tl">Toucan</a> extension</strong>
        will show you foreign words in web pages you browse.
    </p>
    <p class="s-tx">
        Do you have <strong>iPhone, iPad or Mac</strong>?
        Install <strong><a class="d sl" href="${safariURL}">Dark Reader for Safari</a></strong>.
        Good luck!
    </p>
    <p class="ns-tx">
        Dark Reader is <strong>not</strong> sponsored by
        <strong><a class="t fl" href="https://fibery.io/anxiety">Fibery</a></strong>,
        <strong><a class="gl" href="https://github.com/">GitHub</a></strong>
        and <strong><a class="ml" href="https://www.mozilla.org/">Mozilla</a></strong>,
        they are just cool!
    </p>
</div>
`;

const cssText = `
h2 {
    color: var(--color-highlight);
}
a {
    color: var(--color-text);
}
a:hover {
    color: var(--color-text-hover);
}
.h {
    color: var(--color-honey-text);
}
.al {
    color: var(--color-ali);
}
.t {
    color: var(--color-toucan-text);
}
.d {
    color: var(--color-highlight);
}
:host(:not(.c-h)) .h-tx {
    display: none;
}
:host(.c-h) .a-tx,
:host(:not(.c-ali)) .a-tx {
    display: none;
}
`;

class SupportUsElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        const qs = (s) => shadowRoot.querySelector(s);
        clicker(qs('.hl'), 'h-bottom');
        clicker(qs('.al'), 'ali-bottom');
        clicker(qs('.tl'), 't-bottom');
        clicker(qs('.sl'), 'drsafari-bottom');
        clicker(qs('.fl'), 'fib-bottom');
        clicker(qs('.gl'), 'gh-bottom');
        clicker(qs('.ml'), 'moz-bottom');

        shadowRoot.host.classList.toggle('c-h', isHCountry);
        shadowRoot.host.classList.toggle('c-ali', isAliCountry && !navigator.userAgent.includes('Chrom'));
    }
}

customElements.define('darkreader-support-us', SupportUsElement);
