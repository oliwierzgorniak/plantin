import { gsap } from "gsap";

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

    if (translateX == containerWidth - $phone.offsetWidth) {
      const $plantinPin = document.querySelector(".leiden__plantin-pin");
      const tl = gsap.timeline();

      const $container = document.querySelector(".leiden__call-container");
      tl.to($container, {
        opacity: 0,
        ease: "power2.out",
        onComplete: () => {
          $container.classList.add("hidden");
        },
      });

      tl.to($plantinPin, {
        x: () => {
          const containerWidth = document.querySelector(
            ".leiden__img-container"
          ).offsetWidth;
          const xPos = containerWidth * 0.14;
          return xPos - $plantinPin.offsetLeft;
        },
        y: () => {
          const containerHeight = document.querySelector(
            ".leiden__img-container"
          ).offsetHeight;
          const yPos = containerHeight * 0.4;
          return yPos - $plantinPin.offsetTop;
        },
        ease: "power2.out",
      });
    }
  });
};

export default handleSlider;
