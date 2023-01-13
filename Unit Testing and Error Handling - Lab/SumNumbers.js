function sum(array){

    let sum = 0;

    for(let number of array){
        sum += Number(number);
    }
    return sum;
}

module.exports = {sum};