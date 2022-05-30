function walk(steps, footprint, speed){

    let distsnceMeters = steps * footprint;
    let speedMetersSecond = speed / 3.6;

    let toRest = Math.floor(distsnceMeters / 500);
    let time = distsnceMeters / speedMetersSecond;

    let min = Math.floor(time / 60);
    let sec = Math.round(time - min * 60);
    let hour = Math.floor(time / 3600); 

    console.log(
        (hour < 10 ? "0" : "") + 
        hour + 
        ":" + 
        (min + toRest < 10 ? "0" : "") + 
        (min + toRest) + 
        ":" + 
        (sec < 10 ? "0" : "") + sec
    );
}

walk(4000, 0.60, 5);
walk(2564, 0.70, 5.5);