import React from "react";

function AditionalInfo() {
  return (
    <div className="font-normal mt-8">
      <div className="my-2 text-[16px] text-dark-gray flex flex-row">
        <p className="text-black">Weight:</p> <p className="ml-2">0.3 kg</p>
      </div>
      <div className="my-2 text-[16px] text-dark-gray flex flex-row">
        <p className="text-black">Dimentions:</p> <p className="ml-2">15 x 10 x 1 cm</p>
      </div>
      <div className="my-2 text-[16px] text-dark-gray flex flex-row">
        <p className="text-black">Colours:</p> <p className="ml-2">Black, Browns, White</p>
      </div>
      <div className="my-2 text-[16px] text-dark-gray flex flex-row">
        <p className="text-black">Material:</p> <p className="ml-2">Metal</p>
      </div>
    </div>
  );
}

export default AditionalInfo;
