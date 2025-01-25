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
    {
      // AI was asked, but I had a simillar idea
      x: () => {
        const containerWidth = document.querySelector(
          ".paris__img-container"
        ).offsetWidth;
        return containerWidth * -0.2;
      },
      y: () => {
        const containerHeight = document.querySelector(
          ".paris__img-container"
        ).offsetHeight;
        return containerHeight * 0.228;
      },
      ease: "power2.out",
      duration: 5,
    },
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
