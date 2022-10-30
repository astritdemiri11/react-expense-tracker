import './ExpenseItem.css';

import PropTypes from 'prop-types';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ date, title, amount }) => (
  <li>
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          $
          {amount}
        </div>
      </div>
    </Card>
  </li>
);

ExpenseItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ExpenseItem;
