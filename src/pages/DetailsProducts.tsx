import React from "react";
import SimilarItems from "../components/atoms/SimilarItems";
import DetailsImage from "../components/organisms/DetailsImage";
import Tabs from "../components/organisms/Tabs";
import { imgProduct } from "../components/productImg";

function DetailsProducts() {
  return (
    <div>
      <hr  className="hidden sm:block sm:mb-[128px] sm:mt-[12px] text-gray" />
      <DetailsImage 
        // DetailsImageProps={imgProduct}
      />
      <div>
        <Tabs />
      </div>
      <SimilarItems />
    </div>
  );
}

export default DetailsProducts;