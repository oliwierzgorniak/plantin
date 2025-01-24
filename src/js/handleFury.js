import { gsap } from "gsap";

const handleFury = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".fury",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });

  tl.fromTo(".fury__soldier-img", { x: "50vw", ease: "power2.out" }, { x: 0 });
  tl.fromTo(".fury__duke-img", { x: "-50vw", ease: "power2.out" }, { x: 0 });
  tl.fromTo(".fury__plantin-img", { y: "55vh", ease: "power2.out" }, { y: 0 });
  tl.fromTo(
    ".fury__message",
    {
      y: "110%",
    },
    {
      y: "-105vh",
      duration: 5,
    }
  );
};

export default handleFury;
