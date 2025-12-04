import React from 'react';
import { Link } from 'react-router';
import { FaStar } from 'react-icons/fa';

const AllService = ({ pet }) => {
  const {
    serviceId,
    image,
    serviceName,
    rating,
    price,
    shortDescription,
    providerName,
    category,
  } = pet;

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col"
      data-aos="fade-up"
    >
      {/* Image Section */}
      <div className="h-[250px] w-full overflow-hidden relative">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0  bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 line-clamp-2 h-[50px]">
          {serviceName}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">{shortDescription}</p>

        <div className="flex gap-2 flex-wrap mt-1">
          <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
            {providerName}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={`${
                index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-yellow-500 font-semibold ml-1">{rating}</span>
        </div>
      </div>

      {/* Footer: Price + Button */}
      <div className="flex items-center justify-between px-5 pb-5 mt-auto">
        <span className="text-2xl font-bold text-gray-800">${price}</span>
        <Link to={`/services/${serviceId}`}>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllService;
