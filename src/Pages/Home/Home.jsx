import React, { useEffect } from 'react';
import AllService from '../All service/AllService';
import usePetCare from '../../Hooks/usePetCare';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Banner from '../../Components/Banner/Banner';
import PricingCard from '../../Components/PricingCard/PricingCard';

const Home = () => {
  const { petCare } = usePetCare();
  const popularService = petCare.slice(0, 4);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const winterCareTips = [
    {
      tipId: 1,
      title: 'Ensure a Warm and Cozy Indoor Environment',
      description:
        'Provide a comfortable indoor environment with insulated bedding, blankets, or heated pet pads. Keep their resting area away from drafty windows or floors.',
      category: 'Comfort',
    },
    {
      tipId: 2,
      title: 'Protect Paws, Fur, and Skin from Harsh Weather',
      description:
        'Use paw wax or pet booties to prevent cracking and dryness. Brush their fur regularly to keep natural oils distributed.',
      category: 'Clothing & Health',
    },
    {
      tipId: 3,
      title: 'Maintain Proper Nutrition and Health Monitoring',
      description:
        'Increase quality protein and fats, keep fresh water available, and schedule regular vet checkups during winter.',
      category: 'Nutrition & Wellness',
    },
  ];

  const expertVets = [
    {
      vetId: 1,
      name: 'Dr. Emily Johnson',
      specialization: 'Small Animal & Canine Health',
      experience: '10 years',
      contactEmail: 'emily.johnson@warmpaws.com',
      image: 'https://i.ibb.co/C3yB8kb4/Emily-Johnson.jpg',
    },
    {
      vetId: 2,
      name: 'Dr. Michael Smith',
      specialization: 'Pet Nutrition & Wellness',
      experience: '8 years',
      contactEmail: 'michael.smith@warmpaws.com',
      image: 'https://i.ibb.co/C5NLf4sc/michael-l-smith-square.jpg',
    },
    {
      vetId: 3,
      name: 'Dr. Laura Davis',
      specialization: 'Surgical & Emergency Care',
      experience: '12 years',
      contactEmail: 'laura.davis@warmpaws.com',
      image: 'https://i.ibb.co/7xLTC90Z/Pzrf4-O-p-400x400.jpg',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Williams',
      petName: 'Buddy',
      feedback:
        'Thanks to the winter care tips, Buddy stayed healthy and happy during the cold months! Highly recommend WarmPaws services.',
      image: 'https://i.ibb.co/FLZMCjtc/8595234bc115309b1b3accf0ba07b30e.jpg',
    },
    {
      id: 2,
      name: 'James Carter',
      petName: 'Mittens',
      feedback:
        'The vets at WarmPaws are amazing! They helped me improve Mittens’ nutrition and overall health during winter.',
      image:
        'https://i.ibb.co/Ng1V5gYL/Jimmy-Carter-Official-Portrait2-3x4-cropped.jpg',
    },
    {
      id: 3,
      name: 'Emily Brown',
      petName: 'Charlie',
      feedback:
        'I loved the personalized care tips. Charlie loved the cozy winter bedding provided by WarmPaws!',
      image: 'https://i.ibb.co/Z1KzvJg6/Emily-Brown-2022-scaled.jpg',
    },
  ];

 

  return (
    <div className="w-11/12 mx-auto">
      <Banner />

      {/* Popular Services */}
      <section data-aos="fade-up" className="py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">
            Popular Winter Care Services
          </h1>
          <p className="text-gray-500 mt-4 text-lg md:text-xl">
            Discover trusted winter care services to keep your pets warm and
            healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  mx-auto mt-10">
          {popularService.map((pet) => (
            <AllService key={pet.serviceId} pet={pet} />
          ))}
        </div>

        <div className="w-full flex justify-center items-center mt-16">
          <Link
            to="/service"
            className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            Explore More
          </Link>
        </div>
      </section>

      {/*  */}

      {/* Winter Care Tips */}
      <section data-aos="fade-right" className=" mx-auto my-16">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mb-10">
          Winter Care Tips for Pets
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winterCareTips.map((careTips) => (
            <div
              key={careTips.tipId}
              className="relative bg-white rounded-xl shadow-lg p-6 overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Side color bar on hover */}
              <div className="absolute top-0 left-0 h-full w-1 bg-linear-to-b from-blue-400 via-purple-500 to-pink-500 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-l-xl"></div>

              <h2 className="text-xl font-semibold text-gray-800 mb-3 relative z-10">
                {careTips.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 h-[70px] relative z-10">
                {careTips.description}
              </p>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium relative z-10">
                {careTips.category}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Card */}
      <PricingCard />
      {/* Expert Vets */}
      <section data-aos="fade-left" className=" mx-auto py-16">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mb-10">
          Meet Our Expert Vets
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertVets.map((vet) => (
            <div
              key={vet.vetId}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={vet.image}
                alt={vet.name}
                className="rounded-full w-32 h-32 object-cover mb-4"
                loading="lazy"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {vet.name}
              </h2>
              <p className=" rounded-full text-sm font-medium  transition">
                {vet.contactEmail}
              </p>
              <p className="text-indigo-600 font-medium mb-1">
                {vet.specialization}
              </p>
              <p className="text-gray-500 text-sm mb-3">
                {vet.experience} experience
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section data-aos="fade-up" className=" mx-auto py-16">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mb-10">
          What Our Pet Owners Say
        </h1>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((test) => (
            <SwiperSlide key={test.id}>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[300px]">
                <img
                  src={test.image}
                  alt={test.name}
                  className="rounded-full w-24 h-24 object-cover mb-4"
                  loading="lazy"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {test.name}
                </h2>
                <p className="text-white font-medium mb-1">
                  <span className="bg-indigo-600 py-1 px-3 rounded-4xl">
                    {test.petName}
                  </span>
                </p>
                <p className="text-gray-600 text-sm">{test.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;
