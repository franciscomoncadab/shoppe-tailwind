import React from 'react';
import { ReactComponent as Lense } from '../assets/icons/lens.svg';

function SearchBar() {
  return (
    <div>
      <form>
        <div className="relative">
          <div className="flex flex-row rounded-md">
            <Lense className="bg-gray-200 w-5 h-9" /> 
            <input
            type="search"
            id="search"
            className="bg-gray-200 w-full rounded-md p-1"
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