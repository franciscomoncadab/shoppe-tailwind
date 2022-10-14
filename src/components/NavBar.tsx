import React from "react";
import { ReactComponent as Logo } from "../assets/icons/shoppe.svg";

function NavBar() {
  return (
    <nav className="pl-3 py-2.5">
      <div className="container flex flex-wrap justify-between mx-auto">
        <a href="/" className="flex items-center">
          <Logo
            className="mt-2 h-7sm:h-9 content-start"
            />
        </a>
        
      </div>
    </nav>
  );
}

export default NavBar;
