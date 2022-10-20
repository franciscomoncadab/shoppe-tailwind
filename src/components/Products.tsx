import React from "react";
import "../assets/scss/main.scss";
import product1 from "../assets/images/Img01.png";
import product2 from "../assets/images/Img02.png";
import product3 from "../assets/images/Img03.png";
import product31 from "../assets/images/Img031.png";
import product32 from "../assets/images/Img032.png";
import product4 from "../assets/images/Img04.png";
import product5 from "../assets/images/Img05.png";

function Products() {
  return (
    <div className="w-full sm:px-11">
      <div className="flex flex-grow justify-between">
        <h2 className="text-xl ml-6 xs:text-2xl xs:mb-3">Shop The Latest</h2>
        <p className="text-gold mt-4 mr-3 text-xs xs:mr-6 xs:text-md hover:text-black hover:font-bold">
          View All
        </p>
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-3 mb-5 gap-2 xs:mx-2">
        <div className="p-2 rounded-md">
          <img
            src={product1}
            className="h-30 w-full object-cover"
            alt="product1"
          />
          <div className="my-1">
            <p className=" font-medium xs:text-xl">Lira Earrings</p>
            <p className="text-gold my-1 xs:text-lg"> $ 20,00</p>
          </div>
        </div>
        <div className="p-2 rounded-md">
          <img
            src={product2}
            className="h-30 w-full object-cover"
            alt="product2"
          />
          <div className="my-1">
            <p className=" font-medium xs:text-xl">Ollie Earrings</p>
            <p className="text-gold my-1 xs:text-lg"> $ 30,00</p>
          </div>
        </div>
        <div className="relative p-2 rounded-md col-span-2 z-0 xs:hidden">
          <div className="absolute z-10 top-[8%] xs:top-[5%] ml-1.5">
            <span className="bg-gold text-white text-xs mr-2 px-2.5 py-1.5 rounded ">
              Earring
            </span>
          </div>
          <div className="absolute my-1 z-10 top-[65%] xs:top-[75%] ml-2">
            <p className=" font-medium xs:text-xl ">Hal Earrings</p>
            <p className="text-gold my-1 xs:text-lg"> $ 23,00</p>
          </div>
          <img
            src={product3}
            className="z-0 h-30 w-full object-cover"
            alt="product3"
          />
        </div>
        {window.innerWidth > 767 ? (
          <>
            <div className="p-2 rounded-md">
              <img
                src={product31}
                className="h-30 w-full object-cover"
                alt="product4"
              />
              <div className="my-1">
                <p className=" font-medium xs:text-xl">Hair Pin Set of 3</p>
                <p className="text-gold my-1 xs:lg"> $ 30,00</p>
              </div>
            </div>
            <div className="p-2 rounded-md">
              <img
                src={product32}
                className="h-30 w-full object-cover"
                alt="product5"
              />
              <div className="my-1">
                <p className=" font-medium xs:text-xl">Plaine Necklace</p>
                <p className="text-gold my-1 xs:text-lg"> $ 19,00</p>
              </div>
            </div>
          </>
        ) : null}

        <div className="p-2 rounded-md">
          <img
            src={product4}
            className="h-30 w-full object-cover"
            alt="product4"
          />
          <div className="my-1">
            <p className=" font-medium xs:text-xl">Kaede Hair Pin</p>
            <p className="text-gold my-1 xs:text-lg"> $ 30,00</p>
          </div>
        </div>
        <div className="p-2 rounded-md">
          <img
            src={product5}
            className="h-30 w-full object-cover"
            alt="product5"
          />
          <div className="my-1">
            <p className=" font-medium xs:text-xl">Yuki Hair Pin</p>
            <p className="text-gold my-1 xs:text-lg"> $ 29,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
