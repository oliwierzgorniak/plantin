import handleMove from "./handleSlider/handleMove";

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
    handleMove(x, $phone, $sliderContainer);
  });

  $phone.addEventListener("mousedown", () => {
    isPressed = true;
  });

  $phone.addEventListener("mouseup", () => {
    isPressed = false;
  });

  $phone.addEventListener("mousemove", (e) => {
    if (!isPressed) return;

    const x = e.clientX;
    handleMove(x, $phone, $sliderContainer);
  });
};

export default handleSlider;
