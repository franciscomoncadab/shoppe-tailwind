import React, { useState } from "react";
import product1 from "../../assets/images/ImgT01.png";
import TextProducts from "../molecules/TextProducts";
import { imgProduct } from "../productImg";
import { ReactComponent as LargeLine } from "../../assets/icons/lineaGrande.svg";
import { ReactComponent as SmallLine } from "../../assets/icons/lineaChiquita.svg";

function DetailsImage() {
  const [img1Active, setImg1Active] = useState(true);
  const [img2Active, setImg2Active] = useState(false);
  const [img3Active, setImg3Active] = useState(false);
  const [img4Active, setImg4Active] = useState(false);
  const [imgActive, setImgActive] = useState(2);

  const handlerChange = () => {
    setInterval(() =>{
      if (imgActive >= 2 && imgActive < 5){
        setImgActive(imgActive + 1)
      } else {
        setImgActive(2)
      }}, 1000)
  }

  return (
    <div>
      <div className="sm:flex sm:flex-row sm:justify-center sm:gap-x-[50px] sm:m-auto sm:w-full sm:h-full">
        <div className="w-full sm:h-full sm:flex sm:flex-col-2 sm:gap-[39px] sm:w-[699px] md:w-[58.78%] sm:px-0">
          <ul className="hidden sm:flex sm:flex-col sm:gap-[40px] stroke-0">
            {imgProduct.map((data) => {
              return (
                <li>
                  <img 
                    src={data.img}
                    alt="products"
                    className="w-[120px] h-[120px] rounded-md cursor-pointer"
                  />
                </li>
              )
            })}
          </ul>
          <img
            onPlay={handlerChange}
            className="w-full h-[374px] sm:w-[540px] sm:h-[600px] sm:rounded-md"
            src={`./images/img${imgActive}.jpg`}
            alt="img5"
          />
        </div>
        <TextProducts />
      </div>
      <div className="relative bottom-[308px] sx:bottom-0 sx:mt-[24px] sx:ml-[159px]">
        <LargeLine className="w-[358px] sm:w-auto" />
        <div className="absolute flex flex-row top-0">
        <SmallLine className={`${img1Active ? "stroke-2" : "stroke-0"} w-[89.5px] sx:w-auto`}/>
        <SmallLine className={`${img2Active ? "stroke-2" : "stroke-0"} w-[89.5px] sx:w-auto`}/>
        <SmallLine className={`${img3Active ? "stroke-2" : "stroke-0"} w-[89.5px] sx:w-auto`}/>
        <SmallLine className={`${img4Active ? "stroke-2" : "stroke-0"} w-[89.5px] sx:w-auto`}/>
        </div>
      </div>
    </div>
  );
}

export default DetailsImage;
