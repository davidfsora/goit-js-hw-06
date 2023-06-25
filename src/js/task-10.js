let numberInput = document.querySelector("input");
let buttonCreate = document.querySelector('button[data-create]');
let buttonDestroy = document.querySelector('button[data-destroy]');
let boxElement = document.querySelector("#boxes");

buttonCreate.addEventListener("click", (e)=>{
  let numberValue = numberInput.value;
  let initialBoxSize = 30;
  let plusSize = 0;
  for (let index = 0; index < numberValue; index++) {
    let boxSize = initialBoxSize + plusSize;
    plusSize = plusSize + 10;
    let boxColor = getRandomHexColor();
    boxElement.style.position = "relative";
    boxElement.style.alignItems = "center";
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.width = boxSize +'px';
    box.style.height = boxSize +'px';
    box.style.position = "absolute";
    box.style.borderRadius = "50%";
    box.style.backgroundColor = boxColor;
    boxElement.prepend(box);
  }
});

buttonDestroy.addEventListener("click", (e)=>{
  let elementsToDestroy = document.querySelectorAll(".box");
  elementsToDestroy.forEach(element => {
    element.remove();
  });    
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
