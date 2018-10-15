var navMenu = document.querySelector(".main-navigation");
var toggleBtn = document.querySelector(".main-navigation__toggle");
var logo = document.querySelector(".page-header__logo");
var headerWrap = document.querySelector(".page-header__wrap");

navMenu.classList.remove("main-navigation--nojs");
headerWrap.classList.remove("page-header__wrap--nojs");

toggleBtn.addEventListener("click", function() {
  if (navMenu.classList.contains("main-navigation--closed")) {
    navMenu.classList.remove("main-navigation--closed");
    navMenu.classList.add("main-navigation--opened");
    logo.classList.remove("page-header__logo--closed");
    logo.classList.add("page-header__logo--opened");
  } else {
    navMenu.classList.remove("main-navigation--opened");
    navMenu.classList.add("main-navigation--closed");
    logo.classList.remove("page-header__logo--opened");
    logo.classList.add("page-header__logo--closed");
  }
});
