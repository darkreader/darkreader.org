const fs = require('fs-extra');
const marked = require('marked');
const posts = require('../src/blog/posts.json');

function replace(text, find, replace) {
    return text.split(find).join(replace);
}

async function getTopics() {
    const topics = [];

    const list = await fs.readdir('src/help/topics');
    for (let name of list) {
        if (!name.endsWith('.md')) {
            continue;
        }

        const locale = name.substring(0, name.lastIndexOf('.'));
        const markdown = await fs.readFile(`src/help/topics/${locale}.md`, {encoding: 'utf8'});
        const helpLine = markdown.substring(0, markdown.indexOf('\n'));
        const help = helpLine.match(/^#\s*(.*?)\s*\(/)[1];
        const language = helpLine.match(/\((.+)\)/)[1];
        const topic = markdown.substring(markdown.indexOf('\n', markdown.indexOf('\n') + 1) + 1);

        topics.push({locale, help, language, topic});
    }

    return topics;
}

async function writeTopics() {
    const topics = await getTopics();

    const template = await fs.readFile('src/help/topic.html', {encoding: 'utf8'});

    async function writeTopic({locale, help, topic}) {
        let result = template;
        result = replace(result, '$LOCALE', locale);
        result = replace(result, '$HELP', help);
        result = replace(result, '$TOPIC', marked(topic));
        await fs.outputFile(`www/help/${locale}/index.html`, result, {encoding: 'utf8'});
    }

    for (let topic of topics) {
        await writeTopic(topic);
    }
}

async function writeIndex() {
    const topics = await getTopics();

    const listItemRegex = /\$LIST-ITEM-START([\s\S]*?)\$LIST-ITEM-END/;
    const index = await fs.readFile('src/help/index.html', {encoding: 'utf8'});
    const listItemTemplate = listItemRegex.exec(index)[1];
    const list = topics.map(({locale, language, help}) => {
        let result = listItemTemplate;
        result = replace(result, '$LOCALE', locale);
        result = replace(result, '$LANGUAGE', language);
        result = replace(result, '$HELP', help);
        return result;
    }).join('');
    await fs.outputFile(`www/help/index.html`, index.replace(listItemRegex, list), {encoding: 'utf8'});
}

async function copyFiles() {
    await fs.copy('src/help/style.css', 'www/help/style.css');
}

Promise.all([
    writeTopics(),
    writeIndex(),
    copyFiles(),
])
    .then(() => console.info('\x1b[32m', 'Help done', '\x1b[0m'))
    .catch((err) => console.error('\x1b[31m', err, '\x1b[0m'));
