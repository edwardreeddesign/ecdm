import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = (thresh = 0.2) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: thresh });

  useEffect(() => {
    if (view) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, view]);

  return [element, controls];
};
