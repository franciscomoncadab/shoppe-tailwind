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
      <div className="product">
        <h2 className="text-xl ml-6 xs:text-2xl md:text-3xl xl:text-4xl xs:mb-3">Shop The Latest</h2>
        <p className="product__view">
          View All
        </p>
      </div>
      <div className="product__grid">
        <div className="p-2 rounded-md">
          <img
            src={product1}
            className="product__grid-img"
            alt="product1"
          />
          <div className="my-1">
            <p className="product__grid-title">Lira Earrings</p>
            <p className="product__grid-price"> $ 20,00</p>
          </div>
        </div>
        <div className="p-2 rounded-md">
          <img
            src={product2}
            className="product__grid-img"
            alt="product2"
          />
          <div className="my-1">
            <p className="product__grid-title">Ollie Earrings</p>
            <p className="product__grid-price"> $ 30,00</p>
          </div>
        </div>
        <div className="relative p-2 rounded-md col-span-2 z-0 xs:hidden">
          <div className="absolute z-10 top-[8%] xs:top-[5%] ml-1.5">
            <span className="bg-gold text-white text-xs mr-2 px-2.5 py-1.5 rounded ">
              Earring
            </span>
          </div>
          <div className="absolute my-1 z-10 top-[65%] xs:top-[75%] ml-2">
            <p className="product__grid-title ">Hal Earrings</p>
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
            <div className="p-2 rounded-md">
              <img
                src={product31}
                className="product__grid-img"
                alt="product4"
              />
              <div className="my-1">
                <p className="product__grid-title">Hair Pin Set of 3</p>
                <p className="product__grid-price"> $ 30,00</p>
              </div>
            </div>
            <div className="p-2 rounded-md">
              <img
                src={product32}
                className="product__grid-img"
                alt="product5"
              />
              <div className="my-1">
                <p className="product__grid-title">Plaine Necklace</p>
                <p className="product__grid-price"> $ 19,00</p>
              </div>
            </div>
          </>
        ) : null}
        <div className="p-2 rounded-md">
          <img
            src={product4}
            className="product__grid-img"
            alt="product4"
          />
          <div className="my-1">
            <p className="product__grid-title">Kaede Hair Pin</p>
            <p className="product__grid-price"> $ 30,00</p>
          </div>
        </div>
        <div className="p-2 rounded-md">
          <img
            src={product5}
            className="product__grid-img"
            alt="product5"
          />
          <div className="my-1">
            <p className="product__grid-title">Yuki Hair Pin</p>
            <p className="product__grid-price"> $ 29,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
