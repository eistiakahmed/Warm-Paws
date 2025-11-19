import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import usePetCare from '../../Hooks/usePetCare';
import { FaStar, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import toast, { Toaster } from 'react-hot-toast';

const ServiceDetails = () => {
  const { id } = useParams();
  const { petCare, loading } = usePetCare();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const serviceFilter = petCare.find((item) => item.serviceId === Number(id));

  if (loading)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <span className="loading loading-spinner loading-lg text-indigo-600"></span>
      </div>
    );

  if (!serviceFilter)
    return (
      <div className="text-center mt-20 text-red-500 font-semibold text-lg">
        Service not found!
      </div>
    );

  const handleBooking = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success('Booking Successful!');
  };

  const {
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = serviceFilter;

  return (
    <div className="w-11/12 mx-auto py-10">
      <Toaster position="top-right" />
      <title>{serviceName}</title>

      <div className="grid md:grid-cols-2 gap-10">
        <div
          className="overflow-hidden rounded-2xl shadow-md"
          data-aos="zoom-in"
        >
          <img
            src={image}
            alt={serviceName}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate__animated animate__fadeInDown">
            {serviceName}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 animate__animated animate__fadeIn">
            {description}
          </p>

          <span className="inline-block border border-indigo-500 text-indigo-600 text-sm font-medium px-4 py-1.5 rounded-full animate__animated animate__fadeInUp">
            {category}
          </span>

          <div
            className="bg-gray-50 rounded-xl p-5 shadow-inner my-5 animate__animated animate__fadeIn"
            data-aos="fade-up"
          >
            <p className="font-semibold text-gray-800">{providerName}</p>
            <p className="flex items-center gap-2 text-gray-500 text-sm mt-1">
              <FaEnvelope className="text-indigo-500" />
              {providerEmail}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow p-4 text-center animate__animated animate__fadeIn">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-xl font-semibold text-indigo-600">${price}</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 text-center animate__animated animate__fadeIn">
              <p className="text-sm text-gray-500">Rating</p>
              <p className="flex justify-center items-center gap-1 text-yellow-500 text-xl font-semibold">
                <FaStar /> {rating}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 text-center animate__animated animate__fadeIn">
              <p className="text-sm text-gray-500">Available Slots</p>
              <p className="text-xl font-semibold text-indigo-600">
                {slotsAvailable}
              </p>
            </div>
          </div>

          <div className="mt-8" data-aos="fade-up">
            <form
              onSubmit={handleBooking}
              className="space-y-4 rounded-2xl animate__animated animate__fadeInUp"
            >
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                Book This Service
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-3 rounded-lg shadow-md animate__animated animate__pulse"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
