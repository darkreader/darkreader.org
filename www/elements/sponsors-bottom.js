// @ts-check

import {
    createHTMLElement as html,
} from './utils.js';
import {isHCountry} from './locales.js';
import {clicker} from './stats.js';

const hURL = 'https://www.joinhoney.com/darkreader';
const donateURL = '/support-us';
const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180?platform=iphone';

const htmlText = `
<div class="support-us">
    <h2>
        Support us
    </h2>
    <p class="d-tx">
        Please <strong><a
            href="${donateURL}"
            target="_blank"
            rel="noopener"
        >pay for using Dark Reader</a></strong>.
    </p>
    <p class="h-tx">
        No money?
        <strong>Use <a href="${hURL}" class="h hl" target="_blank" rel="noopener">Honey</a></strong>,
        an official <strong><em>PayPal</em></strong> extension,
        that will automatically find discounts when you purchase online.
    </p>
    <p class="s-tx">
        Do you have <strong>iPhone, iPad or Mac</strong>?
        Install <strong><a class="d sl" href="${safariURL}" target="_blank" rel="noopener">Dark Reader for Safari</a></strong>.
    </p>
    <p class="ns-tx">
        Dark Reader is <strong>not</strong> sponsored by
        <strong><a class="t fl" href="https://fibery.io/anxiety" target="_blank" rel="noopener">Fibery</a></strong>,
        <strong><a class="gl" href="https://github.com/" target="_blank" rel="noopener">GitHub</a></strong>
        and <strong><a class="ml" href="https://www.mozilla.org/" target="_blank" rel="noopener">Mozilla</a></strong>,
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
.d {
    color: var(--color-highlight);
}
:host(:not(.c-h)) .h-tx {
    display: none;
}
`;

class SupportUsElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        const qs = (s) => shadowRoot.querySelector(s);
        clicker(qs('.hl'), 'h-bottom');
        clicker(qs('.tl'), 't-bottom');
        clicker(qs('.sl'), 'drsafari-bottom');
        clicker(qs('.fl'), 'fib-bottom');
        clicker(qs('.gl'), 'gh-bottom');
        clicker(qs('.ml'), 'moz-bottom');

        shadowRoot.host.classList.toggle('c-h', isHCountry);
    }
}

customElements.define('darkreader-support-us', SupportUsElement);
