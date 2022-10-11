import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


import "../assets/scss/main.scss";

import { Pagination } from "swiper";

function Carousel() {
  return (
    <div className="relative z-0">
      <p className="absolute z-10 text-white mt-24 text-2xl ml-5">
          Gold Big Hoops </p>
          <br />
      <p className="absolute z-10 text-white text-xs mt-28 ml-5">
          $ 68.00
        </p>
      <button className="absolute z-10 rounded-md border-solid border-l-2 border-r-2 border-x-2 border-y-2 text-white text-center mt-36 ml-5 p-2"> View Product</button>
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper p-3"
      >
        <SwiperSlide className="z-10">
          <img src='./images/img1.png' alt='imagen1' className="rounded-lg w-full h-{299px} sm:h-80 sm:w-72" />
        </SwiperSlide>
        <SwiperSlide className="z-10">
          <img src='./images/img2.jpg' alt='imagen2' className="rounded-lg w-full h-{299px} sm:h-80 sm:w-72" />
        </SwiperSlide>
        <SwiperSlide className="z-10">
          <img src='./images/img3.jpg' alt='imagen3' className="rounded-lg w-full h-{299px} sm:h-80 sm:w-72" />
        </SwiperSlide>
        <SwiperSlide className="z-10">
          <img src='./images/img4.jpg' alt='imagen4' className="rounded-lg w-full h-{299px} sm:h-80 sm:w-72" />
        </SwiperSlide>
        <SwiperSlide className="z-10">
          <img src='./images/img5.jpg' alt='imagen5' className="rounded-lg w-full h-{299px} sm:h-80 sm:w-72" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
