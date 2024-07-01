import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const EmployeeChart = ({ data }) => {
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
        text: 'Employee Chart',
      },
    },
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default EmployeeChart;
