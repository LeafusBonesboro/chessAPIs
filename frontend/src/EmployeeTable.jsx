// src/EmployeeTable.js

import React from 'react';
import { mockData } from './data/mockData';

const EmployeeTable = ({ stations }) => {
  // Map employees to find their assigned station
  const employeesWithStations = mockData.employees.map(employee => {
    const assignedStation = stations.find(station => station.employee && station.employee.id === employee.id);
    return {
      ...employee,
      stationId: assignedStation ? assignedStation.id : 'Not Assigned'
    };
  });

  return (
    <div className="employee-table-container">
      <h2>Employee Assignment Table</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Station ID</th>
          </tr>
        </thead>
        <tbody>
          {employeesWithStations.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.stationId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
