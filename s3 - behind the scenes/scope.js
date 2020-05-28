
// video 7 - scoping & scope chain. ie different levels.

var a = 'Hello! ';
first();                            // these are global scope.

function first() {
    var b = 'Hi! ';                 
    second();                       // this is calling a local scope

    function second() {
        var c = 'Hey! ';
        console.log(a + b + c);     // child scope can look up to parent for variables, ie scope chain.
    }
}



// ------------------------------



var a = 'Hellooo! ';
first();                            

function first() {
    var b = 'Hiii! ';                 
    second();                       

    function second() {
        var c = 'Heyyy! ';
        console.log(a + b + c);     
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);         // will only get a + d.
}



// ------------------------------