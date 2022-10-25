const menuIcon = document.getElementsByClassName("menu-icon")[0];
const menuSection = document.getElementsByClassName("menu-section")[0];
menuIcon.addEventListener("click", function () {
  menuSection.classList.remove("hide");
});
const backToMain = document.getElementsByClassName("menu-section__left")[0];
backToMain.addEventListener("click", function () {
  menuSection.classList.add("hide");
});
const closeMenu = document.getElementsByClassName("menu-options__close-icon")[0];
closeMenu.addEventListener("click", function () {
  menuSection.classList.add("hide");
});
