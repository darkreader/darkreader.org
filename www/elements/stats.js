/**
 * @param {Element} element
 * @param {string} name
 */
export function clicker(element, name) {
    if (!element) {
        return;
    }
    element.addEventListener('mousedown', () => {
        const place = `${name}${location.pathname.replaceAll('/', ':')}`;
        const lang = navigator.language;
        const offset = (new Date()).getTimezoneOffset();
        const time = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const params = [place, lang, offset, time].map(encodeURIComponent).join('/');
        fetch(`https://click.darkreader.app/v1/${params}`);
    });
}
