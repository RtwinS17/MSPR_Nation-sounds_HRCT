import React from 'react';
import './homeCard.style.css';

export const MainContent = ({ children }) => {
  return (
    <main className='w-screen flex-grow min-h-64 flex justify-center homeContainer overflow-y-auto'>
      <div className='mainContent-container min-h-full p-3 rounded-xl'>{children}</div>
    </main>
  );
};
