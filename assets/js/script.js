"use strict";

// Element toggle function
const elementToggleFunction = (e) => {
  e.classList.toggle("active");
};

// Navbar variables
const navbar = document.querySelector("[data-navbar]"),
  navbarOpenBtn = document.querySelector("[data-navbar-open-btn]"),
  navbarCloseBtn = document.querySelector("[data-navbar-close-btn]"),
  overlay = document.querySelector("[data-overlay]");

navbarOpenBtn.addEventListener("click", () => {
  elementToggleFunction(navbar);
  elementToggleFunction(overlay);
});

navbarCloseBtn.addEventListener("click", () => {
  elementToggleFunction(navbar);
  elementToggleFunction(overlay);
});

// Toggle navbar and overlay when click any navbar-link
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

navbarLinks.forEach((navbarLink) => {
  navbarLink.addEventListener("click", () => {
    elementToggleFunction(navbar);
    elementToggleFunction(overlay);
  });
});

// Header & go-top-btn active when window scroll down to 400px
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
