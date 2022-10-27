import React, { useState } from "react";
import product1 from "../../assets/images/ImgT01.png";
import TextProducts from "../molecules/TextProducts";

function DetailsImage() {
  return (
    <div className="relative flex justify-between mt-16 ml-12 w-[95%]">
      <div className="flex flex-col-2 gap-[39px] justify-between w-[50%]">
        <ul className="flex flex-col gap-[39px]">
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
          className="w-[490px] h-[556px] rounded-md"
          src={product1}
          alt="img5"
        />
      </div>
      <TextProducts />
    </div>
  );
}

export default DetailsImage;
