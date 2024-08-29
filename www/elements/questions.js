// @ts-check

import {country} from './locales.js';
import {
    createHTMLElement as html,
    $,
} from './utils.js';
import {clicker} from './stats.js';

const isFirefox = navigator.userAgent.includes('Firefox');
const isChrome = navigator.userAgent.includes('Chrom');
const isEdge = navigator.userAgent.includes('Edg');
const isSafari = navigator.userAgent.includes('Safari') && !isChrome;
const pieURL = 'https://pie.org/adblock?utm_source=bizdev&utm_medium=cpc&utm_campaign=na_na_us_bizdev_na_na_na_na_adblock&utm_term=na_na_us_bizdev_na_na_na_na_adblock_na_na_na_na_all_na_darkreader&utm_content=na_na_us_bizdev_na_na_na_na_adblock_na_na_na_na_all_na_darkreader_na_na_na_na_na_na_na';

const htmlText = `
<section class="container">
</section>`;

const cssText = `
.container {
    background-color: var(--color-bg);
}
p, a {
    color: #53b39f;
    font-family: monospace;
    width: 16rem;
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
img[src*="darkreader-icon-edges.png"] {
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
            `![Assistant](/images/darkreader-icon-edges.png)`,
            `Hey there! Let me assist you today. Just a few things you should know:`,
            `1. Please read this manual or scroll down and watch a 1 minute video showing how to use Dark Reader ▶️.`,
            `2. Please support our hard work by making a small payment. Please do it now or you will forget to do it later.`,
            `3. Install our app on your iPhone. Simply scan the QR code.`,
            `![QR code](/images/qr-code.png)`,
            `Have a wonderful day!`,
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
                const el = document.createElement(linkMatch ? 'a' : 'p');
                if (linkMatch) {
                    el.setAttribute('href', url);
                }
                const textShow = document.createElement('span');
                const textPrint = document.createElement('span');
                const textHide = document.createElement('span');
                textPrint.classList.add('print');
                textHide.classList.add('hide');
                textHide.textContent = text;
                el.append(textShow);
                el.append(textPrint);
                el.append(textHide);
                container.append(el);
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
