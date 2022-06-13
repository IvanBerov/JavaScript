function solve(numbersArr){

    let result = [];
    let biggest = numbersArr[0];

    for(let i = 0; i < numbersArr.length; i++){

        let currNum = numbersArr[i];

        if(currNum >= biggest){

            result.push(currNum);
            biggest = currNum;
        }
    }

    return result
}

// function solve(numbers) {

//     const result = numbers.reduce((acc, curr, index) => {
//         if (index !== 0) {

//             const prevNum = acc[acc.length - 1];

//             if (curr >= prevNum) {

//                 acc.push(curr);
//             }
//         } 
//         else {

//             acc.push(curr);
//         }

//         return acc;
//     }, []);

//     return result;
// }

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));