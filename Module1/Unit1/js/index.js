document.write('This is content coming from an external JS file.');

// Creating a simple variable
let myName = 'Joe';
console.log(myName);
myName = 'Keith';
console.log(myName);

// Creating a constant
const PI = 3.14159;
console.log(PI);
//PI = 22/7;

// Creating Strings
let singleQuoted = 'This is a single-quoted string.';
console.log(singleQuoted);
let doubleQuoted = "This is a double-quoted string.";
console.log(doubleQuoted);

// Escaping characters
let phrase1 = 'The golfer shouted \'four!\' as they swung their club.';
console.log(phrase1);
let phrase2 = "The golfer shouted 'four!' as they swung their club.";
console.log(phrase2);
let phrase3 = "There once was a menu from Peru,\n Who dreamt he was eating his shoe";
console.log(phrase3);

// Variable interpolation
let userName = "Alice";
console.log(`Good evening ${userName}, you have no messages.`);

// Creating Numbers
let intNum = 20; // Integer (whole)
let decNum = 20.561; // Decimal (real)
let expNum = 1.9e11; // Standard form
let oxtNum = 0o10; // Octal
let hexNum = 0xAB32; // Hexadecimal
let binNum = 0b010101; // Binary

// BigInt
let sizeOfObservableUniverseKm = 879999305638000000000000n;

// Boolean
let isSunny = true;
let isRaining = false;

// Symbol
let str1 = "Call me Ishmael";
let str2 = "Call me Ishmael";
console.log('The two strings are the same: ', str1 === str2);
let sym1 = Symbol('Call me Ishmael');
let sym2 = Symbol('Call me Ishmael');
console.log('The two symbols are the same: ', sym1 === sym2);

// Undefined
let currentReading;
console.log(currentReading);
let previousReading = undefined; // Don't do this!
console.log(previousReading);

// Null
console.log('Undefined variables are the same: ', currentReading === previousReading);
let nextReading = null;
console.log('Undefined & null variables are the same: ', currentReading === nextReading);

// Typeof
console.log("userName: ", typeof userName);
console.log("decNum: ", typeof decNum);
console.log("sizeOfObservableUniverseKm: ", typeof sizeOfObservableUniverseKm);
console.log("isSunny: ", typeof isSunny);
console.log("sym1: ", typeof sym1);
console.log("currentReading: ", typeof currentReading);
console.log("nextReading: ", typeof nextReading);

// Type coercion
let num1 = 20;
let num2 = "5";
console.log(num1 * num2);
console.log(num1 + num2);

// Explicit type conversion
let num3 = 20;
let num4 = "5";
console.log(num3 + Number(num4));

let numberString = '45';
let result1 = Number(numberString)
console.log('Numeric string to number', result1, typeof result1)
let invalidNumber = 'Hello';
let result2 = Number(invalidNumber)
console.log('Non-numeric string to number', result2, typeof result2)

let trueString = "true";
let boolean1 = Boolean(trueString)
console.log('trueString', boolean1, typeof boolean1)
let falsyString = null;
let boolean2 = Boolean(falsyString)
console.log('falsyString', boolean2, typeof boolean2)
let truthyString = "Hello!";
let boolean3 = Boolean(truthyString)
console.log('truthyString', boolean3, typeof boolean3)

// + operator
let kiwi = 4;
let banana = 6
let totalFruit = kiwi + banana;
console.log('Total Fruit: ', totalFruit);

let firstName = "Alice";
let lastName = "Smith";
let fullName = firstName + ' ' + lastName;
console.log('Full Name: ' + fullName);

// Common arithmetic operators
console.log('Subtraction: ', banana - kiwi);
console.log('Multiplication: ', banana * kiwi);
console.log('Division: ', banana / kiwi);

// Exponentiation
let base = 10;
let exp = 8;
console.log('10^8=', base ** exp);

// Modulus
console.log('Division: 23 / 4 = ', 23 / 4);
console.log('Modulus 23 "%" 4 = ', 23 % 4);
console.log('23 / 4 = ' + Math.floor(23 / 4) + ' r ' + 23 % 4);

// Increment & Decrement
let a = 4;
a++;
console.log(`a = ${a}`);
let b = 5;
b--;
console.log(`b = ${b}`);

// Prefix vs postfix
let c = 10;
console.log(`c = ${c}`);
console.log(`Increment: c = ${++c}`)
console.log(`Final value: c = ${c}`)
let d = 10;
console.log(`d = ${d}`);
console.log(`Increment: d = ${d++}`)
console.log(`Final value: d = ${d}`)

// Order of operation
console.log(22 + 8 / 2 + 4)
console.log((22 + 8) / 2 + 4)

// Assignment by Operation
let e = 23;
e = e + 2; // This would set e to 25
e += 2; // This would also set e to 25

// Other examples
e -= 3; // Subtraction
e *= 2; // Multiplication
e /= 2; // Division
e **= 9; // Exponentiation
e %= 3; // Modulus

// Comparison operators
let f = 10;
let g = "10";
console.log('f == g: ', f == g);
console.log('f != g: ', f != g);
console.log('f === g: ', f === g);
console.log('f !== g: ', f !== g);

// Logical operators
let v = 20;
let w = 20;
let x = 9;
let y = 10;
console.log('v === w: ', v === w);
console.log('!(v === w): ', !(v === w));
console.log('v === w && x < y: ', v === w && x < y);
console.log('v > w && x < y: ', v > w && x < y);
console.log('v > w || x < y: ', v > w || x < y);
console.log('v > w || x > y: ', v > w || x > y);

// if statement
let temp = 11;
if (temp < 10) {
    console.log('Better wear something warm!');
} else {
    console.log('Wear what you normally wear.');
}

// else if statement
temp = 15;
if (temp < -10) {
    console.log('Time to bust out the thermals!');
} else if (temp >= -10 && temp <= 11) {
    console.log('Better wrap up warm.');
} else if (temp >= 12 && temp <= 23) {
    console.log('Wear your good weather clothes.');
} else {
    console.log('Wear sunscreen and a hat, and drink plenty of water!');
}

// Conditional ternary operator
let action = temp < 23 ? 'Heat' : 'Cool';
console.log(action);

// Performing actions directly
temp < 23 ? console.log('Heat') : console.log('Cool');

// if vs switch
let grade = 'B';
if (grade === 'F' || grade === 'D') {
    console.log('You failed.');
} else if (grade == 'C') {
    console.log('You passed.');
} else if (grade == 'B') {
    console.log('You passed with merit.');
} else if (grade == 'A') {
    console.log('You passed with distinction.')
} else {
    console.log('Invalid grade assigned.');
}

switch(grade) {
    case 'F':
    case 'D':
        console.log('You failed.');
        break;
    case 'C':
        console.log('You passed.');
        break;
    case 'B':
        console.log('You passed with merit.');
        break;
    case 'A':
        console.log('You passed with distinction.');
        break;
    default:
        console.log('Invalid grade assigned.');
}

// Using fall-through
let spaPackage = 'Gold';
switch(spaPackage) {
    case 'Diamond':
        console.log('Unlimited monthly massage treatments.');
        console.log('Three days per month stay in spa hotel.');
    case 'Gold':
        console.log('Unlimited use of spa facilities.');
        console.log('Private locker.')
    case 'Silver':
        console.log('Unlimited pool access.');
}

// While loop
let h = 0;
while (h < 10) {
    console.log(`While loop. Iteration #${h}`);
    h++;
}

// Do-While loop
let j = 11;
do {
    console.log(`Do-While loop. Iteration #${j}`);
    j++;
} while (j < 10);

// For loop
for (let k = 0; k < 10; k++) {
    console.log(`For loop. Iteration #${k}`);
}

// Traversing an array
const names = ['Bob', 'Alice', 'Gemma', 'Jack', 'Logan'];

for (let n = 0; n < names.length; n++) {
    console.log(`Person number ${n} is ${names[n]}`);
}

// Using for-of
for (let name of names) {
    console.log(`Person: ${name}`);
}

// Using for-in
const person = {
    name: 'Alice',
    surname: 'Smith',
    dob: '15/09/1986',
    email: 'alice.smith@example.com'
};

for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}

// Using Object.entries
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}

// Using break in loops
const usedCars = [
    {
        description: 'Volkswagen Golf',
        year: 2018,
        colour: 'white'       
    },
    {
        description: 'Seat Ibiza',
        year: 2017,
        colour: 'black'
    },
    {
        description: 'Hyundai Ioniq 5',
        year: 2020,
        colour: 'blue'
    }
];

for (let car of usedCars) {
    if (car.colour === 'black') {
        console.log(`Found a black ${car.year} ${car.description}`);
        break;
    }
}

// Using continue in loops
for (let car of usedCars) {
    if (car.year < 2018) continue;
    console.log(`Found a ${car.colour} ${car.year} ${car.description}`);
}