import './ExpensesFilter.css';

import PropTypes from 'prop-types';
import { useState } from 'react';

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const [stateSelected, setSelected] = useState(selected);

  const dropdownChangeHandler = (event) => {
    const { value } = event.target;

    setSelected(value);

    if (onChangeFilter) {
      onChangeFilter(+value);
    }
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="date">
          Filter by year
          <select id="date" value={stateSelected} onChange={dropdownChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </label>
      </div>
    </div>
  );
};

ExpensesFilter.propTypes = {
  selected: PropTypes.number,
  onChangeFilter: PropTypes.func,
};

ExpensesFilter.defaultProps = {
  selected: new Date().getFullYear(),
  onChangeFilter: null,
};

export default ExpensesFilter;
