import React from 'react';
import Navbar from '../components/navbar';


const DefaultLayout = ({ children }) => {
  return (
    <div>
      <main
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {' '}
        <Navbar/>
        <div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;