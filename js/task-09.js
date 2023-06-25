let buttonChangeColor = document.querySelector(".change-color");
let background = document.querySelector("body");
let spanText = document.querySelector(".color");

buttonChangeColor.addEventListener('click', (e)=>{
  let colorBackground = getRandomHexColor();
  background.style.backgroundColor = colorBackground;
  spanText.textContent = colorBackground;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
