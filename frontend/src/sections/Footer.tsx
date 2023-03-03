import React from 'react'

import footerbg from '../images/footer/black-bg.png'
import green from '../images/footer/green.png'

export default function Footer() {
  return (
    <footer className='mt-10 h-16'>
      <img className='absolute' src={footerbg} alt="Black big decorative trapezium" />
      <div className='absolute text-xs z-20 text-white w-full mt-3 montserrat bg-black flex flex-col items-center'>
        <h1 className='font-bold'>Need help?</h1>
        <h2 className='font-bold'>coopers@coopers.pro</h2>
        <p>© 2021 Coopers. All rights reserved.</p>
        <img className='w-1/3 overflow-hidden' src={green} alt="Green small decorative trapezium" />
      </div>
    </footer>
  )
}
