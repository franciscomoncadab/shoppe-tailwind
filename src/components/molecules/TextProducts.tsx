import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconsProducts from "../atoms/IconsProducts";
import { ReactComponent as Share } from "../../assets/icons/share.svg";
import Rating from "../atoms/Rating";
import "../../assets/scss/main.scss";

function TextProducts() {
  const [counter, setcounter] = useState(1);

  function handlerCounter() {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  }

  return (
    <div className="textProducts">
      <h1 className="textProducts__product">
        {window.innerWidth < 767 ? "Hal Earrings" : "Lira Earrings"}
      </h1>
      <span className="textProducts__price">
        {window.innerWidth < 767 ? (
          <div className="flex flex-row justify-between text-xl">
            <p>$ 25.00</p>
            <Link to="#">
              <Share />
            </Link>
          </div>
        ) : (
          "$ 20,00"
        )}
      </span>
      <div className="textProducts__rating">
        <Rating 
          color="text-gray"
        />
        <p className="text-dark-gray font-normal text-[16px] ml-[15px]">1 customer review</p>
      </div>
      <p
        className={`${
          window.innerWidth < 767 ? "hidden" : "visible"
        } sm:text-[16px] sm:font-normal sm:ml-[14px] sm:mt-[19px] sm:text-dark-gray`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.{" "}
      </p>
      <div className="textProducts__addCar">
        <div className="textProducts__addCar-counter">
          <input
            className="items-center text-black font-normal text-[16px] w-[28.5px] cursor-pointer hover:bg-gray rounded-md"
            type="button"
            value="-"
            onClick={handlerCounter}
          />
          <p className="justify-center item-center text-black text-base p-[19px]">{counter}</p>
          <input
            className="items-center text-black font-normal text-[16px] w-[28.5px] cursor-pointer hover:bg-gray rounded-md"
            type="button"
            value="+"
            onClick={() => {
              setcounter(counter + 1);
            }}
          />
        </div>
        <button className="mt-6 mb-6 border-[1px] py-2 rounded-md w-full sm:border-[1px] sm:py-[14px] sm:px-20 sm:w-[73%] sm:rounded-md">
          <Link to="*" className="text-[12px] font-normal sm:text-[16px] sm:font-bold">
            ADD TO CART
          </Link>
        </button>
        {window.innerWidth < 767 && (
          <div>
            <p className="text-sm text-dark-gray">
              Lorem ipsum dolor sit amet, consectetur adipisce elit. Aliquam
              placerat ...
            </p>
            <span className="flex flex-row text-gold text-base py-4"> View more <p className="px-1 mb-3 text-black text-xl"> {">"}</p></span>
          </div>
        )}
      </div>
      <IconsProducts />
      <div className="hidden sm:flex sm:flex-col sm:mt-[38px] sm:ml-[14px]">
        <span className="flex">
          <p className="text-black text-[16px] font-normal">SKU:</p>
          <p className="text-dark-gray text-[16px] font-normal mx-[16px]"> 12</p>
        </span>
        <span className="flex mt-[8px]">
          <p className="text-black text-[16px] font-normal">Categories:</p>
          <p className="text-dark-gray text-[16px] font-normal mx-[16px]"> Fashion, Style</p>
        </span>
      </div>
      <hr className="my-3 text-gray sm:hidden" />
    </div>
  );
}

export default TextProducts;
