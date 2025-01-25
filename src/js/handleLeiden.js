import { gsap } from "gsap";
import handleSlider from "./handleLeiden/handleSlider";

const handleLeiden = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".duke",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });

  const $dukePin = document.querySelector(".duke__duke-pin");
  tl.fromTo(
    $dukePin,
    {
      // AI was asked, but I had a simillar idea
      x: () => {
        const containerWidth = document.querySelector(
          ".duke__img-container"
        ).offsetWidth;
        const xPos = containerWidth * 0.35;
        return xPos - $dukePin.offsetLeft;
      },
      y: () => {
        const containerHeight = document.querySelector(
          ".duke__img-container"
        ).offsetHeight;
        const yPos = containerHeight * 0.83;
        return yPos - $dukePin.offsetTop;
      },
      ease: "power2.out",
    },
    { x: 0, y: 0 }
  );

  const $calvinsitPin1 = document.querySelector(".duke__calvinist-pin1");
  tl.fromTo(
    $calvinsitPin1,
    {
      // AI was asked, but I had a simillar idea
      x: () => {
        const containerWidth = document.querySelector(
          ".duke__img-container"
        ).offsetWidth;
        const xPos = containerWidth * 0.5;
        return xPos - $calvinsitPin1.offsetLeft;
      },
      y: () => {
        const containerHeight = document.querySelector(
          ".duke__img-container"
        ).offsetHeight;
        const yPos = containerHeight * 0.345;
        return yPos - $calvinsitPin1.offsetTop;
      },
      ease: "power2.out",
    },
    { x: 0, y: 0 }
  );

  const $calvinsitPin2 = document.querySelector(".duke__calvinist-pin2");
  tl.fromTo(
    $calvinsitPin2,
    {
      // AI was asked, but I had a simillar idea
      x: () => {
        const containerWidth = document.querySelector(
          ".duke__img-container"
        ).offsetWidth;
        const xPos = containerWidth * 0.625;
        return xPos - $calvinsitPin2.offsetLeft;
      },
      y: () => {
        const containerHeight = document.querySelector(
          ".duke__img-container"
        ).offsetHeight;
        const yPos = containerHeight * 0.42;
        return yPos - $calvinsitPin2.offsetTop;
      },
      ease: "power2.out",
    },
    { x: 0, y: 0 },
    "<"
  );
  tl.fromTo(
    ".duke__message",
    {
      y: "100vh",
    },
    {
      y: "-120%",
      duration: 5,
    }
  );
  tl.to({}, { duration: 1 });

  handleSlider();
};

export default handleLeiden;
