import React, { useState, useEffect } from 'react';

const StationsUI = ({ stations, onStationClick }) => {
  const [localStations, setLocalStations] = useState(stations);

  useEffect(() => {
    setLocalStations(stations);
  }, [stations]);

  useEffect(() => {
    const updateStations = () => {
      setLocalStations([...stations]);
    };

    document.addEventListener('updateStations', updateStations);

    return () => {
      document.removeEventListener('updateStations', updateStations);
    };
  }, [stations]);

  const handleStationClick = (station) => {
    if (onStationClick) {
      onStationClick(station);
    }
  };

  return (
    <div className="warehouse-grid">
      {localStations.map(station => (
        <div
          key={station.id}
          className={`station ${station.assigned ? 'assigned' : 'unassigned'}`}
          onClick={() => handleStationClick(station)}
        >
          <div className="status-indicator"></div>
          {station.id}
        </div>
      ))}
    </div>
  );
};

export default StationsUI;
