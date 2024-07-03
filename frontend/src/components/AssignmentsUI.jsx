// src/components/AssignmentsUI.jsx
import React from 'react';
import { mockData } from '../data/mockData';

const AssignmentsUI = ({ stations, setStations }) => {
  const selectRandomEmployee = () => {
    const unassignedEmployees = mockData.employees.filter(emp => !emp.assigned);
    if (unassignedEmployees.length === 0) return;

    const randomIndex = Math.floor(Math.random() * unassignedEmployees.length);
    const employee = unassignedEmployees[randomIndex];
    // Call some function or handle this employee
  };

  const selectRandomStation = () => {
    const unassignedStations = stations.filter(station => !station.assigned);
    if (unassignedStations.length === 0) return;

    const randomStation = unassignedStations[Math.floor(Math.random() * unassignedStations.length)];
    // Call some function or handle this station
  };

  const handleAssignEmployee = (stationId, employeeId) => {
    const updatedStations = stations.map(station => {
      if (station.id === stationId) {
        return {
          ...station,
          assigned: true,
          employee: mockData.employees.find(emp => emp.id === parseInt(employeeId)),
        };
      }
      return station;
    });
    setStations(updatedStations);
    document.dispatchEvent(new Event('updateStations'));
  };

  const handleAssignRandomStation = () => {
    const unassignedStations = stations.filter(station => !station.assigned);
    if (unassignedStations.length === 0) {
      alert('No unassigned stations available!');
      return;
    }

    const station = unassignedStations[Math.floor(Math.random() * unassignedStations.length)];
    const employee = mockData.employees.find(emp => !stations.some(station => station.employee?.id === emp.id));
    if (!employee) {
      alert('No available employees!');
      return;
    }

    handleAssignEmployee(station.id, employee.id);
  };

  return (
    <div className="assignment-handler">
      <div className="form-container">
        <h2>Assign Employee to Station</h2>
        <button onClick={selectRandomEmployee}>Scan Badge</button>
        <button onClick={selectRandomStation}>Select Random Station</button>
        <label htmlFor="station">Select Station:</label>
        <select
          id="station"
          onChange={(e) => setSelectedStation(e.target.value)}
        >
          <option value="">Select a Station</option>
          {stations.map(station => (
            <option key={station.id} value={station.id}>
              {station.id}
            </option>
          ))}
        </select>
        <button onClick={handleAssignRandomStation}>Assign Random Station</button>
      </div>
    </div>
  );
};

export default AssignmentsUI;
