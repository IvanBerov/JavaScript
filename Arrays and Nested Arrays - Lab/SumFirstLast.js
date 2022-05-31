function solve(array){

    let firstNum = [...array].shift();
    let lastNum = [...array].pop();

    let result = Number(firstNum) + Number(lastNum);

    return result;
}


console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));