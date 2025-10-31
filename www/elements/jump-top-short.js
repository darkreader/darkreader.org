// @ts-check

import {country, isHCountry} from './locales.js';
import {
    createHTMLElement as html,
    $,
} from './utils.js';
import {clicker} from './stats.js';

const jumpURL = 'https://apps.apple.com/us/app/money-jump-13th-ave-madness/id6744975454';
const jumpTryURL = 'https://darkreader.ltd/moneyjump/try/';

const htmlText = `
<section class="container">
    <i class="jump-icon"></i>
    <section class="content">
        <div class="label">Celebrate <span class="dark-reader">Halloween</span> with us</div>
        <div class="description">
            Try the funny game that we made!
        </div>
        <div class="links">
            <a class="badge-link" href="${jumpURL}" target="_blank" rel="noopener" data-s="jump-top-badge">
                <img src="/images/app-store-badge.svg">
            </a>
            <a class="text-link" href="${jumpTryURL}" target="_blank" rel="noopener" data-s="jump-try-text">
                Play in browser
            </a>
        </div>
    </section>
</section>`;

const cssText = `
.container {
    align-items: center;
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
.jump-icon {
    background-image: url(/images/icons/icon-jump-256.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    height: 8rem;
    margin-top: 0.5rem;
    width: 8rem;
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
.description {
    font-size: 1.1rem;
    font-weight: bold;
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
    width: 10rem;
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

class JumpTopShortElement extends HTMLElement {
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

customElements.define('darkreader-jump-top-short', JumpTopShortElement);
