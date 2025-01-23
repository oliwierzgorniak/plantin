const handleMenu = () => {
  const $openButton = document.querySelector(".header__open-button");
  const $mobileMenu = document.querySelector(".header__mobile-nav");
  $openButton.addEventListener("click", () => {
    $mobileMenu.classList.add("header__mobile-nav--open");
  });
  const $closeButton = document.querySelector(".header__close-button");
  $closeButton.addEventListener("click", () => {
    $mobileMenu.classList.remove("header__mobile-nav--open");
  });
};

export default handleMenu;
