import { titleReveal } from '../animations/animations';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import UpcomingEvents from '../components/events/UpcomingEvents';
import TrestleBoardInfo from '../components/events/TrestleBoardInfo';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageModal = ({ imageUrl, onClose }) => {
  const handleCloseClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-dark1/90  flex items-center justify-center z-50"
      onClick={handleCloseClick}
    >
      <div className="max-w-full max-h-full p-4 bg-white">
        <Image
          src={imageUrl}
          alt="Full Screen"
          className="max-w-full max-h-full py-8 "
          layout="fill"
          objectFit="contain"
        />
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const EventsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const openModal = imageUrl => {
    setSelectedImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImageUrl('');
    setModalOpen(false);
  };

  useEffect(() => {
    const handleCloseModalClick = event => {
      const modalContent = document.querySelector('.modal-content');
      if (modalContent && !modalContent.contains(event.target)) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener('mousedown', handleCloseModalClick);
    } else {
      document.removeEventListener('mousedown', handleCloseModalClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleCloseModalClick);
    };
  }, [modalOpen]);
  return (
    <Layout title="Events">
      <div className="px-4 md:px-8 lg:px-16 mb-8">
        <motion.h4
          variants={titleReveal}
          className="uppercase tracking-[20px] text-main1 text-lg md:text-2xl text-center mb-4 mt-2 pt-10"
        >
          district association
        </motion.h4>
        <div className=" w-full  md:h-full  border-2 border-main1 m-auto overflow-hidden rounded-md bg-main2 my-8">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=9f5557b73d017cb19358d6f28826549bb29a4a5c3bf4cfa113af79751359d22d%40group.calendar.google.com&ctz=America%2FToronto"
            style={{ border: '0' }}
            width="100%"
            height="600"
          />
        </div>
        <div>
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row mb-4">
            <div className="relative w-full h-80 md:h-96 mb-4">
              <button
                onClick={() =>
                  openModal('/images/events/trestle2023-2024Front.png')
                }
              >
                <Image
                  src="/images/events/trestle2023-2024Front.png"
                  alt="trestle board front"
                  layout="fill"
                />
              </button>
            </div>
            <div className="relative w-full h-80 md:h-96 mb-4">
              <button
                onClick={() =>
                  openModal('/images/events/trestle2023-2024Back.png')
                }
              >
                <Image
                  src="/images/events/trestle2023-2024Back.png"
                  alt="trestle board front"
                  layout="fill"
                />
              </button>
            </div>
            {modalOpen && (
              <ImageModal imageUrl={selectedImageUrl} onClose={closeModal} />
            )}
          </div>
          <div className="my-6">
            <a
              className="border-2 border-accent1 py-2 px-3 transition-all duration-300 hover:scale-95  ease-in"
              href="/images/events/trestle2023-2024.pdf"
              download
            >
              Download Trestle Board
            </a>
          </div>
        </div>
        <UpcomingEvents />
        <TrestleBoardInfo />
      </div>
    </Layout>
  );
};
export default EventsPage;
