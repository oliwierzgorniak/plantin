import { gsap } from "gsap";

const handleMove = (x, $phone, $sliderContainer) => {
  // asked AI for how to get the offset of the container
  const containerSpecs = $sliderContainer.getBoundingClientRect();
  const containerWidthString = window.getComputedStyle($sliderContainer).width;
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
        const xPos = containerWidth * 0.043;
        return xPos;
      },
      y: () => {
        const containerHeight = document.querySelector(
          ".leiden__img-container"
        ).offsetHeight;
        const yPos = containerHeight * -0.165;
        return yPos;
      },
      ease: "power2.out",
    });
  }
};

export default handleMove;
