let actionWords = [
  "creativity",
  "Warehouse",
  "design",
  "everything",
  "style",
  "your lifestyle",
  "yourself"
];
let actionWordP = document.querySelector(".changing-description");
let count = 0;
function changeActionWord() {
  if (count == actionWords.length - 1) {
    actionWordP.textContent = actionWords[count];
    count = 0;
  } else {
    actionWordP.textContent = actionWords[count];
    count++;
  }
}
changeActionWord();
setInterval(changeActionWord, 5000);
