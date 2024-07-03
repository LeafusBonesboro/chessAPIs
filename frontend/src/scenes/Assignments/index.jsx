// src/scenes/Assignments/index.jsx
import React, { useState } from 'react';
import AssignmentsUI from '../../components/AssignmentsUI';
import { mockData } from '../../data/mockData';

const Assignments = () => {
  const [stations, setStations] = useState(mockData.stations);

  return (
    <AssignmentsUI stations={stations} setStations={setStations} />
  );
};

export default Assignments;
