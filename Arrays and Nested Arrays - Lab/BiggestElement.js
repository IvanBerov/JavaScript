function solve(matrix){

    let matrixLength = matrix.length;
    let maxNum = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < matrixLength; i++){
        
        let currRow = matrix[i];
        let currMaxNum = Math.max(...currRow);

        if(maxNum < currMaxNum){

            maxNum = currMaxNum;
        }
    }

    return maxNum
}

console.log(solve([[20, 50, 10],
                   [8, 33, 145]]));

console.log(solve([[3, 5, 7, 12],
                   [-1, 4, 33, 2],
                   [8, 3, 0, 4]]));