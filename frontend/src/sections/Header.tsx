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
    <header className=''>
      <img className='' src={logo} alt="Coopers' logo" />
      {displayExitButton ? (
        <button className='' onClick={logout}>logout</button>
      ) : (
        <button className='' onClick={displayLoginForm}>login</button>
      )}
    </header>
  )
}
