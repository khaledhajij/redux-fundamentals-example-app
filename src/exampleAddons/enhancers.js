export const sayHiOnDispatch =
  createStore => (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    function newDispatch (action) {
      const result = store.dispatch(action)
      console.log('Hi!')
      return result
    }

    return { ...store, dispatch: newDispatch }
  }

export const includeMeaningOfLife = createStore => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    function newGetState () {
      return {
        ...store.getState(),
        meaningOfLife: 42
      }
    }

    return { ...store, getState: newGetState }
  }
}

export const myCustomEnhancer =
  createStore => (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    function newDispatch (action) {
      const result = store.dispatch(action)
      console.log("This is the custom enhancer that I've wrote my self")
      return result
    }

    function newState () {
      return {
        ...store.getState(),
        projectOwner: 'Khaled Hajij'
      }
    }

    return { ...store, dispatch: newDispatch, getState: newState }
  }
