// @ts-check

import {country, isHCountry} from './locales.js';
import {
    createHTMLElement as html,
    $,
} from './utils.js';
import {clicker} from './stats.js';

const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180';

const htmlText = `
<section class="container">
    <i class="safari-icon"></i>
    <section class="content">
        <div class="label"><span class="dark-reader">Dark Reader</span> for Safari</div>
        <div class="description">
            Get access to the latest features<br>
            on macOS, iOS and iPadOS.
        </div>
        <div class="links">
            <a class="badge-link" href="${safariURL}" target="_blank" rel="noopener" data-s="drsafari-top-badge">
                <img src="/images/app-store-badge.svg">
            </a>
            <a class="text-link" href="${safariURL}" target="_blank" rel="noopener" data-s="drsafari-top-text">
                Learn more
            </a>
        </div>
    </section>
</section>`;

const cssText = `
.container {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    padding-top: 0;
}
:host {
    container-type: inline-size;
    width: 100%;
}
.safari-icon {
    background-image: url(/images/icon-safari-66x66.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    height: 7rem;
    margin-top: 0.5rem;
    width: 7rem;
}
.content {
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.label {
    color: var(--color-highlight);
    font-size: 1.35rem;
    font-weight: bold;
    line-height: 1;
    -webkit-text-stroke: 0.0625rem;
}
.links {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
}
.badge-link {
    display: inline-block;
}
.badge-link img {
    display: inline-block;
    width: 8rem;
}
.text-link {
    color: var(--color-text);
    transition: color 250ms;
}
.text-link:hover {
    color: white;
}
@container (width >= 28rem) {
}
`;

class SafariTopShortElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        const style = html('style', {}, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        if (this.hasAttribute('side')) {
            shadowRoot.querySelectorAll('[data-s]').forEach((node) => {
                const s = node.getAttribute('data-s') ?? '';
                node.setAttribute('data-s', s.replace('-top-', '-side-'));
            });
        }

        $(shadowRoot).find('[data-s]').each((node) => clicker(node, node.getAttribute('data-s') ?? ''));
    }
}

customElements.define('darkreader-safari-top-short', SafariTopShortElement);
