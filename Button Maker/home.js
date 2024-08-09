let bgColorInput = document.getElementById("bgColorContainer");
let fontColorInput = document.getElementById("fontColorContainer");
let fontSizeInput = document.getElementById("fontSizeContainer");
let fontWeightInput = document.getElementById("fontWeightcontainer");
let paddingInput = document.getElementById("paddingContainer");
let borderRadiusInput = document.getElementById("borderRadiusContainer");
let customBtn = document.getElementById("customButton");

let emptyInputMessage = "Please give the answer first";

function applyChange() {
    let bgColor = bgColorInput.value;
    let fColor = fontColorInput.value;
    let fSize = fontSizeInput.value;
    let fWeight = fontWeightInput.value;
    let pInput = paddingInput.value;
    let brInput = borderRadiusInput.value;
    customBtn.style.backgroundColor = bgColor ? bgColor : "transparent"; // Default to transparent if empty
    customBtn.style.color = fColor ? fColor : "inherit"; // Default to inherit if empty
    customBtn.style.fontSize = fSize ? fSize + "px" : "inherit"; // Default to inherit if empty
    customBtn.style.fontWeight = fWeight ? fWeight : "normal"; // Default to normal if empty
    customBtn.style.padding = pInput ? pInput + "px" : "initial"; // Default to initial if empty
    customBtn.style.borderRadius = brInput ? brInput + "px" : "0"; // Default to 0 if empty
}