import React, { useState } from 'react';
import { css } from '@emotion/react';

const formStyle = css`
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  label {
    display: block;
    margin-bottom: 10px;
  }

  select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const AssignEmployeeForm = ({ onAssign, stations, employees }) => {
  const [stationId, setStationId] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const handleAssign = () => {
    if (stationId && employeeId) {
      onAssign(stationId, employeeId);
    }
  };

  return (
    <div css={formStyle} className="employee-form">
      <label htmlFor="station">Select Station:</label>
      <select
        id="station"
        value={stationId}
        onChange={(e) => setStationId(e.target.value)}
      >
        <option value="">Select a Station</option>
        {stations.map(station => (
          <option key={station.id} value={station.id}>
            {station.id}
          </option>
        ))}
      </select>
      <label htmlFor="employee">Select Employee:</label>
      <select
        id="employee"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        <option value="">Select an Employee</option>
        {employees.map(employee => (
          <option key={employee.id} value={employee.id}>
            {employee.name}
          </option>
        ))}
      </select>
      <button onClick={handleAssign}>Assign</button>
    </div>
  );
};

export default AssignEmployeeForm;
