// src/MovableWarehouseStations.js

import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import WarehouseStations from './WarehouseStations';
import './MovableWarehouseStations.css';

const MovableWarehouseStations = ({ stations }) => {
  return (
    <Draggable>
      <ResizableBox
        width={600}
        height={400}
        minConstraints={[300, 200]}
        maxConstraints={[800, 600]}
        className="resizable-box"
      >
        <div className="movable-container">
          <WarehouseStations stations={stations} />
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default MovableWarehouseStations;
