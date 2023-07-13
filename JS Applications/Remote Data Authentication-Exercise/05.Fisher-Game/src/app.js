console.log('TODO:// Implement Home functionality');

function app() {
    const accessToken = sessionStorage.getItem('accessToken');
    const loggedUserEmail = sessionStorage.getItem('loggedUser');

    if (loggedUserEmail) {
        document.querySelector('span').textContent = loggedUserEmail;
    } else {
        document.querySelector('span').textContent = 'guest';
    }

    if (accessToken) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';

        document.getElementById('logout').style.display = 'inline';
    } else {
        document.getElementById('login').style.display = 'inline';
        document.getElementById('register').style.display = 'inline';

        document.getElementById('logout').style.display = 'none';
    }

    document.getElementById('logout').addEventListener('click', onLogout);

    async function onLogout(e) {
        e.preventDefault();

        await fetch('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: {
                'X-Authorization': sessionStorage.getItem('authToken'),
            },
        });

        sessionStorage.clear(); // Clear tokens for this user
        window.location.href = './index.html';
    }
}
app();