// ---------- shared form checks ----------
// Loaded by contact.html, quote.html and portal/login.html before their own script.
// Each function returns true when the text looks right and false when it does not.

// name: at least 2 characters and no digits
function nameLooksRight(text) {
  text = text.trim();
  if (text.length < 2) {
    return false;
  }
  for (var i = 0; i < text.length; i++) {
    if ("0123456789".indexOf(text.charAt(i)) != -1) {
      return false;
    }
  }
  return true;
}

// phone: only digits, spaces and + - ( ), with 7 to 13 digits in total
function phoneLooksRight(text) {
  var digits = 0;
  for (var i = 0; i < text.length; i++) {
    var letter = text.charAt(i);
    if ("0123456789".indexOf(letter) != -1) {
      digits = digits + 1;
    } else if (" +-()".indexOf(letter) == -1) {
      return false;
    }
  }
  return digits >= 7 && digits <= 13;
}

// email: one "@" with text before it, a dot after it with text on both sides, no spaces
function emailLooksRight(text) {
  var at = text.indexOf("@");
  var lastDot = text.lastIndexOf(".");
  if (at < 1) {
    return false;
  }
  if (text.indexOf("@", at + 1) != -1 || text.indexOf(" ") != -1) {
    return false;
  }
  return lastDot > at + 1 && lastDot < text.length - 1;
}
