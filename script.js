"use strict";

const navToggleButton = document.querySelector(".nav__toggle_button");
const navMenu = document.querySelector(".nav__toggle");

navToggleButton.addEventListener("click", function () {
  navMenu.classList.toggle("collapse");
});
