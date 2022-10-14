import React from 'react';
import { ReactComponent as Lense } from '../assets/icons/lens.svg';

function SearchBar() {
  return (
    <div>
      <form>
        <div>
          <div  className="relative flex items-center text-black focus-withing:text-gray-300">
            <Lense className="absolute inset-y-0 my-auto w-4 h-5 ml-6 bg-gray pointer-events-none" /> 
            <input
            type="search"
            id="search"
            className="pr-3 pl-10 py-2 w-full m-3 bg-gray border-none rounded-md focus:ring-gray-300" 
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