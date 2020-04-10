const puppeteer = require('puppeteer-core');

async function getChromePath() {
    if (process.platform === 'darwin') {
        return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    }
    if (process.platform === 'win32') {
        return `${process.env.PROGRAMFILES}\\Google\\Chrome\\Application\\chrome.exe`;
    }
    return await new Promise((resolve, reject) => {
        exec('which google-chrome', (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.trim());
            }
        });
    });
}

async function createImageProcessor() {
    const chromePath = await getChromePath();
    const browser = await puppeteer.launch({executablePath: chromePath});
    const page = await browser.newPage();

    /**
     * @param {Buffer} inputBuffer
     * @param {string} contentType
     * @param {number} outputWidth
     * @param {number} outputHeight
     * @returns {Promise<Buffer>}
     */
    async function resize(inputBuffer, contentType, outputSize) {
        const inputDataURL = `data:image/${contentType};base64,${inputBuffer.toString('base64')}`;
        const outputDataURL = await page.evaluate(
            (url, size) => {
                return new Promise((resolve, reject) => {
                    const image = new Image();
                    image.onload = () => {
                        try {
                            const canvas = document.createElement('canvas');
                            const inW = image.naturalWidth;
                            const inH = image.naturalHeight;
                            if (inW === 0 || inH === 0) {
                                throw new Error('Empty image');
                            }
                            let outW;
                            let outH;
                            if (inW > inH) {
                                outW = size;
                                outH = size * inH / inW;
                            } else {
                                outH = size;
                                outW = size * inW / inH;
                            }
                            canvas.width = outW;
                            canvas.height = outH;
                            const context = canvas.getContext('2d');
                            context.drawImage(image, 0, 0, outW, outH);
                            resolve(canvas.toDataURL('image/jpeg'));
                        } catch (err) {
                            reject(err);
                        }
                    };
                    image.src = url;
                });
            },
            inputDataURL,
            outputSize,
        );
        return Buffer.from(outputDataURL.substring(outputDataURL.indexOf(',') + 1), 'base64');
    }

    async function destroy() {
        await browser.close();
    }

    return {
        resize,
        destroy,
    };
}

module.exports = {
    createImageProcessor,
};
