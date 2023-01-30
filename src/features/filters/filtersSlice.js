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
      let { color, changeType } = action.payload
      const { colors } = state
      switch (changeType) {
        case 'added':
          if (colors.includes(color)) {
            return state
          } else {
            return {
              ...state,
              colors: [...colors, color]
            }
          }
        case 'removed':
          return {
            ...state,
            colors: [...colors].filter(col => col.color === color )
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
