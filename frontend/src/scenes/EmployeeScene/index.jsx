import React from 'react';
import EmployeeChart from '../../components/EmployeeChart';

const EmployeeScene = () => {
  return (
    <div>
      <EmployeeChart
        data={{
          labels: ['Employee A', 'Employee B'],
          datasets: [
            {
              label: 'Assignments',
              data: [3, 2],
            },
          ],
        }}
      />
    </div>
  );
};

export default EmployeeScene;
