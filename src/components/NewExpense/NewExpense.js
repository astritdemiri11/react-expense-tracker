import './NewExpense.css';

import PropTypes from 'prop-types';
import { useState } from 'react';

import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [opened, setOpened] = useState(false);
  const saveExpenseHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };

    if (onAddExpense) {
      onAddExpense(expense);
    }

    setOpened(false);
  };

  const openExpenseHandler = () => {
    setOpened(true);
  };

  const cancelExpenseHandler = () => {
    setOpened(false);
  };

  return (
    <div className="new-expense">
      {!opened && <button type="button" onClick={openExpenseHandler}>Add New Expense</button>}
      {opened && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancelExpense={cancelExpenseHandler}
        />
      )}
    </div>
  );
};

NewExpense.propTypes = {
  onAddExpense: PropTypes.func,
};

NewExpense.defaultProps = {
  onAddExpense: null,
};

export default NewExpense;
