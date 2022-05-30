function roadRadar(speed, area){

    let speedLimit = 0;
    let diff = 0;
    let result = "";
    let status = "";

    switch(area){
        case "city" : speedLimit = 50; break;
        case "residential" : speedLimit = 20; break;
        case "interstate" : speedLimit = 90; break;
        case "motorway" : speedLimit = 130; break;
        default: break;
    }

    if(speed <= speedLimit && speed > 0)
    {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`
    }
    else
    {
        diff = speed - speedLimit;

        if(diff <= 20){
            status = 'speeding';
        }
        else if(diff > 20 && diff <= 40){
            status = 'excessive speeding'
        }
        else{
            status = 'reckless driving'
        }

        result = `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }

    console.log(result);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');