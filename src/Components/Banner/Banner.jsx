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
    <div className="relative w-full overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[500px] md:h-[700px] lg:h-[800px]  shadow-xl"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute left-10 bottom-20 text-white max-w-md">
                <h2 className="text-4xl font-bold mb-3">{slide.title}</h2>
                <p className="text-lg">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
