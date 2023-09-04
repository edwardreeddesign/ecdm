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
        <title>
          {title
            ? title + ' | Essex County District Masons'
            : 'Essex County District Masons'}
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="flex justify-between min-h-screen flex-col bg-white w-full pt-12">
          <ToastContainer position="top-center" limit={1} />
          <Nav />
          <section className="overflow-hidden">{children}</section>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};
export default Layout;
