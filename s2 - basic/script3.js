// video 17 - functions.


function calculateAge(birthYear) {
    return 2020 - birthYear;
}

//calculateAge(1979);

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);



//

function yr2Retirement(birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}    

yr2Retirement(1990, 'David');
yr2Retirement(1941, 'Jason');
yr2Retirement(2021, 'Teddy');



// practice

function buyMilk(bottles) {
    var priceBottle = 1.2
    var totalPrice = (bottles * priceBottle);
    console.log(bottles + ' bottles of milk will cost £ ' + totalPrice + '.');
}

buyMilk(3);



// video 18 - function stmt and expressions.

// function expression
var whatDoYouDo = function (job, firstName) {
    //code...
}


// function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches how to programme.';
        case 'driver':
            return firstName + ' drives a taxi.';
        case 'designer':
            return firstName + ' designs beautiful website.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('driver', 'Mary'));
console.log(whatDoYouDo('teacher', 'Andy'));
console.log(whatDoYouDo('designer', 'Leon'));
console.log(whatDoYouDo('police', 'Jackie'));


//
