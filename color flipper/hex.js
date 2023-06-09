const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnClick = document.getElementById("btn");
const color = document.querySelector(".color");
const colorText = document.getElementById("color-text");

btnClick.addEventListener("click", () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[randomNumber()];
  }
  color.textContent = hexCode;
  document.body.style.backgroundColor = hexCode;
  colorText.style.color = hexCode
});

let randomNumber = ()=>{
    return Math.floor(Math.random() * hex.length);
}