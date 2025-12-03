import React from 'react';
import { PawPrint, Snowflake, HeartHandshake, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-20 bg-linear-to-b from-blue-50 to-white">
      {/* HERO SECTION */}
      <section className="w-11/12 mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          About <span className="text-blue-600">WarmPaws</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
          Your trusted winter-special pet care companion — dedicated to keeping
          pets warm, safe, and happy during cold seasons.
        </p>
      </section>

      {/* INFO SECTION */}
      <section className="w-11/12 mx-auto grid md:grid-cols-2 gap-10 py-10 items-center">
        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://i.ibb.co.com/RTRWCN5n/Pet-Sauna-Therapy.webp"
            alt="Pet Care Winter"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Winter Care Begins With WarmPaws
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Cold temperatures can be harsh on pets. WarmPaws was created to
            provide essential guidance, services, grooming, clothing, health
            support, and outdoor protection for your furry friends — all in one
            platform. We help pet owners ensure their pets stay cozy, safe, and
            healthy throughout winter.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            With expert doctors, curated winter products, and user-friendly
            features, WarmPaws transforms winter pet care into a simple and
            enjoyable experience.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Why Choose <span className="text-blue-600">WarmPaws?</span>
        </h2>

        <div className="w-11/12 mx-auto grid md:grid-cols-4 gap-8 mt-10">
          {/* card 1 */}
          <div className="p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition shadow text-center">
            <PawPrint className="mx-auto text-blue-600" size={42} />
            <h3 className="text-xl font-semibold mt-4">
              Pet-Friendly Services
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Designed specifically for winter pet needs — clothing, grooming,
              health tips & more.
            </p>
          </div>

          {/* card 2 */}
          <div className="p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition shadow text-center">
            <Snowflake className="mx-auto text-blue-600" size={42} />
            <h3 className="text-xl font-semibold mt-4">Winter-Safe Guidance</h3>
            <p className="text-gray-600 text-sm mt-2">
              Expert-approved advice for protecting pets from winter cold.
            </p>
          </div>

          {/* card 3 */}
          <div className="p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition shadow text-center">
            <HeartHandshake className="mx-auto text-blue-600" size={42} />
            <h3 className="text-xl font-semibold mt-4">
              Trusted Professionals
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Access certified veterinarians and specialists any time.
            </p>
          </div>

          {/* card 4 */}
          <div className="p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition shadow text-center">
            <ShieldCheck className="mx-auto text-blue-600" size={42} />
            <h3 className="text-xl font-semibold mt-4">Safe & Secure</h3>
            <p className="text-gray-600 text-sm mt-2">
              Your pet’s safety is our top priority — verified information only.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-16 w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          WarmPaws is committed to improving pet care during winter by offering
          reliable, expert-driven solutions and creating a space where pet
          owners can keep their pets warm, protected, and joyful — always.
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 bg-linear-to-r from-blue-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold">
          Ready to Give Your Pet Better Winter Care?
        </h2>
        <p className="mt-2 text-lg">
          Explore our services and stay worry-free all winter.
        </p>

        <a
          href="/service"
          className="inline-block mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:scale-105 transition"
        >
          View Services
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
