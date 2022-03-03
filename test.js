let hexValues = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let btn = document.getElementById("btn");
let body = document.querySelector("body");
let heading = document.querySelector("h1");

btn.addEventListener("click", () => {
  body.style.backgroundColor = randomColor();
  heading.innerText = randomColor();
});

function randomColor() {
  let bodyHex = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 15);
    bodyHex += hexValues[randomNum];
  }
  console.log(bodyHex);
  return bodyHex;
}
