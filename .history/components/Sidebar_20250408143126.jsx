import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Sidebar = ({expand ,setExpand}) => {
  return (
      <div>
          <div>
              <div>
                  <Image src={expand ? assets.nla_logo_text : assets.nla_text_logo } />
              </div>
          </div>
    </div>
  )
}

export default Sidebar