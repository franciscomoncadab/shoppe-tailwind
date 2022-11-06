import React from "react";
import { ReactComponent as Ratings } from "../../assets/icons/rating.svg";

function FormReview() {
  return (
    <div className="w-[50%] ml-[44px]">
      <h2 className="text-[20px] font-normal mt-[22px]">Add a Review</h2>
      <p className="text-dark-gray text-[13px] font-normal mt-[14px] mb-[54px]">
        Your Email Address Will Not Be Published. Required Fields Are Marked *
      </p>
      <form className="relative flex flex-col space-y-[46px] h-[540px]">
        <input
          placeholder="Your Review*"
          type={"text"}
          className="border-b border-gray text-dark-gray text-[14px] font-normal pb-[58px]"
        />
        <input
          placeholder="Enter your name*"
          type="text"
          className="border-b border-gray text-dark-gray text-[14px] font-normal pb-[13px]"
        />
        <input
          placeholder="Enter your Email*"
          type="email"
          className="border-b border-gray text-dark-gray text-[14px] font-normal pb-[13px]"
        />
      </form>
      <div className="flex flex-row space-x-2 -mt-[270px]">
        <input type="checkbox" className="rounded-none w-[18px] h-[18px]" />
        <p className="text-[12px] text-dark-gray font-normal">
          Save my name, email, and website in this browser for the next time I
          comment
        </p>
      </div>
      <div>
        <p className="font-normal text-[14px] text-dark-gray mt-[46px]">
          Your Rating*
        </p>
        <div className=" mt-[13.39px]">
          <Ratings className="absolute" />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-black mt-[68px] h-[53px] w-[123px] font-bold rounded-[4px] text-[16px] px-5 py-2.5 text-center hover:bg-white hover:text-black hover:border-2"
      >
        Submit
      </button>
    </div>
  );
}

export default FormReview;
