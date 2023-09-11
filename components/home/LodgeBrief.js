import Link from 'next/link';
import { scrollReveal, slideLeft } from '../../animations/animations';
import { temples } from '../../constants';
import { motion } from 'framer-motion';
import { useScroll } from '../../helpers/useScroll';

const LodgeBrief = () => {
  const [element, controls] = useScroll();
  // Create a flat array of lodges
  const allLodges = temples.flatMap(temple => temple.lodges);

  // Sort the lodges based on their numbers
  const sortedLodges = allLodges.slice().sort((a, b) => {
    const regex = /\d+/;
    const numberA = parseInt(a.name.match(regex)[0]);
    const numberB = parseInt(b.name.match(regex)[0]);
    return numberA - numberB;
  });

  return (
    <motion.div className="mb-16  py-4 px-2 md:px-6">
      <motion.div
        variants={slideLeft}
        ref={element}
        animate={controls}
        initial="hidden"
        exit="exit"
        className="text-lg uppercase tracking-[20px] md:text-3xl text-main1 mb-4 font-thin "
      >
        <h2>The Lodges of Essex County District</h2>
        <p className="text-gray-600 tracking-[3px] text-xs md:text-sm mb-20">
          (by Lodge Number)
        </p>
      </motion.div>
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        className="mb-8 grid md:grid-cols-4 md:gap-5 gap-2"
      >
        {sortedLodges.map(lodge => (
          <div
            key={lodge.name}
            className=" flex flex-col justify-between border-2 border-main1 py-4 px-2 shadow-shadow1"
          >
            <h1 className="text-xl tracking-wider font-semibold">
              {lodge.name}
            </h1>
            <p className=" pb-2 text-xl">{lodge.meeting}</p>
            <Link
              href={`/lodge/${lodge.slug}`}
              key={lodge.name}
              className="place-self-end	"
            >
              Read More
              {/* <img
                      className="hidden md:inline-flex w-4 h-4 rounded-full ml-2"
                      src={lodge.ctaImage}
                      alt={lodge.name}
                    /> */}
            </Link>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
export default LodgeBrief;
