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

const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180';

const macHTMLText = htmlText + `
<div class="h-content">
    <a href="${safariURL}" class="h-safari-logo-link">Dark Reader for Safari</a>
    <span class="h-text">
        Are you a <strong>macOS</strong> user?
        <strong>Try</strong>
        <a href="${safariURL}" class="h-safari-link">Dark Reader for Safari</a>.
    </span>
</div>
`;

const svgPlusIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="#53a1b3" d="M3,0 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z"/></svg>';

function svgDataURL(svgText) {
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(svgText)}')`;
}

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
.h-content + .h-content {
    margin-top: 0.25rem;
}
.h-logo-link,
.h-safari-logo-link {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    display: inline-block;
    flex: none;
    margin: 0.25rem 0 0.25rem 0.25rem;
    text-indent: -999rem;
    transition: box-shadow 250ms;
}
.h-logo-link:hover,
.h-safari-logo-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.h-logo-link {
    background-color: var(--color-honey);
    background-image: url(/images/honey-logo-white.svg);
    background-position: 50% 52%;
    background-repeat: no-repeat;
    background-size: 6rem auto;
    border-radius: 0.625rem;
    width: 7.5rem;
}
.h-safari-logo-link {
    background-image:
        url(/images/icon-safari-66x66.svg),
        ${svgDataURL(svgPlusIcon)},
        url(/images/darkreader-icon.svg);
    background-position: 0 50%, center, 4rem 50%;
    background-repeat: no-repeat;
    background-size: 3rem, 0.75rem, 3rem;
    border-radius: 0.625rem;
    min-height: 3rem;
    width: 7rem;
}
.h-text {
    flex: auto;
    padding: 1rem;
}
.h-link,
.h-safari-link {
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
        const isMac = navigator.platform.toLowerCase().startsWith('mac');
        style.insertAdjacentHTML('afterend', isMac ? macHTMLText : htmlText);
    }
}

customElements.define('darkreader-backers-header', BackerHeaderElement);
