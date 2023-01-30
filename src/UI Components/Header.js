import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    if (e.which === 13 && trimmedText) {
      dispatch({ type: 'todos/todoAdded', payload: e.target.value })
      setText('')
    }
  }
  return (
    <header className='header'>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => handleKeyDown(e)}
      />
    </header>
  )
}

export default Header
