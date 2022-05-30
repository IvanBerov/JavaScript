function sameNumbers(number){

    let input = String(number);
    let isSame = true;
    let sum = 0;

    let firstDigit = input[0]; 

    for(let x = 0; x < input.length; x++)
    {
        let currDigit = +input[x];
        sum += currDigit;

        if(currDigit != firstDigit){
           
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222)
sameNumbers(1234)