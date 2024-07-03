// src/scenes/Stations/index.jsx
import React, { useState } from 'react';
import StationsUI from '../../components/StationsUI';
import { mockData } from '../../data/mockData';

const Stations = () => {
  const [stations, setStations] = useState(mockData.stations);

  const handleStationClick = (station) => {
    console.log(station);
  };

  return (
    <StationsUI stations={stations} onStationClick={handleStationClick} />
  );
};

export default Stations;
