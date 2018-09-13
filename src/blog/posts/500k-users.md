# We have 500,000 users! Interactive lifetime charts

By September 13 we have
**532,664** [Google Chrome](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh) users
and **24,151** [Mozilla Firefox](https://addons.mozilla.org/firefox/addon/darkreader/) users
*(and also 2,040 [Dark Retired](https://chrome.google.com/webstore/detail/dark-retired/oibheihomapbjogmoabgfbkchjchpdfp) users)*.

<div id="chart-users" class="chart" style="background: #1c2128; width: 40rem; height: 20rem;"></div>

<h6 style="text-align: right; margin-top: 0;">This chart is powered by [Vizydrop](https://trello.vizydrop.com/)</h6>

### Budget

In April we launched a [crowdfunding campaign](https://darkreader.org/blog/dynamic-theme/). Today our monthly budget is about **$200**, 1/5th of a planned minimal budget.

<div id="chart-backers" class="chart" style="background: #1c2128; width: 40rem; height: 20rem;"></div>

<h6 style="text-align: right; margin-top: 0;">This chart is powered by [Vizydrop](https://trello.vizydrop.com/)</h6>

Total [number of backers](https://opencollective.com/darkreader#contributors) is **253**.
Also we have **120** [GitHub contributors](https://github.com/darkreader/darkreader/graphs/contributors).
Thank you for your help, you are doing a great thing.

<img src="/images/darkreader-300-backers.png" alt="Dark Reader 300 backers" style="width: 40rem;" />

**PayPal** support was added recently, you can [contribute to the project too](https://opencollective.com/darkreader/donate).

Today the number of reported bugs is enormous.
Sorry that currently we are not able to reply to everyone.
Anyway we are going to continue the development and release the most requested feature soon: [the Time Settings](https://github.com/darkreader/darkreader/issues/10).

### Translations

Many Dark Reader users translated the app into their native language:
- Chinese simplified by [Wentao Ma](https://github.com/WalterMa).
- Chinese traditional by [Tony Liu](https://github.com/lcynot).
- Czech by [@jy-r](https://github.com/jy-r) and [@multiflexi](https://github.com/multiflexi) *(+ help page)*.
- French by [Fx Bénard](https://github.com/fxbenard).
- German by [@stonecrusher](https://github.com/stonecrusher) *(+ help page)*.
- Italian by [Giorgio Gamberini](https://github.com/giorgiogamberini) *(+ help page)*.
- Japanese by [@ScratchBuild](https://github.com/ScratchBuild).
- Romanian by [Mihai Gătejescu](https://github.com/odCat).
- Spanish by [Martín Ferrari](https://github.com/ferrarimartin).

Everyone can suggest a translation, as described [here](https://github.com/darkreader/darkreader/issues/559).

### Security

Dark Reader was rewarded for reporting the ability to inject the script into the New Tab Page.
The problem happened after you opened the Incognito or Guest window.
Extensions were able to modify the content of the New Tab Page without your acknowledgment.
The issue was fixed in latest [Chrome 69](https://chromereleases.googleblog.com/2018/09/stable-channel-update-for-desktop.html).

<iframe width="560" height="315" src="https://www.youtube.com/embed/RUaLdMxl4zw?rel=0" frameborder="0" allowfullscreen></iframe>

<script src="https://cdn.jsdelivr.net/npm/d3@5.7.0/dist/d3.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/taucharts@2.6.1/dist/taucharts.min.js" defer></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/taucharts@2.6.1/dist/taucharts.dark.min.css" />
<script>
window.addEventListener('DOMContentLoaded', function() {
// Users
Taucharts.api.tickFormat.add('m-y', function (x) {
  return x.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
});
(new Taucharts.Chart({
  type: 'stacked-area',
  x: 'Date',
  y: 'Users',
  color: 'Browser',
  data: getUsersData(),
  guide: {
    x: {
      tickFormat: 'm-y',
      timeInterval: 'month'
    },
    showGridLines: 'y',
    color: {
      brewer: [
        '#2c89a0',
        '#e96c4c'
      ]
    }
  },
  settings: {
    fitModel: 'entire-view'
  },
  plugins: [
    Taucharts.api.plugins.get('crosshair')(),
    Taucharts.api.plugins.get('diff-tooltip')(),
    Taucharts.api.plugins.get('annotations')({
      items: [{
        dim: 'Date',
        val: new Date('2018-03-27'),
        text: 'v4',
        color: 'white',
        position: 'front',
      }, {
        dim: 'Date',
        val: new Date('2015-06-24'),
        text: 'v3',
        color: '#37abc8'
      }, {
        dim: 'Date',
        val: new Date('2014-07-07'),
        text: '2014',
        color: '#e96c4c'
      }]
    })
  ],
})).renderTo('#chart-users');
function getUsersData() {
  var csv = getUsersCSV();
  var SEPARATOR = ',';
  var lines = csv.map(function (ln) { return ln.trim(); }).filter(function (ln) { return ln; });
  var headers = lines[0].split(SEPARATOR);
  var data = lines.slice(1).map(function (ln) {
    var values = ln.split(SEPARATOR)
      .map(function (raw) {
        var value = null;
        value = Number(raw);
        if (isNaN(value)) {
          value = new Date(raw);
          if (isNaN(value)) {
            value = raw;
          }
        }
        return value;
      });
    return headers.reduce(function (obj, prop, i) {
      obj[prop] = values[i];
      return obj;
    }, {});
  });
  return data;
}
function getUsersCSV() {
  return [
    'Date,Users,Browser',
    '2014-08-01,61,Chrome',
    '2014-09-01,182,Chrome',
    '2014-10-01,308,Chrome',
    '2014-11-01,472,Chrome',
    '2014-12-01,680,Chrome',
    '2015-01-01,828,Chrome',
    '2015-02-01,1246,Chrome',
    '2015-03-01,2230,Chrome',
    '2015-04-01,2881,Chrome',
    '2015-05-01,3904,Chrome',
    '2015-06-01,4869,Chrome',
    '2015-07-01,5743,Chrome',
    '2015-08-01,7137,Chrome',
    '2015-09-01,8579,Chrome',
    '2015-10-01,10899,Chrome',
    '2015-11-01,13273,Chrome',
    '2015-12-01,16118,Chrome',
    '2016-01-01,17297,Chrome',
    '2016-02-01,36003,Chrome',
    '2016-03-01,41060,Chrome',
    '2016-04-01,47153,Chrome',
    '2016-05-01,53482,Chrome',
    '2016-06-01,57693,Chrome',
    '2016-07-01,73830,Chrome',
    '2016-08-01,86787,Chrome',
    '2016-09-01,101292,Chrome',
    '2016-10-01,114583,Chrome',
    '2016-11-01,134071,Chrome',
    '2016-12-01,150851,Chrome',
    '2017-01-01,145765,Chrome',
    '2017-02-01,179277,Chrome',
    '2017-03-01,194061,Chrome',
    '2017-04-01,204422,Chrome',
    '2017-05-01,219918,Chrome',
    '2017-06-01,225368,Chrome',
    '2017-07-01,226456,Chrome',
    '2017-08-01,232947,Chrome',
    '2017-09-01,246954,Chrome',
    '2017-10-01,265950,Chrome',
    '2017-11-01,274869,Chrome',
    '2017-12-01,284770,Chrome',
    '2018-01-01,265248,Chrome',
    '2018-02-01,313695,Chrome',
    '2018-03-01,323895,Chrome',
    '2018-04-01,348183,Chrome',
    '2018-05-01,387212,Chrome',
    '2018-06-01,380502,Chrome',
    '2018-07-01,417278,Chrome',
    '2018-08-01,436273,Chrome',
    '2018-09-01,515914,Chrome',
    '2018-03-01,3297,Firefox',
    '2018-04-01,5909,Firefox',
    '2018-05-01,8045,Firefox',
    '2018-06-01,10167,Firefox',
    '2018-07-01,12228,Firefox',
    '2018-08-01,16871,Firefox',
    '2018-09-01,20229,Firefox'
  ];
}
// Backers
Taucharts.api.tickFormat.add('usd', function (x) { return '$' + x; });
(new Taucharts.Chart({
  type: 'bar',
  x: 'Month',
  y: 'Amount (USD)',
  label: 'Amount (USD)',
  data: getBackersData(),
  guide: {
    showGridLines: 'y',
    color: {
      brewer: [
        '#2c89a0',
        '#e96c4c'
      ]
    },
    x: {
      label: {
        text: '2018'
      },
    },
    label: {
      tickFormat: 'usd'
    }
  },
  plugins: [
    Taucharts.api.plugins.get('crosshair')(),
    Taucharts.api.plugins.get('tooltip')(),
    Taucharts.api.plugins.get('annotations')({
      items: [{
        dim: 'Amount (USD)',
        val: 1000,
        text: 'Expected monthly budget',
        color: '#e96c4c',
        position: 'front'
      }]
    })
  ],
  settings: {
    fitModel: 'entire-view',
  }
})).renderTo('#chart-backers');
function getBackersData() {
  return [{
      'Month': 'March',
      'Backers': 4,
      'Amount (USD)': 29
    },
    {
      'Month': 'April',
      'Backers': 135,
      'Amount (USD)': 1523
    },
    {
      'Month': 'May',
      'Backers': 67,
      'Amount (USD)': 521
    },
    {
      'Month': 'June',
      'Backers': 48,
      'Amount (USD)': 222
    },
    {
      'Month': 'July',
      'Backers': 45,
      'Amount (USD)': 227
    },
    {
      'Month': 'August',
      'Backers': 44,
      'Amount (USD)': 190
    }
  ];
}
});
</script>

<style>
.chart {
  overflow: hidden;
}
.tau-chart__tooltip {
  color: #fff;
}
.tau-chart__tooltip__button {
  background: #1c2128;
  color: #fff;
}
.tau-chart__tooltip__button:hover {
  background: #4c5158;
}
.diff-tooltip__item_highlighted {
  background: transparent;
  box-shadow: none !important;
}
.tau-crosshair__label__text,
.i-role-datum~.i-role-label {
  fill: white !important;
}
</style>
