import { compose, createStore } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  includeMeaningOfLife,
  myCustomEnhancer,
  sayHiOnDispatch
} from './exampleAddons/enhancers'

const composedEnhancer = compose(composeWithDevTools())
const store = createStore(reducer, composedEnhancer)

export default store
