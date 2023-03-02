import React, { KeyboardEvent, useState } from 'react'

import todoCircle from '../images/to-do/todo-circle.png'

interface IToDoListProps {
  toDos: string[]
  eraseTasks: (todos: boolean) => void
  doTask: (task: string) => void
  addNewToDo: (e: KeyboardEvent, newToDo: string) => void
}

export default function ToDoList({ toDos, eraseTasks, doTask, addNewToDo }: IToDoListProps) {
  const [newToDo, setNewToDo] = useState('')

  return (
    <div className='list-container'>
      <div className='bg-[#E88D39] py-2 w-full' />
      <h2 className='list-title'>To-do</h2>
      <p className='list-p'>Take a breath.</p>
      <p className='list-p'>Start doing.</p>
      <ul className='list'>
        {toDos.map((todo, index) => (
          <li className='task' key={index} onClick={() => doTask(todo)}>
            <img className='mr-2' src={todoCircle} />
            {todo}
          </li>
        ))}
        <li className='task'>
          <img className='mr-2' src={todoCircle} />
          <input id='new-task-input' className='w-3/4 px-1 placeholder:text-[#e38d3f]' placeholder='Adding an item...' onChange={({ target }) => setNewToDo(target.value)} onKeyUp={(e) => addNewToDo(e, newToDo)} />
        </li>
      </ul>
      <button className='erase-tasks' onClick={() => eraseTasks(true)}>erase all</button>
    </div>
  )
}
