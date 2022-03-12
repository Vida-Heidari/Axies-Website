let myButton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//---------------------------- menu ------------------------------
function myFunction() {
  let myNav = document.getElementById("myTopnav");
  if (myNav.className === "navbar__nav") {
    myNav.className += "navbar__nav";
  } else {
    myNav.className = "navbar__nav";
  }
}
