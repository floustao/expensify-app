export const setTextFilters = (filter = '') => ({
  type: 'SET_TEXT_FILTERS',
  filter
});

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  value: 'amount'
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  value: 'date'
});

export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});