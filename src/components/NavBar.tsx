import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/icons/shoppe.svg";
import { ReactComponent as Menu } from "../assets/icons/menu.svg";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { ReactComponent as Logout } from "../assets/icons/logout.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import { ReactComponent as Car } from "../assets/icons/car.svg";
import "../assets/scss/main.scss";

function NavBar() {
  const [ mobileMenu, setMobileMenu ] = useState<boolean>(false);
  
  function disableScroll() {
    let scrollLeft:any;
    let scrollTop:any;
    if(window.innerWidth < 873)
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      window.onscroll = () => {
        window.scrollTo(scrollLeft, scrollTop);
      }
    
  }

  function enableScroll() {
    window.scrollTo = () => {}
  }

  return (
    <nav className="w-full h-full sm:px-12 sm:pt-10">
      <div className="flex flex-wrap justify-between mx-auto w-full max-w-[4400px] h-full ">
        <a href="/" className="flex items-center ml-3">
          <Logo 
            className="mt-2 h-7sm:h-9 content-start"
            />
        </a>
        <a 
          className="flex items-center"
          onClick={() => {
            setMobileMenu(!mobileMenu)

          }}
          >
            <Car className="mt-2 mr-3"/>

            {!mobileMenu ? 
              <Menu 
                className="mt-2 mr-3" 
                onClick={() => {disableScroll()}}
              /> 
              : <Close 
                className="mt-2 mr-3"
                onClick={() => {enableScroll()}}
              />}
            
        </a>

        <ul className={`absolute z-30 bg-white top-24 xs:top-20 ${mobileMenu ? "left-0" : "-left-full"} w-full p-3 h-full flex-col ease-linear duration-[0.3s] sm:flex sm:justify-between sm:list-none sm:h-full`}>
          <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
            <a className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer">
              Home
            </a>
          </li>
          <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
            <a className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer">
              Shop
            </a>
          </li>
          <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
            <a  className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer">
              About
            </a>
          </li>
          <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
            <a  className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer">
              Blog
            </a>
          </li>
          <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
            <a  className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer">
              Help
            </a>
          </li>
          <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
            <a  className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer">
              Contact
            </a>
          </li>
          <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
            <a  className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer">
              Search
            </a>
          </li>
          <hr className="w-[90%] opacity-30 mt-5 "/>
          <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
            <a  className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer">
              <div className="flex space-between">
                <User className="mr-1 sm:hidden"/>
                My account
              </div>
            </a>
          </li>
          <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
            <a  className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer">
              <div className="flex space-between">
                <Logout className="mr-1 sm:hidden"/>
                Logout
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
