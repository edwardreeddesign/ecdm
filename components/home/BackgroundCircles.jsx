import { motion } from 'framer-motion';
import { circleAnim } from '../../animations/animations';

const BackgroundCircles = () => {
  return (
    <motion.div
      variants={circleAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className="relative flex justify-center items-center -z-1"
    >
      <div className="border border-accent1 rounded-full h-[200px] w-[200px] mt-52 animate-ping absolute" />

      <div className="border border-accent1 rounded-full h-[300px] w-[300px] mt-52  absolute" />

      <div className="border border-main1 rounded-full h-[500px] w-[500px] mt-52  absolute" />

      <div className="rounded-full border border-accent1 opacity-20 h-[650px] w-[650px] mt-52 animate-pulse absolute" />

      <div className="border border-main1 rounded-full h-[800px] w-[800px] mt-52  absolute" />
    </motion.div>
  );
};
export default BackgroundCircles;
