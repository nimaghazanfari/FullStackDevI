const isValidDate = d => {
    return d instanceof Date && !isNaN(d);
}

const hasFriday13 = (month, year) => {
    
    var result = false;

    for(var day = 1; day <= 31; day++){

        var date = new Date(year, month - 1, day);

        if(isValidDate(date)){
            if(date.getDay() == 5 && date.getDate() == 13) {
                result = true;
                break;
            }
        }

    }

    if(result) console.log('It\'s Friday the 13th!');
    else console.log('Crystal Lake.');

}

hasFriday13(3, 2020);
hasFriday13(10, 2017);
hasFriday13(1, 1985);