// get withdraw button and and add event
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get user input
  const newWithdrawAmount = document.getElementById("withdraw-field");

  // get previous total withdraw
  const previousTotalWithdraw = document.getElementById("withdraw-amount");

  // calculate new total withdraw
  const currentWithdrawTotal =
    parseFloat(previousTotalWithdraw.innerText) +
    parseFloat(newWithdrawAmount.value);

  // set current total withdraw
  previousTotalWithdraw.innerText = currentWithdrawTotal.toFixed(2);

  // get previous total balance
  const previousTotalBalance = document.getElementById("balance-amount");

  // calculate current total balance
  const currentTotalBalance =
    parseFloat(previousTotalBalance.innerText) -
    parseFloat(newWithdrawAmount.value);

  // set current total balance
  previousTotalBalance.innerText = currentTotalBalance.toFixed(2);

  // clear the user input
  newWithdrawAmount.value = "";
});
