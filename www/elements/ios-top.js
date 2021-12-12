// @ts-check

import './backers-graph.js';
import {
    createHTMLElement as html,
} from './utils.js';

const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180#?platform=iphone';

const htmlText = `
<div class="title">
    Dark Mode <strong>for mobile</strong> devices is available
</div>
<a class="content" href="${safariURL}">
    <span class="mascot"></span>
    <span class="content_right">
        <span class="description">
            Use <strong>Dark Reader</strong>
            on your phone<br>
            Create your own color theme
        </span>
        <span class="install">
            <i class="install_icon"></i>
            <span class="install_right">
                <span class="install_top">
                    Download on the
                </span>
                <span class="install_bottom">
                    App Store
                </span>
            </span>
        </span>
    </span>
    <span class="screenshot" id="scr1"></span>
    <span class="screenshot" id="scr2"></span>
</a>
`;

const cssText = `
.title {
    font-style: italic;
    max-width: 34.5rem;
    text-align: center;
    text-transform: uppercase;
}
.content {
    align-items: center;
    background-image: linear-gradient(to right, var(--color-bg), var(--color-bg), #2c634e, #e48c10, #b40f4e);;
    border-radius: 1rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
    max-width: 34.5rem;
    padding: 1rem;
    text-decoration: none;
    transition: all 250ms;
    width: calc(100% - 2rem);
}
.content:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.content_right {
    display: inline-flex;
    flex-direction: column;
}
.mascot {
    background-image: url(/images/darkreader-mascot-mobile.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    height: 8rem;
    margin-right: 0.5rem;
    width: 5rem;
}
.description {
    color: white;
    margin-bottom: 0.5rem;
    text-align: center;
}
.install {
    align-items: center;
    background-color: black;
    border: 0.0625rem solid black;
    border-radius: 1rem;
    box-shadow: 0 0 0 var(--color-text);
    color: white;
    display: inline-flex;
    flex-direction: row;
    height: 5rem;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
}
/*
.install:hover {
    border-color: white;
    box-shadow: 0 0 1rem var(--color-text);
}
*/
.install_icon {
    background-image: url(/images/apple-logo-white.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    box-sizing: border-box;
    display: inline-block;
    height: 100%;
    margin: 0 1rem 0 1.5rem;
    width: 2.5rem;
}
.install_right {
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;
}
.install_top {
    font-weight: bold;
    margin-left: 0.25rem;
    white-space: nowrap;
}
.install_bottom {
    font-size: 2rem;
    font-weight: bold;
    white-space: nowrap;
}
.screenshot {
    background-color: var(--color-bg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 0.0625rem solid black;
    border-radius: 0.5rem;
    box-sizing: border-box;
    display: inline-block;
    height: 9rem;
    margin-left: 1rem;
    position: relative;
    width: 4rem;
}
.screenshot::before {
    background-color: black;
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    content: "";
    display: inline-block;
    height: 0.4rem;
    left: 1rem;
    position: absolute;
    top: 0;
    width: 2rem;
}
#scr1 {
    background-image: url(/images/ios-mini-1.jpg);
}
#scr2 {
    background-image: url(/images/ios-mini-3.jpg);
}
@media screen and (max-width: 57rem) {
    .screenshot {
        display: none;
    }
    .content {
        padding-left: 0;
    }
    .mascot {
        height: 6rem;
        margin-left: 0;
    }
    .install_icon {
        margin-left: 1rem;
        width: 2rem;
    }
    .install_right {
        display: flex;
        flex-direction: column;
        margin-right: 1rem;
    }
    .install_bottom {
        font-size: 1.5rem;
    }
}
`;

class IOSTopElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);
    }
}

customElements.define('darkreader-ios-top', IOSTopElement);
