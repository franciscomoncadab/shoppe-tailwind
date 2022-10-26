import React from "react";
import product1 from "../assets/images/Img01.png";

function DetailsProducts() {
  return (
    <div className="relative flex justify-between px-14 mt-24">
      <div className="flex justify-between gap-7 p-1">
        <ul className="flex flex-col gap-7">
          <li>
            <img className="w-[90px] h-[90px] rounded-md" src={product1} alt="img1" />
          </li>
          <li>
            <img className="w-[90px] h-[90px] rounded-md" src={product1} alt="img2" />
          </li>
          <li>
            <img className="w-[90px] h-[90px] rounded-md" src={product1} alt="img3" />
          </li>
          <li>
            <img className="w-[90px] h-[90px] rounded-md" src={product1} alt="img4" />
          </li>
        </ul>
        <img className="w-[450px] h-[450px] rounded-md" src={product1} alt="img5" />
      </div>
      <div className="flex flex-col mr-24">
        <h1 className="text-2xl font-medium">Lira Earrings</h1>
        <br />
        <h3 className="text-base font-medium text-gold">$ 20.00</h3>
        <br />
        <h2>Aqui van las estrellas</h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus{" "}
          <br />
          augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu{" "}
          <br />
          facilisis consequat sed eu felis.{" "}
        </p>
        <div className="flex justify-evenly">
          <button type="button" className="">Counter</button>
          <button className="border-2 px-10 py-3 pointer-events-none disabled:opacity-60">
            <a href="/" className="disabled:opacity-75">
              ADD TO CART
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsProducts;
