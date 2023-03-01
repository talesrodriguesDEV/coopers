import React, { useContext } from 'react'

import logo from '../images/top/coopers.png'
import v from '../images/top/big-v.png'
import { ToDoContext } from '../context'

export default function Header() {
  const { setDisplayLogin } = useContext(ToDoContext)

  const handleLogin = () => {
    const app = document.querySelector('#app-container')
    if (app) app.className = 'backdrop-brightness-[0.3]'
    setDisplayLogin(true)
  }

  return (
    <header className='flex justify-between items-center px-10 py-6'>
      <img className='w-1/3' src={logo} alt="Coopers' logo" />
      <button className='bg-black text-white py-1 px-4 z-10 poppins' onClick={handleLogin}>entrar</button>
      <img className='w-1/2 absolute top-14 right-0 z-0' src={v} alt="Background Decoration" />
    </header>
  )
}
