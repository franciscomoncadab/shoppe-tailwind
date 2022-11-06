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
            <Logo className="content-start" />
          </Link>
          <Link
            className="flex items-center"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
            to="#"
          >
            <Car className="mt-2 mr-[13px]" />

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
            } w-full p-3 h-full flex-col ease-linear duration-[0.3s] sm:flex sm:justify-between sm:list-none sm:h-full`}
          >
            <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
              <Link
                to={HOME}
                className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
              <Link
                to={DETAILS}
                className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer"
              >
                Shop
              </Link>
            </li>
            <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
              <Link
                to={NOTFOUND}
                className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
              <Link
                to={NOTFOUND}
                className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer"
              >
                Blog
              </Link>
            </li>
            <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
              <Link
                to={NOTFOUND}
                className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer"
              >
                Help
              </Link>
            </li>
            <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
              <Link
                to={NOTFOUND}
                className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
              <Link
                to={NOTFOUND}
                className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer"
              >
                Search
              </Link>
            </li>
            <hr className="w-[90%] opacity-30 mt-5 " />
            <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
              <Link
                to={NOTFOUND}
                className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer"
              >
                <div className="flex space-between">
                  <User className="mr-1 sm:hidden" />
                  My account
                </div>
              </Link>
            </li>
            <li className="flex justify-center items-center w-full h-[70px] sm:h-full">
              <Link
                to={NOTFOUND}
                className="w-full sm:flex sm:justify-center sm:items-center sm:h-full sm:p-1 text-black font-semibold text-base cursor-pointer"
              >
                <div className="flex space-between">
                  <Logout className="mr-1 sm:hidden" />
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
