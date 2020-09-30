// @ts-check

/**
 * @template {Element} T
 * @param {(tag: string) => T} create
 * @param {string} tag
 * @param {{[attr: string]: any}} attrs
 * @param {(Node | string)[]} children
 * @returns {T}
 */
function createElement(create, tag, attrs, children) {
    const el = create(tag);
    Object.entries(attrs || {}).forEach(([key, value]) => el.setAttribute(key, value));
    children.filter(c => c != null).forEach(c => el.append(typeof c === 'string' ? document.createTextNode(c) : c));
    return el;
}

const htmlElementCreator = (/** @type {string} */tag) => {
    return document.createElement(tag);
};

/**
 * @param {string} tag
 * @param {{[attr: string]: any}} [attrs]
 * @param {(Node | string)[]} [children]
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
 * @param {{[attr: string]: any}} [attrs]
 * @param {(SVGElement| Text | string)[]} [children]
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
