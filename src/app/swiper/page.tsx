'use client'

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default () => {
    const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {arr.map((itm)=>
      <SwiperSlide className='bg-red-300 hover:scale-110 transition duration-700 ease-in-out'>{itm}</SwiperSlide>
        )}
    </Swiper>
  );
};