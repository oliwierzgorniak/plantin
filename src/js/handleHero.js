import { gsap } from "gsap";

const hadnleHero = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
    },
  });

  tl.fromTo(".hero__circle-img", { y: "120%", ease: "power2.out" }, { y: 0 });

  tl.fromTo(
    ".hero__message1",
    {
      y: "70vh",
    },
    { y: "-80vh" }
  );

  tl.fromTo(
    ".hero__message2",
    {
      y: "30vh",
    },
    { y: "-100vh" }
  );
};

export default hadnleHero;
