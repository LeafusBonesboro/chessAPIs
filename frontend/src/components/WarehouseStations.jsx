/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const containerStyle = css`
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 columns */
  gap: 10px;
`;

const stationStyle = (assigned) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${assigned ? '#d4edda' : '#f8d7da'}; /* Green for assigned, red for unassigned */
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  .status-indicator {
    width: 10px;
    height: 10px;
    background-color: ${assigned ? '#28a745' : '#dc3545'}; /* Green for assigned, red for unassigned */
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  p {
    margin: 0;
    font-weight: bold;
  }

  .unassign {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #c82333;
    }
  }
`;

const WarehouseStations = ({ stations, onStationClick }) => {
  return (
    <div css={containerStyle}>
      <h2>Warehouse Stations</h2>
      <div css={gridStyle}>
        {stations.map(station => (
          <div
            key={station.id}
            css={stationStyle(station.assigned)}
            onClick={() => onStationClick(station)}
          >
            <div className="status-indicator" />
            <p>{station.id}</p>
            {station.assigned && <button className="unassign" onClick={() => onStationClick(station)}>Unassign</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarehouseStations;
