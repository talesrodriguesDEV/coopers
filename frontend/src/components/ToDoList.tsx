import React, { useState } from 'react'

import toDoCircle from '../images/to-do/todo-circle.png'

import { IToDoListProps } from '../interfaces'

export default function ToDoList({ toDos, eraseTasks, doTask, addNewToDo, eraseTask }: IToDoListProps) {
  const [newToDo, setNewToDo] = useState('')

  return (
    <div className='list-container justify-between'>
      <div className='w-full flex flex-col items-center'>
        <div className='bg-[#E88D39] py-2 w-full' />
        <h2 className='list-title'>To-do</h2>
        <p className='list-p'>Take a breath.</p>
        <p className='list-p'>Start doing.</p>
      </div>
      <ul className='list'>
        {toDos.map((toDo, index) => (
          <li className='task' key={index}>
            <img className='mr-2' onClick={() => doTask(toDo)} src={toDoCircle} />
            <span className='w-3/5'>{toDo}</span>
            <span className='delete-task' onClick={() => eraseTask(true, toDo)}>delete</span>
          </li>
        ))}
        <li className='task'>
          <img className='' src={toDoCircle} />
          <input
            id='new-task-input'
            className='w-[78%] placeholder:text-[#e38d3f] focus:border-[#e38d3f]'
            placeholder='Add an item...'
            onChange={({ target }) => setNewToDo(target.value)}
            onKeyUp={(e) => addNewToDo(e, newToDo)}
          />
        </li>
      </ul>
      <button className='erase-tasks' onClick={() => eraseTasks(true)}>erase all</button>
    </div>
  )
}
