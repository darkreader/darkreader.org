import {country, isEUCountry} from '../elements/locales.js';

if (country === 'GB') {
    document.querySelector('[name="region"][value="region-uk"]').checked = true;
} else if (country === 'US') {
    document.querySelector('[name="region"][value="region-us"]').checked = true;
} else if (isEUCountry) {
    document.querySelector('[name="region"][value="region-eu"]').checked = true;
} else {
    document.querySelector('[name="region"][value="region-other"]').checked = true;
}

function setTier(name) {
    ['regular', 'corporate', 'discount'].forEach((tier) => {
        const element = document.querySelector(`[name="tier"][value="${tier}"]`);
        element.checked = element.value === name;
    });
}

if (location.hash.includes('tier-corporate')) {
    setTier('corporate');
} else if (location.hash.includes('tier-discount')) {
    setTier('discount');
} else {
    setTier('regular');
}

document.querySelector('.tiers').addEventListener('change', () => {
    if (location.hash) {
        location.hash = '';
    }
});
