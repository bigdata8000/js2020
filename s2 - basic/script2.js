// video 12 - boolean logic.
/*
    AND &&
    OR ||
    NOT !
*/


var firstName = 'John'
var age = 18;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >=13 && age <=17) {
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}



// video 13 - ternary operator and switch statement.

var firstName = 'Bob'
var age = 17;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks orange juice.');

var drink = age >= 18 ? 'wine' : 'apple juice';
console.log(drink);



// switch stmt

var firstName = 'Mary';
var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':                                          // 2x cases, same outcome.
        console.log(firstName + ' teaches programming.');
        break;
    case 'driver':
        console.log(firstName + ' drives a bus.');
        break;
    case 'designer':
        console.log(firstName + ' designs amazing clothes.');    
        break;
    default: 
        console.log(firstName + ' does something else.');        
}




// video 14 - truthy and falsey values.
/*
    falsy value: undefined, null, 0, '', NaN.
    truthy value: Not falsy.
*/


var height;
//height = 23;
height = 0;

if (height || height === 0) {
    console.log('variable is defined...');
} else {
    console.log('variable has NOT been defined');
}


// type coercion

21 == '21';     // true.
21 === '21';    // false. strict equality operator, the type are different!    



// video 15 - challenge.

var teamX_avgScore = (89 + 120 + 103)/3;
var teamY_avgScore = (116 + 94 + 123)/3;
var teamZ_avgScore = (97 + 134 + 105)/3;

console.log('x:' + teamX_avgScore);
console.log('y:' + teamY_avgScore);
console.log('z:' + teamZ_avgScore);

if (teamX_avgScore > teamY_avgScore && teamX_avgScore > teamZ_avgScore) {
    console.log('Winner : Team X, average score: ' + teamX_avgScore);
} else if (teamY_avgScore > teamX_avgScore && teamY_avgScore > teamZ_avgScore) {
    console.log('Winner : Team Y, average score: ' + teamY_avgScore);
} else if (teamZ_avgScore > teamX_avgScore && teamZ_avgScore > teamY_avgScore) {
    console.log('Winner : Team Z, average score: ' + teamZ_avgScore);
} else {
    console.log('All 3 teams got the same score of: ' + teamX_avgScore);
}



// 