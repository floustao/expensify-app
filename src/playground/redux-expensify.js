import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import EditExpensePage from '../components/EditExpensePage';

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilters = (filter = '') => ({
  type: 'SET_TEXT_FILTERS',
  filter
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  value: 'amount'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  value: 'date'
});

const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter( ({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return  {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    // case 'SET_TEXT_FILTERS':
    //   return state.filter(expense => expense.description === action.filter);
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
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

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
    const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense());
const expenseTwo = store.dispatch(addExpense({ description: 'rent', amount: 150000, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'soccer', amount: 1000, createdAt: 2000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500000 }));
// store.dispatch(setTextFilters('rent'));
// store.dispatch(setTextFilters('soccer'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250))

const demoState = {
  expenses: [{
    id: 'uewhhfwef',
    description: 'january rent',
    note: 'final payment',
    amount: 150000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};