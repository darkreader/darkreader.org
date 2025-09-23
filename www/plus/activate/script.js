const elEmail = document.querySelector('.js-email');
const submit = document.querySelector('button');
const label = document.querySelector('label');

const params = new URLSearchParams(location.search);
elEmail.textContent = params.get('email');

submit.addEventListener('click', async (e) => {
    e.preventDefault();
    label.textContent = '';
    const email = params.get('email');
    const key = params.get('key');
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
