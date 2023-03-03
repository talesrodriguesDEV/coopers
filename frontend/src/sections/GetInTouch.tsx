import React, { FormEvent } from 'react'

import square from '../images/form/square.png'
import mail from '../images/form/mail.png'
import getintouch from '../images/form/get-in-touch.png'
import tatiana from '../images/form/tatiana.png'
import smallrect from '../images/form/small-rectangle.png'

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
    <section className='mt-48 mx-8'>
      <form onSubmit={handleSubmit} className='flex flex-col shadow-lg montserrat border text-xs px-4 text-[#06152B]'>
        <img className='border rounded-full absolute -mt-20 w-40 ml-[4.5rem]' src={tatiana} alt="Tatiana" />
        <img className='ml-10 -mt-2 w-20' src={smallrect} alt="Decorative small green rectangle" />
        <div className='mb-6 mt-24 flex items-center'>
          <img className='absolute' src={square} alt="Green Square - Background to Mail" />
          <img className='absolute ml-[0.9rem]' src={mail} alt="Mail draw" />
          <img className='ml-[4.5rem]' src={getintouch} alt="Get in touch" />
        </div>
        <div className='label-input'>
          <label>Your name</label>
          <input className='input' placeholder='Type your name here' />
        </div>
        <div className='flex justify-between'>
          <div className='label-input w-36'>
            <label className='w-min'>Email*</label>
            <input className='input' type="email" required placeholder='example@example.com' />
          </div>
          <div className='label-input w-36'>
            <label className='w-min'>Telephone*</label>
            <input className='input' required placeholder='( ) _____-____' />
          </div>
        </div>
        <div className='label-input'>
          <label>Message*</label>
          <textarea className='input' required placeholder='Type what you want to say to us' />
        </div>
        <button className='bg-[#46BD62] py-2 text-white font-bold mb-6' type='submit'>SEND NOW</button>
      </form>
    </section>
  )
}
