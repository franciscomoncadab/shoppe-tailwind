import React from "react";
import DetailsImage from "../components/organisms/DetailsImage";
import Tabs from "../components/organisms/Tabs";

function DetailsProducts() {
  return (
    <>
      <DetailsImage />
      <div className="sm:mx-12">
        <Tabs />
      </div>
    </>
  );
}

export default DetailsProducts;
