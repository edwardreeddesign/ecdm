import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import BackgroundCircles from './BackgroundCircles';
import { motion } from 'framer-motion';
import { photoFadeIn, titleReveal } from '../../animations/animations';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      'Welcome to',
      "Canada's Southernmost Jurisdiction",
      'Grand Lodge of Canada in the Province of Ontario',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center z-20  bg-dark1">
      <BackgroundCircles />
      <motion.div variants={photoFadeIn}>
        <Image
          src="https://res.cloudinary.com/du9uo1ao5/image/upload/v1680815276/Group_1hero_mnfhwc.png"
          alt="Background Design"
          height="200"
          width="200"
        />
      </motion.div>
      <div className="z-30">
        <h2 className="text-sm uppercase font-thin text-gray-200 pb-2 pt-2 tracking-[15px]">
          Essex County District
        </h2>
        <h1 className="text-5xl font-semibold px-10 text-gray-300 z-40 lg:text-6xl">
          <span className="mr-3 text-sm md:text-lg">{text}</span>
          <Cursor cursorColor="hsl(208, 100%, 31%)" />
        </h1>
      </div>
      <motion.h2
        variants={titleReveal}
        className="text-center text-main2 mt-8 text-3xl tracking-widest font-[Halant] font-light"
      >
        Not Just a Man. A Mason.
      </motion.h2>
    </section>
  );
};
export default Hero;
