import React, { useState } from 'react'

interface ChildProps {
    options: string[];
    setSelect: React.Dispatch<React.SetStateAction<string>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown: React.FC<ChildProps> = ( {options, setSelect, setOpen} ) => {
  return (
    <div className=' absolute mt-2 border rounded-md w-56 overflow-y-auto h-32 bg-white'>
        {options.map((item,index) => (
            <div className=' hover:bg-slate-200 p-2 h-8 cursor-pointer' onClick={() => {setSelect(item); setOpen((pre) => !pre)}}>{item}</div>
        ))}
    </div>
  )
}

export default DropDown
