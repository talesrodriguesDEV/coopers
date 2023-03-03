import React, { useState } from 'react'

import toDoCircle from '../images/to-do/todo-circle.png'

import { IToDoListProps } from '../interfaces'

export default function ToDoList({ toDos, eraseTasks, doTask, addNewToDo, eraseTask }: IToDoListProps) {
  const [newToDo, setNewToDo] = useState('')

  return (
    <div className=''>
      <div className=''>
        <div className='' />
        <h2 className=''>To-do</h2>
        <p className=''>Take a breath.</p>
        <p className=''>Start doing.</p>
      </div>
      <ul className=''>
        {toDos.map((toDo, index) => (
          <li className='' key={index}>
            <img className='' onClick={() => doTask(toDo)} src={toDoCircle} />
            <span className=''>{toDo}</span>
            <span className='' onClick={() => eraseTask(true, toDo)}>delete</span>
          </li>
        ))}
        <li className=''>
          <img className='' src={toDoCircle} />
          <input
            id='new-task-input'
            className=''
            placeholder='Add an item...'
            onChange={({ target }) => setNewToDo(target.value)}
            onKeyUp={(e) => addNewToDo(e, newToDo)}
          />
        </li>
      </ul>
      <button className='' onClick={() => eraseTasks(true)}>erase all</button>
    </div>
  )
}
