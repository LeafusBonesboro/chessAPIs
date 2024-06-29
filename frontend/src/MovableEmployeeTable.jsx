import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import EmployeeTable from './EmployeeTable';
import './MovableEmployeeTable.css'; // Ensure this path is correct

const MovableEmployeeTable = ({ stations }) => {
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
          <EmployeeTable stations={stations} />
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default MovableEmployeeTable;

