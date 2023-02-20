document.getElementById('btnCalc').addEventListener('click', function(e) {
    e.preventDefault();
    doCalculation();
});

function doCalculation() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let op = document.getElementById('op').value;

    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        alert('The operands must be numbers!');
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    let result = 0;
    if (op === "+") {
        result = num1 + num2;
    } else if (op === "-") {
        result = num1 - num2;
    } else if (op === "*") {
        result = num1 * num2;
    } else if (op === '/') {
        result = num1 / num2;
    }

    document.getElementById('result').innerHTML = result;
}