let counterValue = 0;
let display = document.querySelector("#value");
let buttonMinus = document.querySelector("button");
let buttonAdd = document.querySelector("#counter").lastElementChild;

buttonAdd.addEventListener("click", (e) => {
    counterValue = counterValue+1;
    display.innerText = counterValue;
});

buttonMinus.addEventListener("click", (e) => {
    counterValue = counterValue-1;
    display.innerText = counterValue;
});
