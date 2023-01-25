import React from 'react'
import store from './store'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
      </section>
    </div>
  )
}
store.dispatch({
  type: 'todos/todoAdded'
})
store.dispatch({
  type: 'todos/todoToggled',
  payload: 0
})
console.log(store.getState())
export default App
