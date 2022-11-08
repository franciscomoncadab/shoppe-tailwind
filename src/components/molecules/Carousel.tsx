import React from "react";
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
          spaceBetween={window.innerWidth < 560 ? 10 : 40}
          slidesPerView={window.innerWidth < 560 ? 2.15 : 3}
          freeMode={false}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <button className="border-solid border-[1px] border-dark-gray rounded-md px-[48px] py-[10px]">
              <p>Earring</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="border-solid border-[1px] border-dark-gray rounded-md px-[48px] py-[10px]">
              <p>Necklace</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="border-solid border-[1px] border-dark-gray rounded-md px-[48px] py-[10px]">
              <p>Others</p>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-[16px] sm:mt-[5px]">
        <Swiper
          spaceBetween={20}
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
          className="swiper rounded-md relative"
        >
          <SwiperSlide>
            <img
              src={
                window.innerWidth < 873
                  ? "./images/img1.png"
                  : "./images/img01.png"
              }
              alt="imagen1"
            />
            <p className="absolute z-10 text-white text-[20px] bottom-[165px] right-[56%] font-medium sm:bottom-[377px] sm:text-[33px] sm:right-[974px]">
              {window.innerWidth < 873 ? "Gold Big Hoops" : "Gold big hoops"}
            </p>
            <p className="absolute z-10 text-white font-normal text-[12px] bottom-[140px] right-[84.4%] sm:text-[26px] sm:bottom-[326px] sm:right-[1115px]">
              $ 68,00
            </p>
            <button className="absolute z-10 rounded-[4px] border-[1px] text-white hover:text-black hover:bg-white hover:border-white text-center bottom-[80px] right-[64.8%] sm:py-[9.5px] sm:px-[32px] sm:right-[1015px] sm:bottom-[228px] py-[6px] px-[19px]">
            <Link to="*" className="text-center text-[12px] font-normal sm:font-bold sm:text-[20px]">
              View Product
              </Link>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/img2.jpg" alt="imagen2" />
            <p className="absolute z-10 text-white text-[20px] bottom-[165px] right-[66.5%] font-medium sm:bottom-[377px] sm:text-[33px] sm:right-[1033px]">
              Jewelry set{" "}
            </p>
            <br />
            <p className="absolute z-10 text-white font-normal text-[12px] bottom-[140px] right-[84.4%] sm:text-[26px] sm:bottom-[326px] sm:right-[1115px]">
              $ 80,00
            </p>
            <button className="absolute z-10 rounded-[4px] border-[1px] text-white hover:text-black hover:bg-white hover:border-white text-center bottom-[80px] right-[64.8%] sm:py-[9.5px] sm:px-[32px] sm:right-[1015px] sm:bottom-[228px] py-[6px] px-[19px]">
            <Link to="*" className="text-center text-[12px] font-normal sm:font-bold sm:text-[20px]">
              View Product
              </Link>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/img3.jpg" alt="imagen3" />
            <p className="absolute z-10 text-white text-[20px] bottom-[165px] right-[26.5%] font-medium sm:bottom-[377px] sm:text-[33px] sm:right-[793px]">
              Necklace and diamond set{" "}
            </p>
            <br />
            <p className="absolute z-10 text-white font-normal text-[12px] bottom-[140px] right-[82.4%] sm:text-[26px] sm:bottom-[326px] sm:right-[1099px]">
              $ 250,00
            </p>
            <button className="absolute z-10 rounded-[4px] border-[1px] text-white hover:text-black hover:bg-white hover:border-white text-center bottom-[80px] right-[64.8%] sm:py-[9.5px] sm:px-[32px] sm:right-[1015px] sm:bottom-[228px] py-[6px] px-[19px]">
            <Link to="*" className="text-center text-[12px] font-normal sm:font-bold sm:text-[20px]">
              View Product
              </Link>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/img4.jpg" alt="imagen4" />
            <p className="absolute z-10 text-white text-[20px] bottom-[165px] right-[53.5%] font-medium sm:bottom-[377px] sm:text-[33px] sm:right-[954px]">
              Luxury basic set{" "}
            </p>
            <br />
            <p className="absolute z-10 text-white font-normal text-[12px] bottom-[140px] right-[84.4%] sm:text-[26px] sm:bottom-[326px] sm:right-[1115px]">
              $ 68,00
            </p>
            <button className="absolute z-10 rounded-[4px] border-[1px] text-white hover:text-black hover:bg-white hover:border-white text-center bottom-[80px] right-[64.8%] sm:py-[9.5px] sm:px-[32px] sm:right-[1015px] sm:bottom-[228px] py-[6px] px-[19px]">
            <Link to="*" className="text-center text-[12px] font-normal sm:font-bold sm:text-[20px]">
              View Product
              </Link>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/img5.jpg" alt="imagen5" />
            <p className="absolute z-10 text-white text-[20px] bottom-[165px] right-[35%] font-medium sm:bottom-[377px] sm:text-[33px] sm:right-[845px]">
              Gold bracelets and ring{" "}
            </p>
            <br />
            <p className="absolute z-10 text-white font-normal text-[12px] bottom-[140px] right-[84.4%] sm:text-[26px] sm:bottom-[326px] sm:right-[1115px]">
              $ 88,00
            </p>
            <button className="absolute z-10 rounded-[4px] border-[1px] text-white hover:text-black hover:bg-white hover:border-white text-center bottom-[80px] right-[64.8%] sm:py-[9.5px] sm:px-[32px] sm:right-[1015px] sm:bottom-[228px] py-[6px] px-[19px]">
              <Link to="*" className="text-[12px] font-normal sm:font-bold sm:text-[20px]">
              View Product
              </Link>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
