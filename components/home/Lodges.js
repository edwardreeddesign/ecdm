import { motion } from 'framer-motion';
import { slideLeft, titleReveal } from '../../animations/animations';
import { temples } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';

const LodgeCard = ({ temple }) => {
  return (
    <div className="relative w-[20rem] h-[30rem] bg-accent1 rounded-lg shadow-shadow1 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={temple.image}
          layout="fill"
          objectFit="cover"
          alt={temple.location}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
        <div>
          <p className="text-xs text-white mt-1 mb-2">{temple.address}</p>
          <p className="text-xl tracking-widest font-light text-white underline mb-2">
            {temple.location}
          </p>
          <p className="text-white">
            Parking: <span className="font-medium">{temple.parking}</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto">
          <p className="text-xl text-white tracking-wide mb-2">
            Our Lodge{temple.lodges.length > 1 ? 's' : ''}
          </p>
          <div className="flex flex-wrap gap-1 justify-center">
            {temple.lodges.map(lodge => (
              <Link href={`/lodge/${lodge.slug}`} key={lodge.name}>
                <button className="text-sm tracking-wide rounded-md py-1 px-2 bg-main1 text-light2">
                  {lodge.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Lodges = () => {
  return (
    <motion.section
      variants={titleReveal}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex flex-col text-center mt-10 mb-6 "
    >
      <div className="w-full">
        <motion.h3
          variants={slideLeft}
          initial="hidden"
          animate="show"
          exit="exit"
          className="text-lg uppercase tracking-[20px] md:text-3xl text-main1 mb-4 font-thin "
        >
          The Lodges of Essex County District
        </motion.h3>
        <p className="text-gray-600 tracking-[3px] text-xs md:text-sm mb-20">
          (alphabetically by location)
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {temples.map((temple, idx) => (
          <LodgeCard temple={temple} key={idx} />
        ))}
      </div>
    </motion.section>
  );
};
export default Lodges;
