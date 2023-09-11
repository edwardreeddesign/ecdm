import { motion } from 'framer-motion';
import {
  photoFadeIn,
  scrollReveal,
  slideLeft,
  slideRight,
  titleReveal,
} from '../../animations/animations';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from '../../helpers/useScroll';

const District = () => {
  const [element, controls] = useScroll();
  return (
    <motion.section
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      exit="exit"
      className="flex flex-col  text-center my-12 "
    >
      <motion.h1
        variants={titleReveal}
        className="text-lg uppercase tracking-[20px] md:text-3xl text-main1 mb-10 font-thin"
      >
        District Association
      </motion.h1>
      <div className="flex flex-col lg:flex-row mx-8 md:mx-20">
        <motion.div
          variants={slideLeft}
          className="flex flex-col items-center justify-center flex-1"
        >
          <Image
            src="/images/districtMap.png"
            alt="District Map"
            height="500"
            width="500"
            className="rounded-md shadow-shadow2 mb-8"
          />
        </motion.div>
        <motion.div
          variants={slideRight}
          className="flex flex-col items-center justify-center space-y-10  px-10 md:px-24 flex-1 text-left"
        >
          <p className="leading-5">
            The purpose of the Essex County District Masonic Association is to
            promote Masonry in general, to communicate with members thereby
            allowing them to fully participate in District events, and to
            facilitate communications of the District Deputy Grand Master for
            the benefit of the District.
          </p>
          <p className="leading-5">
            Membership in the Association consists of all Masons in good
            standing of a Craft Lodge in Essex County District. Annual dues are
            paid by each Lodge on behalf of its members.
          </p>
          <p className="leading-5">
            The Association&apos;s regular meetings are held at Essex on the
            third Monday of September, November, March, and June at 7:30 P.M.
            Please check the district calendar to be sure that a meeting has not
            been re-scheduled or relocated.
          </p>
          <div>
            <Link href="/lodges" className="btn ">
              View the lodges
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default District;
