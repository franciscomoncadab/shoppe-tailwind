import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { ReactComponent as Next } from "../../assets/icons/next.svg";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import "../../assets/scss/main.scss";
import similar1 from "../../assets/images/ImgM01.png";
import similar2 from "../../assets/images/Img02.png";
import similar3 from "../../assets/images/Img04.png";

function SimilarItems() {
  return (
    <div>
      <h1 className="pt-2 my-1 text-2xl px-3 font-medium">Similar Items</h1>
      <Swiper
        loop={true}
        spaceBetween={window.innerWidth < 560 ? 10 : 40}
        slidesPerView={window.innerWidth < 560 ? 2.4 : 3}
        freeMode={false}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperS py-2"
      >
        <SwiperSlide>
          <div>
            <img src={similar1} alt="img1" />
            <p className="py-2 text-left">Plaine Necklace</p>
            <p className="text-gold text-left"> $ 30.00</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={similar2} alt="" />
            <p className="py-2 text-left">Ollie Earrings</p>
            <p className="text-gold text-left"> $ 30.00</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={similar3} alt="" />
            <p className="py-2 text-left">Kaede Hair Pin</p>
            <p className="text-gold text-left"> $ 30.00</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="px-3 mt-8 mb-10 flex justify-between">
        <p className="text-gold text-sm">Continue shipping</p>
        <Next className="mt-1" />
      </div>
    </div>
  );
}

export default SimilarItems;
