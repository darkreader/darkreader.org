// @ts-check
const https = require('https');

/**
 * @param {string} url
 * @returns {Promise<{buffer(): Buffer; text(encoding?: string): string; type(): string}>}
 */
function getRequest(url) {
    return new Promise((resolve) => {
        const data = [];
        https.get(url, (response) => {
            response
                .on('data', (chunk) => data.push(chunk))
                .on('end', () => {
                    const buffer = Buffer.concat(data)
                    resolve({
                        buffer: () => buffer,
                        text: (/** @type {BufferEncoding} */encoding = 'utf8') => buffer.toString(encoding),
                        type: () => response.headers['content-type'],
                    });
                });
        });
    });
}

module.exports = {
    getRequest,
};
