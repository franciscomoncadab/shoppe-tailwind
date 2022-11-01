import React from "react";
import SimilarItems from "../components/atoms/SimilarItems";
import DetailsImage from "../components/organisms/DetailsImage";
import Tabs from "../components/organisms/Tabs";

function DetailsProducts() {
  return (
    <>
      <DetailsImage />
      <div className="sm:mx-12">
        <Tabs />
      </div>
      <SimilarItems />
    </>
  );
}

export default DetailsProducts;
