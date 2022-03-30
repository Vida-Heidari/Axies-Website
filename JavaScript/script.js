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
let y = window.matchMedia("(min-width: 1301px)");

document.querySelector(".search-icon").addEventListener("click", function () {
  if (y.matches) {
    const searchButton = document.querySelector(".navbar__search-icon");
    searchButton.classList.toggle("navbar__search-icon--open");

    const searchActive = document.querySelector(".search-icon");
    searchActive.classList.toggle("search-btn--active");
  }
});

// --------------------------------------------------------------------------
// const navItems = document.querySelectorAll(".nav__link");
// const navSubmenu = document.querySelectorAll(".nav__submenu");

// for (let i = 0; i < navItems.length; i++) {
//   navItems[i].addEventListener("click", function () {
//     // for (let j = 0; j < navSubmenu.length; j++) {
//     navSubmenu[i].classList.toggle("nav__submenu--open");
//     // }
//   });
// }
// //-----------------------------------
// const navSubItems = document.querySelectorAll(".nav__subitem");
// const navSubmenu2 = document.querySelectorAll(".nav__submenu2");

// for (let i = 0; i < navSubItems.length; i++) {
//   const navLink = navSubItems[i].querySelector(".nav__link");
//   navLink.addEventListener("click", function () {
//     // for (let j = 0; j < navSubmenu.length; j++) {
//     navSubmenu2[i].classList.toggle("nav__submenu2--open");
//     // }
//   });
// }
//----------------------------------------------------------------------------------------
//new
const navLinks = document.querySelectorAll(".nav__link");
let x = window.matchMedia("(max-width: 1200px)");

navLinks.forEach(function (item) {
  item.addEventListener("click", function () {
    if (x.matches) {
      if ([...item.parentNode.classList].includes("nav__item")) {
        const navSubMenu = item.parentNode.querySelector(".nav__submenu");
        navSubMenu.classList.toggle("nav__submenu--open");
      } else if ([...item.parentNode.classList].includes("nav__subitem")) {
        const navSubMenu2 = item.parentNode.querySelector(".nav__submenu2");
        navSubMenu2 && navSubMenu2.classList.toggle("nav__submenu2--open");
      }
    }
  });
});

//---------------------------------- Responsive menu button--------------------------------
const navBtn = document.querySelector("#nav-btn");
const navbar = document.querySelector(".header__navbar");
const navbarClose = document.querySelector("#nav__close-btn");

navBtn.addEventListener("click", function () {
  navbar.classList.add("header__navbar--open");
});

navbarClose.addEventListener("click", function () {
  navbar.classList.remove("header__navbar--open");
});
