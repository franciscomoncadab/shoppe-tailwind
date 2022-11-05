import React from 'react';
import { ReactComponent as Lense } from '../../assets/icons/lens.svg';

function SearchBar() {
  return (
    <div className="sx:hidden">
      <form className="w-full">
        <div>
          <div  className="relative flex items-center text-black focus-withing:text-gray-300">
            <Lense className="absolute inset-y-0 my-4 w-4 h-5 mx-[8px] bg-gray pointer-events-none" /> 
            <input
            type="search"
            id="search"
            className="pr-3 pl-10 py-2 w-full mb-[16px] mt-[9px] bg-gray border-none rounded-md focus:ring-gray-300" 
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