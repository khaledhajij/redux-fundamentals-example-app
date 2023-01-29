// Our program has two sections; features & todolist
// Features has two parts also; colors & status

// #region status
const FilterStatus = {
  Active: 'active',
  Completed: 'completed',
  All: 'all'
}
// #endregion

// #region initialState
const initialState = {
  colors: [],
  status: FilterStatus.All
}
// #endregion

// #region filter reducer
const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fitlers/statusChanged':
      return {
        ...state,
        status: action.padyload
      }
    case 'filters/colorFilterChanged':
      switch (action.payload.changeType) {
        case 'added':
          if (state.colors.includes(action.payload.color)) {
            return state
          } else {
            return {
              ...state,
              colors: [...state.colors].push(action.padyload.color)
            }
          }
        case 'removed':
          const removedColor = state.colors.indexOf(action.payload.color)
          return {
            ...state,
            colors: [...state.colors].splice(removedColor)
          }
        default:
          return state
      }
    default:
      return state
  }
}
// #endregion
