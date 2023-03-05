import React, { useState } from 'react'

import toDoCircle from '../images/to-do/todo-circle.png'

import { IToDoListProps } from '../interfaces'

export default function ToDoList({ toDos, eraseAllTasks, doTask, addNewToDo, eraseTask }: IToDoListProps) {
  const [newToDo, setNewToDo] = useState('')

  return (
    <div className='list-container'>
      <div className='list-header-container'>
        <div className='list-stripe bg-coopers-orange' />
        <h2 className='list-title'>To-do</h2>
        <p className='list-p'>Take a breath.</p>
        <p className='list-p'>Start doing.</p>
      </div>
      <ul className='list'>
        {toDos.map((toDo, index) => (
          <li className='task' key={index}>
            <span className='flex items-center cursor-pointer'>
              <img className='mr-2 xl:scale-125 xl:mr-6' onClick={() => doTask(toDo)} src={toDoCircle} />
              {toDo}
            </span>
            <span className='delete-button' onClick={() => eraseTask(true, toDo)}>delete</span>
          </li>
        ))}
        <li className='task'>
          <img className='xl:scale-150' src={toDoCircle} />
          <input
            id='new-task-input'
            className='w-4/5 p-1 placeholder:text-coopers-orange md:w-[90%]'
            placeholder='Add an item...'
            onChange={({ target }) => setNewToDo(target.value)}
            onKeyUp={(e) => addNewToDo(e, newToDo)}
          />
        </li>
      </ul>
      <button className='erase-all-button' onClick={() => eraseAllTasks(true)}>erase all</button>
    </div>
  )
}
