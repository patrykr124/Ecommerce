//categories//

export const parentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const variants1 = {
  initial: {
    x: -800,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const variants2 = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const variants3 = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const variants4 = {
  initial: {
    x: 20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

//FeaturedProducts//

export const variantsLoading = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  show: {
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 1.2,
    },
  },
};
export const textSplit = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.25,
    },
  },
};

export const textSplitChildren = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

//slider//

export const textSlider = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.8,
    },
  },
};

export const textSliderChildren = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
};

export const imageOpacity = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration:0.8,
    },
  },
};
