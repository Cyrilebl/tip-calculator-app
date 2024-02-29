// Change reset button aspect
function resetButtonAspect() {
  if (bill.value !== "" || people.value !== "") {
    reset.style.background = "hsl(172, 67%, 45%)";
    reset.style.opacity = "1";
  } else {
    reset.style.background = "";
    reset.style.opacity = "";
  }
}

// Error if input === "0"
function inputAspect() {
  let errorBill = document.querySelector(".bill-error");
  let errorPeople = document.querySelector(".people-error");

  if (bill.value === "0") {
    bill.style.border = "2px solid red";
    errorBill.style.display = "block";
  } else {
    bill.style.border = "";
    errorBill.style.display = "none";
  }

  if (people.value === "0") {
    people.style.border = "2px solid red";
    errorPeople.style.display = "block";
  } else {
    people.style.border = "";
    errorPeople.style.display = "none";
  }
}

function calculateTipPerPerson() {
  let totalTip = parseFloat(totalAmount.textContent);
  let numberOfPeople = parseInt(people.value);

  let calculatedTipPerPerson = totalTip / numberOfPeople;

  tipAmount.textContent = calculatedTipPerPerson.toFixed(2);
}

function calculateTotalTipBtn(clickedButton) {
  let tipPercentage = parseFloat(clickedButton.textContent) / 100;
  let calculatedTip = bill.value * tipPercentage;

  totalAmount.textContent = calculatedTip.toFixed(2);

  calculateTipPerPerson();
}

function calculateTotalTipCustom(tipCustom) {
  let customTipPercentage = parseFloat(tipCustom.value) / 100;
  let calculatedTip = bill.value * customTipPercentage;

  totalAmount.textContent = calculatedTip.toFixed(2);

  calculateTipPerPerson();
}

// Left input
let bill = document.getElementById("bill");
let people = document.getElementById("people");

// Reset button
let reset = document.querySelector(".right button");

// Tip button
let tipButtons = document.querySelectorAll(".tip-percentage button");
// Tip custom
let tipCustom = document.getElementById("custom");

// Total tip
let tipAmount = document.querySelector(".tip-person");
let totalAmount = document.querySelector(".total-person");

bill.addEventListener("input", () => {
  bill.value = bill.value.slice(0, 6);

  resetButtonAspect();
  inputAspect();
});

people.addEventListener("input", () => {
  people.value = people.value.slice(0, 2);

  resetButtonAspect();
  inputAspect();
});

tipButtons.forEach(function (tipButton) {
  tipButton.addEventListener("click", function () {
    tipCustom.value = "";
    calculateTotalTipBtn(this);
  });
});

tipCustom.addEventListener("input", function () {
  tipCustom.value = tipCustom.value.slice(0, 2);

  calculateTotalTipCustom(this);
});

// Configuration reset button
reset.addEventListener("click", (event) => {
  event.preventDefault();

  bill.value = "";
  people.value = "";
  tipCustom.value = "";
  tipAmount.textContent = "0.00";
  totalAmount.textContent = "0.00";
});
