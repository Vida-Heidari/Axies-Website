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

//---------------------------- Mode ------------------------------
function myLightFunction() {
  const elementLight = document.body;
  elementLight.classList.remove("dark__mode");
  elementLight.classList.add("light__mode");
}

function myDarkFunction() {
  const elementDark = document.body;
  elementDark.classList.remove("light__mode");
  elementDark.classList.add("dark__mode");
}

//---------------------------- Search Button ------------------------------
document.querySelector(".search-icon").addEventListener("click", function () {
  const searchButton = document.querySelector(".navbar__search-icon");
  searchButton.classList.toggle("navbar__search-icon--open");

  const searchActive = document.querySelector(".search-btn");
  searchActive.classList.toggle("search-btn--active");
});
