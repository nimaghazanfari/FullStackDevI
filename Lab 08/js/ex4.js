var dialog = prompt('Would you like Coffee, Tea or Water?');

console.log('The order is', dialog);

switch(dialog){
    case 'coffee':
        console.log('Total is $2.50');
        break;
    case 'tea':
        console.log('Total is $1.50');
        break;
    case 'water':
        console.log('Total is $3.00');
        break;
    default: break;
}