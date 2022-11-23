import React from "react";
import TextProducts from "./TextProducts";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss/pagination";
import { Pagination, Navigation } from "swiper";
import {imgProduct} from "../productImg"
import "../../assets/scss/main.scss";


function DetailsImageM() {
  return (
    <div>
      <div>
      <Swiper
        spaceBetween={18}
        pagination={{
          type: "progressbar",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite"
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="__swiper "
      >
        {imgProduct.map((img, i) => {
          return (
               <SwiperSlide key={i} className="__swiper-slide">
                    <img 
                         src={`./images/${img.images}`}
                         alt="imgMobile"
                         className=""
                    />
               </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
      <TextProducts />
    </div>
  );
}

export default DetailsImageM;
