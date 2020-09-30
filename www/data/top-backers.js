// This function loads top backers.
// Paste on Open Collective website and run:
// loadBackers().then(json => ...)

async function loadBackers({filter = () => true, count = 24} = {}) {
    const response = await fetch('https://opencollective.com/darkreader/members/all.json');
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
            type: d.type === 'ORGANIZATION' ? 'org' : d.type.toLowerCase(),
            info: d.description,
        }))
        .filter((d, i, arr) => arr.slice(0, i).every(x => x.url !== d.url))
        .filter(filter)
        .slice(0, count);
    return JSON.stringify(topBackers);
}

async function loadTopOrganizations({count = 24} = {}) {
    return await loadBackers({count, filter: d => d.type === 'org'});
}

async function loadTopUsers({count = 24} = {}) {
    return await loadBackers({count, filter: d => d.type === 'user'});
}
