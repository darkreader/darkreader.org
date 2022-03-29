// @ts-check

const fs = require('fs-extra');
const {marked} = require('marked');
const posts = require('../src/tips/topics.json');

function replace(text, find, replace) {
    return text.split(find).join(replace);
}

async function writeTopic() {
    const template = await fs.readFile('src/tips/topic.html', {encoding: 'utf8'});

    async function writeTopic({id, title}) {
        const markdown = await fs.readFile(`src/tips/topics/${id}.md`, {encoding: 'utf8'});
        const contentHTML = marked(markdown);

        let result = template;
        result = replace(result, '$ID', id);
        result = replace(result, '$TITLE', title);
        result = replace(result, '$CONTENT', contentHTML);
        await fs.outputFile(`www/tips/${id}/index.html`, result, {encoding: 'utf8'});
    }

    for (let post of posts) {
        await writeTopic(post);
    }
}

async function writeIndex() {
    const listItemRegex = /\$LIST-ITEM-START([\s\S]*?)\$LIST-ITEM-END/;
    const index = await fs.readFile('src/tips/index.html', {encoding: 'utf8'});
    const listItemTemplate = listItemRegex.exec(index)[1];
    const list = posts.map(({id, title}) => {
        let result = listItemTemplate;
        result = replace(result, '$ID', id);
        result = replace(result, '$TITLE', title);
        return result;
    }).join('');
    await fs.outputFile(`www/tips/index.html`, index.replace(listItemRegex, list), {encoding: 'utf8'});
}

async function copyFiles() {
    await fs.copy('src/tips/topics.json', 'www/tips/topics.json');
}

Promise.all([
    writeTopic(),
    writeIndex(),
    copyFiles(),
])
    .then(() => console.info('\x1b[32m', 'Tips done', '\x1b[0m'))
    .catch((err) => console.error('\x1b[31m', err, '\x1b[0m'));
