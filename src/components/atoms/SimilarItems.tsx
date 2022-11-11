import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { ReactComponent as Next } from "../../assets/icons/next.svg";
import { ReactComponent as Car } from "../../assets/icons/car.svg";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as Heart } from "../../assets/icons/heartIcon.svg";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import "../../assets/scss/others/_similarItems.scss";
import similar1 from "../../assets/images/Img032.png";
import similar2 from "../../assets/images/Img02.png";
import similar3 from "../../assets/images/Img04.png";
import { Link } from "react-router-dom";

function SimilarItems() {
  return (
    <div>
      <h1 className="my-2 text-[16px] px-3 font-normal sm:px-0 sm:text-[26px] sm:mt-[96px]">Similar Items</h1>
      <Swiper
        loop={true}
        spaceBetween={(window.innerWidth < 560 ? 10 : 54) }
        slidesPerView={window.innerWidth < 560 ? 2.4 : 3}
        freeMode={false}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="_mySwiperS mt-[44px]"
      >
        <SwiperSlide className="_swiper-slide">
          <Link to="*" className="relative z-0">
            <img src={similar1} alt="img1" />
            <span className="image-container hidden absolute z-10 top-[174px] left-[119px]">
            <Car className="w-[25px] h-[25px]" />
            <Eye className="w-[25px] h-[25px]" />
            <Heart className="fill-black" />
            </span>
            <p className="mt-[24px] text-left text-[20px] font-normal hover:underline">Plaine Necklace</p>
            <p className="text-gold text-left text-[20px] font-medium mt-[10px] hover:underline"> $ 30,00</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="_swiper-slide">
          <Link to="*">
            <img src={similar2} alt="img2" />
            <span className="image-container hidden absolute z-10 top-[174px] left-[119px]">
            <Car className="w-[25px] h-[25px]" />
            <Eye className="w-[25px] h-[25px]" />
            <Heart className="fill-black" />
            </span>
            <p className="mt-[24px] text-left text-[20px] font-normal hover:underline">Ollie Earrings</p>
            <p className="text-gold text-left text-[20px] font-medium mt-[10px] hover:underline"> $ 30,00</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="_swiper-slide">
          <Link to="*">
            <img src={similar3} alt="img3" />
            <span className="image-container hidden absolute z-10 top-[174px] left-[119px]">
            <Car className="w-[25px] h-[25px]" />
            <Eye className="w-[25px] h-[25px]" />
            <Heart className="fill-black" />
            </span>
            <p className="mt-[24px] text-left text-[20px] font-normal hover:underline">Kaede Hair Pin</p>
            <p className="text-gold text-left text-[20px] font-medium mt-[10px] hover:underline"> $ 30,00</p>
          </Link>
        </SwiperSlide>
      </Swiper>
      <div className="px-3 mt-8 mb-10 flex justify-between sm:px-12 sm:hidden ">
        <p className="text-gold text-sm">Continue shipping</p>
        <Next className="mt-1" />
      </div>
    </div>
  );
}

export default SimilarItems;
