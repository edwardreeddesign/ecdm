import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import WhatIsFreemasonry from '../components/home/WhatIsFreemasonry';
import District from '../components/home/District';
import Banner from '../components/home/Banner';
import Lodges from '../components/home/Lodges';
import BeOne from '../components/home/BeOne';
import Calendar from '../components/home/Calendar';
import LodgeBrief from '../components/home/LodgeBrief';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <WhatIsFreemasonry />
      {/* <District /> */}

      <Image
        src="/images/logos/njam1.jpg"
        alt="Not just a man"
        height={384}
        width={500}
        objectFit="contain"
        className="flex flex-col w-full m-auto shadow-shadow1 mt-10"
      />

      <Banner />
      <LodgeBrief />

      <BeOne />
      <Calendar />
    </Layout>
  );
}
