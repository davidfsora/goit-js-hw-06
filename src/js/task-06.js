let symbolsInput = document.querySelector("input");
let inputLength = document.querySelector('input[data-length="6"]');

symbolsInput.addEventListener("blur", () => {
    if(symbolsInput.value.length === Number(inputLength.dataset.length)){
        if(symbolsInput.classList.contains("invalid")){
            symbolsInput.classList.remove("invalid");
        }
        symbolsInput.classList.add("valid");
    }
    else{
        if(symbolsInput.classList.contains("valid")){
            symbolsInput.classList.remove("valid");
        }
        symbolsInput.classList.add("invalid");
    };
});
