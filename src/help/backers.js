/**
 * @typedef Backer
 * @property {string} name
 * @property {string} url
 * @property {string} pic
 * @property {number} net
 */

/*
// Load top backers
const BACKERS_COUNT = 24;
const URL = `https://opencollective.com/darkreader/members/all.json`;

async function loadBackers() {
    const response = await fetch(URL);
    const backers = await response.json();
    const topBackers = backers
        .slice()
        .sort((a, b) => b.totalAmountDonated - a.totalAmountDonated)
        .filter(d => d.lastTransactionAmount >= 0)
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

const top24BackersJSON = '[{"name":"Richard Dawes","url":"https://opencollective.com/richard-dawes","pic":null,"net":332},{"name":"Ryan Hilliker","url":"https://opencollective.com/ryan-hilliker","pic":null,"net":260},{"name":"Algolia","url":"http://algolia.com","pic":"https://opencollective-production.s3-us-west-1.amazonaws.com/a3f24d90-7639-11e9-9c33-1b4223aef030.png","net":258},{"name":"Triplebyte","url":"https://triplebyte.com/os/opencollective","pic":"https://opencollective-production.s3.us-west-1.amazonaws.com/43e4f9d0-30cd-11ea-9c6b-e1142996e8b2.png","net":235},{"name":"anonymous","url":"https://opencollective.com/anonymous1916","pic":null,"net":200},{"name":"We Love Wallpaper NZ Ltd","url":"https://www.welovewallpaper.nz","pic":null,"net":200},{"name":"Ryck Lent","url":"https://opencollective.com/ryck-lent","pic":null,"net":175},{"name":"Chaz Sewell","url":"https://opencollective.com/chaz-sewell","pic":"https://www.gravatar.com/avatar/f12210e9f7ad9ab7044ce87c2ad6db1f?default=404","net":140},{"name":"anonymous","url":"https://twitter.com/beuiot","pic":null,"net":135},{"name":"anonymous","url":"https://opencollective.com/anonymous1245","pic":null,"net":119},{"name":"Kateryna Butenko","url":"https://twitter.com/katebutenko","pic":"https://www.gravatar.com/avatar/49e82a4af1e6943aaecc756ac6a337a3?default=404","net":110},{"name":"citizencr4","url":"https://opencollective.com/citizencr4","pic":"https://opencollective-production.s3.us-west-1.amazonaws.com/791ebf20-906b-11ea-aea1-499b39cf89c3.jpg","net":101},{"name":"anonymous","url":"https://opencollective.com/anonymous420","pic":null,"net":100},{"name":"Dawn Schrader","url":"https://twitter.com/badw0lf1","pic":"https://www.gravatar.com/avatar/e396e9c13562ad82e6c32f8281df8602?default=404","net":100},{"name":"Robert Klosterman","url":"https://opencollective.com/robert-klosterman","pic":null,"net":100},{"name":"anonymous","url":"https://opencollective.com/anonymous2334","pic":null,"net":100},{"name":"","url":"https://opencollective.com/gearnsc","pic":null,"net":100},{"name":"Jeffrey Galli","url":"https://opencollective.com/jeffrey-galli","pic":null,"net":96},{"name":"Daniel Kaspo","url":"https://twitter.com/danielkaspo","pic":"https://www.gravatar.com/avatar/81086a2e23d9d6ee05c31c9848c4b536?default=404","net":90},{"name":"Mabin","url":"http://mabin.info","pic":"https://www.gravatar.com/avatar/97825f4c8d121ff67905d328c45d0cdf?default=404","net":85},{"name":"anonymous","url":"https://opencollective.com/anonymous419","pic":null,"net":84},{"name":"Andrew Chernyshov","url":"https://opencollective.com/andrew-chernyshov","pic":null,"net":75},{"name":"anonymous","url":"https://opencollective.com/anonymous459","pic":null,"net":74},{"name":"Ciarán Ainsworth","url":"https://rootkey.co.uk","pic":"https://opencollective-production.s3.us-west-1.amazonaws.com/d7b33e10-e447-11e9-8797-ed526642f9ca.png","net":65}]';

function getBackers() {
    return JSON.parse(top24BackersJSON);
}

const SVG_NS = 'http://www.w3.org/2000/svg';

function scale(x, inLow, inHigh, outLow, outHigh) {
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
}

/**
 * @param {string} tag
 * @param {{[attr: string]: any}} [attrs]
 * @param {(SVGElement | string)[]} [children]
 * @returns {SVGElement}
 */
function createSVGElement(tag, attrs = {}, ...children) {
    const el = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs || {}).forEach(([key, value]) => el.setAttribute(key, value));
    children.filter(c => c != null).forEach(c => el.append(typeof c === 'string' ? document.createTextNode(c) : c));
    return el;
}

/**
 * @param {{[selector]: any}} spec
 * @param {string} [indent]
 */
function getCSSText(spec, indent = '') {
    return Object.entries(spec).reduce((cssText, [key, value], i) => {
        if (value == null) return cssText;
        const isObject = typeof value === 'object';
        return cssText
            + (i > 0 ? `\n${isObject ? '\n' : ''}` : '')
            + (`${indent}${key}${isObject ?
                ` {\n${getCSSText(value, `${indent}    `)}\n${indent}}` :
                `: ${value};`}`);
    }, '');
}

/**
 * @param {Object} options
 * @param {SVGSVGElement} options.svg
 * @param {Backer[]} options.backers
 * @param {number} options.width
 * @param {number} options.height
 * @param {number} options.columns
 * @param {number} options.rows
 */
function drawBackersGraph({svg, backers, width, height, columns, rows}) {
    const pad = 4;
    const size = Math.floor(Math.min((width - pad * (columns + 1)) / columns, (height - pad * (rows + 1)) / rows));
    const cx = size / 2;
    const cy = size / 2;
    const r = size / 2;

    function createDefs() {
        return createSVGElement('defs', null,
            createSVGElement('clipPath', {id: 'circle-clip'},
                createSVGElement('circle', {cx, cy, r}),
            ),
        );
    }

    function createStyle() {
        return createSVGElement('style', null,
            getCSSText({
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

            return createSVGElement('g', {},
                createSVGElement('circle', {cx, cy, r, fill}),
                createSVGElement('text', {x: cx, y: cy},
                    text,
                ),
            );
        }

        return createSVGElement('a', {href: backer.url, transform: `translate(${x} ${y})`},
            backer.pic ?
                createSVGElement('image', {href: backer.pic, width: size, height: size}) :
                fallbackPic(),
            createSVGElement('circle', {class: 'highlight', cx, cy, r}),
            createSVGElement('title', {}, title),
        );
    }

    function draw() {
        while (svg.lastChild) {
            svg.lastChild.remove();
        }

        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.append(createStyle());
        svg.append(createDefs());
        backers.forEach((b, i) => {
            const el = createUserPic(b, i);
            svg.append(el);
        });
    }

    draw();
}

class BackersElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.svgElement = document.createElementNS(SVG_NS, 'svg');
        this.shadowRoot.append(this.svgElement);
    }

    connectedCallback() {
        const svg = this.svgElement;
        const width = Number(this.getAttribute('width'));
        const height = Number(this.getAttribute('height'));
        const rows = Number(this.getAttribute('rows'));
        const columns = Number(this.getAttribute('columns'));
        const backers = getBackers();

        drawBackersGraph({svg, backers, width, height, rows, columns});
    }
}

customElements.define('darkreader-backers', BackersElement);
