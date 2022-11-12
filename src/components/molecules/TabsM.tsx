import React from "react";
import Collapsible from "react-collapsible";
import Trigger from "../atoms/Trigger";

function TabsM() {
  return (
    <div className="w-full">
      <Collapsible
        trigger={<Trigger text={"Description"} />}
        triggerClassName="text-base"
        triggerWhenOpen={<Trigger text={"Description"} />}
        transitionTime={200}
        className="mb-2"
      >
        <p className="text-xs p-2 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie diam bibendum sed.
        </p>
      </Collapsible>
      <Collapsible
        trigger={<Trigger text={"Aditional information"} />}
        triggerClassName="text-base"
        triggerWhenOpen={<Trigger text={"Aditional information"} />}
        transitionTime={200}
        className="my-2"
      >
        <div className="my-2 text-[10px] px-2">
          <strong>Weight:</strong> 0.3 kg
        </div>
        <div className="my-2 text-[10px] px-2">
          <strong>Dimentions:</strong> 15 x 10 x 1 cm
        </div>
        <div className="my-2 text-[10px] px-2">
          <strong>Colours:</strong> Black, Browns, White
        </div>
        <div className="my-2 text-[10px] px-2">
          <strong>Material:</strong> Metal
        </div>
      </Collapsible>
      <Collapsible
        trigger={<Trigger text={"Reviews(0)"} />}
        triggerClassName="text-base"
        triggerWhenOpen={<Trigger text={"Reviews(0)"} />}
        transitionTime={200}
        className="my-2"
      >
        <h2 className="p-2 text-[12px]">Not reviewed yet</h2>
      </Collapsible>
    </div>
  );
}

export default TabsM;
