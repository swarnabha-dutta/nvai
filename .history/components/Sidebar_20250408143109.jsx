import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Sidebar = ({expand ,setExpand}) => {
  return (
      <div>
          <div>
              <div>
                  <Image src={expand ? assets.nla_logo_icon : assets.nla_text_logo_2 } />
              </div>
          </div>
    </div>
  )
}

export default Sidebar