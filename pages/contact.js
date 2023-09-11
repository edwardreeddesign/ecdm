import { titleReveal } from '../animations/animations';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Form from '../components/contact/Form';

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <div className="pt-24">
        <motion.p
          variants={titleReveal}
          className="sm:text-[18px] text-[14px] text-dark2  uppercase tracking-widest text-center"
        >
          Get In Touch
        </motion.p>
        <motion.h4
          variants={titleReveal}
          className="uppercase tracking-[20px] text-main1 text-2xl md:text-3xl text-center mb-4 mt-2"
        >
          Contact
        </motion.h4>
        <Form />
      </div>
    </Layout>
  );
};
export default ContactPage;
