/*
    Repetition
*/

var coders = [
    'Gwen', 'Brison', 'Angela',
    'Rhiannon', 'Sam', 'Kevin',
    'Carlos', 'Rodney', 'Jayson',
    'Titi', 'Precious', 'Devonte', 
    'Ettamarie'
];

console.log('Good evening, ' + coders[0]);
console.log('Good evening, ' + coders[1]);
console.log('Good evening, ' + coders[2]);
console.log('Good evening, ' + coders[3]);
console.log('Good evening, ' + coders[4]);
console.log('Good evening, ' + coders[5]);
console.log('Good evening, ' + coders[6]);
console.log('Good evening, ' + coders[7]);
console.log('Good evening, ' + coders[8]);


console.clear();

/*
    Looping
    for, while, forEach

    for loop
    syntax =>
    for(initialization; codition; iteration) {
        DO STUFFFFFFF!
    }
*/

var coders = [
    'Gwen', 'Brison', 'Angela',
    'Rhiannon', 'Sam', 'Kevin',
    'Carlos', 'Rodney', 'Jayson',
    'Titi', 'Precious', 'Devonte', 
    'Ettamarie'
];

for(var count = 0; count < coders.length; count++) {
    var message = count + ' Good evening, ' + coders[count];
    console.log(message);
}

//iterator is an increment up by one and a decrement is down by one

var a = 1;
console.log(a); //1

a = ++a;
console.log(a); //2

a = ++a;
console.log(a); //3

a = --a;
console.clear()
console.log(a); //2

//count every other number
for(var count = 1; count <= 10; count+=2){
    console.log(count);
};

//augmented addition => count = count + 2;
var b = 1;

b = b + 5; //6
b+=6;//73 and 74 are the same thing

var creditCardsOnFile = 700;
creditCardsOnFile = creditCardsOnFile - 300;//this leaves wayyyy too much room for error

creditCardsOnFile-=300;//augmented subtraction

/*
    While Loops

    syntax =>
    whilte(codition) {
        do stuff
        stop doing stuff
    }
*/
console.clear();
var c = 1;

while(c < 10) {
    console.log(c);
    c++;
}

/*
var c = 1;
while(c < 10){
    c = 1;
    console.log(c);
    c++;
}
*/


/*
    forEach Loop => used specifically for arrays

    syntax=>
    arrName.forEach(item => do stuff) {
        do stuff
    }
*/

coders.forEach(coder => console.log('Goodbye '+ coder));

//while loop example below
var i = 0;
while(i < coders.length) {
    console.log('Hello, ' + coders[i]);
    i++;
}


//Try on your own: Create an array of 10 numbers(any numbers). Loop through the array and console whether the number is odd or even