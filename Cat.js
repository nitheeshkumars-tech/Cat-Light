function switchOn() {
    document.getElementById("bulbImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("mycat").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("headingElement").textContent = "Switched On"
    document.getElementById("switchOff").style.backgroundColor = " #e12d39"
    document.getElementById("switchOn").style.backgroundColor = "#cbd2d9"
}

function switchOff() {
    document.getElementById("bulbImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("mycat").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("headingElement").textContent = "Switched Off"
    document.getElementById("switchOff").style.backgroundColor = "#cbd2d9"
    document.getElementById("switchOn").style.backgroundColor = "#22c55e"
}