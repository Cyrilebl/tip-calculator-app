// Change reset button aspect
function resetButtonAspect() {
  if (bill.value !== "" || people.value !== "" || tipCustom.value !== "") {
    reset.style.background = "hsl(172, 67%, 45%)";
    reset.style.opacity = "1";
  } else {
    reset.style.background = "";
    reset.style.opacity = "";
  }
}

// Error if input === "0"
function inputAspect() {
  const errorBill = document.querySelector(".bill-error");
  const errorPeople = document.querySelector(".people-error");

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

// Configuration reset button
function resetAll() {
  reset.style.background = "";
  reset.style.opacity = "";

  bill.value = "";
  people.value = "";
  tipCustom.value = "";
  tipAmount.textContent = "0.00";
  totalAmount.textContent = "0.00";
  tipButtons.forEach(function (button) {
    button.style.background = "";
  });
}

// Function to calculate total tip for a clicked button
function calculateTotalTipBtn(clickedButton) {
  const tipPercentage = parseFloat(clickedButton.textContent) / 100;
  const calculatedTip = bill.value * tipPercentage;

  totalAmount.textContent = calculatedTip.toFixed(2);
}

// Function to calculate total tip for a custom value
function calculateTotalTipCustom(inputCustom) {
  const customTipPercentage = parseFloat(inputCustom.value) / 100;
  const calculatedTip = bill.value * customTipPercentage;

  totalAmount.textContent = calculatedTip.toFixed(2);
}

// Function to calculate tip per person
function calculateTipPerPerson() {
  const totalTip = parseFloat(totalAmount.textContent);
  const numberOfPeople = parseInt(people.value);

  const calculatedTipPerPerson = totalTip / numberOfPeople;

  tipAmount.textContent = calculatedTipPerPerson.toFixed(2);
}

// Left input
const bill = document.getElementById("bill");
const people = document.getElementById("people");

// Reset button
const reset = document.querySelector(".right button");

// Tip button
const tipButtons = document.querySelectorAll(".tip-percentage button");
// Tip custom
const tipCustom = document.getElementById("custom");

// Total tip
const tipAmount = document.querySelector(".tip-person");
const totalAmount = document.querySelector(".total-person");

// Configuration reset button
reset.addEventListener("click", resetAll);

bill.addEventListener("input", () => {
  let billValue = bill.value;

  billValue = billValue.replace(/[^0-9.]/g, "");
  billValue = billValue.slice(0, 10);

  resetButtonAspect();
  inputAspect();
});

people.addEventListener("input", () => {
  people.value = people.value.slice(0, 2);

  resetButtonAspect();
  inputAspect();
  calculateTipPerPerson();
});

tipButtons.forEach(function (tipButton) {
  tipButton.addEventListener("click", function () {
    tipButtons.forEach(function (button) {
      button.style.background = "";
    });
    tipButton.style.background = "hsl(172, 67%, 45%)";
    tipCustom.value = "";
    calculateTotalTipBtn(this);
  });
});

tipCustom.addEventListener("click", () => {
  tipButtons.forEach(function (button) {
    button.style.background = "";
  });
});

tipCustom.addEventListener("input", function () {
  tipCustom.value = tipCustom.value.slice(0, 2);
  resetButtonAspect();
  calculateTotalTipCustom(this);
});
