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
      app.classList.remove('backdrop-brightness-[0.3]') 
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
    <div className='bg-white absolute z-30 mt-6 w-[90%] ml-[5%] lg:w-[70%] lg:ml-[15%] flex flex-col items-center montserrat'>
      <button className='self-end pr-2 pt-2 font-bold' onClick={closeLogin}>close</button>
      <div className='flex justify-evenly items-center'>
        <img className='w-2/5' src={person} alt="Person pointing to screen" />
        <div>
          <h1 className='font-bold text-2xl leading-none'>Sign in</h1>
          <p className='text-coopers-green'>to access your list</p>
        </div>
      </div>
      <form className='flex flex-col items-center w-2/3 my-10' onSubmit={handleLogin}>
        <div className='flex flex-col lg:w-1/2 mb-5'>
          <label className='font-semibold'>User:</label>
          <input required onChange={({ target }) => setUser(target.value)} className='p-1 rounded border border-coopers-gray' />
        </div>
        <div className='flex flex-col lg:w-1/2 mb-10'>
          <label className='font-semibold'>Password:</label>
          <input required type='password' onChange={({ target }) => setPassword(target.value)} className='p-1 rounded border border-coopers-gray' />
        </div>
        <button type="submit" className='bg-coopers-green text-white font-bold w-2/3 lg:w-1/2 py-1'>Sign in</button>
      </form>
    </div>
  )
}
