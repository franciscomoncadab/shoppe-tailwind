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
        {window.innerWidth < 873 ? "Hal Earrings" : "Lira Earrings"}
      </h1>
      <span className="textProducts__price">
        {window.innerWidth < 873 ? (
          <div className="flex flex-row justify-between text-xl">
            <p>$ 25.00</p>
            <a>
              <Share />
            </a>
          </div>
        ) : (
          "$ 20,00"
        )}
      </span>
      <div className="textProducts__rating">
        <Rating />
        <p className="text-dark-gray font-sm">1 customer review</p>
      </div>
      <p
        className={`${
          window.innerWidth < 873 ? "hidden" : "visible"
        } sm:text-sm sm:p-1 sm:pr-10 sm:text-dark-gray`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.{" "}
      </p>
      <div className="textProducts__addCar">
        <div className="textProducts__addCar-counter">
          <input
            className="items-center text-black text-base w-7 cursor-pointer hover:bg-gray rounded-md"
            type="button"
            value="-"
            onClick={handlerCounter}
          />
          <p className="justify-center item-center text-black text-base p-4">{counter}</p>
          <input
            className="items-center text-black text-base w-7 cursor-pointer hover:bg-gray rounded-md"
            type="button"
            value="+"
            onClick={() => {
              setcounter(counter + 1);
            }}
          />
        </div>
        <button className="mt-9 mb-6 border-2 py-2 rounded-md w-full sm:border-2 sm:px-20 sm:w-[73%] sm:rounded-md">
          <Link to="*" className="text-base">
            ADD TO CART
          </Link>
        </button>
        {window.innerWidth < 873 && (
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
      <div className="hidden sm:flex sm:flex-col sm:pt-8">
        <span className="flex">
          <p className="text-black text-lg">SKU:</p>
          <p className="text-dark-gray text-lg px-5"> 12</p>
        </span>
        <span className="flex">
          <p className="text-black text-lg">Categories:</p>
          <p className="text-dark-gray text-lg px-5"> Fashion, Style</p>
        </span>
      </div>
      <hr className="my-3 text-gray sm:hidden" />
    </div>
  );
}

export default TextProducts;
