import React from "react";
import TabsM from "../molecules/TabsM";
import { Link, Outlet } from "react-router-dom";
import "../../assets/scss/main.scss";
import { DETAILS, ADITIONALINFO, REVIEWS } from "../../routes/routes";

function Tags() {
  return (
    <div>
      {window.innerWidth > 875 ? (
        <div className="">
          <div className="tabs-container">
            <ul className="tabs-container__list">
              <li className="my-[10px]">
                <Link to={DETAILS} className="tabs-container__list-links">
                  Description
                </Link>
              </li>
              <li className=" my-[10px]">
                <Link to={ADITIONALINFO} className="tabs-container__list-links">
                  Aditional Information
                </Link>
              </li>
              <li className=" my-[10px]">
                <Link to={REVIEWS} className="tabs-container__list-links">
                  Reviews(0)
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <Outlet />
          </div>
        </div>
      ) : (
        <div>
          <TabsM />
          <hr className="my-3 mx-3 text-gray" />
        </div>
      )}
    </div>
  );
}

export default Tags;
