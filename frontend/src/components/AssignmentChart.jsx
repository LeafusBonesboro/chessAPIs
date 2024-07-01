import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, LineElement, PointElement, LineController, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Title, Tooltip, Legend);

const AssignmentChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  if (!data || !data.labels) {
    return <div>Error: Invalid data format</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Assignment Chart',
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
};

export default AssignmentChart;
