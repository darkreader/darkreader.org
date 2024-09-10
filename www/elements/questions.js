// @ts-check

import {country, isPCountry} from './locales.js';
import {
    createHTMLElement as html,
    $,
} from './utils.js';
import {clicker} from './stats.js';

const isFirefox = navigator.userAgent.includes('Firefox');
const isChrome = navigator.userAgent.includes('Chrom');
const isEdge = navigator.userAgent.includes('Edg');
const isSafari = navigator.userAgent.includes('Safari') && !isChrome;
const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180';
const iosURL = `${safariURL}?platform=iphone`;
const supportURL = '/support-us';
const pieURL = 'https://pie.org/darkreader';

const htmlText = `
<section class="container">
</section>`;

const cssText = `
.container {
    background-color: var(--color-bg);
}
p {
    color: var(--color-text);
    font-family: monospace;
    font-weight: bold;
    width: 16rem;
}
a {
    color: var(--color-highlight);
}
.print {
    color: white;
}
.hide {
    color: transparent;
}
a {
    text-decoration: none;
}
a > :first-child {
    text-decoration: underline;
}
a:hover > :first-child {
    color: white;
}
figure {
    background-color: var(--color-bg);
    margin: 0;
    position: relative;
    text-align: center;
}
img {
    mix-blend-mode: lighten;
    width: 8rem;
}
img[src*="darkreader-icon-"] {
    width: 4rem;
}
figure::after {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-name: image-loading;
    animation-timing-function: steps(5, end);
    background-color: var(--color-bg);
    bottom: 0;
    content: "";
    display: inline-block;
    height: 0%;
    left: 0;
    position: absolute;
    width: 100%;
}
@keyframes image-loading {
    from {
        height: 100%;
    }
    to {
        height: 0%;
    }
}
`;

class BackerTopShortElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);
        const container = $(shadowRoot).find('.container').node();

        $(shadowRoot).find('[data-s]').each((node) => clicker(node, node.getAttribute('data-s') ?? ''));

        const startText = [
            `![Assistant](/images/darkreader-icon-256x256.png)`,
            `Hey there! Let me assist you today. Just a few things you should know:`,
            `1. Please read this manual or scroll down and watch a 1 minute video showing how to use Dark Reader ▶️.`,
            ...(isSafari ? [
                `[2. Install Dark Reader for Safari.](${safariURL})`,
            ] : [
                `[2. Please support our hard work by making a small payment.](${supportURL})`,
                `[Pay now](${supportURL})`,
            ]),
            `3. Install our app on your iPhone. Simply scan the QR code.`,
            `![QR code](/images/qr-code.png)`,
            `Enjoy browsing with dark mode!`,
            ...(isPCountry ? [
                `P.S. Our friends at Pie offer a browser extension that allows you to block ads and get paid.`,
                `[Learn more](${pieURL})`,
            ] : []),
        ];

        /** @type {(delay: number) => Promise<void>} */
        const timeout = async (delay) => new Promise((resolve) => setTimeout(resolve, delay));

        /** @type {(lines: string[]) => Promise<void>} */
        const print = async (lines) => {
            for (const ln of lines) {
                let text = ln;
                let url = '';
                const imageMatch = ln.match(/^\!\[(.*)\]\((.*)\)$/);
                if (imageMatch) {
                    const fig = document.createElement('figure');
                    const img = document.createElement('img');
                    img.src = imageMatch[2];
                    img.alt = imageMatch[1];
                    fig.append(img);
                    container.append(fig);
                    continue;
                }
                const linkMatch = ln.match(/^\[(.*)\]\((.*)\)$/);
                if (linkMatch) {
                    text = linkMatch[1];
                    url = linkMatch[2];
                }
                await timeout(1000);
                const p = document.createElement('p');
                const a = document.createElement('a');
                a.href = url;
                if (url.includes('pie.org')) {
                    a.dataset.s = 'pie-assist-text';
                } else if (url.includes('iphone')) {
                    a.dataset.s = 'drios-assist-text';
                } else if (url.includes('apple.com')) {
                    a.dataset.s = 'drsafari-assist-text';
                } else if (url.includes('support')) {
                    a.dataset.s = 'd-assist-text';
                }
                const textShow = document.createElement('span');
                const textPrint = document.createElement('span');
                const textHide = document.createElement('span');
                textPrint.classList.add('print');
                textHide.classList.add('hide');
                textHide.textContent = text;
                const el = url ? a : p;
                el.append(textShow);
                el.append(textPrint);
                el.append(textHide);
                if (url) {
                    p.append(a);
                }
                container.append(p);
                for (let i = 0; i <= text.length; i++) {
                    await timeout(20);
                    const c = text[i] ?? '';
                    textShow.textContent = text.slice(0, i);
                    textPrint.textContent = c;
                    textHide.textContent = text.slice(i + 1);
                }
            }
        };

        if (document.visibilityState === 'visible') {
            print(startText);
        } else {
            document.addEventListener('visibilitychange', () => {
                print(startText);
            }, {once: true});
        }
    }
}

customElements.define('darkreader-questions', BackerTopShortElement);
