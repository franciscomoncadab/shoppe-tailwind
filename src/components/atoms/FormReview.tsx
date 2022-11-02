import React from "react";

function FormReview() {
  return (
    <div className="w-[50%] ml-[44px]">
      <h2 className="text-[20px] mt-[42px]">Add a Review</h2>
      <p className="text-dark-gray mt-[11px] mb-[46px]">
        Your email address will not be published. Required fields are marked *
      </p>

      <form>
        
        <button
          type="submit"
          className="text-white bg-black h-[53px] w-[123px] font-medium rounded-md text-sm px-5 py-2.5 text-center hover:bg-white hover:text-black hover:border-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormReview;
