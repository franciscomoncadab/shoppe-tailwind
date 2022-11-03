import React from "react";
import product1 from "../../assets/images/ImgT01.png";
import TextProducts from "../molecules/TextProducts";

function DetailsImage() {
  return (
    <div className="sm:flex sm:flex-row sm:justify-center sm:gap-[64px] sm:m-auto sm:w-full sm:h-full">
      <div className="w-full px-3 sm:h-full sm:flex sm:flex-col-2 sm:gap-[39px] sm:w-[699px] md:w-[58.78%] sm:px-0">
        <ul className="sm:flex sm:flex-col sm:gap-[39px] hidden">
          <li>
            <img
              className="w-[120px] h-[120px] rounded-md"
              src={product1}
              alt="img1"
            />
          </li>
          <li>
            <img
              className="w-[120px] h-[120px] rounded-md"
              src={product1}
              alt="img2"
            />
          </li>
          <li>
            <img
              className="w-[120px] h-[120px] rounded-md"
              src={product1}
              alt="img3"
            />
          </li>
          <li>
            <img
              className="w-[120px] h-[120px] rounded-md"
              src={product1}
              alt="img4"
            />
          </li>
        </ul>
        <img
          className="w-full h-full sm:w-[540px] sm:h-[600px] sm:rounded-md"
          src={product1}
          alt="img5"
        />
      </div>
      <TextProducts />
    </div>
  );
}

export default DetailsImage;
