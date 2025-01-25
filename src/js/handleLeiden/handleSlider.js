const handleSlider = () => {
  const $phone = document.querySelector(".leiden__slider-icon");

  let isPressed = false;
  $phone.addEventListener("touchstart", () => {
    isPressed = true;
  });

  $phone.addEventListener("touchend", () => {
    isPressed = false;
  });

  const $sliderContainer = document.querySelector(".leiden__slider-container");
  $phone.addEventListener("touchmove", (e) => {
    if (!isPressed) return;

    const x = e.touches[0].clientX;
    // asked AI for how to get the offset of the container
    const containerSpecs = $sliderContainer.getBoundingClientRect();
    const containerWidthString =
      window.getComputedStyle($sliderContainer).width;
    const containerWidth = +containerWidthString.substring(
      0,
      containerWidthString.length - 2
    );
    const offset = containerSpecs.left;
    let translateX = x - offset - $phone.offsetWidth / 2;
    translateX = translateX < 0 ? 0 : translateX;
    translateX =
      translateX > containerWidth - $phone.offsetWidth
        ? containerWidth - $phone.offsetWidth
        : translateX;

    $phone.style.transform = `translateX(${translateX}px)`;
  });
};

export default handleSlider;
