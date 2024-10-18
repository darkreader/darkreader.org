// @ts-check

import {country, isHCountry} from './locales.js';
import {
    createHTMLElement as html,
    $,
} from './utils.js';
import {clicker} from './stats.js';

const edgeURL = 'https://www.microsoft.com/edge/emmx/darkreadercollaboration';
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
                <span class="mobile">Mobile</span>
            </div>
            <div class="text js-text">
                Take care of your eyes when browsing on your phone
            </div>
            <div class="qr">
                <img src="/images/qr-code.png">
                Scan & Install
            </div>
        </div>
    </div>
    <div class="links-block">
        <div class="android-wrapper">
            <strong class="android-new-text">NEW</strong><br>
            <i class="edge-icon"></i> <strong>Microsoft Edge</strong><br>
            supports browser<br>
            add-ons on <i class="android-icon"></i> <strong>Android</strong>
            <div class="badge-wrapper">
                <a class="badge-link" href="${edgeURL}" target="_blank" rel="noopener" data-s="drand-top-short">
                    <img src="/images/google-play-badge.svg">
                </a>
            </div>
        </div>
        <div class="ios-wrapper">
            <strong>Install for iPhone & iPad</strong>
            <div class="badge-wrapper">
                <a class="badge-link" href="${safariURL}" target="_blank" rel="noopener" data-s="drios-top-short">
                    <img src="/images/app-store-badge.svg">
                </a>
            </div>
        </div>
    </div>
</section>`;

const cssText = `
:host {
    --bezel: 0.125rem;
    --color-bezel: var(--color-control, #316d7c);
    --phone-height: 18.5rem;
    --phone-width: 15rem;
}
.container {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
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
    flex: none;
    flex-direction: column;
    height: var(--phone-height);
    justify-content: center;
    position: relative;
    width: var(--phone-width);
}
/*
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
*/
.screen {
    align-items: center;
    background-image: linear-gradient(to bottom, var(--color-bg), black);
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    box-shadow: 0 0 0 0.375rem black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: calc(var(--phone-height) - 0.5rem);
    justify-content: flex-start;
    margin: 0.5rem auto 0 auto;
    padding: 2rem 0 0 0;
    width: calc(var(--phone-width) - 1rem);
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
    font-size: 1.1rem;
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
    text-transform: uppercase;
}
.text {
    color: var(--color-text);
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
    color: white;
    font-weight: bold;
    margin: 0;
    text-align: center;
}
.qr img {
    border-radius: 5%;
    box-shadow: 0 0 1rem black;
    display: block;
    height: 8rem;
    margin: 0.5rem auto;
    width: 8rem;
}
.links-block {
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.edge-icon {
    background-image: url(/images/icon-edge-256x256.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 1rem;
    width: 1rem;
}
.android-icon {
    background-image: url(/images/icon-android-dark.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 1rem;
    width: 1rem;
}
.android-new-text {
    color: var(--color-highlight);
    font-size: 1.2rem;
    -webkit-text-stroke: 0.0625rem;
}
:host {
    container-type: inline-size;
    width: 100%;
}
@container (width < 28rem) {
    .container {
        gap: 1rem;
    }
}
@container (width < 25rem) {
    .links-block {
        display: none;
    }
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
