import { StatusFilters } from '../filters/filtersSlice'

const initialState = []

let idCounter = -1

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/todoAdded':
      return [
        ...state,
        {
          description: action.payload,
          status: 'active',
          id: ++idCounter,
          color: ''
        }
      ]
    case 'todos/todoToggled':
      return [
        ...state.map(todo =>
          todo?.id === action.payload
            ? {
                ...todo,
                status: todo.status === 'active' ? 'completed' : 'active'
              }
            : todo
        )
      ]
    case 'todos/todoDeleted':
      return [...state].filter(todo => todo.id !== action.payload)

    case 'todos/todoColorChanged':
      return [...state].map(todo =>
        todo.id === action.payload.id
          ? { ...todo, color: action.payload.color }
          : todo
      )
    case 'todos/onMarkCompletedClicked':
      return [...state].map(todo => {
        return { ...todo, status: 'completed' }
      })
    case 'todos/completedCleared':
      return [...state].filter(todo => todo.status === 'active')
    default:
      return state
  }
}

export default todosReducer
