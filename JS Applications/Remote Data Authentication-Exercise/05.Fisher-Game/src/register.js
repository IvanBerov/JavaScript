console.log('TODO:// Implement Register functionality');
function register() {
    const btnElement = document.querySelector('button');
    const formElement = document.querySelector('form');
    const notificationP = document.getElementsByClassName('notification')[0];

    btnElement.addEventListener('click', onRegister);

    async function onRegister(e) {
        e.preventDefault();

        const formData = new FormData(formElement);
        const email = formData.get('email');
        const pass = formData.get('password');
        const rePass = formData.get('rePass');

        if (!email) {
            notificationP.textContent = 'Email is required!';
        } else if (!pass) {
            notificationP.textContent = 'Password is required!';
        } else if (pass !== rePass) {
            notificationP.textContent = 'Password and Repass must match!';
        }

        if (email && pass && rePass) {
            try {
                const res = await fetch("http://localhost:3030/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, pass }),
                });

                if (!res.ok) {
                    const err = new Error(res.statusText);
                    throw err;
                }

                const data = await res.json();

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