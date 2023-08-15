// get withdraw button and and add event
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get user input
  const newWithdrawAmount = parseFloat(
    document.getElementById("withdraw-field").value
  );

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
  const previousTotalBalance = parseFloat(
    document.getElementById("balance-amount").innerText
  );

  // validation for less balance amount
  if (newWithdrawAmount > previousTotalBalance) {
    alert("You don't have sufficient balance");
    return;
  }

  // get previous total withdraw
  const previousTotalWithdraw = parseFloat(
    document.getElementById("withdraw-amount").innerText
  );

  // calculate new total withdraw
  const currentWithdrawTotal = newWithdrawAmount + previousTotalWithdraw;

  // set current total withdraw
  document.getElementById("withdraw-amount").innerText =
    currentWithdrawTotal.toFixed(2);
  /*  previousTotalWithdraw.innerText = currentWithdrawTotal.toFixed(2); */

  // calculate current total balance
  const currentTotalBalance = previousTotalBalance - newWithdrawAmount;

  // set current total balance
  document.getElementById("balance-amount").innerText =
    currentTotalBalance.toFixed(2);
  /*  previousTotalBalance.innerText = currentTotalBalance.toFixed(2); */

  // clear the user input
  document.getElementById("withdraw-field").value = "";
  /* newWithdrawAmount = ""; */
});
