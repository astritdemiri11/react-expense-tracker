import './Expenses.css';

import PropTypes from 'prop-types';
import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFIlter';
import ExpensesList from './ExpensesList';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState(2020);
  const filteredItems = items.filter(
    (item) => item.date.getFullYear() === filteredYear,
  );

  const changeFilterHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
        <ExpensesChart items={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

Expenses.propTypes = {
  items: PropTypes.instanceOf(Object).isRequired,
};

export default Expenses;
