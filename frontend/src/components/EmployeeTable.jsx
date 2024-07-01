import React from 'react';

const EmployeeTable = ({ filteredEmployees, onDelete, searchQuery, onSearchChange }) => {
  return (
    <div className="employee-table-container">
      <h2>Employee Assignments</h2>
      <input 
        type="text" 
        placeholder="Search employees..." 
        value={searchQuery} 
        onChange={onSearchChange} 
        className="search-input" 
      />
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
                <button className="delete-button" onClick={() => onDelete(station.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
