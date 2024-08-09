let firstNum = document.getElementById("firstNumber");
let secondNum = document.getElementById("secondNumber");
let input = document.getElementById("userInput");
let resultMessage = document.getElementById("printMessage");

let wrongInputMessage = "Please, try again!";
let emptyInputMessage = "Please give the answer first";
let correctInputMessage = "Great job! You're correct!";

let firstRandomNum = Math.round(Math.random() * 100);
let secondtRandomNum = Math.round(Math.random() * 100);

firstNum.textContent = firstRandomNum;
secondNum.textContent = secondtRandomNum;

// console.log(input.value)
function checkAddition() {
    if(input.value === "") {
        resultMessage.textContent = emptyInputMessage;
        resultMessage.style.backgroundColor = "#e65252";
        resultMessage.style.color = "white";
    } else {
        let userAnswer = parseInt(input.value);
        let correctAnswer = firstRandomNum + secondtRandomNum;
        if(correctAnswer === userAnswer) {
            resultMessage.textContent = correctInputMessage;
            resultMessage.style.backgroundColor = "#05a88a";
            resultMessage.style.color = "white";
        } else {
            resultMessage.textContent = wrongInputMessage;
            resultMessage.style.backgroundColor = "#e65252";
            resultMessage.style.color = "white";
        }
    }
}

function restartAddition() {
    input.value = "";
    firstRandomNum = Math.round(Math.random() * 100);
    secondtRandomNum = Math.round(Math.random() * 100);
    firstNum.textContent = firstRandomNum;
    secondNum.textContent = secondtRandomNum;
    resultMessage.textContent = "";
    resultMessage.style.backgroundColor = "#60c2ff";
}