import { slideLeft } from '../../animations/animations';
import { upcomingEvents } from '../../constants';
import UpcomingCard from './UpcomingCard';
import { motion } from 'framer-motion';

const UpcomingEvents = () => {
  return (
    <div>
      <motion.h4 className="text-4xl font-light my-4">
        Upcoming Events
        <motion.hr
          variants={slideLeft}
          className="border-2 border-main1 mb-4"
        />
      </motion.h4>
      <div className="flex flex-wrap justify-center   gap-4 ">
        {upcomingEvents.map(upcomingEvent => (
          <UpcomingCard
            upcomingEvent={upcomingEvent}
            key={upcomingEvent.name}
          />
        ))}
      </div>
    </div>
  );
};
export default UpcomingEvents;
