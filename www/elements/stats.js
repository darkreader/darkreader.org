// @ts-check

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
        const params = [name, path, lang, time].map(encodeURIComponent).join('/');
        fetch(`https://click.darkreader.app/v2/${params}`);
    });
}
