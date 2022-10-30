import React from "react";
import "../../assets/scss/main.scss";

function Tags() {
  return (
    <div className="tabs-container">
      <ul className="tabs-container__list">
        <li className="mr-2">
          <a
            href="#"
            className="tabs-container__list-links"
          >
            Description
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="tabs-container__list-links"
            
          >
            Aditional Information
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="tabs-container__list-links"
          >
            Reviews(0)
          </a>
        </li>
      </ul>
      <hr className="my-3 text-gray sm:hidden" />
    </div>
  );
}

export default Tags;
