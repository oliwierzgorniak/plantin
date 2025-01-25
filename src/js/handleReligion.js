import { gsap } from "gsap";

const handleReligion = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".religion",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });

  const books = [
    { className: ".religion__book1", x: 0.67, y: 0.4 },
    { className: ".religion__book2", x: 0.32, y: 0.35 },
    { className: ".religion__book3", x: 0.43, y: 0.59 },
    { className: ".religion__book4", x: 0.705, y: 0.67 },
  ];

  books.forEach(({ className, x, y }) => {
    const $book = document.querySelector(className);
    tl.to(
      $book,
      {
        // AI was asked, but I had a simillar idea
        x: () => {
          const containerWidth = document.querySelector(
            ".religion__img-container"
          ).offsetWidth;
          const xPos = containerWidth * x;
          return xPos - $book.offsetLeft;
        },
        y: () => {
          const containerHeight = document.querySelector(
            ".religion__img-container"
          ).offsetHeight;
          const yPos = containerHeight * y;
          return yPos - $book.offsetTop;
        },
        ease: "power2.out",
      },
      "<"
    );
  });

  tl.fromTo(
    ".religion__message",
    {
      y: "110%",
    },
    {
      y: "-105vh",
      duration: 5,
    }
  );
};

export default handleReligion;
