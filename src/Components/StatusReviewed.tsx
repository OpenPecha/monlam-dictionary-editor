import React from 'react'
const StatusReviewed = () => {
  return (
    <div className='flex w-28 items-center font-semibold space-x-4 justify-between text-xs bg-success-200 text-success-700 px-4 py-1 rounded-full'>
      <div className=' rounded-full w-4 h-4 border-4 border-success-300 bg-success-600'/>
      <p className=' mt-1'>Reviewed</p>
    </div>
  )
}

export default StatusReviewed
