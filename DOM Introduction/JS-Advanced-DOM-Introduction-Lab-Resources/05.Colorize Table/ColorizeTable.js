function colorize() {
    const allRows = document.querySelectorAll('tr');

    for (let index = 1; index < allRows.length; index+=2) {
        allRows[index].style.background = 'teal';
    }
}