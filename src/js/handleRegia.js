import { gsap } from "gsap";

const handleRegia = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".regia",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });

  tl.fromTo(".regia__king-img", { x: "-200%", ease: "power2.out" }, { x: 0 });
  tl.fromTo(
    ".regia__img-container",
    { x: "200%", ease: "power2.out" },
    { x: 0 }
  );
  tl.fromTo(
    ".regia__message-img",
    { opacity: 0, ease: "power2.out" },
    { opacity: 1 }
  );

  tl.fromTo(
    ".regia__message",
    {
      y: "110%",
    },
    {
      y: "-105vh",
      duration: 5,
      // scrollTrigger: {
      //   scrub: true,
      // },
    }
  );
};

export default handleRegia;
