/* // get deposit button and and add event
document.getElementById("btn-deposit").addEventListener("click", function () {
  // get user input
  const newDepositField = document.getElementById("deposit-field");
  const newDepositString = newDepositField.value;
  const newDepositAmount = parseFloat(newDepositString);

  // clear user input
  newDepositField.value = "";

  // validation for empty value
  if (isNaN(newDepositAmount)) {
    alert("Deposit amount can't be empty");
    return;
  }

  // validation for negative value
  if (newDepositAmount <= 0) {
    alert("You have to enter positive amount");
    return;
  }

  // get previous total balance
  const previousTotalBalance = document.getElementById("balance-amount");
  const previousTotalString = previousTotalBalance.innerText;
  const previousTotalAmount = parseFloat(previousTotalString);

  // get previous total deposit
  const previousTotalDeposit = document.getElementById("deposit-amount");
  const previousDepositString = previousTotalDeposit.innerText;
  const previousDepositAmount = parseFloat(previousDepositString);

  // calculate new total deposit
  const currentTotalDeposit = previousDepositAmount + newDepositAmount;

  // set current total deposit
  previousTotalDeposit.innerText = currentTotalDeposit.toFixed(2);

  // calculate current total balance
  const currentTotalBalance = previousTotalAmount + newDepositAmount;

  // set current total balance
  previousTotalBalance.innerText = currentTotalBalance.toFixed(2);
}); */

// optimized way by function call
// get deposit button and and add event
document.getElementById("btn-deposit").addEventListener("click", function () {
  // get user input
  const newDepositAmount = getInputValue("deposit-field");

  // get previous total deposit
  const previousTotalDeposit = getPreviousValue("deposit-amount");

  // get previous total balance
  const previousTotalBalance = getPreviousValue("balance-amount");

  // calculate current total deposit
  const currentTotalDeposit = previousTotalDeposit + newDepositAmount;

  // calculate current total balance
  const currentTotalBalance = previousTotalBalance + newDepositAmount;

  // set current total deposit
  setCurrentValue("deposit-amount", currentTotalDeposit);

  // set current total balance
  setCurrentValue("balance-amount", currentTotalBalance);
});
