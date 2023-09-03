import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  photoFadeIn,
  slideLeft,
  titleReveal,
} from '../../animations/animations';
const BeOne = () => {
  return (
    <div className="h-[40rem] flex relative  text-center    justify-evenly items-center mx-auto">
      <div className="w-full min-h-[10rem] bg-accent1 flex flex-col align-center justify-center my-8 shadow-lg  md:flex-row">
        <div className="flex flex-col align-center justify-center w-full">
          <motion.h1
            variants={photoFadeIn}
            className="flex align-center justify-center tracking-[20px] uppercase text-xl md:text-2xl lg:text-5xl font-extrabold"
          >
            2B1
            <motion.div variants={photoFadeIn}>
              <Image
                src="https://res.cloudinary.com/du9uo1ao5/image/upload/v1680811098/1.Ontario_Masons_-_Leaf_-_Colour_mrell1.png"
                alt="square and compasses"
                height="48"
                width="48"
                className=" mx-2 mr-6"
              />
            </motion.div>
            ask1
          </motion.h1>
        </div>
      </div>
    </div>
  );
};
export default BeOne;
