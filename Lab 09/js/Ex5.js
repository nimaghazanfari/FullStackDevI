var addNumbers = function(a, b){
    console.log('Adding two numbers', a, 'and', b);
    console.log('The sum is', a + b);
}

var subtractNumbers = function(a, b){
    console.log('Subtracting two numbers', a, 'and', b);
    console.log('The difference is', a - b);
}

var multipleNumbers = function(a, b){
    console.log('Multiply of two numbers', a, 'and', b);
    console.log('The multiple is', a * b);
}

var divideNumbers = function(a, b){
    console.log('Division of two numbers', a, 'and', b);
    console.log('The division is', a / b);
}

function userPrompt(){

    var dialog = window.prompt('What would you like? +, -, *, /');

    switch(dialog){
        case '+':
            var num_a = window.prompt('Enter the first number');
            var num_b = window.prompt('Enter the second number');

            if(!checkInput(num_a) || !checkInput(num_b)) return;

            var a = parseInt(num_a);
            var b = parseInt(num_b);

            addNumbers(a, b);
        break;
        case '-':
            var num_a = window.prompt('Enter the first number');
            var num_b = window.prompt('Enter the second number');

            if(!checkInput(num_a) || !checkInput(num_b)) return;

            var a = parseInt(num_a);
            var b = parseInt(num_b);
            
            divideNumbers(a, b);
        break;
        case '*':
            var num_a = window.prompt('Enter the first number');
            var num_b = window.prompt('Enter the second number');

            if(!checkInput(num_a) || !checkInput(num_b)) return;

            var a = parseInt(num_a);
            var b = parseInt(num_b);

            multipleNumbers(a, b);
        break;
        case '/':
            var num_a = window.prompt('Enter the first number');
            var num_b = window.prompt('Enter the second number');

            if(!checkInput(num_a) || !checkInput(num_b)) return;

            var a = parseInt(num_a);
            var b = parseInt(num_b);

            divideNumbers(a, b);
        break;
        default:
            console.log('Unknown operation entered!');
        break;
    }
}

function checkInput(input){
    if(isNaN(input)){
        console.log('Error! The value is not a number!');
        return false;
    }
    return true;
}

userPrompt();