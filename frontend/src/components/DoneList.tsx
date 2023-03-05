import React from 'react'

import doneCircle from '../images/to-do/done-circle.png'

import { IDoneListProps } from '../interfaces'

export default function DoneList({ doneTasks, eraseAllTasks, eraseTask }: IDoneListProps) {
  return (
    <div className='list-container'>
      <div className='list-header-container'>
        <div className='list-stripe bg-coopers-green' />
        <h2 className='list-title'>Done</h2>
        <p className='list-p'>Congratulations!</p>
        <p className='list-p font-bold'>You have done {doneTasks.length} task(s)</p>
      </div>
      <ul className='list'>
        {doneTasks.map((task, index) => (
          <li className='task' key={index}>
            <span className='flex items-center'>
              <img className='mr-2 xl:scale-125 xl:mr-6' src={doneCircle} />
              {task}
            </span>
            <span className='delete-button' onClick={() => eraseTask(false, task)}>delete</span>
          </li>
        ))}
      </ul>
      <button className='erase-all-button' onClick={() => eraseAllTasks(false)}>erase all</button>
    </div>
  )
}
