import { gsap } from "gsap";

const handleHersey = () => {
  const tl = gsap.timeline();

  const $wood = document.querySelector(".heresey__wood-img");
  tl.to($wood, { opacity: 1, ease: "power2.out" });
  tl.to($wood, {
    y: () => {
      const $container = document.querySelector(".heresey__img-container");
      return $container.offsetHeight - $wood.offsetHeight;
    },
    duration: 1,
  });
  tl.to(
    ".heresey__comment",
    { opacity: 1, ease: "power5.in", duration: 0.3 },
    ">-0.2"
  );
  tl.pause();

  const $button = document.querySelector(".heresey__button");
  $button.addEventListener("click", () => {
    tl.play();
    tl.restart();
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heresey",
      start: "top top",
      scrub: true,
      pin: true,
    },
  });
  tl2.fromTo(
    ".heresey__message",
    {
      y: "110%",
    },
    {
      y: "-105vh",
      duration: 5,
    }
  );
};

export default handleHersey;
