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