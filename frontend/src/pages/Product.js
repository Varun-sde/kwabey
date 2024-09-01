import React, { useEffect, useState } from "react";
import axios from "axios"
import Navbar from "../components/Navbar";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";
import productImg from "../images/product-im.png";
import fillStar from "../images/fillStar.png";
import emptyStar from "../images/emptyStar.png";
import add_cart from "../images/add_cart.png";
import Card from "../components/Card";
import "../style/product.css"

const Product = () => {
  const[latest, setLatest] = useState([])
  const[anime, setAnime] = useState([])
  const[jacket, setJacket] = useState([])

  useEffect(()=>{
    async function call(){
      const latestRes = await axios.get("http://localhost:5000/latest")
      const animeRes = await axios.get("http://localhost:5000/anime")
      const jacketRes = await axios.get("http://localhost:5000/jacket")
      setAnime(animeRes.data.arr)
      setJacket(jacketRes.data.arr)
      setLatest(latestRes.data.arr)
    }
    call();
  },[])
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full overflow-auto ">
        <Topnav />
        <Navbar />
        <div className="w-full md:w-[90%] mt-1 max-w-[1400px] mx-auto">
        <section className="h-4/5 flex flex-col md:flex-row justify-between items-center md:px-8 md:py-4 px-2 py-2 ">
        <div className="w-24 h-full overflow-auto preview lg:block hidden">
          <div style={{backgroundColor: "#EBEBEB"}} className="border rounded w-full xl:h-24 h-16 mb-2 flex justify-center items-center">
            <img className="h-[60%]" src={productImg}/>
          </div>
          <div style={{backgroundColor: "#EBEBEB"}} className="border rounded w-full xl:h-24 h-16 mb-2 flex flex-col justify-center items-center">
            <img style={{opacity: "0.3"}} className="h-[60%]" src={productImg}/>
          </div>
          <div style={{backgroundColor: "#EBEBEB"}} className="border rounded w-full xl:h-24 h-16 mb-2 flex flex-col justify-center items-center">
            <img style={{opacity: "0.3"}} className="h-[60%]" src={productImg}/>
          </div>
          <div style={{backgroundColor: "#EBEBEB"}} className="border rounded w-full xl:h-24 h-16 mb-2 flex flex-col justify-center items-center">
            <img style={{opacity: "0.3"}} className="h-[60%]" src={productImg}/>
          </div>
          <div style={{backgroundColor: "#EBEBEB"}} className="border rounded w-full xl:h-24 h-16 mb-2 flex flex-col justify-center items-center">
            <img style={{opacity: "0.3"}} className="h-[60%]" src={productImg}/>
          </div>
        </div>
        <div style={{backgroundColor: "#EBEBEB"}} className="bg-zinc-300 w-full md:w-[60%] lg:w-[50%] h-full rounded-lg p-4 flex justify-center items-center">
          <img className="w-[60%]" src={productImg}/>
        </div>
        <div className="w-full md:w-[35%] lg:w-[30%] h-full preview rounded-lg xl:space-y-6 space-y-3">
            <p className="text-lg xl:text-2xl md:text-[1rem] md:leading-5 font-semibold">Now When Printed Black Half Sleeve TShirt For Men</p>
            <div className="flex flex-col space-y-1">
              <p className="text-xl xl:text-3xl font-bold">₹ 300</p>
              <div className="flex flex-row space-x-3 items-center">
                <div className="flex flex-row space-x-1">
                  <img  className="xl:w-6 w-4" src={fillStar} />
                  <img  className="xl:w-6 w-4" src={fillStar} />
                  <img  className="xl:w-6 w-4" src={fillStar} />
                  <img  className="xl:w-6 w-4" src={fillStar} />
                  <img  className="xl:w-6 w-4" src={emptyStar} />
                </div>
                <a href="/" className="xl:text-xl text-sm font-bold">(4.0) Ratings</a>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="xl:text-xl text-lg font-bold">Sizes:</p>
              <div className="flex flex-row space-x-3 items-center">
                <button style={{backgroundColor: "#F1F1F1", border: "3px solid #797979", color: "#797979"}} className="xl:w-10 xl:h-10 w-8 h-8 rounded-lg font-semibold xl:text-2xl md:text-xl text-lg">S</button>
                <button style={{backgroundColor: "#F1F1F1", border: "3px solid #181818", color: "#181818"}} className="xl:w-10 xl:h-10 w-8 h-8 rounded-lg font-semibold xl:text-2xl md:text-xl text-lg">M</button>
                <button style={{backgroundColor: "#F1F1F1", border: "3px solid #797979", color: "#797979"}} className="xl:w-10 xl:h-10 w-8 h-8 rounded-lg font-semibold xl:text-2xl md:text-xl text-lg">L</button>
                <button style={{backgroundColor: "#F1F1F1", border: "3px solid #797979", color: "#797979"}} className="xl:w-10 xl:h-10 w-8 h-8 rounded-lg font-semibold xl:text-2xl md:text-xl text-lg">XL</button>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
            <p className="xl:text-xl text-lg font-bold">Quantity:</p>
            <div className="flex space-x-5">
            <button style={{backgroundColor: "#F1F1F1", border: "3px solid #797979", color: "#797979"}} className=" flex justify-center xl:w-10 xl:h-10 w-8 h-8 rounded-lg font-semibold xl:text-2xl text-[1rem]">-</button>
            <div className="bg-[#D9D9D9] xl:w-20 xl:h-10 w-16 h-8 flex justify-center items-center font-semibold xl:text-2xl text-lg rounded-lg">1</div>
            <button style={{backgroundColor: "#F1F1F1", border: "3px solid #181818", color: "#181818"}} className="flex justify-center xl:w-10 xl:h-10 w-8 h-8 rounded-lg font-semibold xl:text-2xl text-[1rem]">+</button>
            </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center space-y-4">
            <button className="w-full bg-black text-white flex items-center justify-center h-10 xl:h-14 xl:text-xl text-lg font-bold space-x-1 rounded-lg"><p>Add to cart</p> <img className="h-6" src={add_cart} /></button>
            <button className="w-full flex border-4 border-black items-center justify-center h-10 xl:h-14 xl:text-xl text-lg font-bold space-x-1 rounded-lg">Buy Now</button>
            </div>
            
        </div>
    </section>
        </div>
        
        <div className="w-full md:w-[90%] px-4 py-2 mx-auto mt-1 max-w-[1400px]">
        <div><p className="lg:text-3xl md:text-xl text-sm font-bold">Recomended</p></div>
        <div className="flex space-x-4 overflow-x-auto justify-around">
          {
            anime.map((item)=>{
              return <Card name={item.name} image={item} discountedPrice={item.discountedPrice} originalPrice={item.originalPrice}/>
            })
          }
        </div>
      </div>
        <Footer />
      </div>
    </div>
  );
};

export default Product;
