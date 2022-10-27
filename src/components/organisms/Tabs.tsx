import React from "react";

function Tags() {
  return (
    <div className="text-sm font-medium text-center text-dark-gray border-b border-gray p-12 mt-16">
      <ul className="flex flex-wrap text-xl -mb-12">
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg focus:border-b-2 focus:text-black focus:border-black"
          >
            Description
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg focus:border-b-2 focus:text-black focus:border-black"
            aria-current="page"
          >
            Aditional Information
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg focus:border-b-2 focus:text-black focus:border-black"
          >
            Reviews(0)
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Tags;
