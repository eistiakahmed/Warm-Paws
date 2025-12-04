import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import usePetCare from '../../Hooks/usePetCare';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from 'react-icons/fa';

const ServiceDetails = () => {
  const { id } = useParams();
  const { petCare, loading } = usePetCare();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <span className="loading loading-spinner loading-lg text-indigo-600"></span>
      </div>
    );
  }

  // Find the selected service from usePetCare data
  const service = petCare.find((item) => item.serviceId === Number(id));

  if (!service) {
    return (
      <div className="text-center py-20 text-red-600 font-bold text-xl">
        Service Not Found!
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-10">
      <title>{service.serviceName}</title>

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-10 bg-white p-4 rounded-2xl">
        {/* LEFT IMAGE */}
        <div
          className="rounded-xl overflow-hidden shadow-lg"
          data-aos="fade-right"
        >
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-full object-cover hover:scale-105 duration-300"
          />
        </div>

        {/* RIGHT DETAILS */}
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-3">{service.serviceName}</h2>

          <p className="text-xl font-semibold text-indigo-600 mb-4">
            Price: ${service.price}
          </p>

          <span
            className="inline-block bg-indigo-100 text-indigo-700 
          px-4 py-1.5 rounded-full text-sm font-medium"
          >
            {service.category}
          </span>

          {/* KEY FEATURES BOX */}
          <div className="mt-6  rounded-xl p-5 shadow">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Key Features
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Service Duration:</strong> {service.serviceDuration}
              </li>
              <li>
                <strong>Target Pet:</strong> {service.targetPet}
              </li>
              <li>
                <strong>Key Benefit:</strong> {service.keyBenefit}
              </li>
              <li>
                <strong>Material Type:</strong> {service.materialType}
              </li>
              <li>
                <strong>Special Feature:</strong> {service.specializedFeature}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* DESCRIPTION + SPECIFICATION */}
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {/* DESCRIPTION */}
        <div className="md:col-span-2 p-5 bg-white rounded-xl shadow">
          <h3 className="text-2xl font-semibold mb-4">Description</h3>
          <p className="text-gray-700 leading-relaxed">{service.description}</p>
        </div>

        {/* SPEC TABLE LIKE STAR TECH */}
        <div className="p-5 bg-white rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Specifications</h3>

          <table className="w-full text-gray-700">
            <tbody>
              <tr>
                <td className="font-medium py-2">Provider</td>
                <td>{service.providerName}</td>
              </tr>
              <tr>
                <td className="font-medium py-2">Email</td>
                <td>{service.providerEmail}</td>
              </tr>
              <tr>
                <td className="font-medium py-2">Slots</td>
                <td>{service.slotsAvailable}</td>
              </tr>
              <tr>
                <td className="font-medium py-2">Season</td>
                <td>{service.seasonalAvailability}</td>
              </tr>
              <tr>
                <td className="font-medium py-2">Material</td>
                <td>{service.materialType}</td>
              </tr>
              <tr>
                <td className="font-medium py-2">Weight Limit</td>
                <td>{service.minWeightKg} kg</td>
              </tr>
              <tr>
                <td className="font-medium py-2">Service Language</td>
                <td>{service.serviceLanguage}</td>
              </tr>
              <tr>
                <td className="font-medium py-2">Pet Size</td>
                <td>{service.petSizeCompatibility}</td>
              </tr>
              <tr>
                <td className="font-medium py-2">Equipment</td>
                <td>{service.equipmentUsed}</td>
              </tr>
              <tr>
                <td className="font-medium py-2">Age Requirement</td>
                <td>{service.ageRestriction}</td>
              </tr>
              <tr>
                <td className="font-medium py-2">Booking</td>
                <td>{service.bookingRequirement}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-5">
        {/* BOOKING FORM */}
        <div className="p-6 bg-white rounded-xl shadow col-span-2">
          <h3 className="text-2xl font-semibold mb-5">Book This Service</h3>

          <form className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              required
            />

            <button
              type="submit"
              className="md:col-span-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500  text-white py-3 rounded-lg font-semibold  duration-200"
            >
              Confirm Booking
            </button>
          </form>
        </div>

        {/* RATING SECTION */}
        <div className="p-6 bg-white rounded-xl shadow flex flex-col justify-center items-center">
          <h2 className="font-medium text-gray-700">
            <span className="text-4xl font-bold text-indigo-600">
              {service.rating}
            </span>
            <span className="text-lg text-gray-500 ml-1">/ 5</span>
          </h2>

          {/* Dynamic stars */}
          <div className="flex gap-1 mt-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                size={32}
                className={
                  i < service.rating ? 'text-yellow-400' : 'text-gray-300'
                }
              />
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Based on {Math.floor(Math.random() * 300 + 50)} reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
