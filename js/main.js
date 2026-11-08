// ---------- gold band: moves at a steady speed ----------
var bandText = document.getElementById("bandText");
var bandPosition = 0;

function moveBand() {
  bandPosition = bandPosition - 2;
  if (bandPosition < -(bandText.scrollWidth / 3)) {
    bandPosition = 0;
  }
  bandText.style.marginLeft = bandPosition + "px";
}

setInterval(moveBand, 20);

// ---------- services: the cards stack up and shrink a little as you scroll ----------
var stackCards = document.getElementsByClassName("stackcard");

function stackEffect() {
  for (var i = 0; i < stackCards.length - 1; i++) {
    var myTop = stackCards[i].getBoundingClientRect().top;
    var nextTop = stackCards[i + 1].getBoundingClientRect().top;
    var gap = nextTop - myTop;
    var fullGap = stackCards[i].offsetHeight + 40;
    var scale = 1;
    if (gap < fullGap) {
      scale = 0.94 + (0.06 * (gap - 14)) / (fullGap - 14);
    }
    if (scale < 0.94) {
      scale = 0.94;
    }
    stackCards[i].style.transform = "scale(" + scale + ")";
  }
}


window.onscroll = stackEffect;

// ---------- reviews: copy the cards so the loop never ends ----------
var track1 = document.getElementById("track1");
var track2 = document.getElementById("track2");
track2.innerHTML = track1.innerHTML + track1.innerHTML + track1.innerHTML;
track1.innerHTML = track1.innerHTML + track1.innerHTML + track1.innerHTML;

// ---------- copy phone number ----------
function copyPhone(button) {
  navigator.clipboard.writeText("+63 962 449 5318");
  button.innerHTML = "Copied!";
  setTimeout(resetCopyButtons, 1500);
}

function resetCopyButtons() {
  var buttons = document.getElementsByClassName("copybutton");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "Copy";
  }
}
