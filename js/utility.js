// get user input
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldString);

  // clear user input
  inputField.value = "";

  // validation for empty and negative value
  if (isNaN(inputFieldValue) || inputFieldValue <= 0) {
    alert("Please enter a positive amount");
    return 0;
  }
  return inputFieldValue;
}

// get previous value
function getPreviousValue(elementId) {
  const previousTotal = document.getElementById(elementId);
  const previousTotalString = previousTotal.innerText;
  const previousTotalValue = parseFloat(previousTotalString);
  return previousTotalValue;
}

// set current value
function setCurrentValue(elementId, currentValue) {
  const currentTotal = document.getElementById(elementId);
  currentTotal.innerText = currentValue.toFixed(2);
}
