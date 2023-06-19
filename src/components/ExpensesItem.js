// ExpensesItem.js
import React from 'react';
import ExpenseDate from './ExpensesDate';
import ExpenseDetails from './ExpensesDetails';

function ExpensesItem(props) {
  return (
    //message
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
    </div>
  );
}

export default ExpensesItem;
