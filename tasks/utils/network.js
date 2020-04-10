const http = require('http');
const https = require('https');

/**
 * @param {string} url
 * @returns {Promise<Buffer>}
 */
function getRequest(url) {
    const get = url.startsWith('https:') ? https.get : http.get;
    return new Promise((resolve) => {
        const data = [];
        get(url, (response) => {
            response
                .on('data', (chunk) => data.push(chunk))
                .on('end', () => resolve(Buffer.concat(data)));
        });
    });
}

module.exports = {
    getRequest,
};
