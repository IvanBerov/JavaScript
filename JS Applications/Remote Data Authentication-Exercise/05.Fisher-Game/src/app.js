function app() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const logout = document.getElementById('logout');
    const addBtn = document.querySelector('.add')

    if (!user) {
        logout.style.display = 'none';
    }

    else {
        document.querySelector("#guest").style.display = "none";
        document.querySelector('.email span').textContent = user.email;
        addBtn.disabled = false
        onLoad()
    }

    async function onLoad() {

        const res = await fetch('http://localhost:3030/data/catches')
        const data = await res.json();

        document.getElementById("catches").replaceChildren(...data.map(createCatch));
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