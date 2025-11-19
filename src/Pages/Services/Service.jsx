import React, { useEffect } from 'react';
import usePetCare from '../../Hooks/usePetCare';
import AllService from '../All service/AllService';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const { petCare } = usePetCare();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="w-11/12 mx-auto py-16">
      <title>WarmPaws | Service</title>
      <h1
        className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mb-4"
        data-aos="fade-down"
      >
        All Pet Care Services
      </h1>

      <p
        className="text-center text-gray-600 mb-10 font-medium max-w-2xl mx-auto"
        data-aos="fade-up"
      >
        Our expert pet care services ensure your furry friends stay healthy,
        happy, and warm throughout the year. From grooming to health check-ups,
        we provide trusted services tailored to your pet’s needs.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {petCare.map((pet) => (
          <div key={pet.serviceId} data-aos="zoom-in">
            <AllService pet={pet} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
