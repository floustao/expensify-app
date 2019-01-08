import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => (
  <div>
    <hr/>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
    <hr/>
  </div>
);

export default connect()(ExpenseListItem);