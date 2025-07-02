const input = document.querySelector('input');
const submit = document.querySelector('button');
const label = document.querySelector('label');

submit.addEventListener('click', async (e) => {
    e.preventDefault();
    label.textContent = '';
    const email = input.value.trim();
    if (email.includes('@')) {
        try {
            await fetch(`https://register.darkreader.app/restore-key?email=${encodeURIComponent(email)}`);
        } catch (err) {
        } finally {
            label.textContent = 'An email will be sent to the specified address shortly.';
        }
    }
});
