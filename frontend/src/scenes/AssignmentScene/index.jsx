import React, { useState, useEffect } from 'react';
import AssignmentChart from '../../components/AssignmentChart';
import EmployeeTable from '../../components/EmployeeTable';
import AssignEmployeeForm from "../assign/AssignEmployeeForm";
import WarehouseStations from '../../components/WarehouseStations';
import StationModal from '../assign/StationModal';

const AssignmentScene = () => {
  const [stations, setStations] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    // Fetch stations and employees from an API or initialize here
    setStations([
      // Mock data
      { id: '1', assigned: false },
      { id: '2', assigned: true, employee: { id: '101', name: 'John Doe' } }
    ]);

    setEmployees([
      // Mock data
      { id: '101', name: 'John Doe' },
      { id: '102', name: 'Jane Smith' }
    ]);
  }, []);

  useEffect(() => {
    setFilteredEmployees(
      employees.filter(employee => employee.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, employees]);

  const handleAssignEmployee = (stationId, employeeId) => {
    // Handle employee assignment logic
  };

  const handleDeleteAssignment = (stationId) => {
    // Handle deletion logic
    setStations(stations.map(station =>
      station.id === stationId ? { ...station, assigned: false, employee: null } : station
    ));
  };

  const handleStationClick = (station) => {
    setSelectedStation(station);
  };

  const handleModalClose = () => {
    setSelectedStation(null);
  };

  return (
    <div>
      <WarehouseStations stations={stations} onStationClick={handleStationClick} />
      <AssignEmployeeForm 
        onAssign={handleAssignEmployee}
        stations={stations.filter(station => !station.assigned)}
        employees={employees}
      />
      <EmployeeTable 
        filteredEmployees={filteredEmployees}
        onDelete={(stationId) => handleDeleteAssignment(stationId)}
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
      />
      {selectedStation && (
        <StationModal
          isOpen={Boolean(selectedStation)}
          closeModal={handleModalClose}
          selectedStation={selectedStation}
          handleDeleteAssignment={handleDeleteAssignment}
        />
      )}
      <AssignmentChart
        data={{
          labels: ['Station 1', 'Station 2'],
          datasets: [
            {
              label: 'Assignments',
              data: [1, 2],
            },
          ],
        }}
      />
    </div>
  );
};

export default AssignmentScene;
