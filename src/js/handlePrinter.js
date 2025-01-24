import { gsap } from "gsap";

const handlePrinter = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".printer",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });

  tl.fromTo(
    ".printer__message",
    {
      y: "110%",
    },
    {
      y: "-100vh",
      duration: 5,
    }
  );
};

export default handlePrinter;
