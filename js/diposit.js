// get deposit button and and add event
document.getElementById("btn-deposit").addEventListener("click", function () {
  // get user input
  const newDepositAmount = parseFloat(
    document.getElementById("deposit-field").value
  );

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
  const previousTotalBalance = parseFloat(
    document.getElementById("balance-amount").innerText
  );

  // get previous total deposit
  const previousTotalDeposit = parseFloat(
    document.getElementById("deposit-amount").innerText
  );

  // calculate new total deposit
  const currentTotalDeposit = previousTotalDeposit + newDepositAmount;

  // set current total deposit
  document.getElementById("deposit-amount").innerText =
    currentTotalDeposit.toFixed(2);
  /* previousTotalDeposit.innerText = currentDepositTotal.toFixed(2); */

  // calculate current total balance
  const currentTotalBalance = previousTotalBalance + newDepositAmount;

  // set current total balance
  document.getElementById("balance-amount").innerText =
    currentTotalBalance.toFixed(2);
  /* previousTotalBalance.innerText = currentTotalBalance.toFixed(2); */

  // clear the user input given box
  document.getElementById("deposit-field").value = "";
  /* newDepositAmount = ""; */
});
