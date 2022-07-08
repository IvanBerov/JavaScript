function colorize() {
    const allRows = document.querySelectorAll('tr');

    for (let index = 1; index < allRows.length; index+=2) {
        allRows[index].style.background = 'teal';
    }
}

// function colorize() {

//     let tableElements = document.querySelectorAll('tr:nth-child(even)');

//     for (const child of tableElements) {
//         child.style.backgroundColor = "Teal";
//     }

// }