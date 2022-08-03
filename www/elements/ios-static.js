// @ts-check

import './backers-graph.js';
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
    <a class="text-link" href="${safariURL}">
        Dark Reader for iOS
    </a>
</div>
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
