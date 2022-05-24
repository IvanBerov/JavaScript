function buyAFruit(fruit,grams,pricePerKg){

    let kgFruit = Number(grams/1000);
    let price = Number(pricePerKg);
    let totalPrice = kgFruit * price;
    
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kgFruit.toFixed(2)} kilograms ${fruit}.`); 
}

buyAFruit('orange', 2500, 1.80);

buyAFruit('apple', 1563, 2.35);