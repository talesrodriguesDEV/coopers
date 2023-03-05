import React, { useContext, useRef, useState } from 'react'
import './App.css'

import Header from './sections/Header'
import Lists from './sections/Lists'
import GoodThings from './sections/GoodThings'
import GetInTouch from './sections/GetInTouch'
import Footer from './sections/Footer'

import Login from './components/Login'
import GoTop from './components/GoTop'

import { ToDoContext } from './context'

function App() {
   const { displayLogin, setDisplayLogin } = useContext(ToDoContext)

   const toDoListsRef = useRef(null)

   const [currentToken, setCurrentToken] = useState('')

   const displayLoginForm = () => {
      const app = document.querySelector('#app-container')
      const lists = document.querySelector('#lists-container')

      if (app && lists) {
         app.classList.add('backdrop-brightness-[0.3]')
         lists.classList.add('brightness-[0.3]')
      }

      setDisplayLogin(true)
   }

   return (
      <div id='app-container' className='text-xs md:text-lg xl:text-3xl'>
         {displayLogin && <Login setCurrentToken={setCurrentToken} />}
         <Header
            displayLoginForm={displayLoginForm}
            currentToken={currentToken}
            setCurrentToken={setCurrentToken}
            toDoListsRef={toDoListsRef}
         />
         <Lists
            displayLoginForm={displayLoginForm}
            currentToken={currentToken}
            setCurrentToken={setCurrentToken}
            toDoListsRef={toDoListsRef}
         />
         <GoodThings />
         <GetInTouch />
         <Footer />
         <GoTop />
      </div>
   )
}

export default App
