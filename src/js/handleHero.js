import { gsap } from "gsap";

const handleHero = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });

  tl.fromTo(".hero__circle-img", { y: "120%", ease: "power2.out" }, { y: 0 });

  tl.fromTo(
    ".hero__message1",
    {
      y: "100vh",
    },
    { y: "-50vh" }
  );

  tl.fromTo(
    ".hero__message2",
    {
      y: "100vh",
    },
    { y: "-70vh" }
  );
};

export default handleHero;
