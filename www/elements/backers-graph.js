// @ts-check

import {
    createHTMLElement as html,
    classes,
} from './utils.js';
import {clicker} from './stats.js';

/**
 * @typedef Backer
 * @property {string} name
 * @property {string} url
 * @property {string} pic
 * @property {number} net
 * @property {'user' | 'org'} type
 * @property {string} info
 * @property {number?} pri
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
    const backers = await loadJSON('/data/top-backers.json');
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
    const count = 24;

    function getColor(i) {
        const fillHue = scale(i, 0, count - 1, 120, 240);
        const fillSaturation = 25;
        const fillBrightness = scale(i, 0, count - 1, 50, 30);
        return `hsl(${fillHue}, ${fillSaturation}%, ${fillBrightness}%)`;
    }

    const aapeliOrg = backers.find(o => o.name.toLowerCase().includes('aapeli'));
    aapeliOrg.name = 'Aapeli: Free online HTML5 games and arcades';
    aapeliOrg.pri = 1;
    const icons8Org = backers.find(o => o.name.toLowerCase().includes('icons8'));
    icons8Org.pri = 1;
    const qulixOrg = backers.find(o => o.name.toLowerCase().includes('qulix'));
    qulixOrg.pri = 1;
    const vpnBlogOrg = backers.find(o => o.name.toLowerCase().includes('vpnwelt'));
    vpnBlogOrg.url = 'https://vpnwelt.com/vpn-kostenlos/';
    vpnBlogOrg.pri = 1;
    vpnBlogOrg.name = 'VPNwelt: Best VPN Providers Recommended';
    vpnBlogOrg.info = 'Best Free VPN for Germany';
    const toucanOrg = backers.find(o => o.name.toLowerCase().includes('toucan'));

    const displayBackers = backers
        .filter((b) => ![aapeliOrg, icons8Org, qulixOrg, vpnBlogOrg, toucanOrg].includes(b))
        .filter((b) => b.pic != null)
        .sort((a, b) => b.net - a.net)
        .slice(0, count);
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 6; x++) {
            const i = y * 6 + x;
            if (i >= displayBackers.length) {
                break;
            }
            displayBackers[i].pri = y + 2;
        }
    }

    return html('div', {class: 'grid'},
        createBackerLink(icons8Org, 'wide', null, 'icons8'),
        createBackerLink(aapeliOrg, 'wide', null, 'aapeli'),
        createBackerLink(qulixOrg, 'wide', null, 'qulix'),
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
    link.dataset.pri = String(backer.pri);
    if (color) {
        link.style.backgroundColor = color;
    }
    let alias = 'backer';
    if (backer.name) {
        const match = backer.name.match(/^[a-z0-9]+( [a-z0-9]+)?( [a-z0-9]+)?/i);
        if (match && match[0]) {
            alias = match[0].replace(/ /g, '').toLowerCase();
        }
    }
    clicker(link, `${alias}-side`);
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
    padding: 0 0.25rem 0 0;
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
.qulix {
    background-color: #1e547e;
}
.vpnwelt {
    background-color: #173054;
}
@media screen and (min-width: 57rem) and (max-height: 40rem) {
    .backer[data-pri="2"] {
        display: none;
    }
}
@media screen and (min-width: 57rem) and (max-height: 48rem) {
    .backer[data-pri="3"] {
        display: none;
    }
}
@media screen and (min-width: 57rem) and (max-height: 52rem) {
    .backer[data-pri="4"] {
        display: none;
    }
}
@media screen and (min-width: 57rem) and (max-height: 55rem) {
    .backer[data-pri="5"] {
        display: none;
    }
}
@media screen and (min-width: 57rem) and (max-height: 58rem) {
    .backer[data-pri="6"] {
        display: none;
    }
}
`;

/** @type {WeakMap<HTMLElement, ShadowRoot>} */
const roots = new WeakMap();

class BackersGraphElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
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
