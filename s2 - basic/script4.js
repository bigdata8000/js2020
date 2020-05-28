// video 19 - arrays.

var names = ['John', 'Mark', 'Jane', 'Mary'];

console.log(names[0]);          // john
console.log(names.length);      // 4

names[1] = 'Ben';               // replace Mark with Ben.
console.log(names);             // John, Ben, Jane, Mary.

names.push('Kelly');            // add Kelly to END of array
console.log(names);             // John, Ben, Jane, Mary, Kelly.

names.shift();                  // REMOVE FIRST item from array, ie remove John.
console.log(names);             // Ben, Jane, Mary, Kelly.

names.unshift('Liono');         // ADD to BEGINNING of array.
console.log(names);             // Liono, Ben, Jane, Mary, Kelly.


names.indexOf('Mary');           // 3.
names.indexOf('Cindy');          // -1. ie not in array.


// video 20 - coding challenge.

/*
    create a function to calculator tips for a meal:
    
    20% of bill when bill is less than $ 50.00
    15% when bill is between $ 50 and $ 199.00 and
    10% when bill is $ 200.00 or more.

    meals: $ 124.00 / $ 48.00 / $ 268.00

    show bill, tip, total paid.
*/

var bill = 49

if (bill < 50) {
    console.log('The bill is $' + bill + ' tip: ' + (bill * 0.2));
} else if (bill >= 50 && bill <=200) {
    console.log('The bill is $' + bill + ' tip: ' + (bill * 0.15));
} else {
    console.log('The bill is $' + bill + ' tip: ' + (bill * 0.10));
}



function tipCalc(bill) {
    if (bill < 50) {
        console.log('The bill is $' + bill + ' and I will tip: $' + (bill * 0.2));
    } else if (bill >= 50 && bill <=200) {
        console.log('The bill is $' + bill + ' and I will tip: $' + (bill * 0.15));
    } else {
        console.log('The bill is $' + bill + ' and I will tip: $' + (bill * 0.10));
    }
}


tipCalc(35);
tipCalc(110);
tipCalc(230);




function tipCalV2(bill) {
    var percentage;

    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >=50 && bill <200) {
        percentage = 0.15;
    } else {
        percentage = 0.10;
    }
    return percentage * bill; 
}


console.log(tipCalV2(10));
console.log(tipCalV2(100));
console.log(tipCalV2(300));


var bills = [124, 48, 268];
var tips = [tipCalV2(bills[0]),
            tipCalV2(bills[1]),
            tipCalV2(bills[2])];


console.log(tips);


//
