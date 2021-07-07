import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { IExpense } from "../App";
import { DeleteExpense, NewExpense, UpdateExpense } from "../services/expenses";
import { useAppDispatch } from "../store";

interface IExpenseForm {
  expense?: IExpense;
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ExpensesForm: React.FC<IExpenseForm> = ({
  expense,
  setIsEditing,
}) => {
  // Global Utils
  const dispatch = useAppDispatch();

  // Component State
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>();
  const [isNewExpense, setIsNewExpense] = useState<boolean>(true);

  // Styles
  const buttonStyle = { marginRight: 5 };
  // JSX Elements
  const AddButton = (
    <Button style={buttonStyle} variant="primary" type="submit">
      Add
    </Button>
  );

  const EditingActionButtons = (
    <div>
      <Button
        style={buttonStyle}
        variant="danger"
        onClick={() => {
          DeleteExpense(dispatch, expense!);
        }}
      >
        Delete
      </Button>
      <Button
        // style={{ ...buttonStyle, ...{ marginLeft: 4, marginRight: 4 } }}
        style={buttonStyle}
        variant="success"
        type="submit"
      >
        Save
      </Button>
      <Button
        variant="default"
        style={{ ...buttonStyle, ...{ color: "White" } }}
        onClick={() => {
          if (setIsEditing) setIsEditing(false);
        }}
      >
        Cancel
      </Button>
    </div>
  );

  // Event Handlers
  const handleDescChange = (ev?: any) => {
    setDescription(ev.target.value);
  };

  const handleAmountChange = (ev?: any) => {
    setAmount(ev.target.value);
  };

  const handleSubmit = (ev?: any) => {
    ev.preventDefault();
    if (isNewExpense) {
      NewExpense(dispatch, { description: description!, amount: amount });
      setAmount(0);
      setDescription("");
    } else {
      // Update an existing Expense
      if (setIsEditing && expense) {
        UpdateExpense(dispatch, {
          id: expense.id!,
          description: description!,
          amount: amount,
        });
        setIsEditing(false);
      }
    }
  };

  useEffect(() => {
    console.log("Expense", expense);
    if (expense) {
      setIsNewExpense(false);
      setAmount(expense.amount);
      setDescription(expense.description);
    } else {
      setIsNewExpense(true);
    }
  }, [expense]);
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            onChange={handleDescChange}
            value={description}
          />
        </Col>

        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder={amount.toString()}
            onChange={handleAmountChange}
          />
        </Col>

        <Col style={{ marginTop: "auto" }}>
          {isNewExpense && AddButton}
          {!isNewExpense && EditingActionButtons}
        </Col>
      </Row>
    </Form>
  );
};
