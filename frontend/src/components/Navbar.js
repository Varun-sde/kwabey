import React from 'react'
import cartIcon from "../images/cart-icon.png"
import kwabey_logo from "../images/kwabey_logo.png"

const Navbar = () => {
  return (
    <nav style={{position: "sticky", top: "0px", zIndex: "1"}} className="bg-white flex flex-row py-4 px-6 items-center border-b-2 border-zinc-300 justify-between">
      <div className="flex flex-row space-x-10">
        <img style={{width: "7rem"}} src={kwabey_logo}/>
        <a href="/" className="font-semibold text-lg pl-8">Categories</a>
        <a href="/" className="font-semibold text-lg">Anime Store</a>
        <a href="/" className="font-semibold text-lg">Top Deals</a>
        <a href="/" className="font-semibold text-lg">About us</a>
      </div>
      <div className="flex flex-row space-x-10">
        <p className="flex flex-row"><input placeholder="Search item..." className="flex items-center text-[16px] px-[10px] py-[5px] w-full pr-[10px] outline-[none] bg-[#FFFFFF] text-[#000000] border-[1px] border-[solid] border-[#C4D1EB] rounded-[5px] [box-shadow:3px_3px_2px_0px_#E2E2E2] [transition:.3s_ease] focus:bg-[#F5F5F5] focus:border-[1px] focus:border-[solid] focus:border-[#5A7EC7] focus:rounded-[10px]"/><button className="bg-black hover:bg-zinc-800 text-white rounded px-5 ml-2">Search</button></p>
        <p><img style={{width: "1.5rem"}} src={cartIcon}/></p>
      </div>
    </nav>
  )
}

export default Navbar