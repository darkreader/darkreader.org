// @ts-check

import {
    createHTMLElement as html,
    classes,
} from './utils.js';

/**
 * @typedef Backer
 * @property {string} name
 * @property {string} url
 * @property {string} pic
 * @property {number} net
 * @property {'user' | 'org'} type
 * @property {string} info
 */

/**
 * @param {string} url
 * @returns {Promise<any>}
 */
async function loadJSON(url) {
    const response = await fetch(url);
    return await response.json();
}

let backersCache;

/**
 * @returns {Promise<Backer[]>}
 */
async function getBackers() {
    if (backersCache) {
        return backersCache;
    }
    const [users, organizations] = await Promise.all([
        loadJSON('/data/top-users.json'),
        loadJSON('/data/top-organizations.json'),
    ]);
    const backers = users.concat(organizations);
    backersCache = backers;
    return backers;
}

function scale(x, inLow, inHigh, outLow, outHigh) {
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
}

/**
 * @param {Backer[]} backers
 * @returns {HTMLElement}
 */
function createBackersGraph(backers) {
    const count = 12;

    function getColor(i) {
        const fillHue = scale(i, 0, count - 1, 120, 240);
        const fillSaturation = 25;
        const fillBrightness = scale(i, 0, count - 1, 50, 30);
        return `hsl(${fillHue}, ${fillSaturation}%, ${fillBrightness}%)`;
    }

    const organizations = backers.filter(b => b.type === 'org' && b.pic);
    const icons8Org = organizations.find(o => o.name.toLowerCase().includes('icons8'));
    const vpnBlogOrg = organizations.find(o => o.name.toLowerCase().includes('vpnwelt'));
    vpnBlogOrg.name = 'VPNwelt: online security products reviews'

    // const algoliaOrg = organizations.find(o => o.name.toLowerCase().includes('algolia'));
    // algoliaOrg.pic = 'https://res.cloudinary.com/hilnmyskv/image/upload/q_auto/v1599748315/Algolia_com_Website_assets/images/shared/algolia_logo/logo-algolia-white-full.svg';
    // const tripleOrg = organizations.find(o => o.name.toLowerCase().includes('triple'));
    const displayBackers = backers
        .filter((b) => ![icons8Org, vpnBlogOrg].includes(b))
        .filter((b) => b.pic != null)
        .sort((a, b) => b.net - a.net)
        .slice(0, count);

    return html('div', {class: 'grid'},
        // createBackerLink(algoliaOrg, 'large', '#3a416f'),
        // createBackerLink(tripleOrg, 'medium', null),
        createBackerLink(icons8Org, 'wide', null, 'icons8'),
        createBackerLink(vpnBlogOrg, 'wide', null, 'vpnwelt'),
        ...displayBackers.map((u, i) => createBackerLink(u, 'small', getColor(i))),
    );
}

/**
 * @param {Backer} backer
 * @param {'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'wide'} size
 * @param {string} [color]
 * @param {string} [cls]
 * @returns {HTMLElement}
 */
function createBackerLink(backer, size, color, cls) {
    const picture = html('span', {class: 'backer-pic'});
    if (backer.pic) {
        picture.style.backgroundImage = `url("${backer.pic}")`;
    } else {
        picture.classList.add('backer-pic--empty');
        picture.dataset.initials = (backer.name || '?')
            .split(' ')
            .slice(0, 2)
            .map(s => s.charAt(0).toUpperCase())
            .join('');
    }

    const link = html('a',
        {
            class: classes('backer', `backer--${size}`, cls),
            href: backer.url,
            title: backer.info || backer.name,
            target: '_blank',
            rel: 'noopener',
        },
        picture,
        html('span', {class: 'backer-name'},
            html('span', null,
                html('strong', null,
                    backer.name.split(':')[0],
                ),
                backer.name.split(':').length > 1 ?
                    `:${backer.name.split(':')[1]}` :
                    null,
            ),
        ),
    );
    if (color) {
        link.style.backgroundColor = color;
    }
    return link;
}

const cssText = `
.grid {
    display: grid;
    gap: 0.2rem;
    grid-template-columns: repeat(auto-fit, minmax(2.5rem, 1fr));
    grid-auto-rows: 2.5rem;
    grid-auto-fill: dense;
}
.backer {
    background-color: var(--color-control);
    border-radius: 1.25rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    color: white;
    display: inline-flex;
    text-decoration: none;
    transition: box-shadow 250ms;
}
.backer:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.backer-pic {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 1.25rem;
    display: inline-block;
    flex: none;
    height: 2.5rem;
    width: 2.5rem;
}
.backer-name {
    align-items: center;
    display: inline-flex;
    flex: auto;
    font-weight: normal;
    justify-content: center;
    overflow: hidden;
}
.backer--small .backer-name,
.backer--medium .backer-name {
    display: none;
}
.backer--medium {
    grid-column: span 2;
    grid-row: span 2;
}
.backer--medium .backer-pic {
    background-size: 120%;
    height: 100%;
    width: 100%;
}
.backer--large {
    grid-column: span 4;
    grid-row: span 2;
}
.backer--large .backer-pic,
.backer--x-large .backer-pic {
    border-radius: 1.25rem;
    background-size: 90%;
    height: 100%;
    width: 100%;
}
.backer--large .backer-name,
.backer--x-large .backer-name {
    display: none;
}
.backer--x-large {
    grid-column: span 6;
    grid-row: span 2;
}
.backer--wide {
    grid-column: span 6;
}
.backer-pic--empty::after {
    align-items: center;
    content: attr(data-initials);
    display: inline-flex;
    font-size: 1.25rem;
    height: 100%;
    justify-content: center;
    width: 100%;
}
.icons8 {
    background-color: #29795a;
}
.icons8 .backer-pic {
    background-color: #1eb141;
}
.vpnwelt {
    background-color: #173054;
}
`;

/** @type {WeakMap<HTMLElement, ShadowRoot>} */
const roots = new WeakMap();

class BackersGraphElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        roots.set(this, shadowRoot);
    }

    connectedCallback() {
        getBackers().then(backers => {
            const graph = createBackersGraph(backers);
            roots.get(this).append(graph);
        });
    }
}

customElements.define('darkreader-backers-graph', BackersGraphElement);
