import React from "react";
import "../../assets/scss/main.scss";
import product1 from "../../assets/images/Img01.png";
import product2 from "../../assets/images/Img02.png";
import product3 from "../../assets/images/Img03.png";
import product31 from "../../assets/images/Img031.png";
import product32 from "../../assets/images/Img032.png";
import product4 from "../../assets/images/Img04.png";
import product5 from "../../assets/images/Img05.png";

function Products() {
  return (
    <div className="w-full">
      <div className="product">
        <h2 className="text-[16px] font-normal mt-[21px] mb-[13px] sm:mt-[64px] sm:mb-[39px] sm:text-[33px]">Shop The Latest</h2>
        <p className="product__view">
          View All
        </p>
      </div>
      <div className="product__grid">
        <div className="p-2 sm:p-0  rounded-md">
          <img
            src={product1}
            className="product__grid-img"
            alt="product1"
          />
          <div>
            <p className="product__grid-title">Lira Earrings</p>
            <p className="product__grid-price"> $ 20,00</p>
          </div>
        </div>
        <div className="p-2 sm:p-0  rounded-md">
          <img
            src={product2}
            className="product__grid-img"
            alt="product2"
          />
          <div className="my-1">
            <p className="product__grid-title">{window.innerWidth < 767 ? "Ollie Earrings" : "Hal Earrings"}</p>
            <p className="product__grid-price">{window.innerWidth < 767 ? "$ 30,00" : "$ 25,00"}</p>
          </div>
        </div>
        <div className="relative p-2 rounded-md col-span-2 z-0 sx:hidden">
          <div className="absolute z-10 top-[8%] xs:top-[5%] ml-1.5">
            <span className="bg-gold text-white text-xs mr-2 px-2.5 py-1.5 rounded ">
              Earring
            </span>
          </div>
          <div className="absolute my-1 z-10 top-[65%] xs:top-[75%] ml-2">
            <p className="font-medium ">Hal Earrings</p>
            <p className="product__grid-price"> $ 23,00</p>
          </div>
          <img
            src={product3}
            className="z-0 product__grid-img"
            alt="product3"
          />
        </div>
        {window.innerWidth > 767 ? (
          <>
            <div className="p-2 sm:p-0 sm:mr-0 rounded-md">
              <img
                src={product4}
                className="product__grid-img"
                alt="product4"
              />
              <div>
                <p className="product__grid-title">Kaede Hair Pin Set Of 3</p>
                <p className="product__grid-price"> $ 30,00</p>
              </div>
            </div>
            <div className="p-2 sm:p-0  rounded-md">
              <img
                src={product31}
                className="product__grid-img"
                alt="product5"
              />
              <div>
                <p className="product__grid-title">Hair Pin Set of 3</p>
                <p className="product__grid-price"> $ 30,00</p>
              </div>
            </div>
          </>
        ) : null}
        <div className="p-2 sm:p-0  rounded-md">
          <img
            src={product32}
            className="product__grid-img"
            alt="product4"
          />
          <div>
            <p className="product__grid-title">{window.innerWidth < 767 ? "Kaede Hair Pin" : "Plaine Necklace"}</p>
            <p className="product__grid-price">{window.innerWidth < 767 ? "$ 30.00" : "$ 19.00"}</p>
          </div>
        </div>
        <div className="p-2 sm:p-0  rounded-md">
          <img
            src={product5}
            className="product__grid-img"
            alt="product5"
          />
          <div>
            <p className="product__grid-title">{window.innerWidth < 767 ? "Yuki Hair Pin" : "Yuki Hair Pin Set Of 3"}</p>
            <p className="product__grid-price"> $ 29,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
