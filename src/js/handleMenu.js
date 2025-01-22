const handleMenu = () => {
  const $menuButtonOpen = document.querySelector(".nav__button");
  const $mobileMenu = document.querySelector(".nav__mobile-menu");
  $menuButtonOpen.addEventListener("click", () => {
    $mobileMenu.classList.add("nav__mobile-menu--open");
  });
  const $menuButtonClose = document.querySelector(".nav__mobile-menu-button");
  $menuButtonClose.addEventListener("click", () => {
    $mobileMenu.classList.remove("nav__mobile-menu--open");
  });
};

export default handleMenu;
