import React from "react";
import "../../assets/scss/main.scss";

function Tags() {
  return (
    <div className="tabs-container">
      <ul className="tabs-container__list">
        <li className="mr-2 pb-2">
          {window.innerWidth > 875 ? (
            <a href="#" className="tabs-container__list-links">
              Description
            </a>
          ) : (
            <>
              <button
                id="dropdownNavbarButton"
                data-dropdown-toggle="dropdownNavbar"
                className="flex justify-between items-center pr-4 w-full font-base text-base"
              >
                Description{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Detalles
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </li>
        <li className="mr-2 py-2">
          {window.innerWidth > 875 ? (
            <a href="#" className="tabs-container__list-links">
              Aditional Information
            </a>
          ) : (
            <>
              <button
                id="dropdownNavbarButton"
                data-dropdown-toggle="dropdownNavbar"
                className="flex justify-between items-center pr-4 w-full font-base text-base"
              >
                Aditional Information{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Detalles
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </li>
        <li className="mr-2 py-2">
          {window.innerWidth > 875 ? (
            <a href="#" className="tabs-container__list-links">
              Reviews(0)
            </a>
          ) : (
            <>
              <button
                id="dropdownNavbarButton"
                data-dropdown-toggle="dropdownNavbar"
                className="flex justify-between items-center pr-4 w-full font-base text-base"
              >
                Reviews(0){" "}
                <svg
                  className="ml-1 w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Detalles
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </li>
      </ul>
      <hr className="my-3 w-[94%] text-gray sm:hidden" />
    </div>
  );
}

export default Tags;
