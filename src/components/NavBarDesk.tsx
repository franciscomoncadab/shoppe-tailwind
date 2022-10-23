import { ReactComponent as Logo } from "../assets/icons/shoppe.svg";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { ReactComponent as Car } from "../assets/icons/car.svg";
import { ReactComponent as Lens } from "../assets/icons/lens.svg";
import "../assets/scss/main.scss";

function NavBarDesk() {
  return (
    <div className="wrapper">
      <a href="/" className="flex items-center ml-3">
        <Logo className="mt-2 h-7 sm:h-9 md:w-40 lg:w-48 xl:w-80 content-start" />
      </a>

      <ul className="wrapper__menu ">
        <li className="wrapper__menu-item">
          <a className="wrapper__menu-item-link ">
               Shop
          </a>
        </li>
        <li className="wrapper__menu-item">
          <a className="wrapper__menu-item-link">
               Blog
          </a>
        </li>
        <li className="wrapper__menu-item">
          <a className="wrapper__menu-item-link">
               Our Story
          </a>
        </li>
        <p className="flex justify-center items-center text-gray md:text-lg ml:text-xl lg:text-2xl xl:text-3xl"> | </p>
        <li className="wrapper__menu-item">
          <a className="wrapper__menu-item-link">
               <Lens />
          </a>
        </li>
        <li className="wrapper__menu-item">
          <a className="wrapper__menu-item-link">
               <Car />
          </a>
        </li>
        <li className="wrapper__menu-item">
          <a className="wrapper__menu-item-link">
               <User />
          </a>
        </li>
      </ul>
      <hr className="border-gray w-full hidden" />
    </div>
  );
}

export default NavBarDesk;
