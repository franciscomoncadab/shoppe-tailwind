import React from "react";
import { ReactComponent as Heart } from "../../assets/icons/heartIcon.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import Line from "../../assets/images/LineIcon.png";

function IconsProducts() {
     return ( 
          <div className="hidden sm:flex sm:justify-start sm:mt-[58px] sm:ml-[14px]">
               <Heart className="fill-dark-gray hover:fill-black cursor-pointer" />
               <img src={Line} alt="line" className="sm:ml-[39.86px] sm:mr-[39px]" />
               <Mail className="fill-dark-gray hover:fill-black cursor-pointer sm:mr-[24px]" />
               <Facebook className="fill-dark-gray hover:fill-black cursor-pointer sm:mr-[24px]" />
               <Instagram className="fill-dark-gray hover:fill-black cursor-pointer sm:mr-[24px]" />
               <Twitter className="fill-dark-gray hover:fill-black cursor-pointer" />
          </div>
      );
}

export default IconsProducts;