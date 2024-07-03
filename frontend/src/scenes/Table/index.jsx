// src/scenes/Table/index.jsx
import React from 'react';
import TableUI from '../../components/TableUI';
import { mockData } from '../../data/mockData';

const Table = () => {
  return (
    <TableUI stations={mockData.stations} />
  );
};

export default Table;
