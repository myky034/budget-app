import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [show, setShow] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShow(false);
  };

  const isShow = () => {
    setShow(true);
  };

  const cancelHandler = () => {
    setShow(false);
  };

  return (
    <>
      {show ? (
        ""
      ) : (
        <div className="new-expense">
          <button onClick={isShow}>Add Expense</button>
        </div>
      )}

      {show && (
        <div className="new-expense">
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={cancelHandler}
          />
        </div>
      )}
    </>
  );
};

export default NewExpense;
