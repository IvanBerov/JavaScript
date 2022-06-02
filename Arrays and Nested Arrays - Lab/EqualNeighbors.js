function solve(matrix) {

    const matrixLength = matrix.length;
    let pairs = 0;

    for (let i = 0; i < matrixLength; i++) {

        const currentRow = matrix[i];

        for (let j = 0; j < currentRow.length - 1; j++) {

            const currEl = currentRow[j];

            const nextEl = currentRow[j + 1];

            if (currEl === nextEl) {

                pairs++;
            }
        }
    }

    for (let i = 0; i < matrixLength - 1; i++) {

        const currRow = matrix[i];

        for (let j = 0; j < currRow.length; j++) {

            const currEl = currRow[j];

            const nextEl = matrix[i + 1][j];

            if (currEl === nextEl) {
                
                pairs++;
            }
        }
    }

    return pairs;
}

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));

console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));