import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-accent1 px-4  w-full shadow-shadow1 flex flex-col items-center justify-center py-3">
      <Image
        src="/images/logos/blackLogo.png"
        height="30"
        width="30"
        alt="logo"
        className="drop-shadow-2lg"
      />
      <h1 className="font-thin tracking-widest uppercase text-center">
        essex county district masonic association
      </h1>
      <p className="text-[.5rem] mb-2">&copy; 2023 ECDMA All Rights Reserved</p>
      <p className="text-[.5rem] mb-2 font-[cursive]">
        Designed by Edward Reed Designs
      </p>
      <div className="flex items-center justify-center gap-2 mb-4">
        {navLinks.map(link => (
          <ul key={link.name}>
            <Link href={link.url}>{link.name}</Link>
          </ul>
        ))}
      </div>
      <Link href="/privacy" className="text-xs cursor-pointer font-extralight">
        Privacy Policy
      </Link>
    </footer>
  );
};
export default Footer;
