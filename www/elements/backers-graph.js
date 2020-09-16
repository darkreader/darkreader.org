// @ts-check

import {
    createSVGElement as svg,
    getCSSText as css,
    SVG_NS,
} from './utils.js';

/**
 * @typedef Backer
 * @property {string} name
 * @property {string} url
 * @property {string} pic
 * @property {number} net
 */

/*
// Load top backers
// Paste on Open Collective website and run `loadBackers().then(json => ...)`
const BACKERS_COUNT = 24;
const URL = `https://opencollective.com/darkreader/members/all.json`;

async function loadBackers() {
    const response = await fetch(URL);
    const backers = await response.json();
    const topBackers = backers
        .slice()
        .sort((a, b) => b.totalAmountDonated - a.totalAmountDonated)
        .filter(d => d.lastTransactionAmount >= 0)
        .filter(d => d.name && d.name.toLowerCase() !== 'anonymous')
        .map(d => ({
            name: d.name,
            url: d.website || d.twitter || d.profile,
            pic: d.image,
            net: d.totalAmountDonated,
        }))
        .filter((d, i, arr) => arr.slice(0, i).every(x => x.url !== d.url))
        .slice(0, BACKERS_COUNT);
    return JSON.stringify(topBackers);
}
*/

const top24BackersJSON = '[{"name":"We Love Wallpaper NZ Ltd","url":"https://www.welovewallpaper.nz","pic":null,"net":400},{"name":"Richard Dawes","url":"https://opencollective.com/richard-dawes","pic":null,"net":374},{"name":"HP Tuners","url":"https://www.hptuners.com/","pic":"https://logo.clearbit.com/hptuners.com","net":300},{"name":"Ryan Hilliker","url":"https://opencollective.com/ryan-hilliker","pic":null,"net":280},{"name":"Algolia","url":"https://algolia.com","pic":"https://opencollective-production.s3-us-west-1.amazonaws.com/a3f24d90-7639-11e9-9c33-1b4223aef030.png","net":258},{"name":"Triplebyte","url":"https://triplebyte.com/os/opencollective","pic":"https://opencollective-production.s3.us-west-1.amazonaws.com/43e4f9d0-30cd-11ea-9c6b-e1142996e8b2.png","net":235},{"name":"Rain","url":"https://opencollective.com/rain","pic":null,"net":200},{"name":"Ryck Lent","url":"https://opencollective.com/ryck-lent","pic":null,"net":175},{"name":"Chaz Sewell","url":"https://opencollective.com/chaz-sewell","pic":"https://www.gravatar.com/avatar/f12210e9f7ad9ab7044ce87c2ad6db1f?default=404","net":150},{"name":"Kateryna Butenko","url":"https://twitter.com/katebutenko","pic":"https://www.gravatar.com/avatar/49e82a4af1e6943aaecc756ac6a337a3?default=404","net":120},{"name":"Jeffrey Galli","url":"https://opencollective.com/jeffrey-galli","pic":null,"net":106},{"name":"citizencr4","url":"https://opencollective.com/citizencr4","pic":"https://opencollective-production.s3.us-west-1.amazonaws.com/791ebf20-906b-11ea-aea1-499b39cf89c3.jpg","net":101},{"name":"Dawn Schrader","url":"https://twitter.com/badw0lf1","pic":"https://www.gravatar.com/avatar/e396e9c13562ad82e6c32f8281df8602?default=404","net":100},{"name":"Robert Klosterman","url":"https://opencollective.com/robert-klosterman","pic":null,"net":100},{"name":"Michael Baker","url":"https://opencollective.com/michael-baker","pic":null,"net":100},{"name":"Icons8: free icons, photos, illustrations, and music","url":"https://icons8.com","pic":"https://opencollective-production.s3.us-west-1.amazonaws.com/c7fe4d70-f085-11ea-9321-73950861b08b.png","net":100},{"name":"Mabin","url":"https://mabin.info","pic":"https://www.gravatar.com/avatar/97825f4c8d121ff67905d328c45d0cdf?default=404","net":95},{"name":"Daniel Kaspo","url":"https://twitter.com/danielkaspo","pic":"https://www.gravatar.com/avatar/81086a2e23d9d6ee05c31c9848c4b536?default=404","net":90},{"name":"Andrew Chernyshov","url":"https://opencollective.com/andrew-chernyshov","pic":null,"net":85},{"name":"Eric Shields","url":"https://opencollective.com/eric-shields","pic":"https://www.gravatar.com/avatar/d355ae45980dee8840b45081ec6bffaa?default=404","net":80},{"name":"Duncan Lock","url":"https://duncanlock.net/","pic":"https://www.gravatar.com/avatar/ca1ac9c04fbcaae624e80e6aa6c7ec52?default=404","net":67},{"name":"Ciarán Ainsworth","url":"https://rootkey.co.uk","pic":"https://opencollective-production.s3.us-west-1.amazonaws.com/4c3a9ce0-c914-11ea-bb7e-79f99fe6e2a1.jpeg","net":65},{"name":"incognito","url":"https://opencollective.com/incognito-7eda4435","pic":null,"net":65},{"name":"TSUNEHIKO SIMBO","url":"https://opencollective.com/tsunehiko-simbo","pic":null,"net":62}]';

function getBackers() {
    return JSON.parse(top24BackersJSON);
}

function scale(x, inLow, inHigh, outLow, outHigh) {
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
}

/**
 * @param {Object} options
 * @param {SVGSVGElement} options.svgRoot
 * @param {Backer[]} options.backers
 * @param {number} options.width
 * @param {number} options.height
 * @param {number} options.columns
 * @param {number} options.rows
 */
function drawBackersGraph({svgRoot, backers, width, height, columns, rows}) {
    const pad = 4;
    const size = Math.floor(Math.min((width - pad * (columns + 1)) / columns, (height - pad * (rows + 1)) / rows));
    const cx = size / 2;
    const cy = size / 2;
    const r = size / 2;

    function createDefs() {
        return svg('defs', null,
            svg('clipPath', {id: 'circle-clip'},
                svg('circle', {cx, cy, r}),
            ),
        );
    }

    function createStyle() {
        return svg('style', null,
            css({
                'image': {
                    'clip-path': 'url(#circle-clip)',
                },
                'a .highlight': {
                    'fill': 'none',
                    'opacity': 0,
                    'stroke': 'white',
                    'stroke-width': '1px',
                    'transition': 'opacity 250ms',
                },
                'a:hover .highlight': {
                    'opacity': 1,
                },
                'text': {
                    'dominant-baseline': 'central',
                    'fill': 'white',
                    'font-size': `${Math.floor(size / 2)}px`,
                    'text-anchor': 'middle',
                },
            }),
        );
    }

    /**
     * @param {Backer} backer
     * @param {number} i
     */
    function createUserPic(backer, i) {
        const xi = i % columns;
        const yi = Math.floor(i / columns);

        const c = (i) => pad + i * (size + pad);
        const x = c(xi);
        const y = c(yi);

        const title = `${backer.name} contributed $${backer.net}`;

        function fallbackPic() {
            const fill = (() => {
                const fillHue = scale(i, 0, backers.length - 1, 120, 240);
                const fillSaturation = 25;
                const fillBrightness = scale(i, 0, backers.length - 1, 50, 30);
                return `hsl(${fillHue}, ${fillSaturation}%, ${fillBrightness}%)`;
            })();
            const text = (backer.name || '?').split(' ').slice(0, 2).map(s => s.charAt(0).toUpperCase()).join('');

            return svg('g', {},
                svg('circle', {cx, cy, r, fill}),
                svg('text', {x: cx, y: cy},
                    text,
                ),
            );
        }

        return svg('a', {href: backer.url, transform: `translate(${x} ${y})`},
            backer.pic ?
                svg('image', {href: backer.pic, width: size, height: size}) :
                fallbackPic(),
            svg('circle', {class: 'highlight', cx, cy, r}),
            svg('title', {}, title),
        );
    }

    function draw() {
        while (svgRoot.lastChild) {
            svgRoot.lastChild.remove();
        }

        svgRoot.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svgRoot.append(createStyle());
        svgRoot.append(createDefs());
        backers.forEach((b, i) => {
            const el = createUserPic(b, i);
            svgRoot.append(el);
        });
    }

    draw();
}

class BackersGraphElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        this.svgElement = document.createElementNS(SVG_NS, 'svg');
        shadowRoot.append(this.svgElement);
    }

    connectedCallback() {
        const svgRoot = this.svgElement;
        const width = Number(this.getAttribute('width'));
        const height = Number(this.getAttribute('height'));
        const rows = Number(this.getAttribute('rows'));
        const columns = Number(this.getAttribute('columns'));
        const backers = getBackers();

        drawBackersGraph({svgRoot, backers, width, height, rows, columns});
    }
}

customElements.define('darkreader-backers-graph', BackersGraphElement);
