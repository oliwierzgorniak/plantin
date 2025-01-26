const handleMenu = () => {
  const $openButton = document.querySelector(".header__open-button");
  const $mobileMenu = document.querySelector(".header__mobile-nav");
  $openButton.addEventListener("click", () => {
    $mobileMenu.style.transform = "translateX(0)";
  });
  const $closeButton = document.querySelector(".header__close-button");
  $closeButton.addEventListener("click", () => {
    $mobileMenu.style.transform = "translateX(100%)";
  });
};

export default handleMenu;
