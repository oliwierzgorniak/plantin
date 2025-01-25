import { gsap } from "gsap";

const handleScale = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scale",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });

  const bookImgs = document.querySelectorAll(".scale__book-img");
  bookImgs.forEach(($bookImg) => {
    tl.fromTo(
      $bookImg,
      {
        x: () => {
          return (
            -$bookImg.offsetLeft +
            $bookImg.parentElement.offsetWidth / 2 -
            $bookImg.offsetWidth / 2
          );
        },
        y: () => {
          return -$bookImg.offsetTop;
        },
        ease: "power2.out",
      },
      { x: 0, y: 0 },
      "<"
    );
  });
  tl.fromTo(".scale__message", { y: "-150%" }, { y: 0 });
  tl.to({}, { duration: 0.5 });
};

export default handleScale;
