
const halloween = date => {
    if(date.getMonth() + 1 == 10 && date.getDate() == 31) console.log('Happy Halloween!');
    else console.log('Just another day.');
}

halloween(new Date('2030/10/31'));
halloween(new Date('2012/07/22'));
halloween(new Date('2021/02/02'));