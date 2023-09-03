import Head from 'next/head';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import Nav from './nav/Nav';
import { pageAnimation } from '../animations/animations';
import Footer from './footer/Footer';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        {title
          ? title + ' | Essex County District Masons'
          : 'Essex County District Masons'}
      </Head>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="flex justify-between min-h-screen flex-col bg-white w-full pt-14">
          <ToastContainer position="top-center" limit={1} />
          <Nav />
          <div>{children}</div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};
export default Layout;
