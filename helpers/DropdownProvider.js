// DropdownProvider.js

import React, { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};
