import React, { useContext, useEffect, useState } from 'react'

import coopers from '../images/header/coopers.png'
import room from '../images/header/room.png'
import logo from '../images/header/big-v.png'

import { IHeaderProps } from '../interfaces'

import { ToDoContext } from '../context'

export default function Header({ displayLoginForm, currentToken, setCurrentToken, toDoListsRef }: IHeaderProps) {
  const [displayExitButton, setDisplayExitButton] = useState(false)

  const { setToDos, setDoneTasks } = useContext(ToDoContext)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setDisplayExitButton(true)
  }, [currentToken])

  const logout = () => {
    setDisplayExitButton(false)
    setToDos([])
    setDoneTasks([])
    setCurrentToken('')
    localStorage.removeItem('token')
  }

  const goToDoLists = () => toDoListsRef.current?.scrollIntoView()

  return (
    <header>
      <div className='flex justify-between items-center p-6'>
        <img className='w-1/3' src={coopers} alt="Coopers' logo" />
        {displayExitButton ? (
          <button className='bg-black text-white poppins py-1 px-4' onClick={logout}>logout</button>
        ) : (
          <button className='bg-black text-white poppins py-1 px-4' onClick={displayLoginForm}>login</button>
        )}
      </div>
      <div className='absolute montserrat h-[250px] w-1/2 flex flex-col justify-around mx-6'>
        <div>
          <h1 className='text-2xl font-bold leading-none'>Organize</h1>
          <h2 className='text-lg text-coopers-green leading-none'>your daily jobs</h2>
        </div>
        <p className='font-semibold'>The only way to <br /> get things done</p>
        <button onClick={goToDoLists} className='font-semibold w-fit text-white bg-coopers-green py-2 px-4 rounded'>
          Go to To-do list
        </button>
      </div>
      <div className='h-[250px] flex items-center'>
        <img className='absolute w-1/2 right-0' src={logo} alt="Background Coopers' logo" />
        <img className='absolute w-2/5 right-4' src={room} alt="Cozy room" />
      </div>
    </header>
  )
}
