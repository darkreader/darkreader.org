// @ts-check
const fs = require('fs-extra');
const {getRequest} = require('./utils/network');
const {createImageProcessor} = require('./utils/image');

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
    console.log('Updating backers...');
    const response = await getRequest('https://opencollective.com/darkreader/members/all.json');
    const backers = JSON.parse(response.text());
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
        .filter(d => d.net >= 100);

    const imageProcessor = await createImageProcessor();
    for (const backer of topBackers) {
        if (!backer.pic || !backer.name) {
            console.log(`No pic or name for ${backer.url}`);
            continue;
        }

        const remote = backer.pic;
        console.log(remote);

        const alias = backer.name
            .match(/^[a-z0-9]+( [a-z0-9]+)?( [a-z0-9]+)?/i)[0]
            .replace(/ /g, '')
            .toLowerCase();

        const response = await getRequest(remote)
        const buffer = response.buffer();
        const type = response.type();

        const extension = {
            'image/png': 'png',
            'image/jpeg': 'jpg',
        }[type];
        if (!extension) {
            console.log(`No extension for ${type}`);
            backer.pic = null;
            continue;
        }

        const file = `/images/backers/${alias}.${extension}`;
        backer.pic = file;
        if (await fs.pathExists(file)) {
            console.log(`> already exists ${file}`);
            continue;
        }

        const resized = await imageProcessor.resize(buffer, type, 80);
        await fs.outputFile(`www${file}`, resized);
        console.log(`> ${file}`);
    }

    const backersFile = 'www/data/top-backers.json';
    await writeJSON(backersFile, topBackers);
    console.log('Backers updated');
    await imageProcessor.destroy();
}

updateBackers();
