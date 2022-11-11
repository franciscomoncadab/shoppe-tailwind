import React, { useState } from "react";
import product1 from "../../assets/images/ImgT01.png";
import TextProducts from "../molecules/TextProducts";
import { ReactComponent as LargeLine } from "../../assets/icons/lineaGrande.svg";
import { ReactComponent as SmallLine } from "../../assets/icons/lineaChiquita.svg";

function DetailsImage() {
  const [img1Active, setImg1Active] = useState(false);
  const [img2Active, setImg2Active] = useState(false);
  const [img3Active, setImg3Active] = useState(false);
  const [img4Active, setImg4Active] = useState(false);
  
  return (
    <div>
      <div className="sm:flex sm:flex-row sm:justify-center sm:gap-x-[50px] sm:m-auto sm:w-full sm:h-full">
        <div className="w-full px-3 sm:h-full sm:flex sm:flex-col-2 sm:gap-[39px] sm:w-[699px] md:w-[58.78%] sm:px-0">
          <ul className="sm:flex sm:flex-col sm:gap-[40px] stroke-0">
            <li
            onClick={() => {
              setImg1Active(true);
              setImg2Active(false);
              setImg3Active(false);
              setImg4Active(false);
            }}>
              <img
                className="w-[120px] h-[120px] rounded-md cursor-pointer"
                src={product1}
                alt="img1"
              />
            </li>
            <li>
              <img
                className="w-[120px] h-[120px] rounded-md cursor-pointer"
                src={product1}
                alt="img2"
                onClick={() => {
                  setImg1Active(false);
                  setImg2Active(true);
                  setImg3Active(false);
                  setImg4Active(false);
                }}
              />
            </li>
            <li onClick={() => {
                  setImg1Active(false);
                  setImg2Active(false);
                  setImg3Active(true);
                  setImg4Active(false);
                }}>
              <img
                className="w-[120px] h-[120px] rounded-md cursor-pointer"
                src={product1}
                alt="img3"
              />
            </li>
            <li onClick={() => {
                  setImg1Active(false);
                  setImg2Active(false);
                  setImg3Active(false);
                  setImg4Active(true);
                  console.log("FUNCIONO!!!")
                }}>
              <img
                className="w-[120px] h-[120px] rounded-md cursor-pointer"
                src={product1}
                alt="img4"
              />
            </li>
          </ul>
          <img
            className="w-full h-full sm:w-[540px] sm:h-[600px] sm:rounded-md"
            src={product1}
            alt="img5"
          />
        </div>
        <TextProducts />
      </div>
      <div className="relative mt-[24px] ml-[159px]">
        <LargeLine />
        <div className="absolute flex flex-row top-0">
        <SmallLine className={`${img1Active ? "stroke-2" : "stroke-0"}`} />
        <SmallLine className={`${img2Active ? "stroke-2" : "stroke-0"}`} />
        <SmallLine className={`${img3Active ? "stroke-2" : "stroke-0"}`} />
        <SmallLine className={`${img4Active ? "stroke-2" : "stroke-0"}`} />
        </div>
      </div>
    </div>
  );
}

export default DetailsImage;
