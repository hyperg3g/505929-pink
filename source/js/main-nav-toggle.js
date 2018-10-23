var navMenu = document.querySelector(".main-navigation");
var toggleBtn = document.querySelector(".main-navigation__toggle");
var headerWrap = document.querySelector(".page-header__wrap");

navMenu.classList.remove("main-navigation--nojs");
headerWrap.classList.remove("page-header__wrap--nojs");

toggleBtn.addEventListener("click", function() {
  if (navMenu.classList.contains("main-navigation--closed")) {
    navMenu.classList.remove("main-navigation--closed");
    navMenu.classList.add("main-navigation--opened");
    headerWrap.classList.remove("page-header__wrap--closed");
    headerWrap.classList.add("page-header__wrap--opened");
  } else {
    navMenu.classList.remove("main-navigation--opened");
    navMenu.classList.add("main-navigation--closed");
    headerWrap.classList.remove("page-header__wrap--opened");
    headerWrap.classList.add("page-header__wrap--closed");
  }
});
