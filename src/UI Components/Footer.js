import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { availableColors, capitalize } from '../features/filters/colors'
import { StatusFilters } from '../features/filters/filtersSlice'

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's'

  return (
    <div className='todo-count'>
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  )
}

const StatusFilter = ({ value: status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map(key => {
    const value = StatusFilters[key]
    const handleClick = () => onChange(value)
    const className = value === status ? 'selected' : ''

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    )
  })

  return (
    <div className='filters statusFilters'>
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  )
}

const ColorFilters = ({ value: colors, onChange }) => {
  const renderedColors = availableColors.map(color => {
    const checked = colors.includes(color)
    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      onChange(color, changeType)
    }

    return (
      <label key={color}>
        <input
          type='checkbox'
          name={color}
          checked={checked}
          onChange={handleChange}
        />
        <span
          className='color-block'
          style={{
            backgroundColor: color
          }}
        ></span>
        {capitalize(color)}
      </label>
    )
  })

  return (
    <div className='filters colorFilters'>
      <h5>Filter by Color</h5>
      <form className='colorSelection'>{renderedColors}</form>
    </div>
  )
}

const Footer = () => {
  const dispatch = useDispatch()
  const colors = useSelector(state => state.filters.colors)
  const status = StatusFilters.All
  const todos = useSelector(state => state.todos)
  const todosRemaining = todos.length

  const onColorChange = (color, changeType) => {
    dispatch({
      type: 'filters/colorsChanged',
      payload: { color: color, changeType: changeType }
    })
    console.log('Color change: ', { color, changeType })
  }
  const onStatusChange = e => {
    dispatch({ type: 'filters/statusChanged', payload: e })
  }

  const handleAllCompletion = () => {
    dispatch({ type: 'todos/onMarkCompletedClicked' })
  }

  const onClearCompletedClicked = () => {
    dispatch({ type: 'todos/completedCleared' })
  }

  return (
    <footer className='footer'>
      <div className='actions'>
        <h5>Actions</h5>
        <button className='button' onClick={handleAllCompletion}>
          Mark All Completed
        </button>
        <button className='button' onClick={onClearCompletedClicked}>
          Clear Completed
        </button>
      </div>
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  )
}

export default Footer
