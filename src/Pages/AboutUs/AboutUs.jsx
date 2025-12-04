import React, { useEffect } from 'react';
import { PawPrint, Snowflake, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="pt-20 bg-linear-to-b from-blue-50 to-white">
      
      <section
        className="w-11/12 mx-auto text-center py-16"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 animate__animated animate__fadeInDown">
          About{' '}
          <span className="leading-tight text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">
            WarmPaws
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4 animate__animated animate__fadeIn">
          Your trusted winter-special pet care companion — dedicated to keeping
          pets warm, safe, and happy during cold seasons.
        </p>
      </section>

      
      <section className="w-11/12 mx-auto grid md:grid-cols-2 gap-10 py-10 items-center">
        
        <div
          className="rounded-3xl overflow-hidden shadow-xl"
          data-aos="fade-right"
        >
          <img
            src="https://i.ibb.co/RTRWCN5n/Pet-Sauna-Therapy.webp"
            alt="Pet Care Winter"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        
        <div data-aos="fade-left" className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 animate__animated animate__fadeInLeft">
            Winter Care Begins With WarmPaws
          </h2>
          <p className="text-gray-600 leading-relaxed animate__animated animate__fadeInLeft animate__delay-1s">
            Cold temperatures can be harsh on pets. WarmPaws was created to
            provide essential guidance, services, grooming, clothing, health
            support, and outdoor protection for your furry friends — all in one
            platform.
          </p>
          <p className="text-gray-600 leading-relaxed animate__animated animate__fadeInLeft animate__delay-2s">
            With expert doctors, curated winter products, and user-friendly
            features, WarmPaws transforms winter pet care into a simple and
            enjoyable experience.
          </p>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <h2
          className="text-3xl font-bold text-center text-gray-800"
          data-aos="fade-up"
        >
          
          <span className="leading-tight text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">
            WarmPaws?
          </span>
        </h2>

        <div className="w-11/12 mx-auto grid md:grid-cols-4 gap-8 mt-10">
          {[
            {
              icon: <PawPrint className="mx-auto text-blue-600" size={42} />,
              title: 'Pet-Friendly Services',
              desc: 'Designed specifically for winter pet needs — clothing, grooming, health tips & more.',
              aos: 'fade-up',
            },
            {
              icon: <Snowflake className="mx-auto text-blue-600" size={42} />,
              title: 'Winter-Safe Guidance',
              desc: 'Expert-approved advice for protecting pets from winter cold.',
              aos: 'fade-up',
            },
            {
              icon: (
                <HeartHandshake className="mx-auto text-blue-600" size={42} />
              ),
              title: 'Trusted Professionals',
              desc: 'Access certified veterinarians and specialists any time.',
              aos: 'fade-up',
            },
            {
              icon: <ShieldCheck className="mx-auto text-blue-600" size={42} />,
              title: 'Safe & Secure',
              desc: 'Your pet’s safety is our top priority — verified information only.',
              aos: 'fade-up',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition shadow text-center animate__animated animate__fadeInUp"
              data-aos={feature.aos}
              data-aos-delay={idx * 150}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-16 w-11/12 mx-auto text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-gray-800 animate__animated animate__fadeIn">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4 animate__animated animate__fadeIn animate__delay-1s">
          WarmPaws is committed to improving pet care during winter by offering
          reliable, expert-driven solutions and creating a space where pet
          owners can keep their pets warm, protected, and joyful — always.
        </p>
      </section>

      {/* CTA */}
      <section
        className="py-16 bg-linear-to-r from-blue-600 to-purple-600 text-white text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold animate__animated animate__fadeInDown">
          Ready to Give Your Pet Better Winter Care?
        </h2>
        <p className="mt-2 text-lg animate__animated animate__fadeIn animate__delay-1s">
          Explore our services and stay worry-free all winter.
        </p>

        <Link
          to="/service"
          className="inline-block mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:scale-105 transition transform duration-300 animate__animated animate__pulse"
        >
          View Services
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
