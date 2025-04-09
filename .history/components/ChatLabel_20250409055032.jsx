import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const ChatLabel = () => {
  return (
      <div className='flex items-center justify-between p-2 text-white/80 hover:bg-white/10  rounded-lg text-sm group cursor-pointer'>
          <p className='group-hover:max-w-5/6 truncate'>Chat Name Here</p>
          <div className='group relative flex items-center justify-center h-6 w-6 aspect-square hover:bg-black/80 rounded-lg'>

              <Image src={assets.three_dots} alt="" className='w-4' />
              <div>
                  <div>
                      <Image src={assets.pencil_icon} alt="" className='w-4' />
                      <p>Rename</p>
                  </div>
              </div>
          </div>
     </div>
  )
}

export default ChatLabel