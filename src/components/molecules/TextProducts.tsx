import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconsProducts from "../atoms/IconsProducts";
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
      <h1 className="textProducts__product">Lira Earrings</h1>
      <h3 className="textProducts__price">$ 20.00</h3>
      <div className="textProducts__rating">
          <Rating />
          <p className="text-dark-gray font-sm">1 customer review</p>
      </div>
      <p className="text-sm p-1 pr-10 text-dark-gray">
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
          <p className="justify-center text-black text-base p-4">{counter}</p>
          <input
            className="items-center text-black text-base w-7 cursor-pointer hover:bg-gray rounded-md"
            type="button"
            value="+"
            onClick={() => {
              setcounter(counter + 1);
            }}
          />
        </div>
        <button className="border-2 px-20 w-[73%] rounded-md">
          <Link to="*" className="">
            ADD TO CART
          </Link>
        </button>
      </div>
      <IconsProducts />
      <div className="flex flex-col pt-8">
        <span className="flex">
          <p className="text-black text-lg">SKU:</p>
          <p className="text-dark-gray text-lg px-5"> 12</p>
        </span>
        <span className="flex">
          <p className="text-black text-lg">Categories:</p>
          <p className="text-dark-gray text-lg px-5"> Fashion, Style</p>
        </span>
      </div>
    </div>
  );
}

export default TextProducts;
