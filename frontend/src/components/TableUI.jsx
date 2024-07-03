import React from 'react';

const TableUI = ({ stations }) => {
  return (
    <div className="employee-table-container">
      <h2>Employee Assignments</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Station ID</th>
          </tr>
        </thead>
        <tbody>
          {stations
            .filter(station => station.assigned)
            .map(station => (
              <tr key={station.id}>
                <td>{station.employee.id}</td>
                <td>{station.employee.name}</td>
                <td>{station.id}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUI;
