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

function onClickSE() {
    console.log("Sweden clicked.");
    if (active != null) {
        active.classList.add("hidden");
    }
    active = document.getElementById("sweden-page");
    active.classList.remove("hidden");
    
}

function onClickRU() {
    console.log("Russia clicked.")
    if (active != null) {
        active.classList.add("hidden");
    }
    active = document.getElementById("russia-page");
    active.classList.remove("hidden");
}

function onClickUS() {
    console.log("US clicked.")
    if (active != null) {
        active.classList.add("hidden");
    }
    active = document.getElementById("us-page");
    active.classList.remove("hidden");
}