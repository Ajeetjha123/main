// ExpenseDetails.js
import React from 'react';

function ExpenseDetails(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>{props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
