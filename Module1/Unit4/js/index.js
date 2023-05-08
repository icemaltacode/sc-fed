class Dog {
    #age;
    #isChipped;

    static DOGS = [];

    constructor(name, age, color, weight, isChipped) {
        this.name = name;
        this.#age = age;
        this.color = color;
        this.weight = weight;
        this.#isChipped = isChipped;
        Dog.DOGS.push(this);
    }

    static showDogs() {
        let result = "Here is a list of all Dogs: ";
        for (let dog of Dog.DOGS) {
            result += dog.name + ' ';
        }
        return result;
    }

    getInfo() {
        return `${this.name} is a ${this.age}-year-old ${this.color} dog.
                ${this.name} weighs ${this.weight}Kg and ${this.#isChipped ? "is" : "is not"} chipped.`;
    }

    bark() {
        return "Woof!";
    }

    sleep(duration) {
        return `Sleeping for ${duration} hours`;
    }

    get age() {
        return this.#age;
    }

    set age(age) {
        if (age >= 0 && age <= 30) {
            this.#age = age;
        }
    }

    get isChipped() {
        return this.#isChipped;
    }

    set isChipped(isChipped) {
        if (typeof isChipped == "boolean") {
            this.#isChipped = isChipped;
        }
    }

    toJSON() {
        return {
            name: this.name,
            age: this.#age,
            color: this.color,
            weight: this.weight, 
            isChipped: this.#isChipped
        };
    }
}

class GuideDog extends Dog {
    constructor(name, age, color, weight, isChipped, trainingLocation, guidingExperience) {
        super(name, age, color, weight, isChipped);
        this.trainingLocation = trainingLocation;
        this.guidingExperience = guidingExperience;
    }

    guide(who) {
        return `${this.name} is guiding ${who}`;
    }
}

class DetectionDog extends Dog {
    constructor(name, age, color, weight, isChipped, policeUnit, detectsClassA, detectsClassB) {
        super(name, age, color, weight, isChipped);
        this.policeUnit = policeUnit;
        this.detectsClassA = detectsClassA;
        this.detectsClassB = detectsClassB;
    }

    detectSubstances() {
        return `${this.name} is sniffing for substances`;
    }

    getInfo() {
        return super.getInfo() + `
        Belongs to ${this.policeUnit}. 
        ${this.detectsClassA ? "Can" : "Cannot"} detect class A substances 
        and ${this.detectsClassB ? "can" : "cannot"} detect class B substances.`;
    }
}

function showMessage(message) {
    let currentContent = document.getElementById("messageArea").innerHTML;
    currentContent += `<br>${message}`;
    document.getElementById("messageArea").innerHTML = currentContent;
}

let dog1 = new Dog("Fido", 4, "tan", 3.9, true);
let dog2 = new Dog("Luna", 2, "black", 1.7, true);

showMessage(`${dog1.name} is ${dog1.age} years old.`);
showMessage(`${dog2.name} weighs ${dog2.weight}Kg.`);
showMessage(`${dog1.getInfo()}`);
showMessage(`${dog2.sleep(3)}`);

showMessage('');
showMessage(`Before: ${JSON.stringify(dog1)}`);
// dog1.age = 200;
// dog1.isChipped = "Bacon";
// dog1.favouriteFood = "Sausages";
dog1.age = 5;
dog1.isChipped = false;
showMessage(`After: ${JSON.stringify(dog1)}`);
console.log(dog1.age);

// Using sub-classes
rex = new DetectionDog("Rex", 3, "Black", 4.8, true, "Precinct 22", true, false);
showMessage('Created a DetectionDog instance.');
showMessage(rex.bark());
showMessage(rex.detectSubstances());
showMessage(rex.getInfo());

// Using prototypes
DetectionDog.prototype.currentAssignment = "Schiphol Airport";

DetectionDog.prototype.listDuties = function() {
    return "Sniff luggage during spot checks, alert to detected smells, and be a very good dog.";
}

harley = new DetectionDog("Harley", 4, "Tan & Black", 7.1, true, "Customs", true, true);
showMessage(harley.bark());
showMessage(harley.detectSubstances());
showMessage(harley.currentAssignment);
showMessage(harley.listDuties());

showMessage(Dog.showDogs());
