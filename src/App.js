import React, { useState } from 'react';
import './App.css';
import ExpensesItem from './components/ExpensesItem';

function App() {
  const expenses = [
    {
      id: 1,
      date: '28th March 2021',
      description: 'Car Insurance',
      price: '$295.6',
      location: 'Grocery Store'
    },
    // Add more expense objects here if needed
  ];

  const [expenseList, setExpenseList] = useState(expenses);

  const handleDeleteExpense = (expenseId) => {
    setExpenseList((prevExpenseList) =>
      prevExpenseList.filter((expense) => expense.id !== expenseId)
    );
  };

  const renderedExpenses = expenseList.map((expense) => (
    <ExpensesItem
      key={expense.id}
      id={expense.id}
      date={expense.date}
      description={expense.description}
      price={expense.price}
      location={expense.location}
      onDeleteExpense={handleDeleteExpense}
    />
  ));

  return (
    <div className="App">
      <div>Lets Get Started</div>
      {renderedExpenses}
    </div>
  );
}

export default App;
