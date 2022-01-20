# We have 2,000,000 active users! App stats and plans

By November 1, 2019 we have
**2,012,402** [Google Chrome](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh) users
and **273,654** [Mozilla Firefox](https://addons.mozilla.org/firefox/addon/darkreader/) users
*(and also 5,653 [Dark Retired](https://chrome.google.com/webstore/detail/dark-retired/oibheihomapbjogmoabgfbkchjchpdfp) users)*.

<div id="chart-users" class="chart" style="background: #1c2128; width: 40rem; height: 20rem;"></div>

<h6 style="text-align: right; margin-top: 0;">This chart is powered by [Vizydrop](https://vizydrop.com/)</h6>

The number of installs is still increasing.

<div id="chart-installs-vs-uninstalls" class="chart" style="background: #1c2128; width: 40rem; height: 20rem;"></div>

<h6 style="text-align: right; margin-top: 0;">This chart is powered by [Vizydrop](https://vizydrop.com/)</h6>

### Budget

Back in April 2018 we launched a [crowdfunding campaign](https://darkreader.org/blog/dynamic-theme/). Today our monthly budget is about **$500**, a half of our planned minimal budget.

<div id="chart-backers" class="chart" style="background: #1c2128; width: 40rem; height: 20rem;"></div>

<h6 style="text-align: right; margin-top: 0;">This chart is powered by [Vizydrop](https://vizydrop.com/)</h6>

The largest donations of $210 and $200 were made by [Triplebyte](https://triplebyte.com/) and Anonymous. Thank you very much!

<div id="chart-donations" class="chart" style="background: #1c2128; width: 40rem; height: 20rem;"></div>

Total [number of backers](https://opencollective.com/darkreader#section-contributors) is **737**.
Also we have **320** [GitHub contributors](https://github.com/darkreader/darkreader/graphs/contributors).
The app was [translated](https://github.com/darkreader/darkreader/issues/559) into 20 languages.
Thank you for your help, you are doing a great thing.

You can also support the project with **PayPal** or other method via [Open Collective](https://opencollective.com/darkreader/donate),
a crowdfunding platform.

### Dark Reader 5 is on it's way

<img src="/images/darkreader-5-logo-sketch.png" alt="Dark Reader 5 sketch" style="width: 15rem;" />

Since many features were requested, an app redesign is needed.
Dark Reader 5 will have a simplified design and at the same time will provide some new features
like text and background **color adjustment**, **theme presets**, **improved list** of ignored websites
and many other improvements. Stay tuned!

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
        val: new Date('2019-01-01'),
        text: '2019',
        color: 'white',
        position: 'front',
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
    '2018-10-01,568157,Chrome',
    '2018-11-01,642857,Chrome',
    '2018-12-01,700735,Chrome',
    '2019-01-01,701934,Chrome',
    '2019-02-01,898377,Chrome',
    '2019-03-01,994821,Chrome',
    '2019-04-01,1208022,Chrome',
    '2019-05-01,1243478,Chrome',
    '2019-06-01,1293258,Chrome',
    '2019-07-01,1319199,Chrome',
    '2019-08-01,1402612,Chrome',
    '2019-09-01,1612522,Chrome',
    '2019-10-01,1779641,Chrome',
    '2019-11-01,2012402,Chrome',
    '2018-10-01,28282,Firefox',
    '2018-11-01,37969,Firefox',
    '2018-12-01,39707,Firefox',
    '2019-01-01,45533,Firefox',
    '2019-02-01,104072,Firefox',
    '2019-03-01,138031,Firefox',
    '2019-04-01,147568,Firefox',
    '2019-05-01,135722,Firefox',
    '2019-06-01,124741,Firefox',
    '2019-07-01,160329,Firefox',
    '2019-08-01,167866,Firefox',
    '2019-09-01,165597,Firefox',
    '2019-10-01,244829,Firefox',
    '2019-11-01,301312,Firefox'
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
        val: new Date('2019-01-01'),
        text: '2019',
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
    '2018-10,128069',
    '2018-11,127847',
    '2018-12,133655',
    '2019-01,214490',
    '2019-02,179496',
    '2019-03,272868',
    '2019-04,261331',
    '2019-05,258357',
    '2019-06,217906',
    '2019-07,241826',
    '2019-08,373711',
    '2019-09,439366',
    '2019-10,481173'
  ];
}
function getUninstalls() {
  return [
    '2018-10,50856',
    '2018-11,54433',
    '2018-12,55153',
    '2019-01,76384',
    '2019-02,76730',
    '2019-03,105653',
    '2019-04,111755',
    '2019-05,109922',
    '2019-06,90747',
    '2019-07,97108',
    '2019-08,151283',
    '2019-09,180895',
    '2019-10,201786'
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
        text: '2019'
      }
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
  return [
    // {
    //     "Month": "2018-10-01",
    //     "Amount (USD)": 471,
    //     "Backers": 99
    // },
    // {
    //     "Month": "2018-11-01",
    //     "Amount (USD)": 589,
    //     "Backers": 518
    // },
    // {
    //     "Month": "2018-12-01",
    //     "Amount (USD)": 586,
    //     "Backers": 96
    // },
    {
        "Month": "Jan",
        "Amount (USD)": 612,
        "Backers": 109
    },
    {
        "Month": "Feb",
        "Amount (USD)": 422,
        "Backers": 93
    },
    {
        "Month": "Mar",
        "Amount (USD)": 493,
        "Backers": 95
    },
    {
        "Month": "Apr",
        "Amount (USD)": 363,
        "Backers": 86
    },
    {
        "Month": "May",
        "Amount (USD)": 380,
        "Backers": 88
    },
    {
        "Month": "Jun",
        "Amount (USD)": 422,
        "Backers": 86
    },
    {
        "Month": "Jul",
        "Amount (USD)": 327,
        "Backers": 88
    },
    {
        "Month": "Aug",
        "Amount (USD)": 460,
        "Backers": 90
    },
    {
        "Month": "Sep",
        "Amount (USD)": 715,
        "Backers": 110
    },
    {
        "Month": "Oct",
        "Amount (USD)": 424,
        "Backers": 111
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
  .classed('cell_very-small', function (n) { return n.value < 10; })
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
  .text(function (n) { return n.value > 20 ? '$' + n.value : n.value; });
function getData(){
  return [200, 143, 130, 101, 100, 100, 100, 75, 75, 65, 65, 65, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 47, 40, 40, 40, 40, 40, 40, 39, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 24.97, 24, 22, 22, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 14, 12, 12, 12, 12, 12, 11, 11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 8, 8, 8, 8, 8, 8, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1.48, 1, 1, 1, 1, 1, 1, 1, 1];
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
