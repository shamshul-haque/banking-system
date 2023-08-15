document.getElementById("btn-submit").addEventListener("click", function () {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-password").value;
  // Warning: We will verify user in server side.
  if (email === "js.bank@gmail.com" && password === "secret") {
    console.log("valid");
  } else {
    console.log("invalid");
  }
});
