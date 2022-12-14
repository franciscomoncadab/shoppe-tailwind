import React, { useState, useRef } from "react";
import TextProducts from "../molecules/TextProducts";
import { imgProduct } from "../productImg";
import { ReactComponent as LargeLine } from "../../assets/icons/lineaGrande.svg";
import { ReactComponent as SmallLine } from "../../assets/icons/lineaChiquita.svg";
import DetailsImageM from "../molecules/DetailsImageM";

export type DetailsImageProps = { images: string; id: number };

function DetailsImage() {
  const [img1Active, setImg1Active] = useState(true);
  const [img2Active, setImg2Active] = useState(false);
  const [img3Active, setImg3Active] = useState(false);
  const [img4Active, setImg4Active] = useState(false);
  const [imgActive, setImgActive] = useState("img2.jpg");
  const dataImage = useRef<any>("");

  const handleChange = (data: any) => {
    if (data.id === 2) {
      setImg1Active(true);
      setImg2Active(false);
      setImg3Active(false);
      setImg4Active(false);
    } else if (data.id === 3) {
      setImg1Active(false);
      setImg2Active(true);
      setImg3Active(false);
      setImg4Active(false);
    } else if (data.id === 4) {
      setImg1Active(false);
      setImg3Active(true);
      setImg2Active(false);
      setImg4Active(false);
    } else if (data.id === 5) {
      setImg1Active(false);
      setImg4Active(true);
      setImg3Active(false);
      setImg2Active(false);
    }
  };


  return (
    <div>
      {window.innerWidth > 1020 ? (
        <div>
          <div className="sm:flex sm:flex-row sm:justify-center sm:gap-x-[50px] sm:m-auto sm:w-full sm:h-full">
            <div className="w-full sm:h-full sm:flex sm:flex-col-2 sm:gap-[39px] sm:w-[699px] md:w-[58.78%] sm:px-0">
              <ul className="hidden sm:flex sm:flex-col sm:gap-[40px] stroke-0">
                {imgProduct.map((data, index) => {
                  return (
                    <li
                      key={index}
                    >
                      <img
                        src={`./images/${data.images}`}
                        ref={dataImage}
                        alt="products"
                        className="w-[120px] h-[120px] rounded-md cursor-pointer object-cover"
                        onClick={() => {
                          let dataImage = data.images
                          setImgActive(dataImage);
                          handleChange(data);
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
              <img
                className="w-[540px] h-[600px] object-cover rounded-md"
                src={`./images/${imgActive}`}
                alt="img5"
              />
            </div>
            <TextProducts />
          </div>
          <div className="relative mt-[24px] ml-[159px]">
            <LargeLine />
            <div className="absolute flex flex-row top-0">
              <SmallLine
                className={`${img1Active ? "stroke-2" : "stroke-0"}`}
              />
              <SmallLine
                className={`${img2Active ? "stroke-2" : "stroke-0"}`}
              />
              <SmallLine
                className={`${img3Active ? "stroke-2" : "stroke-0"}`}
              />
              <SmallLine
                className={`${img4Active ? "stroke-2" : "stroke-0"}`}
              />
            </div>
          </div>
        </div>
      ) : (
        <DetailsImageM />
      )}
    </div>
  );
}

export default DetailsImage;
