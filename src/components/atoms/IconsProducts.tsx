import React from "react";
import { ReactComponent as Heart } from "../../assets/icons/heartIcon.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import Line from "../../assets/images/LineIcon.png";

function IconsProducts() {
     return ( 
          <div className="flex justify-start space-x-9 pt-9 ">
               <Heart className="cursor-pointer" />
               <img src={Line} alt="line"/>
               <Mail className="cursor-pointer" />
               <Facebook className="cursor-pointer" />
               <Instagram className="cursor-pointer" />
               <Twitter className="cursor-pointer" />
          </div>
      );
}

export default IconsProducts;