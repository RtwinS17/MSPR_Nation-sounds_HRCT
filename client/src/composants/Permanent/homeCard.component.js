import React from 'react';
import './homeCard.style.css';

export const MainContent = ({ children }) => {
  return (
    <main className='w-screen h-screen flex justify-center items-center homeContainer overflow-y-auto'>
      <div className='mainContent-container p-3 rounded-xl'>{children}</div>
    </main>
  );
};
