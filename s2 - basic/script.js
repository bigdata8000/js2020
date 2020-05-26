// video 5 - variable and data types.

var firstName = 'John';
var lastname = 'Smith';
var age = 28;
var income = age * 4
var isMarried = false;
var job = 'Teacher';

console.log("Hi, my name is " + firstName + ' ' + lastname + ' I am ' + age + ' years old.');
console.log("Is " + firstName + " married? " + isMarried);

console.log(`Hi my name is ${firstName} and I am ${age} years old.`);


// quiz, my salary is 4 times my age, how much do I make ?
console.log('£ ' + income + 'k / per year.');



// video 6 - variable mutation & type coercion.
// re-assign Johns job.

var job = 'Dancer';
console.log(firstName + ' works as a ' + job);



// prompt user for input
var yourName = prompt('Enter your name:');
var greeting = alert('Helloooo ' + yourName + ' Nice to meet you ⭐️');



// video 7 - basic operators.

var a = 21;
var b = 3;
var c;

console.log('a + b = ' + (a+b));
console.log('a - b = ' + (a-b));
console.log('a x b = ' + (a*b));
console.log('a / b = ' + (a/b));



var year = 2020;
var ageJohn = (year - 1980);
var ageMark = (year - 1985);
var isJohnOlder = ageJohn > ageMark;    // true        


console.log('John is ' + ageJohn);
console.log('Mark is ' + ageMark);
console.log('Is John really older ? ' + isJohnOlder);

console.log(typeof firstName);      // string
console.log(typeof age);            // number
console.log(typeof isJohnOlder);    // boolean

console.log(typeof b);              // number
console.log(typeof c);              // undefined



// video 8 - operators.

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = (now - yearJohn) >= fullAge;
console.log(isFullAge);


var ageJack = 25;
var ageJill = 40;
var avgAge = (ageJack + ageJill) / 2;
console.log('The average of of Jack and Jill is ' + avgAge);



var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);


z = z + 1;  // z + 1 is same as
z++


// video 11 - if else statements

var yourAge = 15;

if (yourAge <= 17) {
    console.log('You can\'t vote yet.');
} else {
    console.log('You can vote.');
}



var yourName = 'Mary';
var isMarried = false;

if (isMarried) {
    console.log(yourName + ' is married.');
} else {
    console.log(yourName + ' will hopefully marry soon.');
}



// 
