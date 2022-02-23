import React from 'react'

function Story({img,username}) {
 
  return (
    <div >
    <img className='h-14 w-14 border-red-500 rounded-full 
    border-2 p-[1.5px] object-contain cursor-pointer 
    hover:scale-110 transition transform duration-200 ease-out
    ' src={img}  alt="no" />
    <p className='text-xs text-center w-14 truncate'>{username}</p>
  
    </div>
  )
}

export default Story