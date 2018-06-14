let price = document.querySelectorAll(".price");
let remove1 = document.querySelector(".remove1");
let remove2 = document.querySelector(".remove2");
let remove3 = document.querySelector(".remove3");
let sum = 0;
let priceArray = [];
let whichRemove;

function getPriceNum() {
  for (let i = 0; i < price.length; i++) {
    let priceNum = Number(price[i].textContent.replace("$", ""));
    priceArray.push(priceNum);
  }
  sum = priceArray.reduce(add, 0);
  console.log(sum);
}

function add(a, b) {
  return a + b;
}
getPriceNum();

function firstRemove() {
  console.log(sum);
  let thisPrice = Number(
    document.querySelectorAll(".price")[0].textContent.replace("$", "")
  );
  console.log(thisPrice);
  sum -= thisPrice;
  document.querySelectorAll(".row")[0].style.display = "none";
  document.querySelectorAll(".total-price")[0].textContent = `$${sum}`;
  emptyCart();
}
function secondRemove() {
  let thisPrice = Number(
    document.querySelectorAll(".price")[1].textContent.replace("$", "")
  );
  sum -= thisPrice;
  document.querySelectorAll(".row")[1].style.display = "none";
  document.querySelectorAll(".total-price")[0].textContent = `$${sum}`;
  emptyCart();
}
function thirdRemove() {
  let thisPrice = Number(
    document.querySelectorAll(".price")[2].textContent.replace("$", "")
  );
  sum -= thisPrice;
  document.querySelectorAll(".row")[2].style.display = "none";
  document.querySelectorAll(".total-price")[0].textContent = `$${sum}`;
  emptyCart();
}

function emptyCart() {
  if (sum <= 0) {
    let cart = document.querySelector(".shopping-cart");
    cart.innerHTML = `
    <h2> Your cart is empty.</h2><br>
    <a href="products.html" class="shopping-button">Go shopping</a>`;
    cart.style.display = "block";
    cart.style.textAlign = "center";
    cart.style.padding = "10%";
  }
}

remove1.addEventListener("click", firstRemove, false);
remove2.addEventListener("click", secondRemove, false);
remove3.addEventListener("click", thirdRemove, false);
