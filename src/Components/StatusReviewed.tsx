import React from 'react'
import reviewed from '../assets/reviewedStatus.png'

const StatusReviewed = () => {
  return (
    <>
        <div className=' bg-green-200 w-32 h-8 flex justify-center items-center rounded-3xl border-2 border-green-600'>
            <img src={reviewed} className=' w-5 mr-2'/><span className=' text-green-900'>Reviewed</span>
        </div>
    </>
  )
}

export default StatusReviewed
