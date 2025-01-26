const addTimeline = (tl, { duke, calvinist1, calvinist2 }) => {
  const $dukePin = document.querySelector(".duke__duke-pin");

  tl.fromTo(
    $dukePin,
    {
      // AI was asked, but I had a simillar idea
      x: () => {
        const containerWidth = document.querySelector(
          ".duke__img-container"
        ).offsetWidth;
        const xPos = containerWidth * duke.x;
        return xPos - $dukePin.offsetLeft;
      },
      y: () => {
        const containerHeight = document.querySelector(
          ".duke__img-container"
        ).offsetHeight;
        const yPos = containerHeight * duke.y;
        return yPos - $dukePin.offsetTop;
      },
      ease: "power2.out",
    },
    { x: 0, y: 0 }
  );

  const $calvinsitPin1 = document.querySelector(".duke__calvinist-pin1");
  tl.fromTo(
    $calvinsitPin1,
    {
      // AI was asked, but I had a simillar idea
      x: () => {
        const containerWidth = document.querySelector(
          ".duke__img-container"
        ).offsetWidth;
        const xPos = containerWidth * calvinist1.x;
        return xPos - $calvinsitPin1.offsetLeft;
      },
      y: () => {
        const containerHeight = document.querySelector(
          ".duke__img-container"
        ).offsetHeight;
        const yPos = containerHeight * calvinist1.y;
        return yPos - $calvinsitPin1.offsetTop;
      },
      ease: "power2.out",
    },
    { x: 0, y: 0 }
  );

  const $calvinsitPin2 = document.querySelector(".duke__calvinist-pin2");
  tl.fromTo(
    $calvinsitPin2,
    {
      // AI was asked, but I had a simillar idea
      x: () => {
        const containerWidth = document.querySelector(
          ".duke__img-container"
        ).offsetWidth;
        const xPos = containerWidth * calvinist2.x;
        return xPos - $calvinsitPin2.offsetLeft;
      },
      y: () => {
        const containerHeight = document.querySelector(
          ".duke__img-container"
        ).offsetHeight;
        const yPos = containerHeight * calvinist2.y;
        return yPos - $calvinsitPin2.offsetTop;
      },
      ease: "power2.out",
    },
    { x: 0, y: 0 },
    "<"
  );
  tl.fromTo(
    ".duke__message",
    {
      y: "100vh",
    },
    {
      y: "-120%",
      duration: 5,
    }
  );
  tl.to({}, { duration: 1 });
};

export default addTimeline;
