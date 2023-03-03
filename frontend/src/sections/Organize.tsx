import React from 'react'

import room from '../images/top/room.png'
import logo from '../images/top/big-v.png'

import { IOrganizeProps } from '../interfaces'

export default function Organize({ toDoListsRef }: IOrganizeProps) {
  const goToDoLists = () => toDoListsRef.current?.scrollIntoView()

  return (
    <section className=''>
      <div className=''>
        <h1>
          <span className=''>Organize</span>
          <br />
          <span className=''>your daily jobs</span>
        </h1>
        <h2 className=''>The only way to get things done</h2>
        <button onClick={goToDoLists} className=''>
          <span className='font-semibold'>Go to To-do list</span>
        </button>
      </div>
      <img className='' src={logo} alt="Background Coopers' logo" />
      <img className='' src={room} alt="Cozy room" />
    </section>
  )
}
