import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import "../assets/scss/main.scss";
import { FreeMode, Navigation, Thumbs } from "swiper";


import { Pagination } from "swiper";

function Carousel() {
  
  return (
    <>
    <div>
      <Swiper
          
          loop={true}
          spaceBetween={-15}
          slidesPerView={2}
          freeMode={false}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <button className="border-solid border-2 border-light-gray rounded-md h-12 w-40">
              <p>Earring</p> 
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="border-solid border-2 border-light-gray rounded-md h-12 w-40">
              <p>Necklace</p>  
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="border-solid border-2 border-light-gray rounded-md h-12 w-40" >
              <p>Others</p>  
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="relative z-0">
        <p className="absolute z-10 text-white mt-44 text-2xl ml-5">
          Gold Big Hoops{" "}
        </p>
        <br />
        <p className="absolute z-10 text-white text-xs mt-48 ml-5">$ 68.00</p>
        <button className="absolute z-10 rounded-md border-solid border-l-2 border-r-2 border-x-2 border-y-2 text-white text-center mt-56 ml-5 p-2">
          {" "}
          View Product
        </button>
        <Swiper
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper p-3"
        >
          <SwiperSlide className="z-10">
            <img src="./images/img1.png" alt="imagen1" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide className="z-10">
            <img src="./images/img2.jpg" alt="imagen2" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide className="z-10">
            <img src="./images/img3.jpg" alt="imagen3" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide className="z-10">
            <img src="./images/img4.jpg" alt="imagen4" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide className="z-10">
            <img src="./images/img5.jpg" alt="imagen5" className="rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
