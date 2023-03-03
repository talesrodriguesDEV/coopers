import React from 'react'

import doneCircle from '../images/to-do/done-circle.png'

import { IDoneListProps } from '../interfaces'

export default function DoneList({ doneTasks, eraseTasks, eraseTask }: IDoneListProps) {
  return (
    <div className=''>
      <div className=''>
        <div className='' />
        <h2 className=''>Done</h2>
        <p className=''>Congratulations!</p>
        <p className=''>You have done {doneTasks.length} task(s)</p>
      </div>
      <ul className='list'>
        {doneTasks.map((task, index) => (
          <li className='' key={index}>
            <img className='' src={doneCircle} />
            <span className=''>{task}</span>
            <span className='' onClick={() => eraseTask(false, task)}>delete</span>
          </li>
        ))}
      </ul>
      <button className='' onClick={() => eraseTasks(false)}>erase all</button>
    </div>
  )
}
