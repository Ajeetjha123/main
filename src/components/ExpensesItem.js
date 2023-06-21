
import React from 'react';
import ExpenseDate from './ExpensesDate';
import ExpenseDetails from './ExpensesDetails';

function ExpensesItem(props) {
  const handleDeleteExpense = () => {
    props.onDeleteExpense(props.id);
  };

  return (

    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={handleDeleteExpense}>Delete</button>
    </div>
  );
}

export default ExpensesItem;
