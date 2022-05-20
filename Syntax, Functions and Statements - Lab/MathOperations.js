function mathOperation(a,b,c){
    let result;
    switch(c){
        case '+' : result = a + b; break;
        case '-' : result = a - b; break;
        case '/' : result = a / b; break;
        case '*' : result = a * b; break;
        case '%' : result = a % b; break;
        case '**' : result = a ** b; break;
    }

    console.log(result);
}

mathOperation(5, 6, '+')