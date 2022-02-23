import React from 'react'
import { useSession,signOut } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div>
        <div className='flex items-center justify-between mt-14 ml-10 '>
            <img src={session?.user?.image}
             alt="no"
             className='w-16 h-16 rounded-full border p-[2px]'
             />
            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>{session?.user?.username}</h2>
                <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
            </div>
            <div>
                <button
                onClick={signOut}
                 className='font-semibold text-sm text-blue-400' >Sign Out</button>
            </div>
        </div>
    </div>
  )
}

export default MiniProfile