import React from "react";
import { ReactComponent as Down } from "../../assets/icons/down.svg";

interface Props{
     text: string;
}

function Trigger(Props: Props) {
     return ( 
          <div className="font-normal text-[12px] flex flex-row justify-between">
               <p>{Props.text}</p>
               <Down className="mt-2" />
          </div>
      );
}

export default Trigger;