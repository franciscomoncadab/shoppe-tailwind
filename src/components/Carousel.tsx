import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
// import  img2  from './images/img2.jpg'

import "../assets/scss/main.scss";

import { Pagination } from "swiper";

function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper rounded-lg w-288px h-299px p-3"
      >
        <SwiperSlide>
          <img src='./images/img1.png' alt='imagen1' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./images/img2.jpg' alt='imagen2' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./images/img3.jpg' alt='imagen3' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./images/img4.jpg' alt='imagen4' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./images/img5.jpg' alt='imagen5' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
