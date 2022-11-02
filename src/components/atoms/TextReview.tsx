import React from "react";
import stars from "../../assets/images/stars.png";

function TextReview() {
  return (
    <div className="flex flex-col w-[50%] mr-[44px]">
      <div>
        <div className="text-base">
          <h2 className="text-[20px] mb-[76px] mt-[42px]">
            2 Reviews for lira earings
          </h2>
          <div>
            <div className="flex flex-row items-center">
              <h2 className="text-[20px]">Scarlet withch</h2>
              <p className="text-dark-gray text-[14px] ml-[16px] mt-1">
                6 May, 2020
              </p>
            </div>
            <img
              src={stars}
              alt="stars"
              className="h-[18px] w-[138px] mb-[24.36px] mt-[16.39px]"
            />
            <p className="text-dark-gray text-[16px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet.
            </p>
          </div>
        </div>
      </div>
      <hr className="text-gray mt-[39px] mb-[24px]" />
      <div>
        <div className="text-base">
          <div>
            <div className="flex flex-row items-center">
              <h2 className="text-[20px]">Scarlet withch</h2>
              <p className="text-dark-gray text-[14px] ml-[16px] mt-1">
                6 May, 2020
              </p>
            </div>
            <img
              src={stars}
              alt="stars"
              className="h-[18px] w-[138px] my-[24.36px] mt-[16.39px]"
            />
            <p className="text-dark-gray text-[16px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam placerat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextReview;
