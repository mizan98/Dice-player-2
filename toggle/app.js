// alert("I am working.");
const rollButton = document.querySelector(".rollButton");
const resetButton = document.querySelector(".resetButton");
const holdButon = document.querySelector(".holdButton")

let playerOne = true;
let playerOneScore = 0;
let playerTwoScore = 0;

resetButton.style.visibility = 'hidden';

let randomRoll;

gameRestart = () => {
    playerOne = true;
    playerOneScore = 0;
    playerTwoScore = 0;
    resetButton.style.visibility = 'hidden';
}

gameLogic = () => {

    if (randomRoll == 1) {
        // playerToggle()
        if (playerOne) {
            alert(`Player one, you have lost.`)
            resetButton.style.visibility = 'visible';
        }
        else {
            alert(`Player two, you have lost.`)
            resetButton.style.visibility = 'visible';
        }
    }
    else if (playerOneScore > 20 || playerTwoScore > 20) {
        if (playerOne) {
            alert(`Player one, you have won. Shame.`)
            resetButton.style.visibility = 'visible';
        }
        else {
            alert(`Player two, you have won. Woo.`)
            resetButton.style.visibility = 'visible';
        }

    }
    
    // resetButton.style.visibility = 'visible';
    // we have a tough thing facing us
    // we have two players - so, what do we do?
}

playerToggle = () => {

    randomRoll = Math.floor(Math.random() * 6) + 1;
    gameLogic();

    if (playerOne) {
        // alert("It is player one's turn.");
        playerOneScore += randomRoll;
        // playerOneScore = playerOneScore + randomRoll;
        console.log(randomRoll);
        playerOneScore++
        alert(`This is player one's score: ${playerOneScore}`);
        // because it is true... player one has made it's turn... now make it player
        // two's turn with the line below.
        playerOne = false;
    } else {
        // alert("It is player two's turn.");
        playerTwoScore += randomRoll;
        console.log(randomRoll);
        playerTwoScore++
        alert(`This is player two's score: ${playerTwoScore}`);
        playerOne = true;
    }
    
}

rollButton.addEventListener("click", () => {
    // alert("Hello.")
    // resetButton.style.visibility = 'hidden';
    playerToggle()
})


resetButton.addEventListener("click", () => {
    gameRestart()
})

//add a hold function


// above 20 wins
// roll a 1, you lose.






// playerToggle() // true - P1
// playerToggle() // false - P2
// playerToggle() // true - P1
// playerToggle() // false - P2
// playerToggle() // true - P1
// playerToggle() // false - P2
// playerToggle() // true - P1