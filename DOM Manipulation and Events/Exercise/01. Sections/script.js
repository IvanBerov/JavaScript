function create(words) {
   
    let parentElement = document.getElementById('content');
    let elements = words;

    for (let i = 0; i < elements.length; i++) {

        let div = document.createElement('div');
        let p = document.createElement('p');

        let text = document.createTextNode(elements[i]);

        p.appendChild(text);
        div.appendChild(p);

        p.style.display = 'none';

        div.addEventListener('click', function(e){
           e.target.children[0].style.display = 'block'
        });

        parentElement.appendChild(div)
    }
}