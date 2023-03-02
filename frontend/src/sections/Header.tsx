import React, { useContext, useEffect, useState } from 'react'

import logo from '../images/top/coopers.png'
import v from '../images/top/big-v.png'
import { ToDoContext } from '../context'

interface IHeaderProps {
  displayLoginForm: () => void
  setCurrentToken: (token: string) => void
}

export default function Header({ displayLoginForm, setCurrentToken }: IHeaderProps) {
  const { setToDos, setDoneTasks } = useContext(ToDoContext)

  const [displayExitButton, setDisplayExitButton] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) setDisplayExitButton(true)
  }, [])

  const logout = () => {
    setDisplayExitButton(false)
    setToDos([])
    setDoneTasks([])
    setCurrentToken('')
    localStorage.removeItem('token')
  }

  return (
    <header className='flex justify-between items-center px-10 py-6'>
      <img className='w-1/3' src={logo} alt="Coopers' logo" />
      {displayExitButton ? (
        <button className='bg-black text-white py-1 px-4 z-10 poppins' onClick={logout}>logout</button>
      ) : (
        <button className='bg-black text-white py-1 px-4 z-10 poppins' onClick={displayLoginForm}>login</button>
      )}
      <img className='w-1/2 absolute top-14 right-0 z-0' src={v} alt="Background Decoration" />
    </header>
  )
}
