// @ts-check

/** @typedef {any} Paddle */

let didInitializePaddle = false;

/**
 * @param {{plusButton?: Element | null; feeButton?: Element | null; corpButton?: Element | null}} options
 */
export async function initPaddle(options) {
    /** @type {any} */
    let Paddle;
    if (!didInitializePaddle) {
        // @ts-ignore
        await import('https://cdn.paddle.com/paddle/v2/paddle.js');
        Paddle = /** @type {any} */(window).Paddle;
        Paddle.Initialize({
            token: 'live_b32a4d21e35479ee3ea2b849be9',
        });
    }

    /**
     * @param {Element} element
     * @param {string} priceId
     */
    const initClick = (element, priceId) => {
        element.addEventListener('click', () => {
            Paddle.Checkout.open({
                settings: {
                    displayMode: 'overlay',
                    theme: 'dark',
                    variant: 'one-page',
                },
                items: [
                    {
                        priceId,
                        quantity: 1,
                    },
                ],
            });
        });
    };

    if (options.plusButton) {
        initClick(options.plusButton, 'pri_01je4ebmn474jsee5eh2gmfan9');
    }
    if (options.feeButton) {
        initClick(options.feeButton, 'pri_01jf039mt65me4f2exbgpg3p9m');
    }
    if (options.corpButton) {
        initClick(options.corpButton, 'pri_01k0skrfeyprpcmxvfsp5vfnw5');
    }
}
