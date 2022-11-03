import { ReactComponent as Logo } from "../../assets/icons/shoppe.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Car } from "../../assets/icons/car.svg";
import { ReactComponent as Lens } from "../../assets/icons/lens.svg";
import { Link } from "react-router-dom";
import { HOME, DETAILS, NOTFOUND} from "../../routes/routes"
import "../../assets/scss/main.scss";

function NavBarDesk() {
  return (
    <div className="wrapper">
      <Link to={HOME} className="flex items-center">
        <Logo className="content-start mb-4" />
      </Link>

      <ul className="wrapper__menu ">
        <li className="wrapper__menu-item">
          <Link to={DETAILS} className="wrapper__menu-item-link ">
               Shop
          </Link>
        </li>
        <li className="wrapper__menu-item">
          <Link to={NOTFOUND} className="wrapper__menu-item-link">
               Blog
          </Link>
        </li>
        <li className="wrapper__menu-item">
          <Link to={NOTFOUND} className="wrapper__menu-item-link">
               Our Story
          </Link>
        </li>
        <p className="flex justify-center items-center text-gray md:text-lg ml:text-xl lg:text-2xl xl:text-3xl"> | </p>
        <li className="wrapper__menu-item">
          <Link to={NOTFOUND} className="wrapper__menu-item-link">
               <Lens />
          </Link>
        </li>
        <li className="wrapper__menu-item">
          <Link to={NOTFOUND} className="wrapper__menu-item-link">
               <Car />
          </Link>
        </li>
        <li className="wrapper__menu-item">
          <Link to={NOTFOUND} className="wrapper__menu-item-link">
               <User />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBarDesk;
