import React from "react";
import { useEffect } from "react";
import { IExpense } from "../App";
import { GetExpenses } from "../services/expenses";
import { useAppDispatch, useAppSelector } from "../store";
import { ListItem } from "./ListItem";

export const ExpensesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const expenses = useAppSelector(
    (state: any) => state.expensesReducer.expenses
  );

  useEffect(() => {
    GetExpenses(dispatch);
  }, []);

  const renderList = (current: IExpense, index: number, arr: IExpense[]) => {
    return (
      <div style={{ marginBottom: "1rem" }}>
        <ListItem key={current.id} expense={current} />
      </div>
    );
  };

  return <div style={{ marginTop: 30 }}>{expenses.map(renderList)}</div>;
};
