import React from 'react'
import { StatusFilters } from './features/filters/filtersSlice'
import store from './store'
import Footer from './UI Components/Footer'
import Header from './UI Components/Header'
import TodoList from './UI Components/TodoList'

function App () {
  return (
    <div className='App'>
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className='navContent'>
            <div className='navLinks'></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
      </section>
      <main>
        <section className='medium-container'>
          <h2>Todos</h2>
          <div className='todoapp'>
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
}
const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)
store.dispatch({
  type: 'todos/todoAdded',
  payload: 'Study redux'
})
store.dispatch({
  type: 'todos/todoAdded',
  payload: 'Study redux 2'
})
store.dispatch({
  type: 'todos/todoToggled',
  payload: 0
})
store.dispatch({
  type: 'filters/statusChanged',
  payload: StatusFilters.Active
})
unsubscribe()
store.dispatch({
  type: 'filters/colorsChanged',
  payload: { color: 'red', changeType: 'added' }
})
store.dispatch({
  type: 'filters/colorsChanged',
  payload: { color: 'red', changeType: 'added' }
})
store.dispatch({
  type: 'filters/colorsChanged',
  payload: { color: 'purple', changeType: 'removed' }
})
store.dispatch({
  type: 'filters/colorsChanged',
  payload: { color: 'purple', changeType: 'removed' }
})
console.log(store.getState())
export default App
