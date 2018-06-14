let listOfHiddenItems = document.querySelectorAll(".initial-hidden");

let viewButton = document.querySelector(".view-button");
let isClicked = false;

function showHidden() {
  console.log("clicky");
  if (!isClicked) {
    for (let i = 0; i < listOfHiddenItems.length; i++) {
      listOfHiddenItems[i].className = "product-item show";
      handleShow();
    }
  } else {
    let listOfShownItems = document.querySelectorAll(".show");
    for (let i = 0; i < listOfShownItems.length; i++) {
      listOfShownItems[i].className = "product-item initial-hidden";
    }
    viewButton.textContent = "Show More";
    isClicked = false;
  }
}

function handleShow() {
  let listOfShownItems = document.querySelectorAll(".show");
  if (listOfShownItems.length === 3) {
    isClicked = true;
    viewButton.textContent = "Show Less";
  }
}

viewButton.addEventListener("click", showHidden);
