
var txt_a = prompt('Input the First integer');
var txt_b = prompt('Input the Second integer');

var a = isNaN(txt_a) ? 0 : parseInt(txt_a);
var b = isNaN(txt_b) ? 0 : parseInt(txt_b);

if(a > b)
    console.log('a is the greatest');
else if(a < b)
    console.log('b is the greatest');
else   
    console.log('a is equal to b');