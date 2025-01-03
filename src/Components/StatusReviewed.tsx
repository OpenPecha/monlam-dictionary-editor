import React from 'react'
const StatusReviewed = () => {
  return (
    <div className='flex w-28 font-inter items-center font-semibold space-x-2 justify-center text-xs bg-success-200 text-success-700 px-4 py-1.5 rounded-full'>
      <div className='flex-shrink-0 rounded-full w-3 h-3 border-2 border-success-300 bg-success-600'/>
      <p>Reviewed</p>
    </div>
  )
}

export default StatusReviewed