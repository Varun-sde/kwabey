import React from "react";
import Navbar from "../components/Navbar";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";
import productImg from "../images/product-im.png";
import fillStar from "../images/fillStar.png";
import emptyStar from "../images/emptyStar.png";
import "../style/product.css"

const Product = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full overflow-auto">
        <Topnav />
        <Navbar />
        <section className="h-4/5 flex flex-row justify-between px-8 py-4">
            <div className="w-24 h-full overflow-auto preview">
              <div style={{backgroundColor: "#EBEBEB"}} className="border rounded w-full h-24 mb-2 flex justify-center items-center">
                <img style={{width: "3.5rem"}} src={productImg}/>
              </div>
              <div style={{backgroundColor: "#EBEBEB"}} className="border rounded w-full h-24 mb-2 flex flex-col justify-center items-center">
                <img style={{width: "3.5rem", opacity: "0.3"}} src={productImg}/>
              </div>
              <div style={{backgroundColor: "#EBEBEB"}} className="border rounded w-full h-24 mb-2 flex flex-col justify-center items-center">
                <img style={{width: "3.5rem", opacity: "0.3"}} src={productImg}/>
              </div>
              <div style={{backgroundColor: "#EBEBEB"}} className="border rounded w-full h-24 mb-2 flex flex-col justify-center items-center">
                <img style={{width: "3.5rem", opacity: "0.3"}} src={productImg}/>
              </div>
              <div style={{backgroundColor: "#EBEBEB"}} className="border rounded w-full h-24 mb-2 flex flex-col justify-center items-center">
                <img style={{width: "3.5rem", opacity: "0.3"}} src={productImg}/>
              </div>
            </div>
            <div style={{width: "36rem", backgroundColor: "#EBEBEB"}} className="bg-zinc-300 h-full rounded-lg p-4 flex justify-center items-center">
              <img style={{width: "18rem"}} src={productImg}/>
            </div>
            <div style={{width: "28rem"}}  className="h-full preview rounded-lg border">
                <p className="text-2xl font-semibold">Now When Printed Black Half Sleeve TShirt For Men</p>
                <div className="flex flex-col space-y-1">
                  <p className="text-3xl font-bold">₹ 300</p>
                  <div className="flex flex-row space-x-3 items-center">
                    <div className="flex flex-row space-x-1">
                      <img style={{width: "1.6rem", height: "1.6rem"}} src={fillStar} />
                      <img style={{width: "1.6rem", height: "1.6rem"}} src={fillStar} />
                      <img style={{width: "1.6rem", height: "1.6rem"}} src={fillStar} />
                      <img style={{width: "1.6rem", height: "1.6rem"}} src={fillStar} />
                      <img style={{width: "1.6rem", height: "1.6rem"}} src={emptyStar} />
                    </div>
                    <a href="/" className="text-xl font-bold">(4.0) Ratings</a>
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="text-xl font-bold">Sizes:</p>
                  <div className="flex flex-row space-x-3 items-center">
                    <button style={{backgroundColor: "#F1F1F1", border: "3px solid #797979", color: "#797979"}} className="w-10 h-10 rounded-lg font-semibold text-2xl">S</button>
                    <button style={{backgroundColor: "#F1F1F1", border: "3px solid #181818", color: "#181818"}} className="w-10 h-10 rounded-lg font-semibold text-2xl">M</button>
                    <button style={{backgroundColor: "#F1F1F1", border: "3px solid #797979", color: "#797979"}} className="w-10 h-10 rounded-lg font-semibold text-2xl">L</button>
                    <button style={{backgroundColor: "#F1F1F1", border: "3px solid #797979", color: "#797979"}} className="w-10 h-10 rounded-lg font-semibold text-2xl">XL</button>
                  </div>
                </div>
            </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Product;
