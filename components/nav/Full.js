import Image from 'next/image';
import Link from 'next/link';

const Full = () => {
  return (
    <nav className="fixed top-0 w-full flex flex-col z-50">
      <div className="flex justify-between items-center  px-6 lg:px-10 bg-main1">
        <Link
          href="/"
          className="z-50 py-2 flex items-center text-accent1 gap-2"
        >
          <Image
            src="/images/logos/logo.png"
            height="40"
            width="40"
            alt="navbar logo"
          />
          <p className="uppercase tracking-[1.3px]">
            essex county district masons
          </p>
        </Link>

        <div className="flex items-center justify-between mr-8">
          <li className="text-light1 relative flex gap-8 active:relative active:text-dark1 active:font-bold ease-in-out duration-300 active:after:">
            <Link href="/">Link Name</Link>
          </li>
        </div>
      </div>
    </nav>
  );
};
export default Full;
