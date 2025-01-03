import React from 'react'
import { FaPlus } from "react-icons/fa6"
import { useNavigate } from 'react-router-dom'

const AddItem = () => {
  const navigate = useNavigate()

  return (
    <div 
      className='mt-2 gap-x-2 flex text-sm font-monlam rounded-md items-center text-surface-dark bg-surface-light w-fit p-2 cursor-pointer hover:bg-surface-200'
      onClick={() => navigate('/Tsigsar')}
    >
      <p>ཚིག་གསར།</p>
      <FaPlus/>
    </div>
  )
}

export default AddItem