function attachEvents() {
    document.querySelector('#btnLoad').addEventListener('click', load);
    document.querySelector('#btnCreate').addEventListener('click', create);
    document.querySelector('#phonebook').addEventListener('click', remove);
}

let phoneBook = document.querySelector('#phonebook');
let url = `http://localhost:3030/jsonstore/phonebook`;

function create() {

    let name = document.querySelector('#person');
    let number = document.querySelector('#phone');

    if (!name.value || !number.value) {
        return;
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            person: name.value.trim(),
            phone: number.value.trim()
        })
    })
        .then(res => res.json())
        .catch(err => alert(err.message))

    name.value = '';
    number.value = '';
}

function load() {

    fetch(url)
        .then(res => res.json())
        .then(data => {
            phoneBook.replaceChildren(); // clean ul

            Object.values(data).forEach(p => {
                let liElement = document.createElement('li');
                liElement.textContent = `${p.person}: ${p.phone}`;
                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.setAttribute('id', p._id);
                liElement.appendChild(deleteBtn);
                phoneBook.appendChild(liElement);
            })
        })
}

function remove(e) {

    let currId = e.target.id;

    if (e.target.textContent == 'Delete') {
        
        fetch(`${url}/${currId}`, {
            method: 'DELETE'
        })
            .then(res => {
                load()
                return res.json()
            })
            .catch(err => alert(err.message))
    }
}

attachEvents();