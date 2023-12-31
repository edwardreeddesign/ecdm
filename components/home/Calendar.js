import Link from 'next/link';
import { motion } from 'framer-motion';
import { titleReveal } from '../../animations/animations';
const Calendar = () => {
  return (
    <div className="px-2 md:px-6 lg:px-12">
      <motion.h4
        variants={titleReveal}
        className="uppercase tracking-[20px] text-main1 text-lg md:text-2xl text-center mb-4 mt-2 pt-10"
      >
        Events
      </motion.h4>
      <div className=" w-full  md:h-full  border-2 border-main1 m-auto overflow-hidden rounded-md bg-main2 mb-8">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=9f5557b73d017cb19358d6f28826549bb29a4a5c3bf4cfa113af79751359d22d%40group.calendar.google.com&ctz=America%2FToronto"
          style={{ border: '0' }}
          width="100%"
          height="600"
        />
      </div>
      <div className="flex justify-center mb-8">
        <Link href="/events" className="btn">
          All Events
        </Link>
      </div>
    </div>
  );
};
export default Calendar;
