import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
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
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeYear={yearFilterHandler}
        />

        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
