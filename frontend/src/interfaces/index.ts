import { KeyboardEvent, MutableRefObject, ReactNode } from 'react'

export interface IUser {
  name: string,
  password: string,
  toDos: string[],
  doneTasks: string[]
}

export interface IListsSectionProps {
  displayLoginForm: () => void
  currentToken: string
  setCurrentToken: (token: string) => void
  toDoListsRef: MutableRefObject<null | HTMLElement>
}

export interface IToDoListProps {
  toDos: string[]
  eraseAllTasks: (toDos: boolean) => void
  doTask: (task: string) => void
  addNewToDo: (e: KeyboardEvent, newToDo: string) => void
  eraseTask: (toDos: boolean, todo: string) => void
}

export interface IDoneListProps {
  doneTasks: string[]
  eraseAllTasks: (toDos: boolean) => void
  eraseTask: (toDos: boolean, task: string) => void
}

export interface IHeaderProps {
  displayLoginForm: () => void
  currentToken: string
  setCurrentToken: (token: string) => void
  toDoListsRef: MutableRefObject<null | HTMLElement>
}

export interface ILoginProps {
  setCurrentToken: (token: string) => void
}

export interface IToDoProviderProps {
  children: ReactNode
}

export interface IContextValueType {
  displayLogin: boolean
  setDisplayLogin: (display: boolean) => void
  toDos: string[]
  setToDos: (toDos: string[]) => void
  doneTasks: string[]
  setDoneTasks: (doneTasks: string[]) => void
}
