function solve(input){

    let result = '';

    for(let i = 0; i < input.length; i++){
        if(i % 2 == 0){
            result += input[i] + ' ';
        }
    }

    console.log(result);
}

// function solve(numbers) {
//     const result = numbers
//         .filter((x, i) => i % 2 === 0)
//         .join(' ');

//     console.log(result);
// }

solve(['20', '30', '40', '50', '60']);
solve(['5', '10'])