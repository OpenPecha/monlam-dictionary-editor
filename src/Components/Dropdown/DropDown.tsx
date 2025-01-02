import React, { useState } from 'react'

interface ChildProps {
    options: string[];
    setSelect: React.Dispatch<React.SetStateAction<string>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown: React.FC<ChildProps> = ( {options, setSelect, setOpen} ) => {
  return (
    <div className='ml-11 mt-2 border rounded-md w-44 overflow-y-auto h-32'>
        {options.map((item,index) => (
            <div className=' hover:bg-slate-200 p-2 h-8 cursor-pointer' onClick={() => {setSelect(item); setOpen((pre) => !pre)}}>{item}</div>
        ))}
    </div>
  )
}

export default DropDown
