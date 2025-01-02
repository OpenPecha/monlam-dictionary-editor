import React from 'react'
import StatusPending from './StatusPending';
import StatusReviewed from './StatusReviewed';

const dummyList = [
    {
      id: 1,
      itemName: "ཀ་བ་",
      states:"pending"
    },
    {
        id: 2,
        itemName: "ཀྱོག་ཀྱང་",
        states:"reviewed"
      },
      {
        id: 3,
        itemName: "ཀུན་སློང་",
        states:"pending"
      },
  ];
const Itemlist = () => {
  return (
    <div className=' mt-4 h-80 bg-secondary-700 overflow-y-scroll rounded-md '>
      <div className=' space-y-2 '>
      {[...dummyList,...dummyList,...dummyList,...dummyList].map((data) => (
        <div key={data.id} className=' border-b border-secondary-500 p-2' >
          <div className='flex items-center justify-between'>{data.itemName}
            {data.states=="pending"?<StatusPending/>:<StatusReviewed/>}
          </div>
        </div>
      ))}
      </div>
        
    </div>
  )
}

export default Itemlist