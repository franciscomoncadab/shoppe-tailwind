import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/atoms/SearchBar";
import { HOME } from "../routes/routes";

function NotFoundPage() {
  return (
    <div>
      <hr  className="hidden sm:block sm:mt-[18px] text-gray" />
      <SearchBar />
      <div 
      className="relative flex flex-col justify-center items-center">
      <h1 className="text-[20px] mt-[205px] sx:text-[33px] font-medium sx:mt-[255px] p-3">404 ERROR</h1>
      <p className="text-dark-gray text-[12px] sx:text-[20px] font-normal mt-[10px] sx:mt-[24px]">
          This page not found;
          <br/>
      </p>
      <p className="text-dark-gray text-[12px] sx:text-[20px] font-normal mt-[10px] sx:mt-0">back to home and start again</p> 
      <button className="mt-[30px] mb-96 sx:mb-0 sx:mt-[64px] ">
          <Link to={HOME} className="text-[12px] font-normal px-[25px] py-[6px] rounded-[4px] sx:font-bold sx:text-[16px] border sx:rounded-sm sx:px-[49px] sx:py-[16px]">HOMEPAGE</Link>
      </button>
    </div>
    </div>
  );
}

export default NotFoundPage;
