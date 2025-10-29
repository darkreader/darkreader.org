function run() {
    const elEmail = document.querySelector('.js-email');
    const submit = document.querySelector('button');
    const label = document.querySelector('label');

    if (!navigator.userAgent.includes('Edg')) {
        /** @type {HTMLElement} */
        const edgeProblemBlock = document.querySelector('.js-edge-problem-block');
        edgeProblemBlock.style.display = '';

        /** @type {HTMLAnchorElement} */
        const edgeLink = document.querySelector('.js-edge-link');
        edgeLink.href = location.href;

        /** @type {HTMLElement} */
        const form = document.querySelector('.js-form');
        form.style.display = 'none';

        /** @type {HTMLElement} */
        const contacts = document.querySelector('.js-contacts');
        contacts.style.display = 'none';

        /** @type {HTMLElement} */
        const footer = document.querySelector('footer');
        footer.style.backgroundColor = 'inherit';

        /** @type {HTMLButtonElement} */
        const copyButton = document.querySelector('.js-copy');
        copyButton.addEventListener('click', () => {
            const input = document.createElement('input');
            input.value = location.href;
            document.body.append(input);
            input.select();
            document.execCommand('copy');
            input.remove();

            copyButton.textContent = 'Copied';
            copyButton.classList.add('copy-button--copied');
        });
        footer.style.backgroundColor = 'inherit';
        return;
    }

    const hash = location.hash;
    let email = '';
    let key = '';
    if (hash.startsWith('#v1=')) {
        [email, key] = atob(hash.slice(4)).split('::');
        elEmail.textContent = email;
        location.hash = '';
        history.pushState('', document.title, location.pathname);
    }

    submit.addEventListener('click', async (e) => {
        e.preventDefault();
        label.textContent = '';
        if (email.includes('@') && key) {
            submit.classList.add('button-loading');
            setTimeout(() => {
                document.addEventListener('__darkreader_activationResult__', (e) => {
                    const {result} = e.detail;
                    if (result) {
                        submit.classList.add('button-success');
                        submit.textContent = 'Complete';
                    } else {
                        submit.classList.add('button-failure');
                        submit.textContent = 'Error';
                    }
                });
                document.dispatchEvent(new CustomEvent('__darkreader_activate__', {detail: {email, key}}));
            }, 2000 + Math.round(500 * Math.random()));
        }
    });
}

run();
