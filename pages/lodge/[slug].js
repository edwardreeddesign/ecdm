import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { temples } from '../../constants';
import Image from 'next/image';
import {
  photoFadeIn,
  slideLeft,
  textVariant,
  titleReveal,
} from '../../animations/animations';

const LodgePage = ({ lodge }) => {
  return (
    <Layout title={lodge?.name}>
      <div className=" ">
        <motion.div
          variants={photoFadeIn}
          className="w-full h-[30rem] relative"
        >
          <Image
            src={lodge?.mainImage}
            alt={lodge?.name}
            fill
            className=" object-cover mt-10 md:mt-0 md:object-middle mb-4"
          />
        </motion.div>
        <div className="flex flex-col justify-between px-4 md:px-8 lg:px20">
          <div className="space-y-2 text-left mt-10 md:mt-0 md:space-y-4 lg:space-y-8 mb-4 md:mb-0">
            <motion.h4
              variants={titleReveal}
              className="uppercase tracking-[20px] text-main1 text-lg md:text-2xl text-center mb-4 mt-2 pt-10"
            >
              {lodge?.name}{' '}
              <span className="tracking-widest"> A.F. & A.M.</span>
            </motion.h4>

            <div>
              <motion.h2
                variants={textVariant}
                className="text-xl font-light mb-2  "
              >
                A Brief History
              </motion.h2>
              <p className=" font-light mb-2 ">{lodge?.historyParagraph1}</p>
              <p className=" font-light mb-2">{lodge?.historyParagraph2}</p>
              <p className=" font-light mb-2">{lodge?.historyParagraph3}</p>
              {lodge?.historyParagraph4 ? (
                <p className=" font-light mb-2">{lodge?.historyParagraph4}</p>
              ) : (
                ''
              )}
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={lodge?.ctaImage}
                alt="Lodge Logo"
                width={200}
                height={200}
              />
            </div>
            <div>
              <motion.h2
                variants={textVariant}
                className="text-xl font-light mb-2"
              >
                Meetings
              </motion.h2>
              <p className=" font-light mb-6 ">{lodge?.meeting}</p>
            </div>
          </div>
          <div className="flex align-center gap-4 md:justify-start md:gap-4">
            {lodge?.website ? (
              <a
                href={lodge?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 bg-accent1 text-dark1 rounded-md hover:scale-95 transition-all duration-200 shadow-shadow1"
              >
                Lodge Website
              </a>
            ) : (
              ''
            )}
            {lodge?.facebook ? (
              <a
                href={lodge?.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 bg-main1 text-white rounded-md hover:scale-95 transition-all duration-200 shadow-shadow1"
              >
                Facebook
              </a>
            ) : (
              ''
            )}
          </div>
          <Link href="/lodges" className="my-4">
            Back to Lodges
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = ({ params }) => {
  function getLodgeById(slug) {
    const temple = temples.find(temple =>
      temple.lodges.some(lodge => lodge.slug === params.slug)
    );
    return temple.lodges.filter(lodge => lodge.slug === slug);
  }

  const lodge = getLodgeById(params.slug);

  return {
    props: {
      lodge: lodge[0],
    },
  };
};

export const getStaticPaths = () => {
  const paths = temples
    .map(temple => {
      return temple.lodges
        .filter(lodge => lodge.slug === lodge.slug)
        .map(temple => ({
          params: { slug: temple.slug },
        }));
    })
    .flat();

  return { paths: paths, fallback: true };
};
export default LodgePage;
