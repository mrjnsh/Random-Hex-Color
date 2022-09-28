let colorCode = document.querySelector(".color");
let button = document.querySelector(".btn");
let body = document.querySelector(".container");

button.addEventListener("click", () => {
  let hex = Math.random().toString(16).substring(2, 8);
  colorCode.innerHTML = "#" + hex;
  body.style.backgroundColor = "#" + hex;
});
