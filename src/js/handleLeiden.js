import { gsap } from "gsap";
import handleSlider from "./handleLeiden/handleSlider";

const handleLeiden = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".leiden",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });

  tl.fromTo(
    ".leiden__message1",
    {
      y: "40vh",
    },
    {
      y: "-110vh",
      onComplete: () => {
        gsap.to(".leiden__call-container", { opacity: 1 });
      },
      duration: 5,
    }
  );
  tl.fromTo(
    ".leiden__message2",
    {
      y: "150%",
    },
    {
      y: "-110vh",
      duration: 5,
    }
  );
  tl.to({}, { duration: 1 });

  handleSlider();
};

export default handleLeiden;
