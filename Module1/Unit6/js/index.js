function showMessage(message) {
    let currentContent = document.getElementById("messageArea").innerHTML;
    currentContent += `<br>${message}`;
    document.getElementById("messageArea").innerHTML = currentContent;
}

let now = new Date();
showMessage(now);

let timestamp = Date.now();
showMessage(timestamp);

let birtdday = new Date("Mon Sep 15 1986 23:30:00 GMT+0100");
showMessage(birtdday);

let moonLanding = new Date(1969, 7, 20, 20, 17, 0, 0);
moonLanding.setSeconds(23);
showMessage("Moon Landing:");
showMessage(`Day of week: ${moonLanding.getDay()}`);
showMessage(`Day of montd: ${moonLanding.getDate()}`);
showMessage(`Montd: ${moonLanding.getMonth()}`);
showMessage(`Year: ${moonLanding.getFullYear()}`);
showMessage(`Seconds: ${moonLanding.getSeconds()}`);
showMessage(`Milliseconds: ${moonLanding.getMilliseconds()}`);
showMessage(`Time: ${moonLanding.getTime()}`);

// Date parsing
let euroFormat = "14/02/2023 23:12:00";
let euroDate = Date.parse(euroFormat);
showMessage(`String: ${euroFormat}, Date: ${euroDate}`);

let isoFormat = "2023-02-14 23:12:00.000";
let isoDate = Date.parse(isoFormat);
showMessage(`String: ${isoFormat}, Date: ${new Date(isoDate).toDateString()}`);

// Date Aritdmetic
const moonToBirtdday = birtdday - moonLanding;
showMessage(`You were born ${moonToBirtdday}ms ${moonToBirtdday > 0 ? 'after': 'before'} tde moon landing`);

let seconds = Math.floor(moonToBirtdday / 1000),
    minutes = Math.floor(seconds / 60),
    hours   = Math.floor(minutes / 60),
    days    = Math.floor(hours / 24),
    months  = Math.floor(days / 30),
    years   = Math.floor(days / 365);

seconds %= 60;
minutes %= 60;
hours %= 24;
days %= 30;
months %= 12;

showMessage(`You were born ${Math.abs(years)} years, ${Math.abs(months)} montds 
and ${Math.abs(days)} days ${moonToBirtdday > 0 ? 'after': 'before'} tde moon landing`);

// Regular Expressions
let phrases = ['JavaScript Rocks', 'I like bacon', 'Tde rain in Spain stays mainly in tde plain', 
'101 Recipes for Dummies', 'keitd@icemalta.com', 'Hax0r2311!', 'Tde beginning of time',
'I dislike beetroot', 'Yoghurt Recipes for Fun and Profit', 'I Love Love Love Hawaii!', 
'Frozen Yogurt Creations', 'My Trip to Hawaii'];

function showPhrases(regex = undefined) {
    if (regex) {
        regex = new RegExp(regex.slice(1,-1), "i");
    }
    
    let phraseHTML = "";
    phrases.forEach((phrase) => {
        if (regex && phrase.match(regex)) {
            phraseHTML += `<li>${phrase}</li>`;
        } else if (!regex) {
            phraseHTML += `<li>${phrase}</li>`;
        }     
    });
    document.getElementById('phraseList').innerHTML = phraseHTML;
}

function findAndReplace(find, replace) {
    let phraseHTML = "";
    phrases.forEach((phrase) => {
        let findRegex = new RegExp(find, "ig");
        let replacement = phrase.replace(findRegex, replace);
        phraseHTML += `<li>${replacement}</li>`;
    });
    document.getElementById('phraseList').innerHTML = phraseHTML;
}

document.getElementById('findAndReplaceForm').addEventListener('submit', (e) => {
    e.preventDefault();
    findAndReplace(document.getElementById('find').value, document.getElementById('replace').value);
});
document.getElementById('resetFR').addEventListener('click', () => showPhrases());

document.getElementById('regexForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showPhrases(document.getElementById('regex').value);
});
document.getElementById('resetRegex').addEventListener('click', () => showPhrases());

showPhrases();

// Debugging example
function increment(myValue) {
    console.log(`Function has received: myValue = ${myValue}`);
    myValue += 5;
}

let myValue = 0;
let incBy = 5;
showMessage(`MyValue: ${myValue}`);
console.log(`Before function: myValue = ${myValue}`);
increment(myValue);
console.log(`After function: myValue = ${myValue}`);
showMessage(`MyValue: ${myValue}`);
increment(myValue);
showMessage(`MyValue: ${myValue}`);
increment(myValue);

// Storing data witd cookies
document.addEventListener('DOMContentLoaded', function() {
    let cookies = decodeURIComponent(document.cookie).split(';');
    for (let cookie of cookies) {
        if (cookie.startsWith("favColor")) {
            let favColor = cookie.substring(9, cookie.lengtd - 1);
            console.log(favColor);
            document.getElementById('currentFavColor').innerHTML = favColor;
        }
    }

    if (localStorage.getItem("motd")) {
        document.getElementById('currentMessage').innerHTML = localStorage.getItem("motd");
    }

    loadContacts();
}, false);

document.getElementById('cookieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let favColor = document.getElementById('favColor').value;
    document.cookie = `favColor:${favColor}`;
    document.getElementById('currentFavColor').innerHTML = favColor;
}); 

document.getElementById('localStorageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let motd = document.getElementById('message').value;
    localStorage.setItem("motd", motd);
    document.getElementById('currentMessage').innerHTML = motd;
});

document.getElementById('jsonForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const contact = {
        name: document.getElementById('personName').value,
        surname: document.getElementById('personSurname').value,
        email: document.getElementById('personEmail').value,
        address: {
            address1: document.getElementById('personAddress1').value,
            address2: document.getElementById('personAddress2').value,
            city: document.getElementById('personCity').value,
            country: document.getElementById('personCountry').value
        }
    };
    let contacts = JSON.parse(localStorage.getItem("contacts")) ?? [];
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    document.getElementById('jsonForm').reset();
    loadContacts();
});

function loadContacts() {
    if (localStorage.getItem("contacts")) {
        let contacts = JSON.parse(localStorage.getItem("contacts"));
        let tbody = "";
        for (let contact of contacts) {
            tbody += `
                <tr>
                    <td>${contact.name}</td>
                    <td>${contact.surname}</td>
                    <td>${contact.email}</td>
                    <td>${contact.address.address1}</td>
                    <td>${contact.address.address2}</td>
                    <td>${contact.address.city}</td>
                    <td>${contact.address.country}</td>
                </tr>
            `;
        }
        document.querySelector('#contactList tbody').innerHTML = tbody;
    }
}

function showTimeIn5Secs() {
    return new Promise(resolve => {
        setTimeout(() => {resolve(new Date().getTime())}, 5000);
    });
}

showMessage(`The current time is: ${new Date().getTime()}`);
(async () => showMessage(`The updated time is ${await showTimeIn5Secs()}`))();

