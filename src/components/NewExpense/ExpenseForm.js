import './ExpenseForm.css';

import PropTypes from 'prop-types';
import { useState } from 'react';

const ExpenseForm = ({ onSaveExpense, onCancelExpense }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  // const [formInputs, setFormInputs] = useState({
  //   inputTitle: '',
  //   inputAmount: '',
  //   inputDate: '',
  // });

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
    // setFormInputs((prevState) => ({
    //   ...prevState,
    //   inputTitle: event.target.value,
    // }));
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    // setFormInputs((prevState) => ({
    //   ...prevState,
    //   inputAmount: event.target.value,
    // }));
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setFormInputs((prevState) => ({
    //   ...prevState,
    //   inputDate: event.target.value,
    // }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };

    setInputTitle('');
    setInputAmount('');
    setInputDate('');

    if (onSaveExpense) {
      onSaveExpense(expenseData);
    }
  };

  const cancelHandler = () => {
    setInputTitle('');
    setInputAmount('');
    setInputDate('');

    if (onCancelExpense) {
      onCancelExpense();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">
            Title
            <input id="title" type="text" onChange={titleChangeHandler} value={inputTitle} />
          </label>
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">
            Amount
            <input id="amount" type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={inputAmount} />
          </label>
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">
            Date
            <input id="date" type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={inputDate} />
          </label>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  onSaveExpense: PropTypes.func,
  onCancelExpense: PropTypes.func,
};

ExpenseForm.defaultProps = {
  onSaveExpense: null,
  onCancelExpense: null,
};

export default ExpenseForm;
