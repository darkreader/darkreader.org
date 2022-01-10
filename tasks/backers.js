// @ts-check
const fs = require('fs').promises;
const https = require('https');

/**
 * @param {string} url
 * @returns {Promise<string>}
 */
function getRequest(url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', err => reject(err));
    });
}

/**
 * @param {string} dest
 * @param {Object} json
 * @returns {Promise<void>}
 */
async function writeJSON(dest, json) {
    const content = JSON.stringify(json);
    await fs.writeFile(dest, content);
}

async function updateBackers() {
    const response = await getRequest('https://opencollective.com/darkreader/members/all.json');
    const backers = JSON.parse(response);
    const topBackers = backers
        .sort((a, b) => b.totalAmountDonated - a.totalAmountDonated)
        .filter(d => d.lastTransactionAmount >= 0)
        .filter(d => d.name && !['anonymous', 'guest', 'incognito'].includes(d.name.toLowerCase()))
        .map(d => ({
            name: d.name,
            url: d.website || d.twitter || d.profile,
            pic: d.image,
            net: d.totalAmountDonated,
            type: d.type === 'ORGANIZATION' ? 'org' : d.type.toLowerCase(),
            info: d.description,
        }))
        .filter((d, i, arr) => arr.slice(0, i).every(x => x.url !== d.url))
        .filter(d => ['user', 'org'].includes(d.type))
        .slice(0, 50);
    await writeJSON('www/data/top-backers.json', topBackers);
}

updateBackers();
