// @ts-check

import {country, isHCountry} from './locales.js';
import {
    createHTMLElement as html,
    $,
} from './utils.js';
import {clicker} from './stats.js';

const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180?platform=iphone';
// const isEdge = navigator.userAgent.includes('Edg');
const isMobile = navigator.userAgent.includes('Mobile');
const isSafari = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrom');

const htmlText = `
<section class="container">
    <div class="phone">
        <div class="screen">
            <div class="notch"></div>
            <div class="top">
                <span class="darkreader">Dark Reader</span>
                <span class="mobile">for iOS</span>
            </div>
            <div class="text js-text">
                Take care of your eyes when browsing on your phone
            </div>
            <div class="badge-wrapper">
                <a class="badge-link" href="${safariURL}" target="_blank" rel="noopener" data-s="drios-top-short">
                    <img src="/images/app-store-badge.svg">
                </a>
            </div>
        </div>
        <div class="qr">
            Scan & Install<br>
            <img src="/images/qr-code.png">
        </div>
    </div>
</section>`;

const cssText = `
:host {
    --bezel: 0.125rem;
    --color-bezel: var(--color-control, #316d7c);
}
.container {
    position: relative;
}
.phone {
    align-items: center;
    background-image: linear-gradient(to bottom, var(--color-bezel), var(--color-bg));
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    box-shadow: 0 0 1rem black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 12.5rem;
    justify-content: center;
    margin-right: 1rem;
    margin-top: 1rem;
    position: relative;
    width: 16rem;
}
.phone::after {
    background-image: linear-gradient(to top, var(--color-bg) 1rem, #141e2400);
    bottom: -1rem;
    content: "";
    display: block;
    height: 4rem;
    left: -1rem;
    position: absolute;
    width: 18rem;
}
.screen {
    align-items: center;
    background-image: linear-gradient(to bottom, var(--color-bg), black);
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    box-shadow: 0 0 0 0.375rem black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 12rem;
    justify-content: flex-start;
    margin: 0.5rem auto 0 auto;
    padding: 2rem 1rem 0 1rem;
    width: 15rem;
}
.notch {
    background-color: black;
    border-radius: 0.375rem;
    height: 0.75rem;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 1rem;
    width: 4rem;
}
.top {
    font-size: 1.2rem;
}
.top .darkreader {
    color: var(--color-highlight);
    font-weight: bold;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
}
.top .mobile {
    color: white;
    font-weight: 400;
}
.text {
    margin-top: 0.25rem;
    text-align: center;
}
.badge-wrapper {
    margin: 0;
}
.badge-link {
    border-radius: 0.675rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    display: inline-flex;
    position: relative;
    top: 1rem;
    transition: all 125ms;
    width: 11rem;
    z-index: 1;
}
.badge-link img {
    display: inline-block;
    width: 100%;
}
.badge-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.qr {
    bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 300;
    right: -11rem;
    margin: 0;
    position: absolute;
    text-align: center;
}
.qr img {
    border-radius: 5%;
    box-shadow: 0 0 1rem black;
    display: block;
    height: 7rem;
    margin: 0.5rem auto;
    width: 7rem;
}
`;

class MobileTopShortElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        if (isSafari || isMobile) {
            return;
        }

        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        $(shadowRoot).find('[data-s]').each((node) => clicker(node, node.getAttribute('data-s') ?? ''));

        if (document.documentElement.lang === 'zh-CN') {
            shadowRoot.querySelectorAll('.js-text').forEach((node) => node.textContent = '浏览手机时注意保护眼睛');
        }
    }
}

customElements.define('darkreader-mobile-top-short', MobileTopShortElement);
