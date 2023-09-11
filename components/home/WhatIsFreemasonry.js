import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScroll } from '../../helpers/useScroll';
import { scrollReveal } from '../../animations/animations';

const WhatIsFreemasonry = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      variants={scrollReveal}
      ref={element}
      animate={controls}
      className=" pb-4"
    >
      <div className="flex flex-col md:flex-row  my-8">
        <div className="flex flex-col items-center justify-between  bg-accent1 w-full px-4 py-8 h-[24rem]">
          <h1 className="text-3xl tracking-wider mb-4 font-semibold">
            What is <span className="underline ">Freemasonry</span>?
          </h1>
          <p className="">
            Simply stated, it&apos;s a fraternal organization dedicated to
            helping a man develop in an ethical and moral environment.
          </p>
          <div className="flex items-center justify-center my-4">
            <Link
              href="/about"
              className="py-2 px-4 bg-main1 rounded-md shadow-shadow1 transition-all duration-300 hover:scale-95 border-none ease-in text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between  bg-main1 w-full px-4 py-8 h-[24rem]">
          <h1 className="text-3xl tracking-wider mb-4 font-semibold text-white">
            What it is <span className="underline">Not</span>!
          </h1>
          <div className="flex flex-col justify-start leading-8">
            <p className="text-white font-light">
              It is not a service club, though Masons serve their community in a
              variety of ways.
            </p>
            <p className="text-white font-light">
              It is not a religion, though a man must profess belief in a
              supreme being and act accordingly.
            </p>
            <p className="text-white font-light">
              It is not a secret organization, though there are harmless signs
              and symbols, the meaning of which are not shared with non-Masons.
            </p>
            <div className="flex items-center justify-center my-4">
              <Link
                href="/about"
                className="py-2 px-4 bg-accent1 rounded-md shadow-shadow1 transition-all duration-300 hover:scale-95 border-none ease-in text-dark1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default WhatIsFreemasonry;
