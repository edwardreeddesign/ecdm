import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../../helpers/BackgroundCircles';
import Image from 'next/image';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      'Welcome to',
      "Canada's Southernmost Jurisdiction",
      'Grand Lodge of Canada in the Province of Ontario',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center z-20 bg-dark1">
      <BackgroundCircles />
      <Image
        src="https://res.cloudinary.com/du9uo1ao5/image/upload/v1680815276/Group_1hero_mnfhwc.png"
        alt="Background Design"
        height="200"
        width="200"
      />
      <div className="z-30">
        <h2 className="text-sm uppercase font-thin text-gray-200 pb-2 pt-2 tracking-[15px]">
          Essex County District
        </h2>
        <h1 className="text-5xl font-semibold px-10 text-gray-300 z-40 lg:text-6xl">
          <span className="mr-3 text-sm md:text-lg">{text}</span>
          <Cursor cursorColor="hsl(208, 100%, 31%)" />
        </h1>
      </div>
    </div>
  );
};
export default Hero;
