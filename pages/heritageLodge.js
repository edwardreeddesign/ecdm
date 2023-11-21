import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Layout from '../components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideLeft, titleReveal } from '../animations/animations';
import Link from 'next/link';

const carousel = [
  {
    name: 'Heritage Outside',
    image: '/images/heritage/heritageOutside.jpg',
  },
  {
    name: 'Heritage Inside 1',
    image: '/images/heritage/heritage1.jpg',
  },
  {
    name: 'Heritage Inside 2',
    image: '/images/heritage/heritage2.jpg',
  },
  {
    name: 'Heritage Inside 3',
    image: '/images/heritage/heritage3.jpg',
  },
];

const HeritageLodgePage = () => {
  return (
    <Layout title="Heritage Lodge">
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
        {carousel.map(carousel => (
          <Image
            key={carousel.name}
            src={carousel.image}
            alt={carousel.name}
            width={500}
            height={500}
            className="w-full max-h-[30vh] md:max-h-[45vh] lg:max-h-[55vh]  object-cover"
          />
        ))}
      </Carousel>
      <div className="mx-5">
        <motion.h4
          variants={titleReveal}
          className="uppercase tracking-[20px] text-main1 text-lg md:text-2xl text-center mb-4 mt-2 pt-10"
        >
          Heritage Lodge
        </motion.h4>
        <motion.div
          variants={slideLeft}
          className="space-y-10  md:px-10 my-6 flex-1"
        >
          <p className="leading-4 text-sm">
            Welcome to Essex County Masonic District’s Heritage Lodge. This
            lodge was built as a model to represent a Masonic Lodge building of
            an earlier day. The Masonic Lodge buildings of today, have not
            changed in basic floor plan. What you see here, is the same layout
            you will see in any Masonic Lodge building.
          </p>
          <p className="leading-4 text-sm">
            In 2016 Erie and Windsor Districts amalgamated to form Essex County
            District. The Masons of the 14 Lodges in Essex County District were
            eager to exhibit this vintage masonic Lodge building. The lodge is
            furnished as any current Masonic lodge would be. We are pleased to
            have the community stop by our Heritage Lodge on their visit to the
            Canadian Transportation Museum and Heritage Village.
          </p>

          <p className="leading-4 text-sm">
            Some of furniture in this Lodge, was over 100 years old when it was
            donated to us for display. Everything in the lodge has a meaning
            which is explained to the candidate as he progresses through the
            degrees of Masonry. Take a look around and you will see many symbols
            including tassels, columns, the inlaid pattern in the floor, the
            framed murals or tracing boards and much more.
          </p>
        </motion.div>
      </div>
      <div className="flex justify-center mb-8">
        <a
          href="https://ctmhv.com/"
          nonreferrer
          target="_blank"
          className="btn"
        >
          Visit Heritage Museum
        </a>
      </div>
      <div className="w-full m-auto mb-8">
        <Image
          src="/images/heritage/heritageVillage.jpeg"
          alt="Heritage Lodge Map"
          height={800}
          width={800}
          className="shadow-shadow1  m-auto object-contain"
        />
      </div>
      <div className="flex justify-center mb-8">
        <Link href="/contact" className="btn ">
          More Information
        </Link>
      </div>
    </Layout>
  );
};
export default HeritageLodgePage;
