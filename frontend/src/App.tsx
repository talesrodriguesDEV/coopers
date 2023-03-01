import React, { useContext } from 'react'
import './App.css'

import Header from './components/Header'
import Organize from './components/Organize'
import ToDoListSection from './components/ToDoListSection'
import GoodThings from './components/GoodThings'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'
import Login from './components/Login'
import { ToDoContext } from './context'

function App() {
   const { displayLogin } = useContext(ToDoContext)
   console.log(displayLogin)
   
   return (
      <div id='app-container'>
         {displayLogin && <Login />}
         <Header />
         <Organize />
         <ToDoListSection />
         <GoodThings />
         <GetInTouch />
         <Footer />
      </div>
   )
}

export default App
