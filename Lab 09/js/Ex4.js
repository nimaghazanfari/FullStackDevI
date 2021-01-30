function addNumbers(a, b){
    console.log('Adding two numbers', a, 'and', b);
    console.log('The sum is', a + b);
}

function subtractNumbers(a, b){
    console.log('Subtracting two numbers', a, 'and', b);
    console.log('The difference is', a - b);
}

function userPrompt(){

    var dialog = window.prompt('Would you like to add or subtract?');

    switch(dialog){
        case 'add':
            var num_a = window.prompt('Enter the first number');
            var num_b = window.prompt('Enter the second number');

            var a = parseInt(num_a);
            var b = parseInt(num_b);

            addNumbers(a, b);
        break;
        case 'subtract':
            var num_a = window.prompt('Enter the first number');
            var num_b = window.prompt('Enter the second number');

            var a = parseInt(num_a);
            var b = parseInt(num_b);

            subtractNumbers(a, b);
        break;
        default:
            console.log('Unknown operation entered!');
        break;
    }
}

userPrompt();