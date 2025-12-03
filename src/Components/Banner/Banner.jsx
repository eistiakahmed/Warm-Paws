import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import hero1 from '../../assets/hero-1.jpg';
import hero2 from '../../assets/hero-2.jpg';
import hero3 from '../../assets/hero-3.jpg';

const slides = [
  {
    img: hero1,
    title: 'Keep Your Pets Warm This Winter',
    desc: 'Explore the best winter care essentials to keep your furry friends happy and healthy.',
  },
  {
    img: hero2,
    title: 'Comfortable Bedding & Accessories',
    desc: 'Find cozy beds, blankets, and winter accessories tailored for your pets.',
  },
  {
    img: hero3,
    title: 'Healthy & Happy Pets',
    desc: 'Ensure your pets enjoy a joyful winter with our expert-recommended care tips.',
  },
];

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[65vh] md:h-[70vh] lg:h-[75vh]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full overflow-hidden">
              {/* Image with overlay */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Text Content */}
              <div className="absolute left-5 md:left-10 bottom-10 md:bottom-20 max-w-md text-white">
                <h2 className="text-2xl md:text-4xl font-extrabold mb-3 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg mb-5 drop-shadow-md">
                  {slide.desc}
                </p>
                <a
                  href="#services"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-transform duration-300 shadow-lg"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
