function solve(input) {

    const products = input.reduce((acc, curr) => {

        let [town, product, price] = curr
        .split('|')
        .map((c) => c.trim());

        price = Number(price);

        if (!acc.hasOwnProperty(product)) {
            acc[product] = {
                town,
                price,
            };
        }

        if (acc[product].price > price) {
            acc[product].price = price;
            acc[product].town = town;
        }

        return acc;
    }, {});

    let output = '';

    Object.keys(products).forEach((key) => {
        output += `${key} -> ${products[key].price} (${products[key].town})\n`;
    });

    console.log(output.trimEnd());
}

function solve2(arr){

    let obj = {};
    //key:{product : {town, price}}
    for (let index = 0; index < arr.length; index++) {
        let text = arr[index];
        productInfo = text.split(' | ');
        let town = productInfo[0];
        let product = productInfo[1];
        let price = Number(productInfo[2]);

        if (!obj.hasOwnProperty(product)) {
            obj[product] = {town, price};
        }
        else{
            if (price < obj[product].price) {
                obj[product] = {town, price};
            }
        }  
    }

    let productNames = Object.keys(obj);

    for (let index = 0; index < productNames.length; index++) {

        const productName = productNames[index];
        
        console.log(`${productName} -> ${obj[productName].price} (${obl[productName].town})`)
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);