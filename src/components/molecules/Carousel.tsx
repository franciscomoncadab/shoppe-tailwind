import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

import "../../assets/scss/main.scss";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { Pagination, Autoplay } from "swiper";

function Carousel() {
  return (
    <div className="w-full">
      <div>
        <Swiper
          loop={false}
          spaceBetween={window.innerWidth < 560 ? 10 : 40}
          slidesPerView={window.innerWidth < 560 ? 2.3 : 3}
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
            <button className="border-solid border-2 border-light-gray rounded-md h-12 w-40">
              <p>Others</p>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="relative z-0">
        <p className="absolute z-10 text-white mt-[270px] pl-6 xs:pl-12 sm:pl-0 sm:font-medium sm:mt-[240px] sm:text-[33px] sm:ml-[40px]">
          Gold big hoops{" "}
        </p>
        <br />
        <p className="absolute z-10 text-white font-normal text-xs sm:text-[26px] mt-[286px] sm:mt-[292px] sm:ml-[40px] sm:pl-0 pl-6 xs:pl-12">
          $ 68,00
        </p>
        <button className="absolute z-10 rounded-md border-solid border-2 xs:ml-12 text-white text-center sm:font-bold sm:p-0 sm:py-[9px] sm:px-[32px] sm:ml-[40px] sm:text-[20px] mt-[320px] sm:mt-[367px] ml-6 p-2 xs:px-4">
          {" "}
          View Product
        </button>
        <Swiper
          spaceBetween={20}
          autoplay={window.innerWidth > 873 ? true : false && {
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active"
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="swiper rounded-md"
        >
          <SwiperSlide className="z-10">
            <img src={window.innerWidth < 873 ? "./images/img1.png" : "./images/img01.png"} alt="imagen1" />
          </SwiperSlide>
          <SwiperSlide className="z-10">
            <img src="./images/img2.jpg" alt="imagen2"  />
          </SwiperSlide>
          <SwiperSlide className="z-10">
            <img src="./images/img3.jpg" alt="imagen3"  />
          </SwiperSlide>
          <SwiperSlide className="z-10">
            <img src="./images/img4.jpg" alt="imagen4"  />
          </SwiperSlide>
          <SwiperSlide className="z-10">
            <img src="./images/img5.jpg" alt="imagen5"  />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
