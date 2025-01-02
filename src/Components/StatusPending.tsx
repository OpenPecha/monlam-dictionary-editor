import React from 'react'
import pendingStatus from '../assets/pendingStatus.png'

const StatusPending = () => {
  return (
    <>
        <div className=' bg-blue-200 w-32 h-8 flex justify-center items-center rounded-3xl border-2 border-blue-600'>
            <img src={pendingStatus} className=' w-5 mr-2'/>Pending
        </div>
    </>
  )
}

export default StatusPending
