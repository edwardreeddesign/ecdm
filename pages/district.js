import Image from 'next/image';
import { photoFadeIn, slideLeft, titleReveal } from '../animations/animations';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
const DistrictPage = () => {
  return (
    <Layout title="District">
      <motion.h4
        variants={titleReveal}
        className="uppercase tracking-[20px] text-main1 text-lg md:text-2xl text-center mb-4 mt-2 pt-10"
      >
        district association
      </motion.h4>
      <div className="flex flex-col md:flex-row px-4 md:px-8 lg:px-14">
        <motion.div
          variants={photoFadeIn}
          className="flex items-center justify-center flex-1"
        >
          <Image
            src="/images/districtMap.png"
            alt="District Map"
            height="500"
            width="500"
            className="rounded-md"
          />
        </motion.div>
        <motion.div
          variants={slideLeft}
          className="space-y-10  md:px-10 my-6 flex-1"
        >
          <p className="leading-4 text-sm">
            The purpose of the Essex County District Masonic Association is to
            promote Masonry in general, to communicate with members thereby
            allowing them to fully participate in District events, and to
            facilitate communications of the District Deputy Grand Master for
            the benefit of the District.
          </p>
          <p className="leading-4 text-sm">
            Membership in the Association consists of all Masons in good
            standing of a Craft Lodge in Essex County District. Annual dues are
            paid by each Lodge on behalf of its members.
          </p>
          <p className="leading-4 text-sm">
            The Association&apos;s regular meetings are held at Essex on the
            third Monday of September, November, March, and June at 7:30 P.M.
            Please check the district calendar to be sure that a meeting has not
            been re-scheduled or relocated.
          </p>
        </motion.div>
      </div>
      <div className="flex justify-center mb-8">
        <Link href="/lodges" className="btn">
          View the lodges
        </Link>
      </div>
    </Layout>
  );
};
export default DistrictPage;
