// @ts-check

import './sponsors-graph.js';
import './sponsors-top-short.js';
import './pay-tiers.js';
import {clicker} from './stats.js';
import {
    createHTMLElement as html,
} from './utils.js';

const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180?platform=iphone';
const edgeURL = 'https://www.microsoft.com/edge/emmx/darkreadercollaboration';

const locales = {
    cn: {
        breaking_news: '突发新闻',
        is_now_available_for: '突发新闻',
        check_out_exclusive: '查看独家高级主题和自定义颜色',
        simply_scan: '只需扫描二维码即可在手机上安装',
    },
};

const htmlText = `
<section class="mob">
    <div class="mob-subtitle">
        <div class="mob-subtitle__news" data-text="breaking_news">
            Breaking News
        </div>
        <a class="mob-text-link" href="${edgeURL}" target="_blank" rel="noopener" data-s="drand-side-text">
            <span class="mob-text-link__darkreader">Dark Reader</span> <span data-text="is_now_available_for">is now<br>available for</span>
            <span class="mob-text-link__android">Android</span>!
        </a>
    </div>
    <div class="mob-badge-wrapper">
        <a class="mob-badge-link" href="${edgeURL}" target="_blank" rel="noopener" data-s="drand-side-badge">
            <img src="/images/google-play-badge.svg">
        </a>
    </div>
    <div class="mob-description">
        <a href="${edgeURL}" target="_blank" rel="noopener" data-s="drand-side-text" data-text="check_out_exclusive">
            Check out exclusive <strong>Premium Themes & Custom Colors</strong>
        </a>
    </div>
    <div class="mob-qr-2">
        <img class="just-qr" src="/images/qr-code.png">
        <div class="mob-description" data-text="simply_scan">
            Simply <strong>scan the QR code</strong> to install on your phone
        </div>
    </div>
    <div class="mob-qr">
        <div class="mob-qr-wrapper">
            <img src="/images/plus-screen-1.png" class="mob-screenshot mob-screenshot--visible">
            <img src="/images/plus-screen-3.png" class="mob-screenshot">
            <img src="/images/plus-screen-2.png" class="mob-screenshot">
        </div>
    </div>
    <div class="mob-description">
        Browser extensions for Android
        are brought to you by<br>
        <i class="mob-description__edge-icon"></i> <strong>Microsoft Edge</strong>
    </div>
    <div class="mob-description">
        Having iPhone or iPad?
        <a href="${safariURL}" target="_blank" rel="noopener" data-s="drios-side-text">
            Download on the App Store
        </a>
    </div>
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
    font-size: 1.05rem;
    line-height: 1.25rem;
    margin: 0 0 0.75rem 0;
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

.mob {
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    width: 14rem;
}
.mob-subtitle {
    font-weight: bold;
    text-align: center;
    width: 100%;
}
.mob-subtitle__news {
    background-color: var(--color-highlight);
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 auto 0.5rem auto;
    text-align: center;
    transform: skewX(-10deg);
    width: 100%;
}
.mob-text-link {
    border-bottom: 1px solid transparent;
    text-decoration: none;
}
.mob-text-link__darkreader {
    color: var(--color-highlight);
    font-weight: bold;
    text-transform: uppercase;
    transition: color 125ms;
    -webkit-text-stroke: 0.0625rem;
}
.mob-text-link__android {
    color: #61dc6e;
    font-weight: bold;
    text-transform: uppercase;
    transition: color 125ms;
    -webkit-text-stroke: 0.0625rem;
}
.mob-text-link:hover {
    border-bottom-color: var(--color-text-hover);
    transition: all 125ms;
}
.mob-text-link:hover .mob-text-link__darkreader,
.mob-text-link:hover .mob-text-link__android {
    color: var(--color-text-hover);
}
.mob-badge-wrapper {
    text-align: center;
    width: 100%;
}
.mob-badge-link {
    border-radius: 0.4rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    display: inline-flex;
    position: relative;
    transition: all 125ms;
    width: 11rem;
}
.mob-badge-link img {
    display: inline-block;
    width: 100%;
}
.mob-badge-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.mob-description {
    text-align: center;
    width: 100%;
}
.mob-description__edge-icon {
    background-image: url(/images/icon-edge-256x256.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 1rem;
    width: 1rem;
}
.mob-qr-2 {
    align-items: center;
    display: flex;
    flex-direction: row;
}
.just-qr {
    border-radius: 5%;
    box-shadow: 0 0.25rem 1rem black;
    display: inline-block;
    float: left;
    height: 6.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: 6.5rem;
}
.mob-qr {
    align-items: center;
    background-image: linear-gradient(150deg, var(--color-control), var(--color-bg));
    bottom: 0.5rem;
    border-radius: 1rem;
    box-shadow: 0 0.25rem 1rem black;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    font-weight: bold;
    justify-content: center;
    margin: 0;
    padding: 0.0625rem;
    text-align: center;
}
.mob-qr-wrapper {
    align-items: center;
    background-color: black;
    border-radius: 0.9125rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    overflow: hidden;
    padding: 0.125rem;
    position: relative;
    top: 0rem;
}
.mob-qr-wrapper::before {
    background-color: black;
    border-radius: 0.175rem;
    content: "";
    height: 0.375rem;
    position: absolute;
    top: 0.5rem;
    width: 1.75rem;
}
.mob-screenshot {
    border-radius: 0.7875rem;
    display: block;
    height: auto;
    opacity: 1;
    transition: opacity 500ms;
    width: 13rem;
}
.mob-screenshot:not(:first-child) {
    left: 0.125rem;
    opacity: 0;
    position: absolute;
    top: 0.125rem;
}
.mob-screenshot:not(:first-child).mob-screenshot--visible {
    opacity: 1;
}
`;

class MobileSideElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        shadowRoot.querySelectorAll('[data-s]').forEach((node) => clicker(node, node.getAttribute('data-s') ?? ''));

        shadowRoot.host.classList.toggle('c-cn', document.documentElement.lang === 'zh-CN');

        let i = 0;
        const images = shadowRoot.querySelectorAll('.mob-screenshot');
        setInterval(() => {
            i++;
            if (i === images.length) {
                i = 0;
            }
            images.forEach((el, j) => {
                el.classList.toggle('mob-screenshot--visible', i === j);
            });
        }, 4000);

        if (document.documentElement.lang === 'zh-CN') {
            Object.entries(locales.cn).forEach(([key, text]) => {
                shadowRoot.querySelectorAll(`[data-text="${key}"]`).forEach((node) => node.textContent = text);
            });
        }
    }
}

customElements.define('darkreader-mobile-side', MobileSideElement);
