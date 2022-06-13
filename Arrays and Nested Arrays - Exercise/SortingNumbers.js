function solve(numbersArr){

    let result = [];
    numbersArr.sort((a,b) => b - a);

    while(numbersArr.length !== 0){

        result.push(numbersArr.pop());

        result.push(numbersArr.shift());
    }

    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);