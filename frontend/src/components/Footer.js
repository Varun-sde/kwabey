import React from 'react'
import kwabey_logo from "../images/kwabey_logo.png"
import FB_logo from "../images/FB_logo.png"
import Insta_logo from "../images/Insta_logo.png"
import Twitter_logo from "../images/Twitter_Logo.png"
import mailIcon from "../images/mail-icon.png"

const Footer = () => {
  return (
    <footer className="h-52 py-10 md:h-60 md:py-14 lg:h-72 bg-slate-200 flex flex-col md:flex-row justify-between px-16 gap-4">
          <div className="flex flex-col items-center">
            <img className="mb-3 w-[5rem] md:w-[6rem] lg:w-[8rem]" src={kwabey_logo}/>
            <div className="flex flex-row gap-6">
              <img className='w-6 md:w-[1.5rem] lg:w-[2rem]' src={FB_logo}/>
              <img className='w-6 md:w-[1.5rem] lg:w-[2rem]' src={Twitter_logo}/>
              <img className='w-6 md:w-[1.5rem] lg:w-[2rem]' src={Insta_logo}/>
            </div>
          </div>
          <div className="hidden md:flex flex-col font-medium text-[1rem] lg:text-xl">
            <p style={{color: "2C2C2C"}}>Support</p>            
            <p className="text-zinc-500 mt-2 text-[0.5rem] lg:text-xl">Contact Us</p>            
            <p className="text-zinc-500 text-[0.5rem] lg:text-xl">About Us</p>            
            <p className="text-zinc-500 text-[0.5rem] lg:text-xl">Track Order</p>            
            <p className="text-zinc-500 text-[0.5rem] lg:text-xl">Bulk Order</p>            
          </div>
          <div className="hidden md:flex flex-col font-medium text-[1rem] lg:text-xl">
            <p style={{color: "2C2C2C"}}>Legal Info</p>            
            <p className="text-zinc-500 mt-2 text-[0.5rem] lg:text-xl">Policy</p>            
            <p className="text-zinc-500 text-[0.5rem] lg:text-xl">About Us</p>            
            <p className="text-zinc-500 text-[0.5rem] lg:text-xl">Terms & Conditions</p>            
          </div>
          <div style={{color: "2C2C2C"}} className="flex flex-col  font-medium">
            <p className="hidden  md:flex flex-row text-[1rem] lg:text-xl">
              <span style={{marginTop: "2px"}} className="mr-3">
                <img className='w-7 lg:w-8' src={mailIcon}/>
              </span>
              Subscribe to our email alerts!
            </p>
            <p className="flex flex-row mt-2">
              <input placeholder="Enter Email..." className="mt-2 flex items-center text-[10px] lg:text-[16px] md:text-[14px] px-[10px] py-[5px] w-full pr-[10px] outline-[none] bg-[#FFFFFF] text-[#000000] border-[1px] border-[solid] border-[#C4D1EB] rounded-[5px] [box-shadow:3px_3px_2px_0px_#E2E2E2] [transition:.3s_ease] focus:bg-[#F5F5F5] focus:border-[1px] focus:border-[solid] focus:border-[#5A7EC7] focus:rounded-[10px]"/>
              <button className="bg-black hover:bg-zinc-800 text-white rounded mt-2 px-5 ml-2 text-[10px] lg:text-[16px] md:text-[14px]">Subscribe</button>
            </p>
          </div>
        </footer>
  )
}

export default Footer