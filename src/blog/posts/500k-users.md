# We have 500,000 users! Interactive lifetime charts

By September 13 we have
**532,664** [Google Chrome](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh) users
and **24,151** [Mozilla Firefox](https://addons.mozilla.org/firefox/addon/darkreader/) users
*(and also 2,040 [Dark Retired](https://chrome.google.com/webstore/detail/dark-retired/oibheihomapbjogmoabgfbkchjchpdfp) users)*.

<div id="chart-users" class="chart" style="background: #1c2128; width: 40rem; height: 20rem;"></div>

<h6 style="text-align: right; margin-top: 0;">This chart is powered by [Vizydrop](https://trello.vizydrop.com/)</h6>

The number of installs is rapidly increasing since Dark Reader 4 was released.

<div id="chart-installs-vs-uninstalls" class="chart" style="background: #1c2128; width: 40rem; height: 20rem;"></div>

<h6 style="text-align: right; margin-top: 0;">This chart is powered by [Vizydrop](https://trello.vizydrop.com/)</h6>

### Budget

In April we launched a [crowdfunding campaign](https://darkreader.org/blog/dynamic-theme/). Today our monthly budget is about **$200**, 1/5th of a planned minimal budget.

<div id="chart-backers" class="chart" style="background: #1c2128; width: 40rem; height: 20rem;"></div>

<h6 style="text-align: right; margin-top: 0;">This chart is powered by [Vizydrop](https://trello.vizydrop.com/)</h6>

The largest donations of $100 were made by [Dawn Schrader](https://opencollective.com/badw0lf1) and [anonymous](https://opencollective.com/anonymous420).

<div id="chart-donations" class="chart" style="background: #1c2128; width: 40rem; height: 20rem;"></div>

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
  label: 'Browser',
  data: getUsersData(),
  guide: {
    x: {
      tickFormat: 'm-y',
      timeInterval: 'month'
    },
    showGridLines: 'y',
    color: {
      brewer: [
        '#2f7485',
        '#e96c4c'
      ]
    }
  },
  settings: {
    utcTime: true,
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
        color: '#53a1b3'
      }, {
        dim: 'Date',
        val: new Date('2014-07-07'),
        text: '2014',
        color: '#e96c4c'
      }]
    }),
    {
      onRender: function (chart) {
        // Fix labels colors
        Array.prototype.slice.call(chart.getSVG().querySelectorAll('text.i-role-label'))
          .forEach(function (el) {
            if (el.textContent === 'Chrome') {
              el.setAttribute('data-label', 'Chrome');
            }
            if (el.textContent === 'Firefox') {
              el.setAttribute('data-label', 'Firefox');
            }
          });
      }
    }
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
// Installs vs. Uninstalls
(new Taucharts.Chart({
  type: 'line',
  x: 'Date',
  y: 'Count',
  color: 'Action',
  label: 'Action',
  data: getInstallsVsUninstallsData(),
  guide: {
    x: {
      tickFormat: 'm-y',
      timeInterval: 'month'
    },
    showGridLines: 'y',
    color: {
      brewer: [
        '#2f7485',
        '#e96c4c'
      ]
    }
  },
  settings: {
    utcTime: true,
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
      }]
    }),
    {
      onRender: function (chart) {
        // Fix labels colors
        Array.prototype.slice.call(chart.getSVG().querySelectorAll('text.i-role-label'))
          .forEach(function (el) {
            if (el.textContent === 'Installs') {
              el.setAttribute('data-label', 'Installs');
            }
            if (el.textContent === 'Uninstalls') {
              el.setAttribute('data-label', 'Uninstalls');
            }
          });
      }
    }
  ],
})).renderTo('#chart-installs-vs-uninstalls');
function getInstallsVsUninstallsData() {
  return []
    .concat(getInstalls().map((function (ln) {
      return {
        'Action': 'Installs',
        'Date': new Date(ln.split(',')[0] + '-01'),
        'Count': parseInt(ln.split(',')[1])
      };
    })))
    .concat(getUninstalls().map((function (ln) {
      return {
        'Action': 'Uninstalls',
        'Date': new Date(ln.split(',')[0] + '-01'),
        'Count': parseInt(ln.split(',')[1])
      };
    })));
}
function getInstalls() {
  return [
    '2014-07,118',
    '2014-08,208',
    '2014-09,291',
    '2014-10,346',
    '2014-11,425',
    '2014-12,500',
    '2015-01,712',
    '2015-02,987',
    '2015-03,1213',
    '2015-04,1696',
    '2015-05,1639',
    '2015-06,1284',
    '2015-07,2508',
    '2015-08,3525',
    '2015-09,3939',
    '2015-10,4385',
    '2015-11,5178',
    '2015-12,6172',
    '2016-01,20556',
    '2016-02,9773',
    '2016-03,12329',
    '2016-04,12529',
    '2016-05,11987',
    '2016-06,25674',
    '2016-07,22703',
    '2016-08,23391',
    '2016-09,26062',
    '2016-10,32084',
    '2016-11,34175',
    '2016-12,28632',
    '2017-01,39147',
    '2017-02,29948',
    '2017-03,32982',
    '2017-04,34976',
    '2017-05,33955',
    '2017-06,27727',
    '2017-07,26441',
    '2017-08,30062',
    '2017-09,32195',
    '2017-10,33636',
    '2017-11,32868',
    '2017-12,31033',
    '2018-01,38206',
    '2018-02,41862',
    '2018-03,48119',
    '2018-04,48408',
    '2018-05,54099',
    '2018-06,71787',
    '2018-07,73223',
    '2018-08,111905'
  ];
}
function getUninstalls() {
  return [
    '2016-03,13',
    '2016-04,98',
    '2016-05,382',
    '2016-06,6377',
    '2016-07,8509',
    '2016-08,10703',
    '2016-09,11645',
    '2016-10,12907',
    '2016-11,15125',
    '2016-12,13940',
    '2017-01,17290',
    '2017-02,14409',
    '2017-03,15567',
    '2017-04,16175',
    '2017-05,17085',
    '2017-06,14350',
    '2017-07,13211',
    '2017-08,15291',
    '2017-09,11465',
    '2017-10,3639',
    '2017-11,11076',
    '2017-12,15401',
    '2018-01,19269',
    '2018-02,20441',
    '2018-03,24075',
    '2018-04,26878',
    '2018-05,30213',
    '2018-06,28178',
    '2018-07,30724',
    '2018-08,49823'
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
        '#2f7485',
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
// Donations
var data = getData();
var container = d3.select('#chart-donations');
var rect = container.node().getBoundingClientRect();
var width = rect.width;
var height = rect.height;
var color = d3.scaleLinear()
  .range(['#2f7485', '#e96c4c'])
  .domain(d3.extent(data));
var treemap = d3.treemap()
  .size([width, height])
  .paddingInner(2);
var root = d3.hierarchy({children: data.map(function (d) { return {value: d}; })}).sum(function (d) { return d.value; });
var nodes = root.descendants();
treemap(root);
var cells = container
  .selectAll('.cell')
  .data(nodes.filter(function (n) { return n.depth > 0; }))
  .enter()
  .append('div')
  .attr('class', 'cell')
  .classed('cell_small', function (n) { return n.value < 20; })
  .classed('cell_very-small', function (n) { return n.value < 5; })
  .style('left', function (n) { return n.x0 + 'px'; })
  .style('top', function (n) { return n.y0 + 'px'; })
  .style('width', function (n) { return (n.x1 - n.x0) + 'px'; })
  .style('height', function (n) { return (n.y1 - n.y0) + 'px'; });
cells
  .append('div')
  .attr('class', 'cell__bg')
  .style('background', function (n) { return color(n.value); });
cells
  .append('span')
  .attr('class', 'cell__text')
  .text(function (n) { return n.value; });
function getData(){
  return [100, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 40, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 18, 16, 15, 15, 15, 15, 15, 15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 8, 7, 7, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2];
}
});
</script>

<style>
.chart {
  overflow: hidden;
}
.tau-chart__tooltip {
  box-shadow: none;
  color: #fff;
}
.tau-chart__tooltip__buttons {
  box-shadow: none;
}
.tau-chart__tooltip__button {
  background: black;
  color: #fff;
}
.tau-chart__tooltip__button:hover {
  background: #1c2128;
}
.diff-tooltip__item_highlighted {
  background: transparent;
  box-shadow: none !important;
}
.tau-crosshair__label__text,
.i-role-datum~.i-role-label {
  fill: white !important;
}
#chart-donations {
  cursor: pointer;
  overflow: visible;
  position: relative;
}
#chart-donations .cell {
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
}
#chart-donations .cell__bg {
  height: 100%;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
#chart-donations .cell__text {
  color: white;
  display: inline-block;
  font-size: 11px;
  height: 100%;
  padding: 4px;
  position: absolute;
  width: 100%;
}
#chart-donations .cell__text::before {
  content: "$";
}
#chart-donations .cell:hover {
  overflow: visible;
  z-index: 999;
}
#chart-donations .cell:hover .cell__bg {
  opacity: 1;
}
#chart-donations .cell.cell_small .cell__text {
  font-size: 9px;
  padding: 1px;
}
#chart-donations .cell.cell_very-small .cell__text::before {
  content: "";
}
text[data-label="Chrome"],
text[data-label="Installs"] {
  fill: #2f7485 !important;
}
text[data-label="Firefox"],
text[data-label="Uninstalls"] {
  fill: #e96c4c !important;
}
</style>
