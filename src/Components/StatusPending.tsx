import React from 'react'
const StatusPending = () => {
  return (
    <div className='flex items-center w-28 font-semibold space-x-4 justify-between text-xs bg-secondary-100 text-secondary-900 px-4 py-1 rounded-full'>
      <div className=' rounded-full w-4 h-4 border-4 border-secondary-200 bg-secondary-600'/>
      <p className=' mt-1'>Pending</p>
    </div>
  )
}

export default StatusPending
