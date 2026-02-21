let myElements = document.querySelectorAll(".child.zekr");

myElements.forEach(function (el) {
    let incButton = el.querySelector(".inc");
    let resetButton = el.querySelector(".reset");
    let counter = 0;

    incButton.innerHTML = counter;
    incButton.onclick = function() {
        counter++;
        incButton.innerHTML = counter;
    }
    resetButton.onclick = function() {
        counter = 0;
        incButton.innerHTML = counter;
    }
});