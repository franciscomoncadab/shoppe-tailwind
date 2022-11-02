import React from "react";
import Rating from "./Rating";
import { ReactComponent as Ratings } from "../../assets/icons/rating.svg";

function FormReview() {
  return (
    <div className="w-[50%] ml-[44px]">
      <h2 className="text-[20px] mt-[42px]">Add a Review</h2>
      <p className="text-dark-gray mt-[11px] mb-[54px]">
        Your email address will not be published. Required fields are marked *
      </p>
      <form className="relative flex flex-col gap-[18px] space-y-5 h-[540px]">
        <input 
          placeholder="Your Review*"
          type={"text"}
          className="border-b border-gray text-dark-gray pb-[61px]"
        />
        <input 
          placeholder="Enter your Name*"
          type="text"
          className="border-b border-gray text-dark-gray pb-[16px]"
        />
        <input 
          placeholder="Enter your Email*"
          type="email"
          className="border-b border-gray text-dark-gray pb-[16px]"
        />
        <div className="flex flex-row space-x-2 mt-[24px]">
          <input 
            type="checkbox"
            className="rounded-none w-[18px] h-[18px]"
          />
          <p className="text-[12px] text-dark-gray font-normal">Save my name, email, and website in this browser for the next time I comment</p>
        </div>
        <div>
          <p className="font-normal text-[14px] text-dark-gray mb-[13.39px]">Your Rating*</p>
          <div>
          <Ratings 
            className="absolute mt-[6px]"
          />
          <Rating 
            color="text-white"
          />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-black h-[53px] w-[123px] font-medium rounded-md text-sm px-5 py-2.5 text-center hover:bg-white hover:text-black hover:border-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormReview;
