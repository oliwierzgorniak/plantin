import { gsap } from "gsap";

const handleMarket = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".market",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });

  tl.fromTo(
    ".market__plantin-img",
    { y: "-100vh", ease: "power2.out" },
    { y: 0 }
  );

  tl.fromTo(
    ".market__circle-img",
    { y: "100vh", ease: "power2.out" },
    { y: 0 }
  );

  tl.fromTo(
    ".market__message",
    {
      y: "-120%",
    },
    { y: "0" }
  );

  tl.to({}, { duration: 1 });
};

export default handleMarket;
