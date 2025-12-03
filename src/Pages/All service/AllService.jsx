import React from 'react';
import { Link } from 'react-router';

const AllService = ({ pet }) => {
  const { serviceId, image, serviceName, rating, price } = pet;

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      data-aos="fade-up"
    >
      <div className="h-[220px] w-full overflow-hidden transition-transform duration-500 hover:scale-110">
        <img
          src={image}
          alt={serviceName}
          className="h-[300px] w-full transition-transform duration-500 hover:scale-110 rounded-xl object-cover"
        />
      </div>

      <div className="p-5 flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 animate__animated animate__fadeIn">
          {serviceName}
        </h3>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-yellow-400 font-semibold">{rating} ★</span>
          <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
          <span className="text-gray-500 text-sm font-medium">{price}$</span>
        </div>

        <Link to={`/services/${serviceId}`}>
          <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-full transition-colors duration-300 animate__animated animate__pulse">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllService;
