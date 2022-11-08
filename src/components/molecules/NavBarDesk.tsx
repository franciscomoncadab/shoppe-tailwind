import { ReactComponent as Logo } from "../../assets/icons/shoppe.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Car } from "../../assets/icons/car.svg";
import { ReactComponent as Lens } from "../../assets/icons/lens.svg";
import { Link } from "react-router-dom";
import { HOME, DETAILS, NOTFOUND } from "../../routes/routes";
import "../../assets/scss/main.scss";

function NavBarDesk() {
  return (
    <div className="wrapper">
      <Link to={HOME} className="flex items-center">
        <Logo className="content-start mb-[16px] mt-[10px]" />
      </Link>
      <div className="flex flex-row mb-[12px] mt-[15px]">
        <ul className="wrapper__menu ">
          <li className="wrapper__menu-item mr-[64px]">
            <Link to={DETAILS} className="wrapper__menu-item-link ">
              Shop
            </Link>
          </li>
          <li className="wrapper__menu-item mr-[64px]">
            <Link to={NOTFOUND} className="wrapper__menu-item-link">
              Blog
            </Link>
          </li>
          <li className="wrapper__menu-item mr-[48px]">
            <Link to={NOTFOUND} className="wrapper__menu-item-link">
              Our Story
            </Link>
          </li>
        </ul>
        <p className="mr-[43px] text-gray text-xxl">
          {" "}
          |{" "}
        </p>
        <ul className="wrapper__menuIcon">
          <li>
            <Link to={NOTFOUND} className="wrapper__menuIcon-link-icon">
              <Lens />
            </Link>
          </li>
          <li>
            <Link to={NOTFOUND} className="wrapper__menuIcon-link-icon">
              <Car />
            </Link>
          </li>
          <li>
            <Link to={NOTFOUND} className="wrapper__menuIcon-link-icon">
              <User />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarDesk;
