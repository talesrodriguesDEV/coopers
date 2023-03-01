import React from 'react'
import './App.css'

import Header from './components/Header'
import Organize from './components/Organize'
import ToDoListSection from './components/ToDoListSection'
import GoodThings from './components/GoodThings'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'

function App() {

	return (
		<>
      <Header />
      <Organize />
      <ToDoListSection />
      <GoodThings />
      <GetInTouch />
      <Footer />
		</>
	)
}

export default App
