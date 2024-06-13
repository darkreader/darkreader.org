// @ts-check

/**
 * @template {Element} T
 * @param {(tag: string) => T} create
 * @param {string} tag
 * @param {{[attr: string]: any} | null} attrs
 * @param {Array<Node | string | null>} children
 * @returns {T}
 */
function createElement(create, tag, attrs, children) {
    const el = create(tag);
    Object.entries(attrs || {}).forEach(([key, value]) => el.setAttribute(key, value));
    children.filter(c => c != null).forEach(c => el.append(typeof c === 'string' ? document.createTextNode(c) : /** @type {Node} */(c)));
    return el;
}

const htmlElementCreator = (/** @type {string} */tag) => {
    return document.createElement(tag);
};

/**
 * @param {string} tag
 * @param {{[attr: string]: any} | null} attrs
 * @param {Array<Node | string | null>} children
 * @returns {HTMLElement}
 */
export function createHTMLElement(tag, attrs = {}, ...children) {
    return createElement(htmlElementCreator, tag, attrs, children);
}

export const SVG_NS = 'http://www.w3.org/2000/svg';
const svgElementCreator = (/** @type {string} */tag) => {
    return document.createElementNS(SVG_NS, tag);
};

/**
 * @param {string} tag
 * @param {{[attr: string]: any} | null} attrs
 * @param {Array<SVGElement| Text | string | null>} children
 * @returns {SVGElement}
 */
export function createSVGElement(tag, attrs = {}, ...children) {
    return createElement(svgElementCreator, tag, attrs, children);
}

/**
 * @param {{[selector: string]: any}} spec
 * @param {string} [indent]
 */
export function getCSSText(spec, indent = '') {
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
 * 
 * @param  {Array<string | {[cls: string]: any}>} args 
 */
export function classes(...args) {
    const classes = [];
    args.filter((c) => Boolean(c)).forEach((c) => {
        if (typeof c === 'string') {
            classes.push(c);
        } else if (typeof c === 'object') {
            classes.push(...Object.keys(c).filter((key) => Boolean(c[key])));
        }
    });
    return classes.join(' ');
}

class NodeSelection {
    /**
     * @param {string | Node | Node[]} selectorOrNode
     */
    constructor(selectorOrNode) {
        if (!selectorOrNode) {
            this.#nodes = [];
        } else if (typeof selectorOrNode === 'string') {
            this.#nodes = Array.from(document.querySelectorAll(selectorOrNode));
        } else if (selectorOrNode && selectorOrNode instanceof Node) {
            this.#nodes = [selectorOrNode];
        } else if (Array.isArray(selectorOrNode)) {
            this.#nodes = selectorOrNode;
        }
    }

    /** @type {Node[]} */
    #nodes = [];

    /**
     * @param {(node: HTMLElement, index: number) => void} iterator
     * @returns {NodeSelection}
     */
    each(iterator) {
        this.#nodes.forEach((node, i) => {
            iterator(/** @type {HTMLElement} */(node), i);
        });
        return this;
    }

    /**
     * @param {string} selector
     * @returns {NodeSelection}
     */
    find(selector) {
        /** @type {Node[]} */
        const nodes = [];
        this.each((node) => {
            const children = node.querySelectorAll(selector);
            children.forEach((c) => nodes.push(c));
        });
        return new NodeSelection(nodes);
    }

    /**
     * @returns {HTMLElement}
     */
    node() {
        return /** @type {HTMLElement} */(this.#nodes[0]);
    }
}

/**
 * @param {string | Node} selectorOrNode
 * @returns {NodeSelection}
 */
export function $(selectorOrNode) {
    return new NodeSelection(selectorOrNode);
}

/**
 * @template {(...args: any[]) => void} T
 * @param {number} delay
 * @param {T} fn
 * @returns {T}
 */
export function throttle(delay, fn) {
    let timeout;
    /** @type {any} */
    const throttled = (...args) => {
        if (timeout) {
            return;
        }
        timeout = setTimeout(() => {
            timeout = null;
        }, delay);
        fn(...args);
    };
    return throttled;
}
