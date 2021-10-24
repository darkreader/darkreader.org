// @ts-check

import './backers-graph.js';
import {
    createHTMLElement as html,
} from './utils.js';

const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180#?platform=iphone';

const htmlText = `
<h2 class="heading">
    New app
</h2>
<section class="i">
    <a class="image-link" href="${safariURL}">
        Dark Reader for iPhone, iPad and Mac
    </a>
</section>
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
:host {
    width: 16rem;
}
.heading {
    color: var(--color-highlight);
    line-height: 1.25rem;
    margin: 0 0 0.75rem 2rem;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
}
section {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
    position: relative;
}
.image-link {
    background-image: url(/images/ios-phone.svg);
    filter: drop-shadow(0 0 0.5rem black);
    height: 32.5rem;
    position: relative;
    text-indent: -999rem;
    /*transition: filter 250ms;*/
    width: 16rem;
}
.image-link::after {
    background-image: url(/images/ios-hand.gif);
    background-size: 100%;
    content: "";
    height: 34.25rem;
    left: -4.8rem;
    pointer-events: none;
    position: absolute;
    top: 6.55rem;
    width: 34.25rem;
}
.image-link:hover {
    filter: drop-shadow(0 0 0.125rem var(--color-text-hover)) drop-shadow(0 0 0.25rem var(--color-text));
}
/*
.image-link::after {
    background-image: url(/images/ios-hand-left.gif);
    left: -13.2rem;
    top: 6.55rem;
}
*/
`;

class IOSSideElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);
    }
}

customElements.define('darkreader-ios-side', IOSSideElement);
