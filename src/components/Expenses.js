import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const yearFilterHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expense.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="container max-w-6xl mx-auto bg-gray-200 rounded-lg shadow border p-8 m-8">
        <ExpensesFilter
          selected={selectedYear}
          onChangeYear={yearFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
