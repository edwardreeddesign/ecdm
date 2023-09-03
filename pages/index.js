import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import WhatIsFreemasonry from '../components/home/WhatIsFreemasonry';
import District from '../components/home/District';
import Banner from '../components/home/Banner';
import Lodges from '../components/home/Lodges';
import BeOne from '../components/home/BeOne';
import Calendar from '../components/home/Calendar';

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <WhatIsFreemasonry />
      <District />
      <Banner />
      <Lodges />
      <BeOne />
      <Calendar />
    </Layout>
  );
}
