import React from "react";
import productImg from "../images/product-im.png";
import rec1 from "../images/Rectangle 6.png";
import rec2 from "../images/Rectangle 7.png";
import can from "../images/Trash Can.png";

const CartCard = () => {
  return (
    <div className="w-full border rounded-lg shadow-md">
      <div className="w-full flex items-center justify-around">
        <div className="rounded m-4 flex justify-center items-center space-x-4">
          <img src={productImg} className="h-16 " />
          <div>T Shirt</div>
        </div>
        <div className="rounded m-4 h-16 flex justify-center items-center space-x-4">
          <p>1</p>
          <div className="flex flex-col space-y-1">
          <button><img src={rec1} className="h-3 " /></button>
          <button><img src={rec2} className="h-3 " /></button>
          </div>
        </div>
        <div className="rounded m-4 flex justify-center items-center space-x-4">
          <p>Rs. 350</p>
          <button>
          <img src={can} className="h-9" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
