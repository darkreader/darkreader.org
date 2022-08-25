// @ts-check

import {
    createHTMLElement as html,
} from './utils.js';
import {clicker} from './stats.js';

const hURL = 'https://www.joinhoney.com/darkreader';

const htmlText = `
<div>
    <a href="${hURL}" target="_blank" rel="noopener"
        class="h-banner">PayPal presents: Save money with Honel</a>
</div>
<div>
    <a href="${hURL}" target="_blank" rel="noopener"
        class="h-text">Learn more</a>
</div>
`;

const cssText = `
:host {
    --inside-post-height: 12rem;
    --inside-post-width: 24rem;
    text-align: center;
    width: var(--inside-post-width);
}
.h-text {
    color: var(--color-honey-text);
    font-weight: bold;
    outline: none;
    transition: color 125ms;
}
.h-text:hover {
    color: var(--color-text-hover);
}
.h-banner {
    background-color: var(--color-honey);
    background-image: url(/images/honey-banner-smile-horizontal.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    display: inline-block;
    flex: none;
    height: var(--inside-post-height);
    text-indent: -999rem;
    transition: box-shadow 250ms;
    width: var(--inside-post-width);
}
.h-banner:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
@media (max-width: 24rem) {
    :host {
        --inside-post-height: 9rem;
        --inside-post-width: 18rem;
    }
}
`;

class InsidePost extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        const qs = (s) => shadowRoot.querySelector(s);
        clicker(qs('.h-banner'), 'h-inside-banner');
        clicker(qs('.h-text'), 'h-inside-text');
    }
}

customElements.define('darkreader-inside-post', InsidePost);
