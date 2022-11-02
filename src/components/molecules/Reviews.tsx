import React from "react";
import FormReview from "../atoms/FormReview";
import TextReview from "../atoms/TextReview";


function Reviews() {
  return (
    <div className="flex flex-row justify-between mb-[96px] w-full">
      <TextReview />
      <FormReview />
    </div>
  );
}

export default Reviews;
