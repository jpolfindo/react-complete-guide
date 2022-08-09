import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = props => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      />
      <ExpenseItem
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      />
    </Card>
  );
}

export default Expenses;
