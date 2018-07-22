const fs = require('fs-extra');
const {exec} = require('child_process');

function run(command, options) {
    return new Promise((resolve, reject) => {
        exec(command, options, (err, stdout, stderr) => {
            if (err) {
                reject(err);
                return;
            }
            if (stdout) {
                console.log(stdout);
            }
            if (stderr) {
                console.log(stderr);
            }
            resolve();
        });
    });
}

async function publish() {
    await fs.remove('www/blog');
    await fs.remove('www/help');
    await run('npm run blog');
    await run('npm run help');
    console.info('\x1b[32m', 'Build done', '\x1b[0m')
    await fs.copy('www', '../darkreader.github.io');
    console.info('\x1b[32m', 'Files copied', '\x1b[0m');
    await run(
        [
            'git add -A',
            `&& git commit -m "Publish ${(new Date()).toISOString().substring(0, 10)}"`,
            '&& git push',
        ].join(' '),
        {cwd: '../darkreader.github.io'}
    );
    console.info('\x1b[32m', 'Published', '\x1b[0m');
}

publish();
