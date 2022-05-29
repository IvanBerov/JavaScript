function GCD(x,y){

    while(y){
        let z = y;
        y = x % y;
        x = z;
    }

    console.log(x);
}

GCD(15, 5);
GCD(2154,458);