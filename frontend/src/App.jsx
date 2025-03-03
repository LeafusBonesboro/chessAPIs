import React, { useState } from 'react';
import WarehouseStations from './WarehouseStations';
import AddEmployeeToStationForm from './AddEmployeeToStationForm';
import { mockData } from './data/mockData';
import './App.css';
import Modal from 'react-modal';

// Ensure Modal is configured to use the correct root element
Modal.setAppElement('#root');

function App() {
  const [stations, setStations] = useState(mockData.stations);
  const [selectedStation, setSelectedStation] = useState(null);

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
    // Dispatch an event to update the WarehouseStations component
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

  const openModal = (station) => {
    setSelectedStation(station);
  };

  const closeModal = () => {
    setSelectedStation(null);
  };

  return (
    <div className="App">
      <div className="main-content">
        <div className="sidebar">
          <AddEmployeeToStationForm onAssign={handleAssignEmployee} />
          <button onClick={handleAssignRandomStation}>Assign Random Station</button>

          {/* Station Detail Modal */}
          {selectedStation && (
            <Modal
              isOpen={!!selectedStation}
              onRequestClose={closeModal}
              className="modal-content"
              overlayClassName="modal-overlay"
              contentLabel={`Station ${selectedStation.id}`}
            >
              <h2>Station {selectedStation.id}</h2>
              <p>{selectedStation.assigned ? `Assigned to ${selectedStation.employee.name}` : 'Unassigned'}</p>
              <button onClick={closeModal}>Close</button>
            </Modal>
          )}
        </div>
        <div className="form-container">
          <WarehouseStations stations={stations} onStationClick={openModal} />
        </div>
        <div className="table-container">
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
        </div>
      </div>
    </div>
  );
}

export default App;
