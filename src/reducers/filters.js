const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTERS':
      return {
        ...state,
        text: action.filter
      }
      case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy: action.value
        }
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: action.value
        }
      case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.date
        }
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.date
        }
    default:
      return state;
  }
};