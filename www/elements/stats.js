// @ts-check
const ERROR_HANDLING_ENABLED = false;

/**
 * @param {Element} element
 * @param {string} name
 */
export function clicker(element, name) {
    if (!element) {
        return;
    }
    element.addEventListener('mousedown', () => {
        const path = location.pathname;
        const lang = navigator.language;
        const time = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const params = encodeParams(name, path, lang, time);
        fetch(`https://count.darkreader.app/click/v1/${params}`);
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
        } catch(err) {
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
