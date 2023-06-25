let inputText = document.querySelector("#name-input");
let spanText = document.querySelector("#name-output");

inputText.addEventListener("input", (e) => {
    if(e.currentTarget.value === ""){
        spanText.textContent = "Anonymous";
    }
    else{
        spanText.textContent = e.currentTarget.value;
    }
});
