// string
var str = 'jlljlj';
var currentStatus = 'pending';
// number 
var count = 34134;
var speed = 250;
var floanNum = 4.7;
// boolean
var isFetching = true;
var isDeclared = false;
// undefined 
var u = undefined;
// null
var n = null;
// object
var obj = {
    a: 'a',
    b: 53
};
// array
var randomNumArr = [1, 3, 13, 34, 4234]; // number - type, [] - array
var strArr = str.split('');
var numArr = [3, 3, 5, 3, 34, 32]; // Define with generic(<>), Array - global class,  number - type
// tuple
var a;
a = [10, false];
var b = [true, 'somestring'];
// any
var someArr = [2, 3, 4, 'string'];
someArr = [3, 'dfjlsfj', true, {}];
var anyVar = 17;
anyVar = 'type has changed to string';
// void
function sayHello(name) {
    alert("Hello " + name);
}
var calculateCount = function (a, b) { return console.log(a + b); };
// never 
function catchError(message) {
    throw new Error(message);
}
var userPassword = 'password123';
var stringID = '2342';
var numberID = 2342;
