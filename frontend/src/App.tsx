import React, { useContext } from 'react'
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
   const { displayLogin } = useContext(ToDoContext)
   
   return (
      <div id='app-container'>
         {displayLogin && <Login />}
         <Header />
         <Organize />
         <Lists />
         <GoodThings />
         <GetInTouch />
         <Footer />
      </div>
   )
}

export default App
