const handleLoader = () => {
  window.addEventListener("DOMContentLoaded", () => {
    const $loader = document.querySelector(".loader");
    console.log($loader);
    $loader.classList.add("hidden");
  });
};

export default handleLoader;
