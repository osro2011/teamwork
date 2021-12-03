function onMouseEnter(target) {
    for (path of document.getElementsByClassName(target)) {
        path.style.fill = "#808080"
    }
}

function onMouseLeave(target) {
    console.log("left")
    for (path of document.getElementsByClassName(target)) {
        path.style.fill= "#b3b3b3"
    }
}

function onClickSE() {
    alert("Sweden clicked.")
}

function onHoverSE() {
    document.getElementById("SE").style.fill = "#fff"
}

function onClickRU() {
    alert("Russia clicked.")
}

function onClickUS() {
    alert("United States clicked.")
}