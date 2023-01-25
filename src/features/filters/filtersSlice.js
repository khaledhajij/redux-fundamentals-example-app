export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed'
}

const initialState = {
  status: 'all',
  colors: []
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filters/statusChanged':
      return {
        ...state,
        status: action.payload
      }
    case 'filters/colorsChanged':
      switch (action.payload.changeType) {
        case 'added':
          if (state.colors.includes(action.payload.color)) {
            return state
          } else {
            return {
              ...state,
              colors: [...state.filters.colors, action.payload.color]
            }
          }
        case 'removed':
          const removedColorIndex = state.colors.indexOf(action.payload.color)
          return {
            ...state,
            colors: [...state.filters.colors].splice(removedColorIndex, 1)
          }
        // eslint-disable-next-line no-fallthrough
        default:
          return state
      }
    default:
      return state
  }
}

export default filtersReducer
