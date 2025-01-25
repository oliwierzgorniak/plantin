import { gsap } from "gsap";
import handleSlider from "./handleLeiden/handleSlider";

const handleChart = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".chart",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });

  const $chartImg = document.querySelector(".chart__chart");
  const $chartContainer = document.querySelector(".chart__container");
  setTimeout(() => {
    tl.to($chartContainer, {
      scrollLeft: $chartImg.clientWidth * 0.2,
      duration: 100,
    });

    tl.fromTo(
      ".chart__message1",
      {
        y: "100vh",
      },
      {
        y: "-150%",
        duration: 50,
      }
    );

    tl.to($chartContainer, {
      scrollLeft: $chartImg.clientWidth * 0.35,
      duration: 50,
    });

    tl.fromTo(
      ".chart__message2",
      {
        y: "100vh",
      },
      {
        y: "-300%",
        duration: 50,
      }
    );

    tl.to($chartContainer, {
      scrollLeft: $chartImg.clientWidth,
      duration: 300,
    });

    tl.fromTo(
      ".chart__message3",
      {
        y: "80vh",
      },
      {
        y: "-500%",
        duration: 50,
      }
    );
    tl.to({}, { duration: 1 });

    tl.to(".chart__container", {
      scale: 0,
      ease: "power2.out",
      duration: 50,
    });
  }, 1);

  handleSlider();
};

export default handleChart;
