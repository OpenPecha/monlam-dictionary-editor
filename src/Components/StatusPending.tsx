import React from 'react'
const StatusPending = () => {
  return (
    <div className='flex w-28 font-inter items-center font-semibold space-x-2 justify-center text-xs bg-secondary-100 text-secondary-700 px-4 py-1.5 rounded-full'>
      <div className='flex-shrink-0 rounded-full w-3 h-3 border-2 border-secondary-300 bg-secondary-600'/>
      <p>Pending</p>
    </div>
  )
}

export default StatusPending