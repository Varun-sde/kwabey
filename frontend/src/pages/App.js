import "../style/App.css";
import React, { useEffect, useState } from "react";
import axios from "axios"
import Card from "../components/Card"
import cat_1 from "../images/cat_1.png"
import cat_2 from "../images/cat_2.png"
import cat_3 from "../images/cat_3.png"
import cat_4 from "../images/cat_4.png"
import cat_5 from "../images/cat_5.png"
import sevenDay from "../images/seven-day.png"
import indianBrand from "../images/indian_brand.png"
import cod from "../images/cod_available.png"
import banner from "../images/banner 1.png"
import smile from "../images/smile.png"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Topnav from "../components/Topnav";

const App = () => {
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
      <div className="w-full h-full overflow-auto flex flex-col">
        <Topnav />

        <Navbar />

        <div className="w-full text-black">
          <img style={{width: "100%"}} src={banner}/>
        </div>
        <div className="w-full md:w-[90%] px-4 py-2 self-center max-w-[1400px]">
        <div className="flex justify-between px-4"><p className="lg:text-3xl md:text-xl text-lg font-bold pb-2 mt-4">Categories</p></div>
        <div className="flex space-x-4 overflow-x-auto justify-around">
          <div style={{backgroundImage: "linear-gradient(rgba(255,255,255,1), rgba(252,235,235,1))"}} className="flex items-center flex-col flex-shrink-0 h-40 w-32 mb-8 sm:h-60 sm:w-56 py-2 rounded-3xl text-black">
            <img style={{width: "70%",height: "85%"}} src={cat_1}/>
            <p className="font-medium text-sm sm:text-xl mt-1">Oversized T-Shirt</p>
          </div>
          <div style={{backgroundImage: "linear-gradient(rgba(255,255,255,1), rgba(238,248,255,1))"}} className="flex items-center flex-col flex-shrink-0 h-40 w-32 mb-8 sm:h-60 sm:w-56 py-2 rounded-3xl text-black">
            <img style={{width: "70%",height: "85%"}} src={cat_2}/>
            <p className="font-medium text-sm sm:text-xl mt-1">Full Sleeve T-Shirt</p>
          </div>
          <div style={{backgroundImage: "linear-gradient(rgba(255,255,255,1), rgba(252,245,235,1))"}} className="flex items-center flex-col flex-shrink-0 h-40 w-32 mb-8 sm:h-60 sm:w-56 py-2 rounded-3xl text-black">
            <img style={{width: "70%",height: "85%"}} src={cat_3}/>
            <p className="font-medium text-sm sm:text-xl mt-1">Joggers</p>
          </div>
          <div style={{backgroundImage: "linear-gradient(rgba(255,255,255,1), rgba(238,246,245,1))"}} className="flex items-center flex-col flex-shrink-0 h-40 w-32 mb-8 sm:h-60 sm:w-56 py-2 rounded-3xl text-black">
            <img style={{width: "70%",height: "85%"}} src={cat_4}/>
            <p className="font-medium text-sm sm:text-xl mt-1">Jackets</p>
          </div>
          <div style={{backgroundImage: "linear-gradient(rgba(255,255,255,1), rgba(252,245,235,1))"}} className="flex items-center flex-col flex-shrink-0 h-40 w-32 mb-8 sm:h-60 sm:w-56 py-2 rounded-3xl text-black">
            <img style={{width: "70%",height: "85%"}} src={cat_5}/>
            <p className="font-medium text-sm sm:text-xl mt-1">Plains</p>
          </div>
        </div>
      </div>
        
        <section className="bg-black flex flex-grow items-center justify-between gap-4 md:gap-0 md:h-28 h-[3.75rem] mb-6 py-4 px-20 w-[100%]">
          <img className="h-full" src={sevenDay}/>
          <img className="h-full" src={indianBrand}/>
          <img className="h-full" src={cod}/>
        </section>
        
        
        <div className="w-full md:w-[90%] px-4 py-2 self-center max-w-[1400px]">
          <div className="flex justify-between items-center px-4 mb-2"><p className="lg:text-3xl md:text-xl text-sm font-bold">Shop The Latest</p><button className="bg-black hover:bg-zinc-800 text-white rounded-md my-1 px-5 py-1 md:text-lg text-sm">View All</button></div>
          <div className="flex space-x-4 overflow-x-auto justify-around">
            {
              latest.map((item)=>{
                return <Card name={item.name} image={item} discountedPrice={item.discountedPrice} originalPrice={item.originalPrice}/>
              })
            }
          </div>
        </div>


        <div className="w-full md:w-[90%] px-4 py-2 self-center mt-1 max-w-[1400px]">
          <div className="flex justify-between items-center px-4 mb-3"><p className="lg:text-3xl md:text-xl text-sm font-bold">Anime Store</p><button className="bg-black hover:bg-zinc-800 text-white rounded-lg my-1 px-5 py-1 md:text-lg text-sm">View All</button></div>
          <div className="flex space-x-4 overflow-x-auto justify-around">
            {
              anime.map((item)=>{
                return <Card name={item.name} image={item} discountedPrice={item.discountedPrice} originalPrice={item.originalPrice}/>
              })
            }
          </div>
        </div>


        <section className="flex items-center justify-between h-10 md:h-16 mb-8 sm:mb-4 flex-wrap">
          <div className="sm:w-[50%] w-full h-full text-white text-center flex items-center justify-center bg-black text-[0.7rem] md:text-[1.4rem]">Homegrown Indian Brand</div>
          <div className="sm:w-[50%] w-full h-full text-black text-center flex items-center justify-center text-2xl bg-white border-2 border-black text-[0.7rem] md:text-[1.4rem]">Over <span className="font-bold px-2">1Million</span> Smiles Delivered <span className="ml-2" style={{marginTop: "2px"}}><img className="h-[0.7rem] md:h-[1.4rem] " src={smile} /></span></div>
        </section>


        <div className="w-full md:w-[90%] px-4 py-2 self-center max-w-[1400px]">
          <div className="flex justify-between px-4 my-2 items-center">
            <p className="lg:text-3xl md:text-xl text-sm font-bold">Jackets & Hoods</p>
            <button className="bg-black hover:bg-zinc-800 text-white rounded-lg my-1 px-5 py-1 md:text-lg text-sm">View All</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto justify-around">
            {
              jacket.map((item)=>{
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

export default App;
