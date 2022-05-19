function strLength(a,b,c){
    
    let total = a.length + b.length + c.length;
    let average = Math.floor(total / 3);

    console.log(total);
    console.log(average);
}

strLength('chocolate', 'ice cream', 'cake');
strLength('pasta', '5', '22.3');