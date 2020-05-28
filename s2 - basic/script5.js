// video 22 - objects & properties.

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Kelly'],
    isMarried: false
};

console.log(john);
console.log(john.lastName);

john.job = 'programmer';
console.log(john);

john['isMarried'] = true;
console.log(john);


//


    var jane = new Object();
    jane.name = 'Jane';
    jane.birthYear = 1980;
    jane['lastName'] = 'Smith';
    console.log(jane);


//


// video 23 - objects and methods.


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1995,
    family: ['Jane', 'Mark', 'Bob', 'Kelly'],
    job: 'Teacher',
    isMarried: false,
    calcAge: function() {
        return 2020 - this.birthYear;
    }
};

console.log(john.calcAge());


// video 24 - coding challenge.
/*
    calculate BMI for John and Mark in an object.
    BMI = mass / (height * height)
*/

var p1 = {
    fullName: 'John Smith',
    mass: 92,
    height: 195,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


var p2 = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 169,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


p1.calcBMI();
p2.calcBMI();
console.log(john, mark);



if (p1.bmi > p2.bmi) {
    console.log(p1.fullName + ' has a heigher BMI than ' + p2.fullName);
} else if (p2.bmi > p1.bmi) {
    console.log(p2.fullName + ' has a heigher BMI than ' + p1.fullName);
} else {
    console.log(p1.fullName + ' ' + p2.fullName + ' have the same BMI.');
};


// 