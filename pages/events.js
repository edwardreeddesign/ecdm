import { titleReveal } from '../animations/animations';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import UpcomingEvents from '../components/events/UpcomingEvents';
import TrestleBoardInfo from '../components/events/TrestleBoardInfo';

const EventsPage = () => {
  return (
    <Layout title="Events">
      <div className="px-4 md:px-8 lg:px-16 mb-8">
        <motion.h4
          variants={titleReveal}
          className="uppercase tracking-[20px] text-main1 text-lg md:text-2xl text-center mb-4 mt-2 pt-10"
        >
          district association
        </motion.h4>
        <div className=" w-full  md:h-full  border-2 border-main1 m-auto overflow-hidden rounded-md bg-main2 my-8">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=9f5557b73d017cb19358d6f28826549bb29a4a5c3bf4cfa113af79751359d22d%40group.calendar.google.com&ctz=America%2FToronto"
            style={{ border: '0' }}
            width="100%"
            height="600"
          />
        </div>
        <UpcomingEvents />
        <TrestleBoardInfo />
      </div>
    </Layout>
  );
};
export default EventsPage;
