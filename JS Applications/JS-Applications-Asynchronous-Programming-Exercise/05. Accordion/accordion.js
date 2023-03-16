async function solution() {
    try {
        // fetch all articles from server
        let url = `http://localhost:3030/jsonstore/advanced/articles/list`;
        let res = await fetch(url);
        //console.log(res);
        if (!res.ok) {
            throw new Error('Error')
        }
        let data = await res.json()
        //console.log(data)

        data.forEach(infoElement => {
            let articleElement = document.createElement('div');
            articleElement.classList.add('accordion');
            articleElement.innerHTML =
                `
            <div class="head">
            <span>${infoElement.title}</span>
            <button class="button" id="${infoElement._id}" onclick="moreOnclick(event)">More</button>
            </div>
            <div class="extra"></div>
            `

            let main = document.getElementById('main');
            main.appendChild(articleElement);
        });

    } catch (error) {
        console.log(error);
    }
}

async function moreOnclick(e) {

    try {
        let currentTarget = e.currentTarget;
        let url = `http://localhost:3030/jsonstore/advanced/articles/details/` + currentTarget.id;
        let parent = currentTarget.parentNode.parentNode;
        let extraDiv = parent.querySelector('div.extra');

        let response = await fetch(url);
        let data = await response.json()
        if (!response.ok) {
            throw new Error('Error');
        }


        extraDiv.innerHTML = `<p>${data.content}</p>`;

        if (currentTarget.textContent == 'More') {
            currentTarget.textContent = 'Less';
            extraDiv.style.display = 'block';
        }
        else {
            currentTarget.textContent = 'More';
            extraDiv.style.display = 'none';
        }
    } catch (error) {
        console.log(error);
    }
}

solution();