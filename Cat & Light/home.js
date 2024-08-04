function changeSwitchOn() {
    document.getElementById("bulb-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.querySelector(".switch-status").textContent = "Switched Off";
    document.getElementById("on-switch").style.backgroundColor = "green";
    document.getElementById("off-switch").style.backgroundColor = "lightblue";
}

function changeSwitchOff() {
    document.getElementById("bulb-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.querySelector(".switch-status").textContent = "Switched On";
    document.getElementById("on-switch").style.backgroundColor = "lightblue";
    document.getElementById("off-switch").style.backgroundColor = "red";
}