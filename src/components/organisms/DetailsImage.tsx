import React, { useState } from "react";
import product1 from "../../assets/images/ImgT01.png";
import TextProducts from "../molecules/TextProducts";

function DetailsImage() {
  return (
    <div className="sm:relative sm:flex justify-between sm:mt-16 sm:ml-12 sm:w-[95%]">
      <div className="w-full px-3 py-5 sm:flex sm:flex-col-2 sm:gap-[39px] sm:justify-between sm:w-[50%]">
        <ul className="sm:flex sm:flex-col sm:gap-[39px] hidden">
          <li>
            <img
              className="w-[110px] h-[110px] rounded-md"
              src={product1}
              alt="img1"
            />
          </li>
          <li>
            <img
              className="w-[110px] h-[110px] rounded-md"
              src={product1}
              alt="img2"
            />
          </li>
          <li>
            <img
              className="w-[110px] h-[110px] rounded-md"
              src={product1}
              alt="img3"
            />
          </li>
          <li>
            <img
              className="w-[110px] h-[110px] rounded-md"
              src={product1}
              alt="img4"
            />
          </li>
        </ul>
        <img
          className="w-full h-full sm:w-[490px] sm:h-[556px] sm:rounded-md"
          src={product1}
          alt="img5"
        />
      </div>
      <TextProducts />
    </div>
  );
}

export default DetailsImage;
