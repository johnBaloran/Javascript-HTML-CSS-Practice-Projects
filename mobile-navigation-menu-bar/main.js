// ============= MENU SHOW Y HIDDEN ==================
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");
/*SHOW*/
toggleMenu.addEventListener("click", () => {
  console.log("clicked");

  navMenu.classList.toggle("show");
});
/*HIDDEN*/
closeMenu.addEventListener("click", () => {
  console.log("clicked");
  navMenu.classList.toggle("show");
});

// ============= ACTIVE AND REMOVE MENU ==================
const navLink = document.querySelectorAll(".nav__link");
console.log(navLink);

function linkAction(e) {
  // Active link
  navLink.forEach((link) => link.classList.remove("active"));
  e.target.classList.add("active");

  //   Remove menu mobile
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
