let inputValue = document.getElementById("font-size-control");
let textSpan = document.querySelector("#text");
textSpan.style.fontSize = inputValue.value + 'px';
inputValue.addEventListener('input', (e) => {
    textSpan.style.fontSize = e.target.value + 'px';
});
