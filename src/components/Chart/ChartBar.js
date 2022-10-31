import './ChartBar.css';

import PropTypes from 'prop-types';

const ChartBar = ({
  label,
  maxValue,
  value,
}) => {
  let barFillHeight = '%';

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

ChartBar.propTypes = {
  label: PropTypes.string.isRequired,
  maxValue: PropTypes.number,
  value: PropTypes.number.isRequired,
};

ChartBar.defaultProps = {
  maxValue: null,
};

export default ChartBar;
