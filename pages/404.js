import Link from 'next/link';
import { titleReveal } from '../animations/animations';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
const PageDoesNotExist = () => {
  return (
    <Layout title="Not Found">
      <div className=" py-4 ">
        <motion.h4
          variants={titleReveal}
          className="uppercase tracking-[20px] text-main1 text-lg md:text-2xl text-center mb-4 mt-2"
        >
          Page Does Not Exist
        </motion.h4>
        <div className="flex justify-center">
          <Link href="/" className="btn">
            Go Back Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};
export default PageDoesNotExist;
