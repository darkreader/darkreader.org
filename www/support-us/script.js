import {country, isEUCountry} from '../elements/locales.js';

if (country === 'GB') {
    document.querySelectorAll('[value="region-uk"]').forEach((el) => el.checked = true);
} else if (country === 'US') {
    document.querySelectorAll('[value="region-us"]').forEach((el) => el.checked = true);
} else if (isEUCountry) {
    document.querySelectorAll('[value="region-eu"]').forEach((el) => el.checked = true);
} else {
    document.querySelectorAll('[value="region-other"]').forEach((el) => el.checked = true);
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
