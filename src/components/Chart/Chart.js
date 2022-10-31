import './Chart.css';

import PropTypes from 'prop-types';

import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  const totalMaximum = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

Chart.propTypes = {
  dataPoints: PropTypes.instanceOf(Object).isRequired,
};

export default Chart;
