import React,{ useState} from "react";
import TabsM from "../molecules/TabsM";
import { Link, Outlet } from "react-router-dom";
import "../../assets/scss/main.scss";
import { DETAILS, ADITIONALINFO, REVIEWS } from "../../routes/routes";

function Tags() {
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);
  const [isAditionalActive, setIsAditionalActive] = useState(false);
  const [isReviewsActive, setIsReviewsActive] = useState(false);

  return (
    <div>
      {window.innerWidth > 875 ? (
        <div className="">
          <div className="tabs-container">
            <ul className="tabs-container__list">
              <li className="my-[10px]">
                <Link
                 to={DETAILS}
                 onClick={() => {
                  setIsDescriptionActive(true);
                  setIsAditionalActive(false);
                  setIsReviewsActive(false);
                 }}
                  className={`${isDescriptionActive ? "tabs-container__list-links underline underline-offset-[34px]" : "tabs-container__list-links"}`}>
                  Description
                </Link>
              </li>
              <li className=" my-[10px]">
                <Link 
                  to={ADITIONALINFO}
                  onClick={() => {
                    setIsDescriptionActive(false);
                    setIsAditionalActive(true);
                    setIsReviewsActive(false);
                   }}
                  className={`${isAditionalActive ? "tabs-container__list-links underline underline-offset-[34px]" : "tabs-container__list-links"}`}>
                  Aditional Information
                </Link>
              </li>
              <li className=" my-[10px]">
                <Link 
                  to={REVIEWS} 
                  onClick={() => {
                    setIsDescriptionActive(false);
                    setIsAditionalActive(false);
                    setIsReviewsActive(true);
                   }}
                  className={`${isReviewsActive ? "tabs-container__list-links underline underline-offset-[34px]" : "tabs-container__list-links"}`}>
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
          <hr className="my-3 text-gray" />
        </div>
      )}
    </div>
  );
}

export default Tags;
