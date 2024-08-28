import React, { useState } from 'react'
import axios from 'axios'

const Upload = () => {
  const[file, setFile] = useState(null)
  const[category, setCategory] = useState('')
  async function submitHandler(e){
    e.preventDefault()     
    let formData = new FormData()
    formData.append('file',file)
    await axios.post(`http://localhost:5000/upload/${category}`,formData)
    setFile(null)
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <form className='bg-zinc-100 border-2 border-zinc-300 flex flex-col items-start py-5 px-2 space-y-3 rounded' onSubmit={(e)=>submitHandler(e)}>
            <div className='w-full space-y-1'>
              <label className='ml-1 font-semibold'>Category:</label>
              <select onChange={(e)=>setCategory(e.target.value)} className='w-full py-2 rounded border border-zinc-300 cursor-pointer hover:bg-zinc-100 px-2'>
                <option value='anime'>Anime</option>
                <option value='latest'>Latest</option>
                <option value='jacket'>Jackets</option>
              </select>
            </div>
            <input type='file' onChange={(e)=>setFile(e.target.files[0])}/>
            <button className='bg-blue-500 text-white px-4 py-1 rounded w-full' type='submit'>Upload</button>
        </form>
    </div>
  )
}

export default Upload