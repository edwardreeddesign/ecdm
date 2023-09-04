import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import WhatIsFreemasonry from '../components/home/WhatIsFreemasonry';
import District from '../components/home/District';
import Banner from '../components/home/Banner';
import Lodges from '../components/home/Lodges';
import BeOne from '../components/home/BeOne';
import Calendar from '../components/home/Calendar';
import LodgeBrief from '../components/home/LodgeBrief';

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <WhatIsFreemasonry />
      <District />
      <Banner />
      <LodgeBrief />
      <div class="flex flex-col items-center justify-center">
        <h1 className="text-4xl tracking-[10px] font-thin mb-2 underline">
          R.E.M
        </h1>
        <h2 className="text-3xl font-semibold tracking-[12px] mb-1">RITUAL</h2>
        <h2 className="text-3xl font-semibold tracking-[12px] mb-1">
          EDUCATION
        </h2>
        <h2 className="text-3xl font-semibold tracking-[12px] mb-1">
          MENTORSHIP
        </h2>
      </div>
      <BeOne />
      <Calendar />
    </Layout>
  );
}
