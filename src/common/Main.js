import React from 'react';

function Main({ children }) {
  return (
    <main>
      <h1 className='page-title'>ComicsMar - World of comics</h1>
      {children}
    </main>
  );
}

export default Main;
