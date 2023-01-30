import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { delayTodoAdd, fetchTodosMiddleware } from './middleware/dealyTodoAdd'
import thunk from 'redux-thunk'

const composedEnhancer = compose(
  applyMiddleware(thunk),
  applyMiddleware(delayTodoAdd),
  applyMiddleware(fetchTodosMiddleware)
)
const store = createStore(reducer, composeWithDevTools(composedEnhancer))

export default store
