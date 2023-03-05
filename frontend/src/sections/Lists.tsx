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

  const eraseAllTasks = (areToDos: boolean) => {
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

  const goToLogin = () => !currentToken && window.scroll(0, 0)

  return (
    <section onClick={goToLogin} className='mt-8 sm:mt-40 md:mt-60 lg:mt-80 xl:mt-96 2xl:mt-[30rem] h-fit' id='lists-container' ref={toDoListsRef}>
      <div className='flex items-center justify-center'>
        <img className='w-full absolute' src={stripe} alt="Background decorative black stripe" />
        <div className='absolute text-white flex flex-col items-center'>
          <h1 className='poppins text-xl md:text-4xl green-underline mb-2 lg:mb-10 -mt-1.5'>To-do List</h1>
          <p className='montserrat text-center'>Drag and drop to set your priorities, check <br /> when done and create what&#39;s new.</p>
        </div>
      </div>
      <div className='flex justify-evenly mt-32 lg:mt-60 xl:mt-80' onClick={preventUnloggedUser}>
        <ToDoList toDos={toDos} eraseAllTasks={eraseAllTasks} eraseTask={eraseTask} doTask={doTask} addNewToDo={addNewToDo} />
        <DoneList doneTasks={doneTasks} eraseAllTasks={eraseAllTasks} eraseTask={eraseTask} />
      </div>
      <div className='flex items-center h-[300px] relative -top-44'>
        <img className='absolute left-0' src={bigTriangle} alt="Big Green Triangle - Decoration" />
        <img className='absolute left-0 scale-125' src={smallTriangle} alt="Small Green Triangle - Decoration" />
      </div>
    </section>
  )
}
