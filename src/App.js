import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
  const expense = [
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

  const addExpenseHandler = newExpenseData => {
    
    console.log(newExpenseData);

  }


  return (
    <div>
      <h2>Expenses App</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expense={expense}/>
    </div>
  );
}

export default App;
