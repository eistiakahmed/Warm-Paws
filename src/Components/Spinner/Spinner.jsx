import React from 'react';
import './Spinner.css'; 

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="paw-spinner">
        <div className="paw"></div>
        <div className="paw"></div>
        <div className="paw"></div>
        <div className="paw"></div>
      </div>
    </div>
  );
};

export default Spinner;
