// This function loads top backers.
// Paste on Open Collective website and run:
// loadBackers().then(json => ...)

const BACKERS_COUNT = 24;
const URL = `https://opencollective.com/darkreader/members/all.json`;

async function loadBackers() {
    const response = await fetch(URL);
    const backers = await response.json();
    const topBackers = backers
        .slice()
        .sort((a, b) => b.totalAmountDonated - a.totalAmountDonated)
        .filter(d => d.lastTransactionAmount >= 0)
        .filter(d => d.name && d.name.toLowerCase() !== 'anonymous')
        .map(d => ({
            name: d.name,
            url: d.website || d.twitter || d.profile,
            pic: d.image,
            net: d.totalAmountDonated,
        }))
        .filter((d, i, arr) => arr.slice(0, i).every(x => x.url !== d.url))
        .slice(0, BACKERS_COUNT);
    return JSON.stringify(topBackers);
}
