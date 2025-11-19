import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-gray-50'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;