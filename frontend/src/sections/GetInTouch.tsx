import React, { FormEvent } from 'react'

import mail from '../images/form/mail.png'
import getintouch from '../images/form/get-in-touch.png'
import tatiana from '../images/form/tatiana.png'

export default function GetInTouch() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => input.value = '')

    const texarea = document.querySelector('textarea')
    if (texarea) texarea.value = ''

    window.alert('Thanks for your contact! We\'ll respond to you soon.')
  }

  return (
    <section className='flex flex-col items-center mb-10'>
      <div className='w-full flex justify-center items-center relative top-24'>
        <div className='bg-coopers-green px-4 -ml-4 py-2' />
        <img className='rounded-full' src={tatiana} alt="Tatiana" />
      </div>
      <form onSubmit={handleSubmit} className='w-11/12 flex flex-col items-center shadow-[0_8px_16px_0_rgba(6,21,43,0.08)] pt-24 pb-10'>
        <div className='flex items-center w-full'>
          <div className='bg-coopers-green aspect-square m-4'>
            <img className='p-2' src={mail} alt="Mail draw" />
          </div>
          <img className='' src={getintouch} alt="Get in touch" />
        </div>
        <div className='w-full px-4 flex flex-col'>
          <label className='mb-1'>Your name</label>
          <input className='border border-coopers-black p-2 rounded-sm' placeholder='Type your name here' />
        </div>
        <div className='w-full px-4 flex justify-between my-2'>
          <div className='w-[45%]'>
            <label className='mb-1'>Email*</label>
            <input className='border border-coopers-black p-2 rounded-sm w-full' type="email" required placeholder='example@example.com' />
          </div>
          <div className='w-[45%]'>
            <label className='mb-1'>Telephone*</label>
            <input className='border border-coopers-black p-2 rounded-sm w-full' required placeholder='( ) _____-____' />
          </div>
        </div>
        <div className='w-full px-4 flex flex-col'>
          <label className='mb-1'>Message*</label>
          <textarea className='border border-coopers-black p-2 rounded-sm' required placeholder='Type what you want to say to us' />
        </div>
        <button className='bg-coopers-green text-white self-stretch mx-4 mt-5 py-1 rounded-sm' type='submit'>SEND NOW</button>
      </form>
    </section>
  )
}
