// There are no client accounts yet, so Log in checks the boxes and then explains.

// eye button: show or hide the password
function showPassword() {
  var box = document.getElementById("loginPassword");
  var eye = document.getElementById("eyeButton");
  if (box.type == "password") {
    box.type = "text";
    eye.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
  } else {
    box.type = "password";
    eye.innerHTML = '<i class="bi bi-eye-fill"></i>';
  }
}

function forgotPassword() {
  document.getElementById("loginError").innerHTML =
    "Please call our office to reset your password: +63 962 449 5318";
}

// log in button: check the fields, then tell the person how accounts are made
function logIn() {
  var error = document.getElementById("loginError");
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  if (emailLooksRight(email) == false) {
    error.innerHTML = "Please enter the email your account was made with.";
    return;
  }
  if (password == "") {
    error.innerHTML = "Please enter your password.";
    return;
  }
  error.innerHTML =
    "No account found for that email. Our office makes accounts when your project starts.";
}
