let url = 'http://localhost:3030/jsonstore/collections/students';
let table = document.querySelector('#results tbody');
let form = document.querySelector('form');

window.addEventListener('load', loadStudents);
form.addEventListener('submit', addStudent);

async function addStudent(e) {
    e.preventDefault();

    let dataForm = new FormData(form);
    let infoArr = [...dataForm.values()];
    let gradeNumber = Number(infoArr[3].trim());

    table.replaceChildren()

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: infoArr[0],
                lastName: infoArr[1],
                facultyNumber: infoArr[2],
                grade: gradeNumber
            })
        })

        if (response.ok == false) {
            throw new Error('Record Error!')
        }

        loadStudents();
    } catch (error) {
        alert(error.message)
    }
}

async function loadStudents() {

    try {
        let response = await fetch(url);

        if (response.status != 200) {
            throw new Errror('Error data!')
        }

        let data = await response.json();

        Object.values(data).forEach(e => {
            let student = createElement('tr',
                createElement('td', e.firstName),
                createElement('td', e.lastName),
                createElement('td', e.facultyNumber),
                createElement('td', e.grade)
            )

            table.appendChild(student)
        })
    } catch (error) {
        alert(error.message)
    }

}

//'li' , 'hallo' => li tag + textNode.textContent = hello, li.appendChild(textNode)
//'ul' , HtmlElement litag => ul tag => ul.appendChild(HtmlElement)
function createElement(type, ...content) {

    let element = document.createElement(type);

    content.forEach(e => {
        if (typeof e === 'number' || typeof e === 'string') {
            e = document.createTextNode(e)
        }

        element.appendChild(e);
    })

    return element;
}