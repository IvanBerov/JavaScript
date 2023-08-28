function register() {
    const btnElement = document.querySelector('button');
    const formElement = document.querySelector('form');
    const notificationP = document.getElementsByClassName('notification')[0];

    btnElement.addEventListener('click', onRegister);

    async function onRegister(e) {
        e.preventDefault();

        const formData = new FormData(formElement);

        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        if (!email) {
            notificationP.textContent = 'Email is required!';
        } else if (!password) {
            notificationP.textContent = 'Password is required!';
        } else if (password !== rePass) {
            notificationP.textContent = 'Password and Repass must match!';
        }

        if (email && password && rePass) {
            try {
                const response = await fetch('http://localhost:3030/users/register', {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                if (!response.ok) {
                    const err = new Error(response.statusText);
                    throw err;
                }

                const data = await response.json();

                sessionStorage.setItem('accessToken', data.accessToken);
                sessionStorage.setItem('loggedUser', data.email);
                sessionStorage.setItem('id', data._id);

                window.location = 'index.html';
            } catch (error) {
                notificationP.textContent = error.message;
            }
        }
    }
}
register();