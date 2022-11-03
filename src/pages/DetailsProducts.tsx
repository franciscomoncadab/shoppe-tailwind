import React from "react";
import SimilarItems from "../components/atoms/SimilarItems";
import DetailsImage from "../components/organisms/DetailsImage";
import Tabs from "../components/organisms/Tabs";

function DetailsProducts() {
  return (
    <div className="mt-[10px] sm:mt-[128px]">
      <DetailsImage />
      <div>
        <Tabs />
      </div>
      <SimilarItems />
    </div>
  );
}

export default DetailsProducts;
