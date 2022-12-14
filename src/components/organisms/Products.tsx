import React from "react";
import "../../assets/scss/main.scss";
import { ReactComponent as Car } from "../../assets/icons/car.svg";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as Heart } from "../../assets/icons/heartIcon.svg";
import product1 from "../../assets/images/Img01.png";
import product2 from "../../assets/images/Img02.png";
import product3 from "../../assets/images/Img03.png";
import product31 from "../../assets/images/Img031.png";
import product32 from "../../assets/images/Img032.png";
import product4 from "../../assets/images/Img04.png";
import product5 from "../../assets/images/Img05.png";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="w-full">
      <div className="product">
        <h2 className="text-[16px] font-normal mt-[21px] mb-[13px] sm:mt-[58px] sm:mb-[39px] sm:text-[33px]">
          Shop The Latest
        </h2>
        <Link to="*" className="product__view">
          View All
        </Link>
      </div>
      <div className="product__grid">
        <Link to="*" className="relative z-0 sm:p-0 rounded-md">
          <img src={product1} className="product__grid-img" alt="product1" />
          <span className="image-container hidden absolute z-10 top-[174px] left-[119px]">
            <Car className="w-[25px] h-[25px]" />
            <Eye className="w-[25px] h-[25px]" />
            <Heart className="fill-black" />
          </span>
          <div className="sm:space-y-[10px]">
            <p className="product__grid-title">Lira Earrings</p>
            <p className="product__grid-price"> $ 20,00</p>
          </div>
        </Link>
        <Link to="*" className="relative sm:p-0 rounded-md">
          <img src={product2} className="product__grid-img" alt="product2" />
          <span className="image-container hidden absolute z-10 top-[174px] left-[119px]">
            <Car className="w-[25px] h-[25px]" />
            <Eye className="w-[25px] h-[25px]" />
            <Heart className="fill-black" />
          </span>
          <div className="my-1 sm:my-0 sm:mt-[18px] sm:space-y-[10px]">
            <p className="product__grid-title">
              {window.innerWidth < 767 ? "Ollie Earrings" : "Hal Earrings"}
            </p>
            <p className="product__grid-price">
              {window.innerWidth < 767 ? "$ 30,00" : "$ 25,00"}
            </p>
          </div>
        </Link>
        <Link to="*" className="relative my-[24px] rounded-md col-span-2 z-0 sx:hidden">
          <div className="absolute z-10 top-[3%] xs:top-[5%] ml-1.5">
            <span className="bg-gold text-white font-normal text-[12px] mr-2 px-[8px] py-[5px] rounded-[4px]">
              Earring
            </span>
          </div>
          <div className="absolute z-10 top-[60%] xs:top-[75%] ml-2">
            <p className="font-normal text-[14px] mb-[5px]">Hal Earrings</p>
            <p className="text-gold text-[12px] font-normal"> $ 23,00</p>
          </div>
          <img
            src={product3}
            className="z-0 w-full h-[135px] xs:h-[180px] object-cover rounded-[4px]"
            alt="product3"
          />
        </Link>
        {window.innerWidth > 767 ? (
          <>
            <Link to="*" className="relative sm:p-0 sm:mr-0 rounded-md">
              <img
                src={product4}
                className="product__grid-img"
                alt="product4"
              />
              <span className="image-container hidden absolute z-10 top-[174px] left-[119px]">
                <Car className="w-[25px] h-[25px]" />
                <Eye className="w-[25px] h-[25px]" />
                <Heart className="fill-black" />
              </span>
              <div className="sm:mt-[20px] sm:space-y-[16px]">
                <p className="product__grid-title">Kaede Hair Pin Set Of 3</p>
                <p className="product__grid-price"> $ 30,00</p>
              </div>
            </Link>
            <Link to="*" className="relative sm:p-0  rounded-md">
              <img
                src={product31}
                className="product__grid-img"
                alt="product5"
              />
              <span className="image-container hidden absolute z-10 top-[178px] left-[120px]">
                <Car className="w-[25px] h-[25px]" />
                <Eye className="w-[30px] h-[30px]" />
                <Heart className="fill-black w-[25px] h-[25px]" />
              </span>
              <div className="sm:mt-[24px] sm:space-y-[10px]">
                <p className="product__grid-title">Hair Pin Set of 3</p>
                <p className="product__grid-price"> $ 30,00</p>
              </div>
            </Link>
          </>
        ) : null}
        <Link to="*" className="relative sm:p-0  rounded-md">
          <img src={product32} className="product__grid-img" alt="product4" />
          <span className="image-container hidden absolute z-10 top-[174px] left-[119px]">
            <Car className="w-[25px] h-[25px]" />
            <Eye className="w-[25px] h-[25px]" />
            <Heart className="fill-black" />
          </span>
          <div className="sm:mt-[24px] sm:space-y-[10px]">
            <p className="product__grid-title">
              {window.innerWidth < 767 ? "Kaede Hair Pin" : "Plaine Necklace"}
            </p>
            <p className="product__grid-price">
              {window.innerWidth < 767 ? "$ 30.00" : "$ 19.00"}
            </p>
          </div>
        </Link>
        <Link to="*" className="relative sm:p-0  rounded-md">
          <img src={product5} className="product__grid-img" alt="product5" />
          <span className="image-container hidden absolute z-10 top-[174px] left-[119px]">
            <Car className="w-[25px] h-[25px]" />
            <Eye className="w-[25px] h-[25px]" />
            <Heart className="fill-black" />
          </span>
          <div className="sm:mt-[24px] sm:space-y-[10px]">
            <p className="product__grid-title">
              {window.innerWidth < 767
                ? "Yuki Hair Pin"
                : "Yuki Hair Pin Set of 3"}
            </p>
            <p className="product__grid-price"> $ 29,00</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Products;
