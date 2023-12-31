import Head from 'next/head';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import Nav from './nav/Nav';
import { pageAnimation } from '../animations/animations';
import Footer from './footer/Footer';
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children, title, description }) => {
  const defaultTitle = 'Essex County District Masonic Association';
  const defaultDescription = 'Promoting Freemasonry in Essex County, Ontario.';
  return (
    <>
      <Head>
        <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content={description || defaultDescription} />
        <meta
          name="keywords"
          content="Freemasonry, Windsor Freemasonry, Essex Ontario Freemasonry, Essex County, Masons, Fraternity, Lodge, Masonic Temple, Essex County District Masons"
        />
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
          <Analytics />
          <div class="flex flex-col items-center justify-center h-16 w-full p-6 bg-main1 relative  shadow-shadow1">
            <Image
              src="/images/logos/whiteOntarioMasons.png"
              alt="Ontario Masons Branding"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};
export default Layout;
