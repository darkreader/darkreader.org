const fs = require('fs-extra');
const marked = require('marked');
const posts = require('../src/blog/posts.json');

function replace(text, find, replace) {
    return text.split(find).join(replace);
}

function formatDate(date) {
    return (new Date(date)).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
}

async function writePosts() {
    const template = await fs.readFile('src/blog/post.html', {encoding: 'utf8'});

    async function writePost({id, date, headline}) {
        const markdown = await fs.readFile(`src/blog/posts/${id}.md`, {encoding: 'utf8'});
        let result = template;
        result = replace(result, '$HEADLINE', headline);
        result = replace(result, '$DATE', formatDate(date));
        result = replace(result, '$CONTENT', marked(markdown));
        await fs.outputFile(`www/blog/${id}/index.html`, result, {encoding: 'utf8'});
    }

    for (let post of posts) {
        await writePost(post);
    }
}

async function writeIndex() {
    const listItemRegex = /\$LIST-ITEM-START([\s\S]*?)\$LIST-ITEM-END/;
    const index = await fs.readFile('src/blog/index.html', {encoding: 'utf8'});
    const listItemTemplate = listItemRegex.exec(index)[1];
    const list = posts.map(({id, date, headline}) => {
        let result = listItemTemplate;
        result = replace(result, '$ID', id);
        result = replace(result, '$DATE', formatDate(date));
        result = replace(result, '$HEADLINE', headline);
        return result;
    }).join('');
    await fs.outputFile(`www/blog/index.html`, index.replace(listItemRegex, list), {encoding: 'utf8'});
}

async function copyFiles() {
    await fs.copyFile('src/blog/style.css', 'www/blog/style.css');
    await fs.copyFile('src/blog/posts.json', 'www/blog/posts.json');
}

Promise.all([
    writePosts(),
    writeIndex(),
    copyFiles(),
])
    .then(() => console.info('\x1b[32m', 'Blog done', '\x1b[0m'))
    .catch((err) => console.error('\x1b[31m', err, '\x1b[0m'));
