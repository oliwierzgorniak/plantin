import { gsap } from "gsap";

const hadnleHero = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      // end: "+=1000",
      scrub: true,
      pin: true,
    },
  });

  tl.fromTo(
    ".hero__message",
    {
      y: "70vh",
    },
    { y: "-100vh" }
  );
};

export default hadnleHero;
