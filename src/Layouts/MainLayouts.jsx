import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-slate-100'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;