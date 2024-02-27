function validateNumberInput() {
  let input = document.getElementById("quantity");
  let min = parseInt(input.min, 1);
  let max = parseInt(input.max, 10);
  let value = parseInt(input.value, 10);

  if (isNaN(value) || value < min) {
    input.value = min;
  } else if (value > max) {
    input.value = max;
  }
}
