import React from "react";
import SimilarItems from "../components/atoms/SimilarItems";
import DetailsImage from "../components/organisms/DetailsImage";
import Tabs from "../components/organisms/Tabs";

function DetailsProducts() {
  return (
    <div>
      <hr  className="hidden sm:block sm:mb-[120px] sm:mt-[18px] text-gray" />
      <DetailsImage />
      <div>
        <Tabs />
      </div>
      <SimilarItems />
    </div>
  );
}

export default DetailsProducts;
