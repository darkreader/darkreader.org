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

/**
 * @returns {Promise<Backer[]>}
 */
async function getBackers() {
    const response = await fetch('/data/top-backers.json');
    return await response.json();
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

        svgRoot.setAttribute('viewBox', `0 0 ${width} ${height}`);

        getBackers()
            .then(topBackers => {
                const backers = topBackers.slice(0, rows * columns);
                drawBackersGraph({svgRoot, backers, width, height, rows, columns});
            });
    }
}

customElements.define('darkreader-backers-graph', BackersGraphElement);
