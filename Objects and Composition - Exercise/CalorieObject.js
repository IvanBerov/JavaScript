function solve(arrInput){

    let products = {};

    for (let i = 0; i < arrInput.length; i += 2) {

        const name = arrInput[i];
        const calories = Number(arrInput[i + 1]);

        products[name] = calories;
    }

    console.log(products);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);