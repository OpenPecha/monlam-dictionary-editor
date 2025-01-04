import React from 'react'
import cat from '../assets/cat.jpg'
const Usercard = () => {
  return (
    <div className='flex items-center font-inter justify-end p-5'>
    <div className='mt-2 mr-4'>
        <p className='font-semibold text-sm'>Tenzin Tsering</p>
        <p className=' text-xs bg-secondary-50 text-secondary-400 text-center px-2 py-1 border rounded-full'>Anotator</p>
    </div>
    <img className=' w-12 h-12 rounded-full object-cover' src={cat} alt="Profile" />
</div>
  )
}

export default Usercard