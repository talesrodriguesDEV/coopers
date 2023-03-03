import React from 'react'

import doneCircle from '../images/to-do/done-circle.png'

import { IDoneListProps } from '../interfaces'

export default function DoneList({ doneTasks, eraseTasks, eraseTask }: IDoneListProps) {
  return (
    <div className='list-container justify-between'>
      <div className='w-full flex flex-col items-center'>
        <div className='bg-[#4AC959] py-2 w-full' />
        <h2 className='list-title'>Done</h2>
        <p className='list-p'>Congratulations!</p>
        <p className='list-p font-bold'>You have done {doneTasks.length} task(s)</p>
      </div>
      <ul className='list'>
        {doneTasks.map((task, index) => (
          <li className='task' key={index}>
            <img className='' src={doneCircle} />
            <span className='w-3/5'>{task}</span>
            <span className='delete-task' onClick={() => eraseTask(false, task)}>delete</span>
          </li>
        ))}
      </ul>
      <button className='erase-tasks' onClick={() => eraseTasks(false)}>erase all</button>
    </div>
  )
}
