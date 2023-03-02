import React, { useContext, useState } from 'react'
import { ToDoContext } from '../context'

import person from '../images/login/person.png'

export default function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const { setDisplayLogin } = useContext(ToDoContext)

  const closeLogin = () => {
    const app = document.querySelector('#app-container')
    if (app) app.className = ''
    setDisplayLogin(false)
  }

  const handleLogin = () => {
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user, password })
    })
      .then(response => response.json())
      .then(({ token }) => {
        localStorage.setItem('token', token)
        closeLogin()
      })
      .catch(() => window.alert('Something went wrong.'))
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
          <input onChange={({ target }) => setUser(target.value)} className='border border-[#959595] rounded-[0.2rem]' />
        </div>
        <div className='flex flex-col mb-6'>
          <label className='montserrat font-semibold'>Password:</label>
          <input onChange={({ target }) => setPassword(target.value)} className='border border-[#959595] rounded-[0.2rem]' />
        </div>
        <button type="submit" className='bg-[#4AC959] px-12 py-2 text-white montserrat font-semibold'>Sign in</button>
      </form>
    </div>
  )
}
