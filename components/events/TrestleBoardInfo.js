import { motion } from 'framer-motion';
import { slideLeft } from '../../animations/animations';
import { trestleBoard } from '../../constants';
import TrestleBoardCard from './TrestleBoardCard';

const TrestleBoardInfo = () => {
  return (
    <div>
      <motion.h4 className="text-4xl font-light my-4">
        Trestle Board
        <motion.hr
          variants={slideLeft}
          className="border-2 border-main1 mb-4"
        />
      </motion.h4>
      <h1 className="text-xl font-light mb-4 text-center ">
        Installations and Official Visits
      </h1>
      <div className="mb-8 grid md:grid-cols-4 md:gap-5 ">
        {trestleBoard.map(trestle => (
          <TrestleBoardCard key={trestle.lodge} trestle={trestle} />
        ))}
      </div>
    </div>
  );
};
export default TrestleBoardInfo;
