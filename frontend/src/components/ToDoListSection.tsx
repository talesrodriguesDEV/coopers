import React, { useContext, useEffect } from 'react'

import stripe from '../images/to-do/black-stripe.png'
import bigTriangle from '../images/to-do/big-triangle.png'
import smallTriangle from '../images/to-do/small-triangle.png'
import { ToDoContext } from '../context'

interface IUser {
  email: string,
  password: string,
  todos: string[],
  doneTasks: string[]
}

export default function ToDoListSection() {
  const { setToDos, setDoneTasks, toDos, doneTasks } = useContext(ToDoContext)
  
  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      fetch('http://localhost:3001/', { headers: { 'Authorization': token } })
        .then(response => response.json())
        .then((json: IUser) => {
          setToDos(json.todos)
          setDoneTasks(json.doneTasks)
        })
    }
  }, [])

  return (
    <section className='mt-4'>
      <img src={stripe} alt="Background Decoration" />
      <div className='-mt-[5.5rem] z-10 text-white text-center'>
        <h1 className='poppins font-semibold underline-offset-4 green-underline'>To-do List</h1>
        <p className='text-xs montserrat mx-14'>Drag and drop to set your  priorities, check when done and create what&#39;s new.</p>
      </div>
      <img className='-left-10 absolute mt-40' src={bigTriangle} alt="Big Triangle - Decoration" />
      <img className='-left-7 absolute mt-[14.2rem]' src={smallTriangle} alt="Small Triangle Decoration" />
      <div className='flex justify-around'>
        <div className='mt-20 border flex flex-col items-center'>
          <h2 className='poppins font-semibold text-xl'>To-do</h2>
          <p className='leading-tight text-sm montserrat'>Take a breath.</p>
          <p className='leading-tight text-sm montserrat'>Start doing.</p>
          <ul className=''>
            {toDos.map((todo, index) => <li key={index}>{todo}</li>)}
          </ul>
          <button className='bg-black px-8 py-1 text-white montserrat font-semibold rounded-md'>erase all</button>
        </div>
        <div className='mt-20 border flex flex-col items-center'>
          <h2 className='poppins font-semibold text-xl'>Done</h2>
          <p className='leading-tight text-sm montserrat'>Congratulations!</p>
          <p className='leading-tight text-sm montserrat'>You have done 5 tasks</p>
          <ul className=''>
            {doneTasks.map((task, index) => <li key={index}>{task}</li>)}
          </ul>
          <button className='bg-black px-8 py-1 text-white montserrat font-semibold rounded-md'>erase all</button>
        </div>
      </div>
    </section>
  )
}
