// App.js
import React from 'react';
import './App.css';
import ExpensesItem from './components/ExpensesItem';

function App() {
  const expenses = [
    {
      date: '28th March 2021',
      description: 'Car Insurance',
      price: '$295.6',
      location: 'Grocery Store'
    },
    // Add more expense objects here if needed
  ];

  const renderedExpenses = [];

  for (let i = 0; i < 100; i++) {
    renderedExpenses.push(
      <ExpensesItem
        key={i}
        date={expenses[i % expenses.length].date}
        description={expenses[i % expenses.length].description}
        price={expenses[i % expenses.length].price}
        location={expenses[i % expenses.length].location}
      />
    );
  }

  return (
    <div className="App">
      <div>Lets Get Started</div>
      {renderedExpenses}
    </div>
  );
}

export default App;
