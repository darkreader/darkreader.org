'use strict';

const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
const tz_uk = [
    'Belfast',
    'London',
    'GB',
];
const tz_us = [
    'Adak',
    'Anchorage',
    'Atka',
    'Boise',
    'Chicago',
    'Denver',
    'Fort_Wayne',
    'Indiana',
    'Juneau',
    'Kentucky',
    'Knox_IN',
    'Los_Angeles',
    'Louisville',
    'Menominee',
    'Metlakatla',
    'New_York',
    'Nome',
    'North_Dakota',
    'Phoenix',
    'Shiprock',
    'Sitka',
    'Yakutat',
    'Navajo',
    'Honolulu',
    'US/',
];
const tz_eu = [
    'Amsterdam',
    'Athens',
    'Azores',
    'Berlin',
    'Bratislava',
    'Brussels',
    'Bucharest',
    'Budapest',
    'Busingen',
    'Canary',
    'Ceuta',
    'Copenhagen',
    'Dublin',
    'Eire',
    'Famagusta',
    'Helsinki',
    'Lisbon',
    'Ljubljana',
    'Luxembourg',
    'Madeira',
    'Madrid',
    'Malta',
    'Nicosia',
    'Paris',
    'Poland',
    'Portugal',
    'Prague',
    'Riga',
    'Rome',
    'Stockholm',
    'Tallinn',
    'Vienna',
    'Vilnius',
    'Warsaw',
    'Zagreb',
];
if (tz_uk.some((t) => tz.includes(t))) {
    document.querySelector('[name="region"][value="region-uk"]').checked = true;
} else if (tz_us.some((t) => tz.includes(t))) {
    document.querySelector('[name="region"][value="region-us"]').checked = true;
} else if (tz_eu.some((t) => tz.includes(t))) {
    document.querySelector('[name="region"][value="region-eu"]').checked = true;
} else {
    document.querySelector('[name="region"][value="region-other"]').checked = true;
}
