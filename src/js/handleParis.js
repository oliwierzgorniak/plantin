import { gsap } from "gsap";

const handleParis = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".paris",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });

  tl.fromTo(
    ".paris__pin",
    { x: "-24vw", y: "23vh", ease: "power2.out", duration: 5 },
    { x: 0, y: 0 }
  );
  tl.fromTo(
    ".paris__message",
    {
      y: "-250%",
    },
    {
      y: "0",
      duration: 5,
    }
  );
  tl.to({}, { duration: 1 });
};

export default handleParis;
