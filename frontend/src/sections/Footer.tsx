import React from 'react'

import footerbg from '../images/footer/black-bg.png'
import green from '../images/footer/green.png'

export default function Footer() {
  return (
    <footer className='mt-10 h-16'>
      <img className='absolute' src={footerbg} alt="Black big trapezium" />
      <div className='absolute text-xs text-white text-center w-full mt-3 montserrat'>
        <h1 className='font-bold'>Need help?</h1>
        <h2 className='font-bold'>coopers@coopers.pro</h2>
        <p>© 2021 Coopers. All rights reserved.</p>
      </div>
      <img className='fixed -bottom-1 left-1/3 w-1/3' src={green} alt="Green Small trapezium" />
    </footer>
  )
}
