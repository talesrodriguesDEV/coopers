import React from 'react'

import footerbg from '../images/footer/black-bg.png'
import green from '../images/footer/green.png'

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center relative'>
      <div className='absolute text-white w-full flex flex-col items-center'>
        <h1 className='xl:leading-loose xl:text-4xl'>Need help?</h1>
        <h2 className=''>coopers@coopers.pro</h2>
        <p>© 2021 Coopers. All rights reserved.</p>
      </div>
      <img className='w-1/3 absolute bottom-0' src={green} alt="Green small decorative trapezium" />
      <img className='w-full' src={footerbg} alt="Black big decorative trapezium" />
    </footer>
  )
}
