import React from 'react'
import rupee from "../images/rupee.png"

function Card({image, name, originalPrice, discountedPrice}){
    return(
      <div style={{filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.15))"}} className="flex flex-shrink-0 mb-8 mt-2 flex-col bg-white w-56 h-fit p-3 rounded-3xl text-black">
          <div className="bg-gray-200 w-full h-64 rounded-3xl p-2">
            <img style={{width: "100%", height: "100%", borderRadius: "1rem"}} src={image} className="w-full"/>
          </div>
          <p className="font-semibold text-sm px-1 py-1 leading-tight">{name}</p>
          <div className="flex flex-row my-1 justify-between">  
            <div className='flex flex-row items-center'>
              <img src={rupee} className="size-5 ml-1"/>  
              <p className="font-bold ml-2">{discountedPrice}</p> 
              <p className="font-bold ml-1 line-through text-gray-500 text-xs mt-1">{originalPrice}</p> 
            </div>     
            <p className="text-sm font-bold text-green-700 mr-2">{Math.floor(100 - ((discountedPrice/originalPrice)*100))}% OFF</p>
          </div>
          <button className="bg-black hover:bg-zinc-800 text-white w-full mb-1 rounded-3xl py-1 mt-2">Add to Cart</button>
        </div>
    )
  }

export default Card