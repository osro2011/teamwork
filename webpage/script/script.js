var active;

function onMouseEnter(target) {
    for (path of document.getElementsByClassName(target)) {
        path.style.fill = "#808080";
    }
}

function onMouseLeave(target) {
    for (path of document.getElementsByClassName(target)) {
        path.style.fill= "#b3b3b3";
    }
}

function setActive(country) {
    if (active != null) {
        active.classList.add("hidden");
    }
    if (document.getElementById("body").classList.contains("overflow-hidden")) {
        document.getElementById("body").classList.remove("overflow-hidden");
    }
    active = document.getElementById(country);
}

function onClickSE() {
    console.log("Sweden clicked.");
    setActive("sweden-page");
    active.classList.remove("hidden");
    
}

function onClickRU() {
    console.log("Russia clicked.")
    setActive("russia-page");
    active.classList.remove("hidden");
}

function onClickUS() {
    console.log("US clicked.")
    setActive("us-page");
    active.classList.remove("hidden");
}