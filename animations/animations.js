export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0 },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1, y: '5rem' },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  transition: {
    type: 'spring',
    duration: 0.5,
    when: 'beforeChildren',
    staggerChildren: 0.3,
  },
};

export const circleAnim = {
  hidden: { opacity: 0 },
  show: {
    scale: [1, 2, 2, 3, 1],
    transition: { duration: 3.5 },
    opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
    borderRadius: ['20%', '20%', '50%', '80%', '20%'],
  },
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = delay => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const titleReveal = {
  hidden: {
    y: '4rem',
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      type: 'tween',

      staggerChildren: 0.25,
    },
  },
};

export const slideLeft = {
  hidden: {
    opacity: 0,
    x: '-15rem',
    scale: 0.25,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', duration: 1.75 },
  },
};

export const slideRight = {
  hidden: {
    opacity: 0,
    x: '15rem',
    scale: 0.25,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', duration: 1.75 },
  },
};

export const photoFadeIn = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 3.85, type: 'spring' },
  },
};
