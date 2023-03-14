function solve() {

    let infoElement = document.querySelector('.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let busStop = {
        next: 'depot'
    }

    function depart() {
        departBtn.disabled = true
        let url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            busStop = JSON.parse(JSON.stringify(data)); // no ref
            infoElement.textContent = `Next stop ${busStop.name}`
        })
        .catch(err => console.log(err))

        arriveBtn.disabled = false;
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${busStop.name}`
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();