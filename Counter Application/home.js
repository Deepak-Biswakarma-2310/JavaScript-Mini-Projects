let value = parseInt(document.getElementById("value").textContent);
let counter = value;
function decreaseValue() {
    counter--;
    document.getElementById("value").textContent = counter;
    document.getElementById("value").style.color = 'rgb(253, 82, 82)';
}

function increaseValue() {
    counter++;
    document.getElementById("value").textContent = counter;
    document.getElementById("value").style.color = 'rgb(8, 149, 8)';
}

function resetValue() {
    document.getElementById("value").textContent = 0;
    counter = 0;
    document.getElementById("value").style.color = 'rgb(0, 133, 190)';
}