/*
- Add a larger counter number
- The number is increased every time you click the main area of the website
-> press the enter or space key
- Add a reset button that will reset the number to 0
- Change the color of the main area behind your counter step by step everytime the counter is increased
- 100 counting steps will turn the background fully colorful
- After every 100 counting steps reset the background (see video)
*/

const resetBtn = document.querySelector(".reset-btn");
const mainEl = document.querySelector("main");
let counter = 0;
let bgCounter = 0;

// updatet Ziffer/Text und Balken
function updateTextAndBar() {
  document.getElementById("counter").innerText = counter;
  mainEl.style.background = `linear-gradient(90deg, gold ${bgCounter}%, white 0%)`;
}

// update des Main-Elements
function updateMainEl() {
  counter = counter + 1;
  bgCounter = bgCounter + 1;
  updateTextAndBar();
}

// setzt beim Wert von 100 den Balken zurück auf 0%
function resetbgCounter() {
  if (bgCounter === 100) {
    bgCounter = 0;
  }
}

// Klick Event
mainEl.addEventListener("click", () => {
  resetbgCounter();
  updateMainEl();
});

// Reset-Button
resetBtn.addEventListener("click", () => {
  counter = 0;
  bgCounter = 0;
  updateTextAndBar();
  resetbgCounter();
});

// Enter und Leertaste
document.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    updateMainEl();
  }
  resetbgCounter();
});
