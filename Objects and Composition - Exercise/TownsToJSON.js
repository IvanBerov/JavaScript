function solve(input) {
    
    let result = [];

    for (let index = 1; index < input.length; index++) {
        //parce data
        let [town, latitude, longitude] = input[index].split(' | ');

        town = town.replace('| ','');

        latitude = Number(Number(latitude).toFixed(2));

        longitude =+ (Number(longitude.replace(' |','')).toFixed(2));

        result.push({Town:town, Latitude:latitude, Longitude:longitude});
    }

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);