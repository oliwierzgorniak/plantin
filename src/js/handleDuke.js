import { gsap } from "gsap";
import addTimeline from "./handleDuke/addTimeline";

const cords = [
  {
    duke: {
      x: 0.35,
      y: 0.83,
    },
    calvinist1: {
      x: 0.5,
      y: 0.34,
    },
    calvinist2: {
      x: 0.63,
      y: 0.42,
    },
  },
  {
    duke: {
      x: 0.35,
      y: 0.83,
    },
    calvinist1: {
      x: 0.5,
      y: 0.405,
    },
    calvinist2: {
      x: 0.58,
      y: 0.46,
    },
  },
];

const handleDuke = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".duke__container",
      start: "top top",
      scrub: true,
      pin: ".duke",
    },
  });

  let mm = gsap.matchMedia();
  mm.add("(max-width: 799px)", () => {
    addTimeline(tl, cords[0]);
  });
  mm.add("(min-width: 800px)", () => {
    addTimeline(tl, cords[1]);
  });
};

export default handleDuke;
