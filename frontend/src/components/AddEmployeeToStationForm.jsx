// src/components/AddEmployeeToStationForm.jsx

import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mockData';

const AddEmployeeToStationForm = ({ onAssign }) => {
  const [selectedStation, setSelectedStation] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState(mockData.employees);
  const [availableEmployees, setAvailableEmployees] = useState(mockData.employees);

  useEffect(() => {
    setAvailableEmployees(employees.filter(emp => !emp.assigned));
  }, [employees]);

  const selectRandomEmployee = () => {
    const unassignedEmployees = availableEmployees.filter(emp => !emp.assigned);
    if (unassignedEmployees.length === 0) return;

    const randomIndex = Math.floor(Math.random() * unassignedEmployees.length);
    const employee = unassignedEmployees[randomIndex];
    setSelectedEmployee(employee);
  };

  const selectRandomStation = () => {
    if (availableEmployees.length === 0) return;  // Ensure there are employees available
    const randomStationId = mockData.stations[Math.floor(Math.random() * mockData.stations.length)].id;
    setSelectedStation(randomStationId);
  };

  const handleAssign = () => {
    if (selectedStation && selectedEmployee) {
      onAssign(selectedStation, selectedEmployee.id);
      setAvailableEmployees(prev => prev.filter(emp => emp.id !== selectedEmployee.id)); // Remove the selected employee from available list
      setSelectedEmployee(null);  // Reset the selected employee
    }
  };

  return (
    <div className="form-container">
      <h2>Assign Employee to Station</h2>
      <button onClick={selectRandomEmployee}>Scan Badge</button>
      <button onClick={selectRandomStation}>Select Random Station</button>
      {selectedEmployee && (
        <div className="selected-employee">
          <p>Selected Employee: {selectedEmployee.name}</p>
          <button onClick={handleAssign}>Assign to Station</button>
        </div>
      )}
      <label htmlFor="station">Select Station:</label>
      <select
        id="station"
        value={selectedStation}
        onChange={(e) => setSelectedStation(e.target.value)}
      >
        <option value="">Select a Station</option>
        {mockData.stations.map(station => (
          <option key={station.id} value={station.id}>
            {station.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddEmployeeToStationForm;
