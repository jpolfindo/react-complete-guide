import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const cancelExpenseDataHandler = (data) => {
    setShowForm(data);
  };

  const triggerForm = (event) => {
    event.preventDefault();
    setShowForm(true);
  }

  if (showForm === false) {
    return <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8 m-10">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={triggerForm}>Add New Expense</button>
    </div>
  }

  return (
    <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8 m-10">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={cancelExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
