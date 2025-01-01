import React from 'react'

const Toggle = () => {
  return (
    <div>
      <div className=" ml-2 mt-3 flex items-center justify-center">
        <label className="relative inline-block w-12 h-6 cursor-pointer">
          <input type="checkbox" className="sr-only peer"/>
          <span className="block w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-500"></span>
          <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></span>
        </label>
      </div>
    </div>
  )
}

export default Toggle
