// @ts-check
import {throttle} from './utils.js';

/**
 * @param {Element} element
 * @param {string} name
 */
export function clicker(element, name) {
    if (!element) {
        return;
    }
    element.addEventListener('mousedown', throttle(500, () => {
        const path = location.pathname;
        const lang = navigator.language;
        const time = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const params = encodeParams(name, path, lang, time);
        fetch(`https://stats.darkreader.app/click/v1/${params}`);
    }));
}

function viewer() {
    const path = location.pathname;
    const lang = navigator.language;
    const time = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const params = encodeParams(path, lang, time);
    fetch(`https://stats.darkreader.app/view/v1/${params}`);
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
        }
    };
    document.addEventListener('visibilitychange', listener);
} else {
    viewer();
}

function subscribe() {
    document.querySelectorAll('[data-s]').forEach((el) => {
        clicker(el, el.getAttribute('data-s'));
    });
}

if (document.readyState === 'interactive') {
    subscribe();
} else {
    document.addEventListener('readystatechange', subscribe, {once: true});
}
