import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { whatIsFreemasonry } from '../../constants';
import { staggerContainer, textVariant } from '../../animations/animations';
import Image from 'next/image';

const WhatIsFreemasonryCard = ({ whatIsMasonry }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'hsl(208, 100%, 31%)',
        color: 'hsl(20, 77%, 72%)',
      }}
      contentArrowStyle={{ borderRight: '7px solid  hsl(20, 77%, 72%)' }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src="/images/logos/logo.png"
            alt="logo"
            className="w-[60%] h-[60%] object-contain"
            fill
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {whatIsMasonry.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {whatIsMasonry.answer.map((answer, index) => (
              <li
                key={`whatIsMasonry-answer-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {answer}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const WhatIsFreemasonry = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10 bg-slate-400"
      id="work"
    >
      <motion.div variants={textVariant}>
        <p className="text-center sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider py-6">
          What is Freemasonry?
        </p>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {whatIsFreemasonry.map((whatIsMasonry, index) => (
              <WhatIsFreemasonryCard
                key={`whatIsMasonry-${index}`}
                whatIsMasonry={whatIsMasonry}
              />
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhatIsFreemasonry;
