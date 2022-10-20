import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import "../assets/scss/main.scss";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { Pagination, Autoplay } from "swiper";

function Carousel() {
  return (
    <div className="w-full sm:px-12">
      <div>
        <Swiper
          loop={false}
          spaceBetween={window.innerWidth < 560 ? 10 : 40}
          slidesPerView={window.innerWidth < 560 ? 2.3 : 3}
          freeMode={false}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper pl-1.5"
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
        <p className="absolute z-10 text-white mt-[270px] text-2xl pl-6 xs:pl-12">
          Gold Big Hoops{" "}
        </p>
        <br />
        <p className="absolute z-10 text-white text-xs mt-[286px] pl-6 xs:pl-12">
          $ 68.00
        </p>
        <button className="absolute z-10 rounded-md border-solid border-l-2 border-r-2 border-x-2 border-y-2 xs:ml-12 text-white text-center mt-[320px] ml-6 p-2 xs:px-4">
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
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="swiper p-3 -top-5"
        >
          <SwiperSlide className="z-10">
            <img src={window.innerWidth < 873 ? "./images/img1.png" : "./images/img01.png"} alt="imagen1" className="rounded-lg" />
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
    </div>
  );
}

export default Carousel;
