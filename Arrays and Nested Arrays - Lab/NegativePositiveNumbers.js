function solve(numbers){

    let result = [];

    for(let i = 0; i < numbers.length; i++){

        if(numbers[i] < 0){
            result.unshift(numbers[i]);
        }
        else{
            result.push(numbers[i])
        }
    }

console.log(result.join('\n'));
}

solve([7, -2, 8, 9]);
console.log('******')
solve([3, -2, 0, -1]);