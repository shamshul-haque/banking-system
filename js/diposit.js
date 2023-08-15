// get deposit button and and add event
document.getElementById("btn-deposit").addEventListener("click", function () {
  // get user input
  const newDepositAmount = document.getElementById("deposit-field");

  // get previous total deposit
  const previousTotalDeposit = document.getElementById("deposit-amount");

  // calculate new total deposit
  const currentDepositTotal =
    parseFloat(previousTotalDeposit.innerText) +
    parseFloat(newDepositAmount.value);

  // set current total deposit
  previousTotalDeposit.innerText = currentDepositTotal.toFixed(2);

  // get previous total balance
  const previousTotalBalance = document.getElementById("balance-amount");

  // calculate current total balance
  const currentTotalBalance =
    parseFloat(previousTotalBalance.innerText) +
    parseFloat(newDepositAmount.value);

  // set current balance amount
  previousTotalBalance.innerText = currentTotalBalance.toFixed(2);

  // refresh the user input given box
  newDepositAmount.value = "";
});
