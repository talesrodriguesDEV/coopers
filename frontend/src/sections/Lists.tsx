import React, { useContext, useEffect, useState, KeyboardEvent, InputHTMLAttributes } from 'react'

import stripe from '../images/to-do/black-stripe.png'
import bigTriangle from '../images/to-do/big-triangle.png'
import smallTriangle from '../images/to-do/small-triangle.png'

import { ToDoContext } from '../context'
import ToDoList from '../components/ToDoList'
import DoneList from '../components/DoneList'

interface IUser {
  email: string,
  password: string,
  todos: string[],
  doneTasks: string[]
}

export default function ToDoListSection() {
  const { setToDos, setDoneTasks, toDos, doneTasks } = useContext(ToDoContext)

  const [currentToken, setCurrentToken] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setCurrentToken(token)

      fetch('http://localhost:3001/', { headers: { 'Authorization': token } })
        .then(response => response.json())
        .then((json: IUser) => {
          setToDos(json.todos)
          setDoneTasks(json.doneTasks)
        })
    }
  }, [])

  const eraseTasks = (todos: boolean) => {
    const key = todos ? 'todos' : 'doneTasks'

    fetch('http://localhost:3001/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': currentToken },
      body: JSON.stringify({ key, newTodos: [] })
    })
      .then(response => {
        console.log(response)
        todos ? setToDos([]) : setDoneTasks([])
      })
      .catch(() => window.alert('Something went wrong.'))
  }

  const doTask = (task: string) => {
    const newTodos = toDos.filter(todo => todo !== task)
    const newDoneTasks = [...doneTasks, task]

    fetch('http://localhost:3001/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': currentToken },
      body: JSON.stringify({ key: 'todos', newTodos })
    })
      .then(() => setToDos(newTodos))
      .catch(() => window.alert('Something went wrong.'))

    fetch('http://localhost:3001/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': currentToken },
      body: JSON.stringify({ key: 'doneTasks', newTodos: newDoneTasks })
    })
      .then(() => setDoneTasks(newDoneTasks))
      .catch(() => window.alert('Something went wrong.'))
  }

  const addNewToDo = (e: KeyboardEvent, newToDo: string) => {
    if (e.key === 'Enter') {
      const newTodos = [...toDos, newToDo]

      fetch('http://localhost:3001/', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': currentToken },
        body: JSON.stringify({ key: 'todos', newTodos })
      })
        .then(() => {
          setToDos(newTodos)
          const input: HTMLInputElement | null = document.querySelector('#new-task-input')
          if (input) input.value = ''
        })
        .catch(() => window.alert('Something went wrong.'))
    }
  }

  return (
    <section className='mt-4'>
      <img src={stripe} alt="Background Decoration" />
      <div className='-mt-[5.5rem] z-10 text-white text-center'>
        <h1 className='poppins font-semibold underline-offset-4 green-underline'>To-do List</h1>
        <p className='text-xs montserrat mx-14'>Drag and drop to set your  priorities, check when done and create what&#39;s new.</p>
      </div>
      <img className='-left-10 absolute mt-40' src={bigTriangle} alt="Big Triangle - Decoration" />
      <img className='-left-7 absolute mt-[14.2rem]' src={smallTriangle} alt="Small Triangle Decoration" />
      <div className='flex justify-evenly'>
        <ToDoList toDos={toDos} eraseTasks={eraseTasks} doTask={doTask} addNewToDo={addNewToDo} />
        <DoneList doneTasks={doneTasks} eraseTasks={eraseTasks} />
      </div>
    </section>
  )
}