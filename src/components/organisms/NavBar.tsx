import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/shoppe.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Car } from "../../assets/icons/car.svg";
import NavBarDesk from "../molecules/NavBarDesk";
import { Link } from "react-router-dom";
import { HOME, DETAILS, NOTFOUND} from "../../routes/routes"

function NavBar() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  function disableScroll() {
    let scrollLeft: any;
    let scrollTop: any;
    if (window.innerWidth < 873)
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.scrollTo = () => {};
  }

  return (
    <nav className="w-full h-full">
      {window.innerWidth < 873 ? (
        <div className="flex flex-wrap justify-between mx-auto w-full max-w-[4400px] h-full ">
          <Link to={HOME} className="flex items-center">
            <Logo className="content-start w-[99px] h-[36px]" />
          </Link>
          <Link
            className="flex items-center"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
            to="#"
          >
            <Car className="mt-[5px] mr-[20px]" />

            {!mobileMenu ? (
              <Menu
                className="mt-2"
                onClick={() => {
                  disableScroll();
                }}
              />
            ) : (
              <Close
                className="mt-2"
                onClick={() => {
                  enableScroll();
                }}
              />
            )}
          </Link>

          <ul
            className={`absolute z-30 bg-white top-24 xs:top-20 ${
              mobileMenu ? "left-0" : "-left-full"
            } w-full px-[16px] h-full flex-col ease-linear duration-[0.3s] sm:flex sm:justify-between sm:list-none sm:h-full`}
          >
            <li className="flex justify-center items-center mb-[24px] mt-[19px]">
              <Link
                to={HOME}
                className="w-full text-black font-normal text-[20px] cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="flex justify-center items-center mb-[20px]">
              <Link
                to={DETAILS}
                className="w-full text-black font-normal text-[20px] cursor-pointer"
              >
                Shop
              </Link>
            </li>
            <li className="flex justify-center items-center mb-[20px]">
              <Link
                to={NOTFOUND}
                className="w-full text-black font-normal text-[20px] cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="flex justify-center items-center mb-[15px]">
              <Link
                to={NOTFOUND}
                className="w-full text-black font-normal text-[20px] cursor-pointer"
              >
                Blog
              </Link>
            </li>
            <li className="flex justify-center items-center mb-[20px]">
              <Link
                to={NOTFOUND}
                className="w-full text-black font-normal text-[20px] cursor-pointer"
              >
                Help
              </Link>
            </li>
            <li className="flex justify-center items-center mb-[20px]">
              <Link
                to={NOTFOUND}
                className="w-full text-black font-normal text-[20px] cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <Link
                to={NOTFOUND}
                className="w-full text-black font-normal text-[20px] cursor-pointer"
              >
                Search
              </Link>
            </li>
            <hr className="w-full border-[1px] text-gray mt-[35px] mb-[24px]" />
            <li className="flex justify-center items-center mb-[18px]">
              <Link
                to={NOTFOUND}
                className="w-full text-black font-normal text-[20px] cursor-pointer"
              >
                <div className="flex space-between">
                  <User className="mr-[10px] sm:hidden mt-[4px] w-[20px] h-[20px]" />
                  My account
                </div>
              </Link>
            </li>
            <li className="flex justify-center items-center  sm:h-full">
              <Link
                to={NOTFOUND}
                className="w-full text-black font-normal text-[20px] cursor-pointer"
              >
                <div className="flex space-between">
                  <Logout className="mr-[10px] sm:hidden mt-[4px] w-[20px] h-[20px]" />
                  Logout
                </div>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <NavBarDesk />
      )}
    </nav>
  );
}

export default NavBar;
