import { titleReveal } from '../animations/animations';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <motion.h4
        variants={titleReveal}
        className="uppercase tracking-[20px] text-main1 text-lg md:text-2xl text-center mb-4 mt-2"
      >
        Contact
      </motion.h4>
    </Layout>
  );
};
export default ContactPage;
