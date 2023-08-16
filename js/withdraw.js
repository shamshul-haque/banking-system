/* // get withdraw button and and add event
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get user input
  const newWithdrawField = document.getElementById("withdraw-field");
  const newWithdrawString = newWithdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawString);

  // clear user input
  newWithdrawField.value = "";

  // validation for empty value
  if (isNaN(newWithdrawAmount)) {
    alert("Withdraw amount can't be empty");
    return;
  }

  // validation for negative value
  if (newWithdrawAmount <= 0) {
    alert("You have to enter positive amount");
    return;
  }

  // get previous total balance
  const previousTotalBalance = document.getElementById("balance-amount");
  const previousTotalString = previousTotalBalance.innerText;
  const previousTotalAmount = parseFloat(previousTotalString);

  // validation for less balance amount
  if (newWithdrawAmount > previousTotalAmount) {
    alert("You don't have sufficient balance");
    return;
  }

  // get previous total withdraw
  const previousTotalWithdraw = document.getElementById("withdraw-amount");
  const previousWithdrawString = previousTotalWithdraw.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawString);

  // calculate new total withdraw
  const currentTotalWithdraw = previousWithdrawAmount + newWithdrawAmount;

  // set current total withdraw
  previousTotalWithdraw.innerText = currentTotalWithdraw.toFixed(2);

  // calculate current total balance
  const currentTotalBalance = previousTotalAmount - newWithdrawAmount;

  // set current total balance
  previousTotalBalance.innerText = currentTotalBalance.toFixed(2);
}); */

// optimized way by function call
// get withdraw button and and add event
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get user input by call getInput function
  const newWithdrawAmount = getInputValue("withdraw-field");

  // get previous total withdraw
  const previousTotalWithdraw = getPreviousValue("withdraw-amount");

  // get previous total balance
  const previousTotalBalance = getPreviousValue("balance-amount");

  // validation for less balance amount
  if (newWithdrawAmount > previousTotalBalance) {
    alert("You don't have sufficient balance");
    return;
  }

  // calculate current total withdraw
  const currentTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;

  // calculate current total balance
  const currentTotalBalance = previousTotalBalance - newWithdrawAmount;

  // set current total withdraw
  setCurrentValue("withdraw-amount", currentTotalWithdraw);

  // set current total balance
  setCurrentValue("balance-amount", currentTotalBalance);
});
