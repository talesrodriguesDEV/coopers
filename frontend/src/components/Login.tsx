import React, { FormEvent, useContext, useState } from 'react'

import person from '../images/login/person.png'

import { ILoginProps } from '../interfaces'

import { ToDoContext } from '../context'

import { API_HOST, API_PORT, GENERAL_ERROR } from '../utils'

export default function Login({ setCurrentToken }: ILoginProps) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const { setDisplayLogin } = useContext(ToDoContext)

  const closeLogin = () => {
    const app = document.querySelector('#app-container')
    const lists = document.querySelector('#lists-container')

    if (app && lists) {
      app.className = ''
      lists.classList.remove('brightness-[0.3]')
    }

    setDisplayLogin(false)
  }

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    fetch(`http://${API_HOST}:${API_PORT}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: user, password })
    })
      .then(response => response.json())
      .then(({ token }) => {
        localStorage.setItem('token', token)
        setCurrentToken(token)
        closeLogin()
      })
      .catch(() => window.alert(GENERAL_ERROR))
  }

  return (
    <div className='top-20 absolute bg-white w-11/12 left-4 z-30 flex flex-col items-center'>
      <button className='self-end pr-4 pt-4 montserrat font-bold' onClick={closeLogin}>close</button>
      <div className='flex items-center justify-around mx-4 mt-10'>
        <img className='w-2/5' src={person} alt="Person pointing to screen" />
        <div className='flex flex-col'>
          <h1 className='montserrat text-2xl font-bold'>Sign in</h1>
          <p className='text-[#4AC959] montserrat'>to access your list</p>
        </div>
      </div>
      <form className='my-10 flex flex-col items-center' onSubmit={handleLogin}>
        <div className='flex flex-col mb-6'>
          <label className='montserrat font-semibold'>User:</label>
          <input required onChange={({ target }) => setUser(target.value)} className='login-input' />
        </div>
        <div className='flex flex-col mb-6'>
          <label className='montserrat font-semibold'>Password:</label>
          <input required type='password' onChange={({ target }) => setPassword(target.value)} className='login-input' />
        </div>
        <button type="submit" className='bg-[#4AC959] px-12 py-2 text-white montserrat font-semibold'>Sign in</button>
      </form>
    </div>
  )
}
