// ---------- copy buttons ----------
function copyText(button, text) {
  navigator.clipboard.writeText(text);
  button.innerHTML = "Copied!";
  setTimeout(resetCopyButtons, 1500);
}

function resetCopyButtons() {
  var buttons = document.getElementsByClassName("copybutton");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "Copy";
  }
}

// ---------- message form ----------
var replyWay = "Call me";

function pickReply(chip, way) {
  replyWay = way;
  var chips = document.getElementsByClassName("replychip");
  for (var i = 0; i < chips.length; i++) {
    chips[i].className = "replychip";
  }
  chip.className = "replychip on";
}

function countLetters() {
  var text = document.getElementById("message").value;
  document.getElementById("letterCount").innerHTML = text.length + " / 500";
}

function sendMessage() {
  var clientName = document.getElementById("fullName").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error = document.getElementById("formError");

  if (nameLooksRight(clientName) == false) {
    error.innerHTML = "Please enter your name (letters only, at least 2).";
    return;
  }
  if (phone == "" && email == "") {
    error.innerHTML =
      "Please enter a phone number or an email so we can reply.";
    return;
  }
  if (phone != "" && phoneLooksRight(phone) == false) {
    error.innerHTML = "That phone number does not look right. Use 7 to 13 digits.";
    return;
  }
  if (email != "" && emailLooksRight(email) == false) {
    error.innerHTML = "That email does not look right.";
    return;
  }
  if (message.trim() == "") {
    error.innerHTML = "Please write a short message.";
    return;
  }

  error.innerHTML = "";

  document.getElementById("thanksName").innerHTML = clientName;
  document.getElementById("thanksWay").innerHTML = replyWay;
  document.getElementById("formBox").style.display = "none";
  document.getElementById("thanksBox").style.display = "flex";
}

function writeAnother() {
  document.getElementById("fullName").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  countLetters();
  document.getElementById("thanksBox").style.display = "none";
  document.getElementById("formBox").style.display = "block";
}
