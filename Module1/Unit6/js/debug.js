// Debugging example
function increment(myValue) {
    console.log(`Function has received: myValue = ${myValue}`);
    myValue += 5;
}

let myValue = 0;
let incBy = 5;
console.log(`Before function: myValue = ${myValue}`);
increment(myValue);
console.log(`After function: myValue = ${myValue}`);
increment(myValue);
console.log(`After second function: myValue = ${myValue}`);
increment(myValue);