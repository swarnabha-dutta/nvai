import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Sidebar = ({expand ,setExpand}) => {
  return (
      <div className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${expand ? 'p-4 w-64' : 'md:w-20 w-0 max-md:overflow-hidden'}`}>
          <div>
              <div>
                  <Image src={expand ? assets.nla_logo_text : assets.nla_logo_icon} />
                  
                  <div>
                      <Image src={assets.menu_icon} alt="" className='md:hidden' />
                      <Image src={expand ? assets.sidebar_close_icon : assets.sidebar_icon} alt="" className='hidden md:block w-7 ' />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Sidebar