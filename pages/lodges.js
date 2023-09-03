import { titleReveal } from '../animations/animations';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Lodges from '../components/home/Lodges';

const LodgesPage = () => {
  return (
    <Layout title="District Lodges">
      <motion.h4
        variants={titleReveal}
        className="uppercase tracking-[20px] text-main1 text-lg md:text-2xl text-center mb-4 mt-2 pt-10"
      >
        Our lodges
      </motion.h4>
      <p className="font-thin text-xs uppercase">
        click icon on top left to see list of lodges
      </p>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1ICTWVgvw586qA_k3HtgBhnEQ0ugZBnQ&ehbc=2E312F"
        width="1640"
        height="1480
"
      />
      <div>
        <Lodges />
      </div>
    </Layout>
  );
};
export default LodgesPage;
