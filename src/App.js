import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INTIAL_EXPENSE_LIST = [
  {
    id: 1,
    title: "Health Insurance",
    amount: 26500.0,
    date: new Date(2022, 7, 5),
  },
  {
    id: 2,
    title: "St. Peter Death Insurance",
    amount: 42000.0,
    date: new Date(2022, 5, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INTIAL_EXPENSE_LIST);

  const addExpenseHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
};

export default App;
