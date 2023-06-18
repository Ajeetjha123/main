import React from 'react';
import './ExpensesItem.css';

function ExpensesItem(props) {
  const { date, description, price, location } = props;

  return (
    <div className="expense-item">
      <div>{date}</div>
      <div className="expense-item-description">
        <h2>{description}</h2>
        <div className="expense-item-price">{price}</div>
      </div>
      <div>Location: {location}</div>
    </div>
  );
}

export default ExpensesItem;
