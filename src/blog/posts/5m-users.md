# We have 5,000,000 users! Approaching v5 release

<img src="/images/darkreader-5m-users.png" alt="Dark Reader has 5,000,000 active users" style="width: 16rem; box-shadow: none;" />

By October 29, 2021 we have
**4,000,000** [Google Chrome](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh) users,
**700,000** [Mozilla Firefox](https://addons.mozilla.org/firefox/addon/darkreader/) users
and **500,000** [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/ifoakfbpdcdoeenechcleahebpibofpc) users.

<div id="chart-users" class="chart" style="background: #1c2128; width: 40rem; height: 16rem; max-width: calc(100vw - 2rem);"></div>
<h5 style="text-align: right; margin-top: 0;">This chart is powered by Taucharts, a part of <a href="https://fibery.io/" target="_blank" rel="noopener">Fibery</a> and <a href="https://targetprocess.com/" target="_blank" rel="noopener">Targetprocess</a></h5>

### The ongoing development

<img src="/images/v5-colors-preview.png" alt="Dark Reader v5 color picker preview" style="width: 14rem;" />

We are getting closer to **v5 release** that will bring a newer design and new features.
Unfortunately we had a slow down of our progress.
Due to events in Belarus the project founder had to travel and deal with bureaucracy a lot.
**Luckily our new team members came for rescue!**

### Contributor of the year: [William Zijl @Gusted](https://github.com/Gusted) 🏆

William has done an **ENORMOUS** amount of bug fixes and performance improvements.
He reviewed hundreds of changes made by other users,
proposed many optimizations to the Dynamic mode.
Thanks to William, Dark Reader keeps working fast and reliable.

### Contributor of the month: [Anton Bershanskiy](https://github.com/bershanskiy) 🏆

Chrome will soon switch to [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/),
changing and limiting the ways extensions can work.
Thanks to Anton for his optimizations, Dark Reader will keep working after the newer API release and do it even faster.

*The described improvements and bug fixes are already working for you,
as we try making the upgrade seamless.
To activate the newer design, click Dev Tools (in bottom-right corner),
Preview new design.*

<div id="chart-backers" class="chart" style="background: #1c2128; width: 40rem; height: 16rem; max-width: calc(100vw - 2rem);"></div>
<h5 style="text-align: right; margin-top: 0;">This chart is powered by Taucharts, a part of <a href="https://fibery.io/" target="_blank" rel="noopener">Fibery</a> and <a href="https://targetprocess.com/" target="_blank" rel="noopener">Targetprocess</a></h5>

**Please support their work, it is so hard and crucial for Dark Reader and all of us.
There are [hundreds of bugs](https://github.com/darkreader/darkreader/issues)
that need to be resolved,
and many features that need to be implemented,
but less than 3,000 of 5,000,000 users supported us through Open Collective since 2018.
Just click the [DONATE](https://opencollective.com/darkreader) button.**
🙏

### iOS release 📱🍎

<img src="/images/ios-photo.jpg" alt="Dark Reader for iOS photo" style="width: 24rem;" />

Dark Reader has become available for
[iOS and iPadOS](https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180#?platform=iphone).
It brings some new colorful themes.
A more detailed article will follow soon.

### October's top backers 🍁

<div id="chart-donations" class="chart" style="background: #1c2128; width: 40rem; height: 20rem; max-width: calc(100vw - 2rem);"></div>

### Thanks!

**Check out our sponsors**
and <span class="text-highlight">trick or treat!</span>
🎃

<!--
Copyright 2017 Targetprocess, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Copyright 2010-2017 Mike Bostock
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the author nor the names of contributors may be used to
  endorse or promote products derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
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
        '#e96c4c',
        '#d9d5ca'
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
        val: new Date('2020-01-01'),
        text: '2020',
        color: 'white',
        position: 'front',
      }, {
        dim: 'Date',
        val: new Date('2021-01-01'),
        text: '2021',
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
            if (el.textContent === 'Edge') {
              el.setAttribute('data-label', 'Edge');
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
    '2019-11-01,1999415,Chrome',
    '2019-12-01,2097927,Chrome',
    '2020-01-01,1858875,Chrome',
    '2020-02-01,2232143,Chrome',
    '2020-03-01,2409765,Chrome',
    '2020-04-01,2395111,Chrome',
    '2020-05-01,2473292,Chrome',
    '2020-06-01,2568920,Chrome',
    '2020-07-01,2598471,Chrome',
    '2020-08-01,2605054,Chrome',
    '2020-09-01,2785324,Chrome',
    '2020-10-01,2948480,Chrome',
    '2020-11-01,3108242,Chrome',
    '2020-12-01,3217237,Chrome',
    '2021-01-01,2996698,Chrome',
    '2021-02-01,3417808,Chrome',
    '2021-03-01,3540070,Chrome',
    '2021-04-01,3580602,Chrome',
    '2021-05-01,3679765,Chrome',
    '2021-06-01,3714503,Chrome',
    '2021-07-01,3634423,Chrome',
    '2021-08-01,3561296,Chrome',
    '2021-09-01,3795393,Chrome',
    '2021-10-01,3980087,Chrome',
    '2021-11-01,4057436,Chrome',
    '2019-11-01,300000,Firefox',
    '2019-12-01,310000,Firefox',
    '2020-01-01,320000,Firefox',
    '2020-02-01,340000,Firefox',
    '2020-03-01,350000,Firefox',
    '2020-04-01,360000,Firefox',
    '2020-05-01,370000,Firefox',
    '2020-06-01,380000,Firefox',
    '2020-07-01,390000,Firefox',
    '2020-08-01,400000,Firefox',
    '2020-09-01,420000,Firefox',
    '2020-10-01,430000,Firefox',
    '2020-11-01,441002,Firefox',
    '2020-12-01,537224,Firefox',
    '2021-01-01,470224,Firefox',
    '2021-02-01,611548,Firefox',
    '2021-03-01,638808,Firefox',
    '2021-04-01,641889,Firefox',
    '2021-05-01,557601,Firefox',
    '2021-06-01,638123,Firefox',
    '2021-07-01,645884,Firefox',
    '2021-08-01,606885,Firefox',
    '2021-09-01,701093,Firefox',
    '2021-10-01,689998,Firefox',
    '2021-11-01,739935,Firefox',
    '2020-04-01,0,Edge',
    '2020-05-01,25000,Edge',
    '2020-06-01,50000,Edge',
    '2020-07-01,75000,Edge',
    '2020-08-01,100000,Edge',
    '2020-09-01,130000,Edge',
    '2020-10-01,160000,Edge',
    '2020-11-01,200000,Edge',
    '2020-12-01,230000,Edge',
    '2021-01-01,260000,Edge',
    '2021-02-01,300000,Edge',
    '2021-03-01,330000,Edge',
    '2021-04-01,360000,Edge',
    '2021-05-01,399584,Edge',
    '2021-06-01,460745,Edge',
    '2021-07-01,471301,Edge',
    '2021-08-01,464158,Edge',
    '2021-09-01,478072,Edge',
    '2021-10-01,499714,Edge',
    '2021-11-01,541931,Edge',
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
        text: '2021'
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
        val: 3000,
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
    {
        "Month": "Jan",
        "Amount (USD)": 1365,
    },
    {
        "Month": "Feb",
        "Amount (USD)": 1403,
    },
    {
        "Month": "Mar",
        "Amount (USD)": 1410,
    },
    {
        "Month": "Apr",
        "Amount (USD)": 2025,
    },
    {
        "Month": "May",
        "Amount (USD)": 1531,
    },
    {
        "Month": "Jun",
        "Amount (USD)": 1313,
    },
    {
        "Month": "Jul",
        "Amount (USD)": 1574,
    },
    {
        "Month": "Aug",
        "Amount (USD)": 1770,
    },
    {
        "Month": "Sep",
        "Amount (USD)": 1248,
    },
    {
        "Month": "Oct",
        "Amount (USD)": 1436,
    }
  ];
}
// Donations
var data = getData().map(d => { return {value: d[0], name: d[1], ref: d[2], pic: d[3]}; });
var container = d3.select('#chart-donations');
var rect = container.node().getBoundingClientRect();
var width = rect.width;
var height = rect.height;
var color = d3.scaleLinear()
  // .range(['#2f7485', '#e96c4c'])
  .range(['#2f7485', '#6ea13b'])
  .domain(d3.extent(data.map(d => d.value)));
var treemap = d3.treemap()
  .size([width, height])
  .tile(d3.treemapSquarify.ratio(1))
  .paddingInner(2);
var root = d3.hierarchy({children: data.map(function (d) { return d; })}).sum(function (d) { return d.value; })
var nodes = root.descendants();
treemap(root);
var hasPic = n => n.value >= 10 && n.data.pic;
var cells = container
  .selectAll('.cell')
  .data(nodes.filter(function (n) { return n.depth > 0; }))
  .enter()
  .append('a')
  .attr('class', 'cell')
  .attr('href', n => n.data.ref)
  .attr('title', n => n.data.name)
  .attr('target', '_blank')
  .attr('rel', 'noreferrer noopener')
  .classed('cell_small', function (n) { return n.value < 20; })
  .classed('cell_very-small', function (n) { return n.value < 5; })
  .classed('cell_has-pic', function (n) { return hasPic(n); })
  .style('left', function (n) { return n.x0 + 'px'; })
  .style('top', function (n) { return n.y0 + 'px'; })
  .style('width', function (n) { return (n.x1 - n.x0) + 'px'; })
  .style('height', function (n) { return (n.y1 - n.y0) + 'px'; });
cells
  .append('span')
  .attr('class', 'cell__bg')
  .style('background-color', function (n, i) { return hasPic(n) ? null : color(n.value); })
  .style('background-image', function (n) { return hasPic(n) ? ('url(' + n.data.pic + ')') : null; });
cells
  .append('span')
  .attr('class', 'cell__text')
  .append('span')
  .attr('class', 'cell__text__wrap')
  .text(function (n) { return '$' + n.value + (n.value >= 20 ? (': ' + n.data.name || 'Anon') : ''); });
function getData(){
  return [[125,"Team Zero","https://opencollective.com/guest-c7364549",null],[100,"Sentry","https://sentry.io/welcome/","https://opencollective-production.s3.us-west-1.amazonaws.com/ee219ec0-1c68-11ec-92ca-8735bb24a73f.png"],[100,"Craig Nagy","https://twitter.com/nagy_craig","https://opencollective-production.s3.us-west-1.amazonaws.com/e8dca900-13d1-11eb-890d-8b6ca941bae3.png"],[100,"Icons8: free icons, photos, illustrations, and music","https://icons8.com","https://opencollective-production.s3.us-west-1.amazonaws.com/c7fe4d70-f085-11ea-9321-73950861b08b.png"],[100,"VPNwelt","https://vpnwelt.com/","https://logo.clearbit.com/vpnwelt.com"],[100,"Toucan","https://jointoucan.com/","https://logo.clearbit.com/jointoucan.com"],[30,"Matthew Bishop","https://twitter.com/bish_mat",null],[25,"Philip Soltero","https://opencollective.com/guest-a3b3f006",null],[25,"Dennis Castelano","https://opencollective.com/guest-90ecafc1",null],[25,"Doug Hiland","https://opencollective.com/guest-0d559fdf",null],[25,"Desert Catmom","https://opencollective.com/guest-ff5f2a72",null],[25,"Guest","https://opencollective.com/guest-0038dbcd",null],[25,"Douglas Tyger","https://opencollective.com/guest-05e589c7",null],[25,"Eric Work","https://opencollective.com/guest-ad7e36d5",null],[25,"Sergei Shir","https://opencollective.com/guest-0c02778b",null],[21,"Richard Dawes","https://opencollective.com/richard-dawes",null],[20,"Parth Patel","https://opencollective.com/guest-a89a5ea6",null],[20,"Jay McGavren","https://opencollective.com/guest-38b8edb9",null],[20,"Guest","https://opencollective.com/guest-e61b9272",null],[20,"Marius Reus","https://opencollective.com/guest-705ac654",null],[20,"Charity Grippin","https://opencollective.com/guest-520e7611",null],[20,"Antonio EN","https://opencollective.com/guest-431eee23",null],[20,"Anton Dziatkovskii","https://opencollective.com/guest-ef23c691",null],[20,"Wayne Norman","https://opencollective.com/wayne-norman",null],[20,"Pete Neill","https://opencollective.com/pete-neill",null],[10,"Jean-Francois Beaulieu","https://opencollective.com/guest-623a13fc",null],[10,"Guest","https://opencollective.com/guest-355a5327",null],[10,"Guest","https://opencollective.com/guest-33641bdf",null],[10,"Guest","https://opencollective.com/guest-8283ebb0",null],[10,"ediziks","https://opencollective.com/guest-ee76e023",null],[10,"RENE","https://opencollective.com/guest-66525265",null],[10,"Donald Murphy Zeigler","https://opencollective.com/guest-de794d1b",null],[10,"Guest","https://opencollective.com/guest-49cb7b77",null],[10,"Luis Ripoll Morales","https://opencollective.com/guest-3a0c785d",null],[10,"Philipp Reitbauer","https://opencollective.com/guest-507dd6c0",null],[10,"scoots mcgoo","https://www.sorryantivaxxer.com","https://opencollective-production.s3.us-west-1.amazonaws.com/c044ad50-2df0-11ec-ac65-5dab93128729.jpg"],[10,"Alexandre CLEMENT","https://opencollective.com/guest-bf5a0583",null],[10,"Michael Broos","https://opencollective.com/guest-f4f9834a",null],[10,"Tom Readings","https://opencollective.com/tom-readings","https://www.gravatar.com/avatar/3893423fdf624b685528cd6a0f155d23?default=404"],[10,"X","https://opencollective.com/guest-d07cba77",null],[10,"Guest","https://opencollective.com/guest-664137f2",null],[10,"Zalak Bhadani","https://opencollective.com/guest-3c45c5b0",null],[10,"Guest","https://opencollective.com/guest-03570091",null],[10,"Trevor","https://opencollective.com/guest-abe129bb",null],[10,"Jacopo Tediosi","https://opencollective.com/guest-6a00c31f",null],[10,"attfri","https://opencollective.com/guest-01947aaf",null],[10,"Chandrajeet Maurya","https://opencollective.com/guest-16be8b89",null],[10,"Guest","https://opencollective.com/guest-ca55061a",null],[10,"Guest","https://opencollective.com/guest-a1343c1e",null],[10,"84EM","https://www.84em.com/","https://logo.clearbit.com/84em.com"],[10,"Ryan Hilliker","https://opencollective.com/ryan-hilliker",null],[10,"Teddy","https://opencollective.com/guest-b29e44fd",null],[10,"Ten Bitcomb","https://opencollective.com/guest-4d78a095",null],[10,"Jalil Kawas","https://opencollective.com/jalil-kawas",null],[10,"Eric Shields","https://opencollective.com/eric-shields","https://www.gravatar.com/avatar/d355ae45980dee8840b45081ec6bffaa?default=404"],[10,"Incognito","https://opencollective.com/incognito-34b84635",null],[5,"Boris Petkov","https://opencollective.com/guest-51c1a3b3",null],[5,"Jóannes Didriksen","https://opencollective.com/guest-c2206f78",null],[5,"Wagner Bueno Cateb","https://opencollective.com/wagner-bueno-cateb",null],[5,"Guest","https://opencollective.com/guest-ba7a4fa5",null],[5,"Gareth Perks","https://opencollective.com/gareth-perks","https://opencollective-production.s3.us-west-1.amazonaws.com/1fcc6510-1e3d-11ec-baf7-5502758f1030.png"],[5,"Antonin Vojtesek","https://opencollective.com/guest-c885cb7d",null],[5,"Nicole Bock","https://opencollective.com/guest-c6717acf",null],[5,"Guest","https://opencollective.com/guest-28450a0a",null],[5,"Incognito","https://opencollective.com/user-c941335c",null],[5,"Jing LU","https://opencollective.com/jing-lu",null],[5,"Guest","https://opencollective.com/guest-81fbd6cf",null],[5,"Jan Blom","https://opencollective.com/guest-a3dbd820",null],[5,"Abdullah Alfaisal","https://opencollective.com/guest-d95b09d4",null],[5,"Björn Lemke","https://opencollective.com/guest-6f1639a2",null],[5,"Love 💗 is Love","https://twitter.com/vi",null],[5,"Bart Khodabakhshi","https://opencollective.com/guest-ec051173",null],[5,"Real Targeted Traffic","https://www.seo25.com/","https://logo.clearbit.com/seo25.com"],[5,"Dan Ofek","https://opencollective.com/guest-8bdc7c51",null],[5,"WeonHeui Lee","https://opencollective.com/guest-94e08894",null],[5,"L. Wiz","https://opencollective.com/guest-38bb8866",null],[5,"Adam","https://opencollective.com/guest-7f8a23bf",null],[5,"Guest","https://opencollective.com/guest-d5bf3c41",null],[5,"Guest","https://opencollective.com/guest-77b19a2e",null],[5,"Idris Setiawan","https://opencollective.com/guest-d5c67b32",null],[5,"Leo Tietz","https://opencollective.com/guest-5a7499f8",null],[5,"David Pierce","https://opencollective.com/david-pierce1",null],[5,"Reilef Factor Reviews","https://academicsearch.org/wp-content/uploads/formidable/30/Relief-Factor-Reviews.pdf","https://logo.clearbit.com/academicsearch.org"],[5,"Guest","https://opencollective.com/guest-fb0f8659",null],[5,"Paul Berkey","https://opencollective.com/guest-a4cd30ff",null],[5,"Francois Gervais","https://opencollective.com/francois-gervais",null],[5,"Ilya Vassyutovich","https://opencollective.com/ilya-vassyutovich","https://www.gravatar.com/avatar/fddbf79ee41d78e7b186ae935ab3890e?default=404"],[5,"Aria Taylor","https://opencollective.com/guest-1d5b4d55",null],[5,"edie","https://opencollective.com/guest-3fd7a892",null],[5,"Mobilemall Bangladesh","https://mobilemall.com.bd","https://opencollective-production.s3.us-west-1.amazonaws.com/cd547170-2372-11ec-b1c1-e17b791f033d.png"],[5,"Laur McMena.mini","https://opencollective.com/guest-c4a3966e",null],[5,"Felix Hungenberg","https://twitter.com/shiftgeist","https://www.gravatar.com/avatar/1f3530d616391717a539fa9184c549d3?default=404"],[5,"Tomas Sandven","https://opencollective.com/tomas-sandven","https://www.gravatar.com/avatar/ef34975f11921fbeee2baed11b32f889?default=404"],[5,"Guest","https://opencollective.com/guest-655809d5",null],[5,"Jeremiah L","https://opencollective.com/guest-ede70b0a",null],[5,"Panos Tsapralis","https://opencollective.com/panos-tsapralis",null],[5,"WebCatalog Labs","https://webcatalog.io","https://opencollective-production.s3.us-west-1.amazonaws.com/8dfc6600-b882-11eb-b3a4-b97529e4b911.png"],[5,"Guest","https://opencollective.com/guest-bab487e2",null],[5,"tankfox","https://opencollective.com/tankfox",null],[5,"M K Gharzai","https://opencollective.com/m-k-gharzai","https://www.gravatar.com/avatar/dea9dc0cdd944b4ed37ca53cc81f9704?default=404"],[5,"Toshino Motohashi","https://opencollective.com/toshino-motohashi",null],[5,"Michael Richters","https://opencollective.com/michael-richters","https://www.gravatar.com/avatar/b209adee06e4363cf27921d17c14ab24?default=404"],[5,"Chris Downs","https://opencollective.com/chris-downs1","https://www.gravatar.com/avatar/35bfb0fea162c036c0d28a9be934c163?default=404"],[5,"F S Fisher","https://opencollective.com/guest-6f29d9f2",null],[5,"Adam","https://opencollective.com/adam22",null],[5,"Guest","https://opencollective.com/guest-550f7f89",null],[5,"RedBaron","https://opencollective.com/guest-014a451c",null],[5,"Thomas Svensen","https://opencollective.com/thomas-svensen","https://www.gravatar.com/avatar/97eeca805b28c23c92cc0be65677dd87?default=404"],[5,"John Draper","https://opencollective.com/john-draper","https://www.gravatar.com/avatar/a9a097a4e0498a73eee42de6e17612fa?default=404"],[5,"Mapoman","https://opencollective.com/mapoman",null],[5,"Aidan Gauland","https://www.aidalgolland.net","https://opencollective-production.s3-us-west-1.amazonaws.com/3cde0410-921d-11e8-96e9-59d58b04b9ce.jpg"],[5,"Shailpik Biswas","https://opencollective.com/guest-f9d1af88",null],[5,"Chaz Sewell","https://opencollective.com/chaz-sewell","https://www.gravatar.com/avatar/f12210e9f7ad9ab7044ce87c2ad6db1f?default=404"],[5,"Benjamin Coppel","https://opencollective.com/benjamin-coppel",null],[5,"incognito","https://opencollective.com/incognito-c6128ff8",null],[5,"Saleh Abdel Motaal","https://opencollective.com/guest-459495be",null],[5,"incognito","https://opencollective.com/incognito-abeb6570",null],[5,"Scott Snyder","https://opencollective.com/scott-snyder",null],[5,"Peter Sham","https://opencollective.com/peter-sham","https://www.gravatar.com/avatar/e0616a9c5007b770b32e7e3b1cf52a6f?default=404"],[5,"Incognito","https://opencollective.com/incognito-9e6b7cea",null],[5,"Catherine Berry","https://opencollective.com/catherine-berry",null],[5,"Richard Dean","https://twitter.com/_richdean","https://www.gravatar.com/avatar/ffc42632c13a4725da2f154d887bc9f6?default=404"],[5,"Mabin","https://mabin.info","https://www.gravatar.com/avatar/97825f4c8d121ff67905d328c45d0cdf?default=404"],[5,"HowToHostingGuide","https://howtohosting.guide","https://logo.clearbit.com/howtohosting.guide"],[5,"Dmitrii","https://opencollective.com/dmitrii7","https://opencollective-production.s3.us-west-1.amazonaws.com/1ec06510-6fae-11eb-869b-5f9cc7c85920.jpg"],[5,"Andreas Fink","https://opencollective.com/andreas-fink","https://opencollective-production.s3.us-west-1.amazonaws.com/9f766d60-517a-11ea-bf38-3d0741eb3d4f.jpeg"],[5,"incognito","https://opencollective.com/incognito-b61f41b0",null],[5,"incognito","https://opencollective.com/incognito-7eda4435",null],[5,"Mark Lam","https://opencollective.com/mark-lam1","https://www.gravatar.com/avatar/138e44f2127bb19c255e76bedaf3fb30?default=404"],[5,"Ryan Coonan","https://opencollective.com/ryan-coonan",null],[5,"Andrew Chernyshov","https://opencollective.com/andrew-chernyshov",null],[5,"Andrew Keeton","https://opencollective.com/andrew-keeton","https://www.gravatar.com/avatar/b2199cac7c940b3b0d3bfede5ec41939?default=404"],[5,"Ramon Clematide","https://opencollective.com/ramon-clematide",null],[4,"Karlheinz Illmer","https://opencollective.com/guest-10d6263a",null],[4,"Tomáš Hudziec","https://opencollective.com/tomas-hudziec",null],[3,"Guest","https://opencollective.com/guest-341791cf",null],[3,"mia kowalczyk","https://opencollective.com/guest-57619aa2",null],[3,"Targeted Social Traffic","https://www.targetedwebtraffic.com/buy/buy-social-media-traffic-and-increase-social-traffic-to-your-site/","https://logo.clearbit.com/targetedwebtraffic.com"],[3,"Ryan Newton","https://opencollective.com/ryan-newton","https://www.gravatar.com/avatar/638acc3e55c2bb09aa0dcca5b5c8acb6?default=404"],[3,"anonymous","https://opencollective.com/anonymous419",null],[2.88,"incognito","https://opencollective.com/incognito-77791756",null],[2.5,"Holly Pence","https://opencollective.com/holly-pence",null],[2.37,"Darruk","https://opencollective.com/darruk",null],[2,"Andaguvi","https://opencollective.com/andres-david-guarin-villada","https://opencollective-production.s3.us-west-1.amazonaws.com/dad44bf0-033c-11ec-b083-59be8361b831.png"],[2,"Donald Bland","https://opencollective.com/donald-bland",null],[2,"dannyzilberg","https://opencollective.com/guest-f98522f2",null],[2,"Lars","https://github.com/larssieboy18",null],[2,"Micah","https://opencollective.com/guest-cb8e52da",null],[2,"Guest","https://opencollective.com/guest-d969b063",null],[2,"Chris Coetzee","https://opencollective.com/chris-coetzee",null],[2,"Incognito","https://opencollective.com/incognito-cc271ac4",null],[2,"Adriana L Capobianco","https://opencollective.com/guest-14aced2c",null],[2,"James Busby","https://opencollective.com/guest-4b80bea6",null],[2,"Matthew Frost","https://www.matthewfrost.com/","https://opencollective-production.s3-us-west-1.amazonaws.com/a4bba640-08ee-11e8-bf53-a1279e15c167.png"],[2,"Philipp Schmucker","https://opencollective.com/guest-eb9ad446",null],[2,"Welp Whatever","https://opencollective.com/guest-774c05eb",null],[2,"Rudy","https://opencollective.com/rudy",null],[2,"Arturas","https://opencollective.com/guest-8a6304a1",null],[2,"Rick","https://opencollective.com/guest-704219ac",null],[2,"Hugh Enxing","https://opencollective.com/guest-ad6f6f5c",null],[2,"Denise Green","https://opencollective.com/denise-green",null],[2,"Guest","https://opencollective.com/guest-fe9a3366",null],[2,"Ross Mohan","https://opencollective.com/guest-911570d5",null],[2,"Carey Willis","https://opencollective.com/guest-89f153d1",null],[2,"Matt Welke","https://mattwelke.com",null],[2,"Struzzzle","https://opencollective.com/struzzzle","https://opencollective-production.s3.us-west-1.amazonaws.com/65adf060-e947-11eb-8859-93f88d15cd99.JPG"],[2,"Joe Hootman","https://twitter.com/hoottech","https://www.gravatar.com/avatar/dfd61d3076fd4743dca36d193adab948?default=404"],[2,"Jefferson Nogueira de Oliveira","https://opencollective.com/jefferson-nogueira-de-oliveira",null],[2,"anonymous","https://opencollective.com/anonymous552",null],[2,"Pavlos Vinieratos","https://pvin.is","https://www.gravatar.com/avatar/5df2b834642c29e1c3be64e6508774f9?default=404"],[2,"Ken Ivey","https://opencollective.com/guest-c60b0b16",null],[2,"Richie Heijmans","https://github.com/richieheijmans","https://opencollective-production.s3.us-west-1.amazonaws.com/d5098140-08dc-11ec-b07a-0768d305f097.PNG"],[2,"MTR, Inc.","http://resch.com","https://logo.clearbit.com/resch.com"],[2,"Guest","https://opencollective.com/guest-dca6ab5f",null],[2,"Eduardo Sanchez","https://opencollective.com/eduardo-sanchez",null],[2,"Incognito","https://opencollective.com/incognito-4ab13fdd",null],[2,"Jack Lloyd Pritchard","https://opencollective.com/jack-lloyd-pritchard","https://www.gravatar.com/avatar/de6b3d2b42d8b99f631390a498ade312?default=404"],[2,"Jacob Lowe","https://jcbl.ws","https://www.gravatar.com/avatar/c6c7297867c0636cc486841f43143769?default=404"],[2,"Ivan Lopatin","https://opencollective.com/johnspade",null],[2,"Matthew Richard","https://opencollective.com/matthew-richard",null],[2,"Lon Bench","https://twitter.com/Londemonium",null],[2,"incognito","https://opencollective.com/incognito-ced34013",null],[2,"Nick Piepmeier","https://pieps.org","https://www.gravatar.com/avatar/3a2385f5fe6a435812b397aece87c832?default=404"],[2,"Sergey Grinev","https://opencollective.com/sergey-grinev","https://www.gravatar.com/avatar/34dda9d13339fca033543b93252c636f?default=404"],[2,"Camila Caminada","https://opencollective.com/camila-caminada",null],[2,"Guðjón Ólafur Eiríksson","https://opencollective.com/gudjon-olafur-eiriksson",null],[2,"landonth","https://opencollective.com/guest-00a95866",null],[2,"賢進ジェンナ","https://opencollective.com/jenna",null],[2,"Dexter Ang","https://opencollective.com/dexter-ang",null],[2,"Alexandra Deas","https://opencollective.com/alexandra-deas",null],[2,"Miguel Aguayo","https://opencollective.com/miguel-aguayo","https://opencollective-production.s3.us-west-1.amazonaws.com/a579d470-7f44-11ea-b88c-8fcdbae2baea.jpg"],[2,"David Daniel","https://opencollective.com/david-daniel",null],[2,"Vladimir","https://opencollective.com/vladimir13",null],[2,"Matija Mazi","https://opencollective.com/matija-mazi","https://www.gravatar.com/avatar/67f64e2f93176cc0b469607a2b0d2450?default=404"],[2,"James Bryan Douglas","https://opencollective.com/james-bryan-douglas",null],[2,"Raphaël JOLY","https://opencollective.com/raphael-joly","https://opencollective-production.s3.us-west-1.amazonaws.com/369d1bf0-f3a9-11ea-9277-0360f73fc9b2.jpg"],[2,"Vinh Tran","https://opencollective.com/vinh-tran1","https://www.gravatar.com/avatar/538def35b64c2098da893a22756df6da?default=404"],[2,"Clint Mark Gono","https://opencollective.com/clint-mark-gono",null],[2,"David Proulx","https://opencollective.com/david-proulx","https://opencollective-production.s3.us-west-1.amazonaws.com/9a1f7900-7394-11eb-8fdc-a9265e693aff.png"],[2,"anonymous","https://opencollective.com/anonymous452",null],[2,"Guest","https://opencollective.com/guest-a44ae408",null],[2,"Shane Lancaster","https://opencollective.com/shane-lancaster","https://www.gravatar.com/avatar/224f0f1fbb47ac0b34e8e3dcf4229dd1?default=404"],[2,"Bee Low","https://opencollective.com/bee-low",null],[2,"Michael Hays","https://opencollective.com/michaelhays","https://www.gravatar.com/avatar/ad59a2f72ad366d0638f06f8c34b2ae9?default=404"],[2,"Jane Doe","https://opencollective.com/jane-doe",null],[2,"FAb","https://opencollective.com/fab1",null],[2,"Chase Martin","https://opencollective.com/chase-martin",null],[2,"Stephen Crumpler","https://opencollective.com/stephen-crumpler",null],[2,"Michael Polidori","https://opencollective.com/michael-polidori","https://www.gravatar.com/avatar/36ca9078a08fb1bbac4310e2f70fe723?default=404"],[2,"Matteo Scotuzzi","https://matteoscotuzzi.com",null],[2,"Kyle Flanagan","https://opencollective.com/kyle-flanagan","https://www.gravatar.com/avatar/8a4ff340d5d1c5f92c1e31fe2f9733fd?default=404"],[2,"mister-gnommer","https://opencollective.com/mister-gnommer",null],[2,"anonymous","https://opencollective.com/anonymous512",null],[2,"Juarez Weiss","https://twitter.com/juarezweiss",null],[2,"anonymous","https://opencollective.com/anonymous1160",null],[2,"Buck DeFore","https://opencollective.com/buck-defore","https://www.gravatar.com/avatar/2ebd24936ac2abb1e603b6e51c20889a?default=404"],[2,"Jim","https://protonus.ws",null],[2,"Aaron Ruiz","https://opencollective.com/aaron-ruiz",null],[2,"Duncan Lock","https://duncanlock.net/","https://www.gravatar.com/avatar/ca1ac9c04fbcaae624e80e6aa6c7ec52?default=404"],[2,"Marv Holding LTD","https://opencollective.com/marv-holding-ltd",null],[2,"Kevin Paterson","https://opencollective.com/kevin-paterson","https://www.gravatar.com/avatar/38f4c37ca917cff588e79c969c5ed90c?default=404"],[2,"Neil Leisenheimer","https://opencollective.com/neil-leisenheimer",null],[2,"Nader Awad","https://opencollective.com/nader-awad",null],[2,"Hampton Ford","https://opencollective.com/hampton-ford",null],[2,"Daniel Coffaro","https://opencollective.com/daniel-coffaro",null],[2,"Gussamer","https://qrfdev.herokuapp.com",null],[2,"incognito","https://opencollective.com/incognito-2252b359",null],[2,"Guillaume BOEHM","https://opencollective.com/guillaume-boehm",null],[2,"Daniel Maricic","https://woss.io","https://www.gravatar.com/avatar/c18ee6673d2980db6961798498ed294d?default=404"],[2,"Nemanja Grujicic","https://opencollective.com/nemanja-grujicic",null],[2,"Yas K","https://opencollective.com/yas-k",null],[2,"anonymous","https://opencollective.com/anonymous2107",null],[2,"TSUNEHIKO SIMBO","https://opencollective.com/tsunehiko-simbo",null],[2,"anonymous","https://opencollective.com/anonymous1115",null],[2,"Anders Wallén","https://opencollective.com/anderswallen",null],[2,"John Ping","https://opencollective.com/john-ping","https://www.gravatar.com/avatar/c0572cc09919d9401939b87dab3f9a03?default=404"],[2,"eljejer","https://opencollective.com/eljejer","https://www.gravatar.com/avatar/36aa11855051fce0c5cd1dd8814780f0?default=404"],[2,"Søren Høeg Pedersen","https://opencollective.com/soren-hoeg-pedersen","https://opencollective-production.s3.us-west-1.amazonaws.com/fcbad600-39dd-11ea-8ab7-b3f0317bbc7c.jpg"],[2,"anonymous","https://opencollective.com/anonymous476",null],[2,"Piscine Advisor","https://www.piscineadvisor.com","https://opencollective-production.s3-us-west-1.amazonaws.com/eb5d9320-1c15-11e9-a8b5-39d0015215db.png"],[2,"incognito","https://opencollective.com/incognito-603373b4",null],[2,"Marcin","https://opencollective.com/marcin2","https://www.gravatar.com/avatar/f26d271b28c64058ddb6bc178079c9fe?default=404"],[2,"john gross","https://opencollective.com/john-gross",null],[2,"Gabriel Hug","https://opencollective.com/gabriel-hug","https://www.gravatar.com/avatar/e319ab19947afff6295a1aed063416e4?default=404"],[2,"incognito","https://opencollective.com/incognito-2dd2efa2",null],[2,"Andrew Dinh","https://andrewkdinh.com","https://opencollective-production.s3.us-west-1.amazonaws.com/8e409e00-e336-11ea-a79e-53fc76615658.jpg"],[1,"Are Egner-Kaupang","https://opencollective.com/guest-41fd18b3",null],[1,"CX","https://opencollective.com/guest-201e988d",null],[1,"Anônimo","https://opencollective.com/incognito-7f919e58",null],[1,"Guest","https://opencollective.com/guest-f586de38",null],[1,"Scott Walters","https://twitter.com/scowalt","https://opencollective-production.s3.us-west-1.amazonaws.com/d9563ef0-84d5-11ea-848d-57bac9d64576.jpg"],[1,"Incognito","https://opencollective.com/guest-deda35d3",null],[1,"Airradda","https://opencollective.com/airradda",null],[1,"Jacktose","https://opencollective.com/jacktose","https://www.gravatar.com/avatar/bb7d9c9f8a90f4a63fc5273b9118c22f?default=404"],[1,"Eero Talve","https://opencollective.com/eero-talve",null]];
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
  overflow: visible;
  position: relative;
}
#chart-donations .cell {
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  position: absolute;
  user-select: none;
}
#chart-donations .cell__bg {
  background-position: center;
  background-size: cover;
  border-radius: 4px;
  box-shadow: inset 0 0 0 0 white;
  display: inline-block;
  height: 100%;
  position: absolute;
  transition: box-shadow 250ms;
  width: 100%;
}
#chart-donations .cell:hover {
  overflow: visible;
  z-index: 999;
}
#chart-donations .cell:hover .cell__bg {
  box-shadow: inset 0 0 0 1px white;
}
#chart-donations .cell__text {
  box-sizing: border-box;
  color: white;
  display: inline-block;
  font-size: 11px;
  height: 100%;
  padding: 4px;
  position: absolute;
  text-shadow: 0 0 2px black;
  width: 100%;
}
#chart-donations .cell.cell_has-pic .cell__text__wrap {
  background-color: #00000055;
}
#chart-donations .cell.cell_small .cell__text {
  font-size: 9px;
  padding: 1px;
}
#chart-donations .cell.cell_very-small .cell__text {
  font-size: 6px;
  padding: 1px;
}
text[data-label="Chrome"] {
  fill: #2f7485 !important;
}
text[data-label="Firefox"] {
  fill: #e96c4c !important;
}
text[data-label="Edge"] {
  fill: #d9d5ca !important;
}
</style>