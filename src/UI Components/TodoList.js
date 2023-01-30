import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  const colors = useSelector(state => state.filters.colors)
  const status = useSelector(state => state.filters.status)
  const todosFilByStatus = useSelector(state =>
    status === 'all'
      ? state.todos
      : state.todos.filter(todo =>
          status === 'active'
            ? todo.status === 'active'
            : todo.status === 'completed'
        )
  )
  const todos = colors.length
    ? todosFilByStatus.filter(todo => colors.includes(todo?.color))
    : todosFilByStatus

  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <TodoListItem key={todo?.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
