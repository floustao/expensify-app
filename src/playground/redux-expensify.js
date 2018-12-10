import { createStore, combineReducers } from 'redux';

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
    sortBy: 'amount' // date or amount,
    startDate: undefined,
    endDate: undefined
  }
};