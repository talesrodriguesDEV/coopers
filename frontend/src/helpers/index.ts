import { API_HOST, API_PORT } from '../utils'

const fetchApiPUT = (token: string, key: string, newToDos: string[]) =>
  fetch(`http://${API_HOST}:${API_PORT}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Authorization': token },
    body: JSON.stringify({ key, newToDos })
  })

export {
  fetchApiPUT
} 
