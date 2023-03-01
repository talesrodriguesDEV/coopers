import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ToDoProvider } from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </React.StrictMode>
)
