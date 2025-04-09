import Image from 'next/image'
import React, { useState } from 'react'

const PromptBox = () => {

    const [prompt, setPrompt] = useState('')




  return (
      <form className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
          <textarea
              className='outline-none w-full bg-transparentresize-none overflow-hidden break-words bg-transparent'
              rows={2}
              placeholder='Message Neurovision'
              required
              onChange={(e) => setPrompt(e.target.value)} value={prompt}
          />
          <div className='flex items-center  justify-between text-sm'>
               <div className='flex items-center gap-2'>
                  <p className='flex items-center    gap-2 text-xs border  border-gray-300/40 px-2 py-1  rounded-full cursor-pointer  hover:bg-gray-500/20 transition'>
                      <Image src={assets.nla_text_logo_2} />
                      Critical Think (G7)
                  </p>
                    <p className='flex items-center    gap-2 text-xs border    border-gray-300/40 px-2 py-1    rounded-full cursor-pointer    hover:bg-gray-500/20 transition'>
                      <Image src={assets.nla_text_logo_2} />
                      ReSearch 
                </p>
              </div>
              <div className='flex items-center gap-2'>
                  <Image className='w-4 cursor-pointer' src={assets.pin_icon} alt="" />
                  <button
                        className={`${
                            prompt ? "bg-primary" : "bg-[#71717a]"
                        } rounded-full p-2 cursor-pointer`}
                        >

                  <Image className='w-4 cursor-pointer' src={assets.pin_icon} alt="" />
                      
                  </button>
              </div>
          </div>
    </form>
  )
}

export default PromptBox