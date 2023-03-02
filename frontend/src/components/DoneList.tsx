import React from 'react'

import doneCircle from '../images/to-do/done-circle.png'

interface IDoneListProps {
  doneTasks: string[]
  eraseTasks: (todos: boolean) => void
}

export default function DoneList({doneTasks, eraseTasks}: IDoneListProps) {
  return (
    <div className='list-container'>
      <div className='bg-[#4AC959] py-2 w-full' />
      <h2 className='list-title'>Done</h2>
      <p className='list-p'>Congratulations!</p>
      <p className='list-p font-bold'>You have done {doneTasks.length} task(s)</p>
      <ul className='list'>
        {doneTasks.map((task, index) => (
          <li className='task' key={index}>
            <img className='mr-2' src={doneCircle} />
            {task}
          </li>
        ))}
      </ul>
      <button className='erase-tasks' onClick={() => eraseTasks(false)}>erase all</button>
    </div>
  )
}
