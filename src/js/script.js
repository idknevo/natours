"use strict";

const OpenNavBtn = document.querySelector(".navigation__button");
const navigationEl = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation__link");
const popupWindow = document.querySelector(".popup");
const openPopupBtns = document.querySelectorAll(`[href="#popup"]`);
const closePopupBtn = document.querySelector(".popup__close");
const popupBtn = document.querySelector(".popup__btn");
const popupOverlay = document.querySelector(".popup__overlay");

// OPENING and CLOSING navigation
OpenNavBtn.addEventListener("click", function () {
  navigationEl.classList.toggle("nav__open");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && navigationEl.classList.contains("nav__open")) {
    navigationEl.classList.remove("nav__open");
  }
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (navigationEl.classList.contains("nav__open")) {
      navigationEl.classList.remove("nav__open");
    }
  });
});

// OPENING and CLOSING popup
openPopupBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    popupWindow.classList.add("popup-open");
  });
});

closePopupBtn.addEventListener("click", function () {
  popupWindow.classList.remove("popup-open");
});

popupBtn.addEventListener("click", function () {
  popupWindow.classList.remove("popup-open");
});

popupOverlay.addEventListener("click", function () {
  popupWindow.classList.remove("popup-open");
});
