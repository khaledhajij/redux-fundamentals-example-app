import React from 'react'
import { ReactComponent as TimesSolid } from './TimeSolid.svg'
import { availableColors, capitalize } from '../features/filters/colors'
import { useDispatch } from 'react-redux'

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch()
  const {description, status, color } = todo

  const handleCompletedChanged = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id })
  }

  const handleColorChanged = e => {
    dispatch({
      type: 'todos/todoColorChanged',
      payload: { color: e.target.value, id: todo.id }
    })
  }

  const handleDelete = () => {
    dispatch({ type: 'todos/todoDeleted', payload: todo.id })
  }

  const colorOptions = availableColors.map(c => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div className='view'>
        <div className='segment label'>
          <input
            className='toggle'
            type='checkbox'
            checked={status === 'completed'}
            onChange={handleCompletedChanged}
          />
          <div className='todo-text'>{description}</div>
        </div>
        <div className='segment buttons'>
          <select
            className='colorPicker'
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=''></option>
            {colorOptions}
          </select>
          <button className='destroy' onClick={handleDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
