const loginForm = document.querySelector('form');
let userView = document.getElementById('user');
let guestView = document.getElementById('guest');

userView.style.display = 'none';
guestView.style.display = 'inline-block';

loginForm.addEventListener('submit', loginUser);

async function loginUser(e) {
    e.preventDefault();

    const formData = new FormData(loginForm);

    let email = formData.get('email');
    let password = formData.get('password');

    if (email == '' && password == '') {
        alert('All fields are required!');
        return;
    } else if (email == '') {
        alert('Please enter your email address!');
        return;
    } else if (password == '') {
        alert('Please enter your password!');
        return;
    }

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok || response.status != 200) {
            loginForm.reset();
            throw new Error(data.message);
        }

        const data = await response.json();

        sessionStorage.setItem('userEmail', data.email);
        sessionStorage.setItem('authToken', data.accessToken);
        sessionStorage.setItem('userId', data._id);

        window.location.href = './index.html';
    } catch (error) {
        alert(error.message);
    }
}