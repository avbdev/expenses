import React from "react";
import { ExpensesForm } from "./components/ExpensesForm";
import { ExpensesList } from "./components/ExpensesList";

export interface IExpense {
  id?: number;
  description: string;
  amount: number;
}
const NewExpense: React.FC = () => {
  return (
    <div>
      <h3 style={{ marginBottom: 20 }}> New Expense</h3>
      <ExpensesForm />
      <hr />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <NewExpense />
      <h3>Your Expenses</h3>
      <ExpensesList />
    </div>
  );
};

export default App;
