import React, { createContext, ReactNode, useState } from 'react'

export interface IContextValueType {
  displayLogin: boolean
  setDisplayLogin: (display: boolean) => void
  toDos: string[]
  setToDos: (toDos: string[]) => void
  doneTasks: string[]
  setDoneTasks: (doneTasks: string[]) => void
}

export const ToDoContext = createContext<IContextValueType>({} as IContextValueType)

interface IToDoProviderProps {
  children: ReactNode
}

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