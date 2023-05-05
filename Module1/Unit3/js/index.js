function simpleGreeting() {
    console.log('Hello there!');
}

function showMessage(message) {
    let currentContent = document.getElementById("messageArea").innerHTML;
    currentContent += `<br>${message}`;
    document.getElementById("messageArea").innerHTML = currentContent;
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1 = 10, num2 = 4) {
    return num1 - num2;
}

function countDown(from) {
    showMessage(`Countdown: ${from}`);
    if (from == 0) return;
    countDown(--from);
}

function fibonacci(count, result = []) {
    if (result.length == 0) {
        result = [1, 1];
    }
    if (result.length < count) {
        result.push(result[result.length - 1] + result[result.length - 2]);
        return fibonacci(count, result);
    }
    return result;
}

function timesTable(from, to) {
    let result = "<table border='1'>";
    result += "<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>";
    result += "<th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>";
    for (from; from <= to; from++) {
        result += `<tr><th colspan="10">${from} multiplication table</th></tr>`;
        generateMultiples();
        function generateMultiples() {
            result += "<tr>";
            for (let i=1; i <= 10; i++) {
                result += `<td>${i * from}</td>`;
            }
            result += "</tr>";
        }
    }
    result += "</table>";
    return result;
}

function greetPerson(x) {
    return `Hello, ${x}`;
}

let personGreet = x => `Hello, ${x}`;

let noArgs = () => "I have no arguments";

let twoArgs = (x, y) => `I have arguments ${x} and ${y}`;

simpleGreeting();
showMessage("Hello from a function!");
showMessage(`4 + 19 = ${add(4, 19)}`);
showMessage(`Subtract: ${sub()}`);
countDown(10);
showMessage(fibonacci(20));
showMessage(timesTable(1, 10));
showMessage(greetPerson("Bob"));
showMessage(personGreet("Alice"));

const cities = ["London", "Barcelona", "Beijing", "Perth"];
cities.forEach(e => showMessage(`${e} is a city`));

let someFunc = function () {
    console.log("I am anonymous");
};

setTimeout(() => showMessage(new Date()), 5000);
showMessage("The time will appear in 5 seconds.");

// IIFE
(function() {
    showMessage("Hello, I'm an IIFE!");
    showMessage("Now I'm done, so I will die :)");
})();

// Spread operator
let food = ['sausages', 'bacon', 'tofu', 'pasta']
let sentence = ['food', 'served', 'included', ...food, 'so', 'yummy!'];
showMessage(sentence);

function addFirstFour(a, b, c, d) {
    return a + b + c + d;
}

let myNumbers = [90, 87, 34, 32, 19, 31];
showMessage(addFirstFour(...myNumbers));

// Rest parameter
function sum(...nums) {
    total = 0;
    for (n of nums) {
        total += n;
    }
    return total;
}

showMessage(`The total is: ${sum(78, 43, 23, 25, 57)}`)

// Variable scope
function myFunction(a) {
    let b = 100;
    showMessage(`Inside the function. a: ${a}`);
    showMessage(`Inside the function. b: ${b}`);
}

let c = 50;
myFunction(c);
showMessage(`Outside the function. c: ${c}`);
//showMessage(`Outside the function. b: ${b}`);

// let vs var
function mySecondFunction() {
    if (true) {
        var x = "I am x!";
        let y = "I am y!";
    }
    showMessage(`Inside function, x: ${x}`);
    //showMessage(`Inside function, y: ${y}`);
}

mySecondFunction();

// Hoisting
function myThirdFunction() {
    showMessage(`A is ${A}`);
    //showMessage(`B is ${B}`);
    var A = "I am A";
    let B = "I am B";
}

myThirdFunction();

// const Scope
function myFourthFunction() {
    if (true) {
        const PI = 3.14159;
        showMessage(`Inside if block, PI: ${PI}`);
    }
    //showMessage(`Outside if block, PI: ${PI}`);
}

myFourthFunction();

// Global variables
let cityName = "Carlisle";
let temp = 100;

function getTemperature() {
    let temp = 0;
    showMessage(`Initial temperature is ${temp}`);

    if (cityName == "Carlisle") {
        temp = 14;
    } else if (cityName == "Valletta") {
        temp = 23;
    }
    showMessage(`Temperature in ${cityName} is ${temp}C`);
}

getTemperature();

// Implicit global variables
function pandorasBox() {
    content = "Mystical and magical things.";
    showMessage(`Inside the function. Pandora's box contains ${content}`);
}

pandorasBox();
showMessage(`Outside the function. Pandora's box contains ${content}`);
