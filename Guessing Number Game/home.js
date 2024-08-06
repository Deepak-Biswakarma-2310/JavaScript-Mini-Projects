const input = document.getElementById("userInput");
const randomNum = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessNum = parseInt(input.value);

    // Check if guessNum is a valid number
    if (isNaN(guessNum)) {
        document.getElementById("gameResult").style.backgroundColor = "#f31f1f";
        document.getElementById("gameResult").textContent = "Enter only Number";
    } else if (guessNum === randomNum) {
        document.getElementById("gameResult").style.backgroundColor = "green";
        document.getElementById("gameResult").textContent = "Congratulations! You got It right.";
    } else if (guessNum > randomNum) {
        document.getElementById("gameResult").style.backgroundColor = "#032648";
        document.getElementById("gameResult").textContent = "Too high! Try again";
    } else if (guessNum < randomNum) {
        document.getElementById("gameResult").style.backgroundColor = "#032648";
        document.getElementById("gameResult").textContent = "Too low! Try again";
    }
}

window.onload = function() {
    input.value = '';
};