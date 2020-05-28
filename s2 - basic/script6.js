
// video 26 - loops

var myPets = ['Dog', 'Rabbit', 'Bird', 'Lion', 'Fish'];

for (i=0; i<myPets.length; i++) {
    console.log('I have a ' + myPets[i]);
}



// video 27 - challenge.

var p1 = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i=0; i<this.bills.length; i++) {

            // create short hand for clean code.
            var percentage;
            var bill = this.bills[i];

            // calculate percentage.
            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.10;
            }

            // add percentage to array of bills.
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill * percentage);
        }
    }
}

p1.calcTips();
console.log(p1);



// video 30 - ES5, ES6, ES2015, ES6 + 

