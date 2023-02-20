let wins = 0;
let losses = 0;

for (;;) {
    let number = Math.floor(Math.random() * 10) + 1;
    let guess = prompt('Guess a number between 1 and 10. Type x to stop.');
    
    if (guess === 'x' || guess === 'X') {
        break;
    } else if (isNaN((guess)) || guess < 1 || guess > 10) {
        alert('Invalid input! You can enter numbers from 1 to 10, or "x"');
        continue;
    }

    guess = Number(guess);

    if (number === guess) {
        wins++;
        message = 'Congratulations, you guessed!';
    } else {
        losses++;
        message = 'You didn\'t guess this time!';
    }
    
    alert(`I chose ${number}, you guessed ${guess}. ${message} \n Wins: ${wins}, Losses: ${losses}`);
}
