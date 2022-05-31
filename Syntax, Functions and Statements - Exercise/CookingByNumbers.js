function cook(num, ...operations){

    let number = Number(num);

    for(let i = 0; i < operations.length; i++)
    {
        switch(operations[i])
        {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number -= number * 20/100; break;        
        }

        console.log(number)
    }
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');