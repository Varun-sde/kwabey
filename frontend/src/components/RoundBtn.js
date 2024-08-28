import React from 'react'

const RoundBtn = (props) => {
  return (
    <p className="bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 cursor-pointer duration-300"><button>{props.children}</button></p>
  )
}

export default RoundBtn