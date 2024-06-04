/* Events */
function devents() {
  document.getElementById("eventsdrp").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn2')) {
  var myDropdown = document.getElementById("eventsdrp");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

/* Links */
function dlinks() {
  document.getElementById("linksdrp").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn2')) {
  var myDropdown = document.getElementById("linksdrp");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

/* Liq */
function dliq() {
  document.getElementById("liqdrp").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn2')) {
  var myDropdown = document.getElementById("liqdrp");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

/* About */
function dabout() {
  document.getElementById("aboutdrp").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn2')) {
  var myDropdown = document.getElementById("aboutdrp");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

/* Support */
function dsupport() {
  document.getElementById("supportdrp").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn2')) {
  var myDropdown = document.getElementById("supportdrp");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

/* Legal */
function dlegal() {
  document.getElementById("legaldrp").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn2')) {
  var myDropdown = document.getElementById("legaldrp");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
