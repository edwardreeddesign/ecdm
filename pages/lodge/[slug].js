/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { temples } from '../../constants';

const LodgePage = ({ lodge }) => {
  return (
    <Layout title={lodge?.name}>
      <div className="bg-primaryDark text-white min-h-screen w-screen flex  space-y-0 items-center justify-center text-center overflow-hidden relative px-5">
        <Link href="/#lodges" className="absolute top-0 left-5 ">
          <button className="heroButton">Back to Lodges</button>
        </Link>
        <div className="flex flex-col gap-4 px-6 md:flex-row ">
          <img
            src={lodge?.mainImage}
            alt={lodge?.name}
            className="h-[640px] rounded-xl object-cover mt-10 md:mt-0"
          />
          <div className="flex flex-col justify-between">
            <div className="space-y-2 text-left mt-2 md:mt-0 md:space-y-4 lg:space-y-8 mb-4 md:mb-0">
              <h1 className="text-2xl md:text-4xl text-gray-400 font-semibold">
                {lodge?.name} A.F. & A.M.
              </h1>
              <div>
                <h2 className="md:text-xl text-gray-300 font-thin">
                  A Brief History
                </h2>
                <p className="text-gray-400 font-light md:text-2xl">
                  {lodge?.history}
                </p>
              </div>
              <div>
                <h2 className="md:text-xl text-gray-300 font-thin">Meetings</h2>
                <p className="text-gray-400 font-light md:text-2xl">
                  {lodge?.meeting}
                </p>
              </div>
            </div>
            <div className="flex align-center justify-between md:justify-start md:gap-4">
              {lodge?.website ? (
                <button className="primaryBtn">
                  <a
                    href={lodge?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lodge Website
                  </a>
                </button>
              ) : (
                ''
              )}
              {lodge?.facebook ? (
                <button className="primaryBtn">
                  <a
                    href={lodge?.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
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
