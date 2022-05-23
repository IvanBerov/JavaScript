function daysCount(month,year){
    console.log(new Date(year, month,0).getDate());
}

daysCount(1,2012)
daysCount(2,2021);