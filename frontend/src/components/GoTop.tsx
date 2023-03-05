import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function GoTop() {
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className='fixed z-40 bottom-10 right-10 bg-coopers-green w-10 h-10 flex justify-center items-center rounded-full cursor-pointer'
    >
      <AiOutlineArrowUp className='text-white text-xl' />
    </div>
  )
}
