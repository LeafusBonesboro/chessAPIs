import React from 'react';
import EmployeeChart from '../../components/EmployeeChart';  // Assuming you have an EmployeeChart component
import AssignmentChart from '../../components/AssignmentChart';  // Assuming you have an AssignmentChart component

const Charts = () => {
  return (
    <div>
      <h1>Charts</h1>
      <EmployeeChart />
      <AssignmentChart />
    </div>
  );
};

export default Charts;
