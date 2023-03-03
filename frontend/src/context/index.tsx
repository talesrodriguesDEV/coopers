import React, { createContext, useState } from 'react'

import { IContextValueType, IToDoProviderProps } from '../interfaces'

export const ToDoContext = createContext<IContextValueType>({} as IContextValueType)

export function ToDoProvider({ children }: IToDoProviderProps) {
  const [displayLogin, setDisplayLogin] = useState(false)
  const [toDos, setToDos] = useState<string[]>([])
  const [doneTasks, setDoneTasks] = useState<string[]>([])

  const value = {
    displayLogin,
    setDisplayLogin,
    toDos,
    setToDos,
    doneTasks,
    setDoneTasks
  }

  return (
    <ToDoContext.Provider value={value}>
      {children}
    </ToDoContext.Provider>
  )
}
