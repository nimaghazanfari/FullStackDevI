var a = -5;
var b = -2;
var c = 17;

var fun = (txt, val) => console.log('value of', txt, 'is', val);

fun('a', a);
fun('b', b);
fun('c', c);

if(a >= b && a >= c)
    console.log('a is the greatest number');
else if(b >= a && b >= c)
    console.log('b is the greatest number');
else
    console.log('c is the greatest number');