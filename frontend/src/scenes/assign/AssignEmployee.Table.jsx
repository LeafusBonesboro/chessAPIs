import React from 'react';
import './EmployeeTable.css';

const EmployeeTable = ({ filteredEmployees, handleDeleteAssignment }) => (
  <table className="employee-table">
    <thead>
      <tr>
        <th>Employee ID</th>
        <th>Employee Name</th>
        <th>Station ID</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {filteredEmployees.map(station => (
        <tr key={station.id}>
          <td>{station.employee.id}</td>
          <td>{station.employee.name}</td>
          <td>{station.id}</td>
          <td>
            <button className="delete-button" onClick={() => handleDeleteAssignment(station.id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EmployeeTable;
