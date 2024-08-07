let image = document.getElementById("image");
let imageWidth = document.getElementById("imageWidth");
let imageWaringMessage = document.getElementById("warningMessage");

let maxImageWidth = 300;
let minImageWidth = 200;
let defaultImageWidth = 200;

let maxWidthWarningMeassage = "Too big, decrease the size of the image!";
let minWidthWarningMeassage = "Can't visible, increase the size of the image!";

image.style.width = defaultImageWidth + "px";
imageWidth.textContent = defaultImageWidth + "px";

function onIncrement() {
    if(defaultImageWidth >= maxImageWidth) {
        imageWaringMessage.textContent = maxWidthWarningMeassage;
        imageWaringMessage.style.color = "#020617";
    } else {
        defaultImageWidth += 5;
        let updatedImageWidth = defaultImageWidth + "px";
        imageWaringMessage.textContent = "";
        image.style.width = updatedImageWidth;
        imageWidth.textContent = updatedImageWidth;
    }
}

function onDecrement() {
    if(defaultImageWidth <= minImageWidth) {
        imageWaringMessage.textContent = minWidthWarningMeassage;
        imageWaringMessage.style.color = "#020617";
    } else {
        defaultImageWidth -= 5;
        let updatedImageWidth = defaultImageWidth + "px";
        imageWaringMessage.textContent = "";
        image.style.width = updatedImageWidth;
        imageWidth.textContent = updatedImageWidth;
    }
}