async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const response = await fetch(url)
    const data = await response.json()

    const main = document.querySelector('main')
    main.innerHTML = ''

    Object.values(data).forEach((x, i) => main.appendChild(profileTemplate(x, i + 1)))
}

function profileTemplate({ username, email, age }, id) {

    const divElement = document.createElement('div');
    const btnShowHide = document.createElement('button');

    btnShowHide.innerText = 'Show more'
    divElement.className = 'profile'
    divElement.innerHTML = `<img src="./iconProfile2.png" class="userIcon">
<label>Lock</label>
<input type="radio" name="user${id}Locked" value="lock" checked="">
<label>Unlock</label>
<input type="radio" name="user${id}Locked" value="unlock"><br>
<hr>
<label>Username</label>
<input type="text" name="user${id}Username" value=${username} disabled="" readonly="">
<div id="user${id}HiddenFields">
<hr>
<label>Email:</label>
<input type="email" name="user${id}Email" value=${email} disabled="" readonly="">
<label>Age:</label>
<input type="email" name="user${id}Age" value=${age} disabled="" readonly="">
</div>`

    btnShowHide.addEventListener('click', () => {

        const checked = divElement.querySelector('input[type=radio]:checked');

        if (checked && checked.value === 'unlock') {
            if (btnShowHide.innerText === 'Show more') {
                divElement.querySelector(`#user${id}HiddenFields`).style.display = 'block'
                btnShowHide.innerText = 'Hide it'
            } else {
                divElement.querySelector(`#user${id}HiddenFields`).style.display = 'none'
                btnShowHide.innerText = 'Show more'
            }
        }
    })

    divElement.appendChild(btnShowHide);

    return divElement;
}