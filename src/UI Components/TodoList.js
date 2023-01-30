import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'
import store from '../store'

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
  console.log(todosFilByStatus)
  const todos = colors.length
    ? todosFilByStatus.filter(todo => colors.includes(todo?.color))
    : todosFilByStatus

  const renderedListItems = todos.map(todo => {
    return <TodoListItem key={todo?.id} todo={todo} />
  })

  return <ul className='todo-list'>{renderedListItems}</ul>
}

export default TodoList
