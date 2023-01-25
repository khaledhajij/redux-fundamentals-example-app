const initialState = []

let idCounter = -1

const todosReducer = (state = initialState, action) => {
  const calledItemIndex = state?.find(todo => todo?.id === action?.payload)
  switch (action.type) {
    case 'todos/todoAdded':
      return [
        ...state,
        { description: action.payload, status: false, id: ++idCounter }
      ]
    case 'todos/todoToggled':
      return [
        ...state.map(todo =>
          todo?.id === action.payload ? {...todo, status: !todo.status} : todo
        )
      ]
    case 'todos/todoDeleted':
      return [...state].splice(calledItemIndex, 1)

    case 'todos/todoColorChanged':
      return [...state]
    default:
      return state
  }
}

export default todosReducer
