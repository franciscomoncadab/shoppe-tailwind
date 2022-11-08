import React from 'react';
import { ReactComponent as Lense } from '../../assets/icons/lens.svg';

function SearchBar() {
  return (
    <div className="sx:hidden">
      <form className="w-full">
        <div>
          <div  className="relative flex items-center text-black focus-withing:text-gray-300">
            <Lense className="absolute inset-y-0 my-[18px] w-[12px] h-[12px] ml-[10px] bg-gray pointer-events-none" /> 
            <input
            type="search"
            id="search"
            className="pl-[36px] py-2 w-full mb-[16px] mt-[9px] h-[32px] text-[12px] font-normal bg-gray border-none rounded-md focus:ring-gray-300" 
            placeholder="Search"
            required
            />
          </div>
          
        </div>
      </form>
    </div>

  );
}

export default SearchBar;