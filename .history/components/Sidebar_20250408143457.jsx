import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Sidebar = ({expand ,setExpand}) => {
  return (
      <div>
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