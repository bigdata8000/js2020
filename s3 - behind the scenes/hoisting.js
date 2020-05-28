
// hoisting, variables and functions are moved
// to the top of their scope before
// code is executed.
  


// hoisting - function example:

calculateAge(1979);

function calculateAge(year) {
    console.log(2020 - year);
}

//calculateAge(1979);



// ------------------------------


// hoisting - variable example:

retirement(1979);

var retirement = function(year) {
    console.log('You can retire in ' + (65 - (2020 - year)) + ' years.');
}

//retirement(1979);


// ------------------------------


console.log(petName);
var petName = 'Liono';      // undefined !!!



// ------------------------------


console.log(age);
var age = 21;

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);


// ------------------------------
