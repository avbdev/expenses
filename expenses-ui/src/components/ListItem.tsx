import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { IExpense } from "../App";
import { ExpensesForm } from "./ExpensesForm";

interface IListItem {
  expense: IExpense;
}
export const ListItem: React.FC<IListItem> = ({ expense }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const EditingJSX = (
    <ExpensesForm expense={expense} setIsEditing={setIsEditing} />
  );
  const ReadOnlyJSX = (
    <div>
      <Row>
        <Col>{expense.description}</Col>
        <Col>$ {expense.amount}</Col>
        <Col>
          <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>
            Edit
          </Button>
        </Col>
      </Row>
      <hr />
    </div>
  );

  return isEditing ? EditingJSX : ReadOnlyJSX;
};
