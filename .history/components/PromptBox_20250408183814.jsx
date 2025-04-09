import Image from 'next/image'
import React from 'react'

const PromptBox = () => {
  return (
      <form className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
          <textarea
              className='outline-none w-full bg-transparentresize-none overflow-hidden break-words bg-transparent'
              rows={2}
              placeholder='Message Neurovision'
              required
          />
          <div>
            <div>
                  <p className='flex items-center    gap-2 text-xs border    border-gray-300/40 px-2 py-1    rounded-full cursor-pointer    hover:bg-gray-500/20 transition'>
                      <Image src={assets.nla_text_logo_2} />
                      360 Angle Reason  (G7)
                  </p>
                    <p className='flex items-center    gap-2 text-xs border    border-gray-300/40 px-2 py-1    rounded-full cursor-pointer    hover:bg-gray-500/20 transition'>
                      <Image src={assets.nla_text_logo_2} />
                      ReSearch (G7)
                </p>
            </div>
          </div>
    </form>
  )
}

export default PromptBox