// Inspect the contents of the BOM
console.dir(window);

// Get information about the browser
console.dir(window.navigator);

// Get information about the current page URL
console.dir(window.location);

// Inspect the contents of the DOM
console.dir(document);

// Manipulate the DOM
document.getElementById('area1').innerHTML = 'Modified DIV with id: area1.';
document.getElementsByClassName('area2')[0].innerHTML = 'Modified DIV with class: area2';
document.getElementsByTagName('p')[0].innerHTML = 'Modified first paragraph by tag name.';
document.querySelector('#area3 p:nth-child(2)').innerHTML = 'Modified second paragraph with query selector';

function showMessage(message) {
    let currentContent = document.getElementById("messageArea").innerHTML;
    currentContent += `<br>${message}`;
    document.getElementById("messageArea").innerHTML = currentContent;
}

// Find the artefact
showMessage(
    document.body.children.
    artefactHunter.children.chamber3.children.key.
    getAttribute('data-msg')
);

function clickMe(e) {
    document.getElementById(e.id).innerHTML = "OK, don't do that again!";
    e.style.backgroundColor = 'yellow';
}

let buttonState = 1;
function handleButton(e) {
    buttonState = buttonState == 1 ? 2 : 1;
    e.classList.toggle('buttonState2');
    e.classList.toggle('buttonState1');
}

document.getElementById('btnChangeColor').addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.getElementById('colorArea').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});