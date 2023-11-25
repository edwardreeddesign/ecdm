import Image from 'next/image';
import Link from 'next/link';
import Banner from './Banner';
import { navLinks } from '../../constants';
import { useRouter } from 'next/router';
import { Menu } from '@headlessui/react';
import React, { useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import DropdownLink from '../../helpers/DropdownLink';
import { DropdownProvider, useDropdown } from '../../helpers/DropdownProvider';

const Full = () => {
  const { isOpen, toggleDropdown } = useDropdown();
  const router = useRouter();

  const toggleArrow = () => {
    toggleDropdown();
  };

  return (
    <nav className="fixed top-0 w-full flex flex-col z-50">
      {/* <Banner /> */}
      <div className="flex justify-between items-center  px-6 lg:px-10 bg-main1 shadow-shadow2">
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
            essex county district MASONIC ASSOCIATION
          </p>
        </Link>

        <div className="flex items-center justify-between mr-8">
          <ul className="flex gap-8">
            {navLinks.map((link, index) => (
              <li key={link.name} className="text-light2 relative">
                {link.dropdownLinks && link.dropdownLinks.length > 0 ? (
                  <Menu as="div" className="relative inline-block ">
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
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
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
export default Full;
