// @ts-check
import {country, isPCountry} from './locales.js';

const ERROR_HANDLING_ENABLED = false;

/** @type {WeakSet<Element>} */
const handledElements = new WeakSet();

/**
 * @param {Element} element
 * @param {string} name
 */
function handle(element, name) {
    if (handledElements.has(element)) return;
    handledElements.add(element);
    const path = location.pathname;
    const lang = navigator.language;
    const time = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const params = encodeParams(name, path, lang, time);
    fetch(`https://count.darkreader.app/click/v1/${params}`);
}

/**
 * @param {Element | null} element
 * @param {string} name
 */
export function clicker(element, name) {
    if (!element) {
        return;
    }
    element.addEventListener('mousedown', () => {
        handle(element, name)
    }, {once: true});
}

function viewer() {
    const path = location.pathname;
    const lang = navigator.language;
    const time = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const params = encodeParams(path, lang, time);
    fetch(`https://count.darkreader.app/view/v1/${params}`);
}

async function checkNetErrors() {
    if (!ERROR_HANDLING_ENABLED) {
        return;
    }
    const urls = {
        'net-err-stats': 'https://stats.darkreader.app/',
        'net-err-counter': 'https://count.darkreader.app/',
        'net-err-statistics': 'https://statistics.darkreader.app/',
        'net-err-statistics-js': 'https://darkreader.org/elements/statistics.js',
    };
    /** @type {string[]} */
    const errors = [];
    for (const [alias, url] of Object.entries(urls)) {
        try {
            await fetch(url);
        } catch (err) {
            errors.push(alias);
        }
    }
    if (errors.length > 0) {
        const time = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const params = encodeParams(errors.join(';'), time);
        fetch(`https://errors.darkreader.app/errors/v1/${params}`);
    }
}

/**
 * @param  {...string} args
 * @returns {string}
 */
function encodeParams(...args) {
    return args.map((arg) => {
        return encodeURIComponent(arg.replace(/\//g, '--'));
    }).join('/');
}

if (document.visibilityState !== 'visible') {
    const listener = () => {
        if (document.visibilityState === 'visible') {
            document.removeEventListener('visibilitychange', listener);
            viewer();
            checkNetErrors();
        }
    };
    document.addEventListener('visibilitychange', listener);
} else {
    viewer();
    checkNetErrors();
}

/**
 * @param {EventTarget} node
 */
function checkDataAttr(node) {
    if (node instanceof Element && node.hasAttribute('data-s')) {
        handle(node, node.getAttribute('data-s') ?? '');
        return true;
    }
    return false;
}

addEventListener('mousedown', (e) => {
    e.composedPath().forEach((el) => checkDataAttr(el));
});

addEventListener('blur', () => {
    const loop = () => {
        /** @type {Node | null} */
        let node = document.activeElement;
        while (node) {
            checkDataAttr(node);
            node = node.parentNode;
        }
    };
    loop();
    setTimeout(loop);
});

if (isPCountry) {
    document.documentElement.dataset.p = 'p';
}
document.documentElement.dataset.c = country;
if (navigator.userAgent.toLowerCase().includes('mac')) {
    document.documentElement.dataset.o = 'mac';
}
