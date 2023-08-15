// get submit button and and add event
document.getElementById("btn-submit").addEventListener("click", function () {
  // get email address
  const email = document.getElementById("user-email").value;

  // get password
  const password = document.getElementById("user-password").value;

  // verify user
  if (email === "js.bank@gmail.com" && password === "secret") {
    location.href = "dashboard.html";
  } else {
    alert("Invalid user and password");
  }
});
