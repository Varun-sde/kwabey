import React from 'react'
import cartIcon from "../images/cart-icon.png"
import kwabey_logo from "../images/kwabey_logo.png"
import hamburger from "../images/hamburger.png"
import search from "../images/search.png"
import "./Navbar.css";

const Navbar = () => {
  return (
    <div style={{position: "sticky", top: "0px", zIndex: "1"}} className="bg-white items-center justify-center border-b-2 border-zinc-300 flex">
    <nav className="bg-white flex flex-row py-4 px-3 md:px-6 items-center  justify-between w-full md:w-[90%] max-w-[1400px] ">
    <div className='gap-5 flex'>
    <img className="hamburger w-5" src={hamburger}/>
    <img className="w-24" src={kwabey_logo}/>
    </div>
      <div className=" hidden flex-row space-x-2 xl:space-x-10 lg:space-x-8 min-[850px]:flex min-[850px]:space-x-6 xl:flex lg:flex ">
        <a href="/" className="font-semibold xl:text-[1.25rem] lg:text-[0.84rem] min-[850px]:text-[0.7rem]">Categories</a>
        <a href="/" className="font-semibold xl:text-[1.25rem] lg:text-[0.84rem] min-[850px]:text-[0.7rem]">Anime Store</a>
        <a href="/" className="font-semibold xl:text-[1.25rem] lg:text-[0.84rem] min-[850px]:text-[0.7rem]">Top Deals</a>
        <a href="/" className="font-semibold xl:text-[1.25rem] lg:text-[0.84rem] min-[850px]:text-[0.7rem]">About us</a>
      </div>
      <div className="flex flex-row space-x-10">
        <p className=" hidden flex-row sm:flex">
          <input placeholder="Search item..." className="flex items-center text-[12px] lg:text-[14px] xl:text-[16px] px-[10px] py-[5px] w-full pr-[10px] outline-[none] bg-[#FFFFFF] text-[#000000] border-[1px] border-[solid] border-[#C4D1EB] rounded-[5px] [box-shadow:3px_3px_2px_0px_#E2E2E2] [transition:.3s_ease] focus:bg-[#F5F5F5] focus:border-[1px] focus:border-[solid] focus:border-[#5A7EC7] focus:rounded-[10px]"/>
          <button className="bg-black hover:bg-zinc-800 text-white rounded px-5 ml-2 text-[12px] lg:text-[14px] xl:text-[16px]">Search</button>
          </p>
        <p className='gap-5 flex justify-center items-center'>
          <img className="w-5 sm:hidden" src={search}/>
          <img className="w-5 lg:w-6" src={cartIcon}/>
        </p>
      </div>
    </nav>
    </div>
    
  )
}

export default Navbar