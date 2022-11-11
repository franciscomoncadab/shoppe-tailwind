import React from "react";
import { infoSlider } from "../infoSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

import "../../assets/scss/main.scss";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <div className="w-full">
      <div>
        <Swiper
          loop={false}
          spaceBetween={window.innerWidth < 412 ? 7 : 30}
          slidesPerView={window.innerWidth < 413 ? 2.28 : 3}
          freeMode={false}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="*" className="border-solid border-[1px] border-dark-gray rounded-[4px]">
              <p className="text-[12px] py-[10px] px-[50px] font-normal">Earring</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="*" className="border-solid border-[1px] border-dark-gray rounded-[4px]">
              <p className="text-[12px] px-[45px] py-[10px] font-normal">Necklace</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="*"className="border-solid border-[1px] border-dark-gray rounded-[4px]">
              <p className="text-[12px] px-[48px] py-[10px] font-normal">Others</p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-[16px] sm:mt-[5px]">
        <Swiper
          spaceBetween={10}
          autoplay={
            window.innerWidth > 873
              ? true
              : false && {
                  delay: 3000,
                  disableOnInteraction: false,
                }
          }
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="swiper"
        >
          {infoSlider.map((info, index) => {
            return (
              <SwiperSlide key={index}  className="relative z-0">
                <div>
                  <div>
                    <img
                      src={info.img}
                      alt="imgs"
                    />
                  </div>
                  <div className="absolute z-10 top-[180px] sx:top-[280px] sm:w-full sm:top-[222px] text-left">
                    <p className="text-white text-[20px] font-medium sm:text-[33px] ml-[8px] sm:ml-[39px]">
                      {info.title}
                    </p>
                    <p className="text-white font-normal text-[12px] sm:text-[26px] ml-[8px] sm:ml-[39px] sm:mt-[8px]">
                      {info.price}
                    </p>
                    <button className="rounded-[4px] border-[1px] hover:transition duration-300 hover:ease-in text-white ml-[8px] mt-[12px] sm:ml-[39px] py-[3px] sm:py-[9.5px] sm:px-[32px] px-[10px] sm:mt-[48px] hover:bg-opacity-50 hover:bg-white hover:border-white text-center">
                      <Link
                        to="*"
                        className="text-center text-[12px] font-normal sm:font-bold sm:text-[20px]"
                      >
                        View Product
                      </Link>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
