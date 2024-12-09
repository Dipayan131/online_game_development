export const aniData = {
  rise: {
    name: "rise",
    animations: [
      {
        percent: 0,
        opacity: 0,
        transform:
          "translate(var(--translate), calc(var(--translate) + 100px))",
      },
      {
        percent: 100,
        opacity: 1,
        transform: "translate(var(--translate), calc(var(--translate) + 0px))",
      },
    ],
  },
  fade: {
    name: "fade",
    animations: [
      {
        percent: 0,
        opacity: 0,
      },
      {
        percent: 100,
        opacity: 0,
      },
    ],
  },
  pan: {
    name: "pan",
    animations: [
      {
        percent: 0,
        opacity: 0,
        transform: "translateX(calc(var(--translate) + 100px))",
      },
      {
        percent: 100,
        opacity: 1,
        transform: "translateX(calc(var(--translate) + 0px))",
      },
    ],
  },
};
