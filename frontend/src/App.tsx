import React, { useContext, useState } from 'react'
import './App.css'

import Header from './sections/Header'
import Organize from './sections/Organize'
import Lists from './sections/Lists'
import GoodThings from './sections/GoodThings'
import GetInTouch from './sections/GetInTouch'
import Footer from './sections/Footer'

import Login from './components/Login'

import { ToDoContext } from './context'

function App() {
   const { displayLogin, setDisplayLogin } = useContext(ToDoContext)

   const [currentToken, setCurrentToken] = useState('')
   
   const displayLoginForm = () => {
      const app = document.querySelector('#app-container')
      if (app) app.className = 'backdrop-brightness-[0.3]'
      setDisplayLogin(true)
    }

   return (
      <div id='app-container'>
         {displayLogin && <Login />}
         <Header displayLoginForm={displayLoginForm} setCurrentToken={setCurrentToken} />
         <Organize />
         <Lists displayLoginForm={displayLoginForm} currentToken={currentToken} setCurrentToken={setCurrentToken} />
         <GoodThings />
         <GetInTouch />
         <Footer />
      </div>
   )
}

export default App
