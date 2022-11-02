import React from "react";
import FormReview from "../atoms/FormReview";
import TextReview from "../atoms/TextReview";


function Reviews() {
  return (
    <div className="flex flex-col-2 justify-between h-full w-full">
      <TextReview />
      <FormReview />
    </div>
  );
}

export default Reviews;
