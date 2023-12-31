import Link from 'next/link';
import Banner from './Banner';
import Image from 'next/image';
import { useState } from 'react';
import { navLinks } from '../../constants';
import { useRouter } from 'next/router';
import DropdownLink from '../../helpers/DropdownLink';
import { Menu } from '@headlessui/react';
import { BiSolidDownArrow } from 'react-icons/bi';
import { useDropdown } from '../../helpers/DropdownProvider';

const Mobile = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenArrow, setIsOpenArrow] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleArrow = () => {
    setIsOpenArrow(!isOpenArrow);
  };

  return (
    <nav className="fixed top-0 w-full flex flex-col z-50 shadow-shadow2">
      {/* <Banner /> */}
      <div className="flex justify-between items-center px-4 bg-main1">
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
          <p className="uppercase tracking-[1.3px]">ecdma</p>
        </Link>
        <div className="py-4 cursor-pointer z-50" onClick={toggle}>
          <div className={`line ${isOpen ? 'line1-open' : ''}`} />
          <div className={`line line2 ${isOpen ? 'line2-open' : ''}`} />
          <div className={`line ${isOpen ? 'line3-open' : ''}`} />
        </div>
        <div
          className={`fixed top-0 left-0 w-full bg-main1/90 p-0 pt-8 pb-16 m-0 z-40 duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } bottom-${isOpen ? '0' : '100%'} h-${isOpen ? 'screen' : '0'}`}
        >
          <ul className="h-full flex flex-col justify-around items-center relative pt-10">
            {navLinks.map(link => (
              <li key={link.name} className="text-light2 relative">
                {link.dropdownLinks && link.dropdownLinks.length > 0 ? (
                  <Menu as="div" className="relative inline-block z-50">
                    <Menu.Button
                      className={`flex items-center gap-1 ${
                        router.pathname === link.url ||
                        link.dropdownLinks.some(
                          dropdownLink => router.pathname === dropdownLink.url
                        )
                          ? 'active'
                          : ''
                      }`}
                      onClick={toggleArrow}
                    >
                      {link.name}
                      <span
                        style={{
                          transition: 'transform 0.3s ease-in-out',
                          transform: `rotate(${isOpenArrow ? '180deg' : '0'})`,
                          display: 'inline-block', // Ensures the span doesn't take up the full width
                        }}
                      >
                        <BiSolidDownArrow />
                      </span>
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 w-56 origin-top-right bg-main1 p-2 shadow-lg rounded-md flex flex-col">
                      {link.dropdownLinks.map(dropdownLink => (
                        <Menu.Item key={dropdownLink.name}>
                          <DropdownLink
                            className={`dropdown-link ${
                              router.pathname === dropdownLink.url
                                ? 'active'
                                : ''
                            }`}
                            href={dropdownLink.url}
                          >
                            {dropdownLink.name}
                          </DropdownLink>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>
                ) : (
                  <Link
                    href={link.url}
                    className={router.pathname === link.url ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Mobile;
