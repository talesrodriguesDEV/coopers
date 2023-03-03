import React, { useContext, useEffect, KeyboardEvent } from 'react'

import stripe from '../images/to-do/black-stripe.png'
import bigTriangle from '../images/to-do/big-triangle.png'
import smallTriangle from '../images/to-do/small-triangle.png'

import { IListsSectionProps, IUser } from '../interfaces'

import { ToDoContext } from '../context'

import ToDoList from '../components/ToDoList'
import DoneList from '../components/DoneList'

import { fetchApiPUT } from '../helpers'
import { API_HOST, API_PORT, FULL_LIST_ERROR, GENERAL_ERROR } from '../utils'

export default function ListsSection({ displayLoginForm, currentToken, setCurrentToken, toDoListsRef }: IListsSectionProps) {
  const { setToDos, setDoneTasks, toDos, doneTasks } = useContext(ToDoContext)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setCurrentToken(token)

      fetch(`http://${API_HOST}:${API_PORT}/`, { headers: { 'Authorization': token } })
        .then(response => response.json())
        .then((json: IUser) => {
          setToDos(json.toDos)
          setDoneTasks(json.doneTasks)
        })
        .catch(() => window.alert(GENERAL_ERROR))
    }
  }, [currentToken])

  const eraseTasks = (areToDos: boolean) => {
    if (currentToken) {
      const key = areToDos ? 'toDos' : 'doneTasks'

      fetchApiPUT(currentToken, key, [])
        .then(() => areToDos ? setToDos([]) : setDoneTasks([]))
        .catch(() => window.alert(GENERAL_ERROR))
    }
  }

  const eraseTask = (areToDos: boolean, task: string) => {
    if (currentToken) {
      let key
      let newToDos: string[]

      if (areToDos) {
        key = 'toDos'
        newToDos = toDos.filter(toDo => toDo !== task)
      } else {
        key = 'doneTasks'
        newToDos = doneTasks.filter(doneTask => doneTask !== task)
      }

      fetchApiPUT(currentToken, key, newToDos)
        .then(() => areToDos ? setToDos(newToDos) : setDoneTasks(newToDos))
        .catch(() => window.alert(GENERAL_ERROR))
    }
  }

  const doTask = (task: string) => {
    if (doneTasks.length > 4) {
      window.alert(FULL_LIST_ERROR)
      return
    }

    const newToDos = toDos.filter(toDo => toDo !== task)
    const newDoneTasks = [...doneTasks, task]

    fetchApiPUT(currentToken, 'toDos', newToDos)
      .then(() => setToDos(newToDos))
      .catch(() => window.alert(GENERAL_ERROR))

    fetchApiPUT(currentToken, 'doneTasks', newDoneTasks)
      .then(() => setDoneTasks(newDoneTasks))
      .catch(() => window.alert(GENERAL_ERROR))
  }

  const addNewToDo = (e: KeyboardEvent, newToDo: string) => {
    if (toDos.length > 4) window.alert(FULL_LIST_ERROR)
    else if (e.key === 'Enter') {
      const newToDos = [...toDos, newToDo]

      fetchApiPUT(currentToken, 'toDos', newToDos)
        .then(() => {
          setToDos(newToDos)
          const input: HTMLInputElement | null = document.querySelector('#new-task-input')
          if (input) input.value = ''
        })
        .catch(() => window.alert(GENERAL_ERROR))
    }
  }

  const preventUnloggedUser = () => !currentToken && displayLoginForm()

  return (
    <section className='mt-4' id='lists-container' ref={toDoListsRef}>
      <img src={stripe} alt="Background decorative black stripe" />
      <div className='-mt-[5.5rem] z-10 text-white text-center'>
        <h1 className='poppins font-semibold underline-offset-4 green-underline'>To-do List</h1>
        <p className='text-xs montserrat mx-14'>Drag and drop to set your priorities, check when done and create what&#39;s new.</p>
      </div>
      <img className='-left-10 absolute mt-40' src={bigTriangle} alt="Big Green Triangle - Decoration" />
      <img className='-left-7 absolute mt-[14.2rem]' src={smallTriangle} alt="Small Green Triangle - Decoration" />
      <div className='flex justify-evenly' onClick={preventUnloggedUser}>
        <ToDoList toDos={toDos} eraseTasks={eraseTasks} eraseTask={eraseTask} doTask={doTask} addNewToDo={addNewToDo} />
        <DoneList doneTasks={doneTasks} eraseTasks={eraseTasks} eraseTask={eraseTask} />
      </div>
    </section>
  )
}
