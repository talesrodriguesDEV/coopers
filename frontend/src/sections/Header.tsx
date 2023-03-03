import React, { useContext, useEffect, useState } from 'react'

import logo from '../images/top/coopers.png'

import { IHeaderProps } from '../interfaces'

import { ToDoContext } from '../context'

export default function Header({ displayLoginForm, currentToken, setCurrentToken }: IHeaderProps) {
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

  return (
    <header className='flex justify-between items-center px-10 py-6'>
      <img className='w-1/3' src={logo} alt="Coopers' logo" />
      {displayExitButton ? (
        <button className='log-button' onClick={logout}>logout</button>
      ) : (
        <button className='log-button' onClick={displayLoginForm}>login</button>
      )}
    </header>
  )
}
