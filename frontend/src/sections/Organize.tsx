import React from 'react'

import room from '../images/top/room.png'
import logo from '../images/top/big-v.png'

import { IOrganizeProps } from '../interfaces'

export default function Organize({ toDoListsRef }: IOrganizeProps) {
  const goToDoLists = () => toDoListsRef.current?.scrollIntoView()

  return (
    <section className='flex justify-around mt-10'>
      <div className='z-10 flex flex-col justify-around items-start'>
        <h1>
          <span className='montserrat font-bold text-4xl leading-none'>Organize</span>
          <br />
          <span className='text-[#4AC959] montserrat text-2xl leading-none'>your daily jobs</span>
        </h1>
        <h2 className='text-xs font-medium'>The only way to get things done</h2>
        <button onClick={goToDoLists} className='bg-[#4AC959] rounded-md text-white py-1 px-3'>
          <span className='font-semibold'>Go to To-do list</span>
        </button>
      </div>
      <img className='w-1/2 absolute top-24 right-0 z-0' src={logo} alt="Background Coopers' logo" />
      <img className='w-2/5 z-10' src={room} alt="Cozy room" />
    </section>
  )
}
