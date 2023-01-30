import {client} from '../api/client'

export const delayTodoAdd = store => next => action => {
  if (action.type === 'todos/todoAdded') {
    console.log(action.type)
    setTimeout(() => {
        next(action)
    }, 1000)
    return
  }
  else {
    return next(action)
  }
}

export const fetchTodosMiddleware = storeAPI => next => action => {
    if (action.type === 'todos/fetchTodos') {
      // Make an API call to fetch todos from the server
      client.get('todos').then(todos => {
        // Dispatch an action with the todos we received
        storeAPI.dispatch({ type: 'todos/todosLoaded', payload: todos })
      })
    }
    return next(action)
  }