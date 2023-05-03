// Creating arrays
let people = ["Alice", "Bob", "Nathan"];
console.log('Our first array: ', people);

let anotherArray = new Array(15, "Blue", true, 98.7);
console.log('Another array: ', anotherArray);

// Constant arrays
// const constArr = [9, 76, 12.2];
// constArr[1] = 86; // This is OK.
// constArr = ["Hello"]; // This won't work
 
// Accessing array values
console.log('The first student is ', people[0]);

// Accessing a non-existent value
console.log('The fourth student is ', people[3]);

// Adding or modifying values
people[2] = "Tom"; // Modifying a value
people[3] = "Sarah"; // Adding a value
people[10] = "Harry"; // Adding a value with out-of-order key
console.log(people);

// A negative key
people[-1] = "Keith"
console.log(people[-1]);
console.log(people);

// Array length
console.log('The anotherArray array contains', anotherArray.length, 'items');
console.log('The people array contains', people.length, 'items');

// Array methods - push()
let students = ["Gordon", "Josephine", "Maryanne", "Joseph"];
students.push("Gail");
console.log(students);

// Array methods - splice()
students.splice(4, 0, "Angie");
console.log(students);

// Replace Josephine with Josette using splice()
students.splice(1, 1, "Josette");
console.log(students);

// Joining arrays using concat()
let moreStudents = ["Marc", "Sharon", "Jack"];
students = students.concat(moreStudents);
console.log(students);

// Delete the last item using pop()
console.log(students);
students.pop();
console.log(students);

// Delete the first item using shift()
console.log(students);
students.shift();
console.log(students);

// Delete a value without changing keys
console.log(students);
console.log('Length: ', students.length);
delete students[0];
console.log(students);
console.log('Length: ', students.length);

// Finding elements with find()
let result = students.find(function(e) { return e === "Sharon" });
console.log(result);

// Finding value position with indexOf()
console.log('Sharon is at position', students.indexOf("Sharon"));
console.log('Tom is at position', students.indexOf("Tom"));

// Sorting with sort()
students.sort();
console.log(students);

// Reversing with reverse()
students.reverse();
console.log(students);

// A 2D Array
let contacts = [
    ["Alice", "Jones", "London"],
    ["Bob", "Barker", "New York"],
    ["Janet", "Smith", "New Delhi"],
    ["Greg", "Mortimer", "Valletta"]
];
console.log(contacts);

// Accessing an item from a 2D array
console.log(contacts[1][2]);

// A 3D Array
let studentSubjects = [
    ["Alice", "Jones", "London", ["Maths", "English", "History"]],
    ["Bob", "Barker", "New York", ["Geography", "Physics", "History"]],
    ["Janet", "Smith", "New Delhi", ["Biology", "Chemistry", "Maths"]],
    ["Greg", "Mortimer", "Valletta", ["Sociology", "Philosophy", "History"]]
];

// Printing Janet's second subject
console.log(studentSubjects[2][3][1]);

// Creating a simple object
let dog = {
    name: "Fido",
    age: 4,
    color: "tan",
    weight: 3.9,
    isChipped: true
}

// Print the dog's colour
console.log(`Fido is ${dog['color']}`);

// Print the dog's weight
console.log(`Fido weighs ${dog.weight}Kg`);

// Changing properties
dog['age'] = 5;
dog.weight = 4.1;
console.log(dog);

// Adding a nested object
dog.history = {
    fatherName: 'Rex',
    motherName: 'Sheba',
    dob: '2018-04-12',
    previousOwners: 1
};
console.log(dog);

// Adding a nested array
dog.hobbies = ["Running", "Sleeping", "Cuddles", "Eating"];
console.log(dog);

// An array of objects
let cars = [
    {
        make: "Volkswagen",
        model: "Golf",
        modelYear: 2022
    },
    {
        make: "Porche",
        model: "911 Turbo",
        modelYear: 1998
    },
    {
        make: "Kia",
        model: "Ioniq 5",
        modelYear: 2023
    },
    {
        make: "Land Rover",
        model: "Defender 90",
        modelYear: 2022,
        packs: ["Explorer", "Adventure", "Urban", {Country: {
            features: ["Rear classic mud flaps", "loadscape partition", "wheel arch protection", "portable rinse system"],
            variants: [90, 110, 130]
        }}]
    }
];
console.log(cars);

// Revising the for-of loop
for (let feature of cars[3].packs[3].Country.features) {
    console.log(`Feature: ${feature}`);
}

// Revising for for-in loop
for (let prop in cars[3]) {
    console.log(`${prop}: ${cars[3][prop]}`);
}

// Using Object.entries()
for (const [key, value] of Object.entries(cars[3])) {
    console.log(`${key}: ${value}`);
}