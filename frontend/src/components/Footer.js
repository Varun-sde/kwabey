import React from 'react'
import kwabey_logo from "../images/kwabey_logo.png"
import FB_logo from "../images/FB_logo.png"
import Insta_logo from "../images/Insta_logo.png"
import Twitter_logo from "../images/Twitter_Logo.png"
import mailIcon from "../images/mail-icon.png"

const Footer = () => {
  return (
    <footer className="py-14 h-72 bg-slate-200 flex flex-row justify-between px-16">
          <div className="flex flex-col">
            <img style={{width: "8rem"}} className="mb-3" src={kwabey_logo}/>
            <div className="flex flex-row justify-between">
              <img style={{width: "2rem"}} src={FB_logo}/>
              <img style={{width: "2rem"}} src={Twitter_logo}/>
              <img style={{width: "2rem"}} src={Insta_logo}/>
            </div>
          </div>
          <div className="flex flex-col font-medium text-xl">
            <p style={{color: "2C2C2C"}}>Support</p>            
            <p className="text-zinc-500 mt-2 text-lg">Contact Us</p>            
            <p className="text-zinc-500 text-lg">About Us</p>            
            <p className="text-zinc-500 text-lg">Track Order</p>            
            <p className="text-zinc-500 text-lg">Bulk Order</p>            
          </div>
          <div className="flex flex-col font-medium text-xl">
            <p style={{color: "2C2C2C"}}>Legal Info</p>            
            <p className="text-zinc-500 mt-2 text-lg">Policy</p>            
            <p className="text-zinc-500 text-lg">About Us</p>            
            <p className="text-zinc-500 text-lg">Terms & Conditions</p>            
          </div>
          <div style={{color: "2C2C2C"}} className="flex flex-col font-medium">
            <p className="flex flex-row text-xl"><span style={{marginTop: "2px"}} className="mr-3"><img style={{width: "2rem"}} src={mailIcon}/></span>Subscribe to our email alerts!</p>
            <p className="flex flex-row mt-2"><input placeholder="Enter Email..." className="mt-2 flex items-center text-[16px] px-[10px] py-[5px] w-full pr-[10px] outline-[none] bg-[#FFFFFF] text-[#000000] border-[1px] border-[solid] border-[#C4D1EB] rounded-[5px] [box-shadow:3px_3px_2px_0px_#E2E2E2] [transition:.3s_ease] focus:bg-[#F5F5F5] focus:border-[1px] focus:border-[solid] focus:border-[#5A7EC7] focus:rounded-[10px]"/><button className="bg-black hover:bg-zinc-800 text-white rounded mt-2 px-5 ml-2">Subscribe</button></p>
          </div>
        </footer>
  )
}

export default Footer