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
    <div className=''>
      <button className='' onClick={closeLogin}>close</button>
      <div className=''>
        <img className='' src={person} alt="Person pointing to screen" />
        <div className=''>
          <h1 className=''>Sign in</h1>
          <p className=''>to access your list</p>
        </div>
      </div>
      <form className='' onSubmit={handleLogin}>
        <div className=''>
          <label className='montserrat font-semibold'>User:</label>
          <input required onChange={({ target }) => setUser(target.value)} className='' />
        </div>
        <div className=''>
          <label className='montserrat font-semibold'>Password:</label>
          <input required type='password' onChange={({ target }) => setPassword(target.value)} className='' />
        </div>
        <button type="submit" className=''>Sign in</button>
      </form>
    </div>
  )
}
