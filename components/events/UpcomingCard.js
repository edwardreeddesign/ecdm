import Image from 'next/image';
import React, { useState, useEffect } from 'react';

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

const UpcomingCard = ({ upcomingEvent }) => {
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
    <div className="w-full max-w-sm md:max-w-xs  bg-accent1 flex flex-col items-center justify-around shadow-shadow1 rounded-md my-8  p-4">
      <h1 className="text-2xl text-center tracking-wide font-bold text-dark1 mb-4">
        {upcomingEvent.name}
      </h1>
      <p className="mb-4 text-sm text-dark1">{upcomingEvent.description}</p>
      <button onClick={() => openModal(upcomingEvent.imageUrl)}>
        <div className="relative w-full h-80 mb-4">
          <Image
            src={upcomingEvent.imageUrl}
            alt="Events"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="my-2 font-bold tracking-wider text-dark1">
          {upcomingEvent.date}
        </p>
      </button>

      {modalOpen && (
        <ImageModal imageUrl={selectedImageUrl} onClose={closeModal} />
      )}
    </div>
  );
};

export default UpcomingCard;
