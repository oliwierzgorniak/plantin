const removeNoJsClass = () => {
  const $mobileMenu = document.querySelector(".header__mobile-nav");
  $mobileMenu.classList.remove("header__mobile-nav--no-js");
};

export default removeNoJsClass;
