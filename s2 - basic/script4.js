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

