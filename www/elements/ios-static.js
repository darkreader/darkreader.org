// @ts-check

import {clicker} from './stats.js';
import {
    createHTMLElement as html,
} from './utils.js';

const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180?platform=iphone';

const htmlText = `
<h2 class="heading">
    New app
</h2>
<div class="subtitle">
    <a class="text-link" href="${safariURL}" target="_blank" rel="noopener">
        <span class="text-link__darkreader">Dark Reader</span> for iOS
    </a>
</div>
<div class="badge-wrapper">
    <a class="badge-link" href="${safariURL}" target="_blank" rel="noopener">
        <img src="/images/app-store-badge.svg">
    </a>
</div>
<section class="o" style="display: none">
    <a class="offer-link" href="${safariURL}" target="_blank" rel="noopener">
        <div class="offer-1">Christmas Offer</div>
        <div class="offer-2">Only for <strong>$1.99</strong><span class="vat"> (+VAT)</span></div>
        <div class="offer-3">between <strong>Dec 23</strong> and <strong>Jan 3</strong></div>
    </a>
</section>
<section class="i">
    <a class="image-link" href="${safariURL}" target="_blank" rel="noopener">
        Dark Reader for iPhone, iPad and Mac
    </a>
</section>
<section class="q">
    <p>
        Scan & Install<br>
        <img src="/images/qr-code.png">
    </p>
</section>
`;

const cssText = `
a {
    color: var(--color-text);
    outline: none;
    transition: all 125ms;
}
a:hover {
    color: var(--color-text-hover);
}
:host {
    position: relative;
    width: 16rem;
}
.heading {
    background-color: #141e2477;
    border-radius: 0.25rem;
    color: var(--color-highlight);
    display: inline-block;
    line-height: 1.25rem;
    margin: 0 0 0 2.25rem;
    padding: 0.25rem;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
}
.subtitle {
    font-weight: bold;
    margin: 0 0 0 2.5rem;
}
.heading {
    display: none;
}
.subtitle a {
    border-bottom: 1px solid transparent;
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    -webkit-text-stroke: 0.0625rem;
    white-space: nowrap;
}
.text-link__darkreader {
    color: var(--color-highlight);
    text-transform: uppercase;
    transition: color 125ms;
}
.subtitle a:hover {
    border-bottom-color: var(--color-text-hover);
}
.subtitle a:hover .text-link__darkreader {
    color: var(--color-text-hover);
}
.badge-wrapper {
    margin: 0 0 0 2.5rem;
}
.badge-link {
    border-radius: 0.675rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    display: inline-flex;
    position: relative;
    top: 0.5rem;
    width: 11rem;
}
.badge-link img {
    display: inline-block;
    width: 100%;
}
.badge-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.offer-link {
    background-color: #143c1c;
    border-radius: 0.5rem;
    box-shadow: 0 0 0 0.5rem white;
    color: white;
    display: inline-block;
    margin: 1rem 2.5rem 0 2.5rem;
    outline: dashed 0.5rem #d50e0e;
    padding: 1rem 1rem;
    text-align: center;
    text-decoration: none;
    transition: all 0.25s;
    white-space: nowrap;
    width: auto;
}
.offer-link:hover {
    background-color: #0b3414;
    outline: dashed 0.5rem #ffbc00;
}
.offer-1 {
    color: #ffbc00;
    font-size: 1.25rem;
    font-weight: bold;
    -webkit-text-stroke: 0.03125rem;
}
.offer-2 {
    font-size: 1.1rem;
}
.offer-2 strong {
    -webkit-text-stroke: 0.03125rem;
}
.offer-3 {
    font-size: 0.75rem;
    font-style: italic;
}
.vat {
    font-size: 0.75rem;
}
section {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
    position: relative;
}
.image-link {
    background-image: url(/images/ios-photo-side.webp);
    background-repeat: no-repeat;
    background-size: contain;
    height: 30rem;
    position: relative;
    text-indent: -999rem;
    width: 14rem;
}
.image-link::before {
    background-image: url(/images/ios-photo-side-backlight.webp);
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 500ms;
    width: 100%;
    z-index: -1;
}
.image-link:hover::before {
    opacity: 1;
}
.q {
    left: -4rem;
    position: absolute;
    top: -1.2rem;
}
.q p {
    font-size: 0.75rem;
    font-weight: bold;
    margin: 0;
    text-align: center;
}
.q img {
    border-radius: 5%;
    display: block;
    height: 5rem;
    margin: 0.5rem auto;
    width: 5rem;
}
`;

class IOSStaticElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        clicker(shadowRoot.querySelector('.image-link'), 'drios-left');
        clicker(shadowRoot.querySelector('.text-link'), 'drios-left');
        clicker(shadowRoot.querySelector('.badge-link'), 'drios-left');
        clicker(shadowRoot.querySelector('.offer-link'), 'drios-left');

        const parent = this.parentElement;
        if (parent && parent.matches('.page-grid-left')) {
            const classes = {
                ScrollDown: 'ios__scroll-down',
                ScrollUp: 'ios__scroll-up',
                ShowUp: 'ios__show-up',
            };
            const scrollContainer = document.documentElement;
            let lastScrollTop = scrollContainer.scrollTop;
            document.addEventListener('scroll', () => {
                const scrollTop = scrollContainer.scrollTop;
                const dy = scrollTop - lastScrollTop;
                if (dy !== 0) {
                    const down = dy > 0;
                    this.classList.toggle(classes.ScrollDown, down);
                    this.classList.toggle(classes.ScrollUp, !down);
                }
                lastScrollTop = scrollTop;
            }, {passive: true});
            requestAnimationFrame(() => this.classList.add(classes.ShowUp));
        }
    }
}

customElements.define('darkreader-ios-static', IOSStaticElement);
