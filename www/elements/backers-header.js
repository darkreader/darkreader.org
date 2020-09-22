// @ts-check

import {
    createHTMLElement as html,
} from './utils.js';

const url = 'https://www.joinhoney.com/darkreader';

let browserText = 'extension';
if (navigator.userAgent.includes('Firefox')) {
    browserText = 'for Firefox';
} else if (navigator.userAgent.includes('Edg')) {
    browserText = 'for Edge';
} else if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrom')) {
    browserText = 'for Safari';
} else if (navigator.userAgent.includes('OPR')) {
    browserText = 'for Opera';
} else if (navigator.userAgent.includes('Chromium')) {
    browserText = 'for Chromium';
} else if (navigator.userAgent.includes('Chrome')) {
    browserText = 'for Chrome';
}

const htmlText = `
<div class="h-title">
    Sponsored by
</div>
<div class="h-content">
    <a href="${url}" class="h-logo-link">Honey</a>
    <span class="h-text">
        <a href="${url}" class="h-link">Honey ${browserText}</a>,
        a product of <strong>PayPal</strong>.
        Automatically find and apply discounts when you purchase online.
        <a href="${url}">Learn more</a>.
    </span>
</div>
`;

const cssText = `
a {
    color: var(--color-text);
    outline: none;
    transition: color 125ms;
}
a:hover {
    color: var(--color-text-hover);
}
.rec-inplace-h {
    color: var(--color-hover);
    font-weight: bold;
}
.h-content {
    align-items: stretch;
    border: 0.125rem solid var(--color-control);
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    max-width: 35.5rem;
}
.h-logo-link {
    background-color: var(--color-honey);
    background-image: url(/images/honey-logo-white.svg);
    background-position: 50% 52%;
    background-repeat: no-repeat;
    background-size: 6rem auto;
    border-radius: 0.625rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    display: inline-block;
    flex: none;
    margin: 0.25rem 0 0.25rem 0.25rem;
    text-indent: -999rem;
    transition: box-shadow 250ms;
    width: 7.5rem;
}
.h-logo-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.h-text {
    flex: auto;
    padding: 1rem;
}
.h-link {
    color: var(--color-highlight);
    font-weight: bold;
}
.h-title {
    font-style: italic;
    max-width: 35.5rem;
    text-align: center;
    text-transform: uppercase;
}
`;

class BackerHeaderElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);
    }
}

customElements.define('darkreader-backers-header', BackerHeaderElement);
